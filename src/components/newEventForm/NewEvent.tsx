import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
const MAX_FILE_SIZE = 1024 * 1024 * 5;
const ACCEPTED_IMAGE_MIME_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
const ACCEPTED_IMAGE_TYPES = ["jpeg", "jpg", "png", "webp"];
export const FormSchema = z.object({
  title: z.string().min(5),
  description: z.string().min(5),
  date: z.coerce.date(),
  where: z.string().min(1),
  addImage: z
    .any()
    .refine((files) => {
      return files?.[0]?.size <= MAX_FILE_SIZE;
    }, `Max image size is 5MB.`)
    .refine(
      (files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
});
export type formType = z.infer<typeof FormSchema>;

export function NewEvent() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: "onChange",
    defaultValues: {
      title: "",
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {};

  return (
    <section className=" bg-zinc-300 p-6 w-full h-screen  flex flex-col  items-center">
      <h1 className=" text-4xl p-2  top-10 text-center ">Create Event</h1>
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
                <FormDescription className="text-gray-600">Event description</FormDescription>
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
                      <Button
                        variant={"outline"}
                        className={cn("w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")}
                      >
                        {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
                      initialFocus
                    />
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
          <FormField
            name="addImage"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Event place</FormLabel>
                <FormMessage />
                <FormControl>
                  <Input type="file" {...field} autoComplete="off" />
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
