import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Heart, UserCheck } from "lucide-react";

const EventCard = () => {
  return (
    <>
      <Card>
        <CardContent className="flex justify-center items-center gap-5 p-2">
          <picture className="justify-self-center">
            <img
              src="/test-picture.jpg"
              alt="event picture"
              className=" w-28 h-28 object-cover"
            />
          </picture>

          <div className="flex-grow">
            <CardTitle className="text-lg">Lördag, Sep 24, 10:00</CardTitle>
            <p className="font-bold">Basketbollbonanza</p>
            <CardDescription>Alma Äppelqvist</CardDescription>
            <div className="flex gap-2 items-center">
              <UserCheck className="w-4 h-4" />
              <p className="font-semibold">3338 kommer</p>
              <Heart className="w-4 h-4" />
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default EventCard;
