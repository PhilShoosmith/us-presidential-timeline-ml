// Safe cache and service-worker cleanup for mobile devices
try {
  if (typeof navigator !== 'undefined' && 'serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations()
      .then((registrations) => {
        for (const registration of registrations) {
          registration.unregister().catch(() => {});
        }
      })
      .catch((e) => console.warn('SW unregister catch:', e));
  }
} catch (e) {
  console.warn('SW check warning:', e);
}

try {
  if (typeof window !== 'undefined' && 'caches' in window) {
    window.caches.keys()
      .then((names) => {
        for (const name of names) {
          window.caches.delete(name).catch(() => {});
        }
      })
      .catch((e) => console.warn('Caches delete catch:', e));
  }
} catch (e) {
  console.warn('Cache clear error:', e);
}
