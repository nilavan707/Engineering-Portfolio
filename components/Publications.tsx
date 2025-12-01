
import React from 'react';
import { BookOpen } from 'lucide-react';
import { PUBLICATIONS } from '../constants';

const Publications: React.FC = () => {
  return (
    <div className="animate-fade-in max-w-3xl">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-primary mb-4">Publications</h2>
        <p className="text-secondary leading-relaxed">
          Selected technical papers and research reports.
        </p>
      </div>

      <div className="space-y-6">
        {PUBLICATIONS.map((pub) => (
          <div key={pub.id} className="bg-surface border border-gray-100 rounded-lg p-6 hover:shadow-sm transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-white rounded-md border border-gray-100 text-secondary mt-1">
                <BookOpen size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-1">{pub.title}</h3>
                <div className="flex items-center gap-2 text-xs font-mono text-accent mb-3 uppercase tracking-wide">
                  <span>{pub.venue}</span>
                  {pub.status && (
                     <>
                      <span className="text-gray-300">•</span>
                      <span className="text-secondary">{pub.status}</span>
                     </>
                  )}
                </div>
                <p className="text-secondary text-sm leading-relaxed">
                  {pub.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publications;
