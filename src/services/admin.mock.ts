// src/services/admin.mock.ts

import type { AdminOverviewData } from '../types/admin';
import type { Task } from '../types/task';
import type { User } from '../types/user';

export const mockAdminStats = (): AdminOverviewData => ({
  stats: {
    totalUsers: 245,
    activeTasks: 67,
    completedProjects: 12,
    systemHealth: 98,
  },
  recentActivities: [
    'User John Doe completed task "Setup API Gateway"',
    'New project "Mobile Redesign" created',
    'System backup completed successfully',
    'Team meeting scheduled for tomorrow',
  ],
});

export const mockTasks = (): Task[] => [
  {
    id: '1',
    title: 'Setup API Gateway',
    description: 'Configure and deploy API gateway for microservices',
    status: 'completed',
    priority: 'high',
    assignee: 'John Doe',
    dueDate: '2026-02-01',
    createdAt: '2026-01-20',
  },
  {
    id: '2',
    title: 'Database Optimization',
    description: 'Optimize database queries and indexing',
    status: 'in-progress',
    priority: 'critical',
    assignee: 'Jane Smith',
    dueDate: '2026-02-10',
    createdAt: '2026-01-25',
  },
  {
    id: '3',
    title: 'Frontend Code Review',
    description: 'Review and approve pending pull requests',
    status: 'todo',
    priority: 'medium',
    assignee: 'Mike Johnson',
    dueDate: '2026-02-08',
    createdAt: '2026-02-05',
  },
  {
    id: '4',
    title: 'Security Audit',
    description: 'Conduct full system security audit',
    status: 'todo',
    priority: 'critical',
    assignee: 'Sarah Williams',
    dueDate: '2026-02-15',
    createdAt: '2026-02-01',
  },
  {
    id: '5',
    title: 'Documentation Update',
    description: 'Update API documentation with new endpoints',
    status: 'in-progress',
    priority: 'low',
    assignee: 'Tom Brown',
    dueDate: '2026-02-12',
    createdAt: '2026-01-28',
  },
  {
    id: '6',
    title: 'Deploy Production Build',
    description: 'Deploy v2.0.0 to production environment',
    status: 'todo',
    priority: 'critical',
    assignee: 'John Doe',
    dueDate: '2026-02-07',
    createdAt: '2026-02-03',
  },
];

export const mockUsers = (): User[] => [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'manager',
    status: 'active',
    joinDate: '2025-01-15',
    lastActive: '2026-02-05',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'developer',
    status: 'active',
    joinDate: '2025-02-20',
    lastActive: '2026-02-05',
  },
  {
    id: '3',
    name: 'Mike Johnson',
    email: 'mike.johnson@example.com',
    role: 'developer',
    status: 'active',
    joinDate: '2025-03-10',
    lastActive: '2026-02-04',
  },
  {
    id: '4',
    name: 'Sarah Williams',
    email: 'sarah.williams@example.com',
    role: 'admin',
    status: 'active',
    joinDate: '2024-12-01',
    lastActive: '2026-02-05',
  },
  {
    id: '5',
    name: 'Tom Brown',
    email: 'tom.brown@example.com',
    role: 'developer',
    status: 'inactive',
    joinDate: '2025-01-05',
    lastActive: '2026-01-28',
  },
  {
    id: '6',
    name: 'Emily Davis',
    email: 'emily.davis@example.com',
    role: 'viewer',
    status: 'active',
    joinDate: '2025-06-15',
    lastActive: '2026-02-03',
  },
];
