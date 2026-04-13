export const siteConfig = {
  name: "Julien Mérand",
  title: "PhD Student in Robotics & AI @ CEA-List",
  description: "Portfolio of Julien Mérand, a PhD student specializing in Robotic Grasping, Dexterous Manipulation, and AI at CEA-List and Paris-Saclay University.",
  accentColor: "#0d6094",
  social: {
    email: "julien.merand@cea.fr",
    linkedin: "https://www.linkedin.com/in/julien-merand/",
    // twitter: "https://x.com/rfitzio",
    github: "https://github.com/JulienMerand",
  },
  aboutMe:
    "As a 25-year-old PhD student at CEA-List and Paris-Saclay University, I specialize in the intersection of Artificial Intelligence and Robotics through dexterous manipulation of any objects using anthropomorphic robotic hands. My research aims to bridge the gap between high-level AI reasoning and low-level robotic control to achieve human-like grasping and manipulation. I combine a strong theoretical foundation with a hands-on commitment to shaping the future of intelligent robotics. Beyond my academic research, I am a big sports fan (runner, cyclist, black-belt judoka) and a guitarist.",
  skills: [
    "Python", 
    "C/C++", 
    "PyTorch", 
    "ROS/ROS2", 
    "Deep Learning",
    "Generative AI",
    "Computer Vision", 
    "Point Cloud Processing",
    "Dexterous Manipulation",
    "Embedded Systems",
    "Robots Programming",
    "Linux", 
    "Git"
  ],
  experience: [
    {
      company: "CEA-List",
      title: "PhD Researcher",
      dateRange: "Jan 2025 - present",
      image: "/portfolio/logo_cea.jpg",
      bullets: [
        "Researching Vision-Based Policy Learning for Dexterous Multi-Fingered Robotic Manipulation.",
      ],
    },
    {
      company: "CEA-List",
      title: "MSc Thesis - Research Intern",
      dateRange: "May 2024 - Oct 2024",
      image: "/portfolio/logo_cea.jpg",
      bullets: [
        "Used vision and AI tools to recognize and locate everyday objects for for grasping and manipulation tasks.",
        "Integrated a two-armed exoskeleton with an eye-tracking device to provide active robotic assistance.",
      ],
    },
    {
      company: "ArcelorMittal France",
      title: "Assistant Engineer Intern",
      dateRange: "Apr 2023 - Jul 2023",
      image: "/portfolio/logo_ArcelorMittal.jpg",
      bullets: [
        "Developed an autonomous solution to improve traceability and inventory of steel coils.",
        "Studied optimizations saving nearly 7680 hours of manual work per year.",
        "Conducted technology watch and benchmarking for mobile and quadruped robotics.",
      ],
    },
    {
      company: "Opteamum",
      title: "Robotics Engineer Intern",
      dateRange: "May 2022 - Aug 2022",
      image: "/portfolio/logo_opteamum.jpg",
      bullets: [
        "Developed an automated and collaborative palletizing cell using the Doosan H2017 robot.",
        "Developped an HMI and programmed the Doosan H2017 to draw photo portraits.",
      ],
    },
  ],
  education: [
    {
      school: "Université Paris-Saclay",
      degree: "PhD in Robotics and Computer Vision",
      dateRange: "2025 - 2028",
      image: "/portfolio/logo_paris-saclay.png",
      achievements: [
        "Focusing on Vision-Based Policy Learning for Dexterous Multi-Fingered Robotic Manipulation.",
      ],
    },
    {
      school: "Cranfield University",
      degree: "MSc Robotics (Double Degree)",
      dateRange: "2023 - 2024",
      image: "/portfolio/logo_cranfield.png",
      achievements: [
        "Specialized in AI, Machine Learning, and Autonomy in Robotic Systems.",
        "Developed dynamic obstacle avoidance for mobile robots using machine learning techniques.",
      ],
    },
    {
      school: "IMT Nord Europe",
      degree: "Engineering School (MEng)",
      dateRange: "2021 - 2024",
      image: "/portfolio/logo_imt_nord_europe.png",
      achievements: [
        "Studied Autonomous and Industrial Robotics, Automatics, and Project Management.",
        "Served as Project Manager for a weather balloon launch and Show Manager for the GALA 2023.",
      ],
    },
  ],
  papers: [
    {
      title: "Upcoming Research Paper - Coming Soon...",
      authors: "Julien Mérand, et al.",
      conference: "In submission",
      year: "2026",
      link: "",
      abstract: "",
      tags: ["Robotics", "AI", "Dexterous Manipulation", "Grasps Synthesis", "Transformers", "Conditional Variational Autoencoders"], 
    },
    {
      title: "Upcoming Research Paper - Coming Soon...",
      authors: "Julien Mérand, et al.",
      conference: "In submission",
      year: "2026",
      link: "",
      abstract: "",
      tags: ["Robotics", "AI", "Dexterous Manipulation", "Grasps Synthesis", "Conditional Variational Autoencoders"], 
    },
    {
      title: "Leveraging CVAE for joint configuration estimation of multifingered grippers from point cloud data",
      authors: "Julien Mérand, Boris Meden and Mathieu Grossard",
      conference: "2025 IEEE 21st International Conference on Automation Science and Engineering (CASE)",
      year: "2025",
      link: "https://arxiv.org/abs/2511.17276",
      abstract: "This paper presents an efficient approach for determining the joint configuration of a multifingered gripper solely from the point cloud data of its poly-articulated chain, as generated by visual sensors, simulations or even generative neural networks.",
      tags: ["Robotics", "AI", "3D Point Cloud", "Joint Configuration", "Conditional Variational Autoencoders"], 
    },
  ],
  projects: [
    {
      name: "3D Printed Robot Arm",
      description:
        "Ungoing personal project inspired by BCN3D's Moveo robot. Developed various applications in Python and C++ on ROS2 Humble.",
      link: "https://github.com/JulienMerand/robot_arm",
      skills: ["ROS2", "Python", "C/C++", "Arduino", "Computer Vision"],
    },
    {
      name: "Mobile robot navigation and path planning in dynamic indoor environments.",
      description:
        "Proposed a dynamic obstacle avoidance solution for mobile robots, leveraging machine learning for velocity estimation and cost mapping.",
      link: "https://github.com/JulienMerand/msc_robotics_gdp_2024",
      skills: ["ROS2", "Python", "C/C++", "Computer Vision", "Machine Learning", "Path Planning"],
    },
    {
      name: "Analog Guitar Effects Pedal: Clone of the Friedman BE-OD",
      description:
        "Designed and built an analog guitar effects pedal, gaining hands-on experience in analog electronics and understanding how electronic components manipulate audio signals.",
      skills: ["Analog Electronics", "Signal Processing", "PCB Soldering", "Prototyping"],
    },
    {
      name: "BR'EYE - \"Entreprendre pour Apprendre\" mini business",
      description:
        "Wrote algorithms for an embedded product designed to make learning Braille fun. The project has now become an independent company.",
      link: "https://handiexceller.com/",
      skills: ["Algorithm Design", "Embedded Systems", "C/C++"],
    },
  ],
};
