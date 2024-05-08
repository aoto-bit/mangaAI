// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import '../css/App.css'
import '../css/Button.css'

import Qiita from "../img/favicon.png"
import Manga from "../img/Mang_Audio-removebg-preview.png"
import Figma from "../img/figma.webp"
import GitHub from "../img/github-mark-white.png"

import { useNavigate } from 'react-router-dom';

export const App: React.FunctionComponent = () => {

  let navigate = useNavigate();

  return (
    <>
      <div>
        <a href='https://qiita.com/aoto-bit/private/8fbafa70c002eb43a629'>
          <img src={Qiita} className="logo" alt="Qiita logo" width={100} height={100} />
        </a>
        <a href="/top">
          <img src={Manga}  className="logo" alt="Qiita logo" width={120} height={120} />
        </a>
        <a href="https://www.figma.com/file/hEMQg8t0f2JTXU2CE1jRN4/%E6%BC%AB%E7%94%BB?node-id=0%3A1&mode=dev">
          <img src={Figma}  className="logo" alt="Qiita logo" width={100} height={100} />
        </a> 
        <a href='https://github.com/aoto-bit/webapp'>
          <img src={GitHub}  className="logo" alt="Qiita logo" width={100} height={100} />
        </a>

      </div>
      {/* <h1>Qiita + Audio</h1> */}
      <div className='button'>
        <button onClick={() => navigate("/login")}>Login</button>
        <button onClick={() => navigate("/signup")}>SingUp</button>
      </div>
    </>
  )
}

export default App
