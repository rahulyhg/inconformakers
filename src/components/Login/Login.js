import React from "react"
import Input from "../Input"
import Button from "./../Button"
import { LoginFN } from "../../services/auth"

const stateDefault = {
  email: "",
  senha: "",
}

const Login = props => {
  const [user, setUser] = React.useState(stateDefault)
  const onChangeHandler = ({ target: { value, name } }) =>
    setUser({
      ...user,
      [name]: value,
    })

  const onSubmitHandler = async e => {
    e.preventDefault()
    try {
      const { email, senha } = user
      await LoginFN(email, senha)
      props.onClose()
    } catch (error) {}
  }
  return (
    <div className="">
      <div className="d-flex d-flex-space-between d-flex-align-center">
        <div>
          <h3 className="fs-custom tt-uppercase fs-2 m-top-40 color-dark">
            Fazer Login
          </h3>
          <p className="fs-custom m-bottom-10 color-gray m-bottom-40">
            Lorem Ipson
          </p>
        </div>
        <div>
          <button className="btn">Fechar</button>
        </div>
      </div>
      <form className="grid">
        <div className="sm-6-12">
          <Input
            label="Email"
            name="email"
            value={user.email}
            onChange={onChangeHandler}
          />
        </div>
        <div className="sm-6-12">
          <Input
            label="Senha"
            name="senha"
            type="password"
            value={user.senha}
            onChange={onChangeHandler}
          />
        </div>
        <div className="sm-6-12">
          <Button onClick={onSubmitHandler}>Enviar</Button>
        </div>
      </form>
    </div>
  )
}

export default Login
