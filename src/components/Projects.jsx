import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaExternalLinkAlt, FaImages, FaPlay } from "react-icons/fa";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [mediaIndex, setMediaIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Navmed",
      description:
        "A comprehensive e-commerce platform for medical equipment with an advanced admin panel. Features include product management, order tracking, payment integration, and real-time inventory updates.",
      longDescription:
        "Navmed is a full-featured medical equipment e-commerce solution that bridges the gap between healthcare providers and suppliers. The platform includes sophisticated inventory management, user role management, and detailed analytics for business insights.",
      techStack: [
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "Prisma",
        "MySQL",
      ],
      challenges: [
        "Implemented complex inventory tracking system",
        "Built real-time order status updates",
        "Integrated multiple payment gateways",
        "Created responsive admin dashboard",
      ],
      features: [
        "Advanced product search and filtering",
        "Secure payment processing",
        "Order management system",
        "User role-based access control",
        "Real-time inventory tracking",
      ],
      github: "https://github.com/yourusername/navmed",
      live: "https://navmed.com",
      screenshots: [
        "https://via.placeholder.com/1200x800/1a1a2e/ffffff?text=Navmed+Homepage",
        "https://via.placeholder.com/1200x800/16213e/ffffff?text=Navmed+Products",
        "https://via.placeholder.com/1200x800/0f3460/ffffff?text=Navmed+Admin+Panel",
        "https://via.placeholder.com/1200x800/1a1a2e/ffffff?text=Navmed+Checkout",
        "https://via.placeholder.com/1200x800/16213e/ffffff?text=Navmed+Orders",
        "https://via.placeholder.com/1200x800/0f3460/ffffff?text=Navmed+Analytics",
      ],
      videos: ["https://example.com/navmed-demo.mp4"],
    },
    {
      id: 2,
      title: "Car-Hire",
      description:
        "An innovative online marketplace connecting car owners with renters. Features a central management system for platform administrators, real-time booking, and secure payment processing.",
      longDescription:
        "Car-Hire revolutionizes the car rental industry by creating a peer-to-peer marketplace where car owners can monetize their vehicles and renters can find affordable, convenient transportation options.",
      techStack: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "Prisma",
        "MySQL",
      ],
      challenges: [
        "Built complex booking algorithm",
        "Implemented real-time availability updates",
        "Created dual interface for owners/renters",
        "Integrated secure payment system",
      ],
      features: [
        "Smart search and filtering",
        "Real-time booking system",
        "Owner and renter dashboards",
        "Admin management panel",
        "Automated payment processing",
      ],
      github: "https://github.com/yourusername/car-hire",
      live: "https://car-hire.com",
      screenshots: [
        "https://via.placeholder.com/1200x800/16213e/ffffff?text=Car-Hire+Search",
        "https://via.placeholder.com/1200x800/0f3460/ffffff?text=Car-Hire+Listing",
        "https://via.placeholder.com/1200x800/1a1a2e/ffffff?text=Car-Hire+Booking",
        "https://via.placeholder.com/1200x800/16213e/ffffff?text=Car-Hire+Dashboard",
        "https://via.placeholder.com/1200x800/0f3460/ffffff?text=Car-Hire+Owner+Portal",
        "https://via.placeholder.com/1200x800/1a1a2e/ffffff?text=Car-Hire+Admin",
      ],
      videos: ["https://example.com/car-hire-demo.mp4"],
    },
    {
      id: 3,
      title: "GVB Support",
      description:
        "A social platform for Gender-Based Violence awareness and support. Users can share stories, post comments, like content, and seek help from authorities with integrated communication APIs.",
      longDescription:
        "GVB Support creates a safe space for survivors and advocates to connect, share resources, and access help. The platform uses Africa's Talking APIs for SMS notifications and emergency alerts.",
      techStack: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Prisma",
        "MySQL",
        "Africa's Talking APIs",
      ],
      challenges: [
        "Implemented sensitive content moderation",
        "Built anonymous posting system",
        "Integrated emergency alert system",
        "Created support resource directory",
      ],
      features: [
        "Anonymous story sharing",
        "Comment and like system",
        "Emergency contact integration",
        "Resource directory",
        "SMS alert notifications",
      ],
      github: "https://github.com/yourusername/gvb-support",
      live: "https://gvbsupport.com",
      screenshots: [
        "https://via.placeholder.com/1200x800/0f3460/ffffff?text=GVB+Homepage",
        "https://via.placeholder.com/1200x800/16213e/ffffff?text=GVB+Community",
        "https://via.placeholder.com/1200x800/1a1a2e/ffffff?text=GVB+Resources",
        "https://via.placeholder.com/1200x800/0f3460/ffffff?text=GVB+Emergency",
        "https://via.placeholder.com/1200x800/16213e/ffffff?text=GVB+Stories",
        "https://via.placeholder.com/1200x800/1a1a2e/ffffff?text=GVB+Support+Chat",
      ],
      videos: ["https://example.com/gvb-demo.mp4"],
    },
    {
      id: 4,
      title: "Hamisha Epic Tours",
      description:
        "A modern travel and tours booking platform for planning epic adventures. Features destination guides, itinerary planning, and seamless booking experiences.",
      longDescription:
        "Hamisha Epic Tours transforms travel planning with intuitive tools for discovering destinations, creating custom itineraries, and booking tours with local experts.",
      techStack: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      challenges: [
        "Created interactive destination maps",
        "Built custom itinerary builder",
        "Implemented booking calendar",
        "Integrated travel APIs",
      ],
      features: [
        "Destination discovery",
        "Custom itinerary builder",
        "Tour package listings",
        "Booking management",
        "Travel guides and tips",
      ],
      github: "https://github.com/yourusername/hamisha-epic-tours",
      live: "https://hamishaepictours.com",
      screenshots: [
        "https://via.placeholder.com/1200x800/1a1a2e/ffffff?text=Hamisha+Destinations",
        "https://via.placeholder.com/1200x800/16213e/ffffff?text=Hamisha+Itinerary",
        "https://via.placeholder.com/1200x800/0f3460/ffffff?text=Hamisha+Booking",
        "https://via.placeholder.com/1200x800/1a1a2e/ffffff?text=Hamisha+Tours",
        "https://via.placeholder.com/1200x800/16213e/ffffff?text=Hamisha+Map",
        "https://via.placeholder.com/1200x800/0f3460/ffffff?text=Hamisha+Reviews",
      ],
      videos: ["https://example.com/hamisha-demo.mp4"],
    },
    {
      id: 5,
      title: "Nelite POS",
      description:
        "A sophisticated Point of Sale system with integrated inventory management, online billing, and staff management. Features Daraja API integration for mobile payments.",
      longDescription:
        "Nelite POS is an enterprise-grade solution that streamlines retail operations with powerful features for sales tracking, inventory control, and team management.",
      techStack: [
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "Daraja API",
        "Prisma",
        "MySQL",
        "Africa's Talking API",
      ],
      challenges: [
        "Built real-time inventory sync",
        "Implemented offline capability",
        "Integrated M-Pesa payments",
        "Created staff performance tracking",
      ],
      features: [
        "Real-time sales tracking",
        "Inventory management",
        "Staff scheduling",
        "M-Pesa integration",
        "Customer loyalty program",
      ],
      github: "https://github.com/yourusername/nelite-pos",
      live: "https://nelitepos.com",
      screenshots: [
        "https://via.placeholder.com/1200x800/16213e/ffffff?text=Nelite+Dashboard",
        "https://via.placeholder.com/1200x800/0f3460/ffffff?text=Nelite+Sales",
        "https://via.placeholder.com/1200x800/1a1a2e/ffffff?text=Nelite+Inventory",
        "https://via.placeholder.com/1200x800/16213e/ffffff?text=Nelite+Reports",
        "https://via.placeholder.com/1200x800/0f3460/ffffff?text=Nelite+Staff",
        "https://via.placeholder.com/1200x800/1a1a2e/ffffff?text=Nelite+Billing",
      ],
      videos: ["https://example.com/nelite-demo.mp4"],
    },
    {
      id: 6,
      title: "Qt Assignment Manager",
      description:
        "A desktop application built with Qt for managing academic assignments. Features task organization, deadline tracking, and progress monitoring.",
      longDescription:
        "Qt Assignment Manager helps students and educators organize coursework with intuitive tools for creating, tracking, and submitting assignments.",
      techStack: ["C++", "Qt Framework", "SQLite"],
      challenges: [
        "Built cross-platform desktop app",
        "Implemented drag-and-drop interface",
        "Created notification system",
        "Integrated calendar view",
      ],
      features: [
        "Assignment creation",
        "Deadline reminders",
        "Progress tracking",
        "File attachment support",
        "Grade management",
      ],
      github: "https://github.com/yourusername/qt-assignment-manager",
      screenshots: [
        "https://via.placeholder.com/1200x800/0f3460/ffffff?text=Qt+Assignment+Manager",
        "https://via.placeholder.com/1200x800/1a1a2e/ffffff?text=Qt+Calendar",
        "https://via.placeholder.com/1200x800/16213e/ffffff?text=Qt+Tasks",
        "https://via.placeholder.com/1200x800/0f3460/ffffff?text=Qt+Analytics",
        "https://via.placeholder.com/1200x800/1a1a2e/ffffff?text=Qt+Deadlines",
        "https://via.placeholder.com/1200x800/16213e/ffffff?text=Qt+Grades",
      ],
      videos: ["https://example.com/qt-demo.mp4"],
    },
    {
      id: 7,
      title: "E-Health Records System",
      description:
        "A comprehensive electronic health records system for healthcare providers to manage patient data, appointments, and medical histories securely.",
      longDescription:
        "This E-Health Records System digitizes patient management with secure data storage, role-based access control, and integration with lab systems.",
      techStack: [
        "React",
        "TypeScript",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Redis",
      ],
      challenges: [
        "Implemented HIPAA compliance",
        "Built secure data encryption",
        "Created appointment scheduling",
        "Integrated lab results",
      ],
      features: [
        "Patient records management",
        "Appointment scheduling",
        "Prescription management",
        "Lab result integration",
        "Secure messaging",
      ],
      github: "https://github.com/yourusername/ehealth-records",
      live: "https://ehealthrecords.com",
      screenshots: [
        "https://via.placeholder.com/1200x800/1a1a2e/ffffff?text=E-Health+Dashboard",
        "https://via.placeholder.com/1200x800/16213e/ffffff?text=E-Health+Records",
        "https://via.placeholder.com/1200x800/0f3460/ffffff?text=E-Health+Appointments",
        "https://via.placeholder.com/1200x800/1a1a2e/ffffff?text=E-Health+Prescriptions",
        "https://via.placeholder.com/1200x800/16213e/ffffff?text=E-Health+Labs",
        "https://via.placeholder.com/1200x800/0f3460/ffffff?text=E-Health+Messaging",
      ],
      videos: ["https://example.com/ehealth-demo.mp4"],
    },
    {
      id: 8,
      title: "Smart Farming IoT",
      description:
        "An IoT platform for smart farming that monitors soil conditions, weather data, and automates irrigation systems for optimal crop yield.",
      longDescription:
        "Smart Farming IoT combines sensor data with machine learning to provide farmers with real-time insights and automated control of farming equipment.",
      techStack: ["React", "Node.js", "Python", "MQTT", "InfluxDB", "Grafana"],
      challenges: [
        "Built real-time sensor data pipeline",
        "Implemented ML models for predictions",
        "Created automated irrigation control",
        "Integrated weather APIs",
      ],
      features: [
        "Soil moisture monitoring",
        "Weather forecasting",
        "Automated irrigation",
        "Crop health analytics",
        "Mobile alerts",
      ],
      github: "https://github.com/yourusername/smart-farming-iot",
      live: "https://smartfarming.com",
      screenshots: [
        "https://via.placeholder.com/1200x800/16213e/ffffff?text=Smart+Farming+Dashboard",
        "https://via.placeholder.com/1200x800/0f3460/ffffff?text=Smart+Farming+Sensors",
        "https://via.placeholder.com/1200x800/1a1a2e/ffffff?text=Smart+Farming+Analytics",
        "https://via.placeholder.com/1200x800/16213e/ffffff?text=Smart+Farming+Control",
        "https://via.placeholder.com/1200x800/0f3460/ffffff?text=Smart+Farming+Reports",
        "https://via.placeholder.com/1200x800/1a1a2e/ffffff?text=Smart+Farming+Alerts",
      ],
      videos: ["https://example.com/smart-farming-demo.mp4"],
    },
    {
      id: 9,
      title: "E-Learning Platform",
      description:
        "An interactive e-learning platform with video courses, quizzes, assignments, and progress tracking for students and educators.",
      longDescription:
        "This comprehensive e-learning solution provides tools for course creation, student engagement, and performance analytics.",
      techStack: [
        "React",
        "TypeScript",
        "Node.js",
        "MongoDB",
        "Socket.io",
        "Redis",
      ],
      challenges: [
        "Built video streaming infrastructure",
        "Implemented real-time chat",
        "Created quiz engine",
        "Developed progress tracking",
      ],
      features: [
        "Video course hosting",
        "Interactive quizzes",
        "Assignment submission",
        "Live chat sessions",
        "Progress certificates",
      ],
      github: "https://github.com/yourusername/elearning-platform",
      live: "https://elearningplatform.com",
      screenshots: [
        "https://via.placeholder.com/1200x800/0f3460/ffffff?text=E-Learning+Courses",
        "https://via.placeholder.com/1200x800/1a1a2e/ffffff?text=E-Learning+Video",
        "https://via.placeholder.com/1200x800/16213e/ffffff?text=E-Learning+Quiz",
        "https://via.placeholder.com/1200x800/0f3460/ffffff?text=E-Learning+Assignments",
        "https://via.placeholder.com/1200x800/1a1a2e/ffffff?text=E-Learning+Chat",
        "https://via.placeholder.com/1200x800/16213e/ffffff?text=E-Learning+Progress",
      ],
      videos: ["https://example.com/elearning-demo.mp4"],
    },
    {
      id: 10,
      title: "Real Estate Marketplace",
      description:
        "A modern real estate platform for property listings, virtual tours, and agent-client communication with advanced search filters.",
      longDescription:
        "This real estate marketplace connects buyers, sellers, and agents with powerful tools for property discovery and transaction management.",
      techStack: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Elasticsearch",
      ],
      challenges: [
        "Implemented 3D virtual tours",
        "Built advanced search with Elasticsearch",
        "Created property recommendation engine",
        "Integrated mortgage calculator",
      ],
      features: [
        "Property listings",
        "Virtual 3D tours",
        "Advanced search filters",
        "Agent profiles",
        "Mortgage calculator",
      ],
      github: "https://github.com/yourusername/real-estate-marketplace",
      live: "https://realestatemarketplace.com",
      screenshots: [
        "https://via.placeholder.com/1200x800/1a1a2e/ffffff?text=Real+Estate+Search",
        "https://via.placeholder.com/1200x800/16213e/ffffff?text=Real+Estate+Listing",
        "https://via.placeholder.com/1200x800/0f3460/ffffff?text=Real+Estate+Virtual+Tour",
        "https://via.placeholder.com/1200x800/1a1a2e/ffffff?text=Real+Estate+Agent",
        "https://via.placeholder.com/1200x800/16213e/ffffff?text=Real+Estate+Map",
        "https://via.placeholder.com/1200x800/0f3460/ffffff?text=Real+Estate+Calculator",
      ],
      videos: ["https://example.com/realestate-demo.mp4"],
    },
    {
      id: 11,
      title: "Food Delivery App",
      description:
        "A complete food delivery solution with restaurant onboarding, real-time order tracking, and secure payment processing.",
      longDescription:
        "This food delivery platform connects hungry customers with local restaurants, providing seamless ordering, tracking, and delivery management.",
      techStack: [
        "React Native",
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.io",
        "Redis",
      ],
      challenges: [
        "Built real-time order tracking",
        "Implemented route optimization",
        "Created restaurant dashboard",
        "Integrated multiple payment gateways",
      ],
      features: [
        "Restaurant discovery",
        "Real-time order tracking",
        "Secure payments",
        "Delivery driver app",
        "Customer reviews",
      ],
      github: "https://github.com/yourusername/food-delivery-app",
      live: "https://fooddeliveryapp.com",
      screenshots: [
        "https://via.placeholder.com/1200x800/16213e/ffffff?text=Food+Delivery+Home",
        "https://via.placeholder.com/1200x800/0f3460/ffffff?text=Food+Delivery+Restaurant",
        "https://via.placeholder.com/1200x800/1a1a2e/ffffff?text=Food+Delivery+Tracking",
        "https://via.placeholder.com/1200x800/16213e/ffffff?text=Food+Delivery+Cart",
        "https://via.placeholder.com/1200x800/0f3460/ffffff?text=Food+Delivery+Orders",
        "https://via.placeholder.com/1200x800/1a1a2e/ffffff?text=Food+Delivery+Driver",
      ],
      videos: ["https://example.com/fooddelivery-demo.mp4"],
    },
    {
      id: 12,
      title: "Blockchain Wallet",
      description:
        "A secure cryptocurrency wallet with multi-currency support, transaction history, and biometric authentication.",
      longDescription:
        "This blockchain wallet provides users with a secure interface to manage multiple cryptocurrencies, track portfolio performance, and execute transactions.",
      techStack: [
        "React",
        "TypeScript",
        "Web3.js",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      challenges: [
        "Implemented secure key storage",
        "Built multi-chain support",
        "Created transaction signing",
        "Integrated hardware wallet support",
      ],
      features: [
        "Multi-currency support",
        "Secure key management",
        "Transaction history",
        "Portfolio tracking",
        "Biometric authentication",
      ],
      github: "https://github.com/yourusername/blockchain-wallet",
      live: "https://blockchainwallet.com",
      screenshots: [
        "https://via.placeholder.com/1200x800/0f3460/ffffff?text=Blockchain+Wallet+Dashboard",
        "https://via.placeholder.com/1200x800/1a1a2e/ffffff?text=Blockchain+Wallet+Send",
        "https://via.placeholder.com/1200x800/16213e/ffffff?text=Blockchain+Wallet+Receive",
        "https://via.placeholder.com/1200x800/0f3460/ffffff?text=Blockchain+Wallet+History",
        "https://via.placeholder.com/1200x800/1a1a2e/ffffff?text=Blockchain+Wallet+Portfolio",
        "https://via.placeholder.com/1200x800/16213e/ffffff?text=Blockchain+Wallet+Settings",
      ],
      videos: ["https://example.com/blockchain-demo.mp4"],
    },
    {
      id: 13,
      title: "AI Content Generator",
      description:
        "An AI-powered content generation tool that creates blog posts, social media content, and marketing copy using advanced language models.",
      longDescription:
        "This content generation platform leverages cutting-edge AI to help creators and marketers produce high-quality content quickly and efficiently.",
      techStack: [
        "React",
        "Python",
        "FastAPI",
        "OpenAI API",
        "PostgreSQL",
        "Redis",
      ],
      challenges: [
        "Integrated multiple AI models",
        "Built content optimization engine",
        "Created template system",
        "Implemented usage tracking",
      ],
      features: [
        "Blog post generation",
        "Social media content",
        "SEO optimization",
        "Multiple templates",
        "Content history",
      ],
      github: "https://github.com/yourusername/ai-content-generator",
      live: "https://aicontentgenerator.com",
      screenshots: [
        "https://via.placeholder.com/1200x800/1a1a2e/ffffff?text=AI+Generator+Dashboard",
        "https://via.placeholder.com/1200x800/16213e/ffffff?text=AI+Generator+Blog",
        "https://via.placeholder.com/1200x800/0f3460/ffffff?text=AI+Generator+Social",
        "https://via.placeholder.com/1200x800/1a1a2e/ffffff?text=AI+Generator+Templates",
        "https://via.placeholder.com/1200x800/16213e/ffffff?text=AI+Generator+History",
        "https://via.placeholder.com/1200x800/0f3460/ffffff?text=AI+Generator+Settings",
      ],
      videos: ["https://example.com/ai-generator-demo.mp4"],
    },
    {
      id: 14,
      title: "Fitness Tracker App",
      description:
        "A comprehensive fitness tracking application with workout plans, progress monitoring, and social features for fitness enthusiasts.",
      longDescription:
        "This fitness app helps users achieve their health goals with personalized workout plans, nutrition tracking, and community support.",
      techStack: [
        "React Native",
        "Node.js",
        "Express",
        "MongoDB",
        "GraphQL",
        "AWS",
      ],
      challenges: [
        "Built workout plan algorithm",
        "Implemented activity tracking",
        "Created social features",
        "Integrated wearables",
      ],
      features: [
        "Personalized workouts",
        "Progress tracking",
        "Nutrition logging",
        "Social challenges",
        "Wearable integration",
      ],
      github: "https://github.com/yourusername/fitness-tracker",
      live: "https://fitnesstracker.com",
      screenshots: [
        "https://via.placeholder.com/1200x800/16213e/ffffff?text=Fitness+Tracker+Dashboard",
        "https://via.placeholder.com/1200x800/0f3460/ffffff?text=Fitness+Tracker+Workout",
        "https://via.placeholder.com/1200x800/1a1a2e/ffffff?text=Fitness+Tracker+Progress",
        "https://via.placeholder.com/1200x800/16213e/ffffff?text=Fitness+Tracker+Nutrition",
        "https://via.placeholder.com/1200x800/0f3460/ffffff?text=Fitness+Tracker+Social",
        "https://via.placeholder.com/1200x800/1a1a2e/ffffff?text=Fitness+Tracker+Challenges",
      ],
      videos: ["https://example.com/fitness-demo.mp4"],
    },
  ];

  const openModal = (project, index = 0) => {
    setSelectedProject(project);
    setMediaIndex(index);
    setModalOpen(true);
  };

  return (
    <>
      <section
        id="projects"
        className="py-20 bg-gradient-to-b from-transparent to-white/5"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="section-title text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>

          <div className="space-y-20">
            {projects.map((project, index) => {
              const [ref, inView] = useInView({
                triggerOnce: true,
                threshold: 0.1,
              });

              return (
                <motion.div
                  key={project.id}
                  ref={ref}
                  className={`grid md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? "" : "md:grid-flow-dense"
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6 }}
                >
                  {/* Left side - Description */}
                  <div
                    className={
                      index % 2 === 0 ? "md:pr-8" : "md:pl-8 md:col-start-2"
                    }
                  >
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                        {project.title}
                      </h3>

                      <p className="text-white/80 mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-3 text-white/90">
                          Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80 border border-white/10"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-3 text-white/90">
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {project.features.slice(0, 3).map((feature, i) => (
                            <li
                              key={i}
                              className="flex items-start text-white/70"
                            >
                              <span className="text-blue-400 mr-2">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-4">
                        {project.github && (
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <FaGithub className="mr-2" />
                            Code
                          </motion.a>
                        )}
                        {project.live && (
                          <motion.a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white hover:from-blue-600 hover:to-purple-600 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <FaExternalLinkAlt className="mr-2" />
                            Live Demo
                          </motion.a>
                        )}
                      </div>
                    </motion.div>
                  </div>

                  {/* Right side - Media Gallery */}
                  <div className={index % 2 === 0 ? "" : "md:col-start-1"}>
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 }}
                      className="relative group cursor-pointer"
                      onClick={() => openModal(project, 0)}
                    >
                      {/* Main screenshot */}
                      <div className="relative rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-blue-500/50 transition-all duration-300">
                        <img
                          src={project.screenshots[0]}
                          alt={`${project.title} main screenshot`}
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                        />

                        {/* Overlay with buttons */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                          <div className="flex gap-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                openModal(project, 0);
                              }}
                              className="p-2 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors"
                            >
                              <FaImages size={16} />
                            </button>
                            {project.videos && project.videos.length > 0 && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  openModal(
                                    project,
                                    project.screenshots.length,
                                  );
                                }}
                                className="p-2 bg-purple-500 rounded-full hover:bg-purple-600 transition-colors"
                              >
                                <FaPlay size={16} />
                              </button>
                            )}
                          </div>
                          <span className="text-white text-sm bg-black/50 px-2 py-1 rounded">
                            {project.screenshots.length +
                              (project.videos?.length || 0)}{" "}
                            media
                          </span>
                        </div>
                      </div>

                      {/* Thumbnail strip */}
                      <div className="absolute -bottom-4 left-4 right-4 flex gap-2 justify-center">
                        {project.screenshots
                          .slice(0, 3)
                          .map((screenshot, i) => (
                            <div
                              key={i}
                              className="w-16 h-12 rounded-lg overflow-hidden border-2 border-white/20 hover:border-blue-500 transition-colors cursor-pointer"
                              onClick={(e) => {
                                e.stopPropagation();
                                openModal(project, i);
                              }}
                            >
                              <img
                                src={screenshot}
                                alt={`Thumbnail ${i + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ))}
                        {(project.screenshots.length > 3 ||
                          project.videos?.length > 0) && (
                          <div
                            className="w-16 h-12 rounded-lg overflow-hidden border-2 border-white/20 hover:border-blue-500 transition-colors cursor-pointer bg-gray-800 flex items-center justify-center text-white text-sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              openModal(project, 3);
                            }}
                          >
                            +
                            {project.screenshots.length -
                              3 +
                              (project.videos?.length || 0)}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal for fullscreen media viewing */}
      <ProjectModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        project={selectedProject}
        mediaIndex={mediaIndex}
        setMediaIndex={setMediaIndex}
      />
    </>
  );
};

export default Projects;
