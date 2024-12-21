import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button';
import useRoomStore from '@/store/store';
import { useRouter } from 'next/navigation';

function SubmitButton() {

  const router = useRouter();
  const { arrivalDate, departureDate, guests, selectedRooms } = useRoomStore();

  const calculateNights = (arrival: Date | null, departure: Date | null): number => {
    if (!arrival || !departure) return 0;
    const diffTime = Math.abs(departure.getTime() - arrival.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
  };

  const calculateTotalPrice = (rooms: { price: number; nights: number }[]): number => {
    return rooms.reduce((total, room) => total + room.price * room.nights, 0);
  };

  const handleConfirm = () => {

    const nights = calculateNights(arrivalDate, departureDate);
    const totalPrice = calculateTotalPrice(selectedRooms);

    setSummary({
      arrivalDate,
      departureDate,
      guests,
      nights,
      totalPrice,
      selectedRooms,
    });
    router.push('/confirmation');
  };


  return (
    <div>
      <Button className="bg-green-400 w-fit text-center cursor-pointer hover:bg-green-500 text-white rounded-lg transition-colors px-4 py-2 font-medium" onClick={handleConfirm}>Confirm</Button>
    </div>
  )
}

export default SubmitButton