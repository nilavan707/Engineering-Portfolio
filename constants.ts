
import { ExperienceItem, ExperienceType, ProjectItem, SocialLink, CategorizedSkills, PublicationItem } from './types';

export const BIO = {
  name: "Arul Gnanasivam",
  title: "Aerospace Engineer & Researcher",
  affiliation: "University of Washington",
  exAffiliation: "Ex-Blue Origin",
  tagline: "Engineering the future of aerospace with thermal fluids analysis and AI-driven design.",
  email: "arul.gnanasivam@gmail.com",
  phone: "669-214-8048",
  shortBio: `I am an M.S. Aerospace Engineering student at the University of Washington specializing in Fluids. My expertise lies in bridging the gap between theoretical thermal analysis and practical system implementation, with a growing focus on applying machine learning to engineering challenges.`,
  longBio: ``
};

export const THERMAL_RESUME_SKILLS: CategorizedSkills = {
  software: ["Thermal Desktop", "Ansys Icepak", "OpenFOAM", "PTC Creo", "AutoCAD", "Siemens NX12", "RPA"],
  languages: ["Python", "Matlab", "C++", "Pytorch", "Sci-Kit", "OpenCV", "Pandas", "Linux"],
  hardware: ["Machine shop trained", "3-D printing", "TIG welding", "Lathe", "GD&T"]
};

export const ML_RESUME_SKILLS: CategorizedSkills = {
  languages: ["Python", "Matlab", "C++", "Pytorch", "Sci-Kit", "OpenCV", "Pandas", "Linux", "Bash"],
  software: ["Thermal Desktop", "Ansys Icepak", "OpenFOAM", "LabView", "TUCAN", "ITK-SNAP"],
  hardware: ["Machine shop trained", "3-D printing"]
};

// Keeping the flat list for the main About page if needed, or we can derive it.
export const SKILLS = [
  ...THERMAL_RESUME_SKILLS.software,
  ...THERMAL_RESUME_SKILLS.languages,
].slice(0, 15); // Just taking a subset for the main page chips

export const REFERRALS = [
  {
    quote: "I worked with Arul at Blue Origin for over a year and during that time he was an incredibly valuable analyst and team member. He possesses a strong understanding of heat transfer which allows him to quickly iterate through design problems to arrive at an optimized solution. He is always dependable to provide accurate and timely results especially when quick turn-around or short notice analyses are requested. Arul is always positive and happy to take on any task when needed. He is highly reliable engineer and will be a valuable addition to any fast-paced environment!",
    author: "Declan Caldwell, Thermal Engineer III at Blue Origin"
  },
  {
    quote: "I’ve had the privilege of working with Arul at Blue Origin where he was part of our Thermal Analysis group. Arul's expertise in thermal component analysis is remarkable - he simplified the complex concepts related to our component level heat transfer and delivered an optimized solution which helped maturing our Thermal Hardware design. His collaborative spirit combining with his commitment to Excellence making him an invaluable asset to any team. I highly recommend Arul for his exceptional technical knowledge, grasp on thermal engineering fundamentals, professionalism and teamwork.",
    author: "Shawoon Roy, Technical Project Manager at Blue Origin"
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  // Research (Ordered by most recent)
  {
    id: 'c2',
    role: "Research Assistant",
    organization: "UW Medicine Cardiovascular Lab",
    period: "Aug. 2025 - Present",
    type: ExperienceType.RESEARCH,
    description: "Developing AI-driven computational pipeline to predict atrial fibrillation-induced thrombus formation.",
    bullets: [
      "Developing AI-driven computational pipeline combining nnU-Net segmentation and TUCAN simulations to predict atrial fibrillation-induced thrombus formation risk in left atrial appendage",
      "Engineered adaptive meshing algorithm, increasing fidelity and reducing computational cost by 23%",
      "Trained deep learning segmentation model on 250+ cardiac CT/MRI datasets on Hyak supercomputer, manually validated and refined complex anatomical models in ITK-SNAP"
    ],
    technologies: ["nnU-Net", "Python", "Deep Learning", "ITK-SNAP"],
    resumeTags: ['thermal', 'ml']
  },
  {
    id: 'c1',
    role: "Research/Scientist Engineer 1",
    organization: "University of Washington Thermal Lab",
    period: "Aug. 2025 - Present",
    type: ExperienceType.CAREER, // Kept as career in data structure, but rendered under resume section
    description: "Leading Blue Origin-sponsored cryogenic testing program to characterize liquid acquisition device (LAD) performance.",
    bullets: [
      "Leading Blue Origin-sponsored cryogenic testing program to characterize liquid acquisition device (LAD) performance in liquid nitrogen for propellant management systems",
      "Designed and executed cryogenic experiments using custom-machined aluminum test articles with embedded thermocouple arrays via LabVIEW data acquisition system",
      "Performed transient heat transfer analysis to optimize surface geometry, reducing vaporization rates through selection of micro-finned structures validated via high-speed camera visualization"
    ],
    technologies: ["LabVIEW", "Cryogenics", "Heat Transfer"],
    resumeTags: ['thermal', 'ml']
  },
  {
    id: 'c3',
    role: "Thermal Engineer",
    organization: "Blue Origin",
    period: "Jul. 2023 - Aug. 2024",
    type: ExperienceType.CAREER,
    description: "Modeled and simulated NASA Artemis V crewed lunar lander systems.",
    bullets: [
      "Modeled and simulated NASA Artemis V crewed lunar lander radiator, surface access system, and docking system in Thermal Desktop, validated results against human-rated temperature limits",
      "Performed nodal reduction trades to reduce model runtime by 50%, ran optical and thermophysical property case studies to meet component temperature limits",
      "Conducted thermal spreading analysis on 104 electronic components in Ansys Icepak based on vehicle geometry and avionics heat loads, reducing passive thermal system mass by 53 kg",
      "Optimized cold plate design via Icepak to cut manufacturing and quality testing time by 40%, programmed scripts to reduce analysis time by 80%",
      "Analyzed cold plate design and avionics configuration to decide between brazen and additive manufacturing processes, progressing vertical integration initiative",
      "Led initiative to parse, clean, and organize over 2000 NASA and internal thermophysical and optical properties using Python into a central database used across Lunar teams"
    ],
    technologies: ["Thermal Desktop", "Ansys Icepak", "Python", "System Modeling"],
    resumeTags: ['thermal']
  },
  {
    id: 'bo-ml',
    role: "Thermal Engineer",
    organization: "Blue Origin",
    period: "Jul. 2023 - Aug. 2024",
    type: ExperienceType.CAREER,
    description: "ML focused role description for Blue Origin",
    bullets: [
      "Led cross-functional initiative to consolidate 2,000+ thermophysical and optical properties from NASA databases and internal testing into centralized database, establishing single source of truth used by 40+ engineers across Blue Moon program",
      "Engineered machine learning model using PyTorch and Scikit-learn to interpolate missing thermal property data across temperature ranges, reducing reliance on expensive material testing by predicting conductivity and emissivity values with <5% error vs. experimental validation",
      "Modeled and simulated NASA Artemis V crewed lunar lander radiator, surface access system, and docking system in Thermal Desktop, ensuring components met mission profiles in lunar environement"
    ],
    technologies: ["PyTorch", "Scikit-learn", "Python"],
    resumeTags: ['ml'],
    excludeFromAbout: true
  },
  {
    id: 'c4',
    role: "Hardware Design Lead",
    organization: "New Ascent",
    period: "Jul. 2022 - May 2023",
    type: ExperienceType.CAREER,
    description: "Developed ConOps and system architecture for mission to deploy and recover ChipSats.",
    bullets: [
      "Developed ConOps and system architecture for mission to deploy and recover ChipSats",
      "Designed fixed antennae ground station via structural and thermal analysis, and electrical design for an uninterrupted solar power system",
      "Assembled bill of materials of store-bought parts to assemble antennae station",
      "Programmed C++ firmware to manage communication between Raspberry Pi ChipSats and RAK5146 ground nodes using LoRa and Node-RED"
    ],
    technologies: ["C++", "LoRa", "Node-RED", "Thermal Analysis"],
    resumeTags: ['thermal']
  },
  {
    id: 'c5',
    role: "Machine Learning Intern",
    organization: "USDA",
    period: "May 2021 - Aug. 2021",
    type: ExperienceType.CAREER,
    description: "Developed neural network regression model using PyTorch to predict corn and soybean yields.",
    bullets: [
      "Developed neural network regression model using PyTorch to predict corn and soybean yields based on soil nitrogen concentrations and weather data, achieving R² = 0.72 across 500+ Nebraska farm plots, enabling data-driven fertilizer application recommendations",
      "Engineered automated data pipeline using Python and Pandas to extract, clean, and standardize agronomic data from 200+ PDF farm reports into unified database, reducing data entry time by 85%",
      "Created interactive data visualizations using Matplotlib to communicate nitrogen-yield response curves and cost-benefit analysis of precision agriculture techniques to USDA Agricultural Research scientists, incorporated model into production-ready decision support system (DSS)"
    ],
    technologies: ["PyTorch", "Sci-Kit", "Pandas", "Python", "Matplotlib"],
    resumeTags: ['ml']
  },

  // Research (Additional)
  {
    id: 'r1',
    role: "Wildfire Drone Principal Researcher",
    organization: "UMD Robotics Research Center",
    period: "Aug. 2022 - May 2023",
    type: ExperienceType.RESEARCH,
    description: "Investigating wildfire fighting capabilities of modern drone systems.",
    bullets: [
      "Started an original research project under Dr. Mumu Xu investigating wildfire fighting capabilities of modern drone systems, including consumer and professional drone kits",
      "Compiled current data into summary report outlining current research and areas for exploration",
      "Designed autonomous thermal imaging drone using store bought drone and FLIR thermal camera",
      "Programmed automatic fire detection system to guide drone to possible fires and relay imagery"
    ],
    technologies: ["Robotics", "FLIR", "Automation"],
    resumeTags: ['thermal']
  },
  {
    id: 'r2',
    role: "Spacesuit Cooling Backpack Principal Researcher",
    organization: "UMD Space Systems Lab",
    period: "Aug. 2022 - Dec. 2022",
    type: ExperienceType.RESEARCH,
    description: "Developed a backpack water cooling system for NASA spacesuit for use in a proposed Mars mission.",
    bullets: [
      "Developed a backpack water cooling system for NASA spacesuit for use in a proposed Mars mission",
      "Researched cooling techniques, running trades on cooling system, material properties, and power",
      "Analyzed cooling capabilities with Peltier module to reduce cooling package volume by 18 percent"
    ],
    technologies: ["Thermodynamics", "System Design"],
    resumeTags: ['thermal']
  },

  // Leadership
  {
    id: 'l1',
    role: "Thermal Systems Lead",
    organization: "NASA Goddard Lunar Rover Capstone",
    period: "Sep. 2022 - May 2023",
    type: ExperienceType.LEADERSHIP,
    description: "Developed thermal architecture for compact lunar rover to survive 28-day South Pole mission.",
    bullets: [
      "Developed thermal architecture for compact lunar rover to survive 28-day South Pole mission using thermoelectric heaters, lightweight RHUs, and foldable radiator",
      "Analyzed lunar thermal loads based on satellite data, sized radiators and heaters for polar mission",
      "Defended design decisions against NASA Goddard engineers at PDR and CDR"
    ],
    technologies: ["Thermal Architecture", "Leadership"],
    resumeTags: ['thermal']
  },
  {
    id: 'l2',
    role: "Thermal Subsystem Team Member",
    organization: "SEDS Rocket Team",
    period: "Sep. 2022 - May 2023",
    type: ExperienceType.LEADERSHIP,
    description: "Designed 350 lbf NO2/ethanol liquid bipropellant rocket engine.",
    bullets: [
      "Designed 350 lbf NO2/ethanol liquid bipropellant rocket engine",
      "Analyzed combustion chamber insulation options using RPA, landing on phenolic resin ablative",
      "Scripted thermal resistance network in MATLAB to find material temps and ensure engine safety"
    ],
    technologies: ["Propulsion", "MATLAB", "RPA"],
    resumeTags: ['thermal']
  },

  // Education
  {
    id: 'e1',
    role: "M.S. Aerospace Engineering - Fluids",
    organization: "University of Washington",
    period: "March 2027",
    type: ExperienceType.ACADEMIC,
    description: "",
    resumeTags: ['thermal', 'ml']
  },
  {
    id: 'e2',
    role: "B.S. Aerospace Engineering",
    organization: "University of Maryland",
    period: "May 2023",
    type: ExperienceType.ACADEMIC,
    description: "",
    resumeTags: ['thermal', 'ml']
  }
];

export const PROJECTS: ProjectItem[] = [
  // UW Projects (Purple)
  {
    id: 'uw1',
    title: "Optimizing surfaces to enhance cryogenic boiling for space applications",
    subheader: "UW Thermal Lab & Blue Origin",
    description: "",
    technologies: ["Machining", "LabView", "Cryogenic Systems"],
    category: 'UW',
    tags: ['University of Washington', 'Thermal Analysis', 'Thermal Test', 'Blue Origin']
  },
  {
    id: 'uw2',
    title: "Designing a Liquid Acquisition Device for improved cryogenic propellant transfer",
    subheader: "UW Thermal Lab & Blue Origin",
    description: "",
    technologies: ["Machining", "LabView", "Cryogenic Systems"],
    category: 'UW',
    tags: ['University of Washington', 'Thermal Analysis', 'Thermal Test', 'Blue Origin']
  },
  {
    id: 'uw3',
    title: "Laplacian Dynamic Smoothing Algorithm for improved CFD runtime and fidelity",
    subheader: "UW Medicine",
    description: "",
    technologies: ["MATLAB", "Bash", "Linux"],
    category: 'UW',
    tags: ['University of Washington', 'Machine Learning', 'Computational Fluid Dynamics']
  },
  
  // Blue Origin Projects (Blue)
  {
    id: 'bo1',
    title: "Surface Access System Thermal Model for Crewed MK2 Lunar Lander",
    subheader: "Blue Origin",
    description: "",
    technologies: ["Thermal Desktop"],
    category: 'Blue Origin',
    tags: ['Blue Origin', 'Thermal Analysis']
  },
  {
    id: 'bo2',
    title: "Thermal Optimization Trade of Avionics Ring for Crewed MK2 Lunar Lander",
    subheader: "Blue Origin",
    description: "",
    technologies: ["Ansys Icepak", "Python"],
    category: 'Blue Origin',
    tags: ['Blue Origin', 'Thermal Analysis']
  },
  {
    id: 'bo3',
    title: "Lunar Thermal Properties Database",
    subheader: "Blue Origin",
    description: "",
    technologies: ["Python", "Pandas"],
    category: 'Blue Origin',
    tags: ['Blue Origin']
  },

  // UMD Projects (Red)
  {
    id: 'umd1',
    title: "Lunar South Pole Rover design with NASA Goddard",
    subheader: "University of Maryland",
    description: "",
    technologies: ["Thermal Desktop"],
    category: 'UMD',
    tags: ['University of Maryland', 'Thermal Analysis']
  },
  {
    id: 'umd2',
    title: "Rocket Nozzle Thermal Analysis",
    subheader: "University of Maryland",
    description: "",
    technologies: ["MATLAB"],
    category: 'UMD',
    tags: ['University of Maryland', 'Thermal Analysis']
  },
  
  // USDA Projects (Green)
  {
    id: 'usda1',
    title: "Machine Learning Pipeline to Predict Crop Yield based on Soil Nitrogen Levels for Water Conservation",
    subheader: "United States Department of Agriculture",
    description: "",
    technologies: ["Python", "Pytorch", "Sci-Kit Learn", "Machine Learning"],
    category: 'USDA',
    tags: ['Machine Learning']
  },
  
  // Personal Projects (Orange)
  {
    id: 'pers1',
    title: "Atrial Fibrillation Prediction from Wearable ECG Data",
    subheader: "Personal",
    description: "",
    technologies: ["Machine Learning", "Python"],
    category: 'Personal',
    tags: ['Machine Learning', 'Personal Projects']
  }
];

export const PUBLICATIONS: PublicationItem[] = [
  {
    id: 'pub1',
    title: "Blue Origin LAD Paper",
    venue: "Upcoming",
    status: "In Progress",
    description: "Characterization of Liquid Acquisition Device (LAD) performance in liquid nitrogen for propellant management systems, utilizing experimental cryogenic testing and transient heat transfer analysis."
  },
  {
    id: 'pub2',
    title: "UW Medicine ML/CFD Paper",
    venue: "Upcoming",
    status: "In Progress",
    description: "Development of an AI-driven computational pipeline combining nnU-Net segmentation and TUCAN simulations to predict atrial fibrillation-induced thrombus formation risk."
  }
];

export const SOCIALS: SocialLink[] = [
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/arul-g", iconName: "Linkedin" },
  { platform: "Email", url: "mailto:arul.gnanasivam@gmail.com", iconName: "Mail" },
];
