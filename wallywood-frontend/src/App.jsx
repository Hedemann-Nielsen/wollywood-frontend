import './App.scss'
import { PageWrapper } from './components/Wrappers/PageWrapper/PageWrapper';
import { Header } from "./components/Header/Header";
import { AppRouter } from './components/AppRouter/AppRouter';
import { Footer } from "./components/Footer/Footer";

function App() {
  
  return (
    <>
    <PageWrapper>
      <Header></Header>
       <AppRouter></AppRouter>
      <Footer></Footer>
    </PageWrapper>
    </>
  )
}

export default App;
