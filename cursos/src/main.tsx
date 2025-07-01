import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.tsx'
import { Home } from './Home.tsx';
import NotFound from "./P404.tsx";
import { Cursos } from './Cursos.tsx';
// import Login from './Login.tsx';


// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>

          <Route index element={<Home/>} />
          <Route path="/cursos" element={<Cursos/>} />
          {/* <Route path="/admin" element={} /> */}
          {/* <Route path="/login" element={<Login /> } /> */}
          {/* <Route path="/foto/:tema" element={<Foto />} /> */}
          <Route path="*" element={<NotFound />} />

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>

)