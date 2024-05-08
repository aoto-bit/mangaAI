import { Link } from "react-router-dom"
import "../css/login.css"

const Login: React.FunctionComponent = () => {

  return (
    <div>
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="user-box">
            <input type="text" name="" />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input type="password" name=""/>
            <label>Password</label>
          </div>
          <a href="/top">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
          <a href="">
            Push
          </a>
        </form>
        <Link to="/"><p>To Top Page</p></Link>
        <Link to="https://codepen.io/soufiane-khalfaoui-hassani/pen/LYpPWda"><p>参考</p></Link>
      </div>
      
    </div>
  )
}

export default Login