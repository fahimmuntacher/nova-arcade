import Header from '../Components/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const MainLayouts = () => {
  return (
    <div className='flex justify-between flex-col min-h-screen'>
        <header>
            <Header></Header>
        </header>
        <main className='flex-1 pt-16'> 
          <Outlet></Outlet>
        </main>
        <footer>
            <Footer></Footer>
        </footer>
    </div>
  );
};

export default MainLayouts;
