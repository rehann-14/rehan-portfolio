import aiToolsBe10xPdf from '../assets/certificates/AI Tools Workshop be10x.pdf';
import digitalMarketingPdf from '../assets/certificates/Digital Marketing Course.pdf';
import aiInternshipImg from '../assets/certificates/60hrs  internship in ai.png';
import aiPdf from '../assets/certificates/Artificial Intelligence.pdf';
import jiraPdf from '../assets/certificates/30hr short term jira course .pdf';
import agileScrumPdf from '../assets/certificates/agile scrum.pdf';
import cyberSecurityPdf from '../assets/certificates/30hr short term cyber security .pdf';
import dataAnalyticsPdf from '../assets/certificates/60hrs  internship inData Analytics.pdf';
import kaliLinuxPdf from '../assets/certificates/intro to kali linux.pdf';
import introCyberSecurityPdf from '../assets/certificates/intro to cyber security.pdf';

export const certificates = [
  {
    id: 1,
    title: "AI Tools Workshop",
    issuer: "Be10x",
    date: "2024",
    description: "Comprehensive AI tools workshop covering ChatGPT, AI productivity tools, and how to leverage AI for business and digital marketing.",
    category: "AI Tools",
    credentialId: "BE10X-001",
    pdfLink: aiToolsBe10xPdf,
    image: null,
    color: "#7C3AED",
  },
  {
    id: 2,
    title: "Digital Marketing Course",
    issuer: "Tutedude",
    description: "Complete digital marketing course covering SEO, social media marketing, content strategy, email marketing, and analytics.",
    category: "Digital Marketing",
    credentialId: "TUTE-002",
    pdfLink: digitalMarketingPdf,
    image: null,
    color: "#2563EB",
  },
  {
    id: 3,
    title: "Artificial Intelligence Internship",
    issuer: "BharatCares®",
    date: "2024",
    description: "Lenovo Leap NextGen Scholar program — 60 Hours AI internship covering machine learning concepts, AI tools, and real-world applications.",
    category: "AI Tools",
    credentialId: "BC-AI-003",
    pdfLink: aiPdf,
    image: aiInternshipImg,
    color: "#059669",
  },
  {
    id: 4,
    title: "Software Project Management (Jira)",
    issuer: "Short-Term Course",
    date: "2024",
    description: "30 Hours short-term course on Software Project Management Tools using Jira — covering agile boards, sprint planning, and issue tracking.",
    category: "Project Management",
    credentialId: "JIRA-004",
    pdfLink: jiraPdf,
    image: null,
    color: "#0891B2",
  },
  {
    id: 5,
    title: "Agile Scrum Master",
    issuer: "Short-Term Course",
    date: "2024",
    description: "Short-term course on Agile Scrum methodology — covering sprint ceremonies, scrum roles, and agile project delivery.",
    category: "Project Management",
    credentialId: "SCRUM-005",
    pdfLink: agileScrumPdf,
    image: null,
    color: "#D97706",
  },
  {
    id: 6,
    title: "Cyber Security",
    issuer: "Short-Term Course",
    date: "2024",
    description: "30 Hours short-term course on Cyber Security fundamentals — covering network security, data protection, and cybersecurity best practices.",
    category: "Technology",
    credentialId: "CYBER-006",
    pdfLink: cyberSecurityPdf,
    image: null,
    color: "#DC2626",
  },
  {
    id: 7,
    title: "Data Analytics Internship",
    issuer: "BharatCares®",
    date: "2024",
    description: "60 Hours internship in Data Analytics.",
    category: "Data",
    credentialId: "DATA-007",
    pdfLink: dataAnalyticsPdf,
    image: null,
    color: "#4F46E5",
  },
  {
    id: 8,
    title: "Intro to Kali Linux",
    issuer: "Short-Term Course",
    date: "2024",
    description: "Introduction to Kali Linux for penetration testing and ethical hacking.",
    category: "Technology",
    credentialId: "KALI-008",
    pdfLink: kaliLinuxPdf,
    image: null,
    color: "#9333EA",
  },
  {
    id: 9,
    title: "Intro to Cyber Security",
    issuer: "Short-Term Course",
    date: "2024",
    description: "Introduction to Cyber Security concepts and practices.",
    category: "Technology",
    credentialId: "CYBER-009",
    pdfLink: introCyberSecurityPdf,
    image: null,
    color: "#E11D48",
  }
];

export const certCategories = ["All", "Digital Marketing", "AI Tools", "Project Management", "Technology", "Data"];
