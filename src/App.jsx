import Form from "./components/form/Form";
import Card from "./components/card/Card";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

function App() {

  const [agente, setAgente] = useState()
  const [showCard, setShowCard] = useState(false)

  const handleSubmit = (values) => {
    setAgente({data: values})
    setShowCard(true)
  }

  return (
    <div className="App">
          <h1>Agente Secreto Card</h1>
          <div class="d-flex mlr-15p gap-20">
            <Form onSubmit={handleSubmit}></Form>
            { showCard ? (
              <div>
              <Card agente={agente}></Card>
            </div>
            ):('')
            }
          </div>
          <Footer></Footer>
    </div>
  );
}

export default App;