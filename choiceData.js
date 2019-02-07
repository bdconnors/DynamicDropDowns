var choices = {
    "choices": [{
            "key": "Main",
            "option_0": "Defense",
            "option_1": "Maneuverability",
			"option_2": "Weaponry",
            "description": "Select a Specialization",
            "depth": 0,
			"endPoint": false
        },
		{
            "key": "Defense",
            "option_0": "Armor",
            "option_1": "Funnels",
			"option_2": "Shields",
            "description": "Select a Defense System",
			"property": "Specialization",
            "depth": 1,
			"endPoint": false
        },
		{
            "key": "Armor",
            "option_0": "Assault 'Shroud' Armor",
            "option_1": "'GN' Field Heavy Armor",
            "description": "Select an Armor System",
			"property": "Defense System",
            "depth": 2,
			"endPoint": false
        },
		{
            "key": "Assault 'Shroud' Armor",
            "result": "You have Selected the GAT-X102 Duel Gundam!",
            "imageSrc": "./Images/Defense/Armor/Force Field/GAT-X102.jpg",
			"property": "Armor System Type",
			"depth": 3,
			"endPoint": true
        },
		{
            "key": "'GN' Field Heavy Armor",
            "result": "You have Selected the GN-008 Seravee Gundam!",
            "imageSrc": "./Images/Defense/Armor/Heavy/GN-008.jpg",
			"property": "Armor System Type",
			"depth": 3,
			"endPoint": true
        },
		{
            "key": "Funnels",
            "option_0": "'Psycommu' Funnels",
            "option_1": "AEV/PFF93AR Fin Funnels",
            "description": "Select a Funnel System",
			"property": "Defense System",
            "depth": 2,
			"endPoint": false
        },
		{
            "key": "'Psycommu' Funnels",
            "result": "You have Selected the MSN-04 Sazabi!",
            "imageSrc": "./Images/Defense/Drone System/Light/MSN-04.png",
            "property": "Funnel System Type",
			"depth": 3,
			"endPoint": true
        },
		{
            "key": "AEV/PFF93AR Fin Funnels",
            "result": "You have Selected the RX-93 nu Gundam!",
            "imageSrc": "./Images/Defense/Drone System/Heavy/RX-93.jpg",
            "property": "Funnel System Type",
			"depth": 3,
			"endPoint": true
        },
		{
            "key": "Shields",
            "option_0": "NR-Sh-02-RX/S-00013 Shield",
            "option_1": "Shield System",
            "description": "Select a Shield Type",
			"property": "Defense System",
            "depth": 2,
			"endPoint": false
        },
		{
            "key": "NR-Sh-02-RX/S-00013 Shield",
            "result": "You have Selected the RX-78GP02A Gundam Physalis!",
            "imageSrc": "./Images/Defense/Shields/Single/RX-78GP02A.jpg",
			"property": "Shield Type",
			"depth": 3,
			"endPoint": true
        },
		{
            "key": "Shield System",
            "option_0": "'Core Block' Shield",
            "option_1": "'Quad-Wing' Particle Deflection",
            "description": "Select a Shield System Type",
			"property": "Shield Type",
            "depth": 3,
			"endPoint": false
        },
		{
            "key": "'Core Block' Shield",
            "result": "You have Selected the FA-78 Full Armor Gundam!",
            "imageSrc": "./Images/Defense/Shields/Multiple/Standard/FA-78.png",
			"property": "Shield System Type",
			"depth": 4,
			"endPoint": true
        },
		{
            "key": "'Quad-Wing' Particle Deflection",
            "result": "You have Selected the NZ-666 Kshatriya!",
            "imageSrc": "./Images/Defense/Shields/Multiple/Unique/Nz-666.jpg",
			"property": "Shield System Type",
			"depth": 4,
			"endPoint": true
        },
		{
            "key": "Maneuverability",
            "option_0": "Jetpack",
            "option_1": "Speed System",
			"option_2": "Transformation System",
            "description": "Select a Maneuverability System",
			"property": "Specialization",
            "depth": 1,
			"endPoint": false
        },
		{
            "key": "Jetpack",
            "option_0": "'AQM' Aile Striker Pack",
            "option_1": "'Fatum-00' Weapon Platform Pack",
            "description": "Select a Jetpack System",
			"property": "Maneuverability System",
            "depth": 2,
			"endPoint": false
        },
		{
            "key": "'AQM' Aile Striker Pack",
            "result": "You have Selected the E-X01 Aile Strike Gundam!",
            "imageSrc": "./Images/Maneuverability/Jetpack/Light/E-X01.jpg",
            "description": "Select a Specialization",
			"property": "Jetpack System",
            "depth": 3,
			"endPoint": true
        },
		{
            "key": "'Fatum-00' Weapon Platform Pack",
            "result": "You have Selected the ZGMF-X09A Justice Gundam!",
            "imageSrc": "./Images/Maneuverability/Jetpack/Heavy/ZGMF-X09A.jpg",
            "property": "Jetpack System",
			"depth": 3,
			"endPoint": true
        },
		{
            "key": "Speed System",
            "option_0": "Lightweight 'Movable' Frame",
            "option_1": "'Mirage' Colloid Teleportation",
			"option_2": "Thruster Wings",
            "description": "Select a Speed System",
			"property": "Maneuverability System",
            "depth": 2,
			"endPoint": false
        },
		{
            "key": "Lightweight 'Movable' Frame",
            "result": "You have Selected the MSN-00100 Hyaku Shiki!",
            "imageSrc": "./Images/Maneuverability/Speed/Light Weight Frame/Msn00100.jpg",
            "property": "Speed System",
			"depth": 3,
			"endPoint": true
        },
		{
            "key": "'Mirage' Colloid Teleportation",
            "result": "You have Selected the GAT-X207 Blitz Gundam!",
            "imageSrc": "./Images/Maneuverability/Speed/Teleportation/GAT-X207.jpg",
            "property": "Speed System",
            "depth": 3,
			"endPoint": true
        },
		{
            "key": "Thruster Wings",
            "result": "You have Selected the ASW-G-01 Gundam Bael!",
            "imageSrc": "./Images/Maneuverability/Speed/Wings/ASW-G-01.png",
            "property": "Speed System",
			"depth": 3,
			"endPoint": true
        },
		{
            "key": "Transformation System",
            "option_0": "High Mobility Flight Form",
            "option_1": "High Power 'BIRD' Mode",
			"option_2": "Lightweight Waverider Mode",
            "description": "Select a Transformation System",
			"property": "Maneuverability System",
            "depth": 2,
			"endPoint": false
        },
		{
            "key": "High Mobility Flight Form",
            "result": "You have Selected the GN-007 Arios Gundam!",
            "imageSrc": "./Images/Maneuverability/Transformation/Light Fighter/GN-007.jpg",
            "property": "Transformation System",
			"depth": 3,
			"endPoint": true
        },
		{
            "key": "High Power 'BIRD' Mode",
            "result": "You have Selected the XXXG-01W Wing Gundam!",
            "imageSrc": "./Images/Maneuverability/Transformation/Heavy Fighter/XXXG-01W.png",
            "property": "Transformation System",
			"depth": 3,
			"endPoint": true
        },
		{
            "key": "Lightweight Waverider Mode",
            "result": "You have Selected the MSZ006 Zeta Gundam!",
            "imageSrc": "./Images/Maneuverability/Transformation/Wave Rider/MSZ006.jpg",
            "property": "Transformation System",
			"depth": 3,
			"endPoint": true
        },
		{
            "key": "Weaponry",
            "option_0": "Melee Weapons",
            "option_1": "Ranged Weapons",
            "description": "Select a Weapons System",
			"property": "Specialization",
            "depth": 1,
			"endPoint": false
        },
		{
            "key": "Melee Weapons",
            "option_0": "Polearm",
            "option_1": "Swords",
            "description": "Select a Melee Weapon Type",
			"property": "Weapon System",
            "depth": 2,
			"endPoint": false
        },
		{
            "key": "Ranged Weapons",
            "option_0": "Cannons",
            "option_1": "DRAGOON Drone System",
			"option_2": "Guns",
            "description": "Select a Ranged Weapon Type",
			"property": "Weapon System",
            "depth": 2,
			"endPoint": false
        },
		{
            "key": "DRAGOON Drone System",
            "result": "You have Selected the ZGMF-X13A Providence Gundam!",
            "imageSrc": "./Images/Weaponry/Ranged/Drones/ZGMF-X13A.jpg",
			"property": "Ranged Weapon",
			"depth": 3,
            "endPoint": true
        },
		{
            "key": "Polearm",
            "option_0": "Beam Glaive",
            "option_1": "Beam Scythe",
            "description": "Select a Polearm Type",
			"property": "Melee Weapon Type",
            "depth": 3,
			"endPoint": false
        },
		{
            "key": "Beam Glaive",
            "result": "You have Selected the XXXG-01S Shenlong Gundam!",
            "imageSrc": "./Images/Weaponry/Melee/Polearm/Pike/XXXG-01S.jpg",
            "property": "Weapon",
			"depth": 4,
			"endPoint": true
        },
		{
            "key": "Beam Scythe",
            "result": "You have Selected the XXXG-01D Gundam Deathscythe!",
            "imageSrc": "./Images/Weaponry/Melee/Polearm/Scythe/XXXG-01D.jpg",
            "property": "Weapon",
			"depth": 4,
			"endPoint": true
        },
		{
            "key": "Swords",
            "option_0": "Buster Sword",
            "option_1": "Curved Heat Blades",
            "description": "Select a Sword Type",
			"property": "Melee Weapon Type",
            "depth": 3,
			"endPoint": false
        },
		{
            "key": "Buster Sword",
            "result": "You have Selected the V08Re-0526 Helmwige Reincar!",
            "imageSrc": "./Images/Weaponry/Melee/Sword/Single/V08Re-0526.png",
			"property": "Weapon",
			"depth": 4,
            "endPoint": true
        },
		{
            "key": "Curved Heat Blades",
            "result": "You have Selected the XXXG-01SR Gundam Sandrock!",
            "imageSrc": "./Images/Weaponry/Melee/Sword/Multiple/XXXG-01SR.jpg",
			"property": "Weapon",
			"depth": 4,
            "endPoint": true
        },
		{
            "key": "Cannons",
            "option_0": "Beam Cannon",
            "option_1": "Rail Cannons",
            "description": "Select a Cannon Type",
			"property": "Ranged System",
            "depth": 3,
			"endPoint": false
        },
		{
            "key": "Rail Cannons",
            "result": "You have Selected the ASW-G-64 Gundam Flauros!",
            "imageSrc": "./Images/Weaponry/Ranged/Cannons/Multiple/ASW-G-64.png",
			"property": "Weapon",
			"depth": 4,
            "endPoint": true
        },
		{
            "key": "Beam Cannon",
            "result": "You have Selected the OZ-00MS Tallgeese!",
            "imageSrc": "./Images/Weaponry/Ranged/Cannons/Single/talgeese.jpg",
			"property": "Weapon",
			"depth": 4,
            "endPoint": true
        },
		{
            "key": "Guns",
            "option_0": "Sniper Rifle",
            "option_1": "Gattling Guns",
            "description": "Select a Gun Type",
			"property": "Ranged Weapon Type",
            "depth": 3,
			"endPoint": false
        },
		{
            "key": "Sniper Rifle",
            "result": "You have Selected the GN-002 Gundam Dynames!",
            "imageSrc": "./Images/Weaponry/Ranged/Guns/Single/Gn-002.jpg",
			"property": "Weapon",
			"depth": 4,
            "endPoint": true
        },
		{
            "key": "Gattling Guns",
            "result": "You have Selected the XXXG-01H Gundam Heavyarms!",
            "imageSrc": "./Images/Weaponry/Ranged/Guns/Multiple/XXXG-01H.jpg",
			"property": "Weapon",
			"depth": 4,
            "endPoint": true
        },
    ]
};