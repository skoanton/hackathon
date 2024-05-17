import { EventsContext } from "@/Context/EventsContext/EventsContext";
import { EVENT_ACTION } from "@/Context/EventsContext/EventsReducer";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Event } from "@/types/eventTypes";
import { useContext, useState } from "react";

type EventCommentProps = {
  currentEvent: Event;
};

export function EventComment({ currentEvent }: EventCommentProps) {
  const { eventsDispatch } = useContext(EventsContext);

  const [comment, setComment] = useState("");

  const submitComment = () => {
    eventsDispatch({
      type: EVENT_ACTION.ADD_COMMENT,
      payload: {
        event: currentEvent,
        comment: comment,
      },
    });
    setComment("");
  };

  return (
    <div className="grid w-full gap-2">
      <Textarea
        onChange={(e) => setComment(e.target.value.toString())}
        placeholder="Comment on this event!!!"
        className="mt-2"
        value={comment}
      />
      <Button onClick={() => submitComment()}>Post comment</Button>
    </div>
  );
}
