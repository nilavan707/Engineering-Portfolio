
import React, { useState } from 'react';
import { BIO, EXPERIENCE, THERMAL_RESUME_SKILLS, ML_RESUME_SKILLS } from '../constants';
import { ExperienceType } from '../types';

type ResumeType = 'thermal' | 'ml';

const Resume: React.FC = () => {
  const [activeResume, setActiveResume] = useState<ResumeType>('thermal');

  const skills = activeResume === 'thermal' ? THERMAL_RESUME_SKILLS : ML_RESUME_SKILLS;

  // Filter and Sort Experience based on resume type
  const resumeExperience = EXPERIENCE.filter(e => e.resumeTags && e.resumeTags.includes(activeResume));
  
  // Sort Logic:
  // For Thermal: UW Thermal (c1) -> UW Medicine (c2) -> Blue Origin (c3) -> ...
  // For ML: UW Medicine (c2) -> UW Thermal (c1) -> Blue Origin (bo-ml) -> USDA (c5)
  // Education is separate.
  
  const technicalExperience = resumeExperience.filter(e => 
    e.type !== ExperienceType.ACADEMIC
  ).sort((a, b) => {
      // Custom sort order based on IDs
      if (activeResume === 'thermal') {
          // Priority: c1, c2, c3, l1
          const order = ['c1', 'c2', 'c3', 'l1'];
          const idxA = order.indexOf(a.id);
          const idxB = order.indexOf(b.id);
          // If both are in the priority list, sort by index
          if (idxA !== -1 && idxB !== -1) return idxA - idxB;
          // If one is in list, it comes first
          if (idxA !== -1) return -1;
          if (idxB !== -1) return 1;
          // Otherwise keep original order (constants.ts order)
          return 0;
      } else {
          // Priority: c2, c1, bo-ml, c5
          const order = ['c2', 'c1', 'bo-ml', 'c5'];
          const idxA = order.indexOf(a.id);
          const idxB = order.indexOf(b.id);
          if (idxA !== -1 && idxB !== -1) return idxA - idxB;
          if (idxA !== -1) return -1;
          if (idxB !== -1) return 1;
          return 0;
      }
  });

  const education = resumeExperience.filter(e => e.type === ExperienceType.ACADEMIC);

  return (
    <div className="animate-fade-in flex flex-col h-full">
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-center gap-4 print:hidden">
        <div>
            <h2 className="text-2xl font-bold text-primary">Resume</h2>
        </div>

        {/* Minimalist Toggle Selector */}
        <div className="bg-surface p-1 rounded-lg border border-gray-100 flex shadow-sm">
          <button
            onClick={() => setActiveResume('thermal')}
            className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ${
              activeResume === 'thermal' 
                ? 'bg-white text-primary shadow-sm border border-gray-100' 
                : 'text-secondary hover:text-primary'
            }`}
          >
            Thermal Engineering
          </button>
          <button
            onClick={() => setActiveResume('ml')}
            className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ${
              activeResume === 'ml' 
                ? 'bg-white text-primary shadow-sm border border-gray-100' 
                : 'text-secondary hover:text-primary'
            }`}
          >
            ML / Software
          </button>
        </div>
      </div>

      {/* Paper Container */}
      <div className="bg-white border border-gray-200 shadow-sm p-8 sm:p-12 max-w-[850px] mx-auto w-full text-sm text-gray-800 leading-normal font-sans">
        
        {/* Header */}
        <div className="text-center border-b-2 border-gray-300 pb-4 mb-4">
            <h1 className="text-2xl font-bold text-black uppercase tracking-wide mb-1">{BIO.name}</h1>
            <p className="text-gray-600 font-medium">
                {BIO.email} - {BIO.phone}
            </p>
        </div>

        {/* Education */}
        <div className="mb-4">
            <h2 className="font-bold text-base uppercase border-b border-gray-300 mb-2 text-black">Education</h2>
            <div className="space-y-2">
                {education.map(edu => (
                    <div key={edu.id} className="flex justify-between items-start">
                        <div>
                            <span className="font-bold">{edu.organization}</span> - <span className="italic">{edu.role}</span>
                            {edu.description && <div className="text-gray-600 text-xs mt-0.5">{edu.description}</div>}
                        </div>
                        <div className="whitespace-nowrap font-medium text-right">{edu.period}</div>
                    </div>
                ))}
            </div>
        </div>

        {/* Skills */}
        <div className="mb-4">
            <h2 className="font-bold text-base uppercase border-b border-gray-300 mb-2 text-black">Skills</h2>
            <div className="grid grid-cols-1 gap-1">
                {activeResume === 'ml' ? (
                   <>
                     {skills.languages && skills.languages.length > 0 && (
                        <div className="flex">
                            <span className="font-bold w-24 flex-shrink-0">Languages:</span>
                            <span>{skills.languages.join(", ")}</span>
                        </div>
                     )}
                     {skills.software && skills.software.length > 0 && (
                        <div className="flex">
                            <span className="font-bold w-24 flex-shrink-0">Software:</span>
                            <span>{skills.software.join(", ")}</span>
                        </div>
                     )}
                   </>
                ) : (
                   <>
                     {skills.software && skills.software.length > 0 && (
                        <div className="flex">
                            <span className="font-bold w-24 flex-shrink-0">Software:</span>
                            <span>{skills.software.join(", ")}</span>
                        </div>
                     )}
                     {skills.languages && skills.languages.length > 0 && (
                        <div className="flex">
                            <span className="font-bold w-24 flex-shrink-0">Languages:</span>
                            <span>{skills.languages.join(", ")}</span>
                        </div>
                     )}
                   </>
                )}
                
                {skills.hardware && skills.hardware.length > 0 && (
                    <div className="flex">
                        <span className="font-bold w-24 flex-shrink-0">Hardware:</span>
                        <span>{skills.hardware.join(", ")}</span>
                    </div>
                )}
            </div>
        </div>

        {/* Technical Experience */}
        <div>
            <h2 className="font-bold text-base uppercase border-b border-gray-300 mb-3 text-black">Technical Experience</h2>
            <div className="space-y-4">
                {technicalExperience.map(exp => (
                    <div key={exp.id}>
                        <div className="flex justify-between items-baseline mb-0.5">
                            <div>
                                <span className="font-bold underline">{exp.organization}</span> - <span className="italic">{exp.role}</span>
                            </div>
                            <div className="font-bold whitespace-nowrap text-right">{exp.period}</div>
                        </div>
                        <ul className="list-disc list-outside ml-5 space-y-0.5 text-justify">
                            {exp.bullets?.map((bullet, i) => (
                                <li key={i}>{bullet}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
};

export default Resume;
