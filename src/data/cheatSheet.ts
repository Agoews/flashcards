export type CheatSheetNote = {
  title: string;
  description: string;
  keyPoints?: string[];
  formula?: string;
};

export type CheatSheetSection = {
  id: string;
  chapter: string;
  title: string;
  summary: string;
  focus: string[];
  notes: CheatSheetNote[];
};

export const cheatSheetSections: CheatSheetSection[] = [
  {
    id: "ch1-the-chemical-world",
    chapter: "Chapter 1 — The Chemical World",
    title: "Measurements, Matter, and Problem-Solving",
    summary:
      "Build a reliable foundation: classify matter, use SI units, convert units with dimensional analysis, and report answers with correct significant figures.",
    focus: [
      "Classify matter: element / compound / mixture (homogeneous vs heterogeneous)",
      "Use SI units + prefixes confidently",
      "Dimensional analysis (factor-label) for conversions",
      "Density, temperature conversion, significant figures",
    ],
    notes: [
      {
        title: "Matter Classification",
        description:
          "Matter can be a pure substance (element or compound) or a mixture (homogeneous or heterogeneous).",
        keyPoints: [
          "Element: one type of atom",
          "Compound: fixed ratio of elements",
          "Mixture: variable composition; physical separation possible",
        ],
      },
      {
        title: "Physical vs Chemical Properties and Changes",
        description:
          "Physical properties/changes do not alter chemical identity; chemical properties/changes do.",
        keyPoints: [
          "Physical change: phase change, dissolving (often), cutting",
          "Chemical change: produces new substances (reaction)",
          "Intensive properties don’t depend on amount (density, temperature)",
          "Extensive properties depend on amount (mass, volume)",
        ],
      },
      {
        title: "Dimensional Analysis (Factor-Label Method)",
        description:
          "Convert units by multiplying by conversion factors so unwanted units cancel.",
        keyPoints: [
          "Write what you have → multiply by equivalences → cancel units → get target units",
          "Keep track of units at every step (units are your error-check)",
        ],
        formula:
          "given × (desired/given) × (desired/given) × ... = answer",
      },
      {
        title: "Density",
        description:
          "Density connects mass and volume; common in lab calculations and unit conversions.",
        keyPoints: [
          "If you know any two of (mass, volume, density), you can solve for the third",
        ],
        formula: "density (d) = mass (m) / volume (V)",
      },
      {
        title: "Temperature Conversions",
        description:
          "Kelvin is the SI base unit for temperature; gas laws and many formulas require K.",
        keyPoints: [
          "Always convert °C to K when required by formulas (especially gases)",
        ],
        formula: "K = °C + 273.15;  °C = (°F − 32) / 1.8",
      },
      {
        title: "Significant Figures (Core Rules)",
        description:
          "Report results to reflect measurement precision; track sig figs in calculations.",
        keyPoints: [
          "Multiplication/division: fewest sig figs among inputs",
          "Addition/subtraction: fewest decimal places among inputs",
          "Exact numbers (defined counts, conversion factors) don’t limit sig figs",
        ],
      },
    ],
  },

  {
    id: "ch2-atoms-molecules-ions",
    chapter: "Chapter 2 — Atoms, Molecules, and Ions",
    title: "Atomic Structure, Isotopes, and Ions",
    summary:
      "Connect periodic table structure to protons/neutrons/electrons, isotopes, and common ion charges for naming and formulas.",
    focus: [
      "Atomic number (Z), mass number (A), isotopes",
      "Ions: cations vs anions; electron counting with charge",
      "Periodic table regions: metals, nonmetals, metalloids",
      "Main-group ion charges (1A–8A patterns)",
    ],
    notes: [
      {
        title: "Atomic Number vs Mass Number",
        description:
          "Atomic number (Z) identifies the element; mass number (A) counts nucleons.",
        keyPoints: [
          "Z = # protons",
          "A = # protons + # neutrons",
          "neutrons = A − Z",
        ],
        formula: "n = A − Z",
      },
      {
        title: "Isotopes",
        description:
          "Isotopes are atoms of the same element (same Z) with different numbers of neutrons.",
        keyPoints: [
          "Isotopes differ in mass, not identity",
          "Atomic mass on the periodic table reflects a weighted average",
        ],
      },
      {
        title: "Ions and Electron Counting",
        description:
          "Charge comes from gaining or losing electrons relative to neutral atoms.",
        keyPoints: [
          "cation (+): lost electrons",
          "anion (−): gained electrons",
          "electrons in ion = Z − (positive charge) OR Z + (magnitude of negative charge)",
        ],
      },
      {
        title: "Common Main-Group Ion Charges",
        description:
          "Main-group elements often form predictable ionic charges to reach noble-gas configurations.",
        keyPoints: [
          "Group 1A → +1",
          "Group 2A → +2",
          "Group 3A (13) → +3 (common pattern)",
          "Group 5A (15) → −3",
          "Group 6A (16) → −2",
          "Group 7A (17) → −1",
          "Group 8A (18) → 0 (generally no ions)",
        ],
      },
      {
        title: "Metals, Nonmetals, Metalloids",
        description:
          "Element types correlate with conductivity and typical bonding/ion formation behavior.",
        keyPoints: [
          "Metals: conductive, malleable/ductile; tend to form cations",
          "Nonmetals: poorer conductors; tend to form anions or covalent bonds",
          "Metalloids: intermediate properties; near the staircase line",
        ],
      },
    ],
  },

  {
    id: "ch3-molecules-compounds-equations",
    chapter: "Chapter 3 — Molecules, Compounds, and Chemical Equations",
    title: "Formulas, Naming, and Composition Calculations",
    summary:
      "Translate between names and formulas, interpret equations, and compute molar mass, percent composition, and empirical formulas.",
    focus: [
      "Chemical formulas (molecular vs ionic) and equation meaning",
      "Molar mass / formula mass",
      "Percent composition",
      "Empirical vs molecular formula",
    ],
    notes: [
      {
        title: "Chemical Formulas",
        description:
          "Formulas communicate atom types and counts; ionic formulas give lowest whole-number ratios.",
        keyPoints: [
          "Molecular compounds: actual numbers of atoms in a molecule",
          "Ionic compounds: simplest ratio of ions (formula unit)",
        ],
      },
      {
        title: "Molar Mass (Formula Mass)",
        description:
          "Sum atomic masses according to subscripts; used for grams ↔ moles conversions.",
        keyPoints: [
          "Include parentheses: multiply inside counts by outside subscripts",
          "Units: g/mol",
        ],
        formula: "molar mass = Σ (atomic mass × atom count in formula)",
      },
      {
        title: "Percent Composition",
        description:
          "Compute the mass percent of each element in a compound from the formula.",
        keyPoints: [
          "Find mass contribution of each element in 1 mol compound",
          "Divide by total molar mass × 100%",
        ],
        formula:
          "% element = (mass of element in 1 mol compound / molar mass of compound) × 100",
      },
      {
        title: "Empirical Formula from Percent Composition",
        description:
          "Convert % → moles → simplest whole-number ratio.",
        keyPoints: [
          "Assume 100 g sample (so % becomes grams)",
          "Convert grams to moles for each element",
          "Divide all by the smallest mole amount",
          "Scale to whole numbers (×2, ×3, …) if needed",
        ],
      },
      {
        title: "Molecular Formula from Empirical Formula",
        description:
          "Use molar mass to scale an empirical formula to the true molecular formula.",
        keyPoints: [
          "Find empirical formula mass",
          "n = (molar mass)/(empirical formula mass)",
          "Multiply all subscripts by n",
        ],
        formula: "n = M / (empirical formula mass)",
      },
    ],
  },

  {
    id: "ch4-chemical-quantities-reactions",
    chapter: "Chapter 4 — Chemical Quantities and Chemical Reactions",
    title: "Stoichiometry, Limiting Reactants, and Yield",
    summary:
      "Balance equations, convert between grams/moles/particles, and predict amounts using mole ratios—then handle limiting reactants and percent yield.",
    focus: [
      "Balancing equations and mole ratios",
      "Mass ↔ moles conversions",
      "Limiting reactant logic",
      "Theoretical yield vs actual yield vs percent yield",
    ],
    notes: [
      {
        title: "Balanced Chemical Equations",
        description:
          "A balanced equation has the same number of each atom on both sides.",
        keyPoints: [
          "Balance by adjusting coefficients only (never change subscripts)",
          "Coefficients represent relative mole amounts",
        ],
      },
      {
        title: "Stoichiometry Workflow",
        description:
          "Use the balanced equation to convert between reactants and products via mole ratios.",
        keyPoints: [
          "Convert given quantity to moles",
          "Apply mole ratio from coefficients",
          "Convert moles to target unit (grams, molecules, liters if gas at conditions)",
        ],
        formula: "given → moles → mole ratio → moles → desired unit",
      },
      {
        title: "Limiting Reactant",
        description:
          "The limiting reactant is consumed first and determines the theoretical yield.",
        keyPoints: [
          "Compute product possible from each reactant",
          "Smaller product amount identifies the limiting reactant",
          "Excess reactant remains after reaction",
        ],
      },
      {
        title: "Yield Calculations",
        description:
          "Compare actual product obtained to the theoretical maximum from stoichiometry.",
        keyPoints: [
          "Theoretical yield: from limiting reactant stoichiometry",
          "Actual yield: measured experimentally",
        ],
        formula: "% yield = (actual yield / theoretical yield) × 100",
      },
    ],
  },

  {
    id: "ch5-reaction-classification-balancing",
    chapter: "Chapter 5 — Chemical Reactions: Classification and Balancing",
    title: "Aqueous Reactions, Net Ionic, Acid–Base, and Redox",
    summary:
      "Recognize reaction types, write complete ionic and net ionic equations, handle acid–base neutralizations and titrations, and track electron transfer with oxidation states.",
    focus: [
      "Precipitation reactions and solubility-driven products",
      "Complete ionic vs net ionic equations (spectator ions)",
      "Acid–base reactions; titration at equivalence",
      "Oxidation numbers; identifying redox; activity series idea",
    ],
    notes: [
      {
        title: "Precipitation Reactions (Aqueous)",
        description:
          "Some ion combinations form an insoluble solid (a precipitate) in water.",
        keyPoints: [
          "Write correct ionic charges first",
          "Predict products by swapping ions (then apply solubility rules)",
          "A precipitate is written as (s)",
        ],
      },
      {
        title: "Net Ionic Equations",
        description:
          "Show only species that actually change; remove spectator ions.",
        keyPoints: [
          "Write molecular equation",
          "Dissociate strong electrolytes into ions",
          "Cancel spectators → net ionic",
        ],
      },
      {
        title: "Acid–Base Reactions (Neutralization)",
        description:
          "Acid donates H+ (or forms H3O+), base accepts H+ (or provides OH−).",
        keyPoints: [
          "Strong acid + strong base → water + salt",
          "At equivalence in titration: stoichiometric moles react exactly",
        ],
      },
      {
        title: "Oxidation Numbers and Redox ID",
        description:
          "Redox reactions involve changes in oxidation state (electron transfer).",
        keyPoints: [
          "Oxidation: oxidation number increases (loses e−)",
          "Reduction: oxidation number decreases (gains e−)",
          "Track which element changes oxidation state to identify redox",
        ],
      },
    ],
  },

  {
    id: "ch6-gases",
    chapter: "Chapter 6 — Gases",
    title: "Gas Laws, Partial Pressures, and Molar Volume Logic",
    summary:
      "Model gases with ideal-gas relationships, connect P–V–T–n changes, and handle mixtures with partial pressures and mole fraction.",
    focus: [
      "Boyle, Charles, Avogadro, combined gas law",
      "Ideal gas law PV = nRT",
      "Dalton’s law of partial pressures",
      "Mole fraction and gas collection over water",
      "Graham’s law (effusion/diffusion rate ratios)",
    ],
    notes: [
      {
        title: "Core Gas Laws",
        description:
          "Simple proportionalities relate how P, V, and T change when n is constant.",
        keyPoints: [
          "Boyle: P inversely proportional to V (T constant)",
          "Charles: V proportional to T in K (P constant)",
          "Avogadro: V proportional to n (P, T constant)",
        ],
        formula:
          "Boyle: P1V1=P2V2;  Charles: V1/T1=V2/T2;  Avogadro: V1/n1=V2/n2",
      },
      {
        title: "Ideal Gas Law",
        description:
          "Use when you have a single gas state with P, V, T, and n.",
        keyPoints: [
          "T must be in Kelvin",
          "Choose R units consistent with P and V units",
        ],
        formula: "PV = nRT",
      },
      {
        title: "Dalton’s Law + Mole Fraction",
        description:
          "Total pressure is the sum of partial pressures; mole fraction links composition to pressure.",
        keyPoints: [
          "P_total = Σ P_i",
          "P_i = x_i · P_total",
          "x_i = n_i / n_total",
        ],
        formula: "P_total = ΣP_i;  x_i = n_i/n_total;  P_i = x_i·P_total",
      },
      {
        title: "Collecting Gas Over Water",
        description:
          "Subtract water vapor pressure to get the dry gas pressure.",
        keyPoints: [
          "P_gas = P_total − P_H2O",
          "Then use PV=nRT to get moles of dry gas",
        ],
        formula: "P_dry gas = P_total − P_H2O",
      },
      {
        title: "Graham’s Law (Effusion)",
        description:
          "Lighter gases effuse faster; rates scale with inverse square root of molar mass.",
        keyPoints: [
          "Compare two gases A and B via molar masses",
        ],
        formula: "rate_A / rate_B = sqrt(M_B / M_A)",
      },
    ],
  },

  {
    id: "ch7-thermochemistry",
    chapter: "Chapter 7 — Thermochemistry",
    title: "Heat, Enthalpy, Calorimetry, and Hess’s Law",
    summary:
      "Track energy flow with sign conventions, compute heat with specific heat, and link reactions to enthalpy changes using calorimetry and Hess’s law.",
    focus: [
      "System vs surroundings; energy transfer as heat (q) and work (w)",
      "Endothermic vs exothermic; enthalpy (ΔH)",
      "Calorimetry: q = mcΔT and q = CΔT",
      "Reaction heat from solution calorimetry and bomb calorimetry",
      "Hess’s law and standard enthalpy of formation (conceptual toolkit)",
    ],
    notes: [
      {
        title: "System, Surroundings, and Sign Conventions",
        description:
          "Energy changes depend on what you define as the system and how energy flows.",
        keyPoints: [
          "q > 0: system absorbs heat (endothermic)",
          "q < 0: system releases heat (exothermic)",
          "State functions depend only on initial/final states (not the path)",
        ],
      },
      {
        title: "Heat from Temperature Change",
        description:
          "Use mass and specific heat (or total heat capacity) to compute q.",
        keyPoints: [
          "ΔT = T_final − T_initial",
          "Units must be consistent (often g, °C, J)",
        ],
        formula: "q = m c ΔT;  q = C ΔT",
      },
      {
        title: "Constant-Pressure Calorimetry (Coffee-Cup)",
        description:
          "Reaction heat is the negative of heat gained/lost by solution + calorimeter.",
        keyPoints: [
          "If solution warms up: q_soln > 0, so q_rxn < 0 (exothermic)",
          "Include calorimeter heat if provided",
        ],
        formula: "q_rxn = −(q_soln + q_cal)",
      },
      {
        title: "Bomb Calorimetry (Constant Volume)",
        description:
          "Reaction heat is the negative of calorimeter heat (often via ΔT and C_cal).",
        keyPoints: [
          "Common for combustion measurements",
          "Use q_cal = C_cal·ΔT when heat capacity is given",
        ],
        formula: "q_rxn = −q_cal;  q_cal = C_cal·ΔT",
      },
      {
        title: "Hess’s Law (Reaction Enthalpy by Addition)",
        description:
          "If a target reaction can be formed by adding scaled reactions, enthalpies add the same way.",
        keyPoints: [
          "Reverse a reaction → change sign of ΔH",
          "Multiply coefficients → multiply ΔH by same factor",
          "Add steps → add ΔH values",
        ],
      },
    ],
  },
  // Chapters 8–12 (copy/paste these section objects into cheatSheetSections)

{
  id: "ch8-quantum-mechanics-atom",
  chapter: "Chapter 8 — Quantum Mechanics and the Atom",
  title: "Light, Electrons, and Quantized Energy",
  summary:
    "Use wave–particle ideas to describe light and electrons, then connect quantization to atomic spectra and orbitals.",
  focus: [
    "Electromagnetic radiation: wavelength, frequency, energy",
    "Photoelectric effect and photons",
    "de Broglie wavelength (matter waves)",
    "Uncertainty principle and orbitals",
    "Quantum numbers and orbital capacity",
  ],
  notes: [
    {
      title: "Wave Relationships",
      description:
        "Wavelength and frequency are inversely related; higher frequency means higher energy.",
      keyPoints: [
        "Shorter λ → higher ν → higher E",
        "Convert units carefully (nm ↔ m, etc.)",
      ],
      formula: "c = λν",
    },
    {
      title: "Photon Energy",
      description:
        "Light energy comes in packets (photons).",
      keyPoints: [
        "Higher frequency → more energetic photons",
        "Useful for comparing IR vs visible vs UV energy",
      ],
      formula: "E = hν",
    },
    {
      title: "Matter Waves (de Broglie)",
      description:
        "Particles (like electrons) have wave-like behavior.",
      keyPoints: [
        "Smaller mass or faster speed → shorter λ",
        "Explains electron diffraction",
      ],
      formula: "λ = h/(mv)",
    },
    {
      title: "Uncertainty Principle",
      description:
        "You can’t know an electron’s position and momentum exactly at the same time.",
      keyPoints: [
        "Leads to orbitals as probability regions",
        "Not a measurement flaw—fundamental limit",
      ],
      formula: "Δx·Δp ≥ h",
    },
    {
      title: "Quantum Numbers (Quick Map)",
      description:
        "Orbitals are labeled by n, l, m_l, and m_s.",
      keyPoints: [
        "n: energy level (1,2,3,...)",
        "l: subshell (0=s, 1=p, 2=d, 3=f)",
        "Each orbital holds 2 electrons (opposite spins)",
      ],
      formula: "max e−/orbital = 2",
    },
  ],
},

{
  id: "ch9-periodic-properties",
  chapter: "Chapter 9 — Periodic Properties of the Elements",
  title: "Trends You Use in Every Prediction",
  summary:
    "Predict size, attraction, and reactivity using effective nuclear charge, shielding, and periodic trends across groups and periods.",
  focus: [
    "Effective nuclear charge (Z_eff) and shielding",
    "Atomic/ionic radius trends",
    "Ionization energy (IE), electron affinity (EA), electronegativity (EN)",
    "Metal vs nonmetal reactivity patterns",
  ],
  notes: [
    {
      title: "Z_eff and Shielding",
      description:
        "Outer electrons feel less than the full nuclear charge because inner electrons shield.",
      keyPoints: [
        "Across a period: Z_eff increases → stronger attraction",
        "Down a group: more shells → more shielding + distance",
      ],
      formula: "Z_eff ≈ Z − S",
    },
    {
      title: "Atomic Radius Trend",
      description:
        "Atoms get smaller across a period and larger down a group.",
      keyPoints: [
        "Across: ↑ Z_eff pulls electrons in",
        "Down: higher n increases size",
      ],
    },
    {
      title: "Ionization Energy (IE)",
      description:
        "Energy required to remove an electron from a gaseous atom/ion.",
      keyPoints: [
        "Across: IE generally increases",
        "Down: IE generally decreases",
        "Big jumps after removing all valence e− (new shell)",
      ],
    },
    {
      title: "Electron Affinity vs Electronegativity",
      description:
        "EA is energy change when adding e− to a gas-phase atom; EN is a bond polarity scale.",
      keyPoints: [
        "Halogens tend to have high EA and high EN",
        "EN helps predict bond polarity (ΔEN)",
      ],
    },
    {
      title: "Coulomb Attraction (Intuition)",
      description:
        "Attraction gets stronger with higher charge and shorter distance.",
      keyPoints: [
        "Smaller radius → stronger electron–nucleus attraction",
        "Higher Z_eff → stronger attraction",
      ],
      formula: "F ∝ (q1q2)/r²",
    },
  ],
},

{
  id: "ch10-chemical-bonding-1",
  chapter: "Chapter 10 — Chemical Bonding I: Basic Concepts",
  title: "Why Atoms Bond and What Bonds Mean",
  summary:
    "Use electronegativity and energy ideas to distinguish ionic vs covalent bonding, then represent bonding with Lewis structures and formal charge.",
  focus: [
    "Ionic vs covalent bonding and bond polarity",
    "Electronegativity differences (ΔEN)",
    "Lewis structures and octet rule",
    "Formal charge as a structure check",
  ],
  notes: [
    {
      title: "Ionic vs Covalent (Fast Call)",
      description:
        "Bond type depends on how electrons are distributed between atoms.",
      keyPoints: [
        "Large ΔEN → more ionic character",
        "Small ΔEN → more covalent character",
        "Most bonds are a spectrum (polar covalent in between)",
      ],
      formula: "ΔEN = |EN1 − EN2|",
    },
    {
      title: "Lewis Structure Core Steps",
      description:
        "A repeatable workflow for drawing common molecules/ions.",
      keyPoints: [
        "Count total valence e− (adjust for charge)",
        "Build skeleton, add bonds, complete octets",
        "Place leftovers on central atom; use multiple bonds if needed",
      ],
    },
    {
      title: "Formal Charge",
      description:
        "Formal charge helps identify the most reasonable Lewis structure.",
      keyPoints: [
        "Prefer minimal formal charges",
        "Place negative FC on more electronegative atoms when possible",
      ],
      formula: "FC = V − (N + B)",
    },
    {
      title: "Bond Energy (Concept Use)",
      description:
        "Bond energy reflects bond strength; stronger bonds are harder to break.",
      keyPoints: [
        "Breaking bonds absorbs energy",
        "Forming bonds releases energy",
      ],
    },
    {
      title: "Octet Rule (With Common Exceptions)",
      description:
        "Many main-group atoms seek 8 valence electrons, but exceptions exist.",
      keyPoints: [
        "H follows duet rule (2)",
        "B/Be can be electron-deficient",
        "Period 3+ can sometimes expand octet (common bookkeeping idea)",
      ],
    },
  ],
},

{
  id: "ch11-chemical-bonding-2",
  chapter:
    "Chapter 11 — Chemical Bonding II: Molecular Shape, Valence Bond Theory, and Molecular Orbital Theory",
  title: "3D Structure: Shape → Polarity → Properties",
  summary:
    "Go from electron domains to molecular geometry (VSEPR), connect geometry to polarity, and use hybridization/MO ideas as bonding models.",
  focus: [
    "VSEPR: electron domains and molecular shapes",
    "Bond angles and lone-pair effects",
    "Polarity from geometry + bond dipoles",
    "Hybridization as a bonding model",
  ],
  notes: [
    {
      title: "Electron Domains (VSEPR)",
      description:
        "Electron groups repel; count domains around the central atom.",
      keyPoints: [
        "1 domain = 1 region (bond or lone pair)",
        "Lone pairs repel more than bonding pairs",
      ],
      formula: "domains = σ bonds + lone pairs",
    },
    {
      title: "Common Shapes (Quick List)",
      description:
        "Match domains to ideal electron geometry, then adjust for lone pairs.",
      keyPoints: [
        "2: linear",
        "3: trigonal planar",
        "4: tetrahedral",
        "5: trigonal bipyramidal",
        "6: octahedral",
      ],
    },
    {
      title: "Hybridization Shortcuts",
      description:
        "Hybridization labels match the number of electron domains (as a model).",
      keyPoints: [
        "2 domains → sp",
        "3 domains → sp2",
        "4 domains → sp3",
      ],
      formula: "2→sp, 3→sp2, 4→sp3",
    },
    {
      title: "Molecular Polarity",
      description:
        "A molecule is polar if bond dipoles don’t cancel by symmetry.",
      keyPoints: [
        "Polar bonds can still make a nonpolar molecule (symmetry)",
        "Check shape + identical outer atoms",
      ],
    },
    {
      title: "Resonance (Meaning)",
      description:
        "Some molecules are best represented by multiple valid Lewis structures.",
      keyPoints: [
        "Atoms stay fixed; electrons move",
        "Hybrid is more stable than any single structure",
      ],
    },
  ],
},

{
  id: "ch12-liquids-solids-imfs",
  chapter: "Chapter 12 — Liquids, Solids, and Intermolecular Forces",
  title: "IMFs Drive Boiling, Melting, and Phase Behavior",
  summary:
    "Explain physical properties by comparing intermolecular forces, then connect IMFs to phase changes, vapor pressure, and structure in liquids/solids.",
  focus: [
    "Intermolecular forces: dispersion, dipole–dipole, H-bonding",
    "Vapor pressure, boiling point, melting point",
    "Heating/cooling curves and phase-change energy",
    "Viscosity, surface tension, capillary action",
  ],
  notes: [
    {
      title: "Intermolecular Forces (Rank)",
      description:
        "Different attractions between molecules strongly affect boiling/melting and flow.",
      keyPoints: [
        "Dispersion: in all substances (stronger with larger/longer molecules)",
        "Dipole–dipole: polar molecules",
        "H-bonding: H with N, O, or F (strong special case)",
      ],
    },
    {
      title: "IMFs and Boiling Point",
      description:
        "Stronger IMFs generally raise boiling and melting points.",
      keyPoints: [
        "Higher IMF → lower vapor pressure at a given T",
        "Boiling occurs when vapor pressure equals external pressure",
      ],
    },
    {
      title: "Phase Change Energy",
      description:
        "During phase changes, temperature stays constant while energy changes the phase.",
      keyPoints: [
        "Melting/freezing uses ΔH_fus",
        "Vaporization/condensation uses ΔH_vap",
      ],
      formula: "q = nΔH",
    },
    {
      title: "Heating Curve Toolkit",
      description:
        "Use q = mcΔT on sloped regions and q = nΔH on flat regions.",
      keyPoints: [
        "Sloped: temperature changes (single phase)",
        "Flat: phase change (two phases present)",
      ],
      formula: "q = mcΔT",
    },
    {
      title: "Viscosity and Surface Tension",
      description:
        "IMFs influence resistance to flow and the “tightness” of a liquid surface.",
      keyPoints: [
        "Stronger IMFs → higher viscosity, higher surface tension (general trend)",
        "Capillary action depends on adhesion vs cohesion",
      ],
    },
  ],
},
// Chapters 13–17 (copy/paste these section objects into cheatSheetSections)

{
  id: "ch13-solids-modern-materials",
  chapter: "Chapter 13 — Solids and Modern Materials",
  title: "Structures, Bonding Types, and Material Properties",
  summary:
    "Connect solid structure (ionic, molecular, metallic, covalent-network) to conductivity, hardness, melting point, and modern material applications.",
  focus: [
    "Types of solids: ionic, molecular, metallic, covalent-network",
    "Crystalline vs amorphous",
    "Unit cells and packing ideas",
    "Band model: conductors, semiconductors, insulators",
    "Alloys and modern materials overview",
  ],
  notes: [
    {
      title: "4 Major Solid Types",
      description:
        "Solid properties largely come from what particles they contain and how strongly they’re held together.",
      keyPoints: [
        "Ionic: ions; high mp; brittle; conduct when molten/aqueous",
        "Molecular: molecules; lower mp; softer; poor conductors",
        "Metallic: metal atoms + delocalized e−; conductive; malleable",
        "Covalent-network: atoms bonded in network; very high mp; very hard",
      ],
    },
    {
      title: "Crystalline vs Amorphous",
      description:
        "Crystalline solids have long-range order; amorphous solids lack it.",
      keyPoints: [
        "Crystalline: sharp melting point",
        "Amorphous: soften over a range (glass-like behavior)",
      ],
    },
    {
      title: "Unit Cell Vocabulary",
      description:
        "Crystals can be described by repeating unit cells.",
      keyPoints: [
        "Unit cell is the smallest repeating 3D pattern",
        "Packing efficiency helps explain density trends",
      ],
    },
    {
      title: "Band Model (Big Picture)",
      description:
        "Electrical behavior depends on energy gaps between filled and empty states.",
      keyPoints: [
        "Conductor: small/overlapping gap",
        "Insulator: large gap",
        "Semiconductor: intermediate gap; doping changes conductivity",
      ],
    },
    {
      title: "Alloys (Why Mix Metals?)",
      description:
        "Alloys tune strength, corrosion resistance, and other properties.",
      keyPoints: [
        "Substitutional vs interstitial alloy idea",
        "Property tuning is the main point (not a new compound in fixed ratio)",
      ],
    },
  ],
},

{
  id: "ch14-solutions",
  chapter: "Chapter 14 — Solutions",
  title: "Concentration, Solubility, and Colligative Effects",
  summary:
    "Predict dissolving behavior, compute concentrations, and explain colligative properties using particle counting ideas.",
  focus: [
    "Solution components: solute, solvent",
    "Solubility and “like dissolves like”",
    "Concentration: molarity and dilutions",
    "Precipitation prediction using ion mixing logic",
    "Colligative properties (concept toolkit)",
  ],
  notes: [
    {
      title: "Solution Basics",
      description:
        "A solution is a homogeneous mixture of solute in solvent.",
      keyPoints: [
        "Solvent is the majority component",
        "Electrolytes form ions in solution; nonelectrolytes don’t",
      ],
    },
    {
      title: "Molarity (Most Used Concentration)",
      description:
        "Molarity is moles of solute per liter of solution.",
      keyPoints: [
        "Always convert mL → L before calculating M",
        "M is about solution volume, not solvent volume",
      ],
      formula: "M = n / V",
    },
    {
      title: "Dilution",
      description:
        "Dilution keeps moles of solute constant while volume changes.",
      keyPoints: [
        "Use when adding solvent to a stock solution",
        "Works for mixing by volume when no reaction occurs",
      ],
      formula: "M1V1 = M2V2",
    },
    {
      title: "Solubility (Fast Prediction)",
      description:
        "Solubility depends on IMF similarity and (for ionic) hydration vs lattice.",
      keyPoints: [
        "Polar dissolves polar; nonpolar dissolves nonpolar",
        "Higher temperature often increases solubility of solids (general trend)",
        "Gases: higher pressure increases solubility; higher T decreases it",
      ],
    },
    {
      title: "Colligative Properties (Idea)",
      description:
        "Some properties depend on number of dissolved particles, not identity.",
      keyPoints: [
        "More particles → bigger effect",
        "Electrolytes matter more because they dissociate (particle count increases)",
      ],
    },
  ],
},

{
  id: "ch15-chemical-kinetics",
  chapter: "Chapter 15 — Chemical Kinetics",
  title: "Rates, Rate Laws, and Activation Energy",
  summary:
    "Describe how fast reactions proceed, extract a rate law from data, and connect rate changes to collisions and activation energy.",
  focus: [
    "Reaction rate and rate expressions",
    "Rate law form and reaction order",
    "Integrated rate laws (common patterns)",
    "Half-life logic",
    "Arrhenius idea: temperature and activation energy",
  ],
  notes: [
    {
      title: "Reaction Rate (Definition)",
      description:
        "Rate tracks concentration change over time for reactants/products.",
      keyPoints: [
        "Reactant concentration decreases; product increases",
        "Units often M/s",
      ],
      formula: "rate = −Δ[react]/Δt",
    },
    {
      title: "Rate Law (From Experiment)",
      description:
        "Rate law relates rate to reactant concentrations raised to powers.",
      keyPoints: [
        "Orders are found experimentally (not from coefficients)",
        "Overall order is sum of exponents",
      ],
      formula: "rate = k[A]^m[B]^n",
    },
    {
      title: "Integrated Rate Laws (Quick ID)",
      description:
        "Different orders have different concentration–time relationships.",
      keyPoints: [
        "0th: [A] vs t is linear",
        "1st: ln[A] vs t is linear",
        "2nd: 1/[A] vs t is linear",
      ],
    },
    {
      title: "Half-Life (Common Shortcut)",
      description:
        "Half-life is time for concentration to drop to half its value.",
      keyPoints: [
        "For 1st order, half-life is constant (independent of [A]0)",
      ],
      formula: "t1/2 = 0.693 / k",
    },
    {
      title: "Arrhenius (Temperature Effect)",
      description:
        "Higher temperature increases rate by increasing fraction of molecules over the activation barrier.",
      keyPoints: [
        "k increases as T increases",
        "Higher Ea → stronger temperature sensitivity",
      ],
      formula: "ln k = −Ea/(RT) + ln A",
    },
  ],
},

{
  id: "ch16-chemical-equilibrium",
  chapter: "Chapter 16 — Chemical Equilibrium",
  title: "K, Q, and Shifting Systems",
  summary:
    "Use equilibrium constants to quantify how far reactions go, compare Q to K to predict direction, and shift equilibria with Le Châtelier’s principle.",
  focus: [
    "Dynamic equilibrium concept",
    "Equilibrium constant K (Kc, Kp idea)",
    "Reaction quotient Q and direction test",
    "ICE tables (setup and solving)",
    "Le Châtelier shifts (concentration, pressure, temperature)",
  ],
  notes: [
    {
      title: "Equilibrium Constant (K)",
      description:
        "K is the ratio of product to reactant activities (often concentrations) at equilibrium.",
      keyPoints: [
        "Pure solids and pure liquids are omitted from K",
        "Large K favors products; small K favors reactants",
      ],
      formula: "K = [prod]^c / [react]^a",
    },
    {
      title: "Reaction Quotient (Q)",
      description:
        "Q has the same form as K but uses current (not necessarily equilibrium) amounts.",
      keyPoints: [
        "If Q < K → forward direction (toward products)",
        "If Q > K → reverse direction (toward reactants)",
        "If Q = K → at equilibrium",
      ],
      formula: "compare Q vs K",
    },
    {
      title: "ICE Table Setup",
      description:
        "Track Initial, Change, Equilibrium amounts to solve equilibrium problems.",
      keyPoints: [
        "Write expressions in terms of x",
        "Plug equilibrium values into K expression",
      ],
    },
    {
      title: "Le Châtelier (Shifts)",
      description:
        "A system at equilibrium shifts to reduce an applied stress.",
      keyPoints: [
        "Add reactant → shift right",
        "Remove product → shift right",
        "Increase pressure (gases) → shift to fewer gas moles",
      ],
    },
    {
      title: "Temperature Note",
      description:
        "Temperature changes K (unlike concentration/pressure which shift position only).",
      keyPoints: [
        "Endothermic forward: ↑T tends to favor products",
        "Exothermic forward: ↑T tends to favor reactants",
      ],
    },
  ],
},

{
  id: "ch17-acids-bases",
  chapter: "Chapter 17 — Acids and Bases",
  title: "pH, Ka/Kb, and Strong vs Weak Systems",
  summary:
    "Compute pH/pOH, distinguish strong and weak acids/bases, and connect acid strength to conjugate stability via Ka and Kb.",
  focus: [
    "Definitions: Arrhenius and Brønsted–Lowry",
    "Strong vs weak acids/bases",
    "pH, pOH, and Kw",
    "Ka and Kb relationships",
    "Conjugate pairs and strength trends (concept toolkit)",
  ],
  notes: [
    {
      title: "Core Definitions",
      description:
        "Acids donate H+; bases accept H+ (Brønsted–Lowry).",
      keyPoints: [
        "Conjugate acid–base pairs differ by one H+",
        "Strong acids/bases dissociate (mostly) completely in water",
      ],
    },
    {
      title: "pH and pOH",
      description:
        "p-scales convert tiny concentrations into manageable numbers.",
      keyPoints: [
        "Lower pH = more acidic (higher [H3O+])",
        "At 25°C: pH + pOH = 14 (from Kw)",
      ],
      formula: "pH = −log[H3O+]",
    },
    {
      title: "Water Autoionization",
      description:
        "Water establishes a baseline relationship between hydronium and hydroxide.",
      keyPoints: [
        "Kw links [H3O+] and [OH−]",
        "If one increases, the other decreases",
      ],
      formula: "Kw = [H3O+][OH−]",
    },
    {
      title: "Ka and Kb",
      description:
        "Weak acids/bases partially ionize; Ka and Kb quantify extent.",
      keyPoints: [
        "Larger Ka → stronger acid",
        "Larger Kb → stronger base",
      ],
      formula: "Ka = ([H3O+][A−])/[HA]",
    },
    {
      title: "Conjugate Relationship",
      description:
        "A weak acid has a relatively stronger conjugate base (and vice versa).",
      keyPoints: [
        "For conjugates in water: Ka·Kb = Kw",
        "Use this to connect acid/base strengths",
      ],
      formula: "Ka·Kb = Kw",
    },
  ],
},
// Chapters 18–26 (copy/paste these section objects into cheatSheetSections)

{
  id: "ch18-aqueous-equilibria",
  chapter: "Chapter 18 — Aqueous Equilibria",
  title: "Buffers, Titrations, and Solubility (Ksp)",
  summary:
    "Extend equilibrium tools to water-based systems: buffers and titrations (acid–base equilibria) plus solubility equilibria using Ksp and Q.",
  focus: [
    "Common-ion effect and pH shifts",
    "Buffers and buffer capacity (concept + key equation)",
    "Acid–base titration regions (before, at, after equivalence)",
    "Solubility product Ksp and precipitation prediction",
  ],
  notes: [
    {
      title: "Common-Ion Effect (Idea)",
      description:
        "Adding an ion already present in an equilibrium shifts the equilibrium to reduce that stress.",
      keyPoints: [
        "Often decreases solubility of ionic solids",
        "Often suppresses ionization of weak acids/bases",
      ],
    },
    {
      title: "Buffers",
      description:
        "A buffer resists pH changes using a weak acid/base and its conjugate partner.",
      keyPoints: [
        "Works best when acid and base forms are comparable in amount",
        "Capacity depends on total concentration (more stuff = more buffering)",
      ],
    },
    {
      title: "Henderson–Hasselbalch (Buffer pH)",
      description:
        "Fast pH estimate for a buffer from conjugate ratio.",
      keyPoints: [
        "Use concentrations (or mole ratio if volume cancels)",
        "Best when both species present in appreciable amounts",
      ],
      formula: "pH = pKa + log(base/acid)",
    },
    {
      title: "Ksp and Solubility",
      description:
        "Ksp quantifies how much an ionic solid dissolves at equilibrium.",
      keyPoints: [
        "Write Ksp from dissociation stoichiometry",
        "Use Q vs Ksp to predict precipitate formation",
      ],
      formula: "Q ? Ksp",
    },
    {
      title: "Selective Precipitation (Idea)",
      description:
        "Different Ksp values allow separation by precipitating one ion before another.",
      keyPoints: [
        "Increase [common ion] gradually to control precipitation order",
      ],
    },
  ],
},

{
  id: "ch19-free-energy-thermodynamics",
  chapter: "Chapter 19 — Free Energy and Thermodynamics",
  title: "Spontaneity, Entropy, and ΔG",
  summary:
    "Predict whether processes are spontaneous using entropy and Gibbs free energy; connect spontaneity to equilibrium constants.",
  focus: [
    "Second law and entropy concept",
    "Gibbs free energy ΔG and spontaneity",
    "ΔG° and equilibrium connection to K",
    "Temperature dependence (ΔH vs ΔS competition)",
  ],
  notes: [
    {
      title: "Entropy (Big Picture)",
      description:
        "Entropy tracks energy dispersal / number of accessible microstates.",
      keyPoints: [
        "More disorder/dispersion → higher S (often)",
        "Gas formation and mixing often increase S",
      ],
    },
    {
      title: "Gibbs Free Energy and Spontaneity",
      description:
        "ΔG tells whether a process is spontaneous under given conditions.",
      keyPoints: [
        "ΔG < 0 spontaneous",
        "ΔG = 0 equilibrium",
        "ΔG > 0 nonspontaneous",
      ],
      formula: "ΔG = ΔH − TΔS",
    },
    {
      title: "Standard Free Energy Link to K",
      description:
        "Standard free energy change predicts equilibrium position.",
      keyPoints: [
        "Large K ↔ negative ΔG°",
        "Small K ↔ positive ΔG°",
      ],
      formula: "ΔG° = −RT ln K",
    },
    {
      title: "Nonstandard Conditions",
      description:
        "ΔG depends on current conditions, not just standard state.",
      keyPoints: [
        "Use Q to see how far from equilibrium you are",
      ],
      formula: "ΔG = ΔG° + RT ln Q",
    },
    {
      title: "Temperature Effects",
      description:
        "T changes which term dominates in ΔG = ΔH − TΔS.",
      keyPoints: [
        "If ΔS positive, higher T favors spontaneity",
        "If ΔS negative, higher T can suppress spontaneity",
      ],
    },
  ],
},

{
  id: "ch20-electrochemistry",
  chapter: "Chapter 20 — Electrochemistry",
  title: "Redox as Electricity: E° and Cell Calculations",
  summary:
    "Model galvanic and electrolytic cells, write cell notation, compute E°cell, and connect voltage to spontaneity and free energy.",
  focus: [
    "Oxidation vs reduction in cells (anode/cathode)",
    "Cell potential E°cell from reduction potentials",
    "Spontaneity and E° sign",
    "ΔG and K links to E°",
  ],
  notes: [
    {
      title: "Anode vs Cathode (Always True)",
      description:
        "Location rules help you keep electron flow straight.",
      keyPoints: [
        "Anode: oxidation",
        "Cathode: reduction",
        "Electrons flow anode → cathode",
      ],
    },
    {
      title: "Cell Potential from Tables",
      description:
        "Use standard reduction potentials to calculate E°cell.",
      keyPoints: [
        "Pick cathode (more positive E°red)",
        "Flip sign for anode oxidation if needed",
      ],
      formula: "E°cell = E°cath − E°an",
    },
    {
      title: "Spontaneity Check",
      description:
        "Cell voltage sign predicts spontaneity for a galvanic cell.",
      keyPoints: [
        "Ecell > 0 spontaneous (galvanic)",
        "Ecell < 0 requires energy input (electrolytic direction)",
      ],
    },
    {
      title: "Voltage to Free Energy",
      description:
        "Electrical work links directly to ΔG.",
      keyPoints: [
        "n is electrons transferred in balanced redox",
        "F is Faraday’s constant (charge per mol e−)",
      ],
      formula: "ΔG = −nFE",
    },
    {
      title: "E° to K (Big Link)",
      description:
        "Equilibrium strength relates to standard cell potential.",
      keyPoints: [
        "Bigger E° → larger K (more product-favored)",
      ],
      formula: "ln K = (nFE°)/(RT)",
    },
  ],
},

{
  id: "ch21-radioactivity-nuclear",
  chapter: "Chapter 21 — Radioactivity and Nuclear Chemistry",
  title: "Nuclear Change: Radiation, Decay, and Half-Life",
  summary:
    "Differentiate nuclear vs chemical changes, classify radiation, and use half-life to model decay quantitatively.",
  focus: [
    "Types of radiation (α, β, γ) and nuclear equations",
    "Stability trends and decay series (concept)",
    "Half-life and exponential decay calculations",
    "Mass–energy idea (conceptual)",
  ],
  notes: [
    {
      title: "Radioactivity (Definition)",
      description:
        "Radioactivity is emission of subatomic particles or energetic electromagnetic radiation by certain nuclei.",
      keyPoints: [
        "Nuclear changes alter the nucleus (element can change)",
        "Different from chemical reactions (electron rearrangements)",
      ],
    },
    {
      title: "Common Radiation Types",
      description:
        "Radiation differs in charge, mass, and penetration.",
      keyPoints: [
        "α: He nucleus (2+, heavy, low penetration)",
        "β: electron (−1, light, moderate penetration)",
        "γ: photon (no mass/charge, high penetration)",
      ],
    },
    {
      title: "Balancing Nuclear Equations",
      description:
        "Conserve mass number (A) and atomic number (Z) in nuclear equations.",
      keyPoints: [
        "Sum A and Z on both sides must match",
      ],
    },
    {
      title: "Half-Life",
      description:
        "Half-life is time for half the nuclei in a sample to decay.",
      keyPoints: [
        "Each half-life halves remaining amount",
        "Works for mass, moles, or number of atoms",
      ],
      formula: "N = N0(1/2)^(t/t1/2)",
    },
    {
      title: "Decay Constant Form (Optional)",
      description:
        "Alternate exponential form using a decay constant.",
      keyPoints: [
        "Often used when λ is given",
      ],
      formula: "N = N0 e^(−λt)",
    },
  ],
},

{
  id: "ch22-biological-chemistry",
  chapter: "Chapter 22 — The Elements of Life: Biological Chemistry",
  title: "Biomolecules and the Chemistry of Life",
  summary:
    "Survey the chemistry behind biomolecules—structures, functional groups, and how intermolecular forces and reactions shape biological function.",
  focus: [
    "Key elements in biology (CHNOPS and beyond)",
    "Functional groups and polarity",
    "Carbohydrates, lipids, proteins, nucleic acids (overview)",
    "IMFs and water’s role in structure/function",
  ],
  notes: [
    {
      title: "Functional Groups (Why They Matter)",
      description:
        "Functional groups control polarity, acidity/basicity, and typical reactions.",
      keyPoints: [
        "Hydroxyl, carbonyl, carboxyl, amino, phosphate are common",
        "Small group changes can massively change properties",
      ],
    },
    {
      title: "Macromolecule Roles (Map)",
      description:
        "Each biomolecule class has characteristic structure/function patterns.",
      keyPoints: [
        "Carbs: energy + structure",
        "Lipids: membranes + energy storage",
        "Proteins: catalysts + structure + transport",
        "Nucleic acids: information storage",
      ],
    },
    {
      title: "Water as a Chemical Environment",
      description:
        "Water’s polarity and H-bonding drive solubility and folding behavior.",
      keyPoints: [
        "Hydrophobic effect organizes nonpolar groups",
        "H-bonding stabilizes many structures",
      ],
    },
    {
      title: "Acid–Base Behavior in Biology",
      description:
        "Many biological processes depend on pH and buffering.",
      keyPoints: [
        "Buffers resist pH swings",
        "Charge states change with pH (impacts shape and binding)",
      ],
    },
    {
      title: "Energy in Biology (Concept)",
      description:
        "Biological systems couple reactions so overall ΔG is favorable.",
      keyPoints: [
        "Spontaneous overall can include nonspontaneous steps",
      ],
    },
  ],
},

{
  id: "ch23-chemistry-nonmetals",
  chapter: "Chapter 23 — Chemistry of the Nonmetals",
  title: "Patterns Across the Right Side of the Table",
  summary:
    "Compare bonding, oxides, acids, and redox patterns of nonmetals; use periodic trends to predict common compounds and reactivity.",
  focus: [
    "Nonmetal bonding tendencies (covalent, molecular)",
    "Oxides and oxyacids patterns (concept)",
    "Halogens and noble gases overview",
    "Periodic trend reasoning applied to nonmetals",
  ],
  notes: [
    {
      title: "Nonmetal Bonding",
      description:
        "Nonmetals commonly form covalent bonds and molecular compounds.",
      keyPoints: [
        "Higher EN → stronger pull on shared electrons",
        "Nonmetal oxides often relate to acids in water (general pattern)",
      ],
    },
    {
      title: "Oxyacids (Trend Toolkit)",
      description:
        "Acid strength often increases with more oxygens and with more electronegative central atoms (general trend logic).",
      keyPoints: [
        "More O atoms can stabilize conjugate base via resonance/induction",
        "Compare within a family using structure similarities",
      ],
    },
    {
      title: "Halogens (Quick Traits)",
      description:
        "Halogens are very electronegative and often act as oxidizing agents.",
      keyPoints: [
        "Common ion: −1",
        "Reactivity trends down the group depend on bonding and size",
      ],
    },
    {
      title: "Noble Gases",
      description:
        "Noble gases are typically unreactive due to stable valence configurations, with notable exceptions under special conditions.",
      keyPoints: [
        "Reactivity increases for heavier noble gases (general trend idea)",
      ],
    },
    {
      title: "Periodic Trend Anchor",
      description:
        "Use Z_eff, radius, IE, and EN to explain and predict behavior.",
      keyPoints: [
        "Across: stronger attraction, higher IE, higher EN",
        "Down: larger size, lower IE (general trend)",
      ],
    },
  ],
},

{
  id: "ch24-main-group-metals",
  chapter: "Chapter 24 — Chemistry of the Main-Group Metals",
  title: "Ionic Chemistry, Reactivity, and Common Compounds",
  summary:
    "Use periodic trends to predict ion formation and reactivity of main-group metals, especially alkali and alkaline earth metals and their typical salts.",
  focus: [
    "Common ions for Groups 1A and 2A",
    "Reactivity trends and why metals oxidize",
    "Common compound types (oxides, halides, carbonates, etc.)",
    "Lattice/solvation intuition (conceptual)",
  ],
  notes: [
    {
      title: "Group 1A and 2A Ions",
      description:
        "Main-group metals often lose electrons to form cations with noble-gas configurations.",
      keyPoints: [
        "1A → +1; 2A → +2",
        "Lower IE metals oxidize more readily",
      ],
    },
    {
      title: "Reactivity Down a Group",
      description:
        "As metal atoms get larger, valence electrons are farther from the nucleus and easier to remove.",
      keyPoints: [
        "Down group: radius increases, IE decreases (general trend)",
        "Often increases reactivity for alkali metals",
      ],
    },
    {
      title: "Ionic Compounds (What to Expect)",
      description:
        "Main-group metals commonly form ionic salts with nonmetals and polyatomic ions.",
      keyPoints: [
        "Charge balance determines formula",
        "Many salts are water-soluble, but not all (solubility rules apply)",
      ],
    },
    {
      title: "Oxides and Hydroxides",
      description:
        "Metal oxides/hydroxides are often basic in water (general trend).",
      keyPoints: [
        "More reactive metals form stronger bases (conceptual trend)",
      ],
    },
    {
      title: "Trend Anchor",
      description:
        "Most behavior comes back to ionization energy and attraction to valence electrons.",
      keyPoints: [
        "Lower IE → easier oxidation → higher metal reactivity",
      ],
    },
  ],
},

{
  id: "ch25-metals-metallurgy",
  chapter: "Chapter 25 — Metals and Metallurgy",
  title: "Metal Production, Alloys, and Corrosion",
  summary:
    "Survey how metals are extracted and refined, why alloys work, and how oxidation leads to corrosion and protection strategies.",
  focus: [
    "Metal ores and extraction concepts",
    "Reduction and metallurgy overview",
    "Alloys and property tuning",
    "Corrosion as electrochemistry in disguise",
  ],
  notes: [
    {
      title: "Ores to Metals (Concept)",
      description:
        "Metals are often produced by reducing metal ions/oxides to the elemental metal.",
      keyPoints: [
        "Extraction depends on metal reactivity",
        "Some require electrolysis; others can be reduced chemically",
      ],
    },
    {
      title: "Alloys",
      description:
        "Alloys are mixtures of metals (or metals + small atoms) designed for improved properties.",
      keyPoints: [
        "Stronger than pure metals (often) due to disrupted crystal layers",
        "Substitutional vs interstitial (concept labels)",
      ],
    },
    {
      title: "Corrosion",
      description:
        "Corrosion is metal oxidation that can be modeled like a galvanic cell.",
      keyPoints: [
        "Anodic sites oxidize; cathodic sites reduce something (often O2)",
        "Salt/water increases corrosion by enabling ion flow",
      ],
    },
    {
      title: "Corrosion Protection (Idea)",
      description:
        "Prevent oxidation or redirect it to a sacrificial metal.",
      keyPoints: [
        "Coatings block O2/H2O",
        "Sacrificial anodes oxidize instead of the protected metal",
      ],
    },
    {
      title: "Electrochem Link",
      description:
        "Corrosion prevention often uses the same logic as electrochemical cells.",
      keyPoints: [
        "More easily oxidized metal can protect less reactive metal",
      ],
    },
  ],
},

{
  id: "ch26-transition-metals-coordination",
  chapter: "Chapter 26 — Transition Metals and Coordination Compounds",
  title: "Complex Ions, Ligands, and Coordination Chemistry",
  summary:
    "Understand coordination compounds: metal centers, ligands, geometries, and how these structures explain color, magnetism, and reactivity patterns.",
  focus: [
    "Transition metal characteristics (variable oxidation states)",
    "Coordination compounds and complex ions",
    "Ligands and coordination number",
    "Common geometries (octahedral, tetrahedral, square planar)",
    "Naming coordination compounds (overview toolkit)",
  ],
  notes: [
    {
      title: "Why Transition Metals Are Special",
      description:
        "Partially filled d orbitals enable multiple oxidation states and complex formation.",
      keyPoints: [
        "Variable charge states",
        "Strong tendency to form complex ions with ligands",
      ],
    },
    {
      title: "Coordination Compounds",
      description:
        "A coordination compound has a central metal ion bonded to ligands (Lewis bases).",
      keyPoints: [
        "Ligands donate electron pairs to the metal",
        "Complex ion carries overall charge",
      ],
    },
    {
      title: "Coordination Number → Geometry (Common)",
      description:
        "Geometry often correlates with how many ligands surround the metal.",
      keyPoints: [
        "2: linear (less common in gen chem)",
        "4: tetrahedral or square planar",
        "6: octahedral",
      ],
    },
    {
      title: "Ligand Types (Quick)",
      description:
        "Ligands can bind through one atom (mono-) or multiple atoms (chelating).",
      keyPoints: [
        "Monodentate vs polydentate (chelate effect idea)",
        "Chelation often increases complex stability",
      ],
    },
    {
      title: "Color and d Orbitals (Concept)",
      description:
        "Many transition metal complexes are colored due to d-level splitting and light absorption.",
      keyPoints: [
        "Ligand environment changes splitting → changes color",
        "Not all complexes are colored (depends on electron configuration)",
      ],
    },
  ],
},

];
