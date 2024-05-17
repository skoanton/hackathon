export type Event = {
   id: string;
   title: string;
   description: string;
   date: Date;
   location: string;
   organizer: string;
   images: string[];
   attendants: number;
   comments?: EventComments[];
};

export type EventComments = {
   id: string;
   name: string;
   post: string;
};
