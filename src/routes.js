import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './pages/Login'
import Header from './components/Header'
import Cadastro from './pages/Cadastro'
import Inicio from './pages/Inicio'

export default function Rotas (){
    
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/Cadastro' element={<Cadastro />} />
            <Route path='/Login' element={<Login />} />
        </Routes>
        </BrowserRouter>
    )
}