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
        "A comprehensive e-commerce platform for selling medical equipment with an advanced admin panel. Features include product management, order tracking, secure payments, and real-time inventory updates.",
      longDescription:
        "Navmed is a full-featured medical equipment e-commerce solution that bridges the gap between healthcare providers and suppliers. The platform includes sophisticated inventory management, user role management for admins, vendors and customers, and detailed analytics for business insights.",
      techStack: [
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "Prisma",
        "MySQL",
      ],
      challenges: [
        "Implemented complex medical inventory tracking system with expiry dates",
        "Built role-based access control for admin, vendors, and customers",
        "Integrated secure payment gateways for medical equipment transactions",
        "Created responsive admin dashboard with real-time analytics",
      ],
      features: [
        "Advanced medical equipment search and filtering",
        "Secure payment processing with multiple gateways",
        "Order management system with status tracking",
        "Admin panel with user and inventory management",
        "Real-time inventory tracking with low stock alerts",
        "Vendor dashboard for managing products and orders",
      ],
      github: "https://github.com/Matuwamai/navmed",
      live: "https://navmed-admin.vercel.app/",
      screenshots: [
        "/navmed2.jpeg",
        "/navmed1.png",
        // "./public/navmed2.png",
      ],
      //   videos: ["https://example.com/navmed-demo.mp4"],
    },
    {
      id: 2,
      title: "Car-Hire",
      description:
        "An innovative online marketplace connecting car owners willing to rent their cars with prospective customers. Features a central management system for platform owners/admins.",
      longDescription:
        "Car-Hire revolutionizes the car rental industry by creating a peer-to-peer marketplace where car owners can monetize their vehicles and renters can find affordable, convenient transportation options. The platform includes comprehensive admin tools for managing users, bookings, and disputes.",
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
        "Built complex booking algorithm with availability calendar",
        "Implemented real-time availability updates",
        "Created dual interface for owners and renters",
        "Integrated secure payment processing with escrow system",
        "Developed admin dashboard for platform management",
      ],
      features: [
        "Smart search and filtering by location, price, car type",
        "Real-time booking system with calendar integration",
        "Owner dashboard for managing listings and earnings",
        "Renter dashboard for booking history and reviews",
        "Admin management panel for user and dispute resolution",
        "Automated payment processing with escrow protection",
        "Review and rating system for both owners and renters",
      ],
      github: "https://github.com/Matuwamai/car-hire",
      live: "https://car-hire.com",
      screenshots: [
        "./carhire1.jpeg",
        "./carhire2.jpeg",
        "./carhire3.jpeg",
        "./carhire4.jpeg",
      ],
      videos: ["https://example.com/car-hire-demo.mp4"],
    },
    {
      id: 3,
      title: "GVB Support",
      description:
        "An online platform for Gender-Based Violence awareness and incident sharing. Users can seek help from different people and responsible authorities, with features for posting, commenting, liking, and reposting content.",
      longDescription:
        "GVB Support creates a safe space for survivors and advocates to connect, share resources, and access help. The platform uses Africa's Talking APIs for SMS notifications and emergency alerts. Users can share stories anonymously, get support from the community, and connect directly with authorities when needed.",
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
        "Implemented sensitive content moderation system",
        "Built anonymous posting system with identity protection",
        "Integrated Africa's Talking SMS API for emergency alerts",
        "Created support resource directory with geolocation",
        "Developed real-time notification system for responses",
      ],
      features: [
        "Anonymous story sharing and incident reporting",
        "Comment and like system with moderation",
        "Emergency contact integration with SMS alerts",
        "Resource directory with search by location",
        "Direct messaging with support volunteers",
        "Educational content about GBV awareness",
        "Repost functionality to spread awareness",
      ],
      github: "https://github.com/Matuwamai/Gbv-support",
      live: "https://gbvsupport.com",
      screenshots: ["./gvb1.jpeg", "./gvb2.jpeg", "./gvb3.jpeg"],
      videos: ["https://example.com/gvb-demo.mp4"],
    },
    {
      id: 4,
      title: "Hamisha Epic Tours",
      description:
        "An online web application system for travel and tours booking and planning. Users can discover destinations, plan itineraries, and book tours seamlessly.",
      longDescription:
        "Hamisha Epic Tours transforms travel planning with intuitive tools for discovering destinations, creating custom itineraries, and booking tours with local experts. The platform provides comprehensive travel guides, user reviews, and secure booking management.",
      techStack: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      challenges: [
        "Created interactive destination maps with points of interest",
        "Built custom itinerary builder with drag-and-drop interface",
        "Implemented booking calendar with real-time availability",
        "Integrated multiple payment gateways for tour bookings",
        "Developed review and rating system for tours and destinations",
      ],
      features: [
        "Destination discovery with rich media content",
        "Custom itinerary builder with day-by-day planning",
        "Tour package listings with detailed information",
        "Booking management with calendar integration",
        "Travel guides and tips from local experts",
        "User reviews and ratings for tours",
        "Secure payment processing for bookings",
      ],
      github: "https://github.com/Matuwamai/hamisha-epic-tours",
      live: "https://hamishaepictours.com",
      screenshots: [
        "./hamishaepicone.jpeg",
        "./hamishaepic1.png",
        "./hamishaepic2.png",
      ],
      videos: ["https://example.com/hamisha-demo.mp4"],
    },
    {
      id: 5,
      title: "Nelite POS",
      description:
        "A sophisticated Point of Sale system with integrated inventory management, online billing, and staff management. Features Daraja API integration for M-Pesa mobile payments and Africa's Talking for SMS notifications.",
      longDescription:
        "Nelite POS is an enterprise-grade solution that streamlines retail operations with powerful features for sales tracking, inventory control, and team management. The system includes M-Pesa integration via Daraja API for seamless mobile payments and SMS notifications for customers and staff.",
      techStack: [
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "Daraja API",
        "Prisma",
        "MySQL",
        "Africa's Talking API",
      ],
      challenges: [
        "Built real-time inventory synchronization across multiple outlets",
        "Implemented offline capability with data sync when online",
        "Integrated M-Pesa payments via Safaricom Daraja API",
        "Created staff performance tracking with analytics",
        "Developed customer loyalty program with points system",
        "Integrated Africa's Talking SMS for customer notifications",
      ],
      features: [
        "Real-time sales tracking with detailed reports",
        "Inventory management with low stock alerts",
        "Staff scheduling and performance tracking",
        "M-Pesa integration for mobile payments",
        "Customer loyalty program with points",
        "SMS notifications for transactions and promotions",
        "Multi-outlet management with centralized reporting",
        "Offline mode with automatic sync when online",
      ],
      github: "https://github.com/Nelite-IT-Solutions/nelite-pos-web",
      live: "https://nelitepos.com",
      screenshots: [
        "./nelite1.png",
        "./nelite2.png",
        "./nelite3.png",
        "./nelite4.png",
        "./nelite5.png",
        "./nelite6.png",
        "./nelite7.png",
      ],
      videos: ["https://example.com/nelite-demo.mp4"],
    },
    {
      id: 6,
      title: "Qt Assignment Manager",
      description:
        "A Qt desktop application for managing academic assignments. Features include assignment creation, deadline tracking, progress monitoring, and file attachments.",
      longDescription:
        "Qt Assignment Manager helps students and educators organize coursework with intuitive tools for creating, tracking, and submitting assignments. The application provides a clean interface for managing deadlines, tracking progress, and organizing course materials.",
      techStack: ["C++", "Qt Framework", "SQLite"],
      challenges: [
        "Built cross-platform desktop application with Qt",
        "Implemented drag-and-drop interface for file attachments",
        "Created notification system for upcoming deadlines",
        "Integrated calendar view for assignment scheduling",
        "Developed progress tracking with visual indicators",
      ],
      features: [
        "Assignment creation with due dates and descriptions",
        "Deadline reminders and notifications",
        "Progress tracking with percentage completion",
        "File attachment support for submissions",
        "Grade management and performance analytics",
        "Course organization by semester/subject",
        "Calendar view for deadline visualization",
        "Export/import functionality for backup",
      ],
      github: "https://github.com/yourusername/qt-assignment-manager",
      screenshots: [
        "https://via.placeholder.com/1200x800/0f3460/ffffff?text=Qt+Assignment+Manager+Main",
        "https://via.placeholder.com/1200x800/1a1a2e/ffffff?text=Qt+Calendar+View",
        "https://via.placeholder.com/1200x800/16213e/ffffff?text=Qt+Tasks+List",
        "https://via.placeholder.com/1200x800/0f3460/ffffff?text=Qt+Assignment+Details",
        "https://via.placeholder.com/1200x800/1a1a2e/ffffff?text=Qt+Progress+Tracking",
        "https://via.placeholder.com/1200x800/16213e/ffffff?text=Qt+Grades+Analytics",
      ],
      videos: ["https://example.com/qt-demo.mp4"],
    },
    {
      id: 7,
      title: "Wifi Billing System",
      description:
        "A web-based billing system for managing wifi subscriptions and payments.",
      longDescription:
        "The Wifi Billing System provides a comprehensive solution for managing wifi subscriptions, tracking usage, and processing payments. It includes features for customer management, billing cycles, and reporting.",
      techStack: [
        "React",
        "Node.js",
        "Express",
        "MySQL",
        "Prisma",
        "Daraja API",
      ],
      challenges: [
        "Implemented subscription management with recurring billing",
        "Built usage tracking system with real-time updates",
        "Integrated M-Pesa payments via Daraja API",
        "Created customer management dashboard",
        "Developed billing cycle automation with notifications",
      ],
      features: [
        "Customer subscription management",
        "Real-time usage tracking and reporting",
        "M-Pesa payment integration for billing",
        "Automated billing cycles with email/SMS notifications",
        "Customer dashboard for managing subscriptions",
        "Admin panel for managing customers and billing",
      ],
      github: "https://github.com/Matuwamai/wifi-billing-system-frontend",
      live: "https://wifi.neliteitsolutions.co.ke/",
      screenshots: [
        "./wifibiliing1.png",
        "./wifibilling2.png",
        "./wifibilling3.png",
        "./wifibilling4.png",
        "./wifibilling5.png",
        "./wifibilling6.png",
        "./wifibilling7.png",
        "./wifibilling8.png",
        "./wifibilling9.png",
      ],
      videos: ["https://example.com/smartagri-demo.mp4"],
    },
    {
      id: 8,
      title: "Books store",
      description:
        "An online bookstore with a wide selection of books, user reviews, and personalized recommendations. Features include secure payment processing and an intuitive user interface.",
      longDescription:
        "This Books store application provides a seamless shopping experience with a vast collection of books, detailed descriptions, and user reviews. The platform ensures secure transactions and offers personalized recommendations based on user preferences.",
      techStack: [
        "React",
        "TypeScript",
        "Node.js",
        "Express",
        "mySQL",
        "Prisma",
      ],
      challenges: [
        "Implemented personalized recommendation engine",
        "Built secure payment processing with multiple gateways",
        "Created user review and rating system",
        "Developed responsive design for mobile and desktop",
        "Integrated search functionality with advanced filters",
      ],
      features: [
        "Vast collection of books with detailed descriptions",
        "Personalized book recommendations based on user preferences",
        "Secure payment processing with multiple gateways",
        "User review and rating system for books",
        "Responsive design for seamless shopping on any device",
        "Advanced search functionality with filters by genre, author, and price",
      ],
      github: "https://github.com/Matuwamai/books-store",
      live: "https://booksstore.com",
      screenshots: [
        "./bookstore1.png",
        "./booksstore2.png",
        "./booksstore3.png",
        "./booksstore4.png",
        "./booksstore5.png",
        "./booksstore6.png",
      ],
      videos: ["https://example.com/ehealth-demo.mp4"],
    },
    {
      id: 9,
      title: "Carbon Footprint Tracker",
      description:
        "A web application for tracking and managing carbon emissions across various activities and sectors.",
      longDescription:
        "This application allows users to monitor their carbon footprint, set reduction goals, and track progress over time. It provides insights into the environmental impact of daily activities and offers actionable recommendations for sustainability.",
      techStack: [
        "React Native",
        "Node.js",
        "Express",
        "MySQL",
        "Prisma",
        "MQTT",
        "Python (for data analysis)",
      ],
      challenges: [
        "Implemented real-time carbon emission tracking with MQTT",
        "Built data analysis pipeline for carbon footprint calculation",
        "Created user-friendly interface for tracking and goal setting",
        "Integrated third-party APIs for activity data (e.g., transportation, energy usage)",
        "Developed personalized recommendations for carbon reduction",
      ],
      features: [
        "Real-time carbon emission tracking across activities",
        "Personalized carbon reduction goals and progress tracking",
        "Data visualization of carbon footprint over time",
        "Integration with third-party APIs for activity data",
        "Actionable recommendations for reducing carbon emissions",
        "Community features for sharing progress and tips",
      ],
      github: "https://github.com/yourusername/carbon-tracker",
      live: "https://carbontracker.com",
      screenshots: [
        "https://via.placeholder.com/1200x800/16213e/ffffff?text=Carbon+Tracker+Dashboard",
        "https://via.placeholder.com/1200x800/0f3460/ffffff?text=Carbon+Tracker+Activities",
        "https://via.placeholder.com/1200x800/1a1a2e/ffffff?text=Carbon+Tracker+Goals",
        "https://via.placeholder.com/1200x800/16213e/ffffff?text=Carbon+Tracker+Analytics",
        "https://via.placeholder.com/1200x800/0f3460/ffffff?text=Carbon+Tracker+Recommendations",
        "https://via.placeholder.com/1200x800/1a1a2e/ffffff?text=Carbon+Tracker+Community",
      ],
      videos: ["https://example.com/carbon-tracker-demo.mp4"],
    },
    {
      id: 10,
      title: "Smart Library Management System",
      description:
        "A comprehensive library management system with features for book cataloging, user management, borrowing and returning books, and overdue notifications.",
      longDescription:
        "This Smart Library Management System streamlines library operations with efficient book cataloging, user management, and borrowing processes. It includes features for tracking book availability, managing user accounts, and sending overdue notifications to ensure a smooth library experience.",

      techStack: ["React", "TypeScript", "Node.js", "MySQL", "Prisma"],
      challenges: [
        "Implemented efficient book cataloging with search and filter capabilities",
        "Built user management system with role-based access control",
        "Created borrowing and returning workflow with real-time availability updates",
        "Developed overdue notification system with email and SMS alerts",
        "Integrated analytics for tracking library usage and popular books",
      ],
      features: [
        "Comprehensive book cataloging with search and filter options",
        "User management with role-based access control (admin, librarian, member)",
        "Borrowing and returning workflow with real-time availability updates",
        "Overdue notification system with email and SMS alerts",
        "Analytics dashboard for tracking library usage and popular books",
        "Mobile-friendly design for easy access on any device",
      ],
      github: "https://github.com/yourusername/smart-library",
      live: "https://smartlibrary.com",
      screenshots: [
        "https://via.placeholder.com/1200x800/0f3460/ffffff?text=Smart+Library+Dashboard",
        "https://via.placeholder.com/1200x800/1a1a2e/ffffff?text=Smart+Library+Books",
        "https://via.placeholder.com/1200x800/16213e/ffffff?text=Smart+Library+Users",
        "https://via.placeholder.com/1200x800/0f3460/ffffff?text=Smart+Library+Borrowing",
        "https://via.placeholder.com/1200x800/1a1a2e/ffffff?text=Smart+Library+Analytics",
        "https://via.placeholder.com/1200x800/16213e/ffffff?text=Smart+Library+Mobile",
      ],
      videos: ["https://example.com/elearning-demo.mp4"],
    },
    {
      id: 11,
      title: "Simple static Recipie Finder",
      description:
        "A simple static recipe finder application that allows users to search for recipes based on ingredients and dietary preferences.",
      longDescription:
        "This simple static recipe finder application helps users discover delicious recipes based on the ingredients they have on hand and their dietary preferences.",
      techStack: ["HTML", "CSS", "JavaScript"],
      challenges: [
        "Implemented search functionality based on ingredients and dietary preferences",
        "Created a responsive design for mobile and desktop",
        "Built a user-friendly interface for browsing recipes",
      ],
      features: [
        "Search for recipes based on ingredients and dietary preferences",
        "Responsive design for seamless browsing on any device",
        "User-friendly interface with recipe details and instructions",
      ],
      github: "https://github.com/yourusername/recipe-finder",
      live: "https://matuwamai.github.io/recipe-finder/",
      screenshots: [
        "./recipiefinderone.png",
        "./recipiefinder2.png",
        "./recipiefinder3.png",
      ],
      videos: ["https://example.com/recipefinder-demo.mp4"],
    },
    {
      id: 12,
      title: "Simple To-do-list",
      description:
        "A simple to-do list application that allows users to create, manage, and track their daily tasks.",
      longDescription:
        "This simple to-do list application helps users stay organized and productive by providing a clean and intuitive interface for managing their tasks.",
      techStack: ["HTML", "CSS", "JavaScript"],
      challenges: [
        "Implemented task creation, editing, and deletion functionality",
        "Created a responsive design for mobile and desktop",
        "Built a user-friendly interface for managing tasks",
      ],
      features: [
        "Task creation, editing, and deletion",
        "Responsive design for mobile and desktop",
        "User-friendly interface for managing tasks",
      ],
      github: "https://github.com/Matuwamai/todo-list",
      live: " https://matuwamai.github.io/to_do_list/",
      screenshots: [".//todolist1.png", ".//todolist2.png", ".//todolist3.png"],
      videos: ["https://example.com/todolist-demo.mp4"],
    },
    {
      id: 13,
      title: "Karu Ajira club website",
      description:
        "A modern website for the Karu Ajira club, featuring event listings, member profiles, and a blog.",
      longDescription:
        "This website serves as the digital hub for the Karu Ajira club, providing members and visitors with information about upcoming events, club news, and member spotlights. The site is built with a focus on user experience and engagement.",
      techStack: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MySQL",
        "Prisma",
      ],
      challenges: [
        "Designed a visually appealing and user-friendly interface",
        "Implemented dynamic event listings with filtering options",
        "Built member profile pages with social media integration",
        "Created a blog section for club news and updates",
        "Developed an admin panel for managing content and members",
      ],
      features: [
        "Dynamic event listings with search and filter options",
        "Member profiles with social media links",
        "Blog section for club news and updates",
        "Admin panel for content and member management",
        "Responsive design for seamless browsing on any device",
      ],
      github: "https://github.com/Matuwamai/karu-ajira-club-website",
      live: "https://karuajirac club.com",
      screenshots: [
        "https://via.placeholder.com/1200x800/1a1a2e/ffffff?text=AI+Generator+Dashboard",
        "https://via.placeholder.com/1200x800/16213e/ffffff?text=AI+Generator+Blog+Creation",
        "https://via.placeholder.com/1200x800/0f3460/ffffff?text=AI+Generator+Social+Media",
        "https://via.placeholder.com/1200x800/1a1a2e/ffffff?text=AI+Generator+Templates",
        "https://via.placeholder.com/1200x800/16213e/ffffff?text=AI+Generator+SEO+Tools",
        "https://via.placeholder.com/1200x800/0f3460/ffffff?text=AI+Generator+History",
      ],
      videos: ["https://example.com/ai-generator-demo.mp4"],
    },
    {
      id: 14,
      title: "Rozzette online store",
      description:
        "An online store for Rozzette, featuring a wide range of products, secure payment processing, and an intuitive user interface.",
      longDescription:
        "Rozzette's online store offers a seamless shopping experience with a vast selection of products, detailed descriptions, and user reviews. The platform ensures secure transactions and provides personalized recommendations based on user preferences.",
      techStack: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "Express",
        "mySQL",
        "Prisma",
        "Daraja API",
      ],
      challenges: [
        "Implemented personalized recommendation engine",
        "Built secure payment processing with M-Pesa integration",
        "Created user review and rating system",
        "Developed responsive design for mobile and desktop",
        "Integrated search functionality with advanced filters",
      ],

      features: [
        "Vast collection of products with detailed descriptions",
        "Personalized product recommendations based on user preferences",
        "Secure payment processing with M-Pesa integration",
        "User review and rating system for products",
        "Responsive design for seamless shopping on any device",
        "Advanced search functionality with filters by category, price, and brand",
      ],
      github: "https://github.com/Wamae-ndiritu/rozzette_store ",
      live: "https://rozzette.com",
      screenshots: [
        "./rozzete1.png",
        "./rozzete2.png",
        "./rozzette3.png",
        "./rozzete4.png",
        "./rozzete5.png",
        "./rozzte6.png",
        "./rozzete7.png",
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
                          {project.features.slice(0, 4).map((feature, i) => (
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
