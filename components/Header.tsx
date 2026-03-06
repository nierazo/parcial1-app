import Link from 'next/link'; // Imports Link from Next.js
import Image from 'next/image'; // Imports Image from Next.js

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* We use Link for the link to the home page */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">Parcial 1</span>
        </Link>
        <nav>
          {/* We replaced all <a> tags with <Link> tags */}
          <Link href="/" className="px-3 hover:text-gray-300">Inicio</Link>
          <Link href="/actors" className="px-3 hover:text-gray-300">Actores</Link>
          <Link href="/crear" className="px-3 hover:text-gray-300">Crear</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;