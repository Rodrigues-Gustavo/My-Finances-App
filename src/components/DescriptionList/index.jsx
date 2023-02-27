import DescriptionListItem from '../DescriptionListItem'
import * as C from './style'

export const DescriptionList = ({ items, setItems}) => {
  return (
    <C.Table>
      <C.Thead>
        <C.Tr>
          <C.Th width={40}>Descrição</C.Th>
          <C.Th width={40}>Valor</C.Th>
          <C.Th width={10} alignCenter>Tipo</C.Th>
          <C.Th width={10}></C.Th>
        </C.Tr>
      </C.Thead>
      <C.Tbody>
        {items?.map((item,index) => (
          <DescriptionListItem key={index} item={item}/>
        ))}
      </C.Tbody>
    </C.Table>
  )
}
