import { Container } from "react-bootstrap";
import Perfil from "../../components/Perfil/Perfil";
import Publicacoes from "../../components/Publicacoes/Publicacoes";
import './HomePage.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function HomePage() {
    return (
        <div className="page">
            
            <Container>
            <Row>
                <Col>
                    <Row>
                        <Perfil/>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Publicacoes/>
                    </Row>
                    <Row>
                        <Publicacoes/>
                    </Row>
                    <Row>
                        <Publicacoes/>
                    </Row>
                    <Row>
                        <Publicacoes/>
                    </Row>
                    <Row>
                        <Publicacoes/>
                    </Row>
                    <Row>
                        <Publicacoes/>
                    </Row>
                    <Row>
                        <Publicacoes/>
                    </Row>
                    <Row>
                        <Publicacoes/>
                    </Row>
                    <Row>
                        <Publicacoes/>
                    </Row>
                    <Row>
                        <Publicacoes/>
                    </Row>
                </Col>
            </Row>
            </Container>
            
            
            
        </div>

    );
}

export default HomePage;