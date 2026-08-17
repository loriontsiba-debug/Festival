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

  const CATEGORY_COLORS = {
    'Musique':     { bg: 'rgba(224,64,176,0.15)',  text: '#e040b0' },
    'Mode & Sape': { bg: 'rgba(232,184,75,0.15)',  text: '#e8b84b' },
    'Art Lumière': { bg: 'rgba(106,212,255,0.12)', text: '#6ad4ff' },
    'Ouverture':   { bg: 'rgba(124,111,255,0.15)', text: '#7c6fff' },
    'Cérémonie':   { bg: 'rgba(124,111,255,0.15)', text: '#7c6fff' },
    'Clôture':     { bg: 'rgba(124,111,255,0.15)', text: '#7c6fff' },
    'Culture':     { bg: 'rgba(77,219,154,0.12)',  text: '#4ddb9a' },
  };

  const PROGRAMME = {
    vendredi: [
      { time: '16h00', title: 'Accueil du public & inauguration des installations lumineuses', location: 'Esplanade principale',  category: 'Art Lumière' },
      { time: '18h00', title: 'Cérémonie d\'ouverture officielle',                             location: 'Scène centrale',        category: 'Ouverture'   },
      { time: '19h30', title: 'Défilé inaugural — La Sape en mouvement',                       location: 'Boulevard de la Mode',  category: 'Mode & Sape' },
      { time: '21h00', title: 'Concert : Koffi Brazza',                                        location: 'Scène centrale',        category: 'Musique'     },
      { time: '23h00', title: 'Afterparty — DJ Set Rumba Night',                               location: 'Espace Nzinga',         category: 'Musique'     },
    ],
    samedi: [
      { time: '10h00', title: 'Atelier Sape : initiation à l\'art du vêtement',                location: 'Pavillon des créateurs', category: 'Mode & Sape' },
      { time: '12h30', title: 'Déjeuner & visite des installations',                           location: 'Esplanade principale',   category: 'Art Lumière' },
      { time: '14h00', title: 'Table ronde : La Sape, patrimoine vivant',                      location: 'Espace culturel',        category: 'Culture'     },
      { time: '17h00', title: 'Grand Défilé — Concours d\'élégance',                           location: 'Boulevard de la Mode',   category: 'Mode & Sape' },
      { time: '20h00', title: 'Concert : Imara Soul',                                          location: 'Scène centrale',         category: 'Musique'     },
      { time: '22h30', title: 'Spectacle de mapping vidéo — Neon Savane Studio',               location: 'Façade du Palais',       category: 'Art Lumière' },
    ],
    dimanche: [
      { time: '10h00', title: 'Marché des créateurs — Mode & Artisanat',                       location: 'Pavillon des créateurs', category: 'Mode & Sape' },
      { time: '13h00', title: 'Performance : Mireille Essomba — Sculpture de lumière live',    location: 'Place de l\'Art',        category: 'Art Lumière' },
      { time: '15h30', title: 'Concert : Les Frères Nzinga',                                   location: 'Scène centrale',         category: 'Musique'     },
      { time: '18h00', title: 'Remise des prix — Trophée de l\'Élégance',                      location: 'Scène centrale',         category: 'Cérémonie'   },
      { time: '19h30', title: 'Cérémonie de clôture & feu d\'artifice lumière',                location: 'Esplanade principale',   category: 'Clôture'     },
    ],
  };

  const pinSVG = `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 8.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" stroke="currentColor" stroke-width="1.2"/>
    <path d="M13 7c0 4.418-5 8-5 8S3 11.418 3 7a5 5 0 0 1 10 0Z" stroke="currentColor" stroke-width="1.2"/>
  </svg>`;

  function renderDay(day) {
    const container = document.getElementById('prog-events');
    container.innerHTML = PROGRAMME[day].map(ev => {
      const col = CATEGORY_COLORS[ev.category] || { bg: 'rgba(152,152,184,0.15)', text: '#9898b8' };
      return `
        <div class="prog-event">
          <div class="prog-time">${ev.time}</div>
          <div class="prog-divider"></div>
          <div class="prog-info">
            <p class="prog-event-title">${ev.title}</p>
            <div class="prog-meta">
              <span class="prog-location">${pinSVG} ${ev.location}</span>
              <span class="prog-badge" style="background:${col.bg}; color:${col.text}">${ev.category}</span>
            </div>
          </div>
        </div>`;
    }).join('');
  }

  document.querySelectorAll('.prog-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.prog-tab').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      renderDay(btn.dataset.day);
    });
  });

  renderDay('vendredi');

  //section faQ

   const FAQ = [
    {
      q: "Y a-t-il un âge minimum pour assister au festival ?",
      a: "Non, le Festival Sape & Lumière est ouvert à tous les âges. Les enfants de moins de 12 ans entrent gratuitement et doivent être accompagnés d'un adulte.",
    },
    {
      q: "Peut-on se restaurer sur place ?",
      a: "Oui ! Plusieurs stands de restauration proposent des spécialités congolaises et africaines tout au long des trois jours. Des options végétariennes sont disponibles.",
    },
    {
      q: "Y a-t-il un parking à proximité ?",
      a: "Oui, un parking gratuit de 500 places est disponible à 200 mètres du site principal. Des navettes gratuites relient le parking à l'entrée du festival toutes les 15 minutes.",
    },
    {
      q: "Que se passe-t-il en cas de pluie ?",
      a: "Le festival est conçu pour se dérouler par tout temps. Les zones de concert disposent de chapiteaux couverts, et les installations lumineuses sont protégées. Seul le Grand Défilé extérieur peut être reporté de 2h en cas de pluie.",
    },
    {
      q: "Comment réserver ses billets ?",
      a: "Il n'y a pas de billetterie en ligne cette année. La réservation se fait uniquement via WhatsApp, en cliquant sur les boutons de réservation dans la section Billetterie.",
    },
    {
      q: "Peut-on venir en costume de Sapeur ?",
      a: "Absolument, et nous vous y encourageons ! Les visiteurs en tenue Sape bénéficient d'un accès prioritaire aux défilés et peuvent participer au concours d'élégance du samedi.",
    },
  ];

  const list = document.getElementById('faq-list');

  list.innerHTML = FAQ.map((item, i) => `
    <div class="faq-item" id="faq-${i}">
      <button class="faq-question" aria-expanded="false" aria-controls="answer-${i}" onclick="toggle(${i})">
        <span>${item.q}</span>
        <svg class="faq-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 7.5l5 5 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div class="faq-answer" id="answer-${i}" role="region">
        <div class="faq-answer-inner">${item.a}</div>
      </div>
    </div>
  `).join('');

  function toggle(index) {
    const item   = document.getElementById(`faq-${index}`);
    const answer = document.getElementById(`answer-${index}`);
    const btn    = item.querySelector('.faq-question');
    const isOpen = item.classList.contains('open');

    // Ferme tous les autres
    document.querySelectorAll('.faq-item').forEach((el, i) => {
      if (i !== index) {
        el.classList.remove('open');
        el.querySelector('.faq-answer').style.maxHeight = null;
        el.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      }
    });

    // Bascule celui cliqué
    if (isOpen) {
      item.classList.remove('open');
      answer.style.maxHeight = null;
      btn.setAttribute('aria-expanded', 'false');
    } else {
      item.classList.add('open');
      answer.style.maxHeight = answer.scrollHeight + 'px';
      btn.setAttribute('aria-expanded', 'true');
    }
  }
  //section contacter nous 
  const form       = document.getElementById('contact-form');
  const successBox = document.getElementById('success-box');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nom       = document.getElementById('nom').value.trim();
    const telephone = document.getElementById('telephone').value.trim();
    const message   = document.getElementById('message').value.trim();

    if (!nom || !telephone || !message) return;

    form.style.display = 'none';
    successBox.classList.add('visible');
  });

  function resetForm() {
    form.reset();
    form.style.display = 'flex';
    successBox.classList.remove('visible');
  }
  //section partenaire
  const PARTNERS = [
    { name: 'Ville de Brazzaville' },
    { name: 'Ministère de la Culture' },
    { name: 'Congo Télécom' },
    { name: 'Air Congo' },
    { name: 'Fondation Kamba' },
    { name: 'Total Energies Congo' },
  ];

  const grid = document.getElementById('partenaires-grid');

  grid.innerHTML = PARTNERS.map(p => `
    <div class="partenaire-card" title="${p.name}">
      <span>${p.name}</span>
    </div>
  `).join('');
  //billeterie

  const PHONE_NUMBER = "242060000000"; 

  const TICKETS = [
    {
      name: "Pass 1 Jour",
      desc: "Accès illimité à toutes les activités d'une journée de votre choix.",
      price: "5 000",
      currency: "FCFA",
      popular: false,
      features: [
        "Accès aux concerts de la journée",
        "Accès aux défilés de Mode & Sape",
        "Visite des installations lumineuses",
        "Accès au village de restauration"
      ]
    },
    {
      name: "Pass 3 Jours",
      desc: "L'expérience complète du festival du vendredi au dimanche.",
      price: "12 000",
      currency: "FCFA",
      popular: true,
      features: [
        "Accès illimité aux 3 jours du festival",
        "Placement prioritaire aux concerts",
        "Accès exclusif aux défilés de Sape",
        "Visite guidée des installations lumineuses",
        "Cadeau de bienvenue du festival"
      ]
    }
  ];

  const checkIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
  const whatsappIcon = `<svg viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>`;

  function renderTickets() {
    const grid = document.getElementById('ticket-grid');
    grid.innerHTML = TICKETS.map(ticket => {
      const message = encodeURIComponent(`Bonjour, je souhaite réserver un Pass ${ticket.name} pour le Festival Sape & Lumière.`);
      const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${message}`;

      return `
        <div class="ticket-card ${ticket.popular ? 'popular' : ''}">
          ${ticket.popular ? '<span class="badge-popular">Recommandé</span>' : ''}
          <div>
            <h3 class="ticket-name">${ticket.name}</h3>
            <p class="ticket-desc">${ticket.desc}</p>
            <div class="ticket-price">${ticket.price} <span>${ticket.currency}</span></div>
            <ul class="ticket-features">
              ${ticket.features.map(f => `<li>${checkIcon} ${f}</li>`).join('')}
            </ul>
          </div>
          <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp">
            ${whatsappIcon} Réserver via WhatsApp
          </a>
        </div>
      `;
    }).join('');
  }

  renderTickets();
  