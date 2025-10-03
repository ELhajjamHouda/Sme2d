'use client';

import React, { useState } from 'react';
import Breadcrumb from "../../components/Breadcrumb";

import dynamic from "next/dynamic";

const ProjectMap = dynamic(() => import('../../components/ProjectMap'), {
  ssr: false, // هادي كتخلي الماب غير يتحمل فالـ client
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
          
      {/*ProductAreaOne */}
      <ProductAreaOne />

      <div className="container mx-auto px-4 py-8">
        {/* <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Morocco Project Map</h1>
          <p className="text-lg text-gray-600">
            Interactive map showing project locations across Morocco with detailed information and navigation
          </p>
        </div> */}

        {/* Controls */}
        {/* <div className="mb-8 p-6 bg-white rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Map Controls</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <div>
              <label className="block text-sm font-medium mb-2">Map Style:</label>
              <select
                value={selectedMapStyle}
                onChange={(e) => setSelectedMapStyle(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="default">Default (OpenStreetMap)</option>
                <option value="satellite">Satellite</option>
                <option value="terrain">Terrain</option>
                <option value="dark">Dark</option>
              </select>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="userLocation"
                checked={showUserLocation}
                onChange={(e) => setShowUserLocation(e.target.checked)}
                className="mr-2"
              />
              <label htmlFor="userLocation" className="text-sm font-medium">
                Show User Location
              </label>
            </div>
          </div>
        </div> */}

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

        {/* <div className="mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">Project Types & Status</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3">Project Types</h4>
                <div className="space-y-2">
                  {['Web Development', 'Mobile App', 'E-commerce', 'SaaS', 'AI/ML', 'Blockchain', 'IoT', 'Game'].map((type) => (
                    <div key={type} className="flex items-center">
                      <div className="w-4 h-4 bg-blue-100 rounded-full mr-3 flex items-center justify-center text-xs">
                        {type === 'Web Development' && '💻'}
                        {type === 'Mobile App' && '📱'}
                        {type === 'E-commerce' && '🛒'}
                        {type === 'SaaS' && '☁️'}
                        {type === 'AI/ML' && '🤖'}
                        {type === 'Blockchain' && '⛓️'}
                        {type === 'IoT' && '🌐'}
                        {type === 'Game' && '🎮'}
                      </div>
                      <span className="text-sm text-gray-700">{type}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-3">Project Status</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-700">Active Projects</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gray-500 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-700">Completed Projects</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-700">Upcoming Projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">Usage Example</h3>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`import ProjectMap from './components/elements/ProjectMap';

const projects = [
  {
    id: '1',
    name: 'E-Commerce Platform',
    type: 'E-commerce',
    position: [51.5074, -0.1278],
    description: 'A modern e-commerce platform...',
    pageUrl: '/projects/ecommerce-platform',
    color: '#10b981',
    status: 'active'
  }
];

<ProjectMap
  center={[51.5074, -0.1278]}
  zoom={13}
  projects={projects}
  height="600px"
  mapStyle="default"
  showUserLocation={true}
  onProjectClick={(project) => console.log(project)}
/>`}
            </pre>
          </div>
        </div> */}

        {/* <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Features</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium mb-2">Interactive Features</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Click markers to view project details</li>
                <li>• Clickable project names for navigation</li>
                <li>• Multiple map styles (Default, Satellite, Terrain, Dark)</li>
                <li>• User location detection</li>
                <li>• Responsive design for all devices</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Project Information</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Project name and type</li>
                <li>• Project status with color coding</li>
                <li>• Detailed descriptions</li>
                <li>• Direct links to project pages</li>
                <li>• Custom icons for different project types</li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ProjectMapDemoPage;
