import Nav from "react-bootstrap/Nav";

export default function NavMain() {
    return (
        <Nav className="justify-content-center">

            <Nav.Item>
                <Nav.Link href="/home">
                    Home
                </Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link href="/about">
                    About
                </Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link href="/portfolio">
                    Portfolio
                </Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link href="/contact">
                    Contact
                </Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link href="/login" disabled>
                    Login
                </Nav.Link>
            </Nav.Item>

        </Nav>
    )
}