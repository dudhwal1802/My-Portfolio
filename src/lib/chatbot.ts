import { PROFILE, getContactActions, getResumeUrl } from "@/lib/profile";

export type ChatbotAction = {
  label: string;
  href: string;
};

export type ChatbotMessage = {
  id: string;
  role: "user" | "assistant";
  text: string;
  actions?: ChatbotAction[];
  suggestions?: string[];
};

function id() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function normalize(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s+@._-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function hasAny(text: string, needles: string[]) {
  return needles.some((n) => text.includes(n));
}

export function getInitialAssistantMessage(): ChatbotMessage {
  return {
    id: id(),
    role: "assistant",
    text:
      "Hi! I’m Chandrabhan’s portfolio assistant. You can ask me about skills, projects, education, certifications, or how to contact Chandrabhan.",
    suggestions: [
      "What skills do you have?",
      "Show your projects",
      "What certifications do you have?",
      "How can I contact you?",
    ],
  };
}

export function generateAssistantReply(userInput: string): ChatbotMessage {
  const raw = userInput ?? "";
  const text = normalize(raw);

  const contactIntent = hasAny(text, [
    "contact",
    "reach",
    "connect",
    "talk",
    "chat",
    "call",
    "phone",
    "whatsapp",
    "linkedin",
    "email",
    "mail",
    "message",
    "baat",
    "bat",
    "baat kar",
    "baat kr",
    "sampark",
  ]);

  if (text.length <= 2 || hasAny(text, ["hi", "hello", "hey", "hii", "namaste"])) {
    return {
      id: id(),
      role: "assistant",
      text:
        "Hi! Ask me anything about Chandrabhan — projects, skills, education, certifications — or choose a contact method.",
      actions: getContactActions(),
      suggestions: ["Show your projects", "What skills do you have?", "How can I contact you?"],
    };
  }

  if (contactIntent) {
    return {
      id: id(),
      role: "assistant",
      text: "Sure — how would you like to connect?",
      actions: getContactActions(),
    };
  }

  if (hasAny(text, ["resume", "cv"])) {
    return {
      id: id(),
      role: "assistant",
      text: "You can download Chandrabhan’s resume here:",
      actions: [{ label: "Download Resume", href: getResumeUrl() }],
    };
  }

  if (hasAny(text, ["name", "who are you", "who r you", "who is", "about"])) {
    return {
      id: id(),
      role: "assistant",
      text: `${PROFILE.name} — ${PROFILE.headline}. Based in ${PROFILE.location.full}.`,
      suggestions: ["What skills do you have?", "Show your projects", "How can I contact you?"],
    };
  }

  if (hasAny(text, ["location", "where", "kahan", "kha se", "from"])) {
    return {
      id: id(),
      role: "assistant",
      text: `${PROFILE.name} is based in ${PROFILE.location.full}.`,
      actions: [{ label: "Open in Maps", href: PROFILE.location.mapsUrl }],
    };
  }

  if (hasAny(text, ["education", "qualification", "degree", "study", "padhai"])) {
    const lines = PROFILE.education
      .map((e) => {
        const extra = e.status ? ` (${e.status})` : e.grade ? ` (Grade: ${e.grade})` : "";
        return `• ${e.degree} — ${e.institution} — ${e.period}${extra}`;
      })
      .join("\n");

    return {
      id: id(),
      role: "assistant",
      text: `Education:\n${lines}`,
    };
  }

  if (hasAny(text, ["skills", "skill", "technologies", "tech stack"])) {
    const tech = PROFILE.skills.categories
      .map((c) => `• ${c.title}: ${c.skills.join(", ")}`)
      .join("\n");
    const soft = `• Soft Skills: ${PROFILE.skills.softSkills.join(", ")}`;

    return {
      id: id(),
      role: "assistant",
      text: `Here are Chandrabhan’s skills:\n${tech}\n${soft}`,
      suggestions: ["Show your projects", "What certifications do you have?"],
    };
  }

  if (hasAny(text, ["project", "projects", "work", "portfolio"])) {
    const lines = PROFILE.projects
      .map((p) => `• ${p.title}: ${p.description} (Tech: ${p.technologies.join(", ")})`)
      .join("\n");

    return {
      id: id(),
      role: "assistant",
      text: `Projects:\n${lines}`,
      suggestions: ["What skills do you have?", "How can I contact you?"],
    };
  }

  if (hasAny(text, ["certification", "certifications", "certificate", "certificates"])) {
    const lines = PROFILE.certifications.map((c) => `• ${c.title} — ${c.issuer} (${c.date})`).join("\n");
    return {
      id: id(),
      role: "assistant",
      text: `Certifications:\n${lines}`,
      actions: PROFILE.certifications.slice(0, 3).map((c) => ({ label: `View: ${c.issuer}`, href: c.link })),
    };
  }

  if (hasAny(text, ["github"])) {
    return {
      id: id(),
      role: "assistant",
      text: "Here’s Chandrabhan’s GitHub:",
      actions: [{ label: "Open GitHub", href: PROFILE.contact.githubUrl }],
    };
  }

  if (hasAny(text, ["linkedin"])) {
    return {
      id: id(),
      role: "assistant",
      text: "Here’s Chandrabhan’s LinkedIn:",
      actions: [{ label: "Open LinkedIn", href: PROFILE.contact.linkedinUrl }],
    };
  }

  return {
    id: id(),
    role: "assistant",
    text:
      "I can help with: skills, projects, education, certifications, resume, and contact options. What would you like to know?",
    suggestions: [
      "What skills do you have?",
      "Show your projects",
      "What certifications do you have?",
      "How can I contact you?",
    ],
  };
}
