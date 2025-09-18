import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className=" mx-auto flex flex-col items-center gap-4">
        {/* Name */}
        <h2 className="text-xl font-semibold">PostHub</h2>

        {/* Social Icons */}
        <div className="flex gap-6  text-2xl">
          <a href="#" className="hover:text-gray-400"><FaFacebook /></a>
          <a href="#" className="hover:text-gray-400"><FaTwitter /></a>
          <a href="#" className="hover:text-gray-400"><FaInstagram /></a>
          <a href="#" className="hover:text-gray-400"><FaLinkedin /></a>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm mt-2">
          © {new Date().getFullYear()} PostHub. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
