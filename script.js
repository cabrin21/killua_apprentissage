// Charge une leçon depuis un fichier HTML
function loadLesson(url) {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      document.getElementById('lessonContainer').innerHTML = data;
      setupLesson(); // Initialise le mini éditeur
    })
    .catch(err => {
      document.getElementById('lessonContainer').innerHTML = "<p>Erreur lors du chargement de la leçon.</p>";
      console.error(err);
    });
}

// Ajoute interactivité aux leçons
function setupLesson() {
  const runButtons = document.querySelectorAll('.runCode');
  runButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const codeArea = btn.previousElementSibling;
      const resultArea = btn.nextElementSibling;
      try {
        resultArea.innerHTML = eval(codeArea.value);
      } catch(e) {
        resultArea.textContent = "Erreur : " + e;
      }
    });
  });
}
