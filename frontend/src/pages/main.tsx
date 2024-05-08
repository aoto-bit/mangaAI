import React from 'react'
import ReactDOM from 'react-dom/client'
// import { Provider } from 'react-redux'
import App from './App.tsx'
import '../css/index.css'
// import { store } from "./store.ts"

import Login  from "./login.tsx"
import Signup from "./singup.tsx"
import Top    from "./top.tsx"
import Header from "./header.tsx"

// import Todo from "../services/TodoService.ts"

import Cover1 from "./Cover1.tsx"

import { BrowserRouter, Route, Routes } from 'react-router-dom'

// ReactDOM.createRoot(document.getElementById('root')!).render(
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      {/* <App /> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={
              <>
                <Header />
                <App />
              </>
            } />
        <Route path="/login" element={
              <>
                <Header />
                <Login />
              </>
            } />
        <Route path="/signup" element={
              <>
                <Header />
                <Signup />
              </>
            } />
        <Route path="/cover1" element={
              <>
                <Header />
                <Cover1 />
              </>
            } />
        {/* <Route path="/api/" element={
              <>
                <Todo />
              </>
            } /> */}
        <Route path="/top" element={
              <>
                <Header />
                <Top />
              </>
            } />
          {/* <Route path="/cover1" element={<Cover1/>}/> */}
        {/* </Route> */}
      </Routes>
      </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>,
)