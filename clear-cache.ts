// Safe cache and service-worker cleanup for mobile devices
try {
  if (typeof window !== 'undefined' && typeof navigator !== 'undefined' && 'serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations()
      .then((registrations) => {
        if (Array.isArray(registrations)) {
          for (const registration of registrations) {
            try {
              registration.unregister().catch(() => {});
            } catch {}
          }
        }
      })
      .catch(() => {});
  }
} catch (e) {
  // Ignore restricted SW access
}

try {
  if (typeof window !== 'undefined' && 'caches' in window && typeof window.caches?.keys === 'function') {
    window.caches.keys()
      .then((names) => {
        if (Array.isArray(names)) {
          for (const name of names) {
            try {
              window.caches.delete(name).catch(() => {});
            } catch {}
          }
        }
      })
      .catch(() => {});
  }
} catch (e) {
  // Ignore restricted cache storage access
}
