// src/pages/admin/Users.tsx

import React, { useMemo } from 'react';
import AdminSection from '../../layout/adminsection';
import DataTable from '../../components/admin/DataTable';
import StatusBadge from '../../components/admin/StatusBadge';
import { mockUsers } from '../../services/admin.mock';
import type { User } from '../../types/user';

const AdminUsers: React.FC = () => {
  const users = useMemo(() => mockUsers(), []);

  const columns = [
    {
      key: 'name' as const,
      label: 'Name',
      width: '20%',
      render: (value: string, row: User) => (
        <div>
          <p className="font-medium text-gray-900">{value}</p>
          <p className="text-xs text-gray-500">{row.email}</p>
        </div>
      ),
    },
    {
      key: 'role' as const,
      label: 'Role',
      width: '15%',
      render: (value: string) => (
        <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
          {value.charAt(0).toUpperCase() + value.slice(1)}
        </span>
      ),
    },
    {
      key: 'status' as const,
      label: 'Status',
      width: '12%',
      render: (value: string) => <StatusBadge status={value as any} />,
    },
    {
      key: 'joinDate' as const,
      label: 'Joined',
      width: '15%',
      render: (value: string) => (
        <span className="text-gray-700">{new Date(value).toLocaleDateString()}</span>
      ),
    },
    {
      key: 'lastActive' as const,
      label: 'Last Active',
      width: '18%',
      render: (value: string) => {
        const date = new Date(value);
        const today = new Date();
        const diffTime = today.getTime() - date.getTime();
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

        let displayText = '';
        if (diffDays === 0) {
          displayText = 'Today';
        } else if (diffDays === 1) {
          displayText = 'Yesterday';
        } else if (diffDays < 7) {
          displayText = `${diffDays} days ago`;
        } else {
          displayText = date.toLocaleDateString();
        }

        return <span className="text-gray-600 text-sm">{displayText}</span>;
      },
    },
    {
      key: 'id' as const,
      label: 'Actions',
      width: '20%',
      render: () => (
        <div className="flex gap-2">
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Edit</button>
          <button className="text-red-600 hover:text-red-700 text-sm font-medium">Remove</button>
        </div>
      ),
    },
  ];

  const activeCount = users.filter(u => u.status === 'active').length;
  const inactiveCount = users.filter(u => u.status === 'inactive').length;
  const suspendedCount = users.filter(u => u.status === 'suspended').length;

  return (
    <AdminSection>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Users</h1>
            <p className="text-gray-600 mt-2">Manage user accounts and permissions</p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            + Add User
          </button>
        </div>

        {/* User Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <p className="text-gray-600 text-sm">Active</p>
            <p className="text-2xl font-bold text-green-600 mt-1">{activeCount}</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <p className="text-gray-600 text-sm">Inactive</p>
            <p className="text-2xl font-bold text-gray-600 mt-1">{inactiveCount}</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <p className="text-gray-600 text-sm">Suspended</p>
            <p className="text-2xl font-bold text-red-600 mt-1">{suspendedCount}</p>
          </div>
        </div>

        {/* Users Table */}
        <DataTable<User>
          columns={columns}
          data={users}
          title="All Users"
          emptyMessage="No users found"
        />
      </div>
    </AdminSection>
  );
};

export default AdminUsers;
