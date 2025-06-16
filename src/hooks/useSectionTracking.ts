import { useEffect } from 'react';

declare global {
  interface Window {
    umami?: {
      track: (url: string, referrer?: string) => void;
    };
  }
}

export const useSectionTracking = (sectionId: string) => {
  useEffect(() => {
    // Only track if Umami site ID is configured
    if (!import.meta.env.VITE_UMAMI_SITE_ID) return;

    const section = document.getElementById(sectionId);
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.umami?.track(`/sections/${sectionId}`);
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    observer.observe(section);

    return () => {
      observer.unobserve(section);
    };
  }, [sectionId]);
};
