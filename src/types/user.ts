// src/types/user.ts

export type UserRole = 'admin' | 'manager' | 'developer' | 'viewer';
export type UserStatus = 'active' | 'inactive' | 'suspended';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  joinDate: string;
  lastActive: string;
  avatar?: string;
}
