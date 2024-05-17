import { EventsContext } from "@/Context/EventsContext/EventsContext";
import { EVENT_ACTION } from "@/Context/EventsContext/EventsReducer";
import { Button } from "@/components/ui/button";
import { AiOutlineSend } from "react-icons/ai";

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
    <div className="flex items-center gap-1 h-16 relative">
      <Textarea
        onChange={(e) => setComment(e.target.value.toString())}
        placeholder="Comment on this event!!!"
        value={comment}
        className="w-[98%] bg-accent text-black placeholder:text-white placeholder:opacity-70"
      />
      <Button
        className="h-10 w-10 mr-2 absolute -bottom-0 right-2 rounded-full border-[1px] border-black"
        onClick={() => submitComment()}
      >
        <AiOutlineSend className="scale-[250%]" />
      </Button>
    </div>
  );
}
