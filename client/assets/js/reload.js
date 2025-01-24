// Dash Reloader | Amennyiben használni akarjuk ezt a fájlt
const dashReloaders = document.querySelectorAll('.reloadDashboard');
dashReloaders.forEach(e => {
    e.addEventListener('click', () => {
        location.reload();
    });
});