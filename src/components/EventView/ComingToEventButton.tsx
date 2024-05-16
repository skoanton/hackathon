import { Bold } from "lucide-react";

import { Toggle } from "@/components/ui/toggle";

type prop = {
  className: string;
};

export function ComingToEventButton({ className }: prop) {
  return (
    <Toggle aria-label="Toggle bold" className={className}>
      Coming
    </Toggle>
  );
}
