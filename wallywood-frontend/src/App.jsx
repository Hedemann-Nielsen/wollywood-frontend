import './App.scss'
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { Plakater } from './pages/Plakater/Plakater';
import { About } from './pages/About/About';
import { Contact } from './pages/Contact/Contact';
import { Login } from './pages/Login/Login';
import { Routes, Route } from 'react-router-dom'
import { PageWrapper } from './components/PageWrapper/PageWrapper';


function App() {
  
  return (
    <>
    <PageWrapper>
      <Header></Header>
          <Routes>
              <Route index element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/plakater" element={<Plakater />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
          </Routes>
      <Footer></Footer>
    </PageWrapper>
    </>
  )
}

export default App;
