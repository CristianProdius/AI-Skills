import React, { useState } from "react";
import { Lesson } from "../pages/Curs";

type Module = {
  title: string;
  lessons: Lesson[];
};

interface SidebarProps {
  modules: Module[];
  onSelectLesson: (lesson: Lesson) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ modules, onSelectLesson }) => {
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(
    new Set()
  );

  const handleLessonClick = (lesson: Lesson) => {
    onSelectLesson(lesson);
    setCompletedLessons((prev) => new Set(prev).add(lesson.title));
  };

  const totalLessons = modules.reduce(
    (acc, module) => acc + module.lessons.length,
    0
  );
  const completedCount = completedLessons.size;
  const completionPercentage = (completedCount / totalLessons) * 100;

  return (
    <div className="sm:w-[30%] lg:w-[25%] bg-[#f9fafe] pl-4 pr-4 pb-4 overflow-y-auto h-screen">
      <div className="sticky top-0 bg-[#f9fafe] z-10">
        <div className="mb-6">
          <div className="h-2 bg-gray-300 rounded">
            <div
              className="h-full bg-[#222f5d] rounded"
              style={{ width: `${completionPercentage}%` }}
            ></div>
          </div>
          <p className="text-center mt-2">{`${completedCount} / ${totalLessons} lecții completate`}</p>
        </div>
      </div>
      {modules.map((module, moduleIndex) => (
        <div key={moduleIndex} className="mb-4">
          <h3 className="font-bold mb-2">{module.title}</h3>
          <ul>
            {module.lessons.map((lesson, lessonIndex) => (
              <li
                key={lessonIndex}
                onClick={() => handleLessonClick(lesson)}
                className="cursor-pointer p-2 hover:bg-gray-200 flex items-center"
              >
                <span
                  className={`w-4 h-4 mr-2 rounded-full border-2 ${
                    completedLessons.has(lesson.title)
                      ? "bg-[#222f5d] border-[#222f5d]"
                      : "border-gray-500"
                  }`}
                ></span>
                {lesson.title}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
