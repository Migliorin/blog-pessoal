import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './Perfil.css'
import imgEu from "../../imgs/eu.jpg"

export default function Perfil() {
    return (

        <Card className='card'>
            <img
                src={imgEu}
                className='img-fluid rounded-pill img'
                alt=''
            />
            <Card.Body>

                <Card.Subtitle className="mb-2 text-muted">Estudante</Card.Subtitle>
                <Card.Text>
                    Denali is a simple responsive blog template. Easily add new posts using the Editor or change layout and design using the Designer.
                </Card.Text>
                <div className='retacinza'></div>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
    );
};