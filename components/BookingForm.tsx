"use client";



import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { DatePicker } from "./DateInput";
import Link from "next/link";
import { useState } from "react";


function BookingForm() {

  const [arrivalDate, setArrivalDate] = useState<Date | undefined>();
  const [departureDate, setDepartureDate] = useState<Date | undefined>();

  return (
    <div className="hidden lg:flex items-center bg-white/20 shadow-lg p-4 rounded-lg space-x-4">
      
      
      
      <DatePicker 
      placeholder="Arrival"
      onChange={(date) => setArrivalDate(date)} 
      
      />
      <DatePicker 
      placeholder="Departure"  
      onChange={(date) => setDepartureDate(date)}
      disabled={!arrivalDate}
      />
      
     


      {/* Guests Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-40 text-left">
            2 guests
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>1 guest</DropdownMenuItem>
          <DropdownMenuItem>2 guests</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Link
      href="/availability"
      >
      
      <Button variant="default" className="bg-green-500 text-white hover:bg-green-700">
        BOOK NOW
      </Button>
      </Link>
      
    </div>
  );
}

export default BookingForm;
