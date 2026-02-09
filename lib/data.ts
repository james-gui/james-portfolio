import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa';

export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: FaGithub,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: FaLinkedin,
  },
  {
    name: 'Email',
    url: 'mailto:james@example.com',
    icon: FaEnvelope,
  },
];

export const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'An innovative XR application exploring immersive spatial computing experiences.',
    tech: ['Unity', 'C#', 'Oculus SDK'],
    image: '/projects/project1.jpg',
    github: '#',
    demo: '#',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Computer vision system for real-time object detection and tracking.',
    tech: ['Python', 'OpenCV', 'TensorFlow'],
    image: '/projects/project2.jpg',
    github: '#',
    demo: '#',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Embedded systems project featuring IoT sensor networks and edge computing.',
    tech: ['C++', 'Arduino', 'MQTT'],
    image: '/projects/project3.jpg',
    github: '#',
    demo: '#',
  },
  {
    id: 4,
    title: 'Project 4',
    description: 'Machine learning model for predictive analytics in engineering applications.',
    tech: ['Python', 'PyTorch', 'NumPy'],
    image: '/projects/project4.jpg',
    github: '#',
    demo: '#',
  },
  {
    id: 5,
    title: 'Project 5',
    description: 'Web-based visualization tool for electrical circuit simulation.',
    tech: ['React', 'Three.js', 'WebGL'],
    image: '/projects/project5.jpg',
    github: '#',
    demo: '#',
  },
  {
    id: 6,
    title: 'Project 6',
    description: 'Hardware design project implementing custom FPGA solutions.',
    tech: ['Verilog', 'Vivado', 'FPGA'],
    image: '/projects/project6.jpg',
    github: '#',
    demo: '#',
  },
];

export const experiences = [
  {
    id: 1,
    role: 'XR Developer Intern',
    company: 'Tech Innovations Lab',
    location: 'Los Angeles, CA',
    period: 'Jun 2024 - Present',
    description: 'Developing immersive VR/AR applications for enterprise clients. Implementing spatial computing solutions and optimizing rendering pipelines.',
    skills: ['Unity', 'C#', 'ARKit', 'VR Development'],
  },
  {
    id: 2,
    role: 'Research Assistant',
    company: 'USC Viterbi School of Engineering',
    location: 'Los Angeles, CA',
    period: 'Jan 2024 - May 2024',
    description: 'Assisted in research on computer vision algorithms and embedded systems. Published findings on real-time object detection methods.',
    skills: ['Computer Vision', 'Python', 'Embedded Systems'],
  },
  {
    id: 3,
    role: 'Software Engineering Intern',
    company: 'Future Tech Solutions',
    location: 'San Francisco, CA',
    period: 'Jun 2023 - Aug 2023',
    description: 'Built full-stack applications and implemented CI/CD pipelines. Collaborated on machine learning model deployment.',
    skills: ['React', 'Node.js', 'Docker', 'AWS'],
  },
];

export const education = {
  school: 'University of Southern California',
  degree: 'B.S. Electrical & Computer Engineering',
  period: '2022 - 2026 (Expected)',
  gpa: '3.8/4.0',
  relevantCourses: [
    'Data Structures & Algorithms',
    'Digital Signal Processing',
    'Computer Architecture',
    'Machine Learning',
    'Embedded Systems',
    'Computer Graphics',
  ],
};

export const skills = [
  { name: 'C/C++', level: 90, category: 'Languages' },
  { name: 'Python', level: 85, category: 'Languages' },
  { name: 'JavaScript/TypeScript', level: 80, category: 'Languages' },
  { name: 'Unity/C#', level: 85, category: 'XR Development' },
  { name: 'Unreal Engine', level: 70, category: 'XR Development' },
  { name: 'React/Next.js', level: 85, category: 'Web' },
  { name: 'TensorFlow/PyTorch', level: 75, category: 'ML/AI' },
  { name: 'Verilog/FPGA', level: 70, category: 'Hardware' },
  { name: 'OpenCV', level: 80, category: 'Computer Vision' },
  { name: 'Git/GitHub', level: 90, category: 'Tools' },
  { name: 'Docker', level: 75, category: 'Tools' },
  { name: 'Linux', level: 85, category: 'Tools' },
];

export const skillCategories = ['Languages', 'XR Development', 'Web', 'ML/AI', 'Hardware', 'Computer Vision', 'Tools'];
