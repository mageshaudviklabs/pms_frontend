// src/pages/admin/Tasks.tsx

import React, { useMemo } from 'react';
import AdminSection from '../../layout/adminsection';
import DataTable from '../../components/admin/DataTable';
import StatusBadge from '../../components/admin/StatusBadge';
import { mockTasks } from '../../services/admin.mock';
import type { Task } from '../../types/task';

const AdminTasks: React.FC = () => {
  const tasks = useMemo(() => mockTasks(), []);

  const columns = [
    {
      key: 'title' as const,
      label: 'Task',
      width: '25%',
      render: (value: string, row: Task) => (
        <div>
          <p className="font-medium text-gray-900">{value}</p>
          <p className="text-xs text-gray-500 mt-1">{row.description}</p>
        </div>
      ),
    },
    {
      key: 'assignee' as const,
      label: 'Assigned To',
      width: '15%',
    },
    {
      key: 'priority' as const,
      label: 'Priority',
      width: '12%',
      render: (value: string) => {
        const colors: Record<string, string> = {
          low: 'text-blue-600',
          medium: 'text-yellow-600',
          high: 'text-orange-600',
          critical: 'text-red-600',
        };
        return <span className={`font-medium ${colors[value]}`}>{value.charAt(0).toUpperCase() + value.slice(1)}</span>;
      },
    },
    {
      key: 'status' as const,
      label: 'Status',
      width: '15%',
      render: (value: string) => <StatusBadge status={value as any} />,
    },
    {
      key: 'dueDate' as const,
      label: 'Due Date',
      width: '15%',
      render: (value: string) => (
        <span className="text-gray-700">{new Date(value).toLocaleDateString()}</span>
      ),
    },
    {
      key: 'createdAt' as const,
      label: 'Created',
      width: '18%',
      render: (value: string) => (
        <span className="text-gray-600 text-sm">{new Date(value).toLocaleDateString()}</span>
      ),
    },
  ];

  const todoCount = tasks.filter(t => t.status === 'todo').length;
  const inProgressCount = tasks.filter(t => t.status === 'in-progress').length;
  const completedCount = tasks.filter(t => t.status === 'completed').length;

  return (
    <AdminSection>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Tasks</h1>
            <p className="text-gray-600 mt-2">Manage and monitor all system tasks</p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            + New Task
          </button>
        </div>

        {/* Task Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <p className="text-gray-600 text-sm">To Do</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{todoCount}</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <p className="text-gray-600 text-sm">In Progress</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{inProgressCount}</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <p className="text-gray-600 text-sm">Completed</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{completedCount}</p>
          </div>
        </div>

        {/* Tasks Table */}
        <DataTable<Task>
          columns={columns}
          data={tasks}
          title="All Tasks"
          emptyMessage="No tasks found"
        />
      </div>
    </AdminSection>
  );
};

export default AdminTasks;
