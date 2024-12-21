"use client"

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import useRoomStore from '@/store/store';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

function Confirmation({ roomSummary }: { roomSummary: any }) {

  const router = useRouter();
  
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });
    
      const [isSubmitting, setIsSubmitting] = useState(false);
      const [error, setError] = useState('');
      const [success, setSuccess] = useState(false);

      const { selectedRooms, removeRoom } = useRoomStore();
      
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      
    
     
    

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        const payload = { ...formData, roomSummary };
    
        try {
          const response = await fetch('/api/booking', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          });
    
          if (response.ok) {
            setSuccess(true);
            selectedRooms.forEach(room => removeRoom(room.instanceId));
            router.push('/success');
           
          } else {
            console.error('Submission failed.');
          }
        } catch (error) {
          console.error('Error submitting form.', error);
        } finally {
            setIsSubmitting(false);
          }
      };
    
      return (
    
          <div className=" py-6 text-white">
            <div className="flex flex-col xl:flex-row gap-[30px]">
            
              <div className='order-2 xl:order-none'>
                <form className='flex flex-col gap-6 p-10 bg-[#157722] rounded-xl' onSubmit={handleSubmit}>
                  <h3 className='text-4xl text-accent'>Your details</h3>
                  <p className='text-white/60'>Please fill out the form below.</p>
    
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <Input name="firstName" value={formData.firstName} onChange={handleChange} type='text' placeholder='First Name' required />
                    <Input name="lastName" value={formData.lastName} onChange={handleChange} type='text' placeholder='Last Name' required />
                    <Input name="email" value={formData.email} onChange={handleChange} type='email' placeholder='Email Address' required />
                    <Input name="phone" value={formData.phone} onChange={handleChange} type='text' placeholder='Phone Number' />
                  </div>
    
                  <Textarea name="message" value={formData.message} onChange={handleChange} className='h-[200px]' placeholder='Type your message here' required />
    
                  
    
                  <Button type='submit' className='max-w-32 bg-green-400 text-white hover:bg-green-600' disabled={isSubmitting}>
                    Book
                  </Button>
    
                  {success && <p className="text-green-500">Your message has been sent successfully!</p>}
                  {error && <p className="text-red-500">{error}</p>}
                </form>
              </div>
            

            </div>
            

           
          </div>
    );
}
    

export default Confirmation 