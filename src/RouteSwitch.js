import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Archive from "./components/Archive"

export default function RouteSwitch() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/projects' element={<Projects/>}/>
                <Route path='experience' element={<Experience/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/archive' element={<Archive/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}