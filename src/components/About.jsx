import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaUserGraduate,
  FaBriefcase,
  FaCode,
  FaHeart,
  FaDownload,
} from "react-icons/fa";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = {
    frontend: [
      "React.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Next.js",
      "HTML5/CSS3",
    ],
    backend: ["Node.js", "Express", "Python", "Prisma", "REST APIs", "GraphQL"],
    database: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
    tools: ["Git", "Docker", "VS Code", "Postman", "Figma", "Jira"],
    mobile: ["React Native", "Flutter", "iOS", "Android"],
    other: ["C++", "Qt Framework", "Agile/Scrum", "AWS", "Firebase"],
  };

  const experiences = [
    {
      title: " Full Stack Developer",
      company: "Nelite It Solutions",
      period: "2024 - Present",
      description:
        "Contributed to the development of multiple web applications including e-commerce platforms and POS systems. Mentor junior developers and architect scalable solutions.",
      achievements: [
        "Built Nelite POS system with integrated M-Pesa payments",
        "Developed Car-Hire marketplace connecting 1000+ users",
        "Implemented real-time features using WebSockets",
      ],
    },
    {
      title: "Free lance Full Stack Developer",
      company: "Self-Employed",
      period: "2020 - 2022",
      description:
        "Developed and maintained full-stack web applications for various clients across different industries.",
      achievements: [
        "Created GVB Support platform with Africa's Talking API integration",
        "Built Hamisha Epic Tours booking system",
        "Optimized database queries improving performance by 40%",
      ],
    },
    {
      title: "Software Developer",
      company: "StartUp Hub",
      period: "2024 - 2025",
      description:
        "Started career developing desktop applications and transitioning to web development.",
      achievements: [
        "Developed Qt Assignment Manager desktop application",
        "Collaborated on open-source projects",
        "Implemented responsive designs for client websites",
      ],
    },
  ];

  const education = [
    {
      degree: "BSc in Computer Science",
      institution: "University of Technology",
      period: "2024 - present",
      achievements: [
        "Specialized in Software Engineering",
        "Thesis on Real-time Web Applications",
      ],
    },
    {
      degree: "Full Stack Web Development Bootcamp",
      institution: "Power Learn program Academy",
      period: "2019",
      achievements: [
        "Completed intensive 6-month program",
        "Built 10+ full-stack projects",
        "Learned modern web technologies",
      ],
    },
  ];

  const certifications = [
    // "AWS Certified Developer – Associate",
    "Meta Front-End Developer Professional Certificate",
    "Google UX Design Professional Certificate",
    "MongoDB Certified Developer",
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-transparent to-white/5"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-title text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Bio Section */}
          <motion.div
            className="grid md:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {/* Profile Image */}
            <div className="md:col-span-1">
              <div className="relative">
                <div className="w-64 h-64 mx-auto rounded-2xl overflow-hidden border-4 border-gradient-to-r from-blue-500 to-purple-500">
                  <img
                    src="./public/matu.png"
                    alt="Profile"
                    className="w-full h-full object-cover, "
                  />
                </div>

                {/* Download Resume Button */}
                <motion.a
                  href="/resume.pdf"
                  download="Matu_Wamai_Resume.pdf"
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaDownload size={14} />
                  Download CV
                </motion.a>
              </div>
            </div>

            {/* Bio Text */}
            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-4 text-white/90">
                  Hi, I'm Matu Wamai 👋
                </h3>

                <p className="text-white/70 mb-4 leading-relaxed">
                  I'm a passionate Full Stack Developer with over 2 years of
                  experience building robust web and mobile applications. I
                  specialize in creating elegant solutions for complex problems,
                  with a particular focus on e-commerce platforms, real-time
                  applications, and developer tools.
                </p>

                <p className="text-white/70 mb-4 leading-relaxed">
                  My journey in tech started with static websites using HTML and
                  css, and evolved into full-stack web development. I've had the
                  privilege of working on diverse projects - from medical
                  e-commerce platforms to social awareness applications, each
                  teaching me something new and exciting.
                </p>

                <p className="text-white/70 leading-relaxed">
                  When I'm not coding, you'll find me contributing to
                  open-source projects, mentoring aspiring developers, or
                  exploring new technologies. I believe in writing clean,
                  maintainable code and creating applications that make a
                  positive impact on people's lives.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400">2+</div>
                    <div className="text-white/60 text-sm">
                      Years Experience
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400">
                      20+
                    </div>
                    <div className="text-white/60 text-sm">
                      Projects Completed
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-pink-400">15+</div>
                    <div className="text-white/60 text-sm">Happy Clients</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <FaCode className="text-blue-400" />
              Technical Skills
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Frontend */}
              <div className="card">
                <h4 className="text-lg font-semibold mb-4 text-blue-400">
                  Frontend
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80 border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="card">
                <h4 className="text-lg font-semibold mb-4 text-purple-400">
                  Backend
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80 border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Database */}
              <div className="card">
                <h4 className="text-lg font-semibold mb-4 text-green-400">
                  Database
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.database.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80 border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div className="card">
                <h4 className="text-lg font-semibold mb-4 text-yellow-400">
                  Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80 border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Mobile */}
              <div className="card">
                <h4 className="text-lg font-semibold mb-4 text-orange-400">
                  Mobile
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.mobile.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80 border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Other */}
              <div className="card">
                <h4 className="text-lg font-semibold mb-4 text-pink-400">
                  Other
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.other.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80 border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <FaBriefcase className="text-blue-400" />
              Work Experience
            </h3>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="card relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-blue-500 before:to-purple-500"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 * index }}
                >
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h4 className="text-xl font-semibold">{exp.title}</h4>
                    <span className="text-white/50 text-sm">{exp.period}</span>
                  </div>
                  <p className="text-blue-400 mb-2">{exp.company}</p>
                  <p className="text-white/70 mb-3">{exp.description}</p>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start text-white/60 text-sm"
                      >
                        <span className="text-green-400 mr-2">✓</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education & Certifications */}
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
          >
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <FaUserGraduate className="text-blue-400" />
                Education
              </h3>

              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="card">
                    <h4 className="text-lg font-semibold mb-1">{edu.degree}</h4>
                    <p className="text-blue-400 mb-1">{edu.institution}</p>
                    <p className="text-white/50 text-sm mb-2">{edu.period}</p>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start text-white/60 text-sm"
                        >
                          <span className="text-purple-400 mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <FaHeart className="text-blue-400" />
                Certifications
              </h3>

              <div className="card">
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-white/70"
                    >
                      <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Interests/Hobbies */}
              <div className="mt-6">
                <h3 className="text-xl font-bold mb-4">When I'm Not Coding</h3>
                <div className="card">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                      📚 Reading Tech Blogs
                    </span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                      🎮 Gaming
                    </span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                      🏃 Running
                    </span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                      🎸 Playing Guitar
                    </span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                      ☕ Coffee Enthusiast
                    </span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                      🌍 Traveling
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            <p className="text-white/60 mb-4">
              Interested in working together? Let's build something amazing!
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
