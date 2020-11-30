function clearActiveStatesInTableOfContents() {
    document.querySelectorAll('aside nav li').forEach((section) => {
        section.classList.remove('active');
    });
}