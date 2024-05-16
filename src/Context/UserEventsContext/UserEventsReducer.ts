import { Event } from "@/types/eventTypes";
import { UserEventsActions } from "./UserEventsContext";


export enum USER_EVENT_ACTION {
    ADD = "ADD",
    REMOVE = "REMOVE"
}

export type UserEventsState = {
    favorites: Event[],
    attending: Event[]
}


export const initalUserEventsState : UserEventsState = {
    favorites: [
        {
            title: "Basketbollbonanza",
            description: "Kom och prova på basket! Alla är välkomna oavsett erfarenhetsnivå.",
            date: new Date('2024-06-15T10:00:00'),
            location: "Sporthallen, Stockholm",
            organizer: "Basketklubben",
            images: ["image1.jpg", "image2.jpg"]
        },
        {
            title: "Basketbollbonanza",
            description: "Kom och prova på basket! Alla är välkomna oavsett erfarenhetsnivå.",
            date: new Date('2024-06-15T10:00:00'),
            location: "Sporthallen, Stockholm",
            organizer: "Basketklubben",
            images: ["image1.jpg", "image2.jpg"]
        },
        {
            title: "Basketbollbonanza",
            description: "Kom och prova på basket! Alla är välkomna oavsett erfarenhetsnivå.",
            date: new Date('2024-06-15T10:00:00'),
            location: "Sporthallen, Stockholm",
            organizer: "Basketklubben",
            images: ["image1.jpg", "image2.jpg"]
        },
        {
            title: "Basketbollbonanza",
            description: "Kom och prova på basket! Alla är välkomna oavsett erfarenhetsnivå.",
            date: new Date('2024-06-15T10:00:00'),
            location: "Sporthallen, Stockholm",
            organizer: "Basketklubben",
            images: ["image1.jpg", "image2.jpg"]
        },
        {
            title: "Basketbollbonanza",
            description: "Kom och prova på basket! Alla är välkomna oavsett erfarenhetsnivå.",
            date: new Date('2024-06-15T10:00:00'),
            location: "Sporthallen, Stockholm",
            organizer: "Basketklubben",
            images: ["image1.jpg", "image2.jpg"]
        },
        {
            title: "Basketbollbonanza",
            description: "Kom och prova på basket! Alla är välkomna oavsett erfarenhetsnivå.",
            date: new Date('2024-06-15T10:00:00'),
            location: "Sporthallen, Stockholm",
            organizer: "Basketklubben",
            images: ["image1.jpg", "image2.jpg"]
        },

        
    ],
    attending: [{
        title: "Basketbollbonanza",
        description: "Kom och prova på basket! Alla är välkomna oavsett erfarenhetsnivå.",
        date: new Date('2024-06-15T10:00:00'),
        location: "Sporthallen, Stockholm",
        organizer: "Basketklubben",
        images: ["image1.jpg", "image2.jpg"]
    },],
}

export const userEventsReducer = (userEventsState: UserEventsState, action:UserEventsActions  ): UserEventsState => {
    switch (action.type) {
        case USER_EVENT_ACTION.ADD:
                return userEventsState;
        default:
            return userEventsState;
            
    }
}