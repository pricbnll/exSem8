## MÓDULO2 semana 8

# 🚦 Exercícios do Trello e em aula

Este repositório é para minha prática e resolução dos exercícios proposto pelo professore durante o **semana8** no curso **FuturoDev trilha TRIP** o qual estou inserida a desenvolver neste curso ofertado pelo **FloripaMaisTech** com a Lab365, Senai e Acate/SC.

### SEMANA 8 **com a professora Yan Esteves** 
  - Recapitulando (Hooks)   
  - UseState
  - UseEffect
  - SPA
  - React Router-DOM (npm i react-router-dom) 
    -suporta rotas dinâmicas
  - Link (https://reactrouter.com/en/main/components/link)
  
## Rodar o projeto

Para rodar pelo no terminal, digite os comandos:

```
npm create vite@latest
    Coloque um nome de pasta (project-name) que será criado.
    Escolha:
    - React
    - JavaScript

sudo npm install
sudo npm run dev

ps. Se estiver no MAC coloque sudo antes do npm
```

Assim aparecerá a url que renderizirá seu projeto no browser:

```
react-trip@0.0.0 dev vite

Re-optimizing dependencies because vite config has changed

VITE v5.3.2 ready in 168 ms
➜ Local: http://localhost:5173/ -----> este é a url para acessar o projeto na rede.
➜ Network: use --host 
to expose ➜ press h + enter to show help
```

Se quiser trocar de porta:

```
// vite.config.js
export default {
  server: {
    port: 8080  // definir a porta para 8080
  }
}
```

Componentes Bootstrap:

```
sudo npm install bootstrap@5.3.3
import 'bootstrap/dist/css/bootstrap.min.css'
importação no arquivo main.jsx
```

Rodar no terminal:

```
sudo npm install -g json-server
```

---------> Criar pasta services dentro da pasta src> web.js


AULA1
```
export async function getUsers() {
    // console.log('getUsers::deu certo')
    const response = await fetch('http://localhost:3000/users', { method: 'GET' })
    const data = await response.json()
    //  console.log(response) 
    getUsers(response)

    return data
}
```

---------> Criar pasta > db.json

```
{
  "users": [
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
  ],
  "bicicletas": [
      {
          "id": 1,
          "model": "Nimbus"
      }
  ]
}
```

Rodar no terminal: 

```
npx json-server db.json
```

Aparece no console:

```
JSON Server started on PORT :3000
Press CTRL-C to stop
Watching db.json...

♡( ◡‿◡ )

Index:
http://localhost:3000/

Static files:
Serving ./public directory if it exists

Endpoints:
http://localhost:3000/users
<!-- http://localhost:3000/bicicletas -->
```

A tela ficará assim : http://localhost:5173/

<img src='./sem8/src/assets/Tela localhost3000 npx json-server dbjson.png'>


---------> Na pasta ja criada > app.jsx

Ps: Delete tags, imports, variáveis criadas pelo Vite que não utilizará. Geralmente o tema colocara estas com uma cor opaca.

Ps2: Acrescente funcionalidades necessárias como ```import { useEffect } from 'react'```

```
Fazer primeira etapa e verificar:

import ...
function App() {
  const [users, setUsers] = useState()

  useEffect(() => {
    <!-- // EXECUTA ALGO NO INICIO DO COMPONENTE -->
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
```
A tela ficará assim : http://localhost:5173/

<img src='./sem8/src/assets/Fazer primeira etapa e verificar.png'>


```
Fazer segunda etapa e verificar:

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
      {/* <li>Nome (email)</li> */}
      <li>Yan Esteves (yan.m.esteves@gmail.com)</li>
      <li>Joao Coelho (joao.coelho@gmail.com)</li> 
    </ul>
  </>
)
}

export default App

----> VERIFIQUE SE NO CONSOLE ESTA APARECENDO A MENSAGEM: 
componente iniciado App.jsx

SE SIM ESTA BACANA O RACIOCÍNIO!!!
```
```
Fazer terceira etapa e verificar:
Acrescente funcionalidades necessárias como:
    import { useState, useEffect } from 'react'
Import a function que esta no web.js
    import { getUsers } from './services/web'

TODA A VEZ QUE ESTIVER UMA CHAMADA DE API USAREI para resposta no inicio da chamada

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
       setUsers(response)
     }
     fetchData();
   }, []) 
  //  useEffect com uma dependência vazio 
 
   return (
     <>
       <ul>
         {users.map(user => <li key={user.id}>{user.name} ({user.email})</li>)}
       </ul>
     </>
   )
 }

export default App
```

AULA2

instalar sudo npm i react-router-dom

app.jsx

```
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import SignIn from './pages/Singin/Singin'
import SignUp from './/pages/Singup/Signup'

function App() {

  return (
    <>
      <Router> {/* switch */}
        <Routes>
          <Route path='/' Component={Signin} />
          <Route path='/login' Component={Signin} />
          <Route path='/cadastro' Component={Signup} />
        </Routes>
      </Router>
    </>
  )
}

export default App

Ps. Pode haver de ser Router ao invés de BrowserRouter
```

pasta Signin >Signin

```
function Signin() {
    return (
        <>
            <h1>Login</h1>
        </>
    )
}

export default Signin
```

pasta Signup >Signup

```
function Signup() {
    return (
        <>
            <h1>Cadastro</h1>
        </>
    )
}

export default Signup
```

BASE PARA AUTENTICAÇÃO  ---> USE E NÃO PERCA

```
import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Signin from "./pages/Singin/Singin";
import Signup from "./pages/Singup/Signup";
import Home from "./pages/Home/Home";

function App() {
  const isAuthenticated = true;
  // se true vai para a pagina Login, se false vai para Home

  function loginRedirect(componente) {
    if (isAuthenticated) {
      return <Navigate to="/" replace />;
    }

    return componente;
  }

  return (
    <>
      <Router>
        {" "}
        {/* switch */}
        <Routes>
          <Route path="/login" element={loginRedirect(<Signin />)} />
          <Route path="/cadastro" element={loginRedirect(<Signup />)} />


          {/* Se quiser uma rota que não precisa de autenticação coloque aqui a rota */}

          {/* Ternário para redirecionar rota */}
          {isAuthenticated ? (
          //Se quiser uma rota autenticada coloque aqui a rota 
            <>
              <Route path="/" Component={Home} />
            </>
          ) : (
            <Route path="*" element={<Navigate replace to="/login" />} />
          )}

          <Route path="/login" Component={Signin} />
          <Route path="/cadastro" Component={Signup} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
```





## 🛠️ Construído com

- Trello - aprendendo a criar e mover cards.
- VsCode - aprendendo a usar a ferramenta e suas extensões.
- GitHub - aprendendo a utilizar sempre enviando ou trazendo para meu local o repositório, fazendo alterações...
- React - hooks
- Vite
- Bootstrap
  

## 🧑🏻‍🏫 Professor

**Yan Esteves** - [GitHub](https://github.com/yanestevesufjf/react_rotas)


## 🎁 Expressões de gratidão

* Adorando este curso super podendo fazer perguntas para embasar meu raciocínio 📢;
* Lab365 e todos os monitores;
* Qualquer dúvida ou sugestão de melhorar o código eu aceito;
* Um agradecimento publicamente 🫂 aos melhores amigos de turma que podia ter - TRIP e NATURE!
