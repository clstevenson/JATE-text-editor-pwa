const installBtnEl = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  // Store the triggered events
  window.deferredPrompt = event;
  // Remove the hidden class from the button.
  installBtnEl.classList.toggle('hidden', false);
});

// Event handler on the `butInstall` element
installBtnEl.addEventListener('click', async () => {
  if (!promptEvent) return;
  // Show prompt
  promptEvent.prompt();
  // Reset the deferred prompt variable, it can only be used once.
  window.deferredPrompt = null;
  installBtnEl.classList.toggle('hidden', true);
});

// Event handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  // Clear prompt
  window.deferredPrompt = null;
});
