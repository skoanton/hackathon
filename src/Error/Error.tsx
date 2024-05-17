import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const Error = () => {
   return (
      <section className="bg-slate-300 w-screen h-screen ">
         <div className="flex flex-col w-5/6 container h-full justify-center items-center gap-4">
            <h1 className="text-2xl">Oops! There was an error</h1>
            <h3>Click here to come back to home</h3>
            <Link to={'/'}>
               <Button variant={'outline'} aria-label="HOME">
                  Home
               </Button>
            </Link>
         </div>
      </section>
   );
};
