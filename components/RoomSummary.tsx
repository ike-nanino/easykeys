"use client"


import useRoomStore from "../store/store";
import type { RoomSummaryProps } from "@/lib/types";
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { config } from "@fortawesome/fontawesome-svg-core";
import SubmitButton from "./SubmitButton";
config.autoAddCss = false;




const RoomSummary = ( {
  arrivalDate,
  departureDate,
  guests,
  nights,
}:  RoomSummaryProps ) => {

  

  const { selectedRooms, removeRoom } = useRoomStore();

  const totalPrice = selectedRooms.reduce(
    (total, room) => total + room.price * nights,
    0
  );

 

  

  return (
    <div className=" h-fit sticky top-4 p-8  bg-white rounded-lg shadow-lg border border-gray-200">

      
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Selected Rooms</h2>
      {selectedRooms.map((room) => (
        <div key={room.instanceId} className="selected-room mb-6 p-4 bg-gray-50 rounded-md shadow-sm border border-gray-100">

          <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold text-gray-800">{room.type}</h3>
          <button
            onClick={() => removeRoom(room.instanceId)}
            className=" transition-colors text-white px-4 py-2 rounded-md font-medium"
          >
            <FontAwesomeIcon icon={faTrash} className="w-3 h-3 text-red-500 transition-colors" />
          </button>
          

          </div>
          
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{room.details}</p>
          <p className="text-gray-700 mb-2">
            <span className="font-medium">Guests:</span> {guests}, <span className="font-medium">Nights:</span>{" "}
            {nights > 0 ? nights : "0"}
          </p>
          <p className="text-lg font-semibold text-gray-800 mb-3">Price: GH₵ {room.price * nights}</p>
          {/* Arrival and Departure Dates */}
      <div className="mb-4">
      <p className="text-gray-600">
        <span className="font-semibold">Arrival:</span>{" "}
        {arrivalDate ? arrivalDate.toDateString() : "Not selected"}
      </p>
      <p className="text-gray-600">
        <span className="font-semibold">Departure:</span>{" "}
        {departureDate ? departureDate.toDateString() : "Not selected"}
      </p>
    </div>


          
        </div>
      ))}
      <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between items-center">
        <h3 className="text-xl font-bold text-gray-800">Total: GH₵ {totalPrice}</h3>

        {/* <SubmitButton /> */}
      </div>
    </div>
  );
};

export default RoomSummary;