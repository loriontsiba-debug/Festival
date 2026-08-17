//compte a rebours

setInterval( ()=>{
const today = new Date().getTime()
const event = new Date("2026-08-23 00:00:00").getTime()
const calcul = event-today

const jours = Math.floor(calcul / (1000*60*60*24))
const heures = Math.floor((calcul % (1000*60*60*24))/(1000*60*60))
const minutes = Math.floor((calcul %(1000*60*60))/(1000*60))
const secondes = Math.floor((calcul % (1000*60))/1000)

document.getElementById("jours").innerHTML= jours +"J :";
document.getElementById("heures").innerHTML= heures +"H :";
document.getElementById("minutes").innerHTML= minutes +"M :";
document.getElementById("secondes").innerHTML= secondes +"S ";
if(calcul ===0){
    document.getElementById("div1").innerHTML= "c'est parti!"
}
},1000)
//programme des jours

  /*const programme = {
    vendredi: [
      { heure: "18h00", activité: "Ouverture officielle", lieu: "Place de la République" },
      { heure: "19h30", activité: "Concert live – Les Sapeurs du Son", lieu: "Scène principale" },
    ],
    samedi: [
      { heure: "16h00", activité: "Défilé Mode & Sape", lieu: "Boulevard Lumière" },
      { heure: "20h00", activité: "Spectacle lumineux", lieu: "Fontaine centrale" },
    ],
    dimanche: [
      { heure: "15h00", activité: "Atelier Art Lumière", lieu: "Galerie du Marché" },
      { heure: "18h00", activité: "Clôture du festival", lieu: "Scène principale" },
    ],
  };

  const tabs = document.querySelectorAll(".tab");
  const content = document.getElementById("content");

  function afficherProgramme(jour) {
    content.innerHTML = programme[jour]
      .map(
        (event) =>
          `<div class="event">
            <span>${event.heure}</span>
            <span>${event.activité}</span>
            <span>${event.lieu}</span>
          </div>`
      )
      .join("");
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      afficherProgramme(tab.dataset.day);
    });
  });

  // Affiche le premier jour par défaut
  afficherProgramme("vendredi");*/

  