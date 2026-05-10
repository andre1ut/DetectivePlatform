const posts = [
  {
    id: 1,
    author: "Aria Chen",
    initials: "AC",
    handle: "@ariac",
    time: "12m",
    location: "Old Quarter - Dock Gate 3",
    badge: "Priority",
    tone: "hot",
    body:
      "Gate sensor blinked twice right before the power dip. Anyone in range hear a relay click? Marking this with last week blackout timeline.",
    tags: ["#NightShift", "#Signal"],
    stats: { clues: 38, echoes: 12, pins: 6 },
    reply: {
      author: "Riley Knox",
      initials: "RK",
      handle: "@rknox",
      time: "4m",
      body:
        "Heard a faint relay click near the east fence. I will cross-check the blackout log."
    }
  },
  {
    id: 2,
    author: "Miles Ortega",
    initials: "MO",
    handle: "@mortes",
    time: "38m",
    location: "Canal Ridge - Sector 5",
    badge: "Verified",
    tone: "live",
    body:
      "Spotted a courier running the canal ridge at 0400. Dropped a thin envelope with a blue seal. If anyone logged camera angle 7, please share.",
    tags: ["#Courier", "#BlueSeal"],
    stats: { clues: 21, echoes: 9, pins: 3 },
    reply: {
      author: "Samir Lee",
      initials: "SL",
      handle: "@slee",
      time: "10m",
      body:
        "Camera 7 caught a runner at 04:02. Uploading a still to the caseboard now."
    }
  },
  {
    id: 3,
    author: "June Park",
    initials: "JP",
    handle: "@jpark",
    time: "1h",
    location: "Old Tower - East Loop",
    badge: "Watch",
    tone: "live",
    body:
      "Noise map shows a tight cluster near the old tower. Keep comms low and check for repeaters. I will post the heat sketch after shift.",
    tags: ["#Tower", "#Repeaters"],
    stats: { clues: 17, echoes: 6, pins: 4 },
    reply: {
      author: "Noah Drake",
      initials: "ND",
      handle: "@ndrake",
      time: "28m",
      body: "I can mirror the heat sketch once you post it. Any channel preference?"
    }
  },
  {
    id: 4,
    author: "Omar Vale",
    initials: "OV",
    handle: "@oval",
    time: "2h",
    location: "Central Yard - Drift Line",
    badge: "Update",
    tone: "live",
    body:
      "Switching watchlist to manual mode. Drift line shows a three minute gap every 22 minutes. If you are nearby, log the next swing.",
    tags: ["#Drift", "#Watchlist"],
    stats: { clues: 11, echoes: 3, pins: 2 },
    reply: {
      author: "Eva Mark",
      initials: "EM",
      handle: "@emark",
      time: "45m",
      body: "I am near the drift line now. Will log the next swing and report."
    }
  },
  {
    id: 0,
    author: "andre1ut",
    initials: "A1",
    handle: "@andre1ut",
    time: "5h",
    location: "Main Desk",
    badge: "Important Case",
    tone: "hot",
    body:
      "Acum am început să investighez un caz special, Piratul Jack Sparrow! Trebuie să îi analizez activitatea pe care a avut-o pe internet recent. Posibilitățile sunt multe, dar trebuie să încep de undeva.",
    tags: ["#NewCase", "#Sparrow"],
    stats: { clues: 67, echoes: 67, pins: 67 },
    reply: {
      author: "andre1ut",
      initials: "A1",
      handle: "@andre1ut",
      time: "2m",
      body:
        "Pentru cei care văd acest mesaj, tot ce am reușit să obțin pană acum au fost niște informații de pe sherlock. Cu sherlock am reușit să îi dau track down pe la un cabinet veterinar din Clejani."
    }
  }
];

export default posts;
