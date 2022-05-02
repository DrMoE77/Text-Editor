const installBtn = document.getElementById('buttonInstall');

// the prompt should be hiddden before the install button is clicked
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;

    // show the install button
    installBtn.classList.toggle('hidden', false);
});

// the prompt is shown when the install button is clicked
installBtn.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
        return;
    }

    promptEvent.prompt();

    window.deferredPrompt = null;

    // hide the install button
    installBtn.classList.toggle('hidden', true);
});

// when the app is successfully installed
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
