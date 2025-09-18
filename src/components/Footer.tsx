export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center mt-8">
      © {new Date().getFullYear()} PostHub. All rights reserved.
    </footer>
  );
}