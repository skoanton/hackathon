import { Heart, Home, Plus, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const BottomNavbar = () => {
   return (
      <footer className=" h-16 w-full fixed bottom-0 ">
         <div className=" h-full w-full bg-slate-300 p-6 rounded-lg">
            <ul className="w-full h-full items-center flex justify-between">
               <li>
                  <Link to={'/'}>
                     <Home className="w-10 h-10 text-primary" />
                  </Link>
               </li>
               <li>
                  <Link to={'/newevent'}>
                     <Plus className="w-10 h-10" />
                  </Link>
               </li>
               <li>
                  <Heart className="w-10 h-10" />
               </li>
               <li>
                  <User className="w-10 h-10" />
               </li>
            </ul>
         </div>
      </footer>
   );
};

export default BottomNavbar;
