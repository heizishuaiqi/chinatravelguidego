import { Attraction } from '@/types';

export const attractions: Attraction[] = [
  // 北京景点
  {
    id: 'forbidden-city',
    title: 'Forbidden City',
    description: 'The former imperial palace and the world\'s largest palace complex',
    slug: 'forbidden-city',
    destination: 'Beijing',
    category: 'Historical Site',
    rating: 4.8,
    openTime: '8:30 AM - 5:00 PM (April-October), 8:30 AM - 4:30 PM (November-March)',
    ticketPrice: '¥60 (April-October), ¥40 (November-March)',
    address: '4 Jingshan Front Street, Dongcheng District, Beijing',
    transportation: ['Metro Line 1 to Tiananmen East', 'Bus routes 1, 2, 10, 20, 82'],
    highlights: [
      'World\'s largest palace complex',
      'UNESCO World Heritage Site',
      'Over 9,000 rooms',
      'Traditional Chinese architecture'
    ],
    tips: [
      'Book tickets online in advance',
      'Visit early morning to avoid crowds',
      'Allow 3-4 hours for full visit',
      'Audio guide recommended'
    ]
  },
  {
    id: 'great-wall-badaling',
    title: 'Great Wall of China (Badaling)',
    description: 'The most famous section of the Great Wall, closest to Beijing',
    slug: 'great-wall-badaling',
    destination: 'Beijing',
    category: 'Historical Site',
    rating: 4.7,
    openTime: '6:00 AM - 7:30 PM (April-October), 7:00 AM - 6:00 PM (November-March)',
    ticketPrice: '¥40 (Peak season), ¥35 (Off season)',
    address: 'Badaling, Yanqing District, Beijing',
    transportation: ['Badaling Express Train', 'Tour buses', 'Private car'],
    highlights: [
      'Most famous section of Great Wall',
      'UNESCO World Heritage Site',
      'Restored and well-maintained',
      'Cable car available'
    ],
    tips: [
      'Arrive early to avoid crowds',
      'Wear comfortable walking shoes',
      'Bring water and snacks',
      'Consider less crowded sections like Mutianyu'
    ]
  },
  {
    id: 'temple-of-heaven',
    title: 'Temple of Heaven',
    description: 'Imperial temple where emperors prayed for good harvests',
    slug: 'temple-of-heaven',
    destination: 'Beijing',
    category: 'Religious Site',
    rating: 4.6,
    openTime: '6:00 AM - 10:00 PM (Park), 8:00 AM - 5:30 PM (Temples)',
    ticketPrice: '¥15 (Park), ¥35 (Including temples)',
    address: 'Tiantan Road, Dongcheng District, Beijing',
    transportation: ['Metro Line 5 to Tiantan Dongmen', 'Bus routes 6, 34, 35, 36'],
    highlights: [
      'UNESCO World Heritage Site',
      'Perfect example of Ming architecture',
      'Beautiful park and gardens',
      'Echo Wall acoustic phenomenon'
    ],
    tips: [
      'Visit early morning to see locals practicing Tai Chi',
      'Combine park and temple tickets',
      'Try the echo effect at Echo Wall',
      'Beautiful in all seasons'
    ]
  },
  {
    id: 'summer-palace',
    title: 'Summer Palace',
    description: 'Imperial garden and palace complex with beautiful lake views',
    slug: 'summer-palace',
    destination: 'Beijing',
    category: 'Historical Site',
    rating: 4.7,
    openTime: '6:30 AM - 6:00 PM (April-October), 7:00 AM - 5:00 PM (November-March)',
    ticketPrice: '¥30 (Through ticket ¥60)',
    address: '19 Xinjiangongmen Road, Haidian District, Beijing',
    transportation: ['Metro Line 4 to Beigongmen', 'Bus routes 330, 331, 332, 346'],
    highlights: [
      'UNESCO World Heritage Site',
      'Beautiful Kunming Lake',
      'Traditional Chinese garden design',
      'Marble Boat and Long Corridor'
    ],
    tips: [
      'Best visited in spring or autumn',
      'Rent a boat on Kunming Lake',
      'Walk the entire Long Corridor',
      'Allow half day for visit'
    ]
  },

  // 上海景点
  {
    id: 'the-bund',
    title: 'The Bund',
    description: 'Historic waterfront area with colonial architecture and modern skyline views',
    slug: 'the-bund',
    destination: 'Shanghai',
    category: 'Scenic Area',
    rating: 4.7,
    openTime: '24 hours',
    ticketPrice: 'Free',
    address: 'Zhongshan East 1st Road, Huangpu District, Shanghai',
    transportation: ['Metro Line 2 to Nanjing East Road', 'Metro Line 10 to Nanjing East Road'],
    highlights: [
      'Historic colonial architecture',
      'Stunning skyline views',
      'Huangpu River promenade',
      'Best night views in Shanghai'
    ],
    tips: [
      'Best visited at night for skyline views',
      'Walk from Nanjing Road to Yu Garden',
      'Take a river cruise for different perspective',
      'Very crowded on weekends'
    ]
  },
  {
    id: 'yu-garden',
    title: 'Yu Garden',
    description: 'Traditional Chinese garden with classical architecture and beautiful landscapes',
    slug: 'yu-garden',
    destination: 'Shanghai',
    category: 'Garden',
    rating: 4.4,
    openTime: '9:00 AM - 5:30 PM',
    ticketPrice: '¥40 (Peak season), ¥30 (Off season)',
    address: '218 Anren Street, Huangpu District, Shanghai',
    transportation: ['Metro Line 10 to Yu Garden', 'Bus routes 11, 26, 64, 71'],
    highlights: [
      'Classical Chinese garden design',
      '400 years of history',
      'Traditional architecture',
      'Beautiful rock formations and pavilions'
    ],
    tips: [
      'Visit early morning to avoid crowds',
      'Explore the surrounding bazaar',
      'Try local snacks nearby',
      'Photography allowed in most areas'
    ]
  },
  {
    id: 'oriental-pearl-tower',
    title: 'Oriental Pearl Tower',
    description: 'Iconic TV tower with observation decks and panoramic city views',
    slug: 'oriental-pearl-tower',
    destination: 'Shanghai',
    category: 'Landmark',
    rating: 4.3,
    openTime: '8:00 AM - 9:30 PM',
    ticketPrice: '¥160-220 (depending on levels)',
    address: '1 Century Avenue, Pudong District, Shanghai',
    transportation: ['Metro Line 2 to Lujiazui', 'Bus routes 81, 82, 85, 774'],
    highlights: [
      'Iconic Shanghai landmark',
      '360-degree city views',
      'Multiple observation levels',
      'Shanghai History Museum at base'
    ],
    tips: [
      'Book tickets online for discounts',
      'Best views at sunset',
      'Clear days offer better visibility',
      'Combine with nearby attractions'
    ]
  },

  // 西安景点
  {
    id: 'terracotta-warriors',
    title: 'Terracotta Warriors',
    description: 'Army of terracotta sculptures depicting the armies of the first Emperor of China',
    slug: 'terracotta-warriors',
    destination: 'Xi\'an',
    category: 'Historical Site',
    rating: 4.8,
    openTime: '8:30 AM - 6:00 PM (March-November), 8:30 AM - 5:30 PM (December-February)',
    ticketPrice: '¥120 (March-November), ¥90 (December-February)',
    address: 'Qin Shi Huang Mausoleum, Lintong District, Xi\'an',
    transportation: ['Tour bus from Xi\'an city center', 'Public bus 306, 307', 'Private car'],
    highlights: [
      'UNESCO World Heritage Site',
      'Over 8,000 life-sized warriors',
      'Archaeological wonder',
      'Each warrior has unique features'
    ],
    tips: [
      'Allow full day for visit',
      'Take guided tour for best experience',
      'Visit all three pits',
      'Combine with Qin Shi Huang Mausoleum'
    ]
  },
  {
    id: 'xian-city-wall',
    title: 'Xi\'an City Wall',
    description: 'Best-preserved ancient city wall in China, perfect for cycling',
    slug: 'xian-city-wall',
    destination: 'Xi\'an',
    category: 'Historical Site',
    rating: 4.6,
    openTime: '8:00 AM - 10:00 PM',
    ticketPrice: '¥54 (including bicycle rental)',
    address: 'Various gates around Xi\'an city center',
    transportation: ['Metro Line 2 to Yongningmen', 'Various bus routes to different gates'],
    highlights: [
      'Complete ancient city fortification',
      '14km circumference',
      'Bicycle rental available',
      'Beautiful night illumination'
    ],
    tips: [
      'Rent bicycle to cycle full circuit',
      'Start from South Gate (Yongningmen)',
      'Best time is late afternoon/evening',
      'Bring water and sun protection'
    ]
  },
  {
    id: 'big-wild-goose-pagoda',
    title: 'Big Wild Goose Pagoda',
    description: 'Ancient Buddhist pagoda built in 652 AD to house Buddhist scriptures',
    slug: 'big-wild-goose-pagoda',
    destination: 'Xi\'an',
    category: 'Religious Site',
    rating: 4.5,
    openTime: '8:00 AM - 6:00 PM',
    ticketPrice: '¥50 (Temple), ¥30 (Pagoda)',
    address: 'Daci\'en Temple, Yanta District, Xi\'an',
    transportation: ['Metro Line 3 to Dayan Pagoda', 'Bus routes 5, 19, 21, 22'],
    highlights: [
      'UNESCO World Heritage Site',
      'Tang Dynasty architecture',
      'Buddhist cultural significance',
      'Beautiful surrounding square'
    ],
    tips: [
      'Visit during fountain show times',
      'Combine with nearby museums',
      'Beautiful photography opportunities',
      'Peaceful temple atmosphere'
    ]
  },

  // 成都景点
  {
    id: 'giant-panda-base',
    title: 'Chengdu Giant Panda Research Base',
    description: 'World-famous panda research and breeding center',
    slug: 'giant-panda-base',
    destination: 'Chengdu',
    category: 'Wildlife',
    rating: 4.7,
    openTime: '7:30 AM - 6:00 PM',
    ticketPrice: '¥55',
    address: '1375 Panda Avenue, Chenghua District, Chengdu',
    transportation: ['Metro Line 3 to Panda Avenue', 'Bus routes 87, 198A, 198'],
    highlights: [
      'Home to over 80 giant pandas',
      'Research and breeding facility',
      'Baby panda nursery',
      'Educational programs'
    ],
    tips: [
      'Visit early morning when pandas are most active',
      'Bring camera with good zoom',
      'Allow 3-4 hours for visit',
      'Respect photography rules'
    ]
  },
  {
    id: 'jinli-street',
    title: 'Jinli Ancient Street',
    description: 'Traditional street with Qing Dynasty architecture, shops, and food',
    slug: 'jinli-street',
    destination: 'Chengdu',
    category: 'Cultural Street',
    rating: 4.4,
    openTime: '24 hours',
    ticketPrice: 'Free',
    address: 'Wuhou District, Chengdu',
    transportation: ['Metro Line 3 to Gaoshengqiao', 'Bus routes 1, 57, 82, 334'],
    highlights: [
      'Traditional Sichuan architecture',
      'Local handicrafts and souvenirs',
      'Authentic Sichuan street food',
      'Traditional performances'
    ],
    tips: [
      'Best visited in evening',
      'Try local Sichuan snacks',
      'Bargain for souvenirs',
      'Combine with Wuhou Shrine visit'
    ]
  },

  // 杭州景点
  {
    id: 'west-lake',
    title: 'West Lake',
    description: 'UNESCO World Heritage lake with classical Chinese garden landscapes',
    slug: 'west-lake',
    destination: 'Hangzhou',
    category: 'Scenic Area',
    rating: 4.8,
    openTime: '24 hours',
    ticketPrice: 'Free',
    address: 'West Lake Scenic Area, Hangzhou',
    transportation: ['Metro Line 1 to Longxiangqiao', 'Various bus routes'],
    highlights: [
      'UNESCO World Heritage Site',
      'Classical Chinese landscape',
      'Beautiful in all seasons',
      'Boat tours available'
    ],
    tips: [
      'Rent bicycle to cycle around lake',
      'Take boat tour for different perspective',
      'Visit during different seasons',
      'Best photographed at sunrise/sunset'
    ]
  },
  {
    id: 'lingyin-temple',
    title: 'Lingyin Temple',
    description: 'Ancient Buddhist temple with beautiful architecture and Buddha statues',
    slug: 'lingyin-temple',
    destination: 'Hangzhou',
    category: 'Religious Site',
    rating: 4.6,
    openTime: '7:00 AM - 6:15 PM',
    ticketPrice: '¥75 (including Feilai Peak)',
    address: 'Lingyin Road, Xihu District, Hangzhou',
    transportation: ['Bus routes 7, 324, 807', 'Tourist bus Y1, Y2'],
    highlights: [
      'Over 1,600 years of history',
      'Beautiful Buddhist architecture',
      'Ancient stone carvings',
      'Peaceful mountain setting'
    ],
    tips: [
      'Visit early morning for peaceful atmosphere',
      'Explore Feilai Peak stone carvings',
      'Respectful behavior required',
      'Combine with nearby attractions'
    ]
  },

  // 苏州景点
  {
    id: 'humble-administrators-garden',
    title: 'Humble Administrator\'s Garden',
    description: 'Largest and most famous classical garden in Suzhou',
    slug: 'humble-administrators-garden',
    destination: 'Suzhou',
    category: 'Garden',
    rating: 4.7,
    openTime: '7:30 AM - 5:30 PM',
    ticketPrice: '¥90 (March-May, September-November), ¥70 (other months)',
    address: '178 Northeast Street, Gusu District, Suzhou',
    transportation: ['Metro Line 4 to Beisita', 'Bus routes 40, 178, 313, 923'],
    highlights: [
      'UNESCO World Heritage Site',
      'Classical Chinese garden design',
      'Beautiful water features',
      'Traditional architecture'
    ],
    tips: [
      'Visit early morning for best photos',
      'Allow 2-3 hours for visit',
      'Combine with nearby gardens',
      'Audio guide recommended'
    ]
  },
  {
    id: 'tiger-hill',
    title: 'Tiger Hill',
    description: 'Historic hill with leaning pagoda and beautiful scenery',
    slug: 'tiger-hill',
    destination: 'Suzhou',
    category: 'Scenic Area',
    rating: 4.5,
    openTime: '7:30 AM - 5:30 PM',
    ticketPrice: '¥80',
    address: 'Tiger Hill Road, Gusu District, Suzhou',
    transportation: ['Bus routes 32, 146, 949', 'Tourist bus'],
    highlights: [
      'Famous leaning pagoda',
      'Over 2,500 years of history',
      'Beautiful gardens and pavilions',
      'Legendary burial site'
    ],
    tips: [
      'Climb to top for city views',
      'Visit during spring for flowers',
      'Combine with nearby attractions',
      'Allow 2-3 hours for visit'
    ]
  },

  // 广州景点
  {
    id: 'canton-tower',
    title: 'Canton Tower',
    description: 'Iconic TV tower with observation decks and stunning city views',
    slug: 'canton-tower',
    destination: 'Guangzhou',
    category: 'Landmark',
    rating: 4.5,
    openTime: '9:00 AM - 11:00 PM',
    ticketPrice: '¥150-228 (depending on levels)',
    address: '222 Yuejiang West Road, Haizhu District, Guangzhou',
    transportation: ['Metro Line 3 to Canton Tower', 'Bus routes 11, 262, 468'],
    highlights: [
      'Tallest TV tower in China',
      'Unique twisted design',
      'Multiple observation levels',
      'Beautiful Pearl River views'
    ],
    tips: [
      'Visit at sunset for best views',
      'Book tickets online in advance',
      'Try the outdoor observation deck',
      'Combine with Pearl River cruise'
    ]
  },
  {
    id: 'shamian-island',
    title: 'Shamian Island',
    description: 'Historic island with European colonial architecture and tree-lined streets',
    slug: 'shamian-island',
    destination: 'Guangzhou',
    category: 'Historic Area',
    rating: 4.4,
    openTime: '24 hours',
    ticketPrice: 'Free',
    address: 'Shamian Island, Liwan District, Guangzhou',
    transportation: ['Metro Line 1 to Huangsha', 'Bus routes 1, 9, 25, 57'],
    highlights: [
      'Colonial European architecture',
      'Tree-lined pedestrian streets',
      'Peaceful atmosphere',
      'Historic consulate buildings'
    ],
    tips: [
      'Perfect for leisurely walking',
      'Great for photography',
      'Many cafes and restaurants',
      'Best visited in morning or evening'
    ]
  },

  // 深圳景点
  {
    id: 'window-of-the-world',
    title: 'Window of the World',
    description: 'Theme park with miniature replicas of world famous landmarks',
    slug: 'window-of-the-world',
    destination: 'Shenzhen',
    category: 'Theme Park',
    rating: 4.2,
    openTime: '9:00 AM - 10:30 PM',
    ticketPrice: '¥200 (day ticket), ¥100 (evening ticket)',
    address: '9037 Shennan Avenue, Nanshan District, Shenzhen',
    transportation: ['Metro Line 1 to Window of the World', 'Bus routes 21, 101, 113'],
    highlights: [
      'Miniature world landmarks',
      '130 reproductions of famous sites',
      'Cultural performances',
      'Evening light shows'
    ],
    tips: [
      'Allow full day for visit',
      'Check performance schedule',
      'Best value with day ticket',
      'Bring comfortable walking shoes'
    ]
  },
  {
    id: 'dameisha-beach',
    title: 'Dameisha Beach',
    description: 'Popular public beach with golden sand and clear waters',
    slug: 'dameisha-beach',
    destination: 'Shenzhen',
    category: 'Beach',
    rating: 4.1,
    openTime: '24 hours',
    ticketPrice: 'Free',
    address: 'Dameisha Beach, Yantian District, Shenzhen',
    transportation: ['Metro Line 8 to Dameisha', 'Bus routes 103, 380, 387'],
    highlights: [
      'Free public beach',
      'Golden sand beach',
      'Water sports activities',
      'Beachside restaurants'
    ],
    tips: [
      'Very crowded on weekends',
      'Bring sun protection',
      'Best visited early morning',
      'Facilities available nearby'
    ]
  },

  // 重庆景点
  {
    id: 'hongya-cave',
    title: 'Hongya Cave',
    description: 'Traditional stilted buildings with modern shopping and dining',
    slug: 'hongya-cave',
    destination: 'Chongqing',
    category: 'Cultural Site',
    rating: 4.3,
    openTime: '10:00 AM - 11:00 PM',
    ticketPrice: 'Free',
    address: '88 Jialing River Road, Yuzhong District, Chongqing',
    transportation: ['Metro Line 2 to Linjiangmen', 'Bus routes 105, 111, 112'],
    highlights: [
      'Traditional Bayu architecture',
      'Multi-level shopping complex',
      'Beautiful night illumination',
      'Jialing River views'
    ],
    tips: [
      'Best visited at night',
      'Very crowded on weekends',
      'Many restaurants and shops',
      'Great for photography'
    ]
  },
  {
    id: 'ciqikou-ancient-town',
    title: 'Ciqikou Ancient Town',
    description: 'Historic town with traditional architecture and local handicrafts',
    slug: 'ciqikou-ancient-town',
    destination: 'Chongqing',
    category: 'Historic Town',
    rating: 4.4,
    openTime: '24 hours',
    ticketPrice: 'Free',
    address: 'Ciqikou Ancient Town, Shapingba District, Chongqing',
    transportation: ['Metro Line 1 to Ciqikou', 'Bus routes 202, 220, 237'],
    highlights: [
      'Ming and Qing dynasty architecture',
      'Traditional handicrafts',
      'Local street food',
      'Yangtze River views'
    ],
    tips: [
      'Try local specialties',
      'Bargain for handicrafts',
      'Visit during weekdays',
      'Allow 2-3 hours for visit'
    ]
  },

  // 桂林景点
  {
    id: 'li-river-cruise',
    title: 'Li River Cruise',
    description: 'Scenic boat cruise through stunning karst landscape',
    slug: 'li-river-cruise',
    destination: 'Guilin',
    category: 'Scenic Cruise',
    rating: 4.8,
    openTime: '8:00 AM - 6:00 PM',
    ticketPrice: '¥215-450 (depending on boat type)',
    address: 'Zhujiang Pier, Guilin to Yangshuo',
    transportation: ['Tour bus to pier', 'Taxi to Zhujiang Pier'],
    highlights: [
      'Iconic karst mountain scenery',
      'Featured on 20 RMB note',
      'Traditional fishing villages',
      'Stunning photography opportunities'
    ],
    tips: [
      'Book in advance during peak season',
      'Bring camera with extra battery',
      '4-5 hour journey to Yangshuo',
      'Best views from upper deck'
    ]
  },
  {
    id: 'reed-flute-cave',
    title: 'Reed Flute Cave',
    description: 'Underground limestone cave with colorful artificial lighting',
    slug: 'reed-flute-cave',
    destination: 'Guilin',
    category: 'Natural Wonder',
    rating: 4.3,
    openTime: '8:00 AM - 5:30 PM',
    ticketPrice: '¥90',
    address: 'Ludi Road, Xiufeng District, Guilin',
    transportation: ['Bus routes 3, 13, 25, 32', 'Taxi'],
    highlights: [
      'Multicolored artificial lighting',
      'Underground limestone formations',
      'Reflection pools',
      'Cool temperature year-round'
    ],
    tips: [
      'Slippery paths, wear good shoes',
      'Photography allowed',
      'About 1 hour visit',
      'Cool inside, bring light jacket'
    ]
  },

  // 厦门景点
  {
    id: 'gulangyu-island',
    title: 'Gulangyu Island',
    description: 'Car-free island with colonial architecture and beautiful beaches',
    slug: 'gulangyu-island',
    destination: 'Xiamen',
    category: 'Island',
    rating: 4.6,
    openTime: '24 hours',
    ticketPrice: '¥35 (ferry) + attraction tickets',
    address: 'Gulangyu Island, Siming District, Xiamen',
    transportation: ['Ferry from Xiamen International Cruise Center'],
    highlights: [
      'UNESCO World Heritage Site',
      'Car-free island',
      'Colonial architecture',
      'Beautiful beaches and gardens'
    ],
    tips: [
      'Book ferry tickets in advance',
      'Allow full day for visit',
      'Comfortable walking shoes essential',
      'Try local seafood'
    ]
  },
  {
    id: 'nanputuo-temple',
    title: 'Nanputuo Temple',
    description: 'Ancient Buddhist temple with beautiful mountain backdrop',
    slug: 'nanputuo-temple',
    destination: 'Xiamen',
    category: 'Religious Site',
    rating: 4.5,
    openTime: '3:00 AM - 9:00 PM',
    ticketPrice: 'Free',
    address: '515 Siming South Road, Siming District, Xiamen',
    transportation: ['Bus routes 1, 15, 21, 45', 'Metro Line 1 to Xiamen University'],
    highlights: [
      'Over 1,000 years of history',
      'Beautiful Buddhist architecture',
      'Mountain hiking trails',
      'Peaceful temple atmosphere'
    ],
    tips: [
      'Visit early morning',
      'Respectful behavior required',
      'Free vegetarian meals available',
      'Combine with Xiamen University visit'
    ]
  },

  // 青岛景点
  {
    id: 'tsingtao-beer-museum',
    title: 'Tsingtao Beer Museum',
    description: 'Museum showcasing the history of China\'s famous beer brand',
    slug: 'tsingtao-beer-museum',
    destination: 'Qingdao',
    category: 'Museum',
    rating: 4.4,
    openTime: '8:30 AM - 5:00 PM',
    ticketPrice: '¥60 (including beer tasting)',
    address: '56 Dengzhou Road, Shibei District, Qingdao',
    transportation: ['Metro Line 3 to Qingdao Station', 'Bus routes 1, 25, 225'],
    highlights: [
      'History of Tsingtao Beer',
      'Original brewing equipment',
      'Beer tasting included',
      'German brewing heritage'
    ],
    tips: [
      'Beer tasting included in ticket',
      'Learn about German brewing history',
      'About 1-2 hours visit',
      'Good for beer enthusiasts'
    ]
  },
  {
    id: 'badaguan-scenic-area',
    title: 'Badaguan Scenic Area',
    description: 'Historic area with European-style villas and tree-lined streets',
    slug: 'badaguan-scenic-area',
    destination: 'Qingdao',
    category: 'Historic Area',
    rating: 4.5,
    openTime: '24 hours',
    ticketPrice: 'Free',
    address: 'Badaguan Scenic Area, Shinan District, Qingdao',
    transportation: ['Metro Line 3 to Zhongshan Park', 'Bus routes 26, 31, 206, 223'],
    highlights: [
      'European-style architecture',
      'Tree-lined streets',
      'Beautiful coastal views',
      'Historical significance'
    ],
    tips: [
      'Best for leisurely walking',
      'Great photography opportunities',
      'Visit during spring for flowers',
      'Combine with beach visit'
    ]
  },

  // 昆明景点
  {
    id: 'stone-forest',
    title: 'Stone Forest',
    description: 'Natural limestone formations creating a forest-like landscape',
    slug: 'stone-forest',
    destination: 'Kunming',
    category: 'Natural Wonder',
    rating: 4.6,
    openTime: '8:00 AM - 6:00 PM',
    ticketPrice: '¥175',
    address: 'Shilin County, Kunming',
    transportation: ['Tour bus from Kunming', 'Public bus to Shilin County'],
    highlights: [
      'UNESCO World Heritage Site',
      'Unique limestone formations',
      'Yi minority culture',
      'Beautiful natural scenery'
    ],
    tips: [
      'Allow full day for visit',
      'Wear comfortable walking shoes',
      'Bring water and snacks',
      'Best visited with guide'
    ]
  },
  {
    id: 'dianchi-lake',
    title: 'Dianchi Lake',
    description: 'Large freshwater lake with beautiful mountain views',
    slug: 'dianchi-lake',
    destination: 'Kunming',
    category: 'Natural Area',
    rating: 4.3,
    openTime: '24 hours',
    ticketPrice: 'Free',
    address: 'Dianchi Lake, Kunming',
    transportation: ['Metro Line 1 to Dianchi Lake', 'Bus routes 44, 73, 94'],
    highlights: [
      'Largest lake in Yunnan',
      'Beautiful mountain backdrop',
      'Migratory birds in winter',
      'Peaceful atmosphere'
    ],
    tips: [
      'Best views from Western Hills',
      'Visit during winter for migratory birds',
      'Combine with nearby attractions',
      'Good for photography'
    ]
  },

  // 拉萨景点
  {
    id: 'potala-palace',
    title: 'Potala Palace',
    description: 'Iconic palace and former residence of the Dalai Lama',
    slug: 'potala-palace',
    destination: 'Lhasa',
    category: 'Palace',
    rating: 4.9,
    openTime: '9:00 AM - 3:00 PM (varies by season)',
    ticketPrice: '¥200 (May-October), ¥100 (November-April)',
    address: 'Potala Palace, Chengguan District, Lhasa',
    transportation: ['Walking from Lhasa city center', 'Taxi', 'Public bus'],
    highlights: [
      'UNESCO World Heritage Site',
      'Symbol of Tibet',
      'Over 1,000 rooms',
      'Priceless Buddhist artifacts'
    ],
    tips: [
      'Book tickets well in advance',
      'Limit to 1 hour visit',
      'No photography inside',
      'Altitude sickness precautions'
    ]
  },
  {
    id: 'jokhang-temple',
    title: 'Jokhang Temple',
    description: 'Most sacred temple in Tibetan Buddhism',
    slug: 'jokhang-temple',
    destination: 'Lhasa',
    category: 'Religious Site',
    rating: 4.8,
    openTime: '8:00 AM - 6:00 PM',
    ticketPrice: '¥85',
    address: 'Barkhor Street, Chengguan District, Lhasa',
    transportation: ['Walking from city center', 'Taxi'],
    highlights: [
      'Most sacred Tibetan temple',
      'Over 1,300 years old',
      'Golden Buddha statue',
      'Pilgrimage destination'
    ],
    tips: [
      'Respectful behavior essential',
      'Join pilgrims walking clockwise',
      'Best visited early morning',
      'Combine with Barkhor Street'
    ]
  },

  // 天津景点
  {
    id: 'five-great-avenues',
    title: 'Five Great Avenues',
    description: 'Historic area with European colonial architecture',
    slug: 'five-great-avenues',
    destination: 'Tianjin',
    category: 'Historic Area',
    rating: 4.5,
    openTime: '24 hours',
    ticketPrice: 'Free',
    address: 'Five Great Avenues, Heping District, Tianjin',
    transportation: ['Metro Line 1 to Xiaobailou', 'Bus routes 9, 831, 845'],
    highlights: [
      'European colonial architecture',
      'Historic villas and mansions',
      'Tree-lined streets',
      'Cultural significance'
    ],
    tips: [
      'Best explored on foot',
      'Great for photography',
      'Visit during spring or autumn',
      'Combine with nearby attractions'
    ]
  },
  {
    id: 'tianjin-eye',
    title: 'Tianjin Eye',
    description: 'Giant ferris wheel built over a bridge across the Hai River',
    slug: 'tianjin-eye',
    destination: 'Tianjin',
    category: 'Landmark',
    rating: 4.3,
    openTime: '9:30 AM - 9:30 PM',
    ticketPrice: '¥70',
    address: 'Yongle Bridge, Hongqiao District, Tianjin',
    transportation: ['Metro Line 1 to Wujing Road', 'Bus routes 34, 461, 840'],
    highlights: [
      'Unique bridge-mounted ferris wheel',
      'Great city views',
      'Hai River panorama',
      'Illuminated at night'
    ],
    tips: [
      'Best visited at sunset',
      'Clear weather for better views',
      'About 30 minutes ride',
      'Combine with river cruise'
    ]
  },

  // 武汉景点
  {
    id: 'yellow-crane-tower',
    title: 'Yellow Crane Tower',
    description: 'Historic tower with panoramic views of the Yangtze River',
    slug: 'yellow-crane-tower',
    destination: 'Wuhan',
    category: 'Historic Tower',
    rating: 4.4,
    openTime: '8:00 AM - 6:00 PM',
    ticketPrice: '¥80',
    address: 'Yellow Crane Tower Park, Wuchang District, Wuhan',
    transportation: ['Metro Line 4 to Fuqiyuan', 'Bus routes 10, 61, 64, 108'],
    highlights: [
      'Symbol of Wuhan',
      'Over 1,700 years of history',
      'Yangtze River views',
      'Classical Chinese architecture'
    ],
    tips: [
      'Visit during clear weather',
      'Climb to top for best views',
      'Rich cultural history',
      'Combine with East Lake visit'
    ]
  },
  {
    id: 'east-lake',
    title: 'East Lake',
    description: 'Large urban lake with beautiful scenery and cultural sites',
    slug: 'east-lake',
    destination: 'Wuhan',
    category: 'Natural Area',
    rating: 4.3,
    openTime: '24 hours',
    ticketPrice: 'Free',
    address: 'East Lake Scenic Area, Wuhan',
    transportation: ['Metro Line 8 to Liyuan', 'Bus routes 401, 402, 403'],
    highlights: [
      'Largest urban lake in China',
      'Beautiful natural scenery',
      'Cultural and historical sites',
      'Peaceful atmosphere'
    ],
    tips: [
      'Best visited in spring',
      'Rent bicycle for touring',
      'Multiple scenic areas',
      'Good for photography'
    ]
  }
];

export const getAttractionsByDestination = (destination: string): Attraction[] => {
  return attractions.filter(attraction => attraction.destination === destination);
};

export const getAttractionById = (id: string): Attraction | undefined => {
  return attractions.find(attraction => attraction.id === id);
};

export const getAttractionsByCategory = (category: string): Attraction[] => {
  return attractions.filter(attraction => attraction.category === category);
};

export const getTopRatedAttractions = (limit: number = 10): Attraction[] => {
  return attractions
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
}; 
