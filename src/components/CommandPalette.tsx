import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { scrollToHash } from "@/lib/scroll";
import {
  BadgeCheck,
  FolderGit2,
  Github,
  Home,
  Linkedin,
  Mail,
  Sparkles,
  User,
} from "lucide-react";

type CommandAction = {
  value: string;
  label: string;
  icon?: React.ReactNode;
  keywords?: string;
  shortcut?: string;
  run: () => void;
};

function openExternal(url: string) {
  window.open(url, "_blank", "noopener,noreferrer");
}

function openMailTo(email: string) {
  window.location.href = `mailto:${email}`;
}

function scrollToHashWhenReady(hash: string, timeoutMs = 1200) {
  const id = hash.replace("#", "");
  const start = performance.now();

  const tick = () => {
    const element = document.getElementById(id);
    if (element) {
      scrollToHash(hash, { durationMs: 350 });
      return;
    }
    if (performance.now() - start > timeoutMs) return;
    requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const actions = useMemo<CommandAction[]>(
    () => [
      {
        value: "nav-home",
        label: "Go to Home",
        icon: <Home className="mr-2 h-4 w-4" />,
        shortcut: "H",
        run: () => {
          navigate({ pathname: "/", hash: "#home" });
          scrollToHashWhenReady("#home");
        },
      },
      {
        value: "nav-about",
        label: "Go to About",
        icon: <User className="mr-2 h-4 w-4" />,
        shortcut: "A",
        run: () => {
          navigate({ pathname: "/", hash: "#about" });
          scrollToHashWhenReady("#about");
        },
      },
      {
        value: "nav-skills",
        label: "Go to Skills",
        icon: <Sparkles className="mr-2 h-4 w-4" />,
        shortcut: "S",
        run: () => {
          navigate({ pathname: "/", hash: "#skills" });
          scrollToHashWhenReady("#skills");
        },
      },
      {
        value: "nav-projects",
        label: "Go to Projects",
        icon: <FolderGit2 className="mr-2 h-4 w-4" />,
        shortcut: "P",
        run: () => {
          navigate({ pathname: "/", hash: "#projects" });
          scrollToHashWhenReady("#projects");
        },
      },
      {
        value: "nav-certifications",
        label: "Go to Certifications",
        icon: <BadgeCheck className="mr-2 h-4 w-4" />,
        shortcut: "C",
        run: () => {
          navigate({ pathname: "/", hash: "#certifications" });
          scrollToHashWhenReady("#certifications");
        },
      },
      {
        value: "nav-contact",
        label: "Go to Contact",
        icon: <Mail className="mr-2 h-4 w-4" />,
        shortcut: "K",
        run: () => {
          navigate({ pathname: "/", hash: "#contact" });
          scrollToHashWhenReady("#contact");
        },
      },
      {
        value: "open-resume",
        label: "Open Resume",
        keywords: "cv pdf download",
        run: () => {
          openExternal(`${import.meta.env.BASE_URL}Chandrabhan_Resume.pdf`);
        },
      },
      {
        value: "open-github",
        label: "Open GitHub",
        icon: <Github className="mr-2 h-4 w-4" />,
        run: () => {
          openExternal("https://github.com/dudhwal1802");
        },
      },
      {
        value: "open-linkedin",
        label: "Open LinkedIn",
        icon: <Linkedin className="mr-2 h-4 w-4" />,
        run: () => {
          openExternal("https://www.linkedin.com/in/chandrabhan1802/");
        },
      },
      {
        value: "email-me",
        label: "Email Me",
        icon: <Mail className="mr-2 h-4 w-4" />,
        keywords: "mail contact",
        run: () => {
          openMailTo("contact.chandrabhan@gmail.com");
        },
      },
    ],
    [navigate],
  );

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const isK = event.key.toLowerCase() === "k";
      const isCombo = (event.ctrlKey || event.metaKey) && isK;
      if (!isCombo) return;

      event.preventDefault();
      setOpen((prev) => !prev);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  // If route changes while palette is open, keep it open but clear query
  useEffect(() => {
    if (open) setQuery("");
  }, [location.key, open]);

  const runAction = (action: CommandAction) => {
    setOpen(false);
    setQuery("");
    action.run();
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput value={query} onValueChange={setQuery} placeholder="Type a command or search…" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandGroup heading="Navigation">
          {actions
            .filter((a) => a.value.startsWith("nav-"))
            .map((action) => (
              <CommandItem
                key={action.value}
                value={`${action.label} ${action.keywords ?? ""}`}
                onSelect={() => runAction(action)}
              >
                {action.icon}
                <span>{action.label}</span>
                {action.shortcut ? <CommandShortcut>{action.shortcut}</CommandShortcut> : null}
              </CommandItem>
            ))}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Links">
          {actions
            .filter((a) => !a.value.startsWith("nav-"))
            .map((action) => (
              <CommandItem
                key={action.value}
                value={`${action.label} ${action.keywords ?? ""}`}
                onSelect={() => runAction(action)}
              >
                {action.icon ? action.icon : <span className="mr-2 inline-block h-4 w-4" />}
                <span>{action.label}</span>
              </CommandItem>
            ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
