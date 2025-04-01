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

    // Selecteur du formulaire 
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

    // Envoi des données du formulaire dans le fichier JSON
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
            .then(response => {
                response.json()
                if(response.ok) {
                    location.reload();
                }
            })
                
        
    });
  });


//affichage des candidatures
fetch("http://localhost:3000/candidatures")
    .then(response => response.json())
    .then(data => {

        const candidatures = document.getElementById("candidatures");
        data.forEach(cand => {
            let div = document.createElement("div");   
            div.classList.add("cand");
            div.innerHTML = `<ul><li>id : ${cand.id}</li><li>id mission : ${cand.missionId}</li><li>Nom : ${cand.nom}</li><li>Prénom : ${cand.prenom}</li><li>Email : ${cand.email}</li></ul>`;
            
            let delButton = document.createElement("button");
            delButton.classList.add(`del`);
            delButton.setAttribute("id", `${cand.id}`);
            delButton.innerText= "Supprimer";
            div.appendChild(delButton);
            
            candidatures.appendChild(div);
        });

        
        
    });



    document.addEventListener('DOMContentLoaded', function() {
        document.body.addEventListener("click", function(event) {
            if(event.target.classList.contains("del")){
                const clickedButtonId = event.target.id;
                fetch(`http://localhost:3000/candidatures/${clickedButtonId}`, {
                    method: "DELETE",
                })
                    .then(response => {
                        response.json()
                        if(response.ok) {
                            location.reload();
                        }
                    })
                    
            }
        });
    });