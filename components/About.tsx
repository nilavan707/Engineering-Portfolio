
import React, { useState, useEffect } from 'react';
import { BIO, SKILLS, REFERRALS } from '../constants';

const About: React.FC = () => {
  // Slideshow Logic
  const [currentReferralIndex, setCurrentReferralIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReferralIndex((prevIndex) => (prevIndex + 1) % REFERRALS.length);
    }, 30000); // Rotate every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const currentReferral = REFERRALS[currentReferralIndex];

  return (
    <div className="animate-fade-in max-w-3xl">
      {/* Bio Section */}
      <section className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-primary tracking-tight leading-tight">
          {BIO.tagline}
        </h2>
        <div className="prose prose-neutral max-w-none text-secondary">
          <p className="mb-4 text-base sm:text-lg leading-relaxed">{BIO.shortBio}</p>
          {BIO.longBio && <p className="text-sm sm:text-base leading-relaxed">{BIO.longBio}</p>}
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <h3 className="text-sm font-bold uppercase tracking-wider text-secondary mb-4 border-b border-gray-100 pb-2">Technical Skills</h3>
        <div className="flex flex-wrap gap-2">
          {SKILLS.map((skill) => (
            <span 
              key={skill} 
              className="px-3 py-1.5 bg-surface border border-gray-200 text-primary text-xs sm:text-sm font-medium rounded-md hover:border-gray-400 transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Referrals Section (Slideshow) */}
      <section className="mb-16">
        <h3 className="text-sm font-bold uppercase tracking-wider text-secondary mb-6 border-b border-gray-100 pb-2">Coworker Referrals</h3>
        
        <div className="relative bg-surface border border-gray-100 rounded-lg p-8 min-h-[200px] flex flex-col justify-between">
           {/* Key forces re-render animation on change */}
           <div key={currentReferralIndex} className="animate-fade-in">
              <div className="relative text-secondary text-sm leading-relaxed italic mb-6">
                 <span className="text-4xl text-gray-200 absolute -top-4 -left-3 font-serif">"</span>
                 <p className="relative z-10">{currentReferral.quote}</p>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-between">
                <p className="text-primary text-xs font-semibold">{currentReferral.author}</p>
              </div>
           </div>

           {/* Indicators */}
           <div className="flex justify-center gap-2 mt-4 absolute bottom-4 right-6">
              {REFERRALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentReferralIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentReferralIndex ? 'bg-primary scale-110' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Show referral ${idx + 1}`}
                />
              ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default About;
