import { Heart, Home, Plus, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const BottomNavbar = () => {
   const location = useLocation();
   return (
      <footer className=" h-16 w-full fixed bottom-0 ">
         <div className=" h-full w-full bg-slate-200 px-4 rounded-lg">
            <ul className="w-full h-full items-center flex justify-between">
               <li>
                  <Link to={'/'}>
                     <Home className={` w-10 h-10 ${location.pathname === '/' ? 'text-primary' : 'text-black'}`} />
                  </Link>
               </li>
               <li>
                  <Link to={'/newevent'}>
                     <Plus className={`w-10 h-10 ${location.pathname === '/newevent' ? 'text-primary' : 'text-black'}`} />
                  </Link>
               </li>
               <li>
                  <Link to={'/event/saved'}>
                     <Heart className={`w-10 h-10 ${location.pathname === '/event/saved' ? 'text-primary' : 'text-black'}`} />
                  </Link>
               </li>
               <li>
                  <Link to={'/profile/1'}>
                     <User className={`w-10 h-10 ${location.pathname.startsWith('/profile') ? 'text-primary' : 'text-black'}`} />
                  </Link>
               </li>
            </ul>
         </div>
      </footer>
   );
};

export default BottomNavbar;
