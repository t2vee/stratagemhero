// Copyright (c) 2024 nvigneux. All rights reserved.
// https://github.com/nvigneux/Stratagem-Hero-Trainer/blob/9155ed67aed2bf7ea5e44af83aa2513848d28a33/app/lib/placeholder-data-helldivers.js

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
    },
    {
        name: 'Anti-Materiel Rifle',
        code: ['down', 'left', 'right', 'up', 'down'],
        category_id: '0',
    },
    {
        name: 'Stalwart',
        code: ['down', 'left', 'down', 'up', 'up', 'left'],
        category_id: '0',
    },
    {
        name: 'Expendable Anti-Tank',
        code: ['down', 'down', 'left', 'up', 'right'],
        category_id: '0',
    },
    {
        name: 'Recoilless Rifle',
        code: ['down', 'left', 'right', 'right', 'left'],
        category_id: '0',
    },
    {
        name: 'Flamethrower',
        code: ['down', 'left', 'up', 'down', 'up'],
        category_id: '0',
    },
    {
        name: 'Autocannon',
        code: ['down', 'left', 'down', 'up', 'up', 'right'],
        category_id: '0',
    },
    {
        name: 'Heavy Machine Gun',
        code: ['down', 'left', 'up', 'down', 'down'],
        category_id: '0',
    },
    {
        name: 'Airburst Rocket Launcher',
        code: ['down', 'up', 'up', 'left', 'right'],
        category_id: '0',
    },
    {
        name: 'Railgun',
        code: ['down', 'right', 'down', 'up', 'left', 'right'],
        category_id: '0',
    },
    {
        name: 'Spear',
        code: ['down', 'down', 'up', 'down', 'down'],
        category_id: '0',
    },
];

const ORBITAL_CANNONS = [
    {
        name: 'Orbital Gatling Barrage',
        code: ['right', 'down', 'left', 'up', 'up'],
        category_id: '1',
    },
    {
        name: 'Orbital Airburst Strike',
        code: ['right', 'right', 'right'],
        category_id: '1',
    },
    {
        name: 'Orbital 120MM HE Barrage',
        code: ['right', 'right', 'down', 'left', 'right', 'down'],
        category_id: '1',
    },
    {
        name: 'Orbital 380MM HE Barrage',
        code: ['right', 'down', 'up', 'up', 'left', 'down', 'down'],
        category_id: '1',
    },
    {
        name: 'Orbital Walking Barrage',
        code: ['right', 'down', 'right', 'down', 'right', 'down'],
        category_id: '1',
    },
    {
        name: 'Orbital Laser',
        code: ['right', 'down', 'up', 'right', 'down'],
        category_id: '1',
    },
    {
        name: 'Orbital Railcannon Strike',
        code: ['right', 'up', 'down', 'down', 'right'],
        category_id: '1',
    },
];

const HANGER = [
    {
        name: 'Eagle Strafing Run',
        code: ['up', 'right', 'right'],
        category_id: '2',
    },
    {
        name: 'Eagle Airstrike',
        code: ['up', 'right', 'down', 'right'],
        category_id: '2',
    },
    {
        name: 'Eagle Cluster Bomb',
        code: ['up', 'right', 'down', 'down', 'right'],
        category_id: '2',
    },
    {
        name: 'Eagle Napalm Airstrike',
        code: ['up', 'right', 'down', 'up'],
        category_id: '2',
    },
    {
        name: 'Jump Pack',
        code: ['down', 'up', 'up', 'down', 'up'],
        category_id: '2',
    },
    {
        name: 'Eagle Smoke Strike',
        code: ['up', 'right', 'up', 'down'],
        category_id: '2',
    },
    {
        name: 'Eagle 110MM Rocket Pods',
        code: ['up', 'right', 'up', 'left'],
        category_id: '2',
    },
    {
        name: 'Eagle 500KG Bomb',
        code: ['up', 'right', 'down', 'down', 'down'],
        category_id: '2',
    },
    {
        name: 'Eagle Rearm',
        code: ['up', 'up', 'left', 'up', 'right'],
        category_id: '2',
    },
];

const BRIDGE = [
    {
        name: 'Orbital Precision Strike',
        code: ['right', 'right', 'up'],
        category_id: '3',
    },
    {
        name: 'Orbital Gas Strike',
        code: ['right', 'right', 'down', 'right'],
        category_id: '3',
    },
    {
        name: 'Orbital EMS Strike',
        code: ['right', 'right', 'left', 'down'],
        category_id: '3',
    },
    {
        name: 'Orbital Smoke Strike',
        code: ['right', 'right', 'down', 'up'],
        category_id: '3',
    },
    {
        name: 'HMG Emplacement',
        code: ['down', 'up', 'left', 'right', 'right', 'left'],
        category_id: '3',
    },
    {
        name: 'Shield Generator Relay',
        code: ['down', 'down', 'left', 'right', 'left', 'right'],
        category_id: '3',
    },
    {
        name: 'Tesla Tower',
        code: ['down', 'up', 'right', 'up', 'left', 'right'],
        category_id: '3',
    },
];

const ENGINEERING_BAY = [
    {
        name: 'Anti-Personnel Minefield',
        code: ['down', 'left', 'up', 'right'],
        category_id: '4',
    },
    {
        name: 'Supply Pack',
        code: ['down', 'left', 'down', 'up', 'up', 'down'],
        category_id: '4',
    },
    {
        name: 'Grenade Launcher',
        code: ['down', 'left', 'up', 'left', 'down'],
        category_id: '4',
    },
    {
        name: 'Laser Cannon',
        code: ['down', 'left', 'down', 'up', 'left'],
        category_id: '4',
    },
    {
        name: 'Incendiary Mines',
        code: ['down', 'left', 'left', 'down'],
        category_id: '4',
    },
    {
        name: '“Guard Dog” Rover',
        code: ['down', 'up', 'left', 'up', 'right', 'right'],
        category_id: '4',
    },
    {
        name: 'Ballistic Shield Backpack',
        code: ['down', 'left', 'down', 'down', 'up', 'left'],
        category_id: '4',
    },
    {
        name: 'Arc Thrower',
        code: ['down', 'right', 'down', 'up', 'left', 'left'],
        category_id: '4',
    },
    {
        name: 'Quasar Cannon',
        code: ['down', 'down', 'up', 'left', 'right'],
        category_id: '4',
    },
    {
        name: 'Shield Generator Pack',
        code: ['down', 'up', 'left', 'right', 'left', 'right'],
        category_id: '4',
    },
];

const ROBOTICS_WORKSHOP = [
    {
        name: 'Machine Gun Sentry',
        code: ['down', 'up', 'right', 'right', 'up'],
        category_id: '5',
    },
    {
        name: 'Gatling Sentry',
        code: ['down', 'up', 'right', 'left'],
        category_id: '5',
    },
    {
        name: 'Mortar Sentry',
        code: ['down', 'up', 'right', 'right', 'down'],
        category_id: '5',
    },
    {
        name: '“Guard Dog”',
        code: ['down', 'up', 'left', 'up', 'right', 'down'],
        category_id: '5',
    },
    {
        name: 'Autocannon Sentry',
        code: ['down', 'up', 'right', 'up', 'left', 'up'],
        category_id: '5',
    },
    {
        name: 'Rocket Sentry',
        code: ['down', 'up', 'right', 'right', 'left'],
        category_id: '5',
    },
    {
        name: 'EMS Mortar Sentry',
        code: ['down', 'up', 'right', 'down', 'right'],
        category_id: '5',
    },
    {
        name: 'Patriot Exosuit',
        code: ['left', 'down', 'right', 'up', 'left', 'down', 'down'],
        category_id: '5',
    },
    {
        name: 'Emancipator Exosuit',
        code: ['left', 'down', 'right', 'up', 'left', 'down', 'up'],
        category_id: '5',
    },
];

const GENERAL_STRATEGEMS = [
    {
        name: 'Resupply',
        code: ['down', 'down', 'up', 'right'],
        category_id: '6',
    },
    {
        name: 'Reinforce',
        code: ['up', 'down', 'right', 'left', 'up'],
        category_id: '6',
    },
    {
        name: 'SOS Beacon',
        code: ['up', 'down', 'right', 'up'],
        category_id: '6',
    },
    {
        name: 'Hellbomb',
        code: ['down', 'up', 'left', 'down', 'up', 'right', 'down', 'up'],
        category_id: '6',
    },
    {
        name: 'SEAF Artillery',
        code: ['right', 'up', 'up', 'down'],
        category_id: '6',
    },
    {
        name: 'Seismic Probe',
        code: ['up', 'up', 'left', 'right', 'down', 'down'],
        category_id: '6',
    },
    {
        name: 'Prospecting Drill',
        code: ['down', 'down', 'left', 'right', 'down', 'down'],
        category_id: '6',
    },
    {
        name: 'Super Earth Flag',
        code: ['down', 'up', 'down', 'up'],
        category_id: '6',
    },
    {
        name: 'Orbital Illumination Flare',
        code: ['right', 'right', 'left', 'left'],
        category_id: '6',
    },
    {
        name: 'Tectonic Drill',
        code: ['up', 'down', 'up', 'down', 'up', 'down'],
        category_id: '6',
    },
    {
        name: 'Dark Fluid Vessel',
        code: ['up', 'left', 'right', 'down', 'up', 'up'],
        category_id: '6',
    },
    {
        name: 'Hive Breaker Drill',
        code: ['left', 'up', 'down', 'right', 'down', 'down'],
        category_id: '6',
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