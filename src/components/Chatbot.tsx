import React, { useEffect, useMemo, useRef, useState } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';

type Sender = 'user' | 'bot';
interface ChatMessage {
  id: number;
  sender: Sender;
  text: string;
  suggestions?: string[];
  ts: number;
}

interface Intent {
  id: string;
  keywords: string[];
  answer: () => string;
  followUps?: string[];
}

const knowledgeBase: Intent[] = [
  {
    id: 'who',
    keywords: ['who', 'about', 'introduce', 'intro', 'tell me about', 'rahul', 'name', 'yourself'],
    answer: () =>
      "Rahul Verma — Product Engineer with 5+ years building high-performance mobile apps. He architects with Bloc and clean architecture, integrates Firebase end-to-end, and currently works at Samaaro, an AI-powered event marketing platform, in Bengaluru.",
    followUps: ['What is his experience?', 'What tech does he use?', 'How to contact him?'],
  },
  {
    id: 'experience',
    keywords: ['experience', 'years', 'how long', 'work history', 'career', 'job', 'companies', 'worked'],
    answer: () =>
      "5+ years of experience across five companies:\n\n• Samaaro — Product Engineer (Jun 2026 – Present)\n• OneTick Technology — Senior Flutter Dev (Dec 2025 – May 2026)\n• Almond AI — Senior Flutter Dev (Mar 2024 – Nov 2025)\n• Codewire Tech — Senior Flutter Dev (Sep 2022 – Feb 2024)\n• Soumya Technology — Junior Flutter Dev (Jan 2021 – Sep 2022)",
    followUps: ['What does he do at Samaaro?', 'What projects has he built?', 'What is his stack?'],
  },
  {
    id: 'current_role',
    keywords: ['current', 'now', 'present', 'samaaro', 'onetick', 'currently', 'working on', 'today'],
    answer: () =>
      "Currently Product Engineer at Samaaro (Bengaluru) — an AI-powered event marketing platform. He ships product features end-to-end, working with design and product to take ideas from spec to production. Before that he was Senior Flutter Developer at OneTick Technology, where he led a team of 3 on a high-traffic financial app (+25% retention, +40% load-time gains).",
    followUps: ['What is his architecture approach?', 'Show me his projects', 'How to reach him?'],
  },
  {
    id: 'skills',
    keywords: ['skill', 'tech', 'stack', 'language', 'framework', 'tools', 'expertise', 'know', 'use'],
    answer: () =>
      "Tech stack:\n\n• Mobile: Flutter, Dart, iOS, Android\n• Architecture: Clean Architecture, MVVM, MVC, SOLID\n• State Mgmt: Bloc, GetX, Provider\n• Backend: REST APIs, Firebase (Auth, Firestore, FCM)\n• DevOps: Git, GoRouter, Google Maps, CI/CD (GitHub Actions, Codemagic)",
    followUps: ['Does he know Bloc?', 'Can he do iOS?', 'Show me his projects'],
  },
  {
    id: 'bloc',
    keywords: ['bloc', 'state management', 'state-management', 'cubit'],
    answer: () =>
      "Bloc is his primary state-management choice. He architects production apps around Bloc + clean architecture — at OneTick Technology he cut state-related bugs by 30% with this approach. He's also comfortable with GetX and Provider when the project calls for it.",
    followUps: ['What is clean architecture?', 'Show me his projects', 'What about Firebase?'],
  },
  {
    id: 'firebase',
    keywords: ['firebase', 'firestore', 'auth', 'fcm', 'cloud messaging', 'push notification', 'backend'],
    answer: () =>
      "Strong Firebase background — Auth, Firestore (incl. real-time sync), FCM for push notifications. He used Firebase + Google Maps for the School Bus Tracking project and for real-time social features at Almond AI.",
    followUps: ['Show me his projects', 'What about REST APIs?', 'Does he know iOS?'],
  },
  {
    id: 'ios',
    keywords: ['ios', 'apple', 'iphone', 'app store', 'appstore', 'mac', 'swift'],
    answer: () =>
      "Yes — he ships to the App Store. ComplygateID is live on the iOS App Store right now. He works in Flutter, so iOS and Android come together, but he handles the platform-specific work (signing, App Store Connect, iOS quirks) too.",
    followUps: ['Show me ComplygateID', 'What about Android?', 'How to contact him?'],
  },
  {
    id: 'android',
    keywords: ['android', 'google play', 'play store', 'kotlin'],
    answer: () =>
      "Multiple Android apps live on Google Play — Complygate Right-to-Work (UK), Takse Service Mall (gov-tech), and Somany (Almonds enterprise). He handles signing, Play Console, and version rollouts.",
    followUps: ['Show me his projects', 'What about iOS?', 'How to contact him?'],
  },
  {
    id: 'projects',
    keywords: ['project', 'work', 'portfolio', 'apps', 'built', 'made', 'created', 'shipped', 'examples'],
    answer: () =>
      "Selected production work:\n\n• ComplygateID — iOS App Store (UK identity / RTW)\n• Complygate RTW — Google Play (Android)\n• Takse Service Mall — Google Play (gov-tech)\n• Somany / Almonds — Google Play (enterprise)\n\nOpen source: blocx_cli (Flutter CLI), dynamic_island (Flutter package), National_Youth_Party.\n\nScroll to the Projects section for links.",
    followUps: ['Show me blocx_cli', 'What is dynamic_island?', 'How to contact him?'],
  },
  {
    id: 'blocx_cli',
    keywords: ['blocx', 'blocx_cli', 'cli', 'scaffold', 'tool'],
    answer: () =>
      "blocx_cli — a Dart command-line tool he built that scaffolds Flutter projects following Bloc + clean architecture conventions. Less boilerplate, more shipping. Repo: github.com/RahulDev-flutter/blocx_cli",
    followUps: ['What is dynamic_island?', 'Show me his projects', 'How to contact him?'],
  },
  {
    id: 'dynamic_island',
    keywords: ['dynamic island', 'island', 'package', 'pub.dev'],
    answer: () =>
      "dynamic_island — open-source Flutter package implementing the iOS Dynamic Island UI. Drop-in widgets with the pill expand/contract behaviour. Repo: github.com/RahulDev-flutter/dynamic_island",
    followUps: ['What is blocx_cli?', 'Show me his projects', 'Contact info?'],
  },
  {
    id: 'contact',
    keywords: ['contact', 'reach', 'email', 'mail', 'phone', 'call', 'hire', 'message', 'get in touch'],
    answer: () =>
      "Best ways to reach Rahul:\n\n• Email: rahulverma0549@gmail.com\n• Phone: +91 93153 38608\n• LinkedIn: linkedin.com/in/rvofficials\n• GitHub: github.com/RahulDev-flutter\n\nHe replies within a day. The Contact section has a form too.",
    followUps: ['Is he open to work?', 'What is his location?', 'What does he charge?'],
  },
  {
    id: 'location',
    keywords: ['location', 'where', 'based', 'live', 'city', 'country', 'india', 'faridabad', 'remote'],
    answer: () =>
      "Based in Faridabad, Haryana (India · GMT+5:30). Remote-friendly — happy to work with teams across timezones.",
    followUps: ['Is he open to work?', 'How to contact him?', 'What is his experience?'],
  },
  {
    id: 'availability',
    keywords: ['available', 'open', 'hire', 'hiring', 'opportunity', 'opportunities', 'freelance', 'contract', 'job', 'looking'],
    answer: () =>
      "Yes — open to senior Flutter roles, contract work, and ambitious side projects. Drop a line via the Contact section or email rahulverma0549@gmail.com directly.",
    followUps: ['What is his location?', 'What is his experience?', 'How to contact him?'],
  },
  {
    id: 'education',
    keywords: ['education', 'study', 'studied', 'college', 'university', 'degree', 'bca', 'graduate', 'qualification'],
    answer: () =>
      "Bachelor of Computer Application (BCA) from University of Engineering & Management, Jaipur — Jul 2019 to May 2022.",
    followUps: ['What is his experience?', 'What is his stack?', 'Contact info?'],
  },
  {
    id: 'achievements',
    keywords: ['achievement', 'metric', 'numbers', 'impact', 'results', 'wins', 'highlight'],
    answer: () =>
      "Track record (numbers from real projects):\n\n• 40% faster load times on flagship apps\n• 30% reduction in state-related bugs via Bloc + clean architecture\n• 25% increase in user retention on a high-traffic financial app\n• 20% shorter dev cycles via CI/CD (GitHub Actions + Codemagic)\n• 8+ projects delivered as a junior, 10+ shipped overall",
    followUps: ['Show me his projects', 'What is his current role?', 'Contact info?'],
  },
  {
    id: 'leadership',
    keywords: ['lead', 'leader', 'team', 'mentor', 'manage', 'leadership'],
    answer: () =>
      "Yes — at OneTick Technology he led a team of 3 developers on a high-traffic financial product, ran code reviews, mentored juniors, and drove architecture decisions. Solid in Agile/Scrum and stakeholder communication.",
    followUps: ['What is his current role?', 'What about achievements?', 'Contact info?'],
  },
  {
    id: 'languages',
    keywords: ['language spoken', 'speak', 'spoken languages', 'english', 'hindi'],
    answer: () => 'Speaks English (professional) and Hindi (native).',
    followUps: ['What is his location?', 'Is he open to work?', 'Contact info?'],
  },
  {
    id: 'greeting',
    keywords: ['hi', 'hello', 'hey', 'namaste', 'yo', 'sup', 'greetings'],
    answer: () =>
      "Hey! I'm Rahul's portfolio assistant. Ask me anything about his experience, projects, tech stack, or how to reach him.",
    followUps: ['Who is Rahul?', 'What does he build?', 'How to contact him?'],
  },
  {
    id: 'thanks',
    keywords: ['thanks', 'thank you', 'thx', 'ty'],
    answer: () => "Anytime. Anything else about Rahul's work?",
    followUps: ['Show me his projects', 'What is his stack?', 'Contact info?'],
  },
];

const fallbackSuggestions = [
  'What is his experience?',
  'Show me his projects',
  'What tech does he use?',
  'How to contact him?',
];

const normalize = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

function findIntent(input: string): Intent | null {
  const q = normalize(input);
  if (!q) return null;

  let best: { intent: Intent; score: number } | null = null;
  for (const intent of knowledgeBase) {
    let score = 0;
    for (const kw of intent.keywords) {
      const nk = normalize(kw);
      if (q.includes(nk)) score += nk.length;
    }
    if (score > 0 && (!best || score > best.score)) {
      best = { intent, score };
    }
  }
  return best?.intent ?? null;
}

const Chatbot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      sender: 'bot',
      text:
        "Hey 👋 I'm Rahul's portfolio assistant. I can answer questions about his work, projects, stack, and how to reach him. What would you like to know?",
      suggestions: fallbackSuggestions,
      ts: Date.now(),
    },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open, typing]);

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 250);
      return () => clearTimeout(t);
    }
  }, [open]);

  const send = (raw: string) => {
    const text = raw.trim();
    if (!text) return;

    const userMsg: ChatMessage = {
      id: Date.now(),
      sender: 'user',
      text,
      ts: Date.now(),
    };
    setMessages((m) => [...m, userMsg]);
    setInput('');
    setTyping(true);

    setTimeout(() => {
      const intent = findIntent(text);
      const botMsg: ChatMessage = intent
        ? {
            id: Date.now() + 1,
            sender: 'bot',
            text: intent.answer(),
            suggestions: intent.followUps,
            ts: Date.now(),
          }
        : {
            id: Date.now() + 1,
            sender: 'bot',
            text:
              "I'm only trained on Rahul's portfolio — I can't help with that. But I can tell you about his experience, projects, tech stack, or how to reach him. Try one of these:",
            suggestions: fallbackSuggestions,
            ts: Date.now(),
          };
      setMessages((m) => [...m, botMsg]);
      setTyping(false);
    }, 450 + Math.min(800, text.length * 12));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    send(input);
  };

  const lastSuggestions = useMemo(() => {
    const last = [...messages].reverse().find((m) => m.sender === 'bot' && m.suggestions?.length);
    return last?.suggestions ?? [];
  }, [messages]);

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        className={`fixed bottom-5 right-5 md:bottom-8 md:right-8 z-[60] w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 ${
          open
            ? 'bg-bg-elev border border-border-strong text-fg rotate-90'
            : 'bg-accent text-bg hover:bg-accent-bright hover:scale-105'
        }`}
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
        {!open && (
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-accent-bright border-2 border-bg animate-pulse"></span>
        )}
      </button>

      {/* Chat panel */}
      <div
        className={`fixed z-[55] bottom-24 right-3 md:right-8 w-[calc(100vw-1.5rem)] sm:w-[26rem] max-w-[26rem] h-[34rem] max-h-[calc(100vh-7rem)]
          bg-bg-elev border border-border-strong rounded-2xl shadow-2xl flex flex-col overflow-hidden
          transition-all duration-300 origin-bottom-right ${
            open ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
          }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border bg-bg">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full bg-accent text-bg flex items-center justify-center font-mono font-bold">
              rv
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-accent border-2 border-bg-elev animate-pulse"></span>
            </div>
            <div>
              <div className="text-fg font-medium text-sm flex items-center gap-1.5">
                Rahul's Assistant
                <Sparkles size={12} className="text-accent" />
              </div>
              <div className="font-mono text-[10px] text-fg-subtle uppercase tracking-widest">
                online · portfolio Q&amp;A
              </div>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="p-1.5 rounded-md text-fg-subtle hover:text-fg hover:bg-bg-elev-2 transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((m) => (
            <div key={m.id} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-line ${
                  m.sender === 'user'
                    ? 'bg-accent text-bg rounded-br-sm'
                    : 'bg-bg-elev-2 border border-border text-fg rounded-bl-sm'
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
          {typing && (
            <div className="flex justify-start">
              <div className="bg-bg-elev-2 border border-border rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-fg-subtle animate-bounce [animation-delay:0ms]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-fg-subtle animate-bounce [animation-delay:150ms]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-fg-subtle animate-bounce [animation-delay:300ms]"></span>
              </div>
            </div>
          )}
        </div>

        {/* Suggestions */}
        {!typing && lastSuggestions.length > 0 && (
          <div className="px-4 pb-2 flex flex-wrap gap-1.5">
            {lastSuggestions.map((s) => (
              <button
                key={s}
                onClick={() => send(s)}
                className="px-3 py-1.5 text-xs rounded-full bg-bg border border-border text-fg-muted hover:text-accent hover:border-accent/40 transition-all"
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <form onSubmit={handleSubmit} className="border-t border-border p-3 flex items-center gap-2 bg-bg">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about Rahul..."
            className="flex-1 bg-bg-elev-2 border border-border rounded-full px-4 py-2.5 text-sm text-fg placeholder-fg-subtle focus:border-accent"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            aria-label="Send"
            className="w-10 h-10 rounded-full bg-accent text-bg flex items-center justify-center hover:bg-accent-bright disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            <Send size={16} />
          </button>
        </form>
      </div>
    </>
  );
};

export default Chatbot;
