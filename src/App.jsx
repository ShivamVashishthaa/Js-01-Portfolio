import {Outlet} from 'react-router-dom'
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

function App() {
  return (
    <section className='flex flex-col min-h-screen justify-between gap-5'>
      <Header/>
      <Outlet/>
      <Footer/>
    </section>
  )
}

export default App
