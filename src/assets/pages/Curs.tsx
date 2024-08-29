import React, { useState } from "react";
import MainContent from "../components/MainContent";
import Sidebar from "../components/Sidebar";
import CursHeader from "../components/CursHeader";
import { useEffect } from "react";

export type Resource = {
  name: string;
  url: string;
};

export type Lesson = {
  title: string;
  videoUrl: string;
  resources: Resource[];
};

type Module = {
  title: string;
  lessons: Lesson[];
};

const modules: Module[] = [
  {
    title: "Introducere în Inteligența Artificială",
    lessons: [
      {
        title: "Ce este AI",
        videoUrl: "https://www.youtube.com/watch?v=y0sF5xhGreA",
        resources: [
          {
            name: "Document Important",
            url: "https://example.com/resource1.pdf",
          },
        ],
      },
      {
        title: "Istoria AI",
        videoUrl: "https://example.com/video2.mp4",
        resources: [],
      },
    ],
  },
  {
    title: "ChatGPT",
    lessons: [
      {
        title: "Creare cont ",
        videoUrl: "https://example.com/video3.mp4",
        resources: [],
      },
      {
        title: "Setare cont",
        videoUrl: "https://example.com/video4.mp4",
        resources: [],
      },
      {
        title: "Instrucțiuni personalizate",
        videoUrl: "https://example.com/video4.mp4",
        resources: [],
      },
      {
        title: "GPTs",
        videoUrl: "https://example.com/video4.mp4",
        resources: [],
      },
      {
        title: "Capacități",
        videoUrl: "https://example.com/video4.mp4",
        resources: [],
      },
      {
        title: "Limitări",
        videoUrl: "https://example.com/video4.mp4",
        resources: [],
      },
    ],
  },
  {
    title: "Opțiuni Alternative (ClaudeAI, Gemini, PerplexityAI)",
    lessons: [
      {
        title: "Evaluarea modelelor",
        videoUrl: "https://example.com/evaluarea-modelelor.mp4",
        resources: [],
      },
      {
        title: "ClaudeAI - Principalul concurent al ChatGPT",
        videoUrl: "https://example.com/claudeai.mp4",
        resources: [],
      },
      {
        title: "Gemini – Instrumentul AI al Google",
        videoUrl: "https://example.com/gemini.mp4",
        resources: [],
      },
      {
        title: "PerplexityAI – Căutarea rapidă a informațiilor",
        videoUrl: "https://example.com/perplexityai.mp4",
        resources: [],
      },
      {
        title: "ChatGTP vs. ClaudeAI vs. Gemini vs. PerplexityAI",
        videoUrl: "https://example.com/comparison.mp4",
        resources: [],
      },
    ],
  },
  {
    title: " Prompt engineering",
    lessons: [
      {
        title: "Cum să vorbim corect cu Inteligența Artificială",
        videoUrl: "https://example.com/video1.mp4",
        resources: [],
      },
      {
        title: "Concepte generale despre prompt-uri",
        videoUrl: "https://example.com/video2.mp4",
        resources: [],
      },
      {
        title: "Tehnici de scriere a prompt-urilor",
        videoUrl: "https://example.com/video3.mp4",
        resources: [],
      },
      {
        title: "Chain-of-Thought (CoT)",
        videoUrl: "https://example.com/video4.mp4",
        resources: [],
      },
      {
        title: "Prompt-uri multimodale",
        videoUrl: "https://example.com/video5.mp4",
        resources: [],
      },
    ],
  },
  {
    title: "Asistenți personali cu AI",
    lessons: [
      {
        title: "Organizarea și planificarea cu ajutorul AI",
        videoUrl: "https://example.com/video1.mp4",
        resources: [],
      },
      {
        title: "Utilizarea GPTs pentru a crește productivitatea",
        videoUrl: "https://example.com/video2.mp4",
        resources: [],
      },
      {
        title: "Crearea de Asistenți Personali",
        videoUrl: "https://example.com/video3.mp4",
        resources: [],
      },
      {
        title: "Îmbunătățirea procesului de luare a deciziilor",
        videoUrl: "https://example.com/video4.mp4",
        resources: [],
      },
    ],
  },
  {
    title: "Cariera",
    lessons: [
      {
        title:
          "Crearea unui CV și a unei scrisori de intenție impresionante cu AI",
        videoUrl: "https://example.com/video1.mp4",
        resources: [],
      },
      {
        title: "Strategii de căutare a jobului și networking asistate de AI",
        videoUrl: "https://example.com/video2.mp4",
        resources: [],
      },
      {
        title:
          "Pregătirea pentru interviu și negocierea salariului cu ajutorul AI",
        videoUrl: "https://example.com/video3.mp4",
        resources: [],
      },
    ],
  },
  {
    title: "Analiză și Raportare",
    lessons: [
      {
        title: "Interpretarea datelor cu ajutorul AI",
        videoUrl: "https://example.com/video1.mp4",
        resources: [],
      },
      {
        title: "Crearea de rapoarte și vizualizări impactante",
        videoUrl: "https://example.com/video2.mp4",
        resources: [],
      },
      {
        title: "Crearea documentelor, contractelor si strategiilor",
        videoUrl: "https://example.com/video3.mp4",
        resources: [],
      },
    ],
  },
  {
    title: "Marketing cu AI",
    lessons: [
      {
        title: "Generarea de idei și brainstorming",
        videoUrl: "https://example.com/video1.mp4",
        resources: [],
      },
      {
        title: "Strategii de Marketing și Vânzări",
        videoUrl: "https://example.com/video2.mp4",
        resources: [],
      },
      {
        title: "Branding and Advertising",
        videoUrl: "https://example.com/video3.mp4",
        resources: [],
      },
      {
        title: "Plan lunar de postări",
        videoUrl: "https://example.com/video4.mp4",
        resources: [],
      },
      {
        title: "Email Marketing",
        videoUrl: "https://example.com/video5.mp4",
        resources: [],
      },
      {
        title: "AI Content Writer",
        videoUrl: "https://example.com/video6.mp4",
        resources: [],
      },
      {
        title: "Extensia ChatGPT – AIPRM",
        videoUrl: "https://example.com/video7.mp4",
        resources: [],
      },
    ],
  },
  {
    title: "AI Imagini",
    lessons: [
      {
        title: "Incursiune in Imagini cu AI",
        videoUrl: "https://example.com/video1.mp4",
        resources: [],
      },
      {
        title: "Creare imagini cu Dall-E 3",
        videoUrl: "https://example.com/video2.mp4",
        resources: [],
      },
      {
        title: "Creare imagini cu Ideogram",
        videoUrl: "https://example.com/video3.mp4",
        resources: [],
      },
      {
        title: "Creare imagini cu FireFly",
        videoUrl: "https://example.com/video4.mp4",
        resources: [],
      },
      {
        title: "Setare cont Midjourney",
        videoUrl: "https://example.com/video5.mp4",
        resources: [],
      },
      {
        title: "Creare imagini cu Midjourney",
        videoUrl: "https://example.com/video6.mp4",
        resources: [],
      },
    ],
  },
  {
    title: "AI Audio",
    lessons: [
      {
        title: "Crearea de piese și compoziții musicale cu AI",
        videoUrl: "https://example.com/video1.mp4",
        resources: [],
      },
      {
        title: "Text-to-Voice cu AI",
        videoUrl: "https://example.com/video2.mp4",
        resources: [],
      },
      {
        title: "Traducerea audio si videouri cu AI",
        videoUrl: "https://example.com/video3.mp4",
        resources: [],
      },
      {
        title: "Clonarea vocii",
        videoUrl: "https://example.com/video4.mp4",
        resources: [],
      },
      {
        title: "Crearea unui audiobook",
        videoUrl: "https://example.com/video5.mp4",
        resources: [],
      },
    ],
  },
  {
    title: "AI Video",
    lessons: [
      {
        title: "Crearea de videouri din conținut existent",
        videoUrl: "https://example.com/video1.mp4",
        resources: [],
      },
      {
        title: "Crearea de videouri motion",
        videoUrl: "https://example.com/video2.mp4",
        resources: [],
      },
      {
        title: "Animarea videourilor existente",
        videoUrl: "https://example.com/video3.mp4",
        resources: [],
      },
      {
        title: "Crearea videouri de la zero",
        videoUrl: "https://example.com/video4.mp4",
        resources: [],
      },
    ],
  },
  {
    title: "Bani cu AI",
    lessons: [
      {
        title: "Identificarea oportunităților de freelancing cu AI",
        videoUrl: "https://example.com/video1.mp4",
        resources: [],
      },
      {
        title: "Crearea și monetizarea de produse vizuale folosind AI",
        videoUrl: "https://example.com/video2.mp4",
        resources: [],
      },
      {
        title: "Strategii de lansare a unui start-up bazat pe AI",
        videoUrl: "https://example.com/video3.mp4",
        resources: [],
      },
      {
        title: "Crearea unui website cu AI",
        videoUrl: "https://example.com/video4.mp4",
        resources: [],
      },
    ],
  },
];

const Curs = () => {
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  const handleSelectLesson = (lesson: Lesson) => {
    setSelectedLesson(lesson);
  };

  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const handleNextLesson = () => {
    if (!selectedLesson) return;

    for (let i = 0; i < modules.length; i++) {
      const module = modules[i];
      const lessonIndex = module.lessons.findIndex(
        (lesson) => lesson.title === selectedLesson.title
      );

      if (lessonIndex !== -1) {
        if (lessonIndex < module.lessons.length - 1) {
          setSelectedLesson(module.lessons[lessonIndex + 1]);
        } else if (i < modules.length - 1) {
          setSelectedLesson(modules[i + 1].lessons[0]);
        }
        break;
      }
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 760);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="px-2">
        <CursHeader toggleSidebar={toggleSidebar} />
        <div className="flex h-[calc(100vh-6rem)] overflow-hidden">
          {(isSidebarVisible || isDesktop) && (
            <Sidebar modules={modules} onSelectLesson={handleSelectLesson} />
          )}
          <div className="flex-1 overflow-y-auto">
            <MainContent selectedLesson={selectedLesson} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Curs;
