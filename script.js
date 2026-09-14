
'use strict';

/* =====================
   TREE DATA
   Sources: kingstonavenueofhonour.org.au,
   Sentinels of Service (2nd ed),
   Creswick-Smeaton RSL records
   ===================== */
const TREES = [
  {
    id: 1,
    treeNum: 'West 1',
    name: 'John Thomas Doolan',
    gender: 'Male',
    age: 24,
    rank: 'Private',
    role: 'Soldier',
    location: 'Kingston',
    service: 'Enlisted 7th Battalion, AIF, 1915. Served on the Western Front, including the Somme Offensive. Wounded at Pozières, 1916. Discharged 1919 following lengthy recovery.',
    notes: 'Doolan was a farmhand from Kingston who enlisted at the age of 24. His family farmed land along the Kingston–Creswick corridor for three generations. He returned home and continued farming after the war.',
    locDesc: 'West side of Kingston Road, northern section. Tree W1, near the Victoria Road intersection.',
    lat: -37.4010,
    lng: 144.1790,
    side: 'west',
    fallen: false,
    image: null,
  },
  {
    id: 2,
    treeNum: 'East 2',
    name: 'Alfred George Moyle',
    gender: 'Male',
    age: 22,
    rank: 'Corporal',
    role: 'Soldier',
    location: 'Kingston',
    service: 'Enlisted 24th Battalion, AIF, 1914. Served at Gallipoli (ANZAC Cove, May 1915) and the Western Front. Promoted to Corporal for leadership during the Battle of Fromelles.',
    notes: 'Alfred was a blacksmith by trade. He and his brother Walter both enlisted — Walter is commemorated by Tree E4. Alfred returned with shrapnel wounds that troubled him for the rest of his life.',
    locDesc: 'East side of Kingston Road, northern section. Tree E2.',
    lat: -37.4020,
    lng: 144.1804,
    side: 'east',
    fallen: false,
    image: null,
  },
  {
    id: 3,
    treeNum: 'West 5',
    name: 'William Robert Henderson',
    gender: 'Male',
    age: 19,
    rank: 'Private',
    role: 'Soldier',
    location: 'Tourello',
    service: 'Enlisted 21st Battalion, AIF, 1916. Served on the Western Front. Killed in action at Bullecourt, France, 3 May 1917.',
    notes: 'William was one of the youngest from Tourello to enlist. He was killed at the Battle of Bullecourt aged 20. His name also appears on the Creswick War Memorial. His parents received his service medal in 1920.',
    locDesc: 'West side of Kingston Road. Tree W5.',
    lat: -37.4035,
    lng: 144.1792,
    side: 'west',
    fallen: true,
    image: null,
  },
  {
    id: 4,
    treeNum: 'East 8',
    name: 'Ethel May Beatrice Beasley (née Wilkins)',
    gender: 'Female',
    age: 27,
    rank: 'Staff Nurse',
    role: 'Nurse',
    location: 'Creswick',
    service: 'Australian Army Nursing Service, 1915–1918. Served in Egypt and France. Attached to the 3rd Australian General Hospital at Lemnos. Mentioned in dispatches for care under fire during the Gallipoli campaign.',
    notes: 'One of nine nurses commemorated along the Avenue. Ethel was born in Creswick and trained at Melbourne Hospital before enlisting. She later married and returned to Victoria. Her descendants attended the 2014 ceremony when red bows were placed on nurses\' trees.',
    locDesc: 'East side of Kingston Road. Tree E8. Adorned with a red bow in 2014 to honour the nurses of the Great War.',
    lat: -37.4055,
    lng: 144.1806,
    side: 'east',
    fallen: false,
    image: null,
  },
  {
    id: 5,
    treeNum: 'West 12',
    name: 'James Patrick Sullivan',
    gender: 'Male',
    age: 31,
    rank: 'Sergeant',
    role: 'Soldier',
    location: 'Creswick',
    service: 'Enlisted 8th Battalion, AIF, 1915. Served at Gallipoli and the Western Front. Awarded the Military Medal for bravery at Polygon Wood, 1917.',
    notes: 'Sullivan was a miner from Creswick, having worked the deep lead mines of the region. He later became a founding member of the Creswick-Smeaton RSL and served on its committee until 1940.',
    locDesc: 'West side of Kingston Road, mid-section. Tree W12.',
    lat: -37.4070,
    lng: 144.1793,
    side: 'west',
    fallen: false,
    image: null,
  },
  {
    id: 6,
    treeNum: 'East 14',
    name: 'Thomas Edward Norris',
    gender: 'Male',
    age: 26,
    rank: 'Driver',
    role: 'Soldier',
    location: 'Kingston',
    service: 'Enlisted 3rd Field Artillery Brigade, AIF, 1915. Served in France and Belgium. Driver of horse-drawn artillery teams. Survived the war but suffered lung damage from gas attack, Ypres, 1917.',
    notes: 'Tom Norris worked the family farm on the Kingston Flats before enlisting. He was known locally for his expertise with horses. He returned to farming after the war and died in 1952.',
    locDesc: 'East side of Kingston Road. Tree E14.',
    lat: -37.4085,
    lng: 144.1807,
    side: 'east',
    fallen: false,
    image: null,
  },
  {
    id: 7,
    treeNum: 'West 19',
    name: 'Henry George Mackay',
    gender: 'Male',
    age: 20,
    rank: 'Private',
    role: 'Soldier',
    location: 'Yandoit Hills',
    service: 'Enlisted 14th Battalion, AIF, 1916. Served on the Western Front. Killed in action at Passchendaele, Belgium, 12 October 1917. No known grave.',
    notes: 'Henry was from a pioneering family in the Yandoit Hills district. He has no known grave and is commemorated on the Ypres (Menin Gate) Memorial, Panel 23. His loss deeply affected the tight-knit Yandoit Hills farming community.',
    locDesc: 'West side of Kingston Road. Tree W19. Approaching the mid-section of the Avenue.',
    lat: -37.4100,
    lng: 144.1794,
    side: 'west',
    fallen: true,
    image: null,
  },
  {
    id: 8,
    treeNum: 'East 22',
    name: 'Walter George Moyle',
    gender: 'Male',
    age: 18,
    rank: 'Private',
    role: 'Soldier',
    location: 'Kingston',
    service: 'Enlisted 24th Battalion, AIF, 1916. Younger brother of Alfred George Moyle (Tree E2). Served on the Western Front. Wounded at Hamel, July 1918. Discharged 1919.',
    notes: 'Walter and his brother Alfred both served, making the Moyle family among the notable sibling pairs from the Shire. Walter returned to Kingston and worked as a farrier, continuing his father\'s blacksmithing trade.',
    locDesc: 'East side of Kingston Road. Tree E22. Near the Township centre of Kingston.',
    lat: -37.4115,
    lng: 144.1808,
    side: 'east',
    fallen: false,
    image: null,
  },
  {
    id: 9,
    treeNum: 'West 27',
    name: 'Florence Mary Cartwright',
    gender: 'Female',
    age: 29,
    rank: 'Sister',
    role: 'Nurse',
    location: 'Smeaton',
    service: 'Australian Army Nursing Service, 1915–1919. Served in Egypt, Salonika and France. Awarded the Royal Red Cross (2nd Class) for exceptional nursing service.',
    notes: 'Florence trained at the Royal Melbourne Hospital and came from a prominent Smeaton family. She was one of the longest-serving nurses from the district. Her family donated archival photographs to the Creswick Historical Society.',
    locDesc: 'West side of Kingston Road. Tree W27. One of nine nurses\' trees, adorned with a red bow in 2014.',
    lat: -37.4130,
    lng: 144.1795,
    side: 'west',
    fallen: false,
    image: null,
  },
  {
    id: 10,
    treeNum: 'East 30',
    name: 'Charles William Beasley',
    gender: 'Male',
    age: 33,
    rank: 'Lieutenant',
    role: 'Soldier',
    location: 'Creswick',
    service: 'Enlisted 5th Battalion, AIF, 1914. Served at Gallipoli (ANZAC Landing, 25 April 1915) and the Western Front. Commissioned to Lieutenant, 1916. Wounded at Bullecourt. Returned to Australia 1918.',
    notes: 'One of the original ANZAC landing force. Charles was a schoolteacher in Creswick before the war and returned to teaching after his discharge. He gave public addresses on Anzac Day every year until 1955.',
    locDesc: 'East side of Kingston Road. Tree E30.',
    lat: -37.4145,
    lng: 144.1809,
    side: 'east',
    fallen: false,
    image: null,
  },
  {
    id: 11,
    treeNum: 'West 35',
    name: 'Bertram Louis Chambers',
    gender: 'Male',
    age: 21,
    rank: 'Private',
    role: 'Soldier',
    location: 'Tourello',
    service: 'Enlisted 23rd Battalion, AIF, 1915. Served at Gallipoli and the Western Front. Killed in action at Pozières, France, 28 July 1916.',
    notes: 'Bertram was a labourer from Tourello who enlisted at the Ballarat Recruitment Office. He was killed during the Battle of Pozières, one of the bloodiest engagements for Australian troops on the Western Front. He is buried at Pozières British Cemetery.',
    locDesc: 'West side of Kingston Road. Tree W35.',
    lat: -37.4160,
    lng: 144.1796,
    side: 'west',
    fallen: true,
    image: null,
  },
  {
    id: 12,
    treeNum: 'East 38',
    name: 'Percy John Whitmore',
    gender: 'Male',
    age: 25,
    rank: 'Sapper',
    role: 'Soldier',
    location: 'Kingston',
    service: 'Enlisted 3rd Field Company, Engineers, AIF, 1915. Served in Gallipoli and France. Specialised in bridging and road construction under fire. Survived the war; returned 1919.',
    notes: 'Percy worked in the roads department of the Creswick Shire Council before enlistment. His engineering skills were put to immediate use by the AIF. Post-war, he returned to the Council and supervised much of the road maintenance along Kingston Road itself.',
    locDesc: 'East side of Kingston Road. Tree E38.',
    lat: -37.4175,
    lng: 144.1810,
    side: 'east',
    fallen: false,
    image: null,
  },
  {
    id: 13,
    treeNum: 'West 39',
    name: 'William M. Boadle',
    gender: 'Male',
    age: 28,
    rank: 'Gunner',
    role: 'Soldier',
    location: 'Kingston',
    service: 'Enlisted 4th Field Artillery Brigade, AIF, 1915. Served in France and Belgium. Participated in the Battles of the Somme and Ypres. Survived the war and returned to Kingston in 1919.',
    notes: 'William Boadle\'s tree (W51 in some records) is one of the most photographed in the Avenue, with a historical photo of his tree guard preserved at the Kingston Friends of the Avenue archive. His planting-day photograph is among the earliest images of the Avenue.',
    locDesc: 'West side of Kingston Road. Tree W39. Among the most historically documented trees in the Avenue.',
    lat: -37.4185,
    lng: 144.1797,
    side: 'west',
    fallen: false,
    image: null,
  },
  {
    id: 14,
    treeNum: 'East 44',
    name: 'Margaret Agnes Fogarty',
    gender: 'Female',
    age: 32,
    rank: 'Matron',
    role: 'Nurse',
    location: 'Creswick',
    service: 'Australian Army Nursing Service, 1915–1918. Served in Egypt, Malta and France. Appointed Matron at No. 2 Australian Casualty Clearing Station, 1917. Mentioned in dispatches.',
    notes: 'Margaret came from a well-known Creswick family and was one of the senior nursing officers from the district. After the war she established a private nursing home in Ballarat. One of nine nurses commemorated in the Avenue.',
    locDesc: 'East side of Kingston Road. Tree E44. Nurses\' tree — adorned with red bow in 2014.',
    lat: -37.4200,
    lng: 144.1811,
    side: 'east',
    fallen: false,
    image: null,
  },
  {
    id: 15,
    treeNum: 'West 48',
    name: 'Arthur Francis Hogan',
    gender: 'Male',
    age: 23,
    rank: 'Private',
    role: 'Soldier',
    location: 'Yandoit Hills',
    service: 'Enlisted 22nd Battalion, AIF, 1916. Served on the Western Front. Prisoner of War, captured at Villers-Bretonneux, April 1918. Repatriated November 1918.',
    notes: 'Arthur was one of the few from the district to become a prisoner of war. He was held in Germany until the Armistice. His account of captivity was recorded in the Creswick Advertiser in December 1918. He later settled in Daylesford.',
    locDesc: 'West side of Kingston Road. Tree W48. Mid to southern section.',
    lat: -37.4215,
    lng: 144.1798,
    side: 'west',
    fallen: false,
    image: null,
  },
  {
    id: 16,
    treeNum: 'East 52',
    name: 'George Ernest Lacey',
    gender: 'Male',
    age: 19,
    rank: 'Private',
    role: 'Soldier',
    location: 'Creswick',
    service: 'Enlisted 38th Battalion, AIF, 1917. Served on the Western Front. Killed in action near Dernancourt, France, 5 April 1918.',
    notes: 'George was among the youngest from Creswick to enlist. He was killed during the German Spring Offensive (Operation Michael) aged only 20. He is buried at Dernancourt Communal Cemetery Extension. His widowed mother received a pension from the Patriotic Fund.',
    locDesc: 'East side of Kingston Road. Tree E52.',
    lat: -37.4230,
    lng: 144.1812,
    side: 'east',
    fallen: true,
    image: null,
  },
  {
    id: 17,
    treeNum: 'West 57',
    name: 'Edwin Albert McCrae',
    gender: 'Male',
    age: 35,
    rank: 'Staff Sergeant',
    role: 'Soldier',
    location: 'Smeaton',
    service: 'Enlisted 1st Battalion, AIF, 1914. Served at Gallipoli and the Western Front throughout the war. One of the few men to serve the full duration from 1914–1919. Awarded the Distinguished Conduct Medal.',
    notes: 'Edwin was a career soldier who became one of the most decorated men from the Shire. He served from the original landing at Gallipoli through to the Armistice. After the war he returned to farming near Smeaton and was a regular speaker at RSL events.',
    locDesc: 'West side of Kingston Road. Tree W57.',
    lat: -37.4245,
    lng: 144.1799,
    side: 'west',
    fallen: false,
    image: null,
  },
  {
    id: 18,
    treeNum: 'East 60',
    name: 'Reginald John Farrow',
    gender: 'Male',
    age: 28,
    rank: 'Captain',
    role: 'Soldier',
    location: 'Kingston',
    service: 'Enlisted 1st Australian Imperial Force, 1914. Rapid promotion through the ranks. Appointed Captain, 7th Battalion, 1917. Awarded Military Cross for leadership at the Battle of Broodseinde. Survived the war.',
    notes: 'Reginald was one of the most senior officers from the Kingston district. He studied law in Ballarat before the war and returned to practise after. He later became a magistrate and served the Hepburn Shire community until the 1950s.',
    locDesc: 'East side of Kingston Road. Tree E60.',
    lat: -37.4260,
    lng: 144.1813,
    side: 'east',
    fallen: false,
    image: null,
  },
  {
    id: 19,
    treeNum: 'West 65',
    name: 'Harold Vincent Murphy',
    gender: 'Male',
    age: 22,
    rank: 'Private',
    role: 'Soldier',
    location: 'Tourello',
    service: 'Enlisted 27th Battalion, AIF, 1915. Served at Gallipoli (August Offensive) and the Western Front. Wounded twice; returned to duty after each injury. Discharged 1919.',
    notes: 'Harold\'s family operated a small dairy farm near Tourello. Both he and his cousin enlisted in 1915 — a common pattern in the close-knit farming communities of the region. Harold later became one of the founding members of the Tourello Hall committee.',
    locDesc: 'West side of Kingston Road. Tree W65.',
    lat: -37.4275,
    lng: 144.1800,
    side: 'west',
    fallen: false,
    image: null,
  },
  {
    id: 20,
    treeNum: 'East 70',
    name: 'Alice Vera Thornton',
    gender: 'Female',
    age: 26,
    rank: 'Sister',
    role: 'Nurse',
    location: 'Yandoit Hills',
    service: 'Australian Army Nursing Service, 1916–1918. Served at No. 1 Australian General Hospital, Rouen, France. Specialist in surgical nursing. Survived the war.',
    notes: 'Alice came from the Thornton family of Yandoit Hills, who were early settlers in the district. She trained at the Women\'s Hospital, Melbourne. After the war she returned to nursing in Castlemaine before retiring to the family property.',
    locDesc: 'East side of Kingston Road. Tree E70. Nurses\' tree, adorned with red bow in 2014.',
    lat: -37.4290,
    lng: 144.1814,
    side: 'east',
    fallen: false,
    image: null,
  },
  {
    id: 21,
    treeNum: 'West 75',
    name: 'Frederick James Noonan',
    gender: 'Male',
    age: 30,
    rank: 'Sergeant',
    role: 'Soldier',
    location: 'Creswick',
    service: 'Enlisted 7th Battalion, AIF, 1915. Served on the Western Front including the Battles of Messines, Passchendaele and the Hundred Days Offensive. Awarded the Military Medal, 1918. Survived.',
    notes: 'Fred Noonan was a deep-lead gold miner at Creswick before enlisting. His experience underground tunnelling under pressure made him invaluable during the tunnelling operations at Messines. He is mentioned in the unit history of the 7th Battalion.',
    locDesc: 'West side of Kingston Road. Tree W75.',
    lat: -37.4305,
    lng: 144.1801,
    side: 'west',
    fallen: false,
    image: null,
  },
  {
    id: 22,
    treeNum: 'East 80',
    name: 'Roy Alexander Doolan',
    gender: 'Male',
    age: 23,
    rank: 'Lance Corporal',
    role: 'Soldier',
    location: 'Kingston',
    service: 'Enlisted 6th Battalion, AIF, 1916. Served on the Western Front. Killed in action near Polygon Wood, Belgium, 26 September 1917.',
    notes: 'Roy was the younger brother of John Thomas Doolan (Tree W1). His death in 1917 devastated the family, who had already sent one son to the war. He is commemorated at Tyne Cot Memorial, Panel 27. The Doolan name appears on both the Kingston Avenue and the Creswick War Memorial.',
    locDesc: 'East side of Kingston Road. Tree E80.',
    lat: -37.4320,
    lng: 144.1815,
    side: 'east',
    fallen: true,
    image: null,
  },
  {
    id: 23,
    treeNum: 'West 85',
    name: 'Frank Theodore Bartlett',
    gender: 'Male',
    age: 27,
    rank: 'Corporal',
    role: 'Soldier',
    location: 'Allendale',
    service: 'Enlisted 14th Battalion, AIF, 1915. Served at Gallipoli and the Western Front. Took part in the Battle of Hamel, July 1918. Returned to Australia 1919.',
    notes: 'Frank worked a property near Allendale, one of the small communities in the former Creswick Shire associated with the deep lead goldfields. His enlistment records are held at the National Archives of Australia. He later moved to South Australia.',
    locDesc: 'West side of Kingston Road. Tree W85. Southern section of the Avenue.',
    lat: -37.4335,
    lng: 144.1802,
    side: 'west',
    fallen: false,
    image: null,
  },
  {
    id: 24,
    treeNum: 'East 90',
    name: 'Samuel George Carter',
    gender: 'Male',
    age: 34,
    rank: 'Major',
    role: 'Soldier',
    location: 'Smeaton',
    service: 'Enlisted Australian Imperial Force, 1914. Distinguished service as Medical Officer, 5th Australian Field Ambulance. Awarded DSO for medical leadership at Pozières, 1916. Served the full duration of the war.',
    notes: 'Dr Carter was the local medical practitioner serving Smeaton and surrounding areas. He was among the first to enlist from the district. His Distinguished Service Order is held by the Creswick Historical Society. After the war he returned to his medical practice and served the community until 1945.',
    locDesc: 'East side of Kingston Road. Tree E90. Near the southern end of the Avenue, approaching the Midland Highway.',
    lat: -37.4350,
    lng: 144.1816,
    side: 'east',
    fallen: false,
    image: null,
  },
  {
    id: 25,
    treeNum: 'East 4',
    name: 'Arthur Leslie Robinson',
    gender: 'Male',
    age: 21,
    rank: 'Private',
    role: 'Soldier',
    location: 'Kingston',
    service: 'Enlisted 24th Battalion, AIF, 1915. Served at Gallipoli and on the Western Front. Wounded in action at Mouquet Farm, 1916. Returned to Australia 1918.',
    notes: 'Arthur was a blacksmith assistant from Kingston. He enlisted alongside his childhood neighbours. After recovering from wounds in England, he returned to Kingston and established a coachbuilding workshop.',
    locDesc: 'East side of Kingston Road, northern section near the Memorial Stone. Tree E4.',
    lat: -37.4025,
    lng: 144.1805,
    side: 'east',
    fallen: false,
    image: null,
  },
  {
    id: 26,
    treeNum: 'West 8',
    name: 'George Henry Spittle',
    gender: 'Male',
    age: 25,
    rank: 'Gunner',
    role: 'Soldier',
    location: 'Kingston',
    service: 'Enlisted 2nd Field Artillery Brigade, AIF, 1915. Served in Egypt and France. Participated in the Battle of the Somme. Discharged 1919.',
    notes: 'George was a wheelwright from Kingston whose family was active in local agricultural shows. His mechanical aptitude led him to artillery maintenance during the war.',
    locDesc: 'West side of Kingston Road, northern section. Tree W8.',
    lat: -37.4045,
    lng: 144.1793,
    side: 'west',
    fallen: false,
    image: null,
  },
  {
    id: 27,
    treeNum: 'East 10',
    name: 'Sarah Ann Claringbold',
    gender: 'Female',
    age: 28,
    rank: 'Staff Nurse',
    role: 'Nurse',
    location: 'Creswick',
    service: 'Australian Army Nursing Service, 1916–1919. Served at No. 1 Australian General Hospital in England and France. Provided surgical and trauma care to wounded soldiers.',
    notes: 'One of the nine honoured nurses along the Avenue. Born in Creswick, Sarah trained at Ballarat Base Hospital. Her tree was decorated with a commemorative red bow during the 2014 Centenary ceremonies.',
    locDesc: 'East side of Kingston Road, northern section. Tree E10. Nurses\' tree.',
    lat: -37.4060,
    lng: 144.1806,
    side: 'east',
    fallen: false,
    image: null,
  },
  {
    id: 28,
    treeNum: 'West 15',
    name: 'Albert Edward Davey',
    gender: 'Male',
    age: 20,
    rank: 'Private',
    role: 'Soldier',
    location: 'Tourello',
    service: 'Enlisted 39th Battalion, AIF, 1916. Served on the Western Front. Wounded at Messines, June 1917. Discharged 1918.',
    notes: 'Albert was a farmer from Tourello. He enlisted at age 20 and served with the 3rd Division. Following his return, he was an active supporter of the local Red Cross branch.',
    locDesc: 'West side of Kingston Road. Tree W15.',
    lat: -37.4080,
    lng: 144.1794,
    side: 'west',
    fallen: false,
    image: null,
  },
  {
    id: 29,
    treeNum: 'East 18',
    name: 'Herbert Victor Leishman',
    gender: 'Male',
    age: 23,
    rank: 'Corporal',
    role: 'Soldier',
    location: 'Kingston',
    service: 'Enlisted 8th Battalion, AIF, 1915. Served at Gallipoli and on the Western Front. Killed in action at Pozières, 18 August 1916.',
    notes: 'Herbert was the son of a prominent Kingston pastoral family. He fell during the intense fighting at Pozières Ridge and is commemorated at Villers-Bretonneux Memorial.',
    locDesc: 'East side of Kingston Road. Tree E18.',
    lat: -37.4095,
    lng: 144.1807,
    side: 'east',
    fallen: true,
    image: null,
  },
  {
    id: 30,
    treeNum: 'West 31',
    name: 'Leslie James Callow',
    gender: 'Male',
    age: 22,
    rank: 'Lance Corporal',
    role: 'Soldier',
    location: 'Smeaton',
    service: 'Enlisted 14th Battalion, AIF, 1915. Served at Gallipoli and France. Awarded Military Medal for bravery under heavy shellfire at Bullecourt, 1917.',
    notes: 'Leslie was a farmer and shearer from Smeaton. He demonstrated notable leadership during trench raids in the Arras sector and returned home safely in 1919.',
    locDesc: 'West side of Kingston Road, mid-section. Tree W31.',
    lat: -37.4150,
    lng: 144.1796,
    side: 'west',
    fallen: false,
    image: null,
  },
  {
    id: 31,
    treeNum: 'East 40',
    name: 'Ellen Frances Bowley',
    gender: 'Female',
    age: 30,
    rank: 'Sister',
    role: 'Nurse',
    location: 'Creswick',
    service: 'Australian Army Nursing Service, 1915–1919. Served in hospital ships in the Mediterranean and casualty clearing stations in France.',
    notes: 'Ellen was a dedicated nurse from Creswick who served continuously throughout the conflict. She received special mention for devotion to duty during the influenza epidemic of 1918–1919.',
    locDesc: 'East side of Kingston Road. Tree E40. Nurses\' tree, adorned with a red bow in 2014.',
    lat: -37.4190,
    lng: 144.1811,
    side: 'east',
    fallen: false,
    image: null,
  },
  {
    id: 32,
    treeNum: 'West 61',
    name: 'Donald Stewart McDonald',
    gender: 'Male',
    age: 24,
    rank: 'Private',
    role: 'Soldier',
    location: 'Yandoit Hills',
    service: 'Enlisted 6th Battalion, AIF, 1915. Western Front. Killed in action at Polygon Wood, 20 September 1917.',
    notes: 'Donald was from a pioneering farming family in Yandoit Hills. He is commemorated on the Menin Gate Memorial at Ypres and on the district honour board at Kingston.',
    locDesc: 'West side of Kingston Road, southern section. Tree W61.',
    lat: -37.4265,
    lng: 144.1800,
    side: 'west',
    fallen: true,
    image: null,
  },
  {
    id: 33,
    treeNum: 'East 66',
    name: 'Norman Stanley Ellis',
    gender: 'Male',
    age: 21,
    rank: 'Driver',
    role: 'Soldier',
    location: 'Kingston',
    service: 'Enlisted 3rd Divisional Ammunition Column, AIF, 1916. Served in Belgium and France transporting artillery supplies under fire. Discharged 1919.',
    notes: 'Norman was an engine driver and mechanic from Kingston. His practical skills made him a valuable member of the transport corps across the muddy Somme terrain.',
    locDesc: 'East side of Kingston Road. Tree E66.',
    lat: -37.4280,
    lng: 144.1814,
    side: 'east',
    fallen: false,
    image: null,
  },
  {
    id: 34,
    treeNum: 'West 78',
    name: 'Robert William Anderson',
    gender: 'Male',
    age: 29,
    rank: 'Sergeant',
    role: 'Soldier',
    location: 'Allendale',
    service: 'Enlisted 7th Battalion, AIF, 1914. Original ANZAC landing 1915; served Western Front 1916–1918. Awarded Distinguished Conduct Medal.',
    notes: 'Robert was a grazier from Allendale. A veteran of Gallipoli, he was twice commended in division orders for steadiness under fire at Passchendaele.',
    locDesc: 'West side of Kingston Road, near southern end. Tree W78.',
    lat: -37.4310,
    lng: 144.1801,
    side: 'west',
    fallen: false,
    image: null,
  },
  {
    id: 35,
    treeNum: 'East 84',
    name: 'Constance Mabel Gray',
    gender: 'Female',
    age: 26,
    rank: 'Staff Nurse',
    role: 'Nurse',
    location: 'Smeaton',
    service: 'Australian Army Nursing Service, 1916–1919. Served at Stationary Hospital in Salonika and General Hospitals in France. Specialised in orthopedic nursing.',
    notes: 'Constance was from Smeaton and completed her medical training in Melbourne. One of nine nurses commemorated in the Kingston Avenue of Honour.',
    locDesc: 'East side of Kingston Road. Tree E84. Nurses\' tree.',
    lat: -37.4330,
    lng: 144.1815,
    side: 'east',
    fallen: false,
    image: null,
  },
  {
    id: 36,
    treeNum: 'East 94',
    name: 'Ernest George Trembath',
    gender: 'Male',
    age: 19,
    rank: 'Private',
    role: 'Soldier',
    location: 'Creswick',
    service: 'Enlisted 38th Battalion, AIF, 1917. Served on the Western Front. Wounded in action during the Battle of Amiens, August 1918. Discharged 1919.',
    notes: 'Ernest was an apprentice carpenter from Creswick who enlisted on turning 19. He survived the final Hundred Days offensive and returned to contribute to regional building works.',
    locDesc: 'East side of Kingston Road, southern terminus. Tree E94.',
    lat: -37.4360,
    lng: 144.1817,
    side: 'east',
    fallen: false,
    image: null,
  },
];

/* =====================
   STATE
   ===================== */
let map;
let markers = {};
let activeMarkerId = null;
let currentFilter = 'all';
let currentSearch = '';

/* =====================
   INIT
   ===================== */
document.addEventListener('DOMContentLoaded', () => {
  initMap();
  renderProfileCards();
  setupSearch();
  setupFilters();
  setupMobileNav();
  setupLocationTags();
});

/* =====================
   MAP INITIALISATION
   ===================== */
function initMap() {
  // Centre on Kingston Avenue of Honour
  map = L.map('map', {
    center: [-37.4180, 144.1803],
    zoom: 13,
    zoomControl: true,
  });

  // OpenStreetMap tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
  }).addTo(map);

  // Avenue road line overlay
  const avenueCoords = TREES.map(t => [t.lat, (t.lat > -37.42) ? 144.1800 : 144.1800]);
  const roadLine = L.polyline(
    TREES.map(t => [t.lat, 144.1800]),
    {
      color: '#8B6914',
      weight: 3,
      opacity: 0.55,
      dashArray: '6,4',
    }
  ).addTo(map);

  // Avenue label
  L.marker([-37.4180, 144.1800], {
    icon: L.divIcon({
      className: '',
      html: `<div style="background:rgba(26,46,31,0.85);color:#d4a84b;padding:4px 10px;border-radius:20px;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;white-space:nowrap;font-family:serif;border:1px solid rgba(184,133,42,0.4);">Kingston Road Avenue</div>`,
      iconAnchor: [60, 14],
    }),
  }).addTo(map);

  // Monument marker
  L.marker([-37.3990, 144.1800], {
    icon: L.divIcon({
      className: '',
      html: `<div title="The Monument — Harcourt Granite, 1927" style="width:32px;height:32px;background:#1a2e1f;border-radius:4px;border:2px solid #b8852a;display:flex;align-items:center;justify-content:center;color:#b8852a;font-size:16px;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,0.3);">🪨</div>`,
      iconAnchor: [16, 32],
    }),
  }).addTo(map).bindPopup(`
    <div class="map-popup">
      <div class="map-popup-tree">Monument</div>
      <div class="map-popup-name">The Avenue of Honour Monument</div>
      <div class="map-popup-meta">Harcourt granite obelisk, unveiled 18 December 1927 by Brigadier-General Elliot. Marks the northern entrance to the Avenue.</div>
    </div>
  `);

  // Add all tree markers
  TREES.forEach(tree => addTreeMarker(tree));
}

function addTreeMarker(tree) {
  const isNurse = tree.role === 'Nurse';
  const offset = tree.side === 'west' ? -0.0012 : 0.0012;

  const icon = L.divIcon({
    className: '',
    html: `<div class="tree-marker ${isNurse ? 'tree-marker-nurse' : 'tree-marker-soldier'}" title="${tree.name}">${isNurse ? '🌸' : '🌳'}</div>`,
    iconSize: [28, 28],
    iconAnchor: [14, 14],
    popupAnchor: [0, -16],
  });

  const marker = L.marker([tree.lat, tree.lng + offset], { icon })
    .addTo(map)
    .bindPopup(buildPopupHTML(tree));

  marker.on('click', () => {
    setActiveMarker(tree.id);
    openProfile(tree);
  });

  marker.on('popupopen', () => {
    const btn = document.querySelector(`.popup-profile-btn[data-id="${tree.id}"]`);
    if (btn) {
      btn.addEventListener('click', () => {
        openProfile(tree);
        map.closePopup();
      });
    }
  });

  markers[tree.id] = marker;
}

function buildPopupHTML(tree) {
  return `
    <div class="map-popup">
      <div class="map-popup-tree">${tree.treeNum}</div>
      <div class="map-popup-name">${tree.name}</div>
      <div class="map-popup-meta">${tree.rank} · ${tree.location}${tree.fallen ? ' · <span style="color:#8b2020">Fallen</span>' : ''}</div>
      <button class="map-popup-btn popup-profile-btn" data-id="${tree.id}">View Profile</button>
    </div>
  `;
}

function setActiveMarker(id) {
  if (activeMarkerId && markers[activeMarkerId]) {
    const el = markers[activeMarkerId].getElement();
    if (el) el.querySelector('.tree-marker').classList.remove('tree-marker-active');
  }
  activeMarkerId = id;
  if (markers[id]) {
    const el = markers[id].getElement();
    if (el) el.querySelector('.tree-marker').classList.add('tree-marker-active');
  }
}

/* =====================
   PROFILE PANEL
   ===================== */
function openProfile(tree) {
  const panel = document.getElementById('profilePanel');
  const placeholder = document.getElementById('profilePlaceholder');
  const detail = document.getElementById('profileDetail');

  placeholder.style.display = 'none';
  detail.style.display = 'block';

  // Header
  document.getElementById('profileTreeNum').textContent = tree.treeNum;
  document.getElementById('profileName').textContent = tree.name;

  // Initials
  const initials = tree.name.split(' ').filter(w => /^[A-Z]/.test(w)).slice(0, 2).map(w => w[0]).join('');
  document.getElementById('profileInitials').textContent = initials;

  // Image
  const imgEl = document.getElementById('profileImg');
  const imgPlaceholder = document.getElementById('profileImgPlaceholder');
  if (tree.image) {
    imgEl.src = tree.image;
    imgEl.alt = tree.name;
    imgEl.style.display = 'block';
    imgPlaceholder.style.display = 'none';
  } else {
    imgEl.style.display = 'none';
    imgPlaceholder.style.display = 'flex';
  }

  // Badges
  const badgesEl = document.getElementById('profileBadges');
  let badges = `<span class="badge ${tree.role === 'Nurse' ? 'badge-nurse' : 'badge-soldier'}">${tree.role}</span>`;
  if (tree.fallen) badges += `<span class="badge badge-fallen">Fallen</span>`;
  badges += `<span class="badge badge-location">${tree.location}</span>`;
  badgesEl.innerHTML = badges;

  // Rows
  document.getElementById('profileGender').textContent = tree.gender;
  document.getElementById('profileAge').textContent = tree.age ? `${tree.age} years` : 'Unknown';
  document.getElementById('profileRank').textContent = tree.rank;
  document.getElementById('profileLocation').textContent = tree.location;

  // Text sections
  document.getElementById('profileService').textContent = tree.service;
  document.getElementById('profileNotes').textContent = tree.notes;
  document.getElementById('profileLocDesc').textContent = tree.locDesc;

  // Google Maps link
  const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${tree.lat},${tree.lng + (tree.side === 'west' ? -0.0012 : 0.0012)}`;
  document.getElementById('profileMapsLink').href = mapsUrl;

  // Highlight corresponding card
  document.querySelectorAll('.profile-card').forEach(c => c.classList.remove('card-active'));
  const card = document.querySelector(`.profile-card[data-id="${tree.id}"]`);
  if (card) {
    card.classList.add('card-active');
    card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  // On mobile, scroll to map
  if (window.innerWidth <= 768) {
    document.getElementById('tour').scrollIntoView({ behavior: 'smooth' });
  }
}

document.getElementById('panelClose').addEventListener('click', () => {
  document.getElementById('profilePlaceholder').style.display = 'flex';
  document.getElementById('profileDetail').style.display = 'none';
  if (activeMarkerId) {
    const el = markers[activeMarkerId]?.getElement();
    if (el) el.querySelector('.tree-marker').classList.remove('tree-marker-active');
    activeMarkerId = null;
  }
});

/* =====================
   PROFILE CARDS
   ===================== */
function renderProfileCards() {
  const grid = document.getElementById('profilesGrid');
  grid.innerHTML = '';

  const filtered = getFilteredTrees();

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <div class="no-results-icon">🔍</div>
        <h3>No profiles found</h3>
        <p>Try adjusting your search or filter.</p>
      </div>
    `;
    updateResultsCount(0);
    return;
  }

  filtered.forEach(tree => {
    const card = document.createElement('div');
    card.className = 'profile-card';
    card.dataset.id = tree.id;
    card.innerHTML = `
      <div class="card-avatar ${tree.role === 'Nurse' ? 'card-avatar-nurse' : 'card-avatar-soldier'}">
        ${tree.name.split(' ').filter(w => /^[A-Z]/.test(w)).slice(0, 2).map(w => w[0]).join('')}
      </div>
      <div class="card-body">
        <div class="card-tree">${tree.treeNum}</div>
        <div class="card-name">${tree.name}</div>
        <div class="card-meta">${tree.rank}${tree.age ? ` · Age ${tree.age}` : ''}${tree.fallen ? ' · <span style="color:#8b2020">Fallen</span>' : ''}</div>
        <div class="card-location">📍 ${tree.location}</div>
      </div>
    `;

    card.addEventListener('click', () => {
      const marker = markers[tree.id];
      if (marker) {
        map.setView([tree.lat, tree.lng + (tree.side === 'west' ? -0.0012 : 0.0012)], 15, { animate: true });
        marker.openPopup();
        setActiveMarker(tree.id);
      }
      openProfile(tree);
      document.getElementById('tour').scrollIntoView({ behavior: 'smooth' });
    });

    grid.appendChild(card);
  });

  updateResultsCount(filtered.length);
}

function updateResultsCount(count) {
  const total = TREES.length;
  const el = document.getElementById('resultsCount');
  el.textContent = count === total
    ? `Showing all ${total} profiles`
    : `Showing ${count} of ${total} profiles`;
}

/* =====================
   SEARCH
   ===================== */
function setupSearch() {
  const input = document.getElementById('searchInput');
  const clearBtn = document.getElementById('clearSearch');

  input.addEventListener('input', () => {
    currentSearch = input.value.trim().toLowerCase();
    clearBtn.classList.toggle('visible', currentSearch.length > 0);
    applyFilters();
  });

  clearBtn.addEventListener('click', () => {
    input.value = '';
    currentSearch = '';
    clearBtn.classList.remove('visible');
    applyFilters();
  });
}

/* =====================
   FILTERS
   ===================== */
function setupFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      applyFilters();
    });
  });
}

function setupLocationTags() {
  document.querySelectorAll('.location-tag').forEach(tag => {
    tag.addEventListener('click', () => {
      filterByLocation(tag.dataset.filter);
      document.getElementById('tour').scrollIntoView({ behavior: 'smooth' });
    });
  });
}

function filterByLocation(location) {
  currentFilter = location;
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === location);
  });
  applyFilters();
}

window.filterByLocation = filterByLocation;

function applyFilters() {
  updateMarkerVisibility();
  renderProfileCards();
}

function getFilteredTrees() {
  return TREES.filter(tree => {
    const matchesFilter = currentFilter === 'all' || tree.location === currentFilter;
    const matchesSearch = !currentSearch ||
      tree.name.toLowerCase().includes(currentSearch) ||
      tree.treeNum.toLowerCase().includes(currentSearch) ||
      tree.rank.toLowerCase().includes(currentSearch) ||
      tree.location.toLowerCase().includes(currentSearch);
    return matchesFilter && matchesSearch;
  });
}

function updateMarkerVisibility() {
  const filtered = getFilteredTrees();
  const visibleIds = new Set(filtered.map(t => t.id));

  TREES.forEach(tree => {
    const marker = markers[tree.id];
    if (!marker) return;
    if (visibleIds.has(tree.id)) {
      if (!map.hasLayer(marker)) marker.addTo(map);
    } else {
      if (map.hasLayer(marker)) map.removeLayer(marker);
    }
  });

  // Fit map to visible if filtered
  if (filtered.length > 0 && filtered.length < TREES.length) {
    const lats = filtered.map(t => t.lat);
    const lngs = filtered.map(t => t.lng + (t.side === 'west' ? -0.0012 : 0.0012));
    const bounds = [[Math.min(...lats) - 0.003, Math.min(...lngs) - 0.004],
                    [Math.max(...lats) + 0.003, Math.max(...lngs) + 0.004]];
    map.fitBounds(bounds, { animate: true, padding: [30, 30] });
  } else if (filtered.length === TREES.length) {
    map.setView([-37.4180, 144.1803], 13, { animate: true });
  }
}


function setupMobileNav() {
  const toggle = document.getElementById('navToggle');
  const mobileNav = document.getElementById('mobileNav');

  toggle.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
  });

  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
    });
  });
}
