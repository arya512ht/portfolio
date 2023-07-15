import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  cplusplus,
  html,
  css,
  reactjs,
  java,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  python,
  ardentlogo,
  hzslogo,
  hitklogo,
  alumnuslogo,
  faceloginss,
  collegewebss,
  portfolioss,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Good Coder",
    icon: mobile,
  },
  {
    title: "Fast Learner",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "Cplusplus",
    icon: cplusplus,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Java",
    icon: java,
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
    name: "python",
    icon: python,
  },
];

const experiences = [
  {
    title: "Howrah Zilla School",
    company_name: "Schooling",
    icon: hzslogo,
    iconBg: "#E6DEDD",
    date: "April 2007 - June 2019",
    points: [
      "This was a transformative journey that equiped me with knowledge, skills, and values to navigate the world. It fostered intellectual growth, social development, and critical thinking, empowering me to shape my future. Through a dynamic blend of academic instruction, extracurricular activities, and meaningful interactions, this paved the path towards lifelong learning and personal fulfillment.",
    ],
  },
  {
    title: "Heritage Institute of Technology",
    company_name: "Under Graduation",
    icon: hitklogo,
    iconBg: "#E6DEDD",
    date: "November 2020 - July 2024",
    points: [
      "This is a pivotal phase of higher education, where I delve deep into my chosen fields of study. It offers a rich learning experience through a combination of academic coursework, practical training, and research opportunities. I acquire specialized knowledge, develop essential skills, and lay the foundation for their future careers, while also experiencing personal growth and building lasting connections.",
    ],
  },
  {
    title: "Alumnus Software Ltd.",
    company_name: "Internship",
    icon: alumnuslogo,
    iconBg: "#E6DEDD",
    date: "June 2022 - July 2022",
    points: [
      "This provided invaluable hands-on experience and exposure to real-world professional environments. It offered a unique opportunity for me to apply my theoretical knowledge in practical settings, develop new skills, and gain industry insights. This also served as a stepping stone for building networks, exploring career paths, and enhancing employability in the competitive job market.",
    ],
  },
  {
    title: "Ardent Computec Pvt. Ltd.",
    company_name: "Training and Internship",
    icon: ardentlogo,
    iconBg: "#E6DEDD",
    date: "June 2022 - July 2022",
    points: [
      "These combine theoretical learning with practical application, providing a comprehensive and immersive learning experience. Through training, I acquired specific skills and knowledge in a structured manner, while internship offered the chance to apply and further develop those skills in real-world settings. This combination equiped me with the expertise and experience needed to excel in my chosen field, bridging the gap between academia and professional success.",
    ],
  },
];



const projects = [
  {
    name: "HITK College Website",
    description:
      "This project is a comprehensive web application designed to serve as an online platform for a college. It includes features such as information about the college, academic programs, admissions information, campus facilities, and events. It also incorporates functionalities like course registration, student portal, online facilities, and a canteen section. The website is built using modern web technologies, ensuring a user-friendly interface and responsive design for seamless access across different devices. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
    ],
    image: collegewebss,
    source_code_link: "https://github.com/arya512ht/hitkweb/",
  },
  {
    name: "Face Recognition Login",
    description:
      "The Face Recognition Login Project offers secure and convenient access to platforms and devices through facial recognition technology. Users authenticate their identity by simply facing the camera, eliminating the need for passwords or PINs. Advanced algorithms analyze facial features to create a unique biometric template, ensuring reliable and accurate identification. By leveraging the power of facial recognition, it enhances login processes, enhances security measures, and provides a seamless user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "openCV",
        color: "pink-text-gradient",
      },
    ],
    image: faceloginss,
    source_code_link: "https://github.com/arya512ht/face-recognition-login-react-python/",
  },
  {
    name: "Portfolio Website",
    description:"This is a dynamic platform that showcases my diverse range of skills, projects, and accomplishments. With a sleek and modern design, it offers a visually captivating experience for visitors. It features an in-depth About Me section, a comprehensive portfolio highlighting my best work, and projects, and easy-to-use contact forms for potential connections. Through my portfolio website, I aim to impress and engage visitors while effectively presenting my expertise and attracting new opportunities.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "three.js",
        color: "pink-text-gradient",
      },
    ],
    image: portfolioss,
    source_code_link: "https://github.com/arya512ht/portfolio/",
  },
];

export { services, technologies, experiences, projects };
