import './Publicacoes.css'
import imgEle from "../../imgs/eletronica.jpeg"
import { Container } from 'react-bootstrap';

function ImgOverlayExample() {
  return (
    <Container>
      <div className='publicacao-container'>
          <img src={imgEle} className='img-publicacao'></img>
        <h3>Titulo do card</h3>
        <div className='data-publicacao'>
          <p>jan 30, 2023 | <a>Link</a></p>
        </div>
        <p className='sumario'>Donec id velit quis orci egestas tincidunt. Proin convallis diam sit amet 
        ante sagittis tristique. Praesent vitae tristique felis. Pellentesque rutrum ex non porttitor auctor.
        Nunc in lorem pretium, fermentum enim id, viverra metus. Vivamus eget sem quis tortor cursus pretium 
        sed et mauris. <a href='' className='read_more'>Read more...</a></p>
        
      </div>
    </Container>
  );
}

export default ImgOverlayExample;