import React from "react";
import ImageComponent from "./ImageComponent";
import useRoomStore from "../store/store";
import MajorCategory from "./MajorCategory";





 interface RoomsProps {
  id: string;
  type: string;
  price: number;
  details: string;
  image: string;
}

interface RoomComponentProps {
  room: RoomsProps;
  arrivalDate?: Date;
  departureDate?: Date;
}


const RoomComponent = ( 
  { room, arrivalDate, departureDate }: RoomComponentProps
) => {

  
  const { addRoom } = useRoomStore();

  const calculateNights = (): number => {
    if (!arrivalDate || !departureDate) return 0;
    const diffTime = Math.abs(departureDate.getTime() - arrivalDate.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const handleSelectRoom = (room: RoomsProps) => {
    const guests = 2; // You might want to make this dynamic later
    addRoom(room, guests, arrivalDate || null, departureDate || null);
  };



  return (
    <div className="shadow-lg border grid grid-cols-1 md:grid-cols-2 gap-10 ">
      <div className="">
        <ImageComponent image={room.image} alt={room.type} />
      </div>

     

      <div className="flex flex-col justify-between mx-2">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-gray-800">{room.type}</h3>
           <div>
        <MajorCategory />
      </div>
          <p className="text-gray-600 text-sm leading-relaxed mr-4">{room.details}</p>


          <div className="flex justify-between items-center">
          <p className="text-xl font-semibold text-gray-800">Price: GH₵ {room.price}</p>
          <button
             onClick={() => handleSelectRoom(room)}
             className={`bg-green-400 text-white px-3 py-2 rounded-lg font-medium mb-2 ${
               (!arrivalDate || !departureDate) 
                 ? "opacity-50 cursor-not-allowed" 
                 : "hover:bg-green-500 transition-colors"
             }`}
             disabled={!arrivalDate || !departureDate}
          >
            Select
          </button>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default RoomComponent;
