// Copyright (c) 2024 nvigneux. All rights reserved.
// https://github.com/nvigneux/Stratagem-Hero-Trainer/blob/9155ed67aed2bf7ea5e44af83aa2513848d28a33/app/lib/placeholder-data-helldivers.js
// modified for use by t2vee

const CATEGORIES = [
    {
        id: '0',
        name: 'Patriotic Administration Center',
    },
    {
        id: '1',
        name: 'Orbital Cannons',
    },
    {
        id: '2',
        name: 'Hangar',
    },
    {
        id: '3',
        name: 'Bridge',
    },
    {
        id: '4',
        name: 'Engineering Bay',
    },
    {
        id: '5',
        name: 'Robotics Workshop',
    },
    {
        id: '6',
        name: 'General Stratagems',
    },
];

const PATRIOTIC_ADMINISTRATION_CENTER = [
    {
        name: 'Machine Gun',
        code: ['down', 'left', 'down', 'up', 'right'],
        category_id: '0',
        icon: '/helldivers-icons/Patriotic Administration Center/Machine Gun.svg'
    },
    {
        name: 'Anti-Materiel Rifle',
        code: ['down', 'left', 'right', 'up', 'down'],
        category_id: '0',
        icon: '/helldivers-icons/Patriotic Administration Center/Anti-Materiel Rifle.svg'
    },
    {
        name: 'Stalwart',
        code: ['down', 'left', 'down', 'up', 'up', 'left'],
        category_id: '0',
        icon: '/helldivers-icons/Patriotic Administration Center/Stalwart.svg'
    },
    {
        name: 'Expendable Anti-Tank',
        code: ['down', 'down', 'left', 'up', 'right'],
        category_id: '0',
        icon: 'public/helldivers-icons/Patriotic Administration Center/Expendable Anti-Tank.svg'
    },
    {
        name: 'Recoilless Rifle',
        code: ['down', 'left', 'right', 'right', 'left'],
        category_id: '0',
        icon: 'public/helldivers-icons/Patriotic Administration Center/Recoilless Rifle.svg'
    },
    {
        name: 'Flamethrower',
        code: ['down', 'left', 'up', 'down', 'up'],
        category_id: '0',
        icon: 'public/helldivers-icons/Patriotic Administration Center/Flamethrower.svg'
    },
    {
        name: 'Autocannon',
        code: ['down', 'left', 'down', 'up', 'up', 'right'],
        category_id: '0',
        icon: 'public/helldivers-icons/Patriotic Administration Center/Autocannon.svg'
    },
    {
        name: 'Heavy Machine Gun',
        code: ['down', 'left', 'up', 'down', 'down'],
        category_id: '0',
        icon: 'public/helldivers-icons/Patriotic Administration Center/Heavy Machine Gun.svg'
    },
    {
        name: 'Airburst Rocket Launcher',
        code: ['down', 'up', 'up', 'left', 'right'],
        category_id: '0',
        icon: 'public/helldivers-icons/Patriotic Administration Center/Airburst Rocket Launcher.svg'
    },
    {
        name: 'Railgun',
        code: ['down', 'right', 'down', 'up', 'left', 'right'],
        category_id: '0',
        icon: 'public/helldivers-icons/Patriotic Administration Center/Railgun.svg'
    },
    {
        name: 'Spear',
        code: ['down', 'down', 'up', 'down', 'down'],
        category_id: '0',
        icon: 'public/helldivers-icons/Patriotic Administration Center/Spear.svg'
    },
];

const ORBITAL_CANNONS = [
    {
        name: 'Orbital Gatling Barrage',
        code: ['right', 'down', 'left', 'up', 'up'],
        category_id: '1',
        icon: 'public/helldivers-icons/Orbital Cannons/Orbital Gatling Barrage.svg'
    },
    {
        name: 'Orbital Airburst Strike',
        code: ['right', 'right', 'right'],
        category_id: '1',
        icon: 'public/helldivers-icons/Orbital Cannons/Orbital Airburst Strike.svg'
    },
    {
        name: 'Orbital 120MM HE Barrage',
        code: ['right', 'right', 'down', 'left', 'right', 'down'],
        category_id: '1',
        icon: 'public/helldivers-icons/Orbital Cannons/Orbital 120MM HE Barrage.svg'
    },
    {
        name: 'Orbital 380MM HE Barrage',
        code: ['right', 'down', 'up', 'up', 'left', 'down', 'down'],
        category_id: '1',
        icon: 'public/helldivers-icons/Orbital Cannons/Orbital 380MM HE Barrage.svg'
    },
    {
        name: 'Orbital Walking Barrage',
        code: ['right', 'down', 'right', 'down', 'right', 'down'],
        category_id: '1',
        icon: 'public/helldivers-icons/Orbital Cannons/Orbital Walking Barrage.svg'
    },
    {
        name: 'Orbital Laser',
        code: ['right', 'down', 'up', 'right', 'down'],
        category_id: '1',
        icon: 'public/helldivers-icons/Orbital Cannons/Orbital Laser.svg'
    },
    {
        name: 'Orbital Railcannon Strike',
        code: ['right', 'up', 'down', 'down', 'right'],
        category_id: '1',
        icon: 'public/helldivers-icons/Orbital Cannons/Orbital Railcannon Strike.svg'
    },
];

const HANGER = [
    {
        name: 'Eagle Strafing Run',
        code: ['up', 'right', 'right'],
        category_id: '2',
        icon: 'public/helldivers-icons/Hangar/Eagle Strafing Run.svg'
    },
    {
        name: 'Eagle Airstrike',
        code: ['up', 'right', 'down', 'right'],
        category_id: '2',
        icon: 'public/helldivers-icons/Hangar/Eagle Airstrike.svg'
    },
    {
        name: 'Eagle Cluster Bomb',
        code: ['up', 'right', 'down', 'down', 'right'],
        category_id: '2',
        icon: 'public/helldivers-icons/Hangar/Eagle Cluster Bomb.svg'
    },
    {
        name: 'Eagle Napalm Airstrike',
        code: ['up', 'right', 'down', 'up'],
        category_id: '2',
        icon: 'public/helldivers-icons/Hangar/Eagle Napalm Airstrike.svg'
    },
    {
        name: 'Jump Pack',
        code: ['down', 'up', 'up', 'down', 'up'],
        category_id: '2',
        icon: 'public/helldivers-icons/Hangar/Jump Pack.svg'
    },
    {
        name: 'Eagle Smoke Strike',
        code: ['up', 'right', 'up', 'down'],
        category_id: '2',
        icon: 'public/helldivers-icons/Hangar/Eagle Smoke Strike.svg'
    },
    {
        name: 'Eagle 110MM Rocket Pods',
        code: ['up', 'right', 'up', 'left'],
        category_id: '2',
        icon: 'public/helldivers-icons/Hangar/Eagle 110MM Rocket Pods.svg'
    },
    {
        name: 'Eagle 500KG Bomb',
        code: ['up', 'right', 'down', 'down', 'down'],
        category_id: '2',
        icon: 'public/helldivers-icons/Hangar/Eagle 500KG Bomb.svg'
    },
    {
        name: 'Eagle Rearm',
        code: ['up', 'up', 'left', 'up', 'right'],
        category_id: '2',
        icon: 'public/helldivers-icons/Hangar/Eagle Rearm.svg'
    },
];

const BRIDGE = [
    {
        name: 'Orbital Precision Strike',
        code: ['right', 'right', 'up'],
        category_id: '3',
        icon: 'public/helldivers-icons/Bridge/Orbital Precision Strike.svg'
    },
    {
        name: 'Orbital Gas Strike',
        code: ['right', 'right', 'down', 'right'],
        category_id: '3',
        icon: 'public/helldivers-icons/Bridge/Orbital Gas Strike.svg'
    },
    {
        name: 'Orbital EMS Strike',
        code: ['right', 'right', 'left', 'down'],
        category_id: '3',
        icon: 'public/helldivers-icons/Bridge/Orbital EMS Strike.svg'
    },
    {
        name: 'Orbital Smoke Strike',
        code: ['right', 'right', 'down', 'up'],
        category_id: '3',
        icon: 'public/helldivers-icons/Bridge/Orbital Smoke Strike.svg'
    },
    {
        name: 'HMG Emplacement',
        code: ['down', 'up', 'left', 'right', 'right', 'left'],
        category_id: '3',
        icon: 'public/helldivers-icons/Bridge/HMG Emplacement.svg'
    },
    {
        name: 'Shield Generator Relay',
        code: ['down', 'down', 'left', 'right', 'left', 'right'],
        category_id: '3',
        icon: 'public/helldivers-icons/Bridge/Shield Generator Relay.svg'
    },
    {
        name: 'Tesla Tower',
        code: ['down', 'up', 'right', 'up', 'left', 'right'],
        category_id: '3',
        icon: 'public/helldivers-icons/Bridge/Tesla Tower.svg'
    },
];

const ENGINEERING_BAY = [
    {
        name: 'Anti-Personnel Minefield',
        code: ['down', 'left', 'up', 'right'],
        category_id: '4',
        icon: 'public/helldivers-icons/Engineering Bay/Anti-Personnel Minefield.svg'
    },
    {
        name: 'Supply Pack',
        code: ['down', 'left', 'down', 'up', 'up', 'down'],
        category_id: '4',
        icon: 'public/helldivers-icons/Engineering Bay/Supply Pack.svg'
    },
    {
        name: 'Grenade Launcher',
        code: ['down', 'left', 'up', 'left', 'down'],
        category_id: '4',
        icon: 'public/helldivers-icons/Engineering Bay/Grenade Launcher.svg'
    },
    {
        name: 'Laser Cannon',
        code: ['down', 'left', 'down', 'up', 'left'],
        category_id: '4',
        icon: 'public/helldivers-icons/Engineering Bay/Laser Cannon.svg'
    },
    {
        name: 'Incendiary Mines',
        code: ['down', 'left', 'left', 'down'],
        category_id: '4',
        icon: 'public/helldivers-icons/Engineering Bay/Incendiary Mines.svg'
    },
    {
        name: '“Guard Dog” Rover',
        code: ['down', 'up', 'left', 'up', 'right', 'right'],
        category_id: '4',
        icon: 'public/helldivers-icons/Engineering Bay/Guard Dog Rover.svg'
    },
    {
        name: 'Ballistic Shield Backpack',
        code: ['down', 'left', 'down', 'down', 'up', 'left'],
        category_id: '4',
        icon: 'public/helldivers-icons/Engineering Bay/Ballistic Shield Backpack.svg'
    },
    {
        name: 'Arc Thrower',
        code: ['down', 'right', 'down', 'up', 'left', 'left'],
        category_id: '4',
        icon: 'public/helldivers-icons/Engineering Bay/Arc Thrower.svg'
    },
    {
        name: 'Quasar Cannon',
        code: ['down', 'down', 'up', 'left', 'right'],
        category_id: '4',
        icon: 'public/helldivers-icons/Engineering Bay/Quasar Cannon.svg'
    },
    {
        name: 'Shield Generator Pack',
        code: ['down', 'up', 'left', 'right', 'left', 'right'],
        category_id: '4',
        icon: 'public/helldivers-icons/Engineering Bay/Shield Generator Pack.svg'
    },
];

const ROBOTICS_WORKSHOP = [
    {
        name: 'Machine Gun Sentry',
        code: ['down', 'up', 'right', 'right', 'up'],
        category_id: '5',
        icon: 'public/helldivers-icons/Robotics Workshop/Machine Gun Sentry.svg'
    },
    {
        name: 'Gatling Sentry',
        code: ['down', 'up', 'right', 'left'],
        category_id: '5',
        icon: 'public/helldivers-icons/Robotics Workshop/Gatling Sentry.svg'
    },
    {
        name: 'Mortar Sentry',
        code: ['down', 'up', 'right', 'right', 'down'],
        category_id: '5',
        icon: 'public/helldivers-icons/Robotics Workshop/Mortar Sentry.svg'
    },
    {
        name: '“Guard Dog”',
        code: ['down', 'up', 'left', 'up', 'right', 'down'],
        category_id: '5',
        icon: 'public/helldivers-icons/Robotics Workshop/Guard Dog.svg'
    },
    {
        name: 'Autocannon Sentry',
        code: ['down', 'up', 'right', 'up', 'left', 'up'],
        category_id: '5',
        icon: 'public/helldivers-icons/Robotics Workshop/Autocannon Sentry.svg'
    },
    {
        name: 'Rocket Sentry',
        code: ['down', 'up', 'right', 'right', 'left'],
        category_id: '5',
        icon: 'public/helldivers-icons/Robotics Workshop/Rocket Sentry.svg'
    },
    {
        name: 'EMS Mortar Sentry',
        code: ['down', 'up', 'right', 'down', 'right'],
        category_id: '5',
        icon: 'public/helldivers-icons/Robotics Workshop/EMS Mortar Sentry.svg'
    },
    {
        name: 'Patriot Exosuit',
        code: ['left', 'down', 'right', 'up', 'left', 'down', 'down'],
        category_id: '5',
        icon: 'public/helldivers-icons/Robotics Workshop/Patriot Exosuit.svg'
    },
    {
        name: 'Emancipator Exosuit',
        code: ['left', 'down', 'right', 'up', 'left', 'down', 'up'],
        category_id: '5',
        icon: 'public/helldivers-icons/Robotics Workshop/Emancipator Exosuit.svg'
    },
];

const GENERAL_STRATEGEMS = [
    {
        name: 'Resupply',
        code: ['down', 'down', 'up', 'right'],
        category_id: '6',
        icon: 'public/helldivers-icons/General Stratagems/Resupply.svg'
    },
    {
        name: 'Reinforce',
        code: ['up', 'down', 'right', 'left', 'up'],
        category_id: '6',
        icon: 'public/helldivers-icons/General Stratagems/Reinforce.svg'
    },
    {
        name: 'SOS Beacon',
        code: ['up', 'down', 'right', 'up'],
        category_id: '6',
        icon: 'public/helldivers-icons/General Stratagems/SOS Beacon.svg'
    },
    {
        name: 'Hellbomb',
        code: ['down', 'up', 'left', 'down', 'up', 'right', 'down', 'up'],
        category_id: '6',
        icon: 'public/helldivers-icons/General Stratagems/Hellbomb.svg'
    },
    {
        name: 'SEAF Artillery',
        code: ['right', 'up', 'up', 'down'],
        category_id: '6',
        icon: 'public/helldivers-icons/General Stratagems/SEAF Artillery.svg'
    },
    {
        name: 'Seismic Probe',
        code: ['up', 'up', 'left', 'right', 'down', 'down'],
        category_id: '6',
        icon: 'public/helldivers-icons/General Stratagems/Seismic Probe.svg'
    },
    {
        name: 'Prospecting Drill',
        code: ['down', 'down', 'left', 'right', 'down', 'down'],
        category_id: '6',
        icon: 'public/helldivers-icons/General Stratagems/Prospecting Drill.svg'
    },
    {
        name: 'Super Earth Flag',
        code: ['down', 'up', 'down', 'up'],
        category_id: '6',
        icon: 'public/helldivers-icons/General Stratagems/Super Earth Flag.svg'
    },
    {
        name: 'Orbital Illumination Flare',
        code: ['right', 'right', 'left', 'left'],
        category_id: '6',
        icon: 'public/helldivers-icons/General Stratagems/Orbital Illumination Flare.svg'
    },
    {
        name: 'Tectonic Drill',
        code: ['up', 'down', 'up', 'down', 'up', 'down'],
        category_id: '6',
        icon: 'public/helldivers-icons/General Stratagems/Tectonic Drill.svg'
    },
    {
        name: 'Dark Fluid Vessel',
        code: ['up', 'left', 'right', 'down', 'up', 'up'],
        category_id: '6',
        icon: 'public/helldivers-icons/General Stratagems/Dark Fluid Vessel.svg'
    },
    {
        name: 'Hive Breaker Drill',
        code: ['left', 'up', 'down', 'right', 'down', 'down'],
        category_id: '6',
        icon: 'public/helldivers-icons/General Stratagems/Hive Breaker Drill.svg'
    },
];

const STRATAGEMS = [
    ...PATRIOTIC_ADMINISTRATION_CENTER,
    ...ORBITAL_CANNONS,
    ...HANGER,
    ...BRIDGE,
    ...ENGINEERING_BAY,
    ...ROBOTICS_WORKSHOP,
    ...GENERAL_STRATEGEMS,
];

export { CATEGORIES, STRATAGEMS };