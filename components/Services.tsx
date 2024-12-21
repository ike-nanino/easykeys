import React from 'react'

function Services() {
  return (
    <div>
        <div className='py-6'>
            <h1 className='lg:text-2xl text-center font-bold pb-4'>Our Services</h1>
            <h3 className="text-center lg:text-xl font-medium text-gray-500">Easy Keys Guest House provides you with all services you need</h3>
        </div>


        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8'>
            <div className='bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow'>
                <span className='text-4xl text-blue-500'>📶</span>
                <h2 className='text-xl font-semibold mt-4 mb-2'>Free Wifi</h2>
                <p className='text-gray-600'>Stay connected with our high-speed wireless internet available throughout the premises, perfect for both business and leisure travelers.</p>
            </div>
            <div className='bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow'>
                <span className='text-4xl text-yellow-500'>🍳</span>
                <h2 className='text-xl font-semibold mt-4 mb-2'>Breakfast Service</h2>
                <p className='text-gray-600'>Start your day right with our complimentary breakfast service featuring a variety of fresh, local and continental options.</p>
            </div>
            <div className='bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow'>
                <span className='text-4xl text-green-500'>🕒</span>
                <h2 className='text-xl font-semibold mt-4 mb-2'>24/7 Service</h2>
                <p className='text-gray-600'>Our dedicated staff is available round the clock to assist you with any requests or concerns, ensuring a comfortable stay at any hour.</p>
            </div>
            <div className='bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow'>
                <span className='text-4xl text-purple-500'>🎉</span>
                <h2 className='text-xl font-semibold mt-4 mb-2'>Event Spaces</h2>
                <p className='text-gray-600'>Perfect venues for your special occasions - from intimate gatherings to large celebrations, with customizable setups and modern amenities.</p>
            </div>
        </div>
      
    </div>
  )
}

export default Services
