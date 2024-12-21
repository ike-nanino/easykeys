
  
export interface RoomProps {
    room: {
      id: string;
      type: string;
      price: number;
      details: string;
      image: string;
    };
  }

export interface RoomSummaryProps {
  arrivalDate: Date | null;
  departureDate: Date | null;
  guests: number;
  nights: number;
  totalPrice: number;
  selectedRooms: {
    id: string;
    type: string;
    price: number;
    details: string;
    image: string;
    guests: number;
    nights: number;
    instanceId: string;
  }[];
}