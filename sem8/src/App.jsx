import { useState, useEffect } from 'react'
import './App.css'
import { getUsers } from './services/web'

function App() {

  const [users, setUsers] = useState([
    {
        "id": 1,
        "name": "Yan",
        "email": "yan.m.esteves@gmail.com"
    },
    {
        "id": 2,
        "name": "João",
        "email": "joao.coelho@gmail.com"
    }
  ]
)

  useEffect(() => {
     // EXECUTA ALGO NO INICIO DO COMPONENTE 
     console.log('componente iniciado App.jsx')
     async function fetchData() {
       const response = await getUsers()
      //  console.log(response)
       setUsers(response)
     }
     fetchData();
   }, []) 
  //  useEffect com uma dependência vazio 
 
   return (
     <>
       <ul>
         {users.map(user => <li key={user.id}>{user.name} ({user.email})</li>)}
         {/* <li>Nome (email)</li> */}
         {/* <li>Yan Esteves (yan.m.esteves@gmail.com)</li>
         <li>Joao Coelho (joao.coelho@gmail.com)</li> */}
       </ul>
     </>
   )
 }

export default App
