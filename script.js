function showSection(sectionId) {
    let sections = document.querySelectorAll('.content-section');
    sections.forEach(sec => sec.classList.add('hidden')); // Hide all
    document.getElementById(sectionId).classList.remove('hidden'); // Show selected
}
