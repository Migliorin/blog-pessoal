import Paginacao from "../../components/Paginacao/Paginacao";
import Perfil from "../../components/Perfil/Perfil";
import Publicacoes from "../../components/Publicacoes/Publicacoes";
import './HomePage.css';
import imgEle from "../../imgs/eletronica.jpeg"
import imgIa from "../../imgs/ia.jpeg"

function HomePage() {
    return (
        <div className="page">

            <div className="container-perfil">
                <Perfil />
            </div>
            <div className="container-publicacoes">
                <Publicacoes 
                texto="Donec id velit quis orci egestas tincidunt. Proin convallis diam sit amet 
        ante sagittis tristique. Praesent vitae tristique felis. Pellentesque rutrum ex non porttitor auctor.
        Nunc in lorem pretium, fermentum enim id, viverra metus. Vivamus eget sem quis tortor cursus pretium 
        sed et mauris."
                data="jan 30, 2023"
                titulo="Teste do card"
                img={imgEle}
                />
                <Publicacoes 
                texto="A inteligencia artificial avançou bastante desde a ultima decada."
                data="fev 8, 2023"
                titulo="Novo teste de card"
                img={imgIa}
                />
                <Paginacao/>
            </div >
        </div>

    );
}

export default HomePage;