fetch("http://localhost:3000/missions") // On récupere les donnéees de missions
  .then(response => response.json())
  .then(data => {
    const missions = document.getElementById("listeMissions");
    //Affichage des missions
    data.forEach(mission => {
        let li = document.createElement("li");
        li.textContent = `${mission.titre} - ${mission.budget}€ - ${mission.duree}`;
        missions.appendChild(li);
    });

    // Formulaire dynamique
    const selector = document.getElementById("selMissions");
    data.forEach(mission => {
        
        let option = document.createElement("option");
        option.value = mission.id;
        option.textContent = mission.titre;
        selector.appendChild(option);
    });

    let selectedMission = null;
    selector.addEventListener("change", function() {
         selectedMission = data.find(m => m.id == selector.value);
        
    });

    document.getElementById("formMission").addEventListener("submit", function(event) {
        event.preventDefault();

        
        if (!selectedMission) {
            alert("Veuillez sélectionner une mission.");
            return;
        }
        
        const nom = document.getElementById("nom").value;
        const prenom = document.getElementById("prenom").value;
        const email = document.getElementById("email").value;
        const motiv = document.getElementById("motiv").value;
        
        const application = {
            missionId: selectedMission.id,
            nom: nom,
            prenom: prenom,
            email: email,
            motiv: motiv
        }

        fetch("http://localhost:3000/candidatures", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(application)
        })
        .then(response => response.json())
        
    });

  });


