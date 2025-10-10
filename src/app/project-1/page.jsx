'use client';

import React, { useState } from 'react';
import PortfolioOne from "../../components/PortfolioOne";
import Breadcrumb from "../../components/Breadcrumb";

import dynamic from "next/dynamic";

const ProjectMap = dynamic(() => import('../../components/ProjectMap'), {
  ssr: false, 
});
import ProductAreaOne from '../../components/ProductAreaOne';


const ProjectMapDemoPage = () => {
  // const [selectedMapStyle, setSelectedMapStyle] = useState('default');
  // const [showUserLocation, setShowUserLocation] = useState(false);

  // Sample project data - Morocco locations
  const sampleProjects = [
    {
      id: '1',
      name: 'E-Commerce Platform',
      type: 'E-commerce',
      position: [33.5731, -7.5898], // Casablanca
      description: 'A modern e-commerce platform with advanced features and mobile responsiveness.',
      pageUrl: '/projects/ecommerce-platform',
      color: '#10b981',
      status: 'active'
    },
    {
      id: '2',
      name: 'Mobile Banking App',
      type: 'Mobile App',
      position: [34.0209, -6.8416], // Rabat
      description: 'Secure mobile banking application with biometric authentication.',
      pageUrl: '/projects/mobile-banking',
      color: '#3b82f6',
      status: 'completed'
    },
    {
      id: '3',
      name: 'AI Chatbot System',
      type: 'AI/ML',
      position: [31.6295, -7.9811], // Marrakech
      description: 'Intelligent chatbot powered by machine learning for customer support.',
      pageUrl: '/projects/ai-chatbot',
      color: '#8b5cf6',
      status: 'upcoming'
    },
    {
      id: '4',
      name: 'Blockchain Voting System',
      type: 'Blockchain',
      position: [35.7595, -5.8340], // Tangier
      description: 'Decentralized voting system using blockchain technology for transparency.',
      pageUrl: '/projects/blockchain-voting',
      color: '#f59e0b',
      status: 'active'
    },
    {
      id: '5',
      name: 'IoT Smart Home',
      type: 'IoT',
      position: [32.2994, -9.2371], // Agadir
      description: 'Internet of Things solution for smart home automation and monitoring.',
      pageUrl: '/projects/iot-smart-home',
      color: '#06b6d4',
      status: 'completed'
    },
    {
      id: '6',
      name: 'SaaS Analytics Dashboard',
      type: 'SaaS',
      position: [34.2611, -6.5802], // Kenitra
      description: 'Cloud-based analytics dashboard for business intelligence and reporting.',
      pageUrl: '/projects/saas-analytics',
      color: '#ef4444',
      status: 'active'
    },
    {
      id: '7',
      name: 'Web Development Hub',
      type: 'Web Development',
      position: [33.8869, -5.5567], // Meknes
      description: 'Modern web development solutions and digital transformation services.',
      pageUrl: '/projects/web-development-hub',
      color: '#8b5cf6',
      status: 'active'
    },
    {
      id: '8',
      name: 'Game Studio',
      type: 'Game',
      position: [32.3209, -6.3603], // Beni Mellal
      description: 'Indie game development studio creating innovative gaming experiences.',
      pageUrl: '/projects/game-studio',
      color: '#f97316',
      status: 'upcoming'
    }
  ];

  const handleProjectClick = (project) => {
    console.log('Project clicked:', project);
    // You can add additional logic here, like opening a modal or updating state
  };

  const handleMapClick = (lat, lng) => {
    console.log('Map clicked at:', lat, lng);
  };

  return (

    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
          <Breadcrumb
          title="Projects"
          imageHeader="/assets/img/hero/project-1.jpeg"
          />
          
          {/*PortfolioOne*/}
            <PortfolioOne />

      {/*ProductAreaOne */}
      <ProductAreaOne />

      <div className="container mx-auto px-4 py-8">
        {/* Project Map */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              {/* <h2 className="text-xl font-semibold">Morocco Project Locations</h2> */}
              <p className="text-sm text-gray-600 mt-1">
                Cliquez sur n'importe quel marqueur pour afficher les détails du projet et accéder à sa page.
              </p>
            </div>
            <div className="relative">
              <ProjectMap
                center={[32.4279, -6.8513]}
                zoom={6}
                projects={sampleProjects}
                height="600px"
                // mapStyle={selectedMapStyle}
                // showUserLocation={showUserLocation}
                onProjectClick={handleProjectClick}
                onMapClick={handleMapClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectMapDemoPage;
