import React from 'react';
import { useSectionTracking } from '../hooks/useSectionTracking';

interface TrackedSectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

const TrackedSection: React.FC<TrackedSectionProps> = ({ id, children, className = '' }) => {
  useSectionTracking(id);

  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
};

export default TrackedSection;
