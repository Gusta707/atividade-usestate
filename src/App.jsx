import { useState } from "react"

export function App() {
  const [numero, setNumero] = useState(100)
  const [mostrarEsconder, setMostrarEsconder] = useState(false)

  function handleAumentar() {
    setNumero(numero + 100)
  }

  function handleMostrarEsconder() {
    mostrarEsconder ? setMostrarEsconder(false) : setMostrarEsconder(true)
  }


  return (
    <main>
      <h1>Numeros e mais numeros...</h1>

      <section>
        <h2>O número da variável é: {numero}</h2>

        <button onClick={handleAumentar}>Aumentar 100</button>
      </section>

      <section>
        <h2>Batalha final</h2>
        {mostrarEsconder ? <p> Dollynho vs Corotinho </p> : "" }

        <button onClick={handleMostrarEsconder}>{mostrarEsconder ? "Esconder" : "Mostrar"}</button>
      </section>
    </main>
  )
}