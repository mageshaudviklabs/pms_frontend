// src/pages/admin/Dashboard.tsx

import React from 'react';
import AdminSection from '../../layout/adminsection';
import StatCard from '../../components/admin/StatCard';
import { mockAdminStats } from '../../services/admin.mock';

const AdminDashboard: React.FC = () => {
  const { stats, recentActivities } = mockAdminStats();

  return (
    <AdminSection>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back! Here's your system overview.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            label="Total Users"
            value={stats.totalUsers}
            icon="👥"
            trend={{ direction: 'up', percentage: 5 }}
          />
          <StatCard
            label="Active Tasks"
            value={stats.activeTasks}
            icon="✓"
            trend={{ direction: 'up', percentage: 12 }}
          />
          <StatCard
            label="Completed Projects"
            value={stats.completedProjects}
            icon="🎯"
            trend={{ direction: 'up', percentage: 8 }}
          />
          <StatCard
            label="System Health"
            value={`${stats.systemHealth}%`}
            icon="⚙️"
            trend={{ direction: 'up', percentage: 2 }}
          />
        </div>

        {/* Recent Activities */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activities</h2>
          <div className="space-y-3">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start gap-3 pb-3 border-b border-gray-200 last:border-b-0 last:pb-0">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                <p className="text-gray-700 text-sm">{activity}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200 p-6">
            <h3 className="font-semibold text-blue-900 mb-2">Tasks</h3>
            <p className="text-blue-700 text-sm mb-4">Manage and track all system tasks</p>
            <button className="text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors">
              View All →
            </button>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200 p-6">
            <h3 className="font-semibold text-green-900 mb-2">Users</h3>
            <p className="text-green-700 text-sm mb-4">Manage user accounts and permissions</p>
            <button className="text-green-600 font-medium text-sm hover:text-green-700 transition-colors">
              View All →
            </button>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200 p-6">
            <h3 className="font-semibold text-purple-900 mb-2">Reports</h3>
            <p className="text-purple-700 text-sm mb-4">Generate system and usage reports</p>
            <button className="text-purple-600 font-medium text-sm hover:text-purple-700 transition-colors">
              View All →
            </button>
          </div>
        </div>
      </div>
    </AdminSection>
  );
};

export default AdminDashboard;
