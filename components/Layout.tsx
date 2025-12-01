import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { BIO, SOCIALS } from '../constants';

const Layout: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const getIcon = (name: string) => {
    switch (name) {
      case 'Github': return <Github size={20} />;
      case 'Linkedin': return <Linkedin size={20} />;
      case 'Mail': return <Mail size={20} />;
      default: return <Twitter size={20} />;
    }
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) => 
    `hover:text-primary transition-colors ${isActive ? 'text-primary border-b border-primary pb-0.5' : 'text-secondary'}`;

  return (
    <div className="min-h-screen flex flex-col max-w-4xl mx-auto px-6 sm:px-8 py-10">
      {/* Header / Nav */}
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-primary">{BIO.name}</h1>
          <p className="text-sm text-secondary">{BIO.title}</p>
          <p className="text-sm text-secondary mt-0.5">{BIO.affiliation}</p>
          <p className="text-sm text-secondary mt-0.5">{BIO.exAffiliation}</p>
        </div>
        
        <nav className="flex gap-6 text-sm font-medium">
          <NavLink to="/" className={navLinkClass} end>
            Projects
          </NavLink>
          <NavLink to="/publications" className={navLinkClass}>
            Publications
          </NavLink>
          <NavLink to="/resume" className={navLinkClass}>
            Resume
          </NavLink>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow fade-in">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-secondary">
        <div className="flex gap-4">
          {SOCIALS.map((social) => (
            <a 
              key={social.platform} 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary transition-colors p-2 -ml-2 sm:ml-0"
              aria-label={social.platform}
            >
              {getIcon(social.iconName)}
            </a>
          ))}
        </div>
        <p>&copy; {currentYear} {BIO.name}. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;