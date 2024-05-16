import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
const MAX_FILE_SIZE = 1024 * 1024 * 50;
const ACCEPTED_IMAGE_MIME_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
const ACCEPTED_IMAGE_TYPES = ['jpeg', 'jpg', 'png', 'webp'];
export const FormSchema = z.object({
   title: z.string().min(5),
   description: z.string().min(5),
   date: z.coerce.date(),
   where: z.string().min(1),
});
export type formType = z.infer<typeof FormSchema>;
/* function getImageData(event: ChangeEvent<HTMLInputElement>) {
   const dataTransfer = new DataTransfer();
   Array.from(event.target.files!).forEach((image) => dataTransfer.items.add(image));

   const files = dataTransfer.files;
   const displayUrl = URL.createObjectURL(event.target.files![0]);

   return { files, displayUrl };
} */
export function NewEvent() {
   const [preview, setPreview] = useState<File | null>(null);
   const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      mode: 'onSubmit',
      defaultValues: {
         title: '',
         where: '',
      },
   });
   function handleChange(e) {
      console.log(e.target.files);
      setPreview(URL.createObjectURL(e.target.files[0]));
   }

   const onSubmit = (data: z.infer<typeof FormSchema>) => {
      const submitData = { ...data, img: preview };
      console.log(submitData);
      console.log(data);
   };

   return (
      <section className=" bg-zinc-300 p-6 w-full  h-screen flex flex-col items-center">
         <h1 className=" text-4xl font-bold  text-center ">Create Event</h1>
         <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full ">
               <FormField
                  name="title"
                  control={form.control}
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormMessage />
                        <FormControl>
                           <Input placeholder="Event title" {...field} autoComplete="off" />
                        </FormControl>
                        <FormDescription className="text-gray-600">Event title</FormDescription>
                     </FormItem>
                  )}
               />
               <FormField
                  name="description"
                  control={form.control}
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Description of event</FormLabel>
                        <FormMessage />
                        <FormControl>
                           <Textarea {...field} />
                        </FormControl>
                     </FormItem>
                  )}
               />
               <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                     <FormItem className="flex flex-col items-start">
                        <FormLabel>Date of Event</FormLabel>
                        <Popover>
                           <PopoverTrigger asChild>
                              <FormControl>
                                 <Button variant={'outline'} className={cn('w-full pl-3 text-left font-normal', !field.value && 'text-muted-foreground')}>
                                    {field.value ? format(field.value, 'PPP') : <span>Pick a date</span>}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                 </Button>
                              </FormControl>
                           </PopoverTrigger>
                           <PopoverContent className="w-auto p-0" align="start">
                              <Calendar mode="single" selected={field.value} onSelect={field.onChange} disabled={(date) => date < new Date() || date < new Date('1900-01-01')} initialFocus />
                           </PopoverContent>
                        </Popover>

                        <FormMessage />
                     </FormItem>
                  )}
               />
               <FormField
                  name="where"
                  control={form.control}
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Event place</FormLabel>
                        <FormMessage />
                        <FormControl>
                           <Input placeholder="Event place" {...field} autoComplete="off" />
                        </FormControl>
                     </FormItem>
                  )}
               />
               {preview ? (
                  <Avatar className="w-12 h-12">
                     <AvatarImage src={preview} />
                     <AvatarFallback></AvatarFallback>
                  </Avatar>
               ) : null}
               <FormField
                  name="addImage"
                  control={form.control}
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Event Photo</FormLabel>
                        <FormMessage />
                        <FormControl>
                           <Input type="file" {...field} autoComplete="off" onChange={handleChange} ref={field.ref} />
                        </FormControl>
                     </FormItem>
                  )}
               />

          <div className="w-full flex justify-center">
            <Button className="w-full" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
}
