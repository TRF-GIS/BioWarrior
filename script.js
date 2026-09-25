// ============================================================
// ORGANISM DATA
// Every part below matches the original worksheet-derived data
// set for each organism. The 4th value in each part entry is an
// icon "category" used to pick a matching illustration for that
// part's card (see PART ICONS below).
// ============================================================

const ORGANISMS = {
  squid: {
    name: "Squid",
    scientific: "Mollusca • Cephalopoda",
    habitat: "Marine",
    description: "Streamlined cephalopod with specialized structures for active swimming, feeding, and escape.",
    views: {
      external: {
        label: "External anatomy",
        parts: [
          ["chromatophores", "Chromatophores", "Freckle-like spots whose size changes the squid's color for camouflage.", "spot"],
          ["fins", "Fins", "Structures that help the squid change direction when swimming.", "fin"],
          ["mantle", "Mantle", "The main body region; the organs are enclosed inside the mantle.", "body"],
          ["pen", "Pen / gladius", "A reduced, chitinous remnant of the shell of squid ancestors.", "plate"],
          ["eyes", "Eyes", "Large side-positioned eyes that provide visual information and broad peripheral vision.", "eye"],
          ["tentacles", "2 feeding tentacles", "Long, retractable appendages with suckers at the tips; used to catch prey and pass food to the arms.", "tentacle"],
          ["arms", "8 arms", "Shorter appendages with suckers along their length; they hold prey.", "tentacle"],
          ["mouth", "Mouth / buccal bulb", "The mouth is associated with the buccal bulb, which connects to the esophagus.", "mouth"],
          ["beak", "Beak / jaw", "Hard, dark mouthpart used to bite prey into small pieces.", "mouth"],
          ["collar", "Collar", "The opening of the mantle, described as similar to a shirt collar.", "segment"],
          ["siphon", "Siphon / funnel", "Water is forced through the siphon for jet propulsion and rapid movement.", "tube"]
        ]
      },

      internal: {
        label: "Internal anatomy",
        parts: [
          ["gills", "Gills", "Feathery structures that absorb oxygen from water and provide a large surface area for gas exchange.", "fin"],
          ["inkSac", "Ink sac", "A gland/sac that stores ink released during danger and pushed through the siphon.", "gland"],
          ["hearts", "3 hearts", "Two branchial hearts and one systemic heart; the hearts are located at the bottoms of the gills.", "heart"],
          ["buccalBulb", "Buccal bulb", "The muscular mouth region connected to the esophagus.", "mouth"],
          ["esophagus", "Esophagus", "Tube carrying food toward the stomach.", "tube"],
          ["stomach", "Stomach", "A digestive organ connected with the esophagus; the worksheet describes the general stomach area.", "organ"],
          ["gonads", "Gonads", "Reproductive organs; described as a sperm sac in males or an egg mass in females.", "gland"],
          ["penInternal", "Pen / gladius", "The reduced chitinous shell element embedded in the upper mantle.", "plate"],
          ["eyeInternal", "Eye", "The worksheet describes examination of the eye, including its cornea and lens.", "eye"],
          ["cornea", "Cornea", "Film-like outer part of the eye examined during dissection.", "eye"],
          ["lens", "Lens", "Hard, silvery, pearl-like structure inside the eye.", "gem"],
          ["beakInternal", "Beak", "Hard mouthpart examined during internal anatomy.", "mouth"],
          ["radula", "Radula", "A structure the worksheet instructs students to examine with the beak.", "spot"]
        ]
      }
    }
  },

  earthworm: {
    name: "Earthworm",
    scientific: "Annelida • Clitellata",
    habitat: "Moist soil",
    description: "Segmented worm whose body wall, setae, and digestive tract are adapted to life and movement in soil.",
    views: {
      external: {
        label: "External anatomy",
        parts: [
          ["prostomium", "Prostomium", "Small fleshy lobe over the mouth; helps the worm explore and manipulate soil and food.", "body"],
          ["mouth", "Mouth", "Opening through which soil and organic material enter the digestive tract.", "mouth"],
          ["segments", "Segments / metameres", "Repeated ring-like divisions that provide flexibility and coordinated movement.", "segment"],
          ["setae", "Setae", "Tiny bristles that anchor the worm against soil during locomotion.", "spot"],
          ["clitellum", "Clitellum", "Thickened glandular band toward the anterior; produces mucus and contributes to cocoon formation.", "segment"],
          ["anus", "Anus", "Terminal opening where the digestive tract ends and undigested material exits.", "mouth"],
          ["bodyWall", "Body wall", "Muscular outer surface containing circular and longitudinal muscles used in movement.", "body"],
          ["dorsalVesselExt", "Dorsal blood vessel", "Part of the closed circulatory system; may be visible along the dorsal midline.", "tube"]
        ]
      },

      internal: {
        label: "Internal anatomy",
        parts: [
          ["pharynx", "Pharynx", "Muscular region behind the mouth that helps draw food into the digestive tract.", "mouth"],
          ["esophagus", "Esophagus", "Narrow tube carrying food posteriorly toward the crop.", "tube"],
          ["crop", "Crop", "Enlarged, thin-walled region that temporarily stores food.", "organ"],
          ["gizzard", "Gizzard", "Thick-walled muscular region that mechanically grinds soil particles and organic material.", "organ"],
          ["dorsalVessel", "Dorsal blood vessel", "Longitudinal vessel above the digestive tract, part of the closed circulatory system.", "tube"],
          ["intestine", "Intestine", "Major region where digestion and nutrient absorption occur.", "tube"],
          ["typhlosole", "Typhlosole", "Inward fold of the intestinal wall that increases internal surface area for absorption.", "organ"],
          ["ventralNerve", "Ventral nerve cord", "Longitudinal nervous structure that coordinates sensory information and motor activity.", "tube"],
          ["nephridia", "Nephridia", "Excretory structures that remove metabolic wastes and help regulate the internal environment.", "gland"]
        ]
      }
    }
  },

  shrimp: {
    name: "Shrimp",
    scientific: "Arthropoda • Crustacea",
    habitat: "Aquatic",
    description: "Crustacean with a chitinous exoskeleton and specialized jointed appendages for sensing, feeding, walking, swimming, and escape.",
    views: {
      external: {
        label: "External anatomy",
        parts: [
          ["rostrum", "Rostrum", "Pointed extension of the carapace between the eyes; protects the anterior region and may aid sensory orientation.", "plate"],
          ["compoundEyes", "Compound eyes", "Paired visual structures, usually on movable stalks, detecting light, movement, and visual information.", "eye"],
          ["antennules", "Antennules", "Short sensory appendages involved in detecting chemical and mechanical stimuli.", "antenna"],
          ["antennae", "Antennae", "Long sensory appendages for touch and chemical sensing; help detect the surroundings.", "antenna"],
          ["scaphocerite", "Scaphocerite", "Flattened antennal scale with sensory and hydrodynamic functions.", "plate"],
          ["carapace", "Carapace", "Hard shield-like covering over the cephalothorax; protects structures and provides muscle attachment.", "plate"],
          ["cephalothorax", "Cephalothorax", "Region formed by fused head and thoracic segments; bears most sensory and locomotory appendages.", "body"],
          ["mouth", "Mouth", "Opening on the ventral anterior cephalothorax, surrounded by specialized feeding appendages.", "mouth"],
          ["mouthparts", "Mouthparts", "Mandibles, maxillules, maxillae, and maxillipeds that manipulate, tear, and direct food.", "mouth"],
          ["walkingLegs", "Walking legs / pereopods", "Larger jointed appendages used for locomotion and sometimes handling food.", "limb"],
          ["claws", "Claws / chelae", "Claw-like structures that may occur on the first pair of walking legs for grasping.", "claw"],
          ["abdomen", "Abdomen", "Flexible series of segments containing powerful muscles for swimming and rapid escape.", "body"],
          ["swimmerets", "Swimmerets / pleopods", "Small feathery or paddle-like appendages beneath the abdomen that aid swimming and generate water currents; may support eggs in females.", "fin"],
          ["uropods", "Uropods", "Paired lateral portions of the tail fan that provide thrust and help change direction.", "fin"],
          ["telson", "Telson", "Central portion of the tail fan between the uropods.", "fin"],
          ["tailFan", "Tail fan", "Uropods and telson together; especially important during rapid backward swimming.", "fin"],
          ["abdominalSegments", "Abdominal segments", "Distinct overlapping segments that give the abdomen flexibility.", "segment"]
        ]
      }
    }
  },

  ant: {
    name: "Ant",
    scientific: "Arthropoda • Insecta • Formicidae",
    habitat: "Terrestrial",
    description: "Social insect with a segmented body, chitinous exoskeleton, jointed appendages, and highly specialized sensory and feeding structures.",
    views: {
      external: {
        label: "External anatomy",
        parts: [
          ["head", "Head", "Anterior body region containing the major sensory and feeding structures.", "body"],
          ["compoundEyes", "Compound eyes", "Paired eyes made of many visual units that detect light, movement, and visual information.", "eye"],
          ["antennae", "Antennae", "Important sensory organs for touch, chemicals, vibrations, and environmental cues; composed of the scape and funiculus.", "antenna"],
          ["mandibles", "Mandibles", "Paired hardened jaws used for feeding, carrying, nest construction, manipulation, and defense.", "claw"],
          ["thorax", "Thorax", "Middle body region bearing the three pairs of legs and providing muscle attachment.", "body"],
          ["forelegs", "Forelegs", "Front pair of jointed legs used in walking, climbing, and navigating surfaces.", "limb"],
          ["middleLegs", "Middle legs", "Middle pair of jointed legs used in coordinated movement.", "limb"],
          ["hindLegs", "Hind legs", "Rear pair of jointed legs used in walking, climbing, and navigation.", "limb"],
          ["legSegments", "Leg segments", "Jointed sections identified in the worksheet as coxa, trochanter, femur, tibia, and tarsus.", "segment"],
          ["tarsalClaw", "Tarsal claw", "Small claw at the end of a leg that helps the ant grip surfaces.", "claw"],
          ["petiole", "Petiole", "Narrow connection between thorax and abdomen that provides flexibility.", "segment"],
          ["gaster", "Abdomen / gaster", "Posterior region behind the petiole containing many internal organs and visible segmentation.", "body"],
          ["tergites", "Tergites", "Hardened plates forming the upper surface of the abdomen.", "plate"],
          ["sternites", "Sternites", "Plates along the underside of the abdomen.", "plate"],
          ["spiracles", "Spiracles", "Tiny openings on the sides of the thorax and abdomen that allow air to enter and leave the respiratory system.", "spot"],
          ["sting", "Stinger", "Defensive structure present in some ants; used primarily for defense.", "claw"],
          ["clypeus", "Clypeus", "Head structure labeled in the worksheet's ant anatomy diagram.", "plate"],
          ["frontalLobes", "Frontal lobes", "Head regions labeled in the worksheet's ant anatomy diagram.", "body"],
          ["antennalFossa", "Antennal fossa", "Depression associated with antenna placement, labeled in the worksheet diagram.", "spot"],
          ["pronotum", "Pronotum", "Thoracic structure labeled in the worksheet's ant anatomy diagram.", "plate"],
          ["mesonotum", "Mesonotum", "Thoracic segment/plate labeled in the worksheet's ant anatomy diagram.", "plate"],
          ["metanotum", "Metanotum", "Thoracic structure labeled in the worksheet's ant anatomy diagram.", "plate"],
          ["propodeum", "Propodeum", "Posterior thoracic region labeled in the worksheet's ant anatomy diagram.", "plate"],
          ["scutellum", "Scutellum", "Thoracic structure labeled in the worksheet's ant anatomy diagram.", "plate"],
          ["metapleural", "Metapleural gland", "Structure labeled in the worksheet's ant anatomy diagram.", "gland"],
          ["spiracleThoracic", "Mesothoracic / metathoracic spiracles", "Thoracic spiracles labeled in the worksheet diagram.", "spot"]
        ]
      }
    }
  }
};


// ============================================================
// SVG HELPER (used by the small organism-select illustrations)
// ============================================================

function svgWrap(inner, viewBox = "0 0 1000 600") {
  return `
    <svg
      viewBox="${viewBox}"
      role="img"
      aria-label="Interactive anatomical diagram"
    >
      ${inner}
    </svg>
  `;
}


// ============================================================
// SMALL CARD ILLUSTRATIONS (organism-select screen only)
// ============================================================

function miniSquid() {
  return svgWrap(`
    <ellipse
      cx="500"
      cy="290"
      rx="178"
      ry="92"
      fill="#c6a7a2"
      class="part-outline"
    />

    <ellipse
      cx="500"
      cy="245"
      rx="58"
      ry="58"
      fill="#9e7d7a"
    />

    <path
      d="M350 282 C275 250 240 210 210 185 C250 235 270 280 305 318"
      fill="none"
      stroke="#6b5f5e"
      stroke-width="20"
      stroke-linecap="round"
    />

    <path
      d="M650 282 C725 250 760 210 790 185 C750 235 730 280 695 318"
      fill="none"
      stroke="#6b5f5e"
      stroke-width="20"
      stroke-linecap="round"
    />

    <circle cx="465" cy="228" r="18" fill="#1b2420"/>
    <circle cx="535" cy="228" r="18" fill="#1b2420"/>

    <path
      d="M350 355 Q500 425 650 355"
      fill="none"
      stroke="#879d8f"
      stroke-width="22"
    />

    <text
      x="500"
      y="520"
      class="diagram-note"
      text-anchor="middle"
    >
      streamlined cephalopod
    </text>
  `, "0 0 1000 560");
}


function miniWorm() {
  let segs = "";

  for (let i = 0; i < 12; i++) {
    const x = 145 + i * 58;

    segs += `
      <ellipse
        cx="${x}"
        cy="285"
        rx="38"
        ry="63"
        fill="${i > 6 && i < 9 ? "#a4b177" : "#b87656"}"
        stroke="#4c463d"
        stroke-width="2"
      />
    `;
  }

  return svgWrap(`
    ${segs}

    <path
      d="M130 245 Q90 285 130 325"
      fill="#8c5b42"
      stroke="#4c463d"
      stroke-width="2"
    />

    <path
      d="M810 262 Q850 285 810 308"
      fill="#8c5b42"
      stroke="#4c463d"
      stroke-width="2"
    />

    <text
      x="500"
      y="505"
      class="diagram-note"
      text-anchor="middle"
    >
      segmented body • setae-assisted movement
    </text>
  `, "0 0 1000 560");
}


function miniShrimp() {
  return svgWrap(`
    <path
      d="M245 300 Q330 190 515 215 Q640 230 700 305
         L635 360 Q505 395 350 350 Z"
      fill="#c78b6e"
      class="part-outline"
    />

    <path
      d="M635 360 Q760 415 845 372
         Q790 335 855 292 Q770 265 700 305"
      fill="#aa7057"
      class="part-outline"
    />

    <path
      d="M290 250 L180 180
         M315 240 L160 145"
      stroke="#5e5147"
      stroke-width="7"
      stroke-linecap="round"
    />

    <circle
      cx="300"
      cy="230"
      r="13"
      fill="#1e231f"
    />

    <path
      d="M735 315 L880 265
         M742 335 L885 342"
      stroke="#5e5147"
      stroke-width="8"
      stroke-linecap="round"
    />

    <path
      d="M340 350 L310 430
         M385 355 L375 440
         M430 365 L445 445
         M480 370 L505 438"
      stroke="#6c5b4f"
      stroke-width="12"
      stroke-linecap="round"
    />

    <text
      x="520"
      y="520"
      class="diagram-note"
      text-anchor="middle"
    >
      cephalothorax • abdomen • tail fan
    </text>
  `, "0 0 1000 560");
}


function miniAnt() {
  return svgWrap(`
    <ellipse
      cx="510"
      cy="278"
      rx="70"
      ry="120"
      fill="#3b3a34"
    />

    <ellipse
      cx="390"
      cy="300"
      rx="85"
      ry="66"
      fill="#46443d"
    />

    <ellipse
      cx="645"
      cy="300"
      rx="105"
      ry="86"
      fill="#2d2d28"
    />

    <circle
      cx="372"
      cy="282"
      r="8"
      fill="#f3e8bd"
    />

    <circle
      cx="408"
      cy="282"
      r="8"
      fill="#f3e8bd"
    />

    <g
      stroke="#3b3a34"
      stroke-width="13"
      stroke-linecap="round"
    >
      <path d="M360 340 L280 418"/>
      <path d="M396 350 L355 440"/>
      <path d="M525 370 L485 455"/>
      <path d="M650 366 L710 455"/>
      <path d="M665 340 L760 420"/>
      <path d="M735 300 L815 360"/>
    </g>

    <path
      d="M360 260 Q300 195 258 178"
      fill="none"
      stroke="#514d42"
      stroke-width="9"
      stroke-linecap="round"
    />

    <path
      d="M420 255 Q350 182 320 165"
      fill="none"
      stroke="#514d42"
      stroke-width="9"
      stroke-linecap="round"
    />

    <text
      x="510"
      y="520"
      class="diagram-note"
      text-anchor="middle"
    >
      head • thorax • petiole • gaster
    </text>
  `, "0 0 1000 560");
}


// ============================================================
// PART ICONS
// A small library of simple line-icon "pictures" used on each
// part card. Every part is tagged with a category (see the
// ORGANISMS data above); this keeps every card visually relevant
// to what the part actually is, without needing a one-off photo
// for all 80+ parts.
// ============================================================

function partIcon(category) {
  const icons = {
    eye: `
      <path d="M4 24 Q24 8 44 24 Q24 40 4 24 Z" fill="none" stroke="currentColor"/>
      <circle cx="24" cy="24" r="6" fill="currentColor"/>
    `,
    antenna: `
      <path d="M18 42 Q8 24 14 8" fill="none" stroke="currentColor"/>
      <circle cx="14" cy="8" r="3" fill="currentColor"/>
      <path d="M30 42 Q40 24 34 8" fill="none" stroke="currentColor"/>
      <circle cx="34" cy="8" r="3" fill="currentColor"/>
    `,
    limb: `
      <path d="M10 42 L22 28 L18 12" fill="none" stroke="currentColor"/>
      <circle cx="10" cy="42" r="2.6" fill="currentColor"/>
      <circle cx="22" cy="28" r="2.6" fill="currentColor"/>
      <circle cx="18" cy="12" r="2.6" fill="currentColor"/>
    `,
    claw: `
      <path d="M20 6 Q8 20 18 40" fill="none" stroke="currentColor"/>
      <path d="M28 6 Q40 20 30 40" fill="none" stroke="currentColor"/>
    `,
    mouth: `
      <path d="M14 10 Q32 24 14 38" fill="none" stroke="currentColor"/>
    `,
    body: `
      <path d="M6 24 Q6 8 24 8 Q42 8 42 24 Q42 40 24 40 Q6 40 6 24 Z" fill="none" stroke="currentColor"/>
    `,
    segment: `
      <ellipse cx="13" cy="24" rx="7" ry="13" fill="none" stroke="currentColor"/>
      <ellipse cx="24" cy="24" rx="7" ry="13" fill="none" stroke="currentColor"/>
      <ellipse cx="35" cy="24" rx="7" ry="13" fill="none" stroke="currentColor"/>
    `,
    fin: `
      <path d="M8 36 Q24 4 40 18 Q28 30 8 36 Z" fill="none" stroke="currentColor"/>
    `,
    tentacle: `
      <path d="M12 42 Q6 26 18 18 Q30 10 38 4" fill="none" stroke="currentColor"/>
      <circle cx="17" cy="22" r="2.2" fill="currentColor"/>
      <circle cx="26" cy="14" r="2.2" fill="currentColor"/>
      <circle cx="34" cy="8" r="2.2" fill="currentColor"/>
    `,
    gland: `
      <path d="M24 6 Q36 20 34 30 Q32 42 24 42 Q16 42 14 30 Q12 20 24 6 Z" fill="none" stroke="currentColor"/>
    `,
    tube: `
      <path d="M6 14 Q20 6 24 18 Q28 30 42 24" fill="none" stroke="currentColor"/>
    `,
    organ: `
      <path d="M30 8 Q42 12 40 24 Q38 38 26 38 Q12 38 12 26 Q12 16 22 12 Q22 20 30 8 Z" fill="none" stroke="currentColor"/>
    `,
    spot: `
      <circle cx="14" cy="16" r="3" fill="currentColor"/>
      <circle cx="30" cy="12" r="3" fill="currentColor"/>
      <circle cx="38" cy="26" r="3" fill="currentColor"/>
      <circle cx="22" cy="30" r="3" fill="currentColor"/>
      <circle cx="12" cy="34" r="3" fill="currentColor"/>
      <circle cx="34" cy="38" r="3" fill="currentColor"/>
    `,
    plate: `
      <path d="M24 6 L40 16 L40 32 L24 42 L8 32 L8 16 Z" fill="none" stroke="currentColor"/>
    `,
    gem: `
      <path d="M24 6 L38 24 L24 42 L10 24 Z" fill="none" stroke="currentColor"/>
    `,
    heart: `
      <path d="M24 40 C8 28 6 14 17 9 C21 7 24 12 24 15 C24 12 27 7 31 9 C42 14 40 28 24 40 Z" fill="none" stroke="currentColor"/>
    `
  };

  return `
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      ${icons[category] || icons.body}
    </svg>
  `;
}


// ============================================================
// GAME STATE
// ============================================================

let currentOrganism = null;
let currentView = null;
let eliminated = new Set();


// ============================================================
// SCREEN CONTROL
// ============================================================

function setScreen(id) {
  document
    .querySelectorAll(".screen")
    .forEach(screen => screen.classList.remove("active"));

  document.getElementById(id).classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "instant"
  });
}


// ============================================================
// ORGANISM SELECT
// ============================================================

function renderSelect() {
  const grid = document.getElementById("organismGrid");

  const cards = [
    [
      "squid",
      "01",
      miniSquid(),
      "Cephalopod",
      "External + internal views"
    ],
    [
      "earthworm",
      "02",
      miniWorm(),
      "Segmented annelid",
      "External + internal views"
    ],
    [
      "shrimp",
      "03",
      miniShrimp(),
      "Aquatic crustacean",
      "External anatomy"
    ],
    [
      "ant",
      "04",
      miniAnt(),
      "Terrestrial insect",
      "External anatomy"
    ]
  ];

  grid.innerHTML = cards.map(
    ([key, num, visual, labelText, mode]) => `
      <article
        class="organism-card"
        data-organism="${key}"
        tabindex="0"
        role="button"
        aria-label="Open ${ORGANISMS[key].name} anatomy"
      >
        <div class="organism-visual">
          ${visual}
        </div>

        <span class="organism-index">
          ${num} • ${labelText}
        </span>

        <h3>${ORGANISMS[key].name}</h3>

        <p>${mode}</p>
      </article>
    `
  ).join("");

  grid.querySelectorAll(".organism-card").forEach(card => {
    card.addEventListener("click", () => {
      openOrganism(card.dataset.organism);
    });

    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openOrganism(card.dataset.organism);
      }
    });
  });
}


// ============================================================
// OPEN ORGANISM
// ============================================================

function openOrganism(key) {
  currentOrganism = key;
  currentView = "external";
  eliminated = new Set();

  resetInfoPanel();
  renderAnatomy();
  setScreen("anatomyScreen");
}


// ============================================================
// RENDER ANATOMY SCREEN
// ============================================================

function renderAnatomy() {
  const data = ORGANISMS[currentOrganism];
  const view = data.views[currentView];

  document.getElementById("anatomyEyebrow").textContent =
    `${data.scientific} • ${data.habitat}`;

  document.getElementById("anatomyTitle").textContent =
    data.name;

  // ---------------------------------------------
  // View switch
  // ---------------------------------------------

  const switcher = document.getElementById("viewSwitch");
  const viewKeys = Object.keys(data.views);

  switcher.innerHTML = viewKeys.map(
    key => `
      <button
        class="view-tab ${key === currentView ? "active" : ""}"
        data-view="${key}"
      >
        ${data.views[key].label}
      </button>
    `
  ).join("");

  switcher
    .querySelectorAll(".view-tab")
    .forEach(button => {
      button.addEventListener("click", () => {
        if (button.dataset.view === currentView) {
          return;
        }

        currentView = button.dataset.view;

        resetInfoPanel();
        renderAnatomy();
      });
    });


  // ---------------------------------------------
  // Part cards
  // ---------------------------------------------

  renderPartCards(view);


  // ---------------------------------------------
  // Counters
  // ---------------------------------------------

  document.getElementById("activeCount").textContent =
    eliminated.size;

  document.getElementById("eliminatedCount").textContent =
    eliminated.size;


  updateEliminatedList(view);
}


// ============================================================
// RENDER PART CARDS
// Draws one card per anatomical part: a picture (icon), its
// name, and its worksheet-based description. Clicking a card
// eliminates it (turns it red); clicking again restores it.
// ============================================================

function renderPartCards(view) {
  const board = document.getElementById("board");

  board.innerHTML = view.parts.map(([id, name, text, category]) => `
    <article
      class="part-card ${eliminated.has(id) ? "eliminated" : ""}"
      data-part="${id}"
      tabindex="0"
      role="button"
      aria-pressed="${eliminated.has(id)}"
      aria-label="${name}"
    >
      <span class="part-status">Eliminated</span>

      <div class="part-icon-badge">
        ${partIcon(category)}
      </div>

      <h4>${name}</h4>
      <p>${text}</p>
    </article>
  `).join("");

  board.querySelectorAll(".part-card").forEach(card => {
    const id = card.dataset.part;

    card.addEventListener("click", () => {
      togglePart(id);
    });

    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        togglePart(id);
      }
    });
  });
}


// ============================================================
// FIND PART INFORMATION
// ============================================================

function getPartById(id) {
  for (
    const view of Object.values(
      ORGANISMS[currentOrganism].views
    )
  ) {
    const found = view.parts.find(
      part => part[0] === id
    );

    if (found) {
      return found;
    }
  }

  return null;
}


// ============================================================
// ELIMINATE / RESTORE PART
// ============================================================

function togglePart(id) {
  const part = getPartById(id);

  if (!part) {
    return;
  }

  const willEliminate = !eliminated.has(id);

  if (willEliminate) {
    eliminated.add(id);
  } else {
    eliminated.delete(id);
  }


  // Turn the card red / restore it
  document
    .querySelectorAll(
      `.part-card[data-part="${CSS.escape(id)}"]`
    )
    .forEach(card => {
      card.classList.toggle("eliminated", willEliminate);
      card.setAttribute("aria-pressed", String(willEliminate));
    });


  // Update info panel
  document.getElementById(
    "selectedPartTitle"
  ).textContent = part[1];

  document.getElementById(
    "selectedPartText"
  ).textContent = willEliminate
    ? "Eliminated — click its card again to bring it back into play."
    : "Restored — this part is back in play.";


  // Update counters
  document.getElementById(
    "activeCount"
  ).textContent = eliminated.size;

  document.getElementById(
    "eliminatedCount"
  ).textContent = eliminated.size;


  // Update eliminated list
  updateEliminatedList(
    ORGANISMS[currentOrganism].views[currentView]
  );


  // Small feedback animation
  const panel = document.querySelector(".info-panel");

  panel.animate(
    [
      { transform: "scale(1)" },
      { transform: "scale(1.012)" },
      { transform: "scale(1)" }
    ],
    {
      duration: 180,
      easing: "ease-out"
    }
  );
}


// ============================================================
// ELIMINATED PART LIST
// ============================================================

function updateEliminatedList(view) {
  const list =
    document.getElementById("eliminatedList");

  const parts = view.parts.filter(
    part => eliminated.has(part[0])
  );

  if (!parts.length) {
    list.innerHTML =
      `<div class="empty-state">No parts eliminated yet.</div>`;

    return;
  }

  list.innerHTML = parts
    .map(
      part =>
        `<span class="elim-tag">${part[1]}</span>`
    )
    .join("");
}


// ============================================================
// INFO PANEL DEFAULT COPY
// ============================================================

function resetInfoPanel() {
  document.getElementById(
    "selectedPartTitle"
  ).textContent = "No eliminations yet";

  document.getElementById(
    "selectedPartText"
  ).textContent =
    "Tap any part card below to eliminate it. Tap it again to bring it back.";
}


// ============================================================
// BUTTON EVENTS
// ============================================================

document.getElementById("playBtn").addEventListener(
  "click",
  () => {
    setScreen("selectScreen");
  }
);


document.getElementById("resetBtn").addEventListener(
  "click",
  () => {

    eliminated.clear();

    resetInfoPanel();
    renderAnatomy();
  }
);


// Home buttons
document
  .querySelectorAll("[data-action='home']")
  .forEach(button => {
    button.addEventListener(
      "click",
      () => {
        setScreen("homeScreen");
      }
    );
  });


// Organism selection buttons
document
  .querySelectorAll("[data-action='select']")
  .forEach(button => {
    button.addEventListener(
      "click",
      () => {
        setScreen("selectScreen");
      }
    );
  });


// ============================================================
// INITIALIZE
// ============================================================

renderSelect();
