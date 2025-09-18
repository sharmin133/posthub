import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    // Footer Container with light orange background
    <footer className="bg-orange-500 text-white py-8">
      <div className="mx-auto flex flex-col items-center gap-4">
        {/* Website Name */}
        <h2 className="text-xl font-semibold">PostHub</h2>

        {/* Social Media Icons */}
        <div className="flex gap-6 text-2xl">
          <a href="#" className="hover:text-orange-200"><FaFacebook /></a>
          <a href="#" className="hover:text-orange-200"><FaTwitter /></a>
          <a href="#" className="hover:text-orange-200"><FaInstagram /></a>
          <a href="#" className="hover:text-orange-200"><FaLinkedin /></a>
        </div>

        {/* Copyright Text */}
        <p className="text-orange-100 text-sm mt-2">
          © {new Date().getFullYear()} PostHub. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
