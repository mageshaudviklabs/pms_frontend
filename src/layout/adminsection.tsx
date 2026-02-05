// src/layout/adminsection.tsx

import React from 'react';
import TopBar from '../components/topbar';

interface AdminSectionProps {
  children: React.ReactNode;
}

const AdminSection: React.FC<AdminSectionProps> = ({ children }) => {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      <div className="flex-1 flex flex-col">
        <TopBar />
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminSection;
