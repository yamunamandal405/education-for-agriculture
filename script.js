"use strict";

const crops = [
  { name: "Groundnut", common: "Peanut", scientific: "Arachis hypogaea L.", category: "Oilseeds", origin: "South America (Bolivia–Paraguay region)", production: { value: 13.074, label: "13.074 Mt", detail: "130.74 lakh tonnes" }, yield: "1.5–3.0 t pods/ha", guide: "groundnut" },
  { name: "Mustard", common: "Indian mustard", scientific: "Brassica juncea (L.) Czern.", category: "Oilseeds", origin: "Central Asia; species ancestry is complex", production: { value: 13.768, label: "13.768 Mt", detail: "137.68 lakh tonnes (rapeseed & mustard group)" }, yield: "1.2–2.5 t seed/ha", guide: "mustard-indian-rapeseed" },
  { name: "Sunflower", common: "Sunflower", scientific: "Helianthus annuus L.", category: "Oilseeds", origin: "North America", production: { value: 0.270, label: "0.270 Mt", detail: "2.70 lakh tonnes" }, yield: "1.2–2.5 t seed/ha", guide: "sunflower" },
  { name: "Safflower", common: "Kusum", scientific: "Carthamus tinctorius L.", category: "Oilseeds", origin: "Fertile Crescent / eastern Mediterranean (origin debated)", production: { value: 0.066, label: "0.066 Mt", detail: "0.66 lakh tonnes" }, yield: "0.8–1.5 t seed/ha", guide: "safflower" },
  { name: "Niger", common: "Nigerseed", scientific: "Guizotia abyssinica (L.f.) Cass.", category: "Oilseeds", origin: "Ethiopian highlands / northeast Africa", production: { value: 0.032, label: "0.032 Mt", detail: "0.32 lakh tonnes" }, yield: "0.4–0.8 t seed/ha", guide: "niger-nigerseed" },
  { name: "Soybean", common: "Soybean", scientific: "Glycine max (L.) Merr.", category: "Oilseeds", origin: "East Asia, especially China", production: { value: 12.596, label: "12.596 Mt", detail: "125.96 lakh tonnes" }, yield: "1.5–2.5 t seed/ha", guide: "soybean" },
  { name: "Sesame", common: "Sesame / til", scientific: "Sesamum indicum L.", category: "Oilseeds", origin: "Origin debated; African ancestry and early domestication in South Asia are proposed", production: null, productionNote: "See oilseeds table", yield: "0.4–1.0 t seed/ha", guide: "sesame" },
  { name: "Rice", common: "Paddy", scientific: "Oryza sativa L.", category: "Cereals", origin: "Asia; domestication history has multiple proposed centres", production: { value: 154.024, label: "154.024 Mt", detail: "1,540.24 lakh tonnes" }, yield: "4–7 t grain/ha", guide: "rice-paddy" },
  { name: "Sugarcane", common: "Sugarcane", scientific: "Saccharum spp. hybrid", category: "Commercial", origin: "New Guinea (cultivated cane ancestry)", production: null, productionNote: "See commercial-crops table", yield: "60–100 t cane/ha", guide: "sugarcane" },
  { name: "Cotton", common: "Cotton", scientific: "Gossypium spp. (mainly G. hirsutum in India)", category: "Commercial", origin: "Species-specific: Mesoamerica, Africa and the Indian subcontinent", production: null, productionNote: "See commercial-crops table", yield: "1.5–3.0 t seed cotton/ha", guide: "cotton" },
  { name: "Jute", common: "White and tossa jute", scientific: "Corchorus capsularis L. / C. olitorius L.", category: "Commercial", origin: "C. capsularis: South Asia; C. olitorius: tropical Africa", production: null, productionNote: "See commercial-crops table", yield: "2–4 t dry fibre/ha", guide: "jute-white-tossa-jute" },
  { name: "Maize", common: "Corn", scientific: "Zea mays L.", category: "Cereals", origin: "Mexico", production: { value: 55.093, label: "55.093 Mt", detail: "550.93 lakh tonnes" }, yield: "4–8 t grain/ha", guide: "maize" },
  { name: "Sorghum", common: "Jowar", scientific: "Sorghum bicolor (L.) Moench", category: "Millets", origin: "Northeast Africa, especially the Sudan–Ethiopia region", production: { value: 4.356, label: "4.356 Mt", detail: "43.56 lakh tonnes" }, yield: "1.5–4 t grain/ha", guide: "sorghum-jowar" },
  { name: "Pearl millet", common: "Bajra", scientific: "Cenchrus americanus (L.) Morrone", category: "Millets", origin: "West African Sahel", production: { value: 9.476, label: "9.476 Mt", detail: "94.76 lakh tonnes" }, yield: "1.5–3 t grain/ha", guide: "pearl-millet-bajra" },
  { name: "Finger millet", common: "Ragi", scientific: "Eleusine coracana (L.) Gaertn.", category: "Millets", origin: "East African highlands", production: { value: 1.372, label: "1.372 Mt", detail: "13.72 lakh tonnes" }, yield: "1.5–3 t grain/ha", guide: "finger-millet-ragi" },
  { name: "Small millets", common: "Foxtail, kodo, little and barnyard millets", scientific: "Multiple species, including Setaria italica, Panicum sumatrense and Paspalum scrobiculatum", category: "Millets", origin: "Multiple domestication histories across Asia and Africa", production: null, productionNote: "See small-millets group in estimate", yield: "Species- and location-specific", guide: "small-millets" },
  { name: "Chickpea", common: "Gram", scientific: "Cicer arietinum L.", category: "Pulses", origin: "Fertile Crescent / Southwest Asia", production: null, productionNote: "Included in total pulses", yield: "1–2 t seed/ha", guide: "chickpea-gram" },
  { name: "Pigeonpea", common: "Tur / arhar", scientific: "Cajanus cajan (L.) Millsp.", category: "Pulses", origin: "Indian subcontinent", production: null, productionNote: "Included in total pulses", yield: "1–2 t seed/ha", guide: "pigeonpea-arhar-tur" },
  { name: "Lentil", common: "Masoor", scientific: "Lens culinaris Medik.", category: "Pulses", origin: "Fertile Crescent / Southwest Asia", production: null, productionNote: "Included in total pulses", yield: "0.8–1.6 t seed/ha", guide: "lentil-masoor" },
  { name: "Mungbean", common: "Green gram", scientific: "Vigna radiata (L.) R.Wilczek", category: "Pulses", origin: "Indian subcontinent", production: null, productionNote: "Included in total pulses", yield: "0.6–1.2 t seed/ha", guide: "mungbean-green-gram-and-urdbean-black-gram" },
  { name: "Urdbean", common: "Black gram", scientific: "Vigna mungo (L.) Hepper", category: "Pulses", origin: "Indian subcontinent", production: null, productionNote: "Included in total pulses", yield: "0.6–1.2 t seed/ha", guide: "mungbean-green-gram-and-urdbean-black-gram" },
  { name: "Fodder sorghum", common: "Forage sorghum", scientific: "Sorghum bicolor (L.) Moench", category: "Forage", origin: "Northeast Africa, especially the Sudan–Ethiopia region", production: null, productionNote: "Forage not covered by this estimate", yield: "25–50 t fresh fodder/ha", guide: "fodder-sorghum-forage-maize-pearl-millet" },
  { name: "Fodder maize", common: "Forage maize", scientific: "Zea mays L.", category: "Forage", origin: "Mexico", production: null, productionNote: "Forage not covered by this estimate", yield: "25–50 t fresh fodder/ha", guide: "fodder-sorghum-forage-maize-pearl-millet" },
  { name: "Fodder pearl millet", common: "Forage bajra", scientific: "Cenchrus americanus (L.) Morrone", category: "Forage", origin: "West African Sahel", production: null, productionNote: "Forage not covered by this estimate", yield: "25–50 t fresh fodder/ha", guide: "fodder-sorghum-forage-maize-pearl-millet" },
  { name: "Cowpea", common: "Fodder cowpea", scientific: "Vigna unguiculata (L.) Walp.", category: "Forage", origin: "Africa", production: null, productionNote: "Forage not covered by this estimate", yield: "15–30 t fresh forage/ha", guide: "cowpea-fodder" },
  { name: "Berseem", common: "Egyptian clover", scientific: "Trifolium alexandrinum L.", category: "Forage", origin: "Eastern Mediterranean and Southwest Asia", production: null, productionNote: "Forage not covered by this estimate", yield: "60–100 t green forage/ha per season", guide: "berseem-egyptian-clover" },
  { name: "Oats", common: "Fodder oats", scientific: "Avena sativa L.", category: "Forage", origin: "Fertile Crescent / Southwest Asia", production: null, productionNote: "Forage not covered by this estimate", yield: "30–60 t green forage/ha", guide: "oats-fodder" },
  { name: "Lucerne", common: "Alfalfa", scientific: "Medicago sativa L.", category: "Forage", origin: "Central Asia / Southwest Asia", production: null, productionNote: "Forage not covered by this estimate", yield: "40–80 t green forage/ha/year", guide: "lucerne-alfalfa" }
];

const latestEstimate = {
  label: "3rd advance estimate",
  season: "2025–26",
  date: "27 May 2026",
  source: "https://desagri.gov.in/wp-content/uploads/2026/06/Time-Series-3rd-AE-2025-26-English.pdf",
  metrics: [
    { label: "Foodgrains", value: "376.56 Mt", detail: "3,765.63 lakh tonnes · all seasons" },
    { label: "Oilseeds", value: "43.06 Mt", detail: "430.59 lakh tonnes · all seasons" },
    { label: "Pulses", value: "27.41 Mt", detail: "274.09 lakh tonnes · all seasons" },
    { label: "Rice", value: "154.02 Mt", detail: "1,540.24 lakh tonnes" },
    { label: "Wheat", value: "120.66 Mt", detail: "1,206.57 lakh tonnes" }
  ],
  chartCrops: [
    { name: "Rice", value: 154.024 },
    { name: "Wheat", value: 120.657 },
    { name: "Oilseeds total", value: 43.059 },
    { name: "Maize", value: 55.093 },
    { name: "Pearl millet", value: 9.476 },
    { name: "Groundnut", value: 13.074 },
    { name: "Soybean", value: 12.596 },
    { name: "Mustard group", value: 13.768 }
  ]
};

const categories = ["All", "Oilseeds", "Cereals", "Millets", "Pulses", "Commercial", "Forage"];
const cardGrid = document.querySelector("#crop-grid");
const searchInput = document.querySelector("#crop-search");
const filterContainer = document.querySelector("#category-filters");
let activeCategory = "All";

function renderStats() {
  const container = document.querySelector("#stat-grid");
  latestEstimate.metrics.forEach((metric) => {
    const card = document.createElement("article");
    card.className = "stat-card";
    const label = document.createElement("span");
    label.className = "stat-label";
    label.textContent = metric.label;
    const value = document.createElement("strong");
    value.textContent = metric.value;
    const detail = document.createElement("small");
    detail.textContent = metric.detail;
    card.append(label, value, detail);
    container.append(card);
  });
}

function renderChart() {
  const container = document.querySelector("#production-chart");
  const largest = Math.max(...latestEstimate.chartCrops.map((crop) => crop.value));
  latestEstimate.chartCrops.forEach((crop) => {
    const row = document.createElement("div");
    row.className = "chart-row";
    const name = document.createElement("span");
    name.className = "chart-name";
    name.textContent = crop.name;
    const track = document.createElement("span");
    track.className = "chart-track";
    track.setAttribute("aria-hidden", "true");
    const fill = document.createElement("span");
    fill.className = "chart-fill";
    fill.style.width = `${Math.max(3, (crop.value / largest) * 100)}%`;
    track.append(fill);
    const value = document.createElement("strong");
    value.className = "chart-value";
    value.textContent = `${crop.value.toFixed(2)} Mt`;
    row.setAttribute("aria-label", `${crop.name}: ${value.textContent}`);
    row.append(name, track, value);
    container.append(row);
  });
}

function createCropCard(crop) {
  const article = document.createElement("article");
  article.className = "crop-card";

  const top = document.createElement("div");
  top.className = "crop-card-top";
  const icon = document.createElement("span");
  icon.className = "crop-icon";
  icon.setAttribute("aria-hidden", "true");
  icon.textContent = crop.name.charAt(0);
  const category = document.createElement("span");
  category.className = "category-tag";
  category.textContent = crop.category;
  top.append(icon, category);

  const title = document.createElement("h3");
  title.textContent = crop.name;
  const scientific = document.createElement("p");
  scientific.className = "scientific-name";
  scientific.textContent = crop.scientific;
  scientific.title = crop.common;
  const origin = document.createElement("p");
  origin.className = "origin-line";
  const originLabel = document.createElement("strong");
  originLabel.textContent = "Origin · ";
  origin.append(originLabel, document.createTextNode(crop.origin));

  const metrics = document.createElement("div");
  metrics.className = "crop-metrics";
  const production = document.createElement("div");
  production.className = "metric";
  const productionLabel = document.createElement("span");
  productionLabel.className = "metric-label";
  productionLabel.textContent = "India production · 2025–26";
  const productionValue = document.createElement("strong");
  productionValue.textContent = crop.production ? crop.production.label : (crop.productionNote || "Not shown in snapshot");
  if (crop.production) productionValue.title = crop.production.detail;
  production.append(productionLabel, productionValue);

  const productivity = document.createElement("div");
  productivity.className = "metric";
  const yieldLabel = document.createElement("span");
  yieldLabel.className = "metric-label";
  yieldLabel.textContent = "Guide yield range";
  const yieldValue = document.createElement("strong");
  yieldValue.textContent = crop.yield;
  productivity.append(yieldLabel, yieldValue);
  metrics.append(production, productivity);

  const link = document.createElement("a");
  link.className = "crop-card-link";
  link.href = `practices.html#${crop.guide}`;
  link.textContent = "Open crop practices";
  const arrow = document.createElement("span");
  arrow.setAttribute("aria-hidden", "true");
  arrow.textContent = "↗";
  link.append(arrow);

  article.append(top, title, scientific, origin, metrics, link);
  return article;
}

function renderCrops() {
  const query = searchInput.value.trim().toLocaleLowerCase();
  const matches = crops.filter((crop) => {
    const inCategory = activeCategory === "All" || crop.category === activeCategory;
    const searchable = `${crop.name} ${crop.common} ${crop.scientific} ${crop.origin} ${crop.category}`.toLocaleLowerCase();
    return inCategory && searchable.includes(query);
  });
  cardGrid.replaceChildren(...matches.map(createCropCard));
  document.querySelector("#crop-count").textContent = String(matches.length);
  document.querySelector("#empty-state").hidden = matches.length > 0;
}

function renderFilters() {
  categories.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "filter-button";
    button.textContent = category;
    button.setAttribute("aria-pressed", String(category === activeCategory));
    button.addEventListener("click", () => {
      activeCategory = category;
      filterContainer.querySelectorAll("button").forEach((item) => {
        item.setAttribute("aria-pressed", String(item.textContent === activeCategory));
      });
      renderCrops();
    });
    filterContainer.append(button);
  });
}

searchInput.addEventListener("input", renderCrops);
document.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLocaleLowerCase() === "k") {
    event.preventDefault();
    searchInput.focus();
  }
});

renderStats();
renderChart();
renderFilters();
renderCrops();