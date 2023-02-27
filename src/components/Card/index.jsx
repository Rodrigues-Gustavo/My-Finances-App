import { CardItem } from '../CardItem';
import * as C from './style';
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaDollarSign} from 'react-icons/fa';

export const Card = ({ income, expense, total }) => {
  return (
    <C.Container>
        <CardItem title="Entrada" Icon={FaRegArrowAltCircleUp} value={income} />
        <CardItem title="Saída" Icon={FaRegArrowAltCircleDown } value={expense} />
        <CardItem title="Total" Icon={FaDollarSign} value={total} />
    </C.Container>
  )
}
