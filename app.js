//Affichage des missions

fetch("http://localhost:3000/missions")
  .then(response => response.json())
  .then(data => {
    const missions = document.getElementById("listeMissions");
    data.forEach(mission => {
        let li = document.createElement("li");
        li.textContent = `${mission.titre} - ${mission.budget}€ - ${mission.duree}`;
        missions.appendChild(li);
    });
  });

// Formulaire dynamique

