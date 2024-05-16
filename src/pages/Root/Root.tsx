import BottomNavbar from '@/components/BottomNavbar/BottomNavbar';

import { Outlet } from 'react-router-dom';

const Root = () => {
   return (
      <>
         <div className="h-screen border-collapse overflow-hidden">
            <main className=" mb-24 ">
               <Outlet />
            </main>
            <BottomNavbar />
         </div>
      </>
   );
};

export default Root;
