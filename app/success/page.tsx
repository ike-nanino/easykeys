import Link from 'next/link';

function Success() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-green-600 mb-4">Booking Confirmed!</h1>
      <p className="text-gray-700 mb-8">Thank you for your booking. We look forward to hosting you!</p>
      <Link href="/">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-md">Go Back Home</button>
      </Link>
    </div>
  );
}

export default Success;
