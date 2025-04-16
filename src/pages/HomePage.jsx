import React from 'react'
import HeroSection from '../components/home/HeroSection';
import ServiceCard from '../components/services/ServiceCard';
import ContactForm from '../components/contact/ContactForm';
import GalleryPage from './GalleryPage';
import ServicesPage from './ServicesPage';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ServicesPage />
      <GalleryPage />
      <ContactForm />
    </>
  );
}

export default HomePage
