"use client";

import React, { useState } from "react";
import RoomList from "../../components/RoomList";
import RoomSummary from "../../components/RoomSummary";
import { DatePicker } from "@/components/DateInput";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { differenceInDays } from "date-fns";
import Confirmation from "../../components/Confirmation";
import useRoomStore from "@/store/store";
import BookLayout from "@/components/BookLayout";
import MobileNav from "@/components/MobileNav";
import NavBar from "@/components/NavBar";

function Rooms() {

  const { selectedRooms } = useRoomStore();

  const [arrivalDate, setArrivalDate] = useState<Date | undefined>();
  const [departureDate, setDepartureDate] = useState<Date | undefined>();
  const [guests, setGuests] = useState<number>(2);

  // Calculate number of nights
  const nights = arrivalDate && departureDate 
    ? differenceInDays(departureDate, arrivalDate) || 1 
    : 0;



    const roomSummary = {
      arrivalDate: arrivalDate ? arrivalDate.toDateString() : null,
      departureDate: departureDate ? departureDate.toDateString() : null,
      guests,
      nights,
      totalPrice: selectedRooms.reduce(
        (total, room) => total + room.price * nights,
        0
      ),
      rooms: selectedRooms.map((room) => ({
        type: room.type,
        details: room.details,
        price: room.price,
      })),
    };


  return (
    <div className="relative">

     <div className="flex justify-between items-center p-4 bg-transparent absolute w-full z-10 text-white">
        <div className="text-2xl font-bold text-green-400">Easy Keys</div>
        <div className="hidden lg:flex items-center gap-8">
          <NavBar />
        </div>

        <div className="lg:hidden">
          <MobileNav />
        </div>
     </div>
     <div className="relative mb-8">
     <BookLayout />
     
     </div>
      
      {/* Date Selection and Guests Dropdown */}

      <div className="flex justify-center items-center my-6 gap-4 p-4 rounded-lg z-50">
      
        
        <DatePicker
          placeholder="Arrival"
          onChange={(date) => setArrivalDate(date)}
        />
        <DatePicker
          placeholder="Departure"
          onChange={(date) => setDepartureDate(date)}
          disabled={!arrivalDate}
        />

        {/* Dropdown for guests */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-40 text-center hidden lg:block">
              {guests} {guests > 1 ? "guests" : "guest"}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {[1, 2].map((num) => (
              <DropdownMenuItem
                key={num}
                onClick={() => setGuests(num)}
              >
                {num} {num > 1 ? "guests" : "guest"}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>


        
      </div>

      
      <div className="flex flex-col md:flex-col lg:flex-row gap-9 mb-6 mx-4">
        
        <div className="w-full lg:w-2/3">
          <RoomList 
          arrivalDate={arrivalDate}
          departureDate={departureDate}
          />
        </div>

        <div className="w-full lg:w-1/3">
          <RoomSummary 
            arrivalDate={arrivalDate}
            departureDate={departureDate}
            guests={guests}
            nights={nights}
          />
        </div>


      </div>

      
      <Confirmation roomSummary={roomSummary} />
    

      
    </div>
  );
}

export default Rooms;