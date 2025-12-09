
import React, { useState } from 'react';
import { BookOpen, X } from 'lucide-react';
import { PUBLICATIONS } from '../constants';

const Publications: React.FC = () => {
  const [expandedPubId, setExpandedPubId] = useState<string | null>(null);

  const handlePublicationClick = (pub: typeof PUBLICATIONS[0]) => {
    if (pub.link) {
      // Toggle: if already expanded, collapse it; otherwise expand it
      setExpandedPubId(expandedPubId === pub.id ? null : pub.id);
    }
  };

  const getPdfPath = (link: string) => {
    const baseUrl = import.meta.env.BASE_URL;
    return link.startsWith('/') 
      ? `${baseUrl}${link.slice(1)}` 
      : `${baseUrl}${link}`;
  };

  return (
    <div className="animate-fade-in max-w-3xl">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-primary mb-4">Publications</h2>
        <p className="text-secondary leading-relaxed">
          Selected technical papers and research reports.
        </p>
      </div>

      <div className="space-y-6">
        {PUBLICATIONS.map((pub) => {
          const isExpanded = expandedPubId === pub.id;
          const pdfPath = pub.link ? getPdfPath(pub.link) : null;

          return (
            <div key={pub.id} className="space-y-0">
              {/* Publication Card */}
              <div
                onClick={() => handlePublicationClick(pub)}
                className={`bg-surface border border-gray-100 rounded-lg p-6 transition-all ${
                  pub.link
                    ? 'hover:shadow-sm cursor-pointer hover:border-primary/20'
                    : 'hover:shadow-sm'
                } ${isExpanded ? 'rounded-b-none border-b-0' : ''}`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white rounded-md border border-gray-100 text-secondary mt-1">
                    <BookOpen size={20} />
                  </div>
                  <div className="flex-1">
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

              {/* Inline PDF Viewer */}
              {isExpanded && pdfPath && (
                <div className="bg-white border border-gray-100 border-t-0 rounded-b-lg overflow-hidden shadow-sm">
                  <div className="flex items-center justify-between p-3 border-b border-gray-200 bg-gray-50">
                    <h4 className="text-sm font-semibold text-primary">PDF Viewer</h4>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedPubId(null);
                      }}
                      className="p-1 hover:bg-gray-200 rounded-md transition-colors"
                      aria-label="Close PDF viewer"
                    >
                      <X size={18} className="text-secondary" />
                    </button>
                  </div>
                  <div className="w-full" style={{ height: '800px' }}>
                    <iframe
                      src={pdfPath}
                      className="w-full h-full border-0"
                      title="PDF Viewer"
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Publications;
