import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { Provider } from 'react-redux'
// import { store } from "./store.ts"
import "../css/header.css"

const Header: React.FunctionComponent = () => {

// ReactDOM.createRoot(document.getElementById('header') as HTMLElement).render(
  return (
    <div>
    {/* // <React.StrictMode> */}
      {/* <Provider store={store}> */}
        {/* <header> */}
        {/* <div> */}
            <div className="header">
                <a >漫画オーディオ</a>
                <div className="header-right">
                    <a className="/" href="/">メイン画面</a>
                    <a href="/login">ログイン</a>
                    <a href="https://qiita.com/aoto-bit/private/8fbafa70c002eb43a629">About</a>
                </div>
            </div>
          {/* </div> */}
        {/* </header> */}
      {/* </Provider> */}
    {/* // </React.StrictMode>, */}
    </div>
  )
  }

  export default Header