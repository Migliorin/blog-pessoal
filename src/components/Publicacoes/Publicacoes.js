import './Publicacoes.css'
import imgEle from "../../imgs/eletronica.jpeg"
import { Container } from 'react-bootstrap';

function ImgOverlayExample(props) {
  return (
    <Container>
      <div className='publicacao-container'>
          <img src={props.img} className='img-publicacao'></img>
        <h3>{props.titulo}</h3>
        <div className='data-publicacao'>
          <p>{props.data} | <a>Link</a></p>
        </div>
        <p className='sumario'>{props.texto}<a href='' className='read_more'>Read more...</a></p>
        
      </div>
    </Container>
  );
}

export default ImgOverlayExample;