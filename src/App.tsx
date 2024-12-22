import CustomNavbar from "./CustomNavbar.tsx";
import FingerprintInfo from "./Fingerprint.tsx";
import Container from "react-bootstrap/Container";


function App() {

  return <Container fluid className="p-0">
    <CustomNavbar />
    <Container fluid>
      <FingerprintInfo/>
    </Container>
  </Container>
}

export default App
