
import { Outlet } from 'react-router-dom';
import HeaderComponent from '../components/Header';




function RootLayout() {


  return (
    <>
    <HeaderComponent />
      <main className='outlet-children'>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
