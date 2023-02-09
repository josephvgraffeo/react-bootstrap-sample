import Button from "react-bootstrap/Button";

export default function Content() {
    return(
        <>
            <h2>This is content</h2>
            <Button variant="outline-primary" size="lg">Login</Button>
            <Button variant="outline-primary" size="lg" active>Active Button</Button>
            <Button variant="outline-primary" size="lg" disabled>Recover Password</Button>
        </>
    )
}