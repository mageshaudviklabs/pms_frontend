// src/types/admin.ts

export interface AdminStats {
  totalUsers: number;
  activeTasks: number;
  completedProjects: number;
  systemHealth: number;
}

export interface AdminOverviewData {
  stats: AdminStats;
  recentActivities: string[];
}
