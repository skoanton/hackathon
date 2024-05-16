import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function EventComment() {
  const submitComment = () => {
    console.log("Commentin");
  };

  return (
    <div className="grid w-full gap-2">
      <Textarea placeholder="Comment on this event!!!" className="mt-2" />
      <Button onClick={() => submitComment()}>Post comment</Button>
    </div>
  );
}
