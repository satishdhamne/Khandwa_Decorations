// src/components/home/GalleryPreview.js

import React from "react";

// Sample images — replace with your own later in assets/images
const images = [
  "https://plus.unsplash.com/premium_photo-1674235766400-b2642b8ffa43?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVjb3JhdGlvbnN8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1674235766400-b2642b8ffa43?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVjb3JhdGlvbnN8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1674235766400-b2642b8ffa43?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVjb3JhdGlvbnN8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1674235766400-b2642b8ffa43?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVjb3JhdGlvbnN8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1674235766400-b2642b8ffa43?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVjb3JhdGlvbnN8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1674235766400-b2642b8ffa43?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVjb3JhdGlvbnN8ZW58MHx8MHx8fDA%3D",
  
];

const GalleryPreview = () => {
  return (
    <section className="px-8 py-16 bg-white">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">Gallery</h2>
        <p className="text-gray-600">
          Take a peek at our recent events and themes.
        </p>
      </div>

      {/* Responsive Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md">
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GalleryPreview;
