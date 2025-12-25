export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  grade?: string;
  status?: string;
};

export type ProjectItem = {
  title: string;
  description: string;
  highlights: string[];
  technologies: string[];
  featured?: boolean;
};

export type CertificationItem = {
  title: string;
  issuer: string;
  date: string;
  link: string;
};

export type SkillCategory = {
  title: string;
  skills: string[];
};

export const PROFILE = {
  name: "Chandrabhan",
  headline: "MCA student passionate about Data Science and Web Development",
  location: {
    city: "Hanumangarh",
    state: "Rajasthan",
    country: "India",
    full: "Hanumangarh, Rajasthan, India",
    mapsUrl: "https://maps.google.com/?q=Hanumangarh,Rajasthan",
  },
  languages: ["English", "Hindi"],
  interests: ["Data Science", "Web Development", "Exploring New Technologies"],
  contact: {
    email: "contact.chandrabhan@gmail.com",
    phoneE164: "+919660880910",
    phoneDisplay: "+91 9660880910",
    whatsappUrl: "https://wa.me/919660880910",
    linkedinUrl: "https://www.linkedin.com/in/chandrabhan1802/",
    githubUrl: "https://github.com/dudhwal1802",
  },
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Jaipur National University, Jaipur",
      period: "July 2024 – On Going",
      status: "Currently Pursuing",
    },
    {
      degree: "Post Graduate Diploma in Computer Applications (PGDCA)",
      institution: "Jaipur National University, Jaipur",
      period: "August 2023 - June 2024",
      grade: "75%",
    },
    {
      degree: "Bachelor of Arts (B.A.)",
      institution: "Shri Khushal Das University, Hanumangarh",
      period: "July 2020 - June 2023",
      grade: "69.39%",
    },
  ] satisfies EducationItem[],
  skills: {
    categories: [
      { title: "Languages", skills: ["Python", "SQL", "HTML/CSS"] },
      { title: "Frameworks & Libraries", skills: ["Pandas", "Numpy", "Scikit-Learn"] },
      { title: "Tools", skills: ["Excel", "PowerPoint", "MySQL"] },
      { title: "Platforms", skills: ["VS Code", "Jupyter Notebook", "PyCharm"] },
    ] satisfies SkillCategory[],
    softSkills: [
      "Strong Communication Skills",
      "Leadership and Event Coordination",
      "Time Management",
      "Team Collaboration",
    ],
  },
  projects: [
    {
      title: "Personal Portfolio Website",
      description:
        "Designed and developed a fully responsive personal portfolio website using HTML, CSS, and JavaScript.",
      highlights: [
        "Highlights technical skills, projects, and academic achievements with a clean, professional interface",
        "Optimized for fast loading speed and cross-device compatibility",
        "Demonstrated strong front-end development skills and attention to user experience",
      ],
      technologies: ["HTML", "CSS", "JavaScript"],
      featured: true,
    },
  ] satisfies ProjectItem[],
  certifications: [
    {
      title: "Hands-on Approach to AI for Real World Applications",
      issuer: "TCS",
      date: "May 2025",
      link: "https://drive.google.com/file/d/15X4xInXgEzXEOUmoz7oPek0-dnUPJvmf/view",
    },
    {
      title: "Linux Training",
      issuer: "Spoken Tutorial, IIT Bombay",
      date: "March 2025",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7315012392248078336/",
    },
    {
      title: "Excel Skills for Business",
      issuer: "JP Morgan",
      date: "July 2023",
      link:
        "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/JPMorgan%20Chase%20Corporate/XiuvjcwqWRqH9oy38_JPMorgan%20Chase%20&%20Co._wDfbTJdrA2jjNMsuG_1690516422508_completion_certificate.pdf",
    },
  ] satisfies CertificationItem[],
} as const;

export function getResumeUrl() {
  return `${import.meta.env.BASE_URL}Chandrabhan_Resume.pdf`;
}

export function getWhatsAppUrl(prefillText?: string) {
  const base = PROFILE.contact.whatsappUrl;
  const text = (prefillText ?? "").trim();
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}

export function getContactActions() {
  const prefill = "Hello Chandrabhan";
  return [
    { label: "Phone Call", href: `tel:${PROFILE.contact.phoneE164}` },
    { label: "WhatsApp", href: getWhatsAppUrl(prefill) },
    { label: "LinkedIn", href: PROFILE.contact.linkedinUrl },
    { label: "Email", href: `mailto:${PROFILE.contact.email}` },
  ];
}
