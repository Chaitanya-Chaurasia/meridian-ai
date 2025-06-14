export interface ExploreCardProps {
  id: number;
  place: string;
  country: string;
  image: string;
  size?: "small" | "wide" | "tall" | "large";
}

export interface Message {
  id: string;
  content: string;
  sender: "user" | "assistant";
  timestamp: Date;
  type?: "text" | "code" | "search-result";
  isEditing?: boolean;
  searchParams?: {
    from: string;
    to: string;
    mode: string;
    tripType: string;
    classType: string;
    departDate?: string;
    returnDate?: string;
  };
}

export interface ChatSession {
  id: string;
  title: string;
  lastMessage: string;
  timestamp: Date;
  messages: Message[];
}
