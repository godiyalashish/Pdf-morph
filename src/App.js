import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <div className="flex flex-grow bg-primary items-center justify-center mt-20 w-full">
        <Outlet/>
        </div>
      <Footer/>
  </div>
  );
}

export default App;
