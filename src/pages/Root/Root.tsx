import BottomNavbar from '@/components/BottomNavbar/BottomNavbar';
import { Header } from '@/components/Header/Header';
import { Outlet } from 'react-router-dom';

const Root = () => {
   return (
      <>
         <div className=" h-screen">
            {/*           <Header /> */}
            <main className=" pb-12">
               <Outlet />
            </main>
            <BottomNavbar />
         </div>
      </>
   );
};

export default Root;
