import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import { useState } from "react"
import "./styles/layout.css"

export default function Layout() {
    const [show, setShow] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleFullscreen = () => setFullscreen(!fullscreen);

    return(
        <Container fluid>
            <Row>
                <Col><h1>Page Title</h1></Col>
            </Row>
            <Row>
                <Col sm={6}>Col 1</Col>
                <Col sm={6}>Col 2</Col>
                <Col>Col 3</Col>
            </Row>

            <Row>
                <Col>
                    <Button variant="success" onClick={handleShow}>
                        Launch Modal
                    </Button>
                </Col>
            </Row>

            <Row>
                <Col>
                    <img onClick={handleShow} width="250px" height="250px" src="https://imgs.search.brave.com/BhWxPPAj1OqjBLXobFjxUuZedP-bjuaffBY9Gf1g5IY/rs:fit:1000:1000:1/g:ce/aHR0cHM6Ly93d3cu/cG9seW10bC5jYS9j/YWxlbmRyaWVyL3Np/dGVzL2NhbGVuZHJp/ZXIuYW1pZ293MjAy/MC5wb2x5bXRsLmNh/L2ZpbGVzL2dvb2ds/ZWxvZ28uanBn" />
                </Col>
            </Row>

            <Row>
                <Col>

                    <Modal show={show} onHide={handleClose} fullscreen={fullscreen}>

                        <Modal.Header>
                            <Modal.Title>This is a video</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <iframe width="100%" height="90%" src="https://www.youtube.com/embed/Ha2UW8a0Vzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="danger" onClick={handleClose}>Close</Button>
                            <Button variant="danger" onClick={handleFullscreen}>Toggle Fullscreen</Button>
                        </Modal.Footer>

                    </Modal>

                </Col>
            </Row>
        </Container>

    )
}