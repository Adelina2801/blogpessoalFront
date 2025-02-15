import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import { AuthProvider } from './contexts/AuthContext'
import Home from './pages/home/Home'
import Cadastro from './pages/cadastro/Cadastro'

function App() {
  return (
    <>
    <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-80vh]">
            <Routes>
              {/* <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} /> */}
              <Route path="/" element={<Cadastro />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
        </AuthProvider>
    </>
  )
}

export default App
