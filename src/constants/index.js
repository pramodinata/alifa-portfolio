import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets"; 

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI/ML Learner",
    icon: web,
  },
  {
    title: "Aviation Electronics Background",
    icon: mobile,
  },
  {
    title: "Writer",
    icon: backend,
  },
  {
    title: "Research Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Internship at Bio Farma",
    company_name: "Bio Farma",
    icon: shopify,
    iconBg: "white",
    date: "2025",
    points: [
      "Installed and configured pressure transmitters, VSD (Variable Speed Drive) systems, and smart relays (Zelio) for passbox and cold room applications.",
      "Performed troubleshooting and repairs on industrial equipment and calibration tools.",
    ],
  },
  {
    title: "Make Arduino-Based Wireless Transceiver Receiver System (NRF24L01+)",
    company_name: "SMKN 12 Bandung | Team Project",
    icon: starbucks,
    iconBg: "white",
    date: "2024",
    points: [
      "Designed a Proteus schematic integrating Arduino Nano, NRF24L01+ modules.",
      "Created a double-layer PCB layout and assembled the hardware.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Made an Aircraft Cockpit Lighting System",
    company_name: "SMKN 12 Bandung | Team Project",
    icon: starbucks,
    iconBg: "white",
    date: "2024",
    points: [
      "Designed and implemented a functional cockpit lighting system to simulate real-world aviation standards.",
      "Prepared and painted the cockpit panel board.",
      "Assembled and connected the lighting circuit, integrating switches and power supplies.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Hardware Designer & Prototyper",
    company_name: "SMKN 12 Bandung | Team Project",
    icon: starbucks,
    iconBg: "white",
    date: "2024",
    points: [
      "Designed a circuit schematic for aircraft miniature anti-collision lights using Proteus.",
      "Fabricated PCB via etching (ferric chloride), and hand-soldered components.",
      "Researched and sourced LEDs (red/white), 555 timer ICs (for flashing patterns), current-limiting resistors.",

    ],
  }
  ];
  //{
    //title: "Full stack Developer",
    //company_name: "Meta",
    //icon: meta,
    //iconBg: "#E6DEDD",
    //date: "Jan 2023 - Present",
    ////points: [
      //"Developing and maintaining web applications using React.js and other related technologies.",
      //"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      //"Implementing responsive design and ensuring cross-browser compatibility.",
      //"Participating in code reviews and providing constructive feedback to other developers.",
    //],
  //},

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Fundamental Math Operation using Pyhton",
    description:
      "Python basics (variables, operators, control flow) to solve arithmetic problems and classify odd/even numbers.",
    tags: [
      {
        name: "DiBimbing,",
        color: "blue-text-gradient",
      },
      {
        name: "GoogleCollab",
        color: "green-text-gradient",
      },
      {
        name: "Phyton",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://colab.research.google.com/drive/126uyqYdoybTxduzSnOuGkvtponCQDb5u?usp=sharing",
  },
  {
    name: "Feature Engineering of Student Score",
    description:
      "Developed a machine learning model to predict academic performance using Kaggle student dataset . Conducted comprehensive data analysis, feature engineering, and evaluated multiple algorithms.",
    tags: [
      {
        name: "Dibimbing",
        color: "blue-text-gradient",
      },
      {
        name: "GoogleCollab",
        color: "green-text-gradient",
      },
      {
        name: "Phyton Beginner",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://colab.research.google.com/drive/1iG20zvvc527qTZnPbvwfEW7ol4eS73O2?usp=sharing",
  },
  {
    name: "Coming Soon",
    description:
      "On-progress.",
    tags: [
      {
        //name: " ",
        //color: "blue-text-gradient",
      },
      {
        //name: "supabase",
        //color: "green-text-gradient",
      },
      {
        //name: "css",
        //color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "",
  }
];

export { services, technologies, experiences, testimonials, projects };