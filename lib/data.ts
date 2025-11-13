export const careerPaths = [
  "Organizer",
  "Professional",
  "Gambler",
  "Slicer",
  "Gearhead",
  "Demolitions",
  "Cyborg",
  "Miner",
]

type SizeModifier = Record<1 | 2 | 3, number>
type AgilityModifier = Record<0 | 1 | 2 | 3 | 4, number>

export interface Ship {
  name: string
  baseThreat: number
  slots: string[]
  size: 1 | 2 | 3
  agility: 0 | 1 | 2 | 3 | 4
}

export interface Upgrade {
  name: string
  type: string
  threat: number
  sizeModifier: SizeModifier
  agilityModifier: AgilityModifier
}

export const ships: Ship[] = [
  { name: "TYE-Wing", baseThreat: 10, slots: ["Illicit"], size: 1, agility: 2 },
  { name: "Y-TIE", baseThreat: 15, slots: ["Illicit", "Modification", "Turret", "Astromech"], size: 1, agility: 2 },
  { name: "Modified TIE/ln", baseThreat: 20, slots: ["Modification"], size: 1, agility: 3 },
  { name: "Z-95 Headhunter", baseThreat: 22, slots: ["Missile", "Illicit", "Modification"], size: 1, agility: 2 },
  { name: "TIE/ln Fighter", baseThreat: 22, slots: ["Modification"], size: 1, agility: 3 },
  { name: "M3-A Interceptor", baseThreat: 25, slots: ["Cannon", "Modification"], size: 1, agility: 3 },
  { name: "Escape Craft", baseThreat: 12, slots: ["Crew", "Modification"], size: 1, agility: 2 },
  { name: "RZ-1 A-wing", baseThreat: 30, slots: ["Missile", "Modification"], size: 1, agility: 3 },
  {
    name: "HWK-290",
    baseThreat: 30,
    slots: ["Crew", "Payload", "Illicit", "Modification", "Modification"],
    size: 1,
    agility: 2,
  },
  {
    name: "Quadrijet Space Tug",
    baseThreat: 30,
    slots: ["Tech", "Crew", "Payload", "Illicit", "Modification"],
    size: 1,
    agility: 2,
  },
  {
    name: "Y-Wing",
    baseThreat: 32,
    slots: ["Turret", "Torpedo", "Missile", "Payload", "Illicit", "Astromech", "Modification"],
    size: 1,
    agility: 1,
  },
  { name: "TIE/in Interceptor", baseThreat: 32, slots: ["Modification", "Modification"], size: 1, agility: 3 },
  {
    name: "Rogue-class Fighter",
    baseThreat: 35,
    slots: ["Cannon", "Cannon", "Illicit", "Modification"],
    size: 1,
    agility: 2,
  },
  {
    name: "T-65 X-wing",
    baseThreat: 40,
    slots: ["Illicit", "Torpedo", "Astromech", "Modification"],
    size: 1,
    agility: 2,
  },
  {
    name: "A/SF-01 B-wing",
    baseThreat: 40,
    slots: ["Sensor", "Cannon", "Cannon", "Payload", "Torpedo", "Modification"],
    size: 1,
    agility: 1,
  },
  {
    name: "Khiraxz Fighter",
    baseThreat: 41,
    slots: ["Missile", "Illicit", "Illicit", "Modification", "Modification"],
    size: 1,
    agility: 2,
  },
  { name: "Fang Fighter", baseThreat: 41, slots: ["Torpedo", "Modification"], size: 1, agility: 3 },
  {
    name: "G-1A Starfighter",
    baseThreat: 41,
    slots: ["Sensor", "Crew", "Crew", "Illicit", "Modification"],
    size: 2,
    agility: 1,
  },
  {
    name: "JumpMaster 5000",
    baseThreat: 41,
    slots: ["Cannon", "Torpedo", "Gunner", "Crew", "Illicit", "Modification"],
    size: 3,
    agility: 2,
  },
  {
    name: "M12-L Kimogila",
    baseThreat: 41,
    slots: ["Torpedo", "Missile", "Astromech", "Illicit", "Modification"],
    size: 2,
    agility: 1,
  },
  {
    name: "Scuurg H-6",
    baseThreat: 45,
    slots: ["Turret", "Crew", "Gunner", "Payload", "Payload", "Modification"],
    size: 2,
    agility: 1,
  },
  {
    name: "ST-70 Assault Ship",
    baseThreat: 47,
    slots: ["Crew", "Crew", "Gunner", "Illicit", "Illicit", "Modification"],
    size: 2,
    agility: 2,
  },
  {
    name: "YT-1300",
    baseThreat: 50,
    slots: ["Missile", "Crew", "Crew", "Illicit", "Gunner", "Modification"],
    size: 3,
    agility: 1,
  },
  {
    name: "YV-666",
    baseThreat: 51,
    slots: ["Cannon", "Missile", "Crew", "Crew", "Gunner", "Illicit", "Modification"],
    size: 3,
    agility: 1,
  },
  {
    name: "Gauntlet Fighter",
    baseThreat: 54,
    slots: ["Crew", "Gunner", "Illicit", "Payload", "Modification"],
    size: 3,
    agility: 2,
  },
  { name: "Starviper", baseThreat: 55, slots: ["Tech", "Torpedo", "Modification"], size: 1, agility: 3 },
  {
    name: "GAT-12h Skipray Blastboat",
    baseThreat: 56,
    slots: ["Crew", "Missile", "Torpedo", "Turret", "Illicit", "Gunner", "Modification"],
    size: 2,
    agility: 2,
  },
  {
    name: "Lancer Pursuit Craft",
    baseThreat: 56,
    slots: ["Crew", "Illicit", "Illicit", "Modification"],
    size: 3,
    agility: 2,
  },
  {
    name: "Firespray Patrol Craft",
    baseThreat: 62,
    slots: ["Crew", "Cannon", "Missile", "Payload", "Illicit", "Modification"],
    size: 2,
    agility: 2,
  },
  {
    name: "Aggressor Assault Fighter",
    baseThreat: 64,
    slots: ["Sensor", "Cannon", "Cannon", "Payload", "Illicit", "Modification", "Title"],
    size: 2,
    agility: 2,
  },
  {
    name: "PB-950 Patrol Boat",
    baseThreat: 65,
    slots: ["Missile", "Gunner", "Crew", "Crew", "Illicit", "Modification"],
    size: 3,
    agility: 0,
  },
  {
    name: "VT-49 Decimator",
    baseThreat: 67,
    slots: ["Torpedo", "Crew", "Crew", "Crew", "Gunner", "Payload", "Modification"],
    size: 3,
    agility: 0,
  },
  {
    name: "YT-2400",
    baseThreat: 69,
    slots: ["Missile", "Crew", "Crew", "Illicit", "Modification"],
    size: 3,
    agility: 2,
  },
]

export const upgrades: Upgrade[] = [
  // Astromech
  {
    name: "R2 Astromech",
    type: "Astromech",
    threat: 6,
    sizeModifier: { 1: 0, 2: 0, 3: 0 },
    agilityModifier: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
  },
  {
    name: "R3 Astromech",
    type: "Astromech",
    threat: 3,
    sizeModifier: { 1: 0, 2: 0, 3: 0 },
    agilityModifier: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
  },
  {
    name: "R4 Astromech",
    type: "Astromech",
    threat: 2,
    sizeModifier: { 1: 0, 2: 0, 3: 0 },
    agilityModifier: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
  },
  {
    name: "R5 Astromech",
    type: "Astromech",
    threat: 4,
    sizeModifier: { 1: 0, 2: 0, 3: 0 },
    agilityModifier: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
  },
  {
    name: "R5-TK",
    type: "Astromech",
    threat: 1,
    sizeModifier: { 1: 0, 2: 0, 3: 0 },
    agilityModifier: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
  },

  // Cannon
  {
    name: "Autoblasters",
    type: "Cannon",
    threat: 4,
    sizeModifier: { 1: 0, 2: 0, 3: 0 },
    agilityModifier: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
  },
  {
    name: "Heavy Laser Cannon",
    type: "Cannon",
    threat: 4,
    sizeModifier: { 1: 0, 2: 0, 3: 0 },
    agilityModifier: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
  },
  {
    name: "Ion Cannon",
    type: "Cannon",
    threat: 7,
    sizeModifier: { 1: 0, 2: 0, 3: 0 },
    agilityModifier: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
  },
  {
    name: "Tractor Beam",
    type: "Cannon",
    threat: 4,
    sizeModifier: { 1: 0, 2: 0, 3: 0 },
    agilityModifier: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
  },

  // Crew
  {
    name: "Perceptive Copilot",
    type: "Crew",
    threat: 8,
    sizeModifier: { 1: 0, 2: 0, 3: 0 },
    agilityModifier: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
  },
  {
    name: "Tactical Officer",
    type: "Crew",
    threat: 3,
    sizeModifier: { 1: 0, 2: 0, 3: 0 },
    agilityModifier: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
  },
  {
    name: "Novice Technician",
    type: "Crew",
    threat: 2,
    sizeModifier: { 1: 0, 2: 0, 3: 0 },
    agilityModifier: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
  },

  // Illicit
  {
    name: "Bolt on Ion Cannon",
    type: "Illicit",
    threat: 2,
    sizeModifier: { 1: 0, 2: 0, 3: 0 },
    agilityModifier: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
  },
  {
    name: "Makeshift Hull Plates",
    type: "Illicit",
    threat: 1,
    sizeModifier: { 1: 0, 2: 0, 3: 0 },
    agilityModifier: { 0: 1, 1: 2, 2: 5, 3: 8, 4: 12 },
  },
  {
    name: "Scavenged Shield Generator",
    type: "Illicit",
    threat: 2,
    sizeModifier: { 1: 0, 2: 0, 3: 0 },
    agilityModifier: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
  },
  {
    name: "Homemade Signal Jammer",
    type: "Illicit",
    threat: 1,
    sizeModifier: { 1: 0, 2: 0, 3: 0 },
    agilityModifier: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
  },
  {
    name: "Improvised Bomb Rack",
    type: "Illicit",
    threat: 2,
    sizeModifier: { 1: 0, 2: 0, 3: 0 },
    agilityModifier: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
  },
  {
    name: "Podracer's Handicap",
    type: "Illicit",
    threat: 1,
    sizeModifier: { 1: 2, 2: 4, 3: 6 },
    agilityModifier: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
  },
  {
    name: "Cloaking Device",
    type: "Illicit",
    threat: 3,
    sizeModifier: { 1: 0, 2: 0, 3: 0 },
    agilityModifier: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
  },
  {
    name: "Contraband Cybernetics",
    type: "Illicit",
    threat: 3,
    sizeModifier: { 1: 0, 2: 0, 3: 0 },
    agilityModifier: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
  },
  {
    name: "Deadman's Switch",
    type: "Illicit",
    threat: 2,
    sizeModifier: { 1: 0, 2: 0, 3: 0 },
    agilityModifier: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
  },
  {
    name: "Feedback Array",
    type: "Illicit",
    threat: 3,
    sizeModifier: { 1: 0, 2: 0, 3: 0 },
    agilityModifier: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
  },

  // Missile
  {
    name: "Concussion Missiles",
    type: "Missile",
    threat: 6,
    sizeModifier: { 1: 0, 2: 0, 3: 0 },
    agilityModifier: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
  },
  {
    name: "Homing Missile",
    type: "Missile",
    threat: 5,
    sizeModifier: { 1: 0, 2: 0, 3: 0 },
    agilityModifier: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
  },
  {
    name: "Ion Missile",
    type: "Missile",
    threat: 4,
    sizeModifier: { 1: 0, 2: 0, 3: 0 },
    agilityModifier: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
  },
  {
    name: "Proton Rockets",
    type: "Missile",
    threat: 5,
    sizeModifier: { 1: 0, 2: 0, 3: 0 },
    agilityModifier: { 0: 1, 1: 2, 2: 5, 3: 8, 4: 12 },
  },

  // Modification
  {
    name: "Afterburners",
    type: "Modification",
    threat: 6,
    sizeModifier: { 1: 3, 2: 6, 3: 9 },
    agilityModifier: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
  },
  {
    name: "Hull Upgrade",
    type: "Modification",
    threat: 2,
    sizeModifier: { 1: 0, 2: 0, 3: 0 },
    agilityModifier: { 0: 1, 1: 2, 2: 5, 3: 8, 4: 12 },
  },
  {
    name: "Shield Upgrade",
    type: "Modification",
    threat: 3,
    sizeModifier: { 1: 0, 2: 0, 3: 0 },
    agilityModifier: { 0: 1, 1: 2, 2: 5, 3: 8, 4: 12 },
  },
  {
    name: "Stealth Device",
    type: "Modification",
    threat: 4,
    sizeModifier: { 1: 0, 2: 0, 3: 0 },
    agilityModifier: { 0: 1, 1: 2, 2: 5, 3: 8, 4: 12 },
  },
  {
    name: "Targeting Computer",
    type: "Modification",
    threat: 2,
    sizeModifier: { 1: 0, 2: 0, 3: 0 },
    agilityModifier: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
  },
  {
    name: "Engine Upgrade",
    type: "Modification",
    threat: 3,
    sizeModifier: { 1: 1, 2: 2, 3: 3 },
    agilityModifier: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
  },

  // Payload
  {
    name: "Proton Bombs",
    type: "Payload",
    threat: 4,
    sizeModifier: { 1: 0, 2: 0, 3: 0 },
    agilityModifier: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
  },
  {
    name: "Seismic Charges",
    type: "Payload",
    threat: 3,
    sizeModifier: { 1: 0, 2: 0, 3: 0 },
    agilityModifier: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
  },
  {
    name: "Proximity Mines",
    type: "Payload",
    threat: 6,
    sizeModifier: { 1: 0, 2: 0, 3: 0 },
    agilityModifier: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
  },
  {
    name: "Ion Bombs",
    type: "Payload",
    threat: 6,
    sizeModifier: { 1: 0, 2: 0, 3: 0 },
    agilityModifier: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
  },

  // Sensor
  {
    name: "Advanced Sensors",
    type: "Sensor",
    threat: 10,
    sizeModifier: { 1: 0, 2: 0, 3: 0 },
    agilityModifier: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
  },
  {
    name: "Collision Detector",
    type: "Sensor",
    threat: 6,
    sizeModifier: { 1: 0, 2: 0, 3: 0 },
    agilityModifier: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
  },
  {
    name: "Fire-Control System",
    type: "Sensor",
    threat: 2,
    sizeModifier: { 1: 0, 2: 0, 3: 0 },
    agilityModifier: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
  },

  // Tech
  {
    name: "Advanced Optics",
    type: "Tech",
    threat: 4,
    sizeModifier: { 1: 0, 2: 0, 3: 0 },
    agilityModifier: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
  },
  {
    name: "Pattern Analyzer",
    type: "Tech",
    threat: 5,
    sizeModifier: { 1: 0, 2: 0, 3: 0 },
    agilityModifier: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
  },
  {
    name: "Primed Thrusters",
    type: "Tech",
    threat: 9,
    sizeModifier: { 1: 0, 2: 0, 3: 0 },
    agilityModifier: { 0: 1, 1: 2, 2: 5, 3: 8, 4: 12 },
  },

  // Torpedo
  {
    name: "Advanced Proton Torpedoes",
    type: "Torpedo",
    threat: 5,
    sizeModifier: { 1: 0, 2: 0, 3: 0 },
    agilityModifier: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
  },
  {
    name: "Proton Torpedoes",
    type: "Torpedo",
    threat: 12,
    sizeModifier: { 1: 0, 2: 0, 3: 0 },
    agilityModifier: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
  },
  {
    name: "Ion Torpedo",
    type: "Torpedo",
    threat: 7,
    sizeModifier: { 1: 0, 2: 0, 3: 0 },
    agilityModifier: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
  },

  // Turret
  {
    name: "Dorsal Turret",
    type: "Turret",
    threat: 2,
    sizeModifier: { 1: 0, 2: 0, 3: 0 },
    agilityModifier: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
  },
  {
    name: "Ion Cannon Turret",
    type: "Turret",
    threat: 6,
    sizeModifier: { 1: 0, 2: 0, 3: 0 },
    agilityModifier: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
  },

  // Gunner
  {
    name: "Agile Gunner",
    type: "Gunner",
    threat: 3,
    sizeModifier: { 1: 0, 2: 0, 3: 0 },
    agilityModifier: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
  },
  {
    name: "Veteran Turret Gunner",
    type: "Gunner",
    threat: 9,
    sizeModifier: { 1: -1, 2: -2, 3: -3 },
    agilityModifier: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
  },
  {
    name: "Hotshot Gunner",
    type: "Gunner",
    threat: 6,
    sizeModifier: { 1: 0, 2: 0, 3: 0 },
    agilityModifier: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
  },
]

export const pilotAbilities = [
  // Organizer
  { name: "Hondo Onakha", career: "Organizer", xpCost: 2, minInitiative: 1 },
  { name: "Torkil Mux", career: "Organizer", xpCost: 4, minInitiative: 2 },
  { name: "Overseer Yushyn", career: "Organizer", xpCost: 4, minInitiative: 2 },
  { name: "Doctor Aphra", career: "Organizer", xpCost: 6, minInitiative: 3 },
  { name: "Gamut Key", career: "Organizer", xpCost: 6, minInitiative: 3 },
  { name: "Kaa'to Leechos", career: "Organizer", xpCost: 6, minInitiative: 3 },
  { name: "Manaroo", career: "Organizer", xpCost: 6, minInitiative: 3 },
  { name: "Drea Renthal", career: "Organizer", xpCost: 8, minInitiative: 4 },
  { name: "Kath Scarlett", career: "Organizer", xpCost: 8, minInitiative: 4 },
  { name: "Prince Xizor", career: "Organizer", xpCost: 8, minInitiative: 4 },
  { name: "Ketsu Onyo", career: "Organizer", xpCost: 10, minInitiative: 5 },
  { name: "Serissu", career: "Organizer", xpCost: 10, minInitiative: 5 },

  // Professional
  { name: "Captain Jostero", career: "Professional", xpCost: 6, minInitiative: 3 },
  { name: "Tor Phun", career: "Professional", xpCost: 6, minInitiative: 3 },
  { name: "Bossk", career: "Professional", xpCost: 8, minInitiative: 4 },
  { name: "Graz", career: "Professional", xpCost: 8, minInitiative: 4 },
  { name: "N'dru Suhlak", career: "Professional", xpCost: 8, minInitiative: 4 },
  { name: "Boba Fett", career: "Professional", xpCost: 10, minInitiative: 5 },
  { name: "Guri", career: "Professional", xpCost: 10, minInitiative: 5 },
  { name: "Talonbane Cobra", career: "Professional", xpCost: 10, minInitiative: 5 },
  { name: "The Mandalorian", career: "Professional", xpCost: 10, minInitiative: 5 },
  { name: "Old Teroch", career: "Professional", xpCost: 10, minInitiative: 5 },
  { name: "Dengar", career: "Professional", xpCost: 12, minInitiative: 6 },
  { name: "Fenn Rau", career: "Professional", xpCost: 12, minInitiative: 6 },

  // Gambler
  { name: "Nom Lumb", career: "Gambler", xpCost: 2, minInitiative: 1 },
  { name: "Sunny Bounder", career: "Gambler", xpCost: 2, minInitiative: 1 },
  { name: "Inaldra", career: "Gambler", xpCost: 4, minInitiative: 2 },
  { name: "Lapin", career: "Gambler", xpCost: 4, minInitiative: 2 },
  { name: "Koshka Frost", career: "Gambler", xpCost: 6, minInitiative: 3 },
  { name: "Laetin A'shera", career: "Gambler", xpCost: 6, minInitiative: 3 },
  { name: "Rook Kast", career: "Gambler", xpCost: 6, minInitiative: 3 },
  { name: "Zuckuss", career: "Gambler", xpCost: 6, minInitiative: 3 },
  { name: "Dalan Oneros", career: "Gambler", xpCost: 8, minInitiative: 4 },
  { name: "Kad Solus", career: "Gambler", xpCost: 8, minInitiative: 4 },
  { name: "Lando Calrissian", career: "Gambler", xpCost: 8, minInitiative: 4 },
  { name: "Torani Kulda", career: "Gambler", xpCost: 8, minInitiative: 4 },
  { name: "Viktor Hel", career: "Gambler", xpCost: 8, minInitiative: 4 },

  // Slicer
  { name: "Nom Lumb (JM)", career: "Slicer", xpCost: 2, minInitiative: 1 },
  { name: "4-LOM", career: "Slicer", xpCost: 6, minInitiative: 3 },
  { name: "Captain Seevor", career: "Slicer", xpCost: 6, minInitiative: 3 },
  { name: "Palob Godalhi", career: "Slicer", xpCost: 6, minInitiative: 3 },
  { name: "Genesis Red", career: "Slicer", xpCost: 8, minInitiative: 4 },
  { name: "Cad Bane", career: "Slicer", xpCost: 8, minInitiative: 4 },
  { name: "Leema Kai", career: "Slicer", xpCost: 10, minInitiative: 5 },
  { name: "Tapusk", career: "Slicer", xpCost: 10, minInitiative: 5 },
  { name: "Q9-0", career: "Slicer", xpCost: 10, minInitiative: 5 },

  // Gearhead
  { name: "L3-37", career: "Gearhead", xpCost: 4, minInitiative: 2 },
  { name: "Sarko Plank", career: "Gearhead", xpCost: 4, minInitiative: 2 },
  { name: "Dalan Oberos", career: "Gearhead", xpCost: 6, minInitiative: 3 },
  { name: "Krassis Trelix", career: "Gearhead", xpCost: 6, minInitiative: 3 },
  { name: "Sabine Wren", career: "Gearhead", xpCost: 6, minInitiative: 3 },
  { name: "Arliz Hadrassian", career: "Gearhead", xpCost: 8, minInitiative: 4 },
  { name: "Dace Bonearm", career: "Gearhead", xpCost: 8, minInitiative: 4 },
  { name: "Durge", career: "Gearhead", xpCost: 10, minInitiative: 5 },
  { name: "Kavil", career: "Gearhead", xpCost: 10, minInitiative: 5 },

  // Demolitions
  { name: "G4R-GOR", career: "Demolitions", xpCost: 4, minInitiative: 0 },
  { name: "Ahhav", career: "Demolitions", xpCost: 6, minInitiative: 3 },
  { name: "Padric", career: "Demolitions", xpCost: 6, minInitiative: 3 },
  { name: "Quinn Jast", career: "Demolitions", xpCost: 6, minInitiative: 3 },
  { name: "Sol Sixxa", career: "Demolitions", xpCost: 6, minInitiative: 3 },
  { name: "Constable Zuvio", career: "Demolitions", xpCost: 8, minInitiative: 4 },
  { name: "Eemon Azameen", career: "Demolitions", xpCost: 8, minInitiative: 4 },
  { name: "Joy Rekkoff", career: "Demolitions", xpCost: 8, minInitiative: 4 },
  { name: "Tel Trevura", career: "Demolitions", xpCost: 8, minInitiative: 4 },
  { name: "Captain Nym", career: "Demolitions", xpCost: 10, minInitiative: 5 },

  // Cyborg
  { name: "IG-88A", career: "Cyborg", xpCost: 6, minInitiative: 3 },
  { name: "IG-88B", career: "Cyborg", xpCost: 8, minInitiative: 4 },
  { name: "IG-88C", career: "Cyborg", xpCost: 10, minInitiative: 5 },
  { name: "IG-88D", career: "Cyborg", xpCost: 12, minInitiative: 6 },

  // Miner
  { name: "Lapin (Miner)", career: "Miner", xpCost: 4, minInitiative: 2 },
  { name: "Sarko Plank (Miner)", career: "Miner", xpCost: 4, minInitiative: 2 },
  { name: "Unkar Plutt", career: "Miner", xpCost: 4, minInitiative: 2 },
  { name: "Ahhav (Miner)", career: "Miner", xpCost: 6, minInitiative: 3 },
  { name: "Captain Seevor (Miner)", career: "Miner", xpCost: 6, minInitiative: 3 },
  { name: "Latts Razzi", career: "Miner", xpCost: 6, minInitiative: 3 },
  { name: "Foreman Proach", career: "Miner", xpCost: 8, minInitiative: 4 },
  { name: "Moralo Eval", career: "Miner", xpCost: 8, minInitiative: 4 },
  { name: "Ketsu Onyo (Miner)", career: "Miner", xpCost: 10, minInitiative: 5 },
]
