import BottomNavbar from '@/components/BottomNavbar/BottomNavbar';
import { Header } from '@/components/Header/Header';
import { Outlet } from 'react-router-dom';

const Root = () => {
   return (
      <>
         <div className="h-screen overflow-x-hidden">
            <Header />
            <main className=" container">
               <Outlet />
            </main>
            <BottomNavbar />
         </div>
      </>
   );
};

export default Root;
