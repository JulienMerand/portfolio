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
        "Used vision and AI tools to recognize and locate everyday objects for grasping and manipulation tasks.",
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
      title: "CoToGrasp: Contact-Topology-Conditioned Dexterous Grasp Synthesis via Canonical Workspace Learning",
      authors: "Julien Mérand, Boris Meden, Liming Chen, and Mathieu Grossard",
      conference: "19th European Conference on Computer Vision (ECCV), 2026",
      conferenceSurname: "ECCV 2026",
      year: "2026",
      citations: 1,
      arxivId: "", // Add arXiv ID when published e.g. "2603.xxxx"
      doi: "",     // Add DOI when published
      link: "https://cea-list.github.io/cotograspweb/",
      abstract: "We propose CoToGrasp, a novel generative framework that synthesizes diverse, stable grasps strictly conditioned on specific contact topologies.",
      tags: ["Robotics", "AI", "Dexterous Manipulation", "Grasps Synthesis", "Transformers", "Conditional Variational Autoencoders"],
    },
    {
      title: "GOAG: Generative and Object-Agnostic Grasp Planner for Dexterous Robotic Manipulation",
      authors: "Julien Mérand, Boris Meden, Mathieu Grossard, and Liming Chen",
      conference: "2026 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)",
      conferenceSurname: "IROS 2026",
      year: "2026",
      citations: 1,
      arxivId: "", // Add arXiv ID when published e.g. "2605.xxxx"
      doi: "",     // Add DOI when published
      link: "https://cea-list.github.io/goagweb/",
      abstract: "We propose GOAG, a novel deep generative model that learns a compact latent representation of a specific gripper's contact surface distribution, enabling the efficient sampling of valid grasp configurations without relying on object-specific training data.",
      tags: ["Robotics", "AI", "Dexterous Manipulation", "Grasps Synthesis", "Conditional Variational Autoencoders"],
    },
    {
      title: "Leveraging CVAE for joint configuration estimation of multifingered grippers from point cloud data",
      authors: "Julien Mérand, Boris Meden and Mathieu Grossard",
      conference: "2025 IEEE 21st International Conference on Automation Science and Engineering (CASE)",
      conferenceSurname: "CASE 2025",
      year: "2025",
      citations: 1,
      arxivId: "2511.17276",
      doi: "10.1109/case58245.2025.11164060",
      link: "https://arxiv.org/abs/2511.17276",
      abstract: "This paper presents an efficient approach for determining the joint configuration of a multifingered gripper solely from the point cloud data of its poly-articulated chain, as generated by visual sensors, simulations or even generative neural networks.",
      tags: ["Robotics", "AI", "3D Point Cloud", "Joint Configuration", "Conditional Variational Autoencoders"],
    },
  ],
  projects: [
    {
      name: "3D Printed Robot Arm",
      description:
        "Ongoing personal project inspired by BCN3D's Moveo robot. Developed various applications in Python and C++ on ROS2 Humble.",
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
