"use client"


import RoomComponent from "./RoomComponent";




interface RoomProps {
  id: string;
  type: string;
  price: number;
  details: string;
  image: string;
}

interface RoomListProps {
  arrivalDate?: Date;
  departureDate?: Date;
}

const RoomList = ( { arrivalDate, departureDate }: RoomListProps) => {
  

  const rooms: RoomProps[] = [
    { id: "1", 
      type: "Standard Room", 
      price: 196, 
      details: "Limited view• Non-smoking• Cable/Satellite TV• Free Toiletries• Shower• Internet Access• Heating• Fridge• Linen Provided• Room Safe• Desk• Wireless Internet• Tea/Coffee Maker• Television• Telephone• Linen and Towels Provided• Iron/Ironing board• Hairdryer• Air conditioned", 
      image: "/assets/images/replacement.jpg"
    },
    { id: "2", 
      type: "Deluxe Room", 
      price: 221, 
      details: "Limited view• Non-smoking• Cable/Satellite TV• Free Toiletries• Shower• Internet Access• Heating• Fridge• Linen Provided• Room Safe• Desk• Wireless Internet• Tea/Coffee Maker• Television• Telephone• Linen and Towels Provided• Iron/Ironing board• Hairdryer• Air conditioned", 
      image: "/assets/images/deluxe.jpg" 
    },
    { id: "3", 
      type: "Suite", 
      price: 350, 
      details: "Limited view• Non-smoking• Cable/Satellite TV• Free Toiletries• Shower• Internet Access• Heating• Fridge• Linen Provided• Room Safe• Desk• Wireless Internet• Tea/Coffee Maker• Television• Telephone• Linen and Towels Provided• Iron/Ironing board• Hairdryer• Air conditioned", 
      image: "/assets/images/standard.jpg" 
    },
  ];
  
   

  return (
    <div className="space-y-4 pb-10 ">

    
      {rooms.map((room) => (
        <div key={room.id} className="gap-9">

            <RoomComponent
            room={room}
            arrivalDate={arrivalDate}
            departureDate={departureDate}
            />

            <div>
           

            </div>
         
        </div>
      ))}
    </div>
  );
};

export default RoomList;
