// src/components/admin/StatusBadge.tsx

import React from 'react';

interface StatusBadgeProps {
  status: 'active' | 'inactive' | 'suspended' | 'todo' | 'in-progress' | 'completed';
  size?: 'sm' | 'md';
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, size = 'md' }) => {
  const getStyles = () => {
    const baseStyles = size === 'sm' ? 'px-2 py-1 text-xs' : 'px-3 py-1.5 text-sm';
    
    const statusStyles = {
      active: 'bg-green-100 text-green-800',
      inactive: 'bg-gray-100 text-gray-800',
      suspended: 'bg-red-100 text-red-800',
      todo: 'bg-gray-100 text-gray-800',
      'in-progress': 'bg-blue-100 text-blue-800',
      completed: 'bg-green-100 text-green-800',
    };

    return `${baseStyles} ${statusStyles[status]} rounded-full font-medium`;
  };

  const labels = {
    active: 'Active',
    inactive: 'Inactive',
    suspended: 'Suspended',
    todo: 'To Do',
    'in-progress': 'In Progress',
    completed: 'Completed',
  };

  return (
    <span className={getStyles()}>
      {labels[status]}
    </span>
  );
};

export default StatusBadge;
