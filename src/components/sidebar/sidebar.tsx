import React, { useState } from 'react';
import type { CSSProperties } from 'react';

interface SidebarProps {
  children: React.ReactNode;
  position?: 'left' | 'right';
  defaultCollapsed?: boolean;
  width?: string;
  collapsedWidth?: string;
  className?: string;
  onToggle?: (isCollapsed: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  children,
  position = 'left',
  defaultCollapsed = false,
  width = '280px',
  collapsedWidth = '60px',
  className = '',
  onToggle,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);

  const handleToggle = () => {
    const newState = !isCollapsed;
    setIsCollapsed(newState);
    onToggle?.(newState);
  };

  const sidebarStyle: CSSProperties = {
    position: 'relative',
    height: '100vh',
    backgroundColor: 'rgb(242, 240, 247)',
    borderRight: position === 'left' ? '1px solid rgb(179, 170, 207)' : 'none',
    borderLeft: position === 'right' ? '1px solid rgb(179, 170, 207)' : 'none',
    transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    overflow: isCollapsed ? 'visible' : 'hidden',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: "'Lato', sans-serif",
    width: isCollapsed ? collapsedWidth : width,
  };

  const contentStyle: CSSProperties = {
    flex: 1,
    overflowY: 'auto',
    overflowX: 'hidden',
    padding: '20px',
    transition: 'opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    opacity: isCollapsed ? 0 : 1,
    pointerEvents: isCollapsed ? 'none' : 'auto',
  };

  const toggleButtonStyle: CSSProperties = {
    position: 'absolute',
    top: '20px',
    right: position === 'left' ? '-16px' : 'auto',
    left: position === 'right' ? '-16px' : 'auto',
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    backgroundColor: 'rgb(136, 121, 184)',
    border: '3px solid rgb(242, 240, 247)',
    color: 'white',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s ease',
    zIndex: 1000,
    boxShadow: '0 2px 12px rgba(136, 121, 184, 0.5)',
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside style={sidebarStyle} className={className}>
      <div style={contentStyle}>{children}</div>
      
      <button
        style={{
          ...toggleButtonStyle,
          ...(isHovered ? {
            backgroundColor: 'rgb(179, 170, 207)',
            transform: 'scale(1.15)',
            boxShadow: '0 4px 16px rgba(136, 121, 184, 0.6)',
          } : {}),
        }}
        onClick={handleToggle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
          {position === 'left' ? (
            isCollapsed ? (
              <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            ) : (
              <path d="M13 4L7 10L13 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            )
          ) : (
            isCollapsed ? (
              <path d="M13 4L7 10L13 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            ) : (
              <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            )
          )}
        </svg>
      </button>
    </aside>
  );
};

export const SidebarHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => {
  const headerStyle: CSSProperties = {
    padding: '20px',
    borderBottom: '1px solid rgb(179, 170, 207)',
    fontWeight: 700,
    fontSize: '1.25rem',
    color: 'rgb(136, 121, 184)',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };

  return (
    <div style={headerStyle} className={className}>
      {children}
    </div>
  );
};

export const SidebarNav: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => {
  const navStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  };

  return (
    <nav style={navStyle} className={className}>
      {children}
    </nav>
  );
};

export const SidebarItem: React.FC<{
  children: React.ReactNode;
  icon?: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}> = ({ children, icon, active = false, onClick, className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);

  const itemStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px 16px',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    fontWeight: active ? 700 : 400,
    color: active ? 'white' : isHovered ? 'rgb(136, 121, 184)' : '#333',
    backgroundColor: active ? 'rgb(136, 121, 184)' : isHovered ? 'rgba(136, 121, 184, 0.1)' : 'transparent',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  };

  const iconStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '24px',
    fontSize: '1.25rem',
    transition: 'transform 0.2s ease',
    transform: isHovered && !active ? 'scale(1.1)' : 'scale(1)',
  };

  const textStyle: CSSProperties = {
    flex: 1,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };

  return (
    <div
      style={itemStyle}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      className={className}
    >
      {icon && <span style={iconStyle}>{icon}</span>}
      <span style={textStyle}>{children}</span>
    </div>
  );
};