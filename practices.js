"use strict";

const practiceGuides = [
  {
    id: "groundnut",
    crop: "Groundnut (peanut)",
    group: "Oilseeds",
    scientific: "Arachis hypogaea L.",
    origin: "South America, broadly the Bolivia–Paraguay region",
    soil: "Well-drained sandy loam to loam; pH about 6.0–7.5. Warm, frost-free conditions. Pegging and pod development suffer in hard, crusted soil or waterlogging.",
    planting: "Kharif: commonly June–July after effective monsoon onset. Rabi/summer: often October–November or January–February only in suitable irrigated regions.",
    sowing: "Line sow in a fine, moist seedbed about 4–6 cm deep. Use flat land, broad beds or ridges as soil and drainage require; follow local seed rate and spacing.",
    water: "About 3–6 mm/day during active growth; keep the root zone moist but not saturated.",
    critical: "Prioritize establishment, flowering/pegging, pod formation and pod filling. Avoid drought at pegging and waterlogging near maturity.",
    weeds: "Common examples include Echinochloa colona (jungle rice), Digitaria spp., Cyperus rotundus (purple nutsedge) and Commelina benghalensis. The first 2–6 weeks after emergence are especially competitive.",
    control: "Start clean; hand/mechanically weed while plants are small and before pegs spread. Earth up without burying plants; rotate crops and maintain drainage. Use only locally registered products and label directions.",
    nutrition: "Indicative basal N–P₂O₅–K₂O: 15–25–30 to 25–60–60 kg/ha, adjusted by soil test. Compatible Rhizobium/PSB, sulphur and pegging-zone calcium only as locally advised; avoid excess N.",
    harvest: "Usually about 100–130 days depending on variety/season. Dig when most pods are filled and inner-shell markings are developed; avoid leaving mature pods in the soil. Cure and dry before storage.",
    yield: "Indicative 1.5–3.0 t pods/ha."
  },
  {
    id: "mustard-indian-rapeseed",
    crop: "Mustard / Indian rapeseed",
    group: "Oilseeds",
    scientific: "Brassica juncea (L.) Czern.",
    origin: "Central Asian ancestry; species origin is complex",
    soil: "Fertile, well-drained loam to clay loam; pH about 6.0–8.0. Cool, relatively dry weather is useful during flowering and seed filling.",
    planting: "Rabi, commonly October–November in north/central India. The suitable window shifts with region and variety.",
    sowing: "Line sow in a fine, firm, moist seedbed about 2–3 cm deep. Use local seed rate, spacing and variety duration.",
    water: "About 2–5 mm/day. Irrigation frequency depends on soil storage, rainfall and weather.",
    critical: "Branching/pre-flowering, flowering and siliqua (pod) formation/filling. Avoid waterlogging.",
    weeds: "Common examples include Chenopodium album (lambsquarters), Phalaris minor (little seed canary grass), Melilotus indica and wild mustard; first 30–45 days are typically critical.",
    control: "Timely shallow hoeing/hand weeding, clean borders and crop rotation. Avoid late cultivation that damages roots; use only locally approved products per label.",
    nutrition: "Indicative N–P₂O₅–K₂O: N 60–120, P₂O₅ 30, K₂O 0–60 kg/ha. Place P basally; split N (often half basal and the remainder before first irrigation/early branching) as locally advised. Add S or B only when indicated.",
    harvest: "Usually about 110–150 days by variety/region. Harvest when most siliquae turn yellow and seeds are firm; avoid over-drying and shattering.",
    yield: "Indicative 1.2–2.5 t seed/ha."
  },
  {
    id: "sunflower",
    crop: "Sunflower",
    group: "Oilseeds",
    scientific: "Helianthus annuus L.",
    origin: "North America",
    soil: "Deep, well-drained loam; pH about 6.0–8.0. Warm conditions; flowering heat, moisture stress and waterlogging can reduce seed set.",
    planting: "Kharif, rabi or summer according to zone; commonly June–July, October–November or January–February.",
    sowing: "Direct line sow into moist soil about 4–6 cm deep, using locally recommended spacing and seed rate.",
    water: "About 3–6 mm/day; adjust to crop stage, effective rainfall and soil moisture.",
    critical: "Bud initiation, flowering/pollination and seed filling. Avoid severe stress at flowering.",
    weeds: "Common examples include Echinochloa colona, Cyperus rotundus, Amaranthus viridis and Trianthema portulacastrum; keep the field clean for about the first 4–6 weeks.",
    control: "Inter-row cultivation and hand weeding while plants are small; avoid root damage later. Maintain stand and drainage; rotate to limit disease and volunteer plants.",
    nutrition: "Indicative N–P₂O₅–K₂O: N 40–80, P₂O₅ 40, K₂O 0–60 kg/ha. Apply P and part of N/K basally; top-dress remaining N by early vegetative growth if locally recommended. S/B only by diagnosis.",
    harvest: "Often about 85–120 days depending on season/variety. Harvest when the back of the head turns yellow-brown, bracts dry and seeds are firm; dry heads before threshing.",
    yield: "Indicative 1.2–2.5 t seed/ha."
  },
  {
    id: "safflower",
    crop: "Safflower",
    group: "Oilseeds",
    scientific: "Carthamus tinctorius L.",
    origin: "Fertile Crescent/eastern Mediterranean; origin debated",
    soil: "Deep, well-drained black or loam soils; pH about 6.0–8.5. Cool-season crop; drought tolerant after establishment but sensitive to waterlogging.",
    planting: "Mainly rabi, often October–November on conserved soil moisture.",
    sowing: "Line sow at locally recommended spacing; ensure enough moisture for uniform emergence. Avoid late field work once plants become spiny.",
    water: "About 2–4 mm/day; actual seasonal use depends strongly on rainfall and stored soil moisture.",
    critical: "Branching, flowering and early seed filling if protective irrigation is available. One timely irrigation is generally preferable to frequent light watering.",
    weeds: "Common examples include Chenopodium album, Phalaris minor and Cyperus rotundus; early 3–6 weeks are important.",
    control: "Thin and shallow-inter-row cultivate early; rotate crops and avoid late operations that injure plants.",
    nutrition: "Indicative N–P₂O₅–K₂O: N 30–60, P₂O₅ 20–40, K₂O 0–40 kg/ha. Place P basally and split N only as the local package advises.",
    harvest: "Usually about 120–160 days. Harvest when most heads/bracts are dry and seeds are hard, before shattering.",
    yield: "Indicative 0.8–1.5 t seed/ha."
  },
  {
    id: "niger-nigerseed",
    crop: "Niger (nigerseed)",
    group: "Oilseeds",
    scientific: "Guizotia abyssinica (L.f.) Cass.",
    origin: "Ethiopian highlands / northeast Africa",
    soil: "Well-drained upland soils, including suitable marginal soils; pH about 5.5–7.5. Warm monsoon climate; avoid prolonged waterlogging.",
    planting: "Mostly kharif, commonly June–July in central/eastern plateau regions.",
    sowing: "Use a fine seedbed; line sow shallowly or follow a locally established intercrop system. Use clean seed.",
    water: "About 2–4 mm/day during active growth; mainly rainfed.",
    critical: "Protect establishment and flowering/capsule filling from dry spells if a protective irrigation is available.",
    weeds: "Small seedlings compete with annual grasses and broadleaves, including Digitaria spp. and Commelina spp.; the first 3–5 weeks are especially competitive.",
    control: "Shallow early hand/mechanical weeding, clean seed and suitable rotation. Avoid deep cultivation around shallow roots.",
    nutrition: "Indicative N–P₂O₅–K₂O: N 20, P₂O₅ 40, K₂O 10–20 kg/ha. Apply modest N and basal P; adjust to soil test/local recommendation.",
    harvest: "Often about 90–120 days. Harvest when most heads turn brown and seed is firm, before shattering.",
    yield: "Indicative 0.4–0.8 t seed/ha."
  },
  {
    id: "soybean",
    crop: "Soybean",
    group: "Oilseeds",
    scientific: "Glycine max (L.) Merr.",
    origin: "East Asia, especially China",
    soil: "Well-drained loam/clay loam; pH about 6.0–7.5. Warm growing season. Waterlogging at any stage can be severe.",
    planting: "Kharif, usually June–July after effective monsoon onset.",
    sowing: "Line sow with a calibrated planter, typically about 3–5 cm deep, on flat land, ridges or broad-bed furrows to suit drainage.",
    water: "About 3–6 mm/day. Use soil moisture and rainfall to schedule irrigation.",
    critical: "Flowering, pod set and seed filling; drain excess rainfall quickly.",
    weeds: "Common examples include Echinochloa colona, Commelina benghalensis, Amaranthus viridis and Cyperus rotundus; the first 20–45 days are usually the critical weed-free period.",
    control: "Use clean seed, compatible Bradyrhizobium/PSB inoculation where recommended, timely interculture, crop rotation and residue retention. Stop cultivation after canopy closure.",
    nutrition: "Indicative N–P₂O₅–K₂O: N 20–30, P₂O₅ 30, K₂O 40–60 kg/ha. Apply most P/K basally; use only modest starter N. S and micronutrients according to soil test/local package.",
    harvest: "Usually about 90–150 days by variety. Harvest when most pods are brown and leaves have dropped, before shattering; dry seed to safe storage moisture.",
    yield: "Indicative 1.5–2.5 t seed/ha."
  },
  {
    id: "sesame",
    crop: "Sesame (til)",
    group: "Oilseeds",
    scientific: "Sesamum indicum L.",
    origin: "Origin debated; African ancestry and early South Asian domestication are proposed",
    soil: "Light to medium, well-drained soils; pH about 5.5–7.5. Warm, frost-free conditions; highly sensitive to waterlogging.",
    planting: "Kharif commonly June–July. Summer/rabi sowing is regional and requires assured irrigation.",
    sowing: "Shallow line sowing, usually about 2–3 cm; avoid a crusted seedbed and follow local spacing/seed rate.",
    water: "About 2–5 mm/day.",
    critical: "Establishment, branching/flowering and capsule filling. Avoid excess water and prolonged wetness.",
    weeds: "Common examples include Cyperus rotundus, Echinochloa colona, Amaranthus viridis and Trianthema portulacastrum; first 20–45 days are critical.",
    control: "Use clean seed and timely shallow weeding before canopy closure; avoid deep hoeing. Split N only as locally advised.",
    nutrition: "Indicative N–P₂O₅–K₂O: N 20–40, P₂O₅ 20–40, K₂O 20–40 kg/ha. Place P basally and adjust N/S to soil test and local advice.",
    harvest: "Often about 80–120 days. Harvest when lower capsules begin to yellow and seeds mature, before capsules shatter; dry carefully.",
    yield: "Indicative 0.4–1.0 t seed/ha."
  },
  {
    id: "rice-paddy",
    crop: "Rice / paddy",
    group: "Cereals",
    scientific: "Oryza sativa L.",
    origin: "Asia; domestication history has multiple proposed centres",
    soil: "Clay loam to clay with good water-holding capacity; pH about 5.5–7.5, with suitable varieties/management for other soils. Warm, humid season; drainage remains essential.",
    planting: "Kharif transplanting or direct seeding is commonly June–July. Rabi/summer rice is grown in selected irrigated zones; use the local calendar.",
    sowing: "Transplant healthy nursery seedlings where appropriate, or direct-seed into a level, firm seedbed. Puddle only in suitable lowland systems; precise levelling is important.",
    water: "About 4–8 mm/day ETc in active growth. Field input can be higher because of seepage/percolation. Alternate wetting and drying may suit some fields.",
    critical: "Establishment, active tillering, panicle initiation, flowering/heading and early grain filling. Avoid water stress at flowering; drain before harvest as locally advised.",
    weeds: "Common examples include Echinochloa crus-galli/colona, Cyperus iria, Fimbristylis miliacea, Monochoria vaginalis and weedy rice; first 20–45 days are critical. Direct-seeded rice needs especially timely control.",
    control: "Clean seed, stale seedbed where useful, timely hand/mechanical weeding, competitive spacing, water management and rotation. Use only locally registered products and label directions.",
    nutrition: "Indicative N–P₂O₅–K₂O: N 80–150, P₂O₅ 40–60, K₂O 40–60 kg/ha. Apply P basally; split N across establishment/tillering and panicle initiation per local schedule. Diagnose Zn deficiency before treatment.",
    harvest: "Often about 100–150 days by variety/system. Harvest when roughly 80–85% of grains on panicles are straw-coloured and grain is firm; dry promptly.",
    yield: "Indicative 4–7 t grain/ha under good irrigated management; rainfed yield varies widely."
  },
  {
    id: "sugarcane",
    crop: "Sugarcane",
    group: "Commercial",
    scientific: "Saccharum spp. hybrid",
    origin: "New Guinea (cultivated-cane ancestry)",
    soil: "Deep, fertile, well-drained loam to clay loam; pH about 6.0–8.0. Long, warm frost-free season; sensitive to waterlogging and severe cold.",
    planting: "Planting season is state-specific; autumn, spring and monsoon planting windows are used in different regions. Confirm the local season and variety.",
    sowing: "Plant healthy, disease-free setts in furrows or paired rows; manage ratoons only from a healthy, timely harvested crop.",
    water: "About 4–8 mm/day in active growth; demand declines near ripening.",
    critical: "Sett establishment, tillering, grand growth and early stalk elongation. Avoid severe stress in grand growth; reduce/stop irrigation before harvest as locally advised.",
    weeds: "Common examples include Cynodon dactylon, Cyperus rotundus, Trianthema portulacastrum and annual grasses/broadleaves; the first 90–120 days before canopy closure are important.",
    control: "Early hoeing/interculture, trash mulch, earthing-up, timely drainage and locally suitable intercrops. Remove perennial weeds; avoid damaging shallow roots.",
    nutrition: "Indicative N–P₂O₅–K₂O: N 150–300, P₂O₅ 60–150, K₂O 60–150 kg/ha. Place P at planting; split N through early tillering/active growth, not late maturity. Final rates are strongly zone- and soil-dependent.",
    harvest: "Harvest at regional maturity, often around 10–18 months by planting season/variety. Check stalk maturity and the local mill/extension quality target; coordinate harvest and transport.",
    yield: "Indicative 60–100 t cane/ha, highly dependent on region, crop duration and water."
  },
  {
    id: "cotton",
    crop: "Cotton",
    group: "Commercial",
    scientific: "Gossypium spp.; mainly G. hirsutum in India",
    origin: "Species-specific: Mesoamerica, Africa and the Indian subcontinent",
    soil: "Deep, well-drained black soil or loam; pH about 6.0–8.5. Warm, frost-free season; avoid waterlogging and persistently wet flowering weather.",
    planting: "Mostly kharif after effective monsoon onset, often June–July. Irrigated windows differ by state.",
    sowing: "Direct-drill on ridges/furrows or broad beds using locally approved varieties/hybrids, spacing and seed.",
    water: "About 3–7 mm/day during active growth.",
    critical: "Square formation, flowering, boll setting and boll filling. Avoid stress during flowering/boll development and excessive late irrigation.",
    weeds: "Common examples include Cyperus rotundus, Cynodon dactylon, Trianthema portulacastrum and Amaranthus viridis; the first 6–8 weeks are critical.",
    control: "Early inter-row cultivation, hand weeding, rotation, residue management and timely drainage. Scout for pests and use integrated local guidance; follow seed stewardship rules.",
    nutrition: "Indicative N–P₂O₅–K₂O: N 60–120, P₂O₅ 30–60, K₂O 30–60 kg/ha. Apply P basally; split N/K according to soil, rainfall and growth stage. Avoid excess N, which can delay maturity.",
    harvest: "Usually about 150–210 days by variety. Pick when bolls are fully open and lint dry; make repeated clean pickings and avoid soil/leaf contamination.",
    yield: "Indicative 1.5–3.0 t seed cotton/ha; this is not lint yield."
  },
  {
    id: "jute-white-tossa-jute",
    crop: "Jute (white / tossa)",
    group: "Commercial",
    scientific: "Corchorus capsularis L. / C. olitorius L.",
    origin: "C. capsularis: South Asia; C. olitorius: tropical Africa",
    soil: "Fertile alluvial loam/silt loam; pH about 6.0–7.5. Warm, humid climate with dependable rainfall; avoid prolonged flooding at establishment.",
    planting: "Mainly humid eastern India, commonly February–April depending on species, temperature and local rainfall.",
    sowing: "Line sow for easier weeding or broadcast where locally established. Use a fine seedbed and locally recommended seed rate.",
    water: "About 3–6 mm/day during active growth; rainfall usually supplies most needs.",
    critical: "Germination and early establishment; protect from dry spells and drain excess water.",
    weeds: "Common examples include Echinochloa colona, Cyperus rotundus, Digitaria spp. and Alternanthera sessilis; first 30–45 days are the main competition period.",
    control: "Timely thinning and hand/mechanical weeding, uniform stand, rotation and clean bunds. Retting-water quality and timing strongly affect fibre quality.",
    nutrition: "Indicative N–P₂O₅–K₂O: N 40–80, P₂O₅ 20–40, K₂O 20–40 kg/ha. Apply P/K and part N basally; remaining N early in growth as local advice specifies.",
    harvest: "Often about 100–120 days, commonly at early flowering or the locally recommended fibre stage. Later harvest may coarsen fibre. Ret and extract fibre using the local recommended method.",
    yield: "Indicative 2–4 t dry fibre/ha."
  },
  {
    id: "maize",
    crop: "Maize",
    group: "Cereals",
    scientific: "Zea mays L.",
    origin: "Mexico",
    soil: "Fertile, well-drained loam; pH about 5.5–7.5. Warm growing season; avoid waterlogging, especially around flowering.",
    planting: "Kharif, rabi or summer by region; kharif sowing is commonly June–July.",
    sowing: "Precision line sowing/planter at locally recommended spacing and depth, typically about 3–5 cm, supports a uniform stand.",
    water: "About 3–6 mm/day; demand peaks around tasseling/silking and grain filling.",
    critical: "Rapid vegetative/knee-high growth, tasseling-silking and grain filling. Water stress at silking can sharply reduce kernels.",
    weeds: "Common examples include Echinochloa colona, Cyperus rotundus, Amaranthus viridis and Digitaria spp.; the first 3–6 weeks are critical.",
    control: "Early interculture/hand weeding, earthing-up, rotation and residue cover. Scout for pests, including fall armyworm, and use integrated locally recommended controls.",
    nutrition: "Indicative N–P₂O₅–K₂O: N 80–150, P₂O₅ 40–60, K₂O 40–60 kg/ha. Place P/K basally; split N at sowing, knee-high and before tasseling as locally advised.",
    harvest: "Grain maize is often ready in about 90–140 days by variety/season. Harvest when husks are dry/brown, kernels hard and black layer formed; dry grain promptly. Green cobs/silage have earlier targets.",
    yield: "Indicative 4–8 t grain/ha."
  },
  {
    id: "sorghum-jowar",
    crop: "Sorghum (jowar)",
    group: "Millets",
    scientific: "Sorghum bicolor (L.) Moench",
    origin: "Northeast Africa, especially the Sudan–Ethiopia region",
    soil: "Well-drained loam to heavy soil; pH about 5.5–8.0. Warm and relatively drought tolerant after establishment; avoid waterlogging.",
    planting: "Kharif commonly June–July; rabi commonly September–October in suitable regions. Summer only with irrigation.",
    sowing: "Line sow at the locally recommended spacing and depth; use a variety suited to grain/fodder purpose and season.",
    water: "About 3–5 mm/day; largely rainfed in many regions.",
    critical: "Establishment, booting, flowering and grain filling; protect flowering from severe stress.",
    weeds: "Common examples include Striga spp. in affected zones, Echinochloa colona, Cyperus rotundus and broadleaves. Keep clean for the first 3–5 weeks.",
    control: "Early hoeing, clean seed, rotation and locally advised Striga management. Avoid waterlogging.",
    nutrition: "Indicative N–P₂O₅–K₂O: N 40–100, P₂O₅ 20–40, K₂O 20–40 kg/ha. Apply P/K basally; split N by rainfall, soil and local rainfed/irrigated schedule.",
    harvest: "Often about 90–130 days by variety. Harvest when panicles and grain are mature/hard; dry before storage.",
    yield: "Indicative 1.5–4 t grain/ha; fodder yield is additional and system-dependent."
  },
  {
    id: "pearl-millet-bajra",
    crop: "Pearl millet (bajra)",
    group: "Millets",
    scientific: "Cenchrus americanus (L.) Morrone",
    origin: "West African Sahel",
    soil: "Light to medium, well-drained soils; pH about 6.0–8.5. Hot, semi-arid adapted; does not tolerate waterlogging.",
    planting: "Mainly kharif, typically June–July after effective rain; summer in irrigated zones.",
    sowing: "Line sow and thin to the locally recommended stand; select a variety for the region and grain/fodder purpose.",
    water: "About 2–5 mm/day; largely rainfall-dependent.",
    critical: "Establishment, flowering and grain filling. Avoid stress at flowering if possible.",
    weeds: "Common examples include Striga spp. in affected zones, Cyperus rotundus, Digitaria spp. and other annual grasses/broadleaves; the first 2–5 weeks are critical.",
    control: "Thin and intercultivate early; rotate crops and manage Striga using local recommendations.",
    nutrition: "Indicative N–P₂O₅–K₂O: N 40–80, P₂O₅ 20–40, K₂O 20–40 kg/ha; split N by rainfall and soil, with P basal.",
    harvest: "Often about 75–110 days. Harvest when earheads are dry and grains hard.",
    yield: "Indicative 1.5–3 t grain/ha."
  },
  {
    id: "finger-millet-ragi",
    crop: "Finger millet (ragi)",
    group: "Millets",
    scientific: "Eleusine coracana (L.) Gaertn.",
    origin: "East African highlands",
    soil: "Well-drained red loam to clay loam; pH about 5.0–7.5. Warm, moderate-rainfall conditions; drainage is needed.",
    planting: "Kharif commonly June–August; rabi/summer in selected irrigated zones.",
    sowing: "Direct sow or transplant seedlings where locally established; maintain a uniform stand.",
    water: "About 3–5 mm/day.",
    critical: "Establishment, tillering, flowering and grain filling; protect flowering from drought.",
    weeds: "Common examples include Echinochloa colona, Digitaria spp. and Cyperus rotundus; first 3–6 weeks are especially important.",
    control: "Thin/transplant uniformly, hand weed or intercultivate early, and rotate crops.",
    nutrition: "Indicative N–P₂O₅–K₂O: N 40–80, P₂O₅ 20–40, K₂O 20–40 kg/ha. Apply P basally and split N at planting/tillering as locally advised.",
    harvest: "Often about 100–130 days. Harvest when most finger heads are brown and grains hard; dry well.",
    yield: "Indicative 1.5–3 t grain/ha."
  },
  {
    id: "small-millets",
    crop: "Small millets",
    group: "Millets",
    scientific: "Multiple species, e.g. Setaria italica, Panicum sumatrense, Paspalum scrobiculatum",
    origin: "Multiple domestication histories across Asia and Africa",
    soil: "Locally adapted, well-drained upland soils; pH and climate tolerance differ by species. Select the species/variety used in the region.",
    planting: "Mostly kharif, commonly June–July after effective rain; some species/regions use other seasons.",
    sowing: "Use clean seed and line sowing where feasible for uniform spacing and easier early weeding; follow species-specific seed depth and rate.",
    water: "About 2–5 mm/day as a broad planning range; species and weather strongly affect demand.",
    critical: "Establishment, flowering and grain filling. Avoid waterlogging and severe stress at flowering.",
    weeds: "Small seedlings compete poorly with grasses and broadleaves, including Echinochloa and Digitaria spp., in the first 3–5 weeks.",
    control: "Timely shallow hand/mechanical weeding, good stand establishment, clean seed and rotation; adjust the method to the species and row spacing.",
    nutrition: "Use the species- and soil-test-based local package. A broad planning range is N 20–40, P₂O₅ 20–40, K₂O 0–20 kg/ha; avoid treating this as a universal dose.",
    harvest: "Harvest when most panicles are mature and grains hard; maturity varies substantially by species. Dry grain well before storage.",
    yield: "Yield is species- and location-specific; use the local variety benchmark."
  },
  {
    id: "chickpea-gram",
    crop: "Chickpea (gram)",
    group: "Pulses",
    scientific: "Cicer arietinum L.",
    origin: "Fertile Crescent / Southwest Asia",
    soil: "Well-drained loam to clay loam; pH about 6.0–8.0. Cool, dry rabi season.",
    planting: "Commonly October–November after monsoon, using conserved soil moisture; regional timing differs.",
    sowing: "Line sow into moist soil, typically about 5–8 cm deep in suitable soil. Use a variety and seed treatment recommended locally.",
    water: "About 2–4 mm/day.",
    critical: "Branching/pre-flowering, flowering and pod filling. One or two timely irrigations can help where water is available; avoid waterlogging.",
    weeds: "Common examples include Chenopodium album, Phalaris minor and Fumaria parviflora; first 30–45 days are critical.",
    control: "Early hand/mechanical weeding; avoid damaging roots. Maintain clean seed and rotate crops.",
    nutrition: "Indicative N–P₂O₅–K₂O: N 15, P₂O₅ 30, K₂O 20–40 kg/ha. Modest starter N; basal P/K by soil test; compatible Rhizobium/PSB inoculation where advised.",
    harvest: "Often about 100–150 days. Harvest when most plants yellow and pods dry; avoid shattering and store dry seed safely.",
    yield: "Indicative 1–2 t seed/ha."
  },
  {
    id: "pigeonpea-arhar-tur",
    crop: "Pigeonpea (arhar / tur)",
    group: "Pulses",
    scientific: "Cajanus cajan (L.) Millsp.",
    origin: "Indian subcontinent",
    soil: "Deep, well-drained loam; pH about 6.0–7.5. Warm, long season; sensitive to waterlogging.",
    planting: "Kharif, commonly June–July. Long-duration crops may be intercropped under local recommendations.",
    sowing: "Line sow at locally recommended spacing; select variety duration to fit the cropping system and rainfall.",
    water: "About 3–5 mm/day.",
    critical: "Flowering and pod formation/filling; drain excess monsoon water.",
    weeds: "Common examples include Cyperus rotundus, Cynodon dactylon, Digitaria spp. and broadleaves; first 6–8 weeks matter because early crop growth is slow.",
    control: "Early hoeing/hand weeding, rotation and suitable intercrop layout; avoid root injury during later operations.",
    nutrition: "Indicative N–P₂O₅–K₂O: N 15, P₂O₅ 30, K₂O 20–40 kg/ha. Apply P basally, modest starter N, and compatible Rhizobium where recommended.",
    harvest: "Long-duration crop often takes about 150–240 days. Harvest when most pods turn brown and seeds are hard; pick in stages if maturity is uneven.",
    yield: "Indicative 1–2 t seed/ha."
  },
  {
    id: "lentil-masoor",
    crop: "Lentil (masoor)",
    group: "Pulses",
    scientific: "Lens culinaris Medik.",
    origin: "Fertile Crescent / Southwest Asia",
    soil: "Well-drained loam to clay loam; approximately pH 6.0–8.0. Cool rabi climate; avoid waterlogging.",
    planting: "Rabi, commonly October–November in northern/central areas; exact window depends on location and variety.",
    sowing: "Line sow at locally recommended spacing and depth into conserved moisture; use clean seed and suitable maturity.",
    water: "About 2–4 mm/day.",
    critical: "Branching, flowering and pod filling. If irrigation is available, time it to local soil moisture and flowering/pod development; avoid excess water.",
    weeds: "Common examples include Chenopodium album, Phalaris minor and Melilotus spp.; first 30–45 days are important.",
    control: "Use clean seed, early hand/mechanical weeding and rotation. Avoid late cultivation that damages roots.",
    nutrition: "Indicative N–P₂O₅–K₂O: N 10–20, P₂O₅ 30–40, K₂O 20–30 kg/ha. Modest starter N; adjust P/K and inoculation to soil test/local recommendation.",
    harvest: "Often about 100–140 days. Harvest when most pods are straw-coloured and seed is firm, before shattering.",
    yield: "Indicative 0.8–1.6 t seed/ha; verify local variety benchmarks."
  },
  {
    id: "mungbean-green-gram-and-urdbean-black-gram",
    crop: "Mungbean (green gram) / urdbean (black gram)",
    group: "Pulses",
    scientific: "Vigna radiata (L.) R.Wilczek / Vigna mungo (L.) Hepper",
    origin: "Indian subcontinent",
    soil: "Well-drained loam; pH about 6.0–7.5. Warm conditions; avoid standing water and heavy rain during flowering.",
    planting: "Kharif usually June–July; summer crops commonly February–April with assured irrigation; regional rabi crops also occur.",
    sowing: "Line sow shallowly into moist soil; use species- and season-appropriate varieties and spacing.",
    water: "About 2–4 mm/day.",
    critical: "Flowering and pod filling; avoid waterlogging at every stage.",
    weeds: "Common examples include Cyperus rotundus, Echinochloa colona, Digitaria spp. and Amaranthus viridis; first 20–35 days are critical.",
    control: "Early shallow weeding, crop rotation, clean seed and a uniform stand. Use compatible Rhizobium/PSB inoculants where recommended.",
    nutrition: "Indicative N–P₂O₅–K₂O: N 15, P₂O₅ 25, K₂O 15–30 kg/ha. Modest starter N; basal P/K by soil test; inoculant is host-specific.",
    harvest: "Often about 60–100 days, depending on species/variety. Harvest when most pods are mature but before widespread shattering; use more than one pass if needed.",
    yield: "Indicative 0.6–1.2 t seed/ha."
  },
  {
    id: "fodder-sorghum-forage-maize-pearl-millet",
    crop: "Fodder sorghum / forage maize / pearl millet",
    group: "Forage",
    scientific: "Sorghum bicolor / Zea mays / Cenchrus americanus",
    origin: "Northeast Africa / Mexico / West African Sahel, respectively",
    soil: "Fertile, well-drained soils; generally pH 5.5–8.0. Warm season; avoid waterlogging.",
    planting: "Kharif, rabi or summer depending on species and zone. Summer fodder requires assured irrigation.",
    sowing: "Line sow for a uniform stand and efficient cutting; choose forage variety and locally recommended seed rate.",
    water: "About 3–6 mm/day; forage maize often toward the upper end in hot weather.",
    critical: "Establishment, rapid leaf/stem growth and regrowth after cutting.",
    weeds: "Common examples include Echinochloa colona, Cyperus rotundus and Amaranthus viridis; first 3–5 weeks are critical.",
    control: "Clean seedbed and early interculture. Plan cuts to preserve regrowth; avoid soil contamination in harvested forage.",
    nutrition: "Indicative basal N–P₂O₅–K₂O: 40–80–40 kg/ha. Additional N after cuts may be needed; exact need depends on species, cut schedule, manure and soil test.",
    harvest: "Sorghum/pearl millet: usually before or at early flowering for quality. Maize: dough stage for silage, earlier for green fodder. Sorghum may present prussic-acid/nitrate risk when young or drought-stressed; follow local feeding guidance.",
    yield: "Indicative 25–50 t fresh fodder/ha per crop/cut-system; highly variable."
  },
  {
    id: "cowpea-fodder",
    crop: "Cowpea (fodder)",
    group: "Forage",
    scientific: "Vigna unguiculata (L.) Walp.",
    origin: "Africa",
    soil: "Well-drained loam; pH about 5.5–7.5. Warm season; drought tolerant after establishment but sensitive to waterlogging.",
    planting: "Kharif or summer; summer requires irrigation.",
    sowing: "Line sow alone or in a locally recommended cereal-legume mixture.",
    water: "About 2–4 mm/day.",
    critical: "Establishment and flowering/pod formation. Avoid waterlogging.",
    weeds: "Common examples include Cynodon dactylon, Cyperus rotundus and Trianthema portulacastrum; first 3–5 weeks are important.",
    control: "Weed early; use clean seed and a compatible cowpea Rhizobium inoculant where recommended.",
    nutrition: "Indicative N–P₂O₅–K₂O: N 15–25, P₂O₅ 15–30, K₂O 15–30 kg/ha. Use modest N and soil-test-based P/K.",
    harvest: "Cut at early flowering to early pod stage for quality; timing shifts with variety and use.",
    yield: "Indicative 15–30 t fresh forage/ha."
  },
  {
    id: "berseem-egyptian-clover",
    crop: "Berseem (Egyptian clover)",
    group: "Forage",
    scientific: "Trifolium alexandrinum L.",
    origin: "Eastern Mediterranean / Southwest Asia",
    soil: "Fertile, moisture-retentive but drained loam; pH about 6.5–8.0. Poor on strongly acidic or waterlogged soils.",
    planting: "Rabi, commonly October–November in north India; use the regional sowing window.",
    sowing: "Broadcast or line sow into a fine, moist seedbed at the local seed rate.",
    water: "About 3–5 mm/day; maintain moisture for establishment and after each cut.",
    critical: "Uniform establishment and regrowth after each cut; avoid drying the seed zone during establishment.",
    weeds: "Common examples include Phalaris minor, Chenopodium album and wild oat; first 3–5 weeks are critical.",
    control: "Fine seedbed, clean seed, timely first irrigation and early weeding improve crop competition. Inoculate with suitable Rhizobium where advised.",
    nutrition: "Indicative basal N–P₂O₅–K₂O: 20–40–20 to 40 kg/ha. Add nutrients only from soil test and cut-system recommendations.",
    harvest: "First cut commonly 50–60 days after sowing; later cuts follow local intervals and should be taken before excessive flowering.",
    yield: "Indicative 60–100 t green forage/ha over multiple cuts."
  },
  {
    id: "oats-fodder",
    crop: "Oats (fodder)",
    group: "Forage",
    scientific: "Avena sativa L.",
    origin: "Fertile Crescent / Southwest Asia",
    soil: "Well-drained loam; pH about 5.5–7.5. Cool rabi climate.",
    planting: "Rabi, commonly October–November.",
    sowing: "Line sow into a fine, moist seedbed using local seed-rate and spacing recommendations.",
    water: "About 3–5 mm/day; irrigate by soil moisture and growth.",
    critical: "Establishment, rapid growth and regrowth after cutting.",
    weeds: "Common examples include Phalaris minor, wild oat, Chenopodium album and Cynodon dactylon; first 3–5 weeks are important.",
    control: "Prepare a clean seedbed and hand/mechanically weed early; manage irrigation after each cut for regrowth.",
    nutrition: "Indicative N–P₂O₅–K₂O: N 40–80, P₂O₅ 40–80, K₂O 30–40 kg/ha. Split N after cutting as locally advised.",
    harvest: "Cut at boot/early flowering for quality or later for more bulk; number of cuts depends on variety and season.",
    yield: "Indicative 30–60 t green forage/ha across one or more cuts."
  },
  {
    id: "lucerne-alfalfa",
    crop: "Lucerne (alfalfa)",
    group: "Forage",
    scientific: "Medicago sativa L.",
    origin: "Central Asia / Southwest Asia",
    soil: "Deep, well-drained, non-acid soil; pH about 6.5–8.0. Perennial in suitable mild climates; intolerant of prolonged waterlogging.",
    planting: "Autumn or spring establishment depending on region; use local perennial-forage calendar.",
    sowing: "Fine, firm seedbed and shallow sowing; clean seed and good establishment are important.",
    water: "About 3–6 mm/day during active growth; irrigate after cuts and during regrowth without saturating soil.",
    critical: "Establishment and regrowth following each cut.",
    weeds: "Early weeds are serious because lucerne establishes slowly; common examples include Chenopodium album, Phalaris minor and Cynodon dactylon.",
    control: "Use a stale seedbed where practical, clean seed, line sowing and early weeding; maintain drainage.",
    nutrition: "Apply basal P/K according to soil test. Modest starter N only if locally advised; compatible lucerne Rhizobium inoculation and pH correction may be important.",
    harvest: "Cut at early bud to about 10% flowering to balance quality and persistence; avoid cutting too low or too frequently.",
    yield: "Indicative 40–80 t green forage/ha/year under suitable multi-cut irrigated management."
  }
];

const groups = ["All", "Oilseeds", "Cereals", "Millets", "Pulses", "Commercial", "Forage"];
const list = document.querySelector("#practice-list");
const search = document.querySelector("#practice-search");
const filters = document.querySelector("#practice-filters");
const indexLinks = document.querySelector("#practice-index-links");
let selectedGroup = "All";

const practiceRows = [
  ["Scientific name · origin", (guide) => `${guide.scientific} — ${guide.origin}`],
  ["Soil · pH · climate", (guide) => guide.soil],
  ["Planting season · months", (guide) => guide.planting],
  ["Sowing method", (guide) => guide.sowing],
  ["Water requirement", (guide) => guide.water],
  ["Critical irrigation stages", (guide) => guide.critical],
  ["Weeds · critical competition", (guide) => guide.weeds],
  ["Weed control · special practices", (guide) => guide.control],
  ["Nutrition · dose · application stage", (guide) => guide.nutrition],
  ["Harvest period · harvest signs", (guide) => guide.harvest],
  ["Indicative yield / productivity", (guide) => guide.yield]
];

function createPracticeCard(guide) {
  const article = document.createElement("article");
  article.className = "practice-card";
  article.id = guide.id;

  const header = document.createElement("header");
  header.className = "practice-card-header";
  const titleWrap = document.createElement("div");
  const group = document.createElement("p");
  group.className = "practice-group";
  group.textContent = guide.group;
  const title = document.createElement("h2");
  title.textContent = guide.crop;
  titleWrap.append(group, title);
  const topLink = document.createElement("a");
  topLink.href = "#main";
  topLink.className = "practice-top-link";
  topLink.textContent = "Back to index ↑";
  header.append(titleWrap, topLink);

  const table = document.createElement("table");
  table.className = "practice-table";
  const caption = document.createElement("caption");
  caption.textContent = `${guide.crop} field checklist`;
  table.append(caption);
  const body = document.createElement("tbody");
  practiceRows.forEach(([label, getValue]) => {
    const row = document.createElement("tr");
    const heading = document.createElement("th");
    heading.scope = "row";
    heading.textContent = label;
    const value = document.createElement("td");
    value.textContent = getValue(guide);
    row.append(heading, value);
    body.append(row);
  });
  table.append(body);
  article.append(header, table);
  return article;
}

function renderPracticeIndex(guides) {
  indexLinks.replaceChildren();
  guides.forEach((guide) => {
    const link = document.createElement("a");
    link.href = `#${guide.id}`;
    link.textContent = guide.crop;
    indexLinks.append(link);
  });
}

function renderPractices() {
  const query = search.value.trim().toLocaleLowerCase();
  const matches = practiceGuides.filter((guide) => {
    const inGroup = selectedGroup === "All" || guide.group === selectedGroup;
    const terms = Object.values(guide).join(" ").toLocaleLowerCase();
    return inGroup && terms.includes(query);
  });
  list.replaceChildren(...matches.map(createPracticeCard));
  renderPracticeIndex(matches);
  document.querySelector("#practice-count").textContent = String(matches.length);
  document.querySelector("#practice-total").textContent = String(practiceGuides.length);
  document.querySelector("#practice-empty").hidden = matches.length > 0;
  if (location.hash) {
    const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target) requestAnimationFrame(() => target.scrollIntoView({ block: "start" }));
  }
}

function renderPracticeFilters() {
  groups.forEach((group) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "filter-button";
    button.textContent = group;
    button.setAttribute("aria-pressed", String(group === selectedGroup));
    button.addEventListener("click", () => {
      selectedGroup = group;
      filters.querySelectorAll("button").forEach((item) => {
        item.setAttribute("aria-pressed", String(item.textContent === selectedGroup));
      });
      renderPractices();
    });
    filters.append(button);
  });
}

search.addEventListener("input", renderPractices);
renderPracticeFilters();
renderPractices();
