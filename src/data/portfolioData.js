// src/data/portfolioData.js

// Assets - Logos
import LogoWhite from '../assets/img/logo_white.png';

// Assets - Icons
import FacebookIcon from '../assets/img/icons/facebook_w.png';
import GithubIcon from '../assets/img/icons/github_w.png';
import GmailIcon from '../assets/img/icons/gmail.png';
import LinkedinIcon from '../assets/img/icons/linkedin_w.png';

// Assets - Profile
import Avatar from '../assets/img/avatar.png';

// Assets - Education
import UTVTLogo from '../assets/img/utvt_logo_2.png';
import CecytemLogo from '../assets/img/cecytem-logo.png';
import EducationBg from '../assets/img/education.png';

// Assets - Tech Skills
import html from '../assets/img/tech/html5.svg';
import css from '../assets/img/tech/css3.svg';
import js from '../assets/img/tech/javascript.svg';
import git from '../assets/img/tech/git.svg';
import spring from '../assets/img/tech/spring.svg';
import docker from '../assets/img/tech/docker.svg';
import mysql from '../assets/img/tech/mysql.svg';
import python from '../assets/img/tech/python.svg';
import react from '../assets/img/tech/react.svg';
import java from '../assets/img/tech/java.svg';
import github from '../assets/img/tech/github.svg';

export const portfolioData = {
  personalInfo: {
    name: "Ing. Cristian Martinez",
    titlePrefix: "Impulsando negocios con",
    nameWelcome: "Software a Medida",
    description: "Ingeniero de Software | Consultor de Soluciones Tecnológicas",
    shortBio: "Especializado en transformar necesidades empresariales en soluciones digitales de alto impacto, enfocadas en la eficiencia operativa y el crecimiento rentable.",
    avatar: Avatar,
    logo: LogoWhite,
  },
  socialLinks: [
    { name: "Linkedin", icon: LinkedinIcon, url: "#" },
    { name: "Github", icon: GithubIcon, url: "#" },
    { name: "Gmail", icon: GmailIcon, url: "mailto:tu-email@ejemplo.com" },
  ],
  navLinks: [
    { name: "Inicio", url: "#home" },
    { name: "Perfil", url: "#profile" },
    { name: "Soluciones", url: "#experience" },
    { name: "Tecnologías", url: "#skills" },
    { name: "Contacto", url: "#contact" },
  ],
  typewriterWords: [
    "Soluciones de Negocio",
    "Arquitectura Escalable",
    "Optimización de Procesos",
    "Desarrollo de Alto Impacto"
  ],
  skillCategories: [
    {
      name: "Soluciones Frontend",
      skills: [
        { name: "React", icon: react },
        { name: "JavaScript", icon: js },
        { name: "HTML5", icon: html },
        { name: "CSS3", icon: css },
      ]
    },
    {
      name: "Sistemas Backend",
      skills: [
        { name: "Java", icon: java },
        { name: "Spring Boot", icon: spring },
        { name: "Python", icon: python },
        { name: "MySQL", icon: mysql },
      ]
    },
    {
      name: "Infraestructura & DevOps",
      skills: [
        { name: "Git", icon: git },
        { name: "GitHub", icon: github },
        { name: "Docker", icon: docker },
      ]
    }
  ],
  education: [
    {
      institute: "Universidad Tecnológica del Valle de Toluca",
      logo: UTVTLogo,
      degree: "Ingeniería en Desarrollo de Software",
      date: "2020 - 2024",
      description: [
        "Especialización en gestión de proyectos de software empresarial.",
        "Desarrollo de sistemas robustos y escalables para el sector industrial."
      ],
    }
  ],
  experience: [
    {
      company: "Proyectos Independientes / Consultoría",
      role: "Desarrollador de Soluciones de Software",
      date: "Actualidad",
      achievements: [
        "Diseño e implementación de sistemas personalizados para la optimización de flujos de trabajo.",
        "Migración de procesos manuales a plataformas digitales automatizadas.",
        "Consultoría técnica para la toma de decisiones tecnológicas estratégicas."
      ]
    }
  ],
  educationBg: EducationBg,
  footerLinks: {
    general: [
      { name: "Servicios", url: "#experience" },
      { name: "Tecnologías", url: "#skills" },
      { name: "Metodología", url: "#" },
    ],
    contact: [
      { name: "Agendar Consultoría", url: "mailto:tu-email@ejemplo.com" },
      { name: "LinkedIn", url: "#" },
      { name: "Inicio", url: "#home" },
    ],
  },
  madeWithText: "Made with React",
  copyright: `&copy; ${new Date().getFullYear()} Alan Cristian M. G. Consultoría de Software.`
};
