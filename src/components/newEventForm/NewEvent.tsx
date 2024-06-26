import { zodResolver } from "@hookform/resolvers/zod";
import { v4 as uuidv4 } from "uuid";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useContext, useState } from "react";
import { EVENT_ACTION } from "@/Context/EventsContext/EventsReducer";
import { EventsContext } from "@/Context/EventsContext/EventsContext";
import { useNavigate } from "react-router-dom";

export const FormSchema = z.object({
  title: z.string().min(5),
  description: z.string().min(5),
  date: z.coerce.date(),
  location: z.string().min(1),
  organizer: z.string(),
  image: z.optional(),
});

export function NewEvent() {
  const navigate = useNavigate();
  const { eventsDispatch } = useContext(EventsContext);
  const [preview, setPreview] = useState("");
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: "onSubmit",
    defaultValues: {
      title: "",
      location: "",
      organizer: "",
    },
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      setPreview(URL.createObjectURL(e.target.files[0]));
    }
  }

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    const randomNumber = Math.floor(Math.random() * 1000) + 1;
    const sumbitData = {
      ...data,
      images: [preview],
      id: uuidv4(),
      attendants: randomNumber,
    };
    console.log(sumbitData);
    if (sumbitData) {
      eventsDispatch({ type: EVENT_ACTION.ADD, payload: sumbitData });
      navigate("/");
    }
  };

  return (
    <section className="p-4 w-full h-full flex flex-col items-center">
      <h1 className=" text-4xl font-bold  text-center ">Skapa ett event</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 w-full overflow-scroll px-4  "
        >
          <FormField
            name="title"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Titel</FormLabel>
                <FormMessage />
                <FormControl>
                  <Input
                    placeholder="Event title"
                    {...field}
                    autoComplete="off"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="organizer"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Arangör</FormLabel>
                <FormMessage />
                <FormControl>
                  <Input
                    placeholder="Organizer"
                    {...field}
                    autoComplete="off"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="description"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Beskrivning av event</FormLabel>
                <FormMessage />
                <FormControl>
                  <Textarea {...field} placeholder="Beskriv eventet" />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start">
                <FormLabel>Datum</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Välj ett datum</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date < new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="location"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Plats</FormLabel>
                <FormMessage />
                <FormControl>
                  <Input
                    placeholder="Event place"
                    {...field}
                    autoComplete="off"
                  />
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
            name="image"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bild</FormLabel>
                <FormMessage />
                <FormControl>
                  <Input type="file" {...field} onChange={handleChange} />
                </FormControl>
              </FormItem>
            )}
          />

          <div className="w-full flex justify-center">
            <Button className="w-full" type="submit">
              Skapa
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
}
