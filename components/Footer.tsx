import { Facebook, Phone, Mail } from "lucide-react";
import Link from "next/link";

 

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 text-center">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
       

       {/* Contact Information */}
  <div className="">
  <h2 className="text-xl font-bold mb-4 text-center">Contact Us</h2>
  <div className="space-y-2">
    <div className="flex justify-center items-center gap-2">
      <Phone size={20} />
      <a href="tel:+233504375771">+233 504 375 771</a>
    </div>
    <div className="flex justify-center items-center gap-2">
      <Mail size={20} />
      <a href="mailto:someone@example.com">someone@example.com</a>
    </div>
  </div>
</div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <Link 
            href="https://facebook.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-blue-400 transition-colors"
          >
            <Facebook size={24} />
            <span>Facebook</span>
          </Link>
        </div>

        <div className="flex justify-center items-center">
          <p className="text-gray-400">&copy; 2024 All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
  );
}

export default Footer;
