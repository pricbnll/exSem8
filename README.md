## MÓDULO2 semana 7

# 🚦 Exercícios do Trello

Este repositório é para minha prática e resolução dos exercícios proposto pelos professores durante o **semana7** no curso **FuturoDev trilha TRIP** o qual estou inserida a desenvolver neste curso ofertado pelo **FloripaMaisTech** com a Lab365, Senai e Acate/SC.

### SEMANA 7 **com o professor Nicholas Macedo**
  - Introdução a React Hooks
  - Fluxo de dados em um aplicativo React
  - PropTypes, useState/useEffect, useRef Controlados x Não Controlados, Custom Hooks
  
  - O exercício da semana 7, sendo um contador, se encontra [neste repositório](https://github.com/pricbnll/contador)
  
## Rodar o projeto

Para rodar pelo no terminal, digite os comandos:

```
npm create vite@latest
    Coloque um nome de pasta (project-name) que será criado.
    Escolha:
    - React
    - JavaScript

npm install
npm run dev

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
npm install bootstrap@5.3.3
import 'bootstrap/dist/css/bootstrap.min.css'
importação no arquivo main.jsx
```


## 🛠️ Construído com

- Trello - aprendendo a criar e mover cards.
- VsCode - aprendendo a usar a ferramenta e suas extensões.
- GitHub - aprendendo a utilizar sempre enviando ou trazendo para meu local o repositório, fazendo alterações...
- React - hooks
- Vite
- Bootstrap
  

## 🧑🏻‍🏫 Professores

* **Nicholas Macedo** - [GitHub](https://github.com/nicholasmacedoo)

## 📄 Acompanhe as resoluções e dicas de aulas

**FuturoDev - Trip** - [GitHub do curso] (https://github.com/FuturoDEV-Trip/MS2S07)


## 🎁 Expressões de gratidão

* Adorando este curso super podendo fazer perguntas para embasar meu raciocínio 📢;
* Lab365 e todos os monitores;
* Qualquer dúvida ou sugestão de melhorar o código eu aceito;
* Um agradecimento publicamente 🫂 aos melhores amigos de turma que podia ter - TRIP e NATURE!



npm install -g json-server


---------> pasta services > web.js

export async function getUsers() {
    <!-- console.log(getUsers::deu certo) -->
    const response = await fetch('http://localhost:3000/users', { method: 'GET' })
    const data = await response.json()
    <!-- console.log(response) -->
    getUsers(response)

    return data
}

---------> db.json
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


--------> npx json-server db.json

AParece no console:
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


---------> app.jsx
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
export ....

function App() {
    const [users, setUsers] = useState()

  useEffect(() => {
    <!-- // EXECUTA ALGO NO INICIO DO COMPONENTE -->
    console.log('componente iniciado App.jsx')

  }, [])

  return (
    <>
      <ul>
        {users.map(user => <li key={user.id}>{user.name} ({user.email})</li>)}
        <!-- {/* <li>Nome (email)</li> */}
        {/* <li>Yan Esteves (yan.m.esteves@gmail.com)</li>
        <li>Joao Coelho (joao.coelho@gmail.com)</li> */} -->
      </ul>
    </>
  )
}

TODA A VEZ QUE ESTIVER UMA CHAMADA DE API USAREI para resposta no inicio da chamada

import...

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
     <!-- // EXECUTA ALGO NO INICIO DO COMPONENTE -->
     console.log('componente iniciado App.jsx')
     async function fetchData() {
       const response = await getUsers()
       console.log(response)
       setUsers(response)
     }
     fetchData();
   }, []) 
  //  useEffect com uma dependência vazio 
 
   return (
     <>
       <ul>
         {users.map(user => <li key={user.id}>{user.name} ({user.email})</li>)}
         <!-- {/* <li>Nome (email)</li> */}
         {/* <li>Yan Esteves (yan.m.esteves@gmail.com)</li>
         <li>Joao Coelho (joao.coelho@gmail.com)</li> */}  -->
       </ul>
     </>
   )
 }
 

export default App
