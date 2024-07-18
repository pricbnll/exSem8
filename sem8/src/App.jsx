import { useEffect } from 'react'
import './App.css'

function App() {


  useEffect(() => {
    // EXECUTA ALGO NO INICIO DO COMPONENTE
    console.log('componente iniciado App.jsx')

  }, [])

  return (
    <>
      <ul>
        <li>Yan Esteves (yan.m.esteves@gmail.com)</li>
        <li>Joao Coelho (joao.coelho@gmail.com)</li>
      </ul>
    </>
  )
}

export default App
