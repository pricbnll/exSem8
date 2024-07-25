import { useState } from "react";
import "./Login.css";

function Login() {

    const [ email, setEmail] = useState('')
    const [ password, setPassword] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(email, password)
        setEmail('')
        setPassword('');
    }



  return (
    <>
      <img
        src="https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-web.imgix.net%2Fstatic%2Fimg%2Flogo.png%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3Dundefined%26h%3Dundefined%26dpr%3D2%26fm%3Dpng&w=256&q=75"
        alt="Zé delivery logo"
      />

      <h3>Entrar na conta com outros serviços:</h3>

      <main>
        <div className="inputMidias">
          <button className="facebook">Continuar com Facebook</button>
          <button className="apple">Continuar com a Apple</button>
        </div>
        <div className="traco">
          <hr />
          <p>ou</p>
          <hr />
        </div>

        <form onClick={handleSubmit} >
            <p>Insira seu e-mail para entrar ou se cadastrar:</p>
            
            <input type="email" placeholder="Digite seu email:" value={email} onChange={(e) => setEmail(e.target.value)}/>

            <input type="password" placeholder="Digite sua senha:" {...password} onChange={(e) => setPassword (e.target.value)}/>
            
            <button type="submit" className="email">Continuar com E-mail</button>

            <p>Precisa de ajuda? Entre no <span>Me Ajude, Zé!</span> </p>
        </form>
      </main>
    </>
  );
}

export default Login;
