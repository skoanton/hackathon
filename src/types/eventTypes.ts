export type Event = {
  longitude: number;
  latitude: number;
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
