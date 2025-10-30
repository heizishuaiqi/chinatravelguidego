import { Destination } from '@/types';

export const destinations: Destination[] = [
  {
    id: 'beijing',
    title: 'Beijing',
    description: "China's capital city, rich in history and culture",
    slug: 'beijing',
    country: 'China',
    province: 'Beijing',
    highlights: [
      'Home to the Forbidden City and Imperial Palace',
      'Gateway to the Great Wall of China',
      'Modern architecture mixed with ancient temples',
      'Rich cultural heritage and museums'
    ],
    bestTime: 'Spring (March-May) and Autumn (September-November)',
    duration: '3-5 days recommended',
    attractions: [
      'Forbidden City',
      'Great Wall of China',
      'Temple of Heaven',
      'Summer Palace',
      'Tiananmen Square'
    ],
    transportation: [
      {
        type: 'Airport',
        name: 'Beijing Capital International Airport (PEK)',
        description: 'Main international airport, 30km from city center',
        price: '¥25-35 (Airport Express)',
        duration: '30-45 minutes to city center',
        tips: ['Book Airport Express tickets in advance', 'Taxi costs around ¥100-150']
      },
      {
        type: 'Metro',
        name: 'Beijing Subway',
        description: 'Extensive metro system covering the entire city',
        price: '¥3-9 per ride',
        duration: 'Varies by destination',
        tips: ['Get a transport card for convenience', 'Rush hours: 7-9 AM, 5-7 PM']
      }
    ],
    accommodation: [
      {
        type: 'Luxury Hotel',
        name: 'Near Forbidden City',
        priceRange: '¥800-2000/night',
        location: 'Dongcheng District',
        amenities: ['Concierge service', 'Restaurant', 'Spa', 'Business center'],
        booking: 'Book 2-3 months in advance'
      },
      {
        type: 'Budget Hotel',
        name: 'Hutong Area',
        priceRange: '¥200-500/night',
        location: 'Traditional neighborhoods',
        amenities: ['WiFi', 'Breakfast', 'Tour desk'],
        booking: 'Book 1 month in advance'
      }
    ],
    food: [
      {
        name: 'Peking Duck',
        slug: 'peking-duck',
        description: 'Famous roasted duck dish served with pancakes',
        price: '¥150-300',
        location: 'Quanjude Restaurant, Bianyifang',
        category: 'main-dish'
      },
      {
        name: 'Jianbing',
        slug: 'jianbing',
        description: 'Traditional breakfast crepe with egg and crispy wonton',
        price: '¥8-15',
        location: 'Street vendors, breakfast stalls',
        category: 'breakfast'
      },
      {
        name: 'Jiaozi (Dumplings)',
        slug: 'jiaozi',
        description: 'Steamed or boiled dumplings with various fillings',
        price: '¥10-25',
        location: 'Dumpling restaurants, home cooking',
        category: 'main-dish'
      },
      {
        name: 'Zhajiangmian',
        slug: 'zhajiangmian',
        description: 'Noodles with fermented bean sauce',
        price: '¥15-25',
        location: 'Beijing noodle shops, local restaurants',
        category: 'main-dish'
      }
    ]
  },
  {
    id: 'shanghai',
    title: 'Shanghai',
    description: 'Modern metropolis with stunning skyline and international flair',
    slug: 'shanghai',
    country: 'China',
    province: 'Shanghai',
    highlights: [
      'Iconic skyline with modern skyscrapers',
      'Historic Bund waterfront area',
      'International dining and shopping',
      'Blend of Eastern and Western culture'
    ],
    bestTime: 'Spring (March-May) and Autumn (September-November)',
    duration: '3-4 days recommended',
    attractions: [
      'The Bund',
      'Oriental Pearl Tower',
      'Yu Garden',
      'Shanghai Museum',
      'Nanjing Road'
    ],
    transportation: [
      {
        type: 'Airport',
        name: 'Shanghai Pudong International Airport (PVG)',
        description: 'Major international airport, 40km from city center',
        price: '¥7 (Maglev) + ¥3-4 (Metro)',
        duration: '45-60 minutes to city center',
        tips: ['Take Maglev train for unique experience', 'Taxi costs around ¥150-200']
      },
      {
        type: 'Metro',
        name: 'Shanghai Metro',
        description: 'Modern and efficient metro system',
        price: '¥3-8 per ride',
        duration: 'Varies by destination',
        tips: ['Very crowded during rush hours', 'English announcements available']
      }
    ],
    accommodation: [
      {
        type: 'Luxury Hotel',
        name: 'Bund Area',
        priceRange: '¥1000-3000/night',
        location: 'Huangpu District',
        amenities: ['River views', 'Fine dining', 'Spa', 'Butler service'],
        booking: 'Book 2-3 months in advance'
      },
      {
        type: 'Business Hotel',
        name: 'People\'s Square',
        priceRange: '¥400-800/night',
        location: 'City center',
        amenities: ['Business center', 'Restaurant', 'Gym', 'WiFi'],
        booking: 'Book 1 month in advance'
      }
    ],
    food: [
      {
        name: 'Xiaolongbao',
        slug: 'xiaolongbao',
        description: 'Steamed soup dumplings, Shanghai specialty',
        price: '¥15-30',
        location: 'Din Tai Fung, local dumpling shops',
        category: 'snack'
      },
      {
        name: 'Shengjianbao',
        slug: 'shengjianbao',
        description: 'Pan-fried pork buns with crispy bottom',
        price: '¥10-20',
        location: 'Street food stalls, Shanghai breakfast shops',
        category: 'breakfast'
      },
      {
        name: 'Red Braised Pork',
        slug: 'hong-shao-rou',
        description: 'Sweet and savory braised pork belly',
        price: '¥25-40',
        location: 'Shanghai restaurants, home cooking',
        category: 'main-dish'
      }
    ]
  },
  {
    id: 'guangzhou',
    title: 'Guangzhou',
    description: 'Southern China trading hub with rich Cantonese culture',
    slug: 'guangzhou',
    country: 'China',
    province: 'Guangdong',
    highlights: [
      'Historic trading port on Pearl River',
      'Famous for Cantonese dim sum and cuisine',
      'Modern CBD with Canton Tower',
      'Traditional architecture and temples'
    ],
    bestTime: 'October to December',
    duration: '2-3 days recommended',
    attractions: [
      'Canton Tower',
      'Chen Clan Ancestral Hall',
      'Shamian Island',
      'Baiyun Mountain',
      'Pearl River Night Cruise'
    ],
    transportation: [
      {
        type: 'Airport',
        name: 'Guangzhou Baiyun International Airport (CAN)',
        description: 'Major international airport, 35km from city center',
        price: '¥8-12 (Metro)',
        duration: '45-60 minutes to city center',
        tips: ['Metro Line 3 connects to city center', 'Airport Express available']
      },
      {
        type: 'Metro',
        name: 'Guangzhou Metro',
        description: 'Comprehensive metro system',
        price: '¥2-8 per ride',
        duration: 'Varies by destination',
        tips: ['Supports mobile payments', 'English announcements available']
      }
    ],
    accommodation: [
      {
        type: 'Luxury Hotel',
        name: 'Tianhe District',
        priceRange: '¥600-1500/night',
        location: 'CBD area',
        amenities: ['City views', 'Restaurant', 'Spa', 'Business center'],
        booking: 'Book 1-2 months in advance'
      },
      {
        type: 'Budget Hotel',
        name: 'Yuexiu District',
        priceRange: '¥150-400/night',
        location: 'Historic area',
        amenities: ['WiFi', 'Breakfast', 'Tour desk'],
        booking: 'Book 1 month in advance'
      }
    ],
    food: [
      {
        name: 'Dim Sum',
        slug: 'dim-sum',
        description: 'Variety of small dishes served with tea',
        price: '¥5-15 per basket',
        location: 'Cantonese restaurants, tea houses',
        category: 'snack'
      },
      {
        name: 'Wonton Noodles',
        slug: 'wonton-noodles',
        description: 'Thin noodles in clear broth with pork wontons',
        price: '¥12-20',
        location: 'Noodle shops, Cantonese restaurants',
        category: 'main-dish'
      },
      {
        name: 'Cantonese Roast Duck',
        slug: 'roast-duck',
        description: 'Crispy-skinned duck with sweet glaze',
        price: '¥40-80',
        location: 'Cantonese restaurants, roast meat shops',
        category: 'main-dish'
      }
    ]
  },
  {
    id: 'shenzhen',
    title: 'Shenzhen',
    description: 'Modern tech city and gateway to Hong Kong',
    slug: 'shenzhen',
    country: 'China',
    province: 'Guangdong',
    highlights: [
      'China\'s Silicon Valley with tech companies',
      'Modern architecture and skyline',
      'Theme parks and entertainment',
      'Shopping and electronics markets'
    ],
    bestTime: 'October to December',
    duration: '2-3 days recommended',
    attractions: [
      'Window of the World',
      'Splendid China Folk Village',
      'Dameisha Beach',
      'Lianhua Mountain Park',
      'Electronics Markets'
    ],
    transportation: [
      {
        type: 'Airport',
        name: 'Shenzhen Bao\'an International Airport (SZX)',
        description: 'Modern international airport',
        price: '¥8-12 (Metro)',
        duration: '45-60 minutes to city center',
        tips: ['Metro Line 11 connects to city center', 'Close to Hong Kong border']
      },
      {
        type: 'Metro',
        name: 'Shenzhen Metro',
        description: 'Modern and efficient metro system',
        price: '¥2-9 per ride',
        duration: 'Varies by destination',
        tips: ['Octopus card works from Hong Kong', 'Very punctual and clean']
      }
    ],
    accommodation: [
      {
        type: 'Luxury Hotel',
        name: 'Futian District',
        priceRange: '¥500-1200/night',
        location: 'CBD area',
        amenities: ['Modern facilities', 'Restaurant', 'Pool', 'Business center'],
        booking: 'Book 1-2 months in advance'
      },
      {
        type: 'Budget Hotel',
        name: 'Nanshan District',
        priceRange: '¥200-500/night',
        location: 'Tech area',
        amenities: ['WiFi', 'Breakfast', 'Convenient location'],
        booking: 'Book 1 month in advance'
      }
    ],
    food: [
      {
        name: 'Teochew Cuisine',
        description: 'Light and fresh flavors from Guangdong',
        price: '¥80-200 per person',
        location: 'Local restaurants',
        image: '/images/food/teochew.jpg'
      },
      {
        name: 'Hotpot',
        description: 'Spicy Sichuan-style hotpot',
        price: '¥60-120 per person',
        location: 'Hotpot restaurants',
        image: '/images/food/hotpot.jpg'
      }
    ]
  },
  {
    id: 'chengdu',
    title: 'Chengdu',
    description: 'Laid-back city famous for pandas and spicy Sichuan cuisine',
    slug: 'chengdu',
    country: 'China',
    province: 'Sichuan',
    highlights: [
      'Home to Giant Panda Research Base',
      'Spicy Sichuan cuisine and hotpot',
      'Relaxed lifestyle and tea culture',
      'Gateway to Tibet and western China'
    ],
    bestTime: 'March to June, September to November',
    duration: '3-4 days recommended',
    attractions: [
      'Giant Panda Research Base',
      'Jinli Ancient Street',
      'Wuhou Shrine',
      'Kuanzhai Alley',
      'Leshan Giant Buddha'
    ],
    transportation: [
      {
        type: 'Airport',
        name: 'Chengdu Shuangliu International Airport (CTU)',
        description: 'Major airport in western China',
        price: '¥10 (Metro)',
        duration: '45 minutes to city center',
        tips: ['Metro Line 10 connects to city center', 'New Tianfu Airport also serves the city']
      },
      {
        type: 'Metro',
        name: 'Chengdu Metro',
        description: 'Growing metro system',
        price: '¥2-7 per ride',
        duration: 'Varies by destination',
        tips: ['Mobile payment widely accepted', 'Still expanding network']
      }
    ],
    accommodation: [
      {
        type: 'Luxury Hotel',
        name: 'Chunxi Road Area',
        priceRange: '¥400-1000/night',
        location: 'Shopping district',
        amenities: ['Central location', 'Restaurant', 'Spa', 'Business center'],
        booking: 'Book 1-2 months in advance'
      },
      {
        type: 'Budget Hotel',
        name: 'Jinli Area',
        priceRange: '¥120-300/night',
        location: 'Historic area',
        amenities: ['WiFi', 'Breakfast', 'Cultural atmosphere'],
        booking: 'Book 1 month in advance'
      }
    ],
    food: [
      {
        name: 'Sichuan Hot Pot',
        slug: 'sichuan-hot-pot',
        description: 'Communal cooking in spicy broth with numbing Sichuan peppercorns',
        price: '¥50-150 per person',
        location: 'Hot pot restaurants, Haidilao chain',
        category: 'hot-pot'
      },
      {
        name: 'Mapo Tofu',
        slug: 'mapo-tofu',
        description: 'Soft tofu in spicy sauce with minced meat',
        price: '¥15-25',
        location: 'Sichuan restaurants, local eateries',
        category: 'main-dish'
      },
      {
        name: 'Kung Pao Chicken',
        slug: 'kung-pao-chicken',
        description: 'Diced chicken with peanuts in spicy sauce',
        price: '¥20-35',
        location: 'Sichuan restaurants, hotel restaurants',
        category: 'main-dish'
      },
      {
        name: 'Dan Dan Noodles',
        slug: 'dan-dan-noodles',
        description: 'Spicy noodles with sesame paste and minced pork',
        price: '¥12-20',
        location: 'Sichuan noodle shops, street vendors',
        category: 'street-food'
      }
    ]
  },
  {
    id: 'xian',
    title: 'Xi\'an',
    description: 'Ancient capital with Terracotta Warriors and rich history',
    slug: 'xian',
    country: 'China',
    province: 'Shaanxi',
    highlights: [
      'Home to the famous Terracotta Warriors',
      'Ancient city walls and historic sites',
      'Starting point of the Silk Road',
      'Muslim Quarter with diverse cuisine'
    ],
    bestTime: 'March to May, September to November',
    duration: '3-4 days recommended',
    attractions: [
      'Terracotta Warriors',
      'Ancient City Wall',
      'Muslim Quarter',
      'Big Wild Goose Pagoda',
      'Shaanxi History Museum'
    ],
    transportation: [
      {
        type: 'Airport',
        name: 'Xi\'an Xianyang International Airport (XIY)',
        description: 'Major airport in northwestern China',
        price: '¥25 (Airport Bus)',
        duration: '60 minutes to city center',
        tips: ['Airport buses available to city center', 'Metro connection under construction']
      },
      {
        type: 'Metro',
        name: 'Xi\'an Metro',
        description: 'Modern metro system',
        price: '¥2-6 per ride',
        duration: 'Varies by destination',
        tips: ['Convenient for tourist attractions', 'English announcements available']
      }
    ],
    accommodation: [
      {
        type: 'Luxury Hotel',
        name: 'Bell Tower Area',
        priceRange: '¥500-1200/night',
        location: 'City center',
        amenities: ['Historic location', 'Restaurant', 'Spa', 'Business center'],
        booking: 'Book 2-3 months in advance'
      },
      {
        type: 'Budget Hotel',
        name: 'Muslim Quarter',
        priceRange: '¥150-400/night',
        location: 'Cultural area',
        amenities: ['WiFi', 'Breakfast', 'Cultural experience'],
        booking: 'Book 1 month in advance'
      }
    ],
    food: [
      {
        name: 'Roujiamo',
        slug: 'roujiamo',
        description: 'Chinese hamburger with braised pork in flatbread',
        price: '¥8-15',
        location: 'Street vendors, Xi\'an restaurants',
        category: 'street-food'
      },
      {
        name: 'Biangbiang Noodles',
        description: 'Wide hand-pulled noodles with spicy sauce',
        price: '¥18-30',
        location: 'Local noodle shops',
        category: 'main-dish'
      }
    ]
  },
  {
    id: 'hangzhou',
    title: 'Hangzhou',
    description: 'Picturesque city known for West Lake and traditional culture',
    slug: 'hangzhou',
    country: 'China',
    province: 'Zhejiang',
    highlights: [
      'UNESCO World Heritage West Lake',
      'Traditional Chinese gardens and temples',
      'Famous for Longjing green tea',
      'Silk production and tea culture'
    ],
    bestTime: 'March to May, September to November',
    duration: '2-3 days recommended',
    attractions: [
      'West Lake',
      'Lingyin Temple',
      'Longjing Tea Plantations',
      'Xixi National Wetland Park',
      'Leifeng Pagoda'
    ],
    transportation: [
      {
        type: 'Airport',
        name: 'Hangzhou Xiaoshan International Airport (HGH)',
        description: 'International airport serving Hangzhou',
        price: '¥20 (Airport Bus)',
        duration: '60 minutes to city center',
        tips: ['Airport buses to various locations', 'Metro connection available']
      },
      {
        type: 'Metro',
        name: 'Hangzhou Metro',
        description: 'Modern metro system',
        price: '¥2-6 per ride',
        duration: 'Varies by destination',
        tips: ['Mobile payment accepted', 'Connects to major attractions']
      }
    ],
    accommodation: [
      {
        type: 'Luxury Hotel',
        name: 'West Lake Area',
        priceRange: '¥800-2000/night',
        location: 'Lakeside location',
        amenities: ['Lake views', 'Restaurant', 'Spa', 'Traditional decor'],
        booking: 'Book 2-3 months in advance'
      },
      {
        type: 'Budget Hotel',
        name: 'Downtown Area',
        priceRange: '¥200-500/night',
        location: 'City center',
        amenities: ['WiFi', 'Breakfast', 'Convenient location'],
        booking: 'Book 1 month in advance'
      }
    ],
    food: [
      {
        name: 'Dongpo Pork',
        description: 'Braised pork belly in soy sauce',
        price: '¥45-80',
        location: 'Traditional restaurants',
        image: '/images/food/dongpo-pork.jpg'
      },
      {
        name: 'Longjing Shrimp',
        description: 'Fresh shrimp cooked with Longjing tea',
        price: '¥60-100',
        location: 'Local restaurants',
        image: '/images/food/longjing-shrimp.jpg'
      }
    ]
  },
  {
    id: 'suzhou',
    title: 'Suzhou',
    description: 'Venice of the East with classical Chinese gardens',
    slug: 'suzhou',
    country: 'China',
    province: 'Jiangsu',
    highlights: [
      'UNESCO World Heritage classical gardens',
      'Traditional water town with canals',
      'Silk production center',
      'Ancient architecture and temples'
    ],
    bestTime: 'March to May, September to November',
    duration: '1-2 days recommended',
    attractions: [
      'Humble Administrator\'s Garden',
      'Lingering Garden',
      'Tiger Hill',
      'Hanshan Temple',
      'Zhouzhuang Water Town'
    ],
    transportation: [
      {
        type: 'High-speed Rail',
        name: 'From Shanghai',
        description: 'Direct high-speed rail connection',
        price: '¥39-79',
        duration: '30-45 minutes',
        tips: ['Frequent departures', 'Book tickets in advance']
      },
      {
        type: 'Metro',
        name: 'Suzhou Metro',
        description: 'Modern metro system',
        price: '¥2-5 per ride',
        duration: 'Varies by destination',
        tips: ['Connects to major attractions', 'Mobile payment accepted']
      }
    ],
    accommodation: [
      {
        type: 'Boutique Hotel',
        name: 'Old Town Area',
        priceRange: '¥400-800/night',
        location: 'Historic district',
        amenities: ['Traditional architecture', 'Garden views', 'Cultural atmosphere'],
        booking: 'Book 1-2 months in advance'
      },
      {
        type: 'Budget Hotel',
        name: 'Modern District',
        priceRange: '¥150-350/night',
        location: 'New city area',
        amenities: ['WiFi', 'Breakfast', 'Modern facilities'],
        booking: 'Book 1 month in advance'
      }
    ],
    food: [
      {
        name: 'Squirrel-Shaped Mandarin Fish',
        description: 'Sweet and sour fish dish, local specialty',
        price: '¥80-120',
        location: 'Local restaurants',
        image: '/images/food/squirrel-fish.jpg'
      },
      {
        name: 'Suzhou Noodles',
        description: 'Fine noodles in clear broth',
        price: '¥15-25',
        location: 'Local noodle shops',
        image: '/images/food/suzhou-noodles.jpg'
      }
    ]
  },
  {
    id: 'nanjing',
    title: 'Nanjing',
    description: 'Former capital with rich history and beautiful autumn leaves',
    slug: 'nanjing',
    country: 'China',
    province: 'Jiangsu',
    highlights: [
      'Former capital of China',
      'Beautiful autumn foliage',
      'Historic sites and museums',
      'Traditional Chinese architecture'
    ],
    bestTime: 'March to May, September to November',
    duration: '2-3 days recommended',
    attractions: [
      'Sun Yat-sen Mausoleum',
      'Nanjing City Wall',
      'Confucius Temple',
      'Purple Mountain',
      'Nanjing Museum'
    ],
    transportation: [
      {
        type: 'High-speed Rail',
        name: 'From Shanghai/Beijing',
        description: 'High-speed rail connections',
        price: '¥134-344',
        duration: '1-3 hours',
        tips: ['Frequent departures', 'Central location']
      },
      {
        type: 'Metro',
        name: 'Nanjing Metro',
        description: 'Comprehensive metro system',
        price: '¥2-6 per ride',
        duration: 'Varies by destination',
        tips: ['English announcements', 'Tourist-friendly']
      }
    ],
    accommodation: [
      {
        type: 'Luxury Hotel',
        name: 'Xinjiekou Area',
        priceRange: '¥500-1200/night',
        location: 'City center',
        amenities: ['Central location', 'Restaurant', 'Business center'],
        booking: 'Book 1-2 months in advance'
      },
      {
        type: 'Budget Hotel',
        name: 'Confucius Temple Area',
        priceRange: '¥120-300/night',
        location: 'Historic area',
        amenities: ['WiFi', 'Breakfast', 'Cultural atmosphere'],
        booking: 'Book 1 month in advance'
      }
    ],
    food: [
      {
        name: 'Salted Duck',
        description: 'Nanjing\'s famous specialty dish',
        price: '¥40-80',
        location: 'Local restaurants',
        image: '/images/food/salted-duck.jpg'
      },
      {
        name: 'Duck Blood Soup',
        description: 'Traditional soup with duck blood and tofu',
        price: '¥15-25',
        location: 'Local restaurants',
        image: '/images/food/duck-blood-soup.jpg'
      }
    ]
  },
  {
    id: 'chongqing',
    title: 'Chongqing',
    description: 'Mountain city famous for spicy hotpot and dramatic scenery',
    slug: 'chongqing',
    country: 'China',
    province: 'Chongqing',
    highlights: [
      'Famous for spicy Sichuan hotpot',
      'Dramatic mountain and river scenery',
      'Three Gorges cruise starting point',
      'Unique hillside architecture'
    ],
    bestTime: 'March to May, September to November',
    duration: '2-3 days recommended',
    attractions: [
      'Dazu Rock Carvings',
      'Three Gorges',
      'Ciqikou Ancient Town',
      'Yangtze River Cableway',
      'Hongya Cave'
    ],
    transportation: [
      {
        type: 'Airport',
        name: 'Chongqing Jiangbei International Airport (CKG)',
        description: 'Major airport in western China',
        price: '¥10-15 (Metro)',
        duration: '45 minutes to city center',
        tips: ['Metro Line 3 connects to airport', 'Light rail system available']
      },
      {
        type: 'Metro',
        name: 'Chongqing Rail Transit',
        description: 'Light rail and metro system',
        price: '¥2-8 per ride',
        duration: 'Varies by destination',
        tips: ['Unique hillside routes', 'Mobile payment accepted']
      }
    ],
    accommodation: [
      {
        type: 'Luxury Hotel',
        name: 'Jiefangbei Area',
        priceRange: '¥400-1000/night',
        location: 'City center',
        amenities: ['City views', 'Restaurant', 'Modern facilities'],
        booking: 'Book 1-2 months in advance'
      },
      {
        type: 'Budget Hotel',
        name: 'Ciqikou Area',
        priceRange: '¥100-250/night',
        location: 'Historic area',
        amenities: ['WiFi', 'Breakfast', 'Cultural atmosphere'],
        booking: 'Book 1 month in advance'
      }
    ],
    food: [
      {
        name: 'Chongqing Hotpot',
        description: 'Extremely spicy hotpot with Sichuan peppercorns',
        price: '¥60-120 per person',
        location: 'Local hotpot restaurants',
        image: '/images/food/chongqing-hotpot.jpg'
      },
      {
        name: 'Xiaomian Noodles',
        description: 'Spicy noodles with various toppings',
        price: '¥8-15',
        location: 'Street vendors',
        image: '/images/food/xiaomian-noodles.jpg'
      }
    ]
  },
  {
    id: 'guilin',
    title: 'Guilin',
    description: 'Stunning karst landscape and Li River scenery',
    slug: 'guilin',
    country: 'China',
    province: 'Guangxi',
    highlights: [
      'Famous karst mountains and rivers',
      'Li River cruise to Yangshuo',
      'Traditional Chinese landscape painting scenery',
      'Outdoor activities and nature'
    ],
    bestTime: 'April to October',
    duration: '3-4 days recommended',
    attractions: [
      'Li River Cruise',
      'Yangshuo County',
      'Reed Flute Cave',
      'Elephant Trunk Hill',
      'Seven Star Park'
    ],
    transportation: [
      {
        type: 'Airport',
        name: 'Guilin Liangjiang International Airport (KWL)',
        description: 'Regional airport serving Guilin',
        price: '¥20 (Airport Bus)',
        duration: '45 minutes to city center',
        tips: ['Airport buses to city center', 'Domestic flights available']
      },
      {
        type: 'High-speed Rail',
        name: 'From major cities',
        description: 'High-speed rail connections',
        price: '¥200-600',
        duration: '2-5 hours',
        tips: ['Convenient connections', 'Book in advance']
      }
    ],
    accommodation: [
      {
        type: 'Resort Hotel',
        name: 'Li River Area',
        priceRange: '¥600-1500/night',
        location: 'Riverside location',
        amenities: ['River views', 'Restaurant', 'Spa', 'Nature activities'],
        booking: 'Book 2-3 months in advance'
      },
      {
        type: 'Budget Hotel',
        name: 'City Center',
        priceRange: '¥120-300/night',
        location: 'Downtown area',
        amenities: ['WiFi', 'Breakfast', 'Tour services'],
        booking: 'Book 1 month in advance'
      }
    ],
    food: [
      {
        name: 'Guilin Rice Noodles',
        description: 'Local specialty rice noodles in broth',
        price: '¥12-20',
        location: 'Local restaurants',
        image: '/images/food/guilin-rice-noodles.jpg'
      },
      {
        name: 'Beer Fish',
        description: 'Fresh fish cooked with beer, Yangshuo specialty',
        price: '¥40-80',
        location: 'Yangshuo restaurants',
        image: '/images/food/beer-fish.jpg'
      }
    ]
  },
  {
    id: 'xiamen',
    title: 'Xiamen',
    description: 'Coastal city with colonial architecture and beautiful beaches',
    slug: 'xiamen',
    country: 'China',
    province: 'Fujian',
    highlights: [
      'Colonial architecture on Gulangyu Island',
      'Beautiful coastal scenery',
      'Mild climate year-round',
      'Historic sites and temples'
    ],
    bestTime: 'September to November, March to May',
    duration: '2-3 days recommended',
    attractions: [
      'Gulangyu Island',
      'Nanputuo Temple',
      'Xiamen University',
      'Zhongshan Road',
      'Huandao Road'
    ],
    transportation: [
      {
        type: 'Airport',
        name: 'Xiamen Gaoqi International Airport (XMN)',
        description: 'International airport serving Xiamen',
        price: '¥6 (BRT)',
        duration: '30-45 minutes to city center',
        tips: ['BRT system connects to city center', 'Close to Taiwan']
      },
      {
        type: 'High-speed Rail',
        name: 'From major cities',
        description: 'High-speed rail connections',
        price: '¥150-400',
        duration: '2-4 hours',
        tips: ['Convenient connections', 'Book in advance']
      }
    ],
    accommodation: [
      {
        type: 'Resort Hotel',
        name: 'Gulangyu Island',
        priceRange: '¥800-2000/night',
        location: 'Island location',
        amenities: ['Sea views', 'Historic buildings', 'Peaceful environment'],
        booking: 'Book 2-3 months in advance'
      },
      {
        type: 'Budget Hotel',
        name: 'Siming District',
        priceRange: '¥150-350/night',
        location: 'City center',
        amenities: ['WiFi', 'Breakfast', 'Convenient location'],
        booking: 'Book 1 month in advance'
      }
    ],
    food: [
      {
        name: 'Oyster Omelet',
        description: 'Fresh oysters with egg and vegetables',
        price: '¥25-35',
        location: 'Night markets',
        image: '/images/food/oyster-omelet.jpg'
      },
      {
        name: 'Satay Noodles',
        description: 'Peanut sauce noodles, local specialty',
        price: '¥12-20',
        location: 'Local restaurants',
        image: '/images/food/satay-noodles.jpg'
      }
    ]
  },
  {
    id: 'qingdao',
    title: 'Qingdao',
    description: 'Coastal city famous for beer and German colonial architecture',
    slug: 'qingdao',
    country: 'China',
    province: 'Shandong',
    highlights: [
      'Famous Tsingtao beer brewery',
      'German colonial architecture',
      'Beautiful beaches and seafood',
      'Olympic sailing venue'
    ],
    bestTime: 'May to October',
    duration: '2-3 days recommended',
    attractions: [
      'Tsingtao Beer Museum',
      'Badaguan Scenic Area',
      'Qingdao Olympic Sailing Center',
      'Laoshan Mountain',
      'Zhongshan Park'
    ],
    transportation: [
      {
        type: 'Airport',
        name: 'Qingdao Jiaodong International Airport (TAO)',
        description: 'New international airport',
        price: '¥20 (Airport Bus)',
        duration: '60 minutes to city center',
        tips: ['Airport buses to various locations', 'Modern facilities']
      },
      {
        type: 'Metro',
        name: 'Qingdao Metro',
        description: 'Modern metro system',
        price: '¥2-6 per ride',
        duration: 'Varies by destination',
        tips: ['Connects to major attractions', 'Beach access']
      }
    ],
    accommodation: [
      {
        type: 'Beach Resort',
        name: 'Shinan District',
        priceRange: '¥600-1500/night',
        location: 'Beachfront area',
        amenities: ['Sea views', 'Restaurant', 'Spa', 'Beach access'],
        booking: 'Book 2-3 months in advance'
      },
      {
        type: 'Budget Hotel',
        name: 'Old Town',
        priceRange: '¥120-300/night',
        location: 'Historic area',
        amenities: ['WiFi', 'Breakfast', 'Cultural atmosphere'],
        booking: 'Book 1 month in advance'
      }
    ],
    food: [
      {
        name: 'Tsingtao Beer',
        description: 'Famous local beer',
        price: '¥8-15',
        location: 'Restaurants and bars',
        image: '/images/food/tsingtao-beer.jpg'
      },
      {
        name: 'Seafood',
        description: 'Fresh seafood including crabs and clams',
        price: '¥50-150 per person',
        location: 'Seafood restaurants',
        image: '/images/food/qingdao-seafood.jpg'
      }
    ]
  },
  {
    id: 'dalian',
    title: 'Dalian',
    description: 'Modern port city with beautiful coastline and clean environment',
    slug: 'dalian',
    country: 'China',
    province: 'Liaoning',
    highlights: [
      'Beautiful coastal scenery',
      'Clean and modern city',
      'Russian and Japanese architecture',
      'Summer destination'
    ],
    bestTime: 'May to October',
    duration: '2-3 days recommended',
    attractions: [
      'Xinghai Square',
      'Tiger Beach Ocean Park',
      'Dalian Forest Zoo',
      'Russian Street',
      'Golden Pebble Beach'
    ],
    transportation: [
      {
        type: 'Airport',
        name: 'Dalian Zhoushuizi International Airport (DLC)',
        description: 'International airport serving Dalian',
        price: '¥12 (Light Rail)',
        duration: '45 minutes to city center',
        tips: ['Light rail connects to city center', 'Modern facilities']
      },
      {
        type: 'Light Rail',
        name: 'Dalian Light Rail',
        description: 'Light rail system',
        price: '¥2-8 per ride',
        duration: 'Varies by destination',
        tips: ['Connects to beaches', 'Tourist-friendly']
      }
    ],
    accommodation: [
      {
        type: 'Beach Resort',
        name: 'Zhongshan District',
        priceRange: '¥500-1200/night',
        location: 'City center',
        amenities: ['Sea views', 'Restaurant', 'Modern facilities'],
        booking: 'Book 2-3 months in advance'
      },
      {
        type: 'Budget Hotel',
        name: 'Near Xinghai Square',
        priceRange: '¥150-400/night',
        location: 'Tourist area',
        amenities: ['WiFi', 'Breakfast', 'Convenient location'],
        booking: 'Book 1 month in advance'
      }
    ],
    food: [
      {
        name: 'Sea Cucumber',
        description: 'Luxury seafood delicacy',
        price: '¥200-500',
        location: 'Upscale restaurants',
        image: '/images/food/sea-cucumber.jpg'
      },
      {
        name: 'Russian Bread',
        description: 'Traditional Russian-style bread',
        price: '¥10-20',
        location: 'Russian Street',
        image: '/images/food/russian-bread.jpg'
      }
    ]
  },
  {
    id: 'kunming',
    title: 'Kunming',
    description: 'Spring City with perfect climate and ethnic diversity',
    slug: 'kunming',
    country: 'China',
    province: 'Yunnan',
    highlights: [
      'Perfect spring-like climate year-round',
      'Gateway to ethnic minority cultures',
      'Beautiful natural scenery',
      'Stone Forest and Dianchi Lake'
    ],
    bestTime: 'Year-round',
    duration: '2-3 days recommended',
    attractions: [
      'Stone Forest',
      'Dianchi Lake',
      'Western Hills',
      'Green Lake Park',
      'Yunnan Ethnic Village'
    ],
    transportation: [
      {
        type: 'Airport',
        name: 'Kunming Changshui International Airport (KMG)',
        description: 'Major airport in southwest China',
        price: '¥25 (Airport Bus)',
        duration: '45 minutes to city center',
        tips: ['Airport buses to city center', 'Gateway to Southeast Asia']
      },
      {
        type: 'Metro',
        name: 'Kunming Metro',
        description: 'Modern metro system',
        price: '¥2-6 per ride',
        duration: 'Varies by destination',
        tips: ['Connects to major attractions', 'Still expanding']
      }
    ],
    accommodation: [
      {
        type: 'Luxury Hotel',
        name: 'Green Lake Area',
        priceRange: '¥400-1000/night',
        location: 'City center',
        amenities: ['Lake views', 'Restaurant', 'Cultural atmosphere'],
        booking: 'Book 1-2 months in advance'
      },
      {
        type: 'Budget Hotel',
        name: 'Downtown Area',
        priceRange: '¥100-250/night',
        location: 'City center',
        amenities: ['WiFi', 'Breakfast', 'Convenient location'],
        booking: 'Book 1 month in advance'
      }
    ],
    food: [
      {
        name: 'Crossing the Bridge Noodles',
        description: 'Famous Yunnan rice noodle soup',
        price: '¥30-50',
        location: 'Local restaurants',
        image: '/images/food/crossing-bridge-noodles.jpg'
      },
      {
        name: 'Flower Cakes',
        description: 'Traditional pastries with edible flowers',
        price: '¥15-25',
        location: 'Local bakeries',
        image: '/images/food/flower-cakes.jpg'
      }
    ]
  },
  {
    id: 'tianjin',
    title: 'Tianjin',
    description: 'Historic port city with European concession architecture',
    slug: 'tianjin',
    country: 'China',
    province: 'Tianjin',
    highlights: [
      'European concession architecture',
      'Historic port city',
      'Traditional Chinese culture',
      'Close to Beijing'
    ],
    bestTime: 'April to June, September to November',
    duration: '1-2 days recommended',
    attractions: [
      'Five Great Avenues',
      'Ancient Culture Street',
      'Tianjin Eye Ferris Wheel',
      'Porcelain House',
      'Italian Style Town'
    ],
    transportation: [
      {
        type: 'High-speed Rail',
        name: 'From Beijing',
        description: 'High-speed rail connection',
        price: '¥54-174',
        duration: '30-60 minutes',
        tips: ['Frequent departures', 'Very convenient']
      },
      {
        type: 'Metro',
        name: 'Tianjin Metro',
        description: 'Modern metro system',
        price: '¥2-6 per ride',
        duration: 'Varies by destination',
        tips: ['Connects to major attractions', 'Easy to navigate']
      }
    ],
    accommodation: [
      {
        type: 'Historic Hotel',
        name: 'Five Great Avenues',
        priceRange: '¥400-800/night',
        location: 'Historic district',
        amenities: ['Historic architecture', 'Restaurant', 'Cultural atmosphere'],
        booking: 'Book 1-2 months in advance'
      },
      {
        type: 'Budget Hotel',
        name: 'City Center',
        priceRange: '¥120-300/night',
        location: 'Downtown area',
        amenities: ['WiFi', 'Breakfast', 'Convenient location'],
        booking: 'Book 1 month in advance'
      }
    ],
    food: [
      {
        name: 'Goubuli Baozi',
        slug: 'goubuli-baozi',
        description: 'Famous Tianjin steamed buns with pork filling',
        price: '¥15-25',
        location: 'Goubuli restaurants, Tianjin specialty shops',
        category: 'snack'
      },
      {
        name: 'Jianbing',
        slug: 'jianbing',
        description: 'Traditional breakfast crepe with egg and crispy wonton',
        price: '¥8-15',
        location: 'Street vendors, breakfast stalls',
        category: 'breakfast'
      },
      {
        name: 'Jiaozi (Dumplings)',
        slug: 'jiaozi',
        description: 'Steamed or boiled dumplings with various fillings',
        price: '¥10-25',
        location: 'Dumpling restaurants, home cooking',
        category: 'main-dish'
      }
    ]
  },
  {
    id: 'wuhan',
    title: 'Wuhan',
    description: 'Historic city at the confluence of Yangtze and Han rivers',
    slug: 'wuhan',
    country: 'China',
    province: 'Hubei',
    highlights: [
      'Historic Yellow Crane Tower',
      'University city with academic atmosphere',
      'Yangtze River crossing',
      'Traditional Chinese culture'
    ],
    bestTime: 'March to May, September to November',
    duration: '2-3 days recommended',
    attractions: [
      'Yellow Crane Tower',
      'East Lake',
      'Hubei Provincial Museum',
      'Wuhan University',
      'Yangtze River Bridge'
    ],
    transportation: [
      {
        type: 'Airport',
        name: 'Wuhan Tianhe International Airport (WUH)',
        description: 'Major airport in central China',
        price: '¥32 (Airport Bus)',
        duration: '45 minutes to city center',
        tips: ['Airport buses to city center', 'High-speed rail hub']
      },
      {
        type: 'Metro',
        name: 'Wuhan Metro',
        description: 'Comprehensive metro system',
        price: '¥2-7 per ride',
        duration: 'Varies by destination',
        tips: ['Connects to major attractions', 'Modern facilities']
      }
    ],
    accommodation: [
      {
        type: 'Luxury Hotel',
        name: 'Hankou District',
        priceRange: '¥500-1200/night',
        location: 'Business district',
        amenities: ['River views', 'Restaurant', 'Business center'],
        booking: 'Book 1-2 months in advance'
      },
      {
        type: 'Budget Hotel',
        name: 'University Area',
        priceRange: '¥100-250/night',
        location: 'Academic district',
        amenities: ['WiFi', 'Breakfast', 'Student-friendly'],
        booking: 'Book 1 month in advance'
      }
    ],
    food: [
      {
        name: 'Reganmian (Hot Dry Noodles)',
        slug: 'reganmian',
        description: 'Wuhan\'s signature alkaline noodles with sesame paste',
        price: '¥6-12',
        location: 'Wuhan noodle shops, street vendors',
        category: 'breakfast'
      },
      {
        name: 'Maoxuewang',
        slug: 'maoxuewang',
        description: 'Spicy hot pot with blood tofu and various ingredients',
        price: '¥25-40',
        location: 'Hunan restaurants, spicy food restaurants',
        category: 'main-dish'
      },
      {
        name: 'Stinky Tofu',
        slug: 'stinky-tofu',
        description: 'Fermented tofu with strong smell but delicious taste',
        price: '¥8-15',
        location: 'Night markets, street vendors',
        category: 'street-food'
      }
    ]
  },
  {
    id: 'lhasa',
    title: 'Lhasa',
    description: 'Sacred city of Tibet with unique culture and stunning architecture',
    slug: 'lhasa',
    country: 'China',
    province: 'Tibet',
    highlights: [
      'Potala Palace and Tibetan Buddhism',
      'Unique high-altitude experience',
      'Tibetan culture and traditions',
      'Sacred temples and monasteries'
    ],
    bestTime: 'May to October',
    duration: '3-5 days recommended',
    attractions: [
      'Potala Palace',
      'Jokhang Temple',
      'Barkhor Street',
      'Drepung Monastery',
      'Sera Monastery'
    ],
    transportation: [
      {
        type: 'Airport',
        name: 'Lhasa Gonggar Airport (LXA)',
        description: 'High-altitude airport',
        price: '¥35 (Airport Bus)',
        duration: '60 minutes to city center',
        tips: ['High altitude adjustment needed', 'Permit required for foreign visitors']
      },
      {
        type: 'Train',
        name: 'Qinghai-Tibet Railway',
        description: 'Scenic high-altitude railway',
        price: '¥400-1200',
        duration: '20-48 hours from major cities',
        tips: ['Scenic journey', 'Oxygen provided', 'Book well in advance']
      }
    ],
    accommodation: [
      {
        type: 'Boutique Hotel',
        name: 'Old Town Area',
        priceRange: '¥600-1500/night',
        location: 'Historic district',
        amenities: ['Traditional architecture', 'Mountain views', 'Oxygen facilities'],
        booking: 'Book 3-4 months in advance'
      },
      {
        type: 'Budget Hotel',
        name: 'Near Barkhor Street',
        priceRange: '¥200-500/night',
        location: 'Cultural area',
        amenities: ['WiFi', 'Breakfast', 'Cultural atmosphere'],
        booking: 'Book 2-3 months in advance'
      }
    ],
    food: [
      {
        name: 'Yak Butter Tea',
        description: 'Traditional Tibetan tea with yak butter',
        price: '¥10-15',
        location: 'Traditional tea houses',
        image: '/images/food/yak-butter-tea.jpg'
      },
      {
        name: 'Momos',
        description: 'Tibetan dumplings',
        price: '¥15-25',
        location: 'Local restaurants',
        image: '/images/food/momos.jpg'
      }
    ]
  }
];

export const getDestinationBySlug = (slug: string): Destination | undefined => {
  return destinations.find(destination => destination.slug === slug);
};

export const getDestinationById = (id: string): Destination | undefined => {
  return destinations.find(destination => destination.id === id);
}; 