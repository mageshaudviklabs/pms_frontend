import React, { useState } from 'react';

// --- Custom SVG Icons (Replacing Lucide) ---

const IconManager = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const IconAdmin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const IconEmployee = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const IconArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

// --- Types ---

type RoleOption = {
  id: string;
  title: string;
  description?: string;
  Icon: React.FC;
  colorClass: string; // Tailwind text color class
  hoverBgClass: string; // Tailwind background color class for hover
  href: string;
};

const ROLES: RoleOption[] = [
  {
    id: 'manager',
    title: 'Manager',
    Icon: IconManager,
    colorClass: 'text-cyan-400',
    hoverBgClass: 'hover:bg-cyan-900/10',
    href: '/dashboard/manager',
  },
  {
    id: 'admin',
    title: 'Admin',
    Icon: IconAdmin,
    colorClass: 'text-blue-400',
    hoverBgClass: 'hover:bg-blue-900/10',
    href: '/dashboard/admin',
  },
  {
    id: 'employee',
    title: 'Employee',
    Icon: IconEmployee,
    colorClass: 'text-indigo-400',
    hoverBgClass: 'hover:bg-indigo-900/10',
    href: '/dashboard/employee',
  },
];

export default function SimpleDashboardPage() {
  const [activeRole, setActiveRole] = useState<string | null>(null);

  const handleClick = (id: string, href: string) => {
    setActiveRole(id);
    // Simulate a slight delay for UX before redirecting
    setTimeout(() => {
      window.location.href = href;
    }, 600);
  };

  return (
    <div className="min-h-screen w-full bg-slate-950 flex flex-col items-center justify-center p-6 font-sans">
      {/* Background subtle glow */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl w-full z-10 flex flex-col items-center text-center space-y-12">
        
        {/* Header */}
        <div className="space-y-4 max-w-2xl animate-fade-in">
          <h1 className="text-5xl font-bold tracking-tight text-cyan-400">
            dashboards
          </h1>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {ROLES.map((role) => (
            <button
              key={role.id}
              onClick={() => handleClick(role.id, role.href)}
              disabled={activeRole === role.id}
              className={`
                group relative flex flex-col items-start text-left p-8 rounded-xl border border-slate-800 
                bg-slate-900/50 transition-all duration-300 ease-out
                hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-900/20 hover:-translate-y-1
                focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-slate-950
                ${activeRole === role.id ? 'ring-1 ring-cyan-500/50 bg-slate-800/80' : ''}
              `}
            >
              {/* Icon */}
              <div className={`
                mb-6 p-4 rounded-lg bg-slate-800 border border-slate-700 
                transition-colors duration-300 group-hover:bg-slate-800/80
                ${role.colorClass}
              `}>
                <role.Icon />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-slate-100 mb-2 group-hover:text-white">
                {role.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                {role.description}
              </p>

              {/* Footer / Arrow */}
              <div className="mt-auto flex items-center text-cyan-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-0 group-hover:translate-x-1">
                Access Dashboard <span className="ml-2"><IconArrowRight /></span>
              </div>

              {/* Active Overlay */}
              {activeRole === role.id && (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-950/80 rounded-xl backdrop-blur-sm transition-all duration-300">
                  <div className="flex flex-col items-center space-y-3">
                    <div className="w-8 h-8 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin" />
                    <span className="text-cyan-400 text-sm font-medium animate-pulse">Loading...</span>
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}