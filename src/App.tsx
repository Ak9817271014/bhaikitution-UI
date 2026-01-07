// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter} from "react-router-dom";
// import Router from './routes/routers';

import './App.css'
import Home from './applications/client/Home/Home';

function App() {

  return (
    <BrowserRouter>
      <Home  /> 
    </BrowserRouter>
  )
}

export default App
