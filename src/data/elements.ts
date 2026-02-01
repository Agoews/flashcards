export type GroupLabel =
  | "1A"
  | "2A"
  | "3A"
  | "4A"
  | "5A"
  | "6A"
  | "7A"
  | "8A";

export type ChemElement = {
  atomicNumber: number;
  symbol: string;
  atomicMass: string;
  nameEn: string;
  nameZh: string;
  groupLabel: GroupLabel;
};

export type GroupFilter = GroupLabel | "ALL";

export const elements: ChemElement[] = [
  { atomicNumber: 1, symbol: "H", atomicMass: "1", nameEn: "Hydrogen", nameZh: "氢", groupLabel: "1A" },
  { atomicNumber: 3, symbol: "Li", atomicMass: "7", nameEn: "Lithium", nameZh: "锂", groupLabel: "1A" },
  { atomicNumber: 11, symbol: "Na", atomicMass: "23", nameEn: "Sodium", nameZh: "钠", groupLabel: "1A" },
  { atomicNumber: 19, symbol: "K", atomicMass: "39", nameEn: "Potassium", nameZh: "钾", groupLabel: "1A" },
  { atomicNumber: 37, symbol: "Rb", atomicMass: "85", nameEn: "Rubidium", nameZh: "铷", groupLabel: "1A" },
  { atomicNumber: 55, symbol: "Cs", atomicMass: "133", nameEn: "Cesium", nameZh: "铯", groupLabel: "1A" },
  { atomicNumber: 87, symbol: "Fr", atomicMass: "223", nameEn: "Francium", nameZh: "钫", groupLabel: "1A" },
  { atomicNumber: 4, symbol: "Be", atomicMass: "9", nameEn: "Beryllium", nameZh: "铍", groupLabel: "2A" },
  { atomicNumber: 12, symbol: "Mg", atomicMass: "24", nameEn: "Magnesium", nameZh: "镁", groupLabel: "2A" },
  { atomicNumber: 20, symbol: "Ca", atomicMass: "40", nameEn: "Calcium", nameZh: "钙", groupLabel: "2A" },
  { atomicNumber: 38, symbol: "Sr", atomicMass: "88", nameEn: "Strontium", nameZh: "锶", groupLabel: "2A" },
  { atomicNumber: 56, symbol: "Ba", atomicMass: "137", nameEn: "Barium", nameZh: "钡", groupLabel: "2A" },
  { atomicNumber: 88, symbol: "Ra", atomicMass: "226", nameEn: "Radium", nameZh: "镭", groupLabel: "2A" },
  { atomicNumber: 5, symbol: "B", atomicMass: "11", nameEn: "Boron", nameZh: "硼", groupLabel: "3A" },
  { atomicNumber: 13, symbol: "Al", atomicMass: "27", nameEn: "Aluminium", nameZh: "铝", groupLabel: "3A" },
  { atomicNumber: 31, symbol: "Ga", atomicMass: "70", nameEn: "Gallium", nameZh: "镓", groupLabel: "3A" },
  { atomicNumber: 49, symbol: "In", atomicMass: "115", nameEn: "Indium", nameZh: "铟", groupLabel: "3A" },
  { atomicNumber: 81, symbol: "Tl", atomicMass: "204", nameEn: "Thallium", nameZh: "铊", groupLabel: "3A" },
  { atomicNumber: 113, symbol: "Nh", atomicMass: "286", nameEn: "Nihonium", nameZh: "鉨", groupLabel: "3A" },
  { atomicNumber: 6, symbol: "C", atomicMass: "12", nameEn: "Carbon", nameZh: "碳", groupLabel: "4A" },
  { atomicNumber: 14, symbol: "Si", atomicMass: "28", nameEn: "Silicon", nameZh: "硅", groupLabel: "4A" },
  { atomicNumber: 32, symbol: "Ge", atomicMass: "73", nameEn: "Germanium", nameZh: "锗", groupLabel: "4A" },
  { atomicNumber: 50, symbol: "Sn", atomicMass: "119", nameEn: "Tin", nameZh: "锡", groupLabel: "4A" },
  { atomicNumber: 82, symbol: "Pb", atomicMass: "207", nameEn: "Lead", nameZh: "铅", groupLabel: "4A" },
  { atomicNumber: 114, symbol: "Fl", atomicMass: "289", nameEn: "Flerovium", nameZh: "鈇", groupLabel: "4A" },
  { atomicNumber: 7, symbol: "N", atomicMass: "14", nameEn: "Nitrogen", nameZh: "氮", groupLabel: "5A" },
  { atomicNumber: 15, symbol: "P", atomicMass: "31", nameEn: "Phosphorus", nameZh: "磷", groupLabel: "5A" },
  { atomicNumber: 33, symbol: "As", atomicMass: "75", nameEn: "Arsenic", nameZh: "砷", groupLabel: "5A" },
  { atomicNumber: 51, symbol: "Sb", atomicMass: "122", nameEn: "Antimony", nameZh: "锑", groupLabel: "5A" },
  { atomicNumber: 83, symbol: "Bi", atomicMass: "209", nameEn: "Bismuth", nameZh: "铋", groupLabel: "5A" },
  { atomicNumber: 115, symbol: "Mc", atomicMass: "289", nameEn: "Moscovium", nameZh: "镆", groupLabel: "5A" },
  { atomicNumber: 8, symbol: "O", atomicMass: "16", nameEn: "Oxygen", nameZh: "氧", groupLabel: "6A" },
  { atomicNumber: 16, symbol: "S", atomicMass: "32", nameEn: "Sulfur", nameZh: "硫", groupLabel: "6A" },
  { atomicNumber: 34, symbol: "Se", atomicMass: "79", nameEn: "Selenium", nameZh: "硒", groupLabel: "6A" },
  { atomicNumber: 52, symbol: "Te", atomicMass: "128", nameEn: "Tellurium", nameZh: "碲", groupLabel: "6A" },
  { atomicNumber: 84, symbol: "Po", atomicMass: "209", nameEn: "Polonium", nameZh: "钋", groupLabel: "6A" },
  { atomicNumber: 116, symbol: "Lv", atomicMass: "293", nameEn: "Livermorium", nameZh: "鉝", groupLabel: "6A" },
  { atomicNumber: 9, symbol: "F", atomicMass: "19", nameEn: "Fluorine", nameZh: "氟", groupLabel: "7A" },
  { atomicNumber: 17, symbol: "Cl", atomicMass: "35", nameEn: "Chlorine", nameZh: "氯", groupLabel: "7A" },
  { atomicNumber: 35, symbol: "Br", atomicMass: "80", nameEn: "Bromine", nameZh: "溴", groupLabel: "7A" },
  { atomicNumber: 53, symbol: "I", atomicMass: "127", nameEn: "Iodine", nameZh: "碘", groupLabel: "7A" },
  { atomicNumber: 85, symbol: "At", atomicMass: "210", nameEn: "Astatine", nameZh: "砈", groupLabel: "7A" },
  { atomicNumber: 117, symbol: "Ts", atomicMass: "294", nameEn: "Tennessine", nameZh: "田", groupLabel: "7A" },
  { atomicNumber: 2, symbol: "He", atomicMass: "4", nameEn: "Helium", nameZh: "氦", groupLabel: "8A" },
  { atomicNumber: 10, symbol: "Ne", atomicMass: "20", nameEn: "Neon", nameZh: "氖", groupLabel: "8A" },
  { atomicNumber: 18, symbol: "Ar", atomicMass: "40", nameEn: "Argon", nameZh: "氩", groupLabel: "8A" },
  { atomicNumber: 36, symbol: "Kr", atomicMass: "84", nameEn: "Krypton", nameZh: "氪", groupLabel: "8A" },
  { atomicNumber: 54, symbol: "Xe", atomicMass: "131", nameEn: "Xenon", nameZh: "氙", groupLabel: "8A" },
  { atomicNumber: 86, symbol: "Rn", atomicMass: "222", nameEn: "Radon", nameZh: "氡", groupLabel: "8A" },
  { atomicNumber: 118, symbol: "Og", atomicMass: "294", nameEn: "Oganesson", nameZh: "气奥", groupLabel: "8A" },
];
