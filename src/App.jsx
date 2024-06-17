import { Routes, Route } from "react-router-dom";
import './App.css'
import  Header  from './Components/header/Header'
import Footer  from './Components/footer/Footer'  
import  Home  from './Components/home/Home'


function App() {

  return (
    <>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />

        {/* <Route path="Help" element={<History/>} />

        <Route path="Account" element={<Mission/>} />
         */}
      </Routes>
      <Footer />
    </div>
      
    </>
  )
}

export default App
