import Pagination from 'react-bootstrap/Pagination';
import "./Paginacao.css"

let active = 1;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

export default function Paginacao (){
    return (
        <Pagination className='paginacao-publicacoes'>{items}</Pagination>
        
    );
};