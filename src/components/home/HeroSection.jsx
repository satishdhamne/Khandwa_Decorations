// components/home/HeroSection.js
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section
      className="relative h-96 md:h-[500px] overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://source.unsplash.com/random/1200x800/?celebration,decoration")',
      }}
    >
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fadeIn">
          Make Your Celebrations Magical
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl animate-fadeIn animation-delay-300">
          Professional decoration services for birthdays, anniversaries,
          weddings and all your special moments
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn animation-delay-600">
          <Link
            to="/contact"
            className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full transition duration-300"
          >
            Book Now
          </Link>
          <Link
            to="/services"
            className="bg-transparent hover:bg-white hover:text-pink-600 text-white font-bold py-3 px-8 rounded-full border-2 border-white transition duration-300"
          >
            Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
