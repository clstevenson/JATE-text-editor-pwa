const installBtnEl = document.getElementById('buttonInstall');

// global variable to show install prompt
// (or detect if app already installed)
let promptEvent = null;

// hide the install button unless it needs to be shown
installBtnEl.style.display = 'none';

// Logic for installing the PWA
// Event handler to the `beforeinstallprompt` event,
// which fires if this is an installable PWA
window.addEventListener('beforeinstallprompt', (event) => {
  // Store the triggered events as a global variable
  promptEvent = event;
  // Show the install button
  installBtnEl.style.display = 'inline';
});

// Event handler on the `butInstall` element
installBtnEl.addEventListener('click', async () => {
  if (!promptEvent) {
    alert('App already installed!');
    installBtnEl.style.display = 'none';
    return;
  }

  // Show prompt and possibly install PWA
  // If the user installs, the 'appinstalled' event will fire
  // and the install button will disappear
  promptEvent.prompt();
});

// Event handler for the `appinstalled` event, whic
// fires if the user actually installs the PWA
window.addEventListener('appinstalled', (event) => {
  // Clear prompt
  promptEvent = null;
  // make sure install button is hidden
  installBtnEl.style.display = 'none';
});
