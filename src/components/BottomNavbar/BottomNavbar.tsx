import { Heart, Home, Plus, User } from 'lucide-react';

const BottomNavbar = () => {
   return (
      <footer className="h-16 w-full absolute">
         <div className=" h-full w-full bg-slate-300">
            <ul className="w-full h-full items-center flex justify-between">
               <li>
                  <Home className="w-10 h-10 text-primary" />
               </li>
               <li>
                  <Plus className="w-10 h-10" />
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
