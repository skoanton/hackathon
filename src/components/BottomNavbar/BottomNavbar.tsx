import { Heart, Home, Plus, User } from "lucide-react";

const BottomNavbar = () => {
  return (
    <footer>
      <ul className="flex justify-between p-2 border-t-2">
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
    </footer>
  );
};

export default BottomNavbar;
