// components/gallery/GalleryGrid.js
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const galleryImages = [
  {
    id: 1,
    src: "https://source.unsplash.com/random/800x600/?birthday,decoration",
    alt: "Birthday Decoration",
    category: "birthday",
  },
  {
    id: 2,
    src: "https://source.unsplash.com/random/800x600/?wedding,decoration",
    alt: "Wedding Decoration",
    category: "wedding",
  },
  // Add more images for different categories
];

const categories = [
  { id: "all", name: "All" },
  { id: "birthday", name: "Birthday" },
  { id: "wedding", name: "Wedding" },
  { id: "babyshower", name: "Baby Shower" },
  { id: "anniversary", name: "Anniversary" },
];

function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div className="gallery-section py-8">
      <div className="container mx-auto px-4">
        {/* Category Filter */}
        <div className="category-filter flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full transition ${
                activeCategory === category.id
                  ? "bg-pink-600 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="gallery-item rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover hover:scale-105 transition-transform"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredImages.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No images found for this category.
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full">
            <button
              className="absolute top-0 right-0 bg-white rounded-full p-2 m-4"
              onClick={() => setSelectedImage(null)}
            >
              <FaTimes className="text-black" />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[90vh] max-w-full mx-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default GalleryGrid;
