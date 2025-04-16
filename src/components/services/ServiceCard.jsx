// // components/services/ServiceCard.js
// import { Link } from "react-router-dom";
// import { FaStar, FaWhatsapp } from "react-icons/fa";


// function ServiceCard({ title, description, imageUrl, price, rating }) {
//   const whatsappMessage = encodeURIComponent(
//     `Hi! I'm interested in your "${title}" service. Can you provide more details?`
//   );
//   // const title = "how";
//   // const description = "des";
//   // const imageUrl =
//   //   "https://plus.unsplash.com/premium_photo-1730828574251-687dd24ae471?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
//   // const price = "100";
//   // const rating = 5;

//   return (
//     <div className="service-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
//       <div className="relative">
//         <img 
//           src={imageUrl} 
//           alt={title} 
//           className="w-full h-48 object-cover" 
//         />
//         <div className="absolute top-3 left-3 bg-primary text-white px-3 py-1 rounded-full font-medium">
//           From ₹{price}
//         </div>
//       </div>
      
//       <div className="p-4">
//         <div className="flex items-center mb-2">
//           <div className="flex text-yellow-400 mr-1">
//             {[...Array(5)].map((_, i) => (
//               <FaStar 
//                 key={i} 
//                 className={i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"} 
//               />
//             ))}
//           </div>
//           <span className="text-gray-600 text-sm">({rating.toFixed(1)})</span>
//         </div>
        
//         <h3 className="font-bold text-lg mb-2">{title}</h3>
//         <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        
//         <div className="flex justify-between items-center">
//           <Link 
//             to={`/services/${encodeURIComponent(title.toLowerCase())}`} 
//             className="text-primary font-medium hover:underline"
//           >
//             View Details
//           </Link>
          
          
//             href={`https://wa.me/?text=${whatsappMessage}`}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition-colors"
          
//             <FaWhatsapp />
          
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ServiceCard;



import { Link } from "react-router-dom";
import { FaStar, FaWhatsapp } from "react-icons/fa";

function ServiceCard() {
  // Dummy data directly defined in the component
  const dummyData = {
    title: "Cold Pyro Entry",
    description:
      "Dramatic firework entry for weddings, perfect for grand celebrations.",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1730828574251-687dd24ae471?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "10000",
    rating: 4.5,
  };

  const whatsappMessage = encodeURIComponent(
    `Hi! I'm interested in your "${dummyData.title}" service. Can you provide more details?`
  );

  return (
    <div className="service-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={dummyData.imageUrl}
          alt={dummyData.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 left-3 bg-primary text-white px-3 py-1 rounded-full font-medium">
          From ₹{dummyData.price}
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400 mr-1">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={
                  i < Math.floor(dummyData.rating)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }
              />
            ))}
          </div>
          <span className="text-gray-600 text-sm">
            ({dummyData.rating.toFixed(1)})
          </span>
        </div>

        <h3 className="font-bold text-lg mb-2">{dummyData.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {dummyData.description}
        </p>

        <div className="flex justify-between items-center">
          <Link
            to={`/services/${encodeURIComponent(
              dummyData.title.toLowerCase()
            )}`}
            className="text-primary font-medium hover:underline"
          >
            View Details
          </Link>
        
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;