import { PROFILE, getContactActions, getResumeUrl, getWhatsAppUrl } from "@/lib/profile";

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
  source?: "About" | "Skills" | "Projects" | "Education" | "Certifications" | "Contact" | "General";
};

export type ChatbotContext = {
  lastTopic?: ChatbotMessage["source"];
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

function sectionActions() {
  return [
    { label: "Go to Skills", href: "#skills" },
    { label: "Go to Projects", href: "#projects" },
    { label: "Go to Certifications", href: "#certifications" },
    { label: "Go to Contact", href: "#contact" },
  ] satisfies ChatbotAction[];
}

export function getInitialAssistantMessage(): ChatbotMessage {
  return {
    id: id(),
    role: "assistant",
    text:
      "Namaste! I’m Chandrabhan’s portfolio assistant. Ask me about skills, projects, education, certifications, or choose a contact method to connect.",
    suggestions: [
      "What skills do you have?",
      "Show your projects",
      "What certifications do you have?",
      "How can I contact you?",
    ],
    actions: sectionActions(),
    source: "General",
  };
}

export function generateAssistantReply(
  userInput: string,
  ctx: ChatbotContext = {}
): { message: ChatbotMessage; nextContext: ChatbotContext; intent: string } {
  const raw = userInput ?? "";
  const text = normalize(raw);

  const nextContext: ChatbotContext = { ...ctx };

  const resolvedByContext = (keyword: string) => {
    if (!ctx.lastTopic) return false;
    return hasAny(text, [keyword, "it", "this", "that", "us", "inme", "isme", "iske", "iska", "unka"]);
  };

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
    "msg",
    "dm",
    "baat",
    "bat",
    "baat kar",
    "baat kr",
    "call pe",
    "phone pe",
    "whatsapp pe",
    "linkedin pe",
    "mail pe",
    "email pe",
    "message bhejo",
    "msg bhejo",
    "sampark",
    "sampark",
  ]);

  if (text.length <= 2 || hasAny(text, ["hi", "hello", "hey", "hii", "namaste"])) {
    const message: ChatbotMessage = {
      id: id(),
      role: "assistant",
      text:
        "Hi! I can answer about Chandrabhan’s skills, projects, education, certifications, and resume. Or you can choose a contact method to connect.",
      actions: [...sectionActions(), ...getContactActions()],
      suggestions: ["Show your projects", "What skills do you have?", "How can I contact you?"],
      source: "General",
    };
    return { message, nextContext, intent: "greeting" };
  }

  if (contactIntent) {
    const message: ChatbotMessage = {
      id: id(),
      role: "assistant",
      text: "Sure — how would you like to connect?",
      actions: getContactActions(),
      source: "Contact",
    };
    nextContext.lastTopic = "Contact";
    return { message, nextContext, intent: "contact" };
  }

  if (hasAny(text, ["resume", "cv"])) {
    const message: ChatbotMessage = {
      id: id(),
      role: "assistant",
      text: "You can download Chandrabhan’s resume here:",
      actions: [{ label: "Download Resume", href: getResumeUrl() }],
      source: "About",
    };
    nextContext.lastTopic = "About";
    return { message, nextContext, intent: "resume" };
  }

  const aboutSelfIntent = hasAny(text, [
    "tell me about yourself",
    "introduce yourself",
    "about yourself",
    "apne bare me",
    "apne baare me",
    "apne baare mein",
    "apne bare mein",
  ]);

  if (hasAny(text, ["name", "who are you", "who r you", "who is", "about"])) {
    const featureIdeas =
      "Feature ideas you can add (no AI):\n" +
      "• Auto-detect language (Hindi/English)\n" +
      "• FAQ quick buttons (Resume/Skills/Projects/Contact)\n" +
      "• WhatsApp message templates for different intents\n" +
      "• Better accessibility (focus trap + screen reader labels)\n" +
      "• Simple analytics: count intents (skills/projects/contact)";

    const summary =
      `Quick summary:\n` +
      `• Name: ${PROFILE.name}\n` +
      `• ${PROFILE.headline}\n` +
      `• Location: ${PROFILE.location.full}\n` +
      `• Interests: ${PROFILE.interests.join(", ")}`;

    const textOut = aboutSelfIntent
      ? `${featureIdeas}\n\n${summary}`
      : `${PROFILE.name} — ${PROFILE.headline}. Based in ${PROFILE.location.full}.`;

    const message: ChatbotMessage = {
      id: id(),
      role: "assistant",
      text: textOut,
      suggestions: ["What skills do you have?", "Show your projects", "How can I contact you?"],
      actions: sectionActions(),
      source: "About",
    };
    nextContext.lastTopic = "About";
    return { message, nextContext, intent: aboutSelfIntent ? "about_self" : "about" };
  }

  if (hasAny(text, ["location", "where", "kahan", "kha se", "from"])) {
    const message: ChatbotMessage = {
      id: id(),
      role: "assistant",
      text: `${PROFILE.name} is based in ${PROFILE.location.full}.`,
      actions: [{ label: "Open in Maps", href: PROFILE.location.mapsUrl }],
      source: "About",
    };
    nextContext.lastTopic = "About";
    return { message, nextContext, intent: "location" };
  }

  if (hasAny(text, ["education", "qualification", "degree", "study", "padhai"])) {
    const lines = PROFILE.education
      .map((e) => {
        const extra = e.status ? ` (${e.status})` : e.grade ? ` (Grade: ${e.grade})` : "";
        return `• ${e.degree} — ${e.institution} — ${e.period}${extra}`;
      })
      .join("\n");

    const message: ChatbotMessage = {
      id: id(),
      role: "assistant",
      text: `Education:\n${lines}`,
      actions: [{ label: "Go to About", href: "#about" }],
      source: "Education",
    };
    nextContext.lastTopic = "Education";
    return { message, nextContext, intent: "education" };
  }

  if (
    hasAny(text, ["skills", "skill", "technologies", "tech stack", "tech", "stack"]) ||
    (ctx.lastTopic === "Skills" && resolvedByContext(""))
  ) {
    const tech = PROFILE.skills.categories
      .map((c) => `• ${c.title}: ${c.skills.join(", ")}`)
      .join("\n");
    const soft = `• Soft Skills: ${PROFILE.skills.softSkills.join(", ")}`;

    const message: ChatbotMessage = {
      id: id(),
      role: "assistant",
      text: `Here are Chandrabhan’s skills:\n${tech}\n${soft}`,
      suggestions: ["Show your projects", "What certifications do you have?"],
      actions: [{ label: "Go to Skills", href: "#skills" }],
      source: "Skills",
    };
    nextContext.lastTopic = "Skills";
    return { message, nextContext, intent: "skills" };
  }

  if (
    hasAny(text, ["project", "projects", "work", "portfolio"]) ||
    (ctx.lastTopic === "Projects" && resolvedByContext(""))
  ) {
    const lines = PROFILE.projects
      .map((p) => `• ${p.title}: ${p.description} (Tech: ${p.technologies.join(", ")})`)
      .join("\n");

    const message: ChatbotMessage = {
      id: id(),
      role: "assistant",
      text: `Projects:\n${lines}`,
      suggestions: ["What skills do you have?", "How can I contact you?"],
      actions: [{ label: "Go to Projects", href: "#projects" }],
      source: "Projects",
    };
    nextContext.lastTopic = "Projects";
    return { message, nextContext, intent: "projects" };
  }

  if (hasAny(text, ["certification", "certifications", "certificate", "certificates"])) {
    const lines = PROFILE.certifications.map((c) => `• ${c.title} — ${c.issuer} (${c.date})`).join("\n");
    const message: ChatbotMessage = {
      id: id(),
      role: "assistant",
      text: `Certifications:\n${lines}`,
      actions: [
        { label: "Go to Certifications", href: "#certifications" },
        ...PROFILE.certifications.slice(0, 3).map((c) => ({ label: `View: ${c.issuer}`, href: c.link })),
      ],
      source: "Certifications",
    };
    nextContext.lastTopic = "Certifications";
    return { message, nextContext, intent: "certifications" };
  }

  if (hasAny(text, ["github"])) {
    const message: ChatbotMessage = {
      id: id(),
      role: "assistant",
      text: "Here’s Chandrabhan’s GitHub:",
      actions: [{ label: "Open GitHub", href: PROFILE.contact.githubUrl }],
      source: "Contact",
    };
    nextContext.lastTopic = "Contact";
    return { message, nextContext, intent: "github" };
  }

  if (hasAny(text, ["linkedin"])) {
    const message: ChatbotMessage = {
      id: id(),
      role: "assistant",
      text: "Here’s Chandrabhan’s LinkedIn:",
      actions: [{ label: "Open LinkedIn", href: PROFILE.contact.linkedinUrl }],
      source: "Contact",
    };
    nextContext.lastTopic = "Contact";
    return { message, nextContext, intent: "linkedin" };
  }

  if (hasAny(text, ["whatsapp"])) {
    const message: ChatbotMessage = {
      id: id(),
      role: "assistant",
      text: "Sure — you can message Chandrabhan on WhatsApp:",
      actions: [{ label: "Open WhatsApp", href: getWhatsAppUrl("Hi Chandrabhan, I visited your portfolio and would like to connect.") }],
      source: "Contact",
    };
    nextContext.lastTopic = "Contact";
    return { message, nextContext, intent: "whatsapp" };
  }

  const message: ChatbotMessage = {
    id: id(),
    role: "assistant",
    text:
      "I don’t have that exact info yet, but I can help with: skills, projects, education, certifications, resume, and contact options.",
    suggestions: [
      "What skills do you have?",
      "Show your projects",
      "What certifications do you have?",
      "How can I contact you?",
    ],
    actions: [...sectionActions(), ...getContactActions()],
    source: "General",
  };
  return { message, nextContext, intent: "fallback" };
}
