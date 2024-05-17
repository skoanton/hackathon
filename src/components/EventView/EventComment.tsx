import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function EventComment() {
  const submitComment = () => {
    console.log("Commentin");
  };

  return (
    <div className="flex h-16 gap-1">
      <Textarea placeholder="Comment on this event!!!" className="bg-[#4E507A] border-none" />
      <Button onClick={() => submitComment()} className="h-full">
        Send
      </Button>
    </div>
  );
}
