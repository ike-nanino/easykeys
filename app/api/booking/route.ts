import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Define the structure of your request data
interface BookingRequestData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string; // Optional
  message?: string;
  roomSummary?: {
    arrivalDate?: string;
    departureDate?: string;
    guests?: number;
    nights?: number;
    totalPrice?: number;
    rooms?: { type: string; details: string; price: number }[];
  };
}

// POST method for handling email sending
export async function POST(req: Request) {
  try {
    const body: BookingRequestData = await req.json();
    const { firstName, lastName, email, phone, message, roomSummary } = body;

    // Basic validation
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'All required fields (firstName, lastName, email, message) must be provided.' },
        { status: 400 }
      );
    }

    // Set up nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER, // Replace with your Gmail address
        pass: process.env.SMTP_PASS, // Replace with your Gmail App Password
      },
    });

    // Compose email
    const mailOptions = {
      from: process.env.SMTP_USER, // Sender email
      to: 'suekrage@gmail.com', // Recipient email
      subject: `New Room Booking Request from ${firstName} ${lastName}`,
      html: `
        <h1>New Booking Request</h1>
        <h2>User Details:</h2>
        <ul>
          <li><strong>First Name:</strong> ${firstName}</li>
          <li><strong>Last Name:</strong> ${lastName}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone || 'Not provided'}</li>
          <li><strong>Message:</strong> ${message}</li>
        </ul>
        ${
          roomSummary
            ? `
          <h2>Room Details:</h2>
          <ul>
            <li><strong>Arrival Date:</strong> ${roomSummary.arrivalDate || 'Not provided'}</li>
            <li><strong>Departure Date:</strong> ${roomSummary.departureDate || 'Not provided'}</li>
            <li><strong>Guests:</strong> ${roomSummary.guests || 0}</li>
            <li><strong>Nights:</strong> ${roomSummary.nights || 0}</li>
            <li><strong>Total Price:</strong> GH₵ ${roomSummary.totalPrice || 0}</li>
            ${
              roomSummary.rooms?.map(
                (room) => `
                <li>
                  <strong>Room Type:</strong> ${room.type}<br />
                  <strong>Details:</strong> ${room.details}<br />
                  <strong>Price:</strong> GH₵ ${room.price * (roomSummary.nights || 1)}
                </li>
              `
              ).join('') || ''
            }
          </ul>
        `
            : ''
        }
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Return success response
    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
  }
}
