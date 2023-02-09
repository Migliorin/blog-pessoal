import Paginacao from "../../components/Paginacao/Paginacao";
import Perfil from "../../components/Perfil/Perfil";
import Publicacoes from "../../components/Publicacoes/Publicacoes";
import './HomePage.css';

function HomePage() {
    return (
        <div className="page">

            <div className="container-perfil">
                <Perfil />
            </div>
            <div className="container-publicacoes">
                <Publicacoes />
                <Publicacoes />
                <Publicacoes />
                <Paginacao/>
            </div >
        </div>

    );
}

export default HomePage;