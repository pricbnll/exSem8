import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Signin from './pages/Singin/Singin'
import Signup from './/pages/Singup/Signup'

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