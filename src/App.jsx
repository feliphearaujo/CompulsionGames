import { Routes, Route } from "react-router-dom";
import './App.css'
import  Header  from './Components/header/Header'
import Footer  from './Components/footer/Footer'  
import  Home  from './Components/home/Home'
import { Accounts } from "./Components/account/Account";
import { Help } from "./Components/help/Help";


function App() {

  return (
    <>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />

        <Route path="Help" element={<Help/>} /> 

        <Route path="Account" element={<Accounts/>} />
         
      </Routes>
      <Footer />
    </div>
      
    </>
  )
}

export default App
