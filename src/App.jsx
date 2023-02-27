import React, {useState, useEffect} from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { Header } from './components/Header'
import { Card } from './components/Card'
import { Form } from './components/Form'

const App = () => {
  const data = localStorage.getItem("transactions");
  const [transactionsList, setTransactionList] = useState(
    data ? JSON.parse(data) : []
  );
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const amountExpense = transactionsList
    .filter((item) => item.expense)
    .map((transction) => Number(transction.amount));

    const amountIncome = transactionsList
    .filter((item) => !item.expense)
    .map((trasaction) => Number(trasaction.amount));

    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const total = Math.abs(income - expense).toFixed(2);

    setIncome(`R$ ${income}`);
    setExpense(`R$ ${expense}`);
    setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`)
  }, [transactionsList]);

  const handleAdd = (transction) => {
    const newArrayTransactions = [...transactionsList, transction];

    setTransactionList(newArrayTransactions);

    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
  };


  return (
    <>
      <GlobalStyles />
      <Header />
      <Card income={income} expense={expense} total={total} />
      <Form handleAdd={handleAdd} transactionsList={transactionsList} setTransactionList={setTransactionList}/>
    </>
  )
}

export default App