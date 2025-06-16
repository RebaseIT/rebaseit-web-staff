export const initUmami = () => {
  const siteId = import.meta.env.VITE_UMAMI_SITE_ID;
  if (!siteId) return;

  const script = document.createElement('script');
  script.defer = true;
  script.src = 'https://cloud.umami.is/script.js';
  script.setAttribute('data-website-id', siteId);
  document.head.appendChild(script);
};
