import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Room {
  id: string;
  type: string;
  price: number;
  details: string;
  image: string;
}

export interface SelectedRoom extends Room {
  guests: number;
  nights: number;
  instanceId: string;
}

export interface RoomSummary {
  arrivalDate: Date | null;
  departureDate: Date | null;
  guests: number;
  nights: number;
  totalPrice: number;
  selectedRooms: SelectedRoom[];
}

interface RoomState {
  selectedRooms: SelectedRoom[];
  arrivalDate: Date | null;
  departureDate: Date | null;
  guests: number;
  addRoom: (room: Room, guests: number, arrivalDate: Date, departureDate: Date) => void;
  removeRoom: (instanceId: string) => void;
  clearRooms: () => void;
  setDetails: (arrivalDate: Date, departureDate: Date, guests: number) => void;
  calculateTotalPrice: () => number;
  calculateNights: (arrival: Date, departure: Date) => number;
  getSummary: () => RoomSummary;
}

const useRoomStore = create<RoomState>()(
  persist(
    (set, get) => ({
      selectedRooms: [],
      arrivalDate: null,
      departureDate: null,
      guests: 1,

      calculateNights: (arrival, departure) => {
        if (!arrival || !departure) return 0;
        const diffTime = departure.getTime() - arrival.getTime();
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      },

      addRoom: (room, guests, arrivalDate, departureDate) =>
        set((state) => {
          const nights = get().calculateNights(arrivalDate, departureDate);
          const newRoom = {
            ...room,
            guests,
            nights,
            instanceId: `${room.id}-${Date.now()}-${Math.random()}`,
          };
          return { selectedRooms: [...state.selectedRooms, newRoom] };
        }),

      removeRoom: (instanceId) =>
        set((state) => ({
          selectedRooms: state.selectedRooms.filter((room) => room.instanceId !== instanceId),
        })),

      clearRooms: () => set({ selectedRooms: [] }),

      setDetails: (arrivalDate, departureDate, guests) =>
        set({ arrivalDate, departureDate, guests }),

      calculateTotalPrice: () =>
        get().selectedRooms.reduce((total, room) => total + room.price * room.nights, 0),

      getSummary: () => {
        const { arrivalDate, departureDate, guests, selectedRooms } = get();
        const nights = get().calculateNights(arrivalDate!, departureDate!);
        const totalPrice = get().calculateTotalPrice();
        return { arrivalDate, departureDate, guests, nights, totalPrice, selectedRooms };
      },
    }),
    { name: 'room-store' }
  )
);

export default useRoomStore;
