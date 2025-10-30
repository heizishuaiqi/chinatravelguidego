import { ChineseCuisine, FamousDish } from '@/types';

export const chineseCuisines: ChineseCuisine[] = [
  {
    id: 'sichuan',
    name: 'Sichuan Cuisine',
    region: 'Sichuan Province',
    characteristics: [
      'Spicy and numbing flavors',
      'Heavy use of Sichuan peppercorns',
      'Bold and robust tastes',
      'Complex layered flavors',
      'Hot pot culture'
    ],
    famousDishes: [
      {
        id: 'mapo-tofu',
        name: 'Mapo Tofu',
        slug: 'mapo-tofu',
        description: 'Soft tofu in spicy sauce with minced meat',
        ingredients: ['Soft tofu', 'Minced pork', 'Sichuan peppercorns', 'Chili oil', 'Fermented bean sauce'],
        taste: 'Spicy, numbing, savory',
        price: '¥15-25',
        whereToFind: ['Sichuan restaurants', 'Most Chinese restaurants', 'Street food vendors'],
        tips: ['Ask for mild version if you don\'t like spicy food', 'Best eaten with rice', 'Authentic version uses silky tofu'],
        destinations: ['Chengdu', 'Chongqing'],
        category: 'main-dish'
      },
      {
        id: 'kung-pao-chicken',
        name: 'Kung Pao Chicken',
        slug: 'kung-pao-chicken',
        description: 'Diced chicken with peanuts in spicy sauce',
        ingredients: ['Chicken breast', 'Peanuts', 'Dried chilies', 'Sichuan peppercorns', 'Soy sauce'],
        taste: 'Spicy, sweet, savory',
        price: '¥20-35',
        whereToFind: ['Sichuan restaurants', 'Chinese restaurants worldwide', 'Hotel restaurants'],
        tips: ['Original version is quite spicy', 'Peanuts should be crispy', 'Goes well with steamed rice'],
        destinations: ['Chengdu', 'Chongqing'],
        category: 'main-dish'
      },
      {
        id: 'sichuan-hot-pot',
        name: 'Sichuan Hot Pot',
        slug: 'sichuan-hot-pot',
        description: 'Communal cooking in spicy broth',
        ingredients: ['Spicy broth', 'Various meats', 'Vegetables', 'Tofu', 'Noodles'],
        taste: 'Extremely spicy, numbing',
        price: '¥50-150 per person',
        whereToFind: ['Hot pot restaurants', 'Chengdu specialty restaurants', 'Chain restaurants like Haidilao'],
        tips: ['Start with mild broth if new to spicy food', 'Dip cooked food in sesame oil', 'Drink milk to cool down'],
        destinations: ['Chengdu', 'Chongqing'],
        category: 'hot-pot'
      },
      {
        id: 'dan-dan-noodles',
        name: 'Dan Dan Noodles',
        slug: 'dan-dan-noodles',
        description: 'Spicy noodles with sesame paste and minced pork',
        ingredients: ['Fresh noodles', 'Sesame paste', 'Chili oil', 'Minced pork', 'Sichuan peppercorns'],
        taste: 'Spicy, nutty, savory',
        price: '¥12-20',
        whereToFind: ['Sichuan noodle shops', 'Street vendors', 'Food courts'],
        tips: ['Mix well before eating', 'Traditional version has no broth', 'Popular street food'],
        destinations: ['Chengdu'],
        category: 'street-food'
      }
    ],
    diningEtiquette: [
      'Share dishes with everyone at the table',
      'Use serving spoons for communal dishes',
      'Don\'t stick chopsticks upright in rice',
      'Try a little of everything offered',
      'Compliment the spiciness level'
    ],
    tips: [
      'Build tolerance to spicy food gradually',
      'Have dairy products ready to cool down',
      'Learn to identify Sichuan peppercorns',
      'Visit Chengdu for the most authentic experience',
      'Ask for spice level adjustment'
    ]
  },
  {
    id: 'cantonese',
    name: 'Cantonese Cuisine',
    region: 'Guangdong Province',
    characteristics: [
      'Fresh and light flavors',
      'Emphasis on original taste',
      'Steaming and stir-frying techniques',
      'Seafood specialties',
      'Dim sum culture'
    ],
    famousDishes: [
      {
        id: 'dim-sum',
        name: 'Dim Sum',
        slug: 'dim-sum',
        description: 'Variety of small dishes served with tea',
        ingredients: ['Various fillings', 'Wheat/rice flour wrappers', 'Bamboo steamer cooking'],
        taste: 'Light, fresh, varied',
        price: '¥5-15 per basket',
        whereToFind: ['Cantonese restaurants', 'Tea houses', 'Hotel restaurants', 'Specialty dim sum restaurants'],
        tips: ['Best enjoyed during morning tea time', 'Share different varieties', 'Pair with Chinese tea'],
        destinations: ['Guangzhou', 'Shenzhen'],
        category: 'snack'
      },
      {
        id: 'roast-duck',
        name: 'Cantonese Roast Duck',
        slug: 'roast-duck',
        description: 'Crispy-skinned duck with sweet glaze',
        ingredients: ['Whole duck', 'Five-spice powder', 'Honey', 'Soy sauce', 'Rice wine'],
        taste: 'Sweet, savory, crispy',
        price: '¥40-80',
        whereToFind: ['Cantonese restaurants', 'Roast meat shops', 'Hong Kong-style restaurants'],
        tips: ['Skin should be crispy', 'Often served with pancakes', 'Best when freshly roasted'],
        destinations: ['Guangzhou', 'Shenzhen'],
        category: 'main-dish'
      },
      {
        id: 'wonton-noodles',
        name: 'Wonton Noodles',
        slug: 'wonton-noodles',
        description: 'Thin noodles in clear broth with pork wontons',
        ingredients: ['Thin egg noodles', 'Pork wontons', 'Clear broth', 'Bok choy', 'Scallions'],
        taste: 'Light, savory, comforting',
        price: '¥12-20',
        whereToFind: ['Noodle shops', 'Cantonese restaurants', 'Food courts', 'Street vendors'],
        tips: ['Eat quickly while hot', 'Slurp noodles is acceptable', 'Add white pepper if desired'],
        destinations: ['Guangzhou', 'Shenzhen'],
        category: 'main-dish'
      }
    ],
    diningEtiquette: [
      'Pour tea for others before yourself',
      'Tap table twice to thank for tea',
      'Use chopsticks to serve others',
      'Eat rice with chopsticks, not spoon',
      'Try dim sum in small portions'
    ],
    tips: [
      'Go for dim sum before 11 AM for best selection',
      'Learn basic dim sum names',
      'Visit Hong Kong for authentic experience',
      'Try different types of Chinese tea',
      'Seafood is usually very fresh'
    ]
  },
  {
    id: 'beijing',
    name: 'Beijing Cuisine',
    region: 'Beijing',
    characteristics: [
      'Rich and hearty flavors',
      'Influence from imperial cuisine',
      'Wheat-based dishes',
      'Roasted and braised cooking',
      'Seasonal ingredients'
    ],
    famousDishes: [
      {
        id: 'peking-duck',
        name: 'Peking Duck',
        slug: 'peking-duck',
        description: 'Crispy roasted duck served with pancakes',
        ingredients: ['Whole duck', 'Thin pancakes', 'Hoisin sauce', 'Scallions', 'Cucumber'],
        taste: 'Rich, crispy, savory',
        price: '¥150-300',
        whereToFind: ['Quanjude Restaurant', 'Bianyifang', 'High-end Beijing restaurants'],
        tips: ['Order in advance', 'Wrap in pancakes with sauce', 'Typically serves 2-3 people'],
        destinations: ['Beijing'],
        category: 'main-dish'
      },
      {
        id: 'jiaozi',
        name: 'Jiaozi (Dumplings)',
        slug: 'jiaozi',
        description: 'Steamed or boiled dumplings with various fillings',
        ingredients: ['Wheat flour wrapper', 'Pork and cabbage', 'Beef', 'Vegetable fillings'],
        taste: 'Savory, juicy, comforting',
        price: '¥10-25',
        whereToFind: ['Dumpling restaurants', 'Home cooking', 'Street vendors', 'Food courts'],
        tips: ['Dip in black vinegar with garlic', 'Eat during Chinese New Year', 'Try different fillings'],
        destinations: ['Beijing', 'Tianjin'],
        category: 'main-dish'
      },
      {
        id: 'zhajiangmian',
        name: 'Zhajiangmian',
        slug: 'zhajiangmian',
        description: 'Noodles with fermented bean sauce',
        ingredients: ['Thick noodles', 'Fermented bean sauce', 'Minced pork', 'Julienned vegetables'],
        taste: 'Salty, savory, hearty',
        price: '¥15-25',
        whereToFind: ['Beijing noodle shops', 'Local restaurants', 'Food courts'],
        tips: ['Mix well before eating', 'Popular lunch dish', 'Add fresh garlic if available'],
        destinations: ['Beijing'],
        category: 'main-dish'
      },
      {
        id: 'jianbing',
        name: 'Jianbing',
        slug: 'jianbing',
        description: 'Traditional breakfast crepe with egg and crispy wonton',
        ingredients: ['Mung bean flour', 'Egg', 'Crispy wonton', 'Scallions', 'Sweet bean sauce'],
        taste: 'Savory, crispy, satisfying',
        price: '¥8-15',
        whereToFind: ['Street vendors', 'Breakfast stalls', 'Food courts'],
        tips: ['Best eaten fresh and hot', 'Popular breakfast item', 'Can add different fillings'],
        destinations: ['Beijing', 'Tianjin'],
        category: 'breakfast'
      }
    ],
    diningEtiquette: [
      'Finish your bowl of rice completely',
      'Make noise when eating noodles',
      'Use chopsticks for most dishes',
      'Respect elder\'s food preferences',
      'Share dishes family-style'
    ],
    tips: [
      'Try authentic restaurants in Beijing',
      'Learn to use chopsticks properly',
      'Wheat dishes are more common than rice',
      'Winter dishes are heartier',
      'Tea is important with meals'
    ]
  },
  {
    id: 'shanghai',
    name: 'Shanghai Cuisine',
    region: 'Shanghai',
    characteristics: [
      'Sweet and savory balance',
      'Red cooking (hong shao) style',
      'Fresh river fish and seafood',
      'Refined cooking techniques',
      'Seasonal specialties'
    ],
    famousDishes: [
      {
        id: 'xiaolongbao',
        name: 'Xiaolongbao',
        slug: 'xiaolongbao',
        description: 'Steamed soup dumplings',
        ingredients: ['Thin wrapper', 'Pork filling', 'Gelatinized broth', 'Ginger', 'Soy sauce'],
        taste: 'Savory, juicy, delicate',
        price: '¥15-30',
        whereToFind: ['Din Tai Fung', 'Local dumpling shops', 'Shanghai restaurants'],
        tips: ['Bite carefully to avoid burning', 'Dip in black vinegar', 'Eat while hot'],
        destinations: ['Shanghai'],
        category: 'snack'
      },
      {
        id: 'shengjianbao',
        name: 'Shengjianbao',
        slug: 'shengjianbao',
        description: 'Pan-fried pork buns',
        ingredients: ['Dough wrapper', 'Pork filling', 'Gelatinized broth', 'Sesame seeds', 'Scallions'],
        taste: 'Savory, crispy bottom, juicy',
        price: '¥10-20',
        whereToFind: ['Street food stalls', 'Shanghai breakfast shops', 'Food courts'],
        tips: ['Bottom should be crispy', 'Careful of hot soup inside', 'Popular breakfast item'],
        destinations: ['Shanghai'],
        category: 'breakfast'
      },
      {
        id: 'hong-shao-rou',
        name: 'Hong Shao Rou (Red Braised Pork)',
        slug: 'hong-shao-rou',
        description: 'Sweet and savory braised pork belly',
        ingredients: ['Pork belly', 'Soy sauce', 'Sugar', 'Shaoxing wine', 'Star anise'],
        taste: 'Sweet, savory, rich',
        price: '¥25-40',
        whereToFind: ['Shanghai restaurants', 'Home cooking', 'Chinese restaurants'],
        tips: ['Best eaten with white rice', 'Signature Shanghai dish', 'Meat should be tender'],
        destinations: ['Shanghai', 'Hangzhou', 'Suzhou'],
        category: 'main-dish'
      }
    ],
    diningEtiquette: [
      'Appreciate the subtle sweetness',
      'Savor the refined flavors',
      'Share dishes at the table',
      'Use chopsticks skillfully',
      'Complement the cooking technique'
    ],
    tips: [
      'Try authentic restaurants in Shanghai',
      'Sweet flavors are characteristic',
      'Red cooking is a signature technique',
      'Seasonal vegetables are emphasized',
      'River fish is preferred over sea fish'
    ]
  },
  {
    id: 'hunan',
    name: 'Hunan Cuisine',
    region: 'Hunan Province',
    characteristics: [
      'Pure spicy flavors (no numbing)',
      'Heavy use of fresh chilies',
      'Sour and spicy combinations',
      'Smoked and cured ingredients',
      'Bold and fiery taste'
    ],
    famousDishes: [
      {
        id: 'maoxuewang',
        name: 'Maoxuewang',
        slug: 'maoxuewang',
        description: 'Spicy hot pot with blood tofu and various ingredients',
        ingredients: ['Duck blood tofu', 'Beef', 'Bean sprouts', 'Chili oil', 'Sichuan peppercorns'],
        taste: 'Extremely spicy, savory',
        price: '¥25-40',
        whereToFind: ['Hunan restaurants', 'Spicy food restaurants', 'Hot pot shops'],
        tips: ['Very spicy - prepare dairy products', 'Share with others', 'Not for spice-sensitive people'],
        destinations: ['Wuhan'],
        category: 'main-dish'
      },
      {
        id: 'orange-chicken',
        name: 'Orange Chicken (Hunan Style)',
        slug: 'orange-chicken',
        description: 'Crispy chicken with sweet and sour orange sauce',
        ingredients: ['Chicken pieces', 'Orange peel', 'Fresh chilies', 'Sugar', 'Vinegar'],
        taste: 'Sweet, sour, spicy',
        price: '¥20-35',
        whereToFind: ['Hunan restaurants', 'Chinese restaurants', 'Hotel restaurants'],
        tips: ['Different from American version', 'Has visible chili pieces', 'Balance of sweet and spicy'],
        destinations: ['Wuhan'],
        category: 'main-dish'
      },
      {
        id: 'stinky-tofu',
        name: 'Stinky Tofu',
        slug: 'stinky-tofu',
        description: 'Fermented tofu with strong smell but delicious taste',
        ingredients: ['Fermented tofu', 'Chili sauce', 'Garlic', 'Scallions', 'Spices'],
        taste: 'Strong, savory, spicy',
        price: '¥8-15',
        whereToFind: ['Night markets', 'Street vendors', 'Local snack shops'],
        tips: ['Don\'t judge by smell', 'Acquired taste for foreigners', 'Try at night markets'],
        destinations: ['Wuhan'],
        category: 'street-food'
      }
    ],
    diningEtiquette: [
      'Embrace the spiciness',
      'Share dishes with the table',
      'Have cooling drinks ready',
      'Don\'t waste food despite the heat',
      'Compliment the chef\'s spice skill'
    ],
    tips: [
      'Hunan food is spicier than Sichuan',
      'Build spice tolerance gradually',
      'Try local specialties in Changsha',
      'Fresh chilies are preferred over dried',
      'Pairs well with rice wine'
    ]
  }
];

// 地方特色小吃
export const localSnacks: FamousDish[] = [
  {
    id: 'roujiamo',
    name: 'Roujiamo',
    slug: 'roujiamo',
    description: 'Chinese hamburger with braised pork in flatbread',
    ingredients: ['Flatbread', 'Braised pork', 'Garlic', 'Cilantro', 'Chili oil'],
    taste: 'Savory, tender, aromatic',
    price: '¥8-15',
    whereToFind: ['Street vendors', 'Xi\'an restaurants', 'Food courts'],
    tips: ['Eat while hot', 'Xi\'an specialty', 'Often paired with cold noodles'],
    destinations: ['Xi\'an'],
    category: 'street-food'
  },
  {
    id: 'reganmian',
    name: 'Reganmian (Hot Dry Noodles)',
    slug: 'reganmian',
    description: 'Wuhan\'s signature alkaline noodles with sesame paste',
    ingredients: ['Alkaline noodles', 'Sesame paste', 'Soy sauce', 'Pickled vegetables', 'Scallions'],
    taste: 'Nutty, savory, satisfying',
    price: '¥6-12',
    whereToFind: ['Wuhan noodle shops', 'Street vendors', 'Local restaurants'],
    tips: ['Wuhan breakfast staple', 'Mix thoroughly before eating', 'Unique texture'],
    destinations: ['Wuhan'],
    category: 'breakfast'
  },
  {
    id: 'goubuli-baozi',
    name: 'Goubuli Baozi',
    slug: 'goubuli-baozi',
    description: 'Famous Tianjin steamed buns with pork filling',
    ingredients: ['Flour wrapper', 'Pork filling', 'Ginger', 'Soy sauce', 'Sesame oil'],
    taste: 'Savory, juicy, tender',
    price: '¥15-25',
    whereToFind: ['Goubuli restaurants', 'Tianjin specialty shops', 'Food courts'],
    tips: ['Tianjin\'s most famous food', 'Historic brand since 1858', 'Eat while steaming hot'],
    destinations: ['Tianjin'],
    category: 'snack'
  },
  {
    id: 'guilin-rice-noodles',
    name: 'Guilin Rice Noodles',
    slug: 'guilin-rice-noodles',
    description: 'Guilin\'s signature rice noodle soup with various toppings',
    ingredients: ['Rice noodles', 'Pork broth', 'Braised pork', 'Pickled beans', 'Peanuts'],
    taste: 'Light, savory, aromatic',
    price: '¥8-15',
    whereToFind: ['Local noodle shops', 'Street vendors', 'Guilin restaurants'],
    tips: ['Guilin\'s breakfast staple', 'Many topping options', 'Very popular with locals'],
    destinations: ['Guilin'],
    category: 'breakfast'
  },
  {
    id: 'crossing-bridge-noodles',
    name: 'Crossing Bridge Rice Noodles',
    slug: 'crossing-bridge-noodles',
    description: 'Yunnan\'s famous rice noodle soup served in hot broth',
    ingredients: ['Rice noodles', 'Hot chicken broth', 'Thin meat slices', 'Vegetables', 'Quail eggs'],
    taste: 'Light, fresh, warming',
    price: '¥15-30',
    whereToFind: ['Yunnan restaurants', 'Specialty noodle shops', 'Food courts'],
    tips: ['Add ingredients to hot broth yourself', 'Be careful of very hot soup', 'Kunming specialty'],
    destinations: ['Kunming'],
    category: 'main-dish'
  },
  {
    id: 'duck-blood-soup',
    name: 'Duck Blood and Vermicelli Soup',
    slug: 'duck-blood-soup',
    description: 'Nanjing\'s famous soup with duck blood and bean vermicelli',
    ingredients: ['Duck blood', 'Bean vermicelli', 'Duck gizzards', 'Tofu puffs', 'Duck broth'],
    taste: 'Light, savory, comforting',
    price: '¥12-20',
    whereToFind: ['Nanjing restaurants', 'Local soup shops', 'Street vendors'],
    tips: ['Nanjing specialty', 'Very nutritious', 'Popular comfort food'],
    destinations: ['Nanjing'],
    category: 'main-dish'
  },
  {
    id: 'qingdao-beer',
    name: 'Qingdao Beer Experience',
    slug: 'qingdao-beer',
    description: 'Fresh Tsingtao beer paired with local seafood',
    ingredients: ['Fresh Tsingtao beer', 'Grilled seafood', 'Clams', 'Shrimp', 'Local snacks'],
    taste: 'Crisp, refreshing, oceanic',
    price: '¥20-50',
    whereToFind: ['Beer gardens', 'Seafood restaurants', 'Beach bars'],
    tips: ['Best enjoyed fresh from brewery', 'Pair with seafood', 'Summer specialty'],
    destinations: ['Qingdao'],
    category: 'snack'
  }
];

// Helper functions
export const getDishBySlug = (slug: string): (FamousDish & { cuisineName: string; region: string }) | undefined => {
  // Search in cuisines
  for (const cuisine of chineseCuisines) {
    const dish = cuisine.famousDishes.find(d => d.slug === slug);
    if (dish) {
      return {
        ...dish,
        cuisineName: cuisine.name,
        region: cuisine.region
      };
    }
  }
  
  // Search in local snacks
  const snack = localSnacks.find(s => s.slug === slug);
  if (snack) {
    return {
      ...snack,
      cuisineName: 'Local Specialty',
      region: snack.destinations[0] || 'Various'
    };
  }
  
  return undefined;
};

export const getAllDishes = (): (FamousDish & { cuisineName: string; region: string })[] => {
  const cuisineDishes = chineseCuisines.flatMap(cuisine => 
    cuisine.famousDishes.map(dish => ({
      ...dish,
      cuisineName: cuisine.name,
      region: cuisine.region
    }))
  );
  
  const localDishes = localSnacks.map(dish => ({
    ...dish,
    cuisineName: 'Local Specialty',
    region: dish.destinations[0] || 'Various'
  }));
  
  return [...cuisineDishes, ...localDishes];
};

export const getDishesByDestination = (destination: string): (FamousDish & { cuisineName: string; region: string })[] => {
  const allDishes = getAllDishes();
  return allDishes.filter(dish => dish.destinations.includes(destination));
};

export const getDishesByCuisine = (cuisineId: string): FamousDish[] => {
  const cuisine = chineseCuisines.find(c => c.id === cuisineId);
  return cuisine ? cuisine.famousDishes : [];
};

export const getSnacksByCategory = (category: string): FamousDish[] => {
  const allDishes = getAllDishes();
  return allDishes.filter(dish => dish.category === category);
};

// 获取特定目的地的详细美食信息（补充目的地页面的基础食物信息）
export const getDestinationFoodDetails = (destination: string): (FamousDish & { cuisineName: string; region: string })[] => {
  return getDishesByDestination(destination);
};

// 获取所有地方特色小吃
export const getAllLocalSnacks = (): (FamousDish & { cuisineName: string; region: string })[] => {
  return localSnacks.map(snack => ({
    ...snack,
    cuisineName: 'Local Specialty',
    region: snack.destinations[0] || 'Various'
  }));
};

// 餐厅类型
export const restaurantTypes = [
  {
    name: 'Fine Dining',
    description: 'Upscale restaurants with refined cuisine',
    priceRange: '¥200-800 per person',
    characteristics: ['Elegant atmosphere', 'Professional service', 'High-quality ingredients', 'Artistic presentation'],
    tips: ['Reservations usually required', 'Dress code may apply', 'Expect longer meals', 'Tipping not required']
  },
  {
    name: 'Local Restaurants',
    description: 'Authentic local cuisine in casual settings',
    priceRange: '¥30-100 per person',
    characteristics: ['Authentic flavors', 'Local atmosphere', 'Reasonable prices', 'Limited English'],
    tips: ['Learn basic Chinese phrases', 'Point to menu items', 'Ask locals for recommendations', 'Try regional specialties']
  },
  {
    name: 'Street Food',
    description: 'Quick and cheap food from vendors',
    priceRange: '¥5-20 per item',
    characteristics: ['Very affordable', 'Fast service', 'Authentic flavors', 'Eat standing or walking'],
    tips: ['Choose busy vendors', 'Eat when food is hot', 'Bring cash', 'Try different items']
  },
  {
    name: 'Food Courts',
    description: 'Multiple vendors in shopping centers',
    priceRange: '¥15-50 per person',
    characteristics: ['Variety of choices', 'Clean environment', 'Good for groups', 'Modern payment methods'],
    tips: ['Good for trying different cuisines', 'Usually accepts mobile payment', 'Cleaner than street food', 'Often English menus']
  },
  {
    name: 'Hot Pot',
    description: 'Communal cooking in flavored broth',
    priceRange: '¥50-150 per person',
    characteristics: ['Social dining', 'Cook your own food', 'Variety of ingredients', 'Spicy options'],
    tips: ['Book ahead for popular places', 'Start with mild broth', 'Cook food thoroughly', 'Prepare for spicy food']
  }
];

// 用餐礼仪
export const diningEtiquette = [
  'Wait for the host to start eating',
  'Use chopsticks properly - don\'t point or stick upright in rice',
  'Share dishes with everyone at the table',
  'Pour tea for others before yourself',
  'Try a little of everything offered',
  'Don\'t finish all the food (shows abundance)',
  'Compliment the food to show appreciation',
  'Let elders eat first',
  'Don\'t waste food',
  'Tipping is not expected in most places'
];

// 食物安全提示
export const foodSafetyTips = [
  'Eat at busy restaurants with high turnover',
  'Choose freshly cooked hot food',
  'Avoid raw or undercooked meat',
  'Be cautious with street food if you have a sensitive stomach',
  'Drink bottled or boiled water',
  'Wash hands before eating',
  'Avoid ice in drinks unless from reputable places',
  'Check expiration dates on packaged foods',
  'Trust your instincts - if something seems off, don\'t eat it',
  'Carry stomach medicine just in case'
];

// 特殊饮食需求
export const specialDietaryNeeds = [
  {
    diet: 'Vegetarian',
    challenges: ['Many dishes contain meat stock', 'Limited vegetarian options', 'Communication barrier'],
    solutions: ['Learn key phrases in Chinese', 'Look for Buddhist restaurants', 'Check ingredients carefully'],
    recommendations: ['Mapo tofu (request no meat)', 'Vegetable dumplings', 'Egg fried rice', 'Buddhist temple food']
  },
  {
    diet: 'Halal',
    challenges: ['Pork is common', 'Cross-contamination concerns', 'Limited halal certification'],
    solutions: ['Look for halal restaurants', 'Check for halal certification', 'Ask about preparation methods'],
    recommendations: ['Xinjiang cuisine', 'Halal beef noodles', 'Muslim Quarter foods', 'Certified halal restaurants']
  },
  {
    diet: 'Gluten-Free',
    challenges: ['Wheat-based dishes common', 'Soy sauce contains gluten', 'Limited awareness'],
    solutions: ['Learn Chinese phrases for gluten-free', 'Stick to rice-based dishes', 'Bring gluten-free soy sauce'],
    recommendations: ['Steamed rice', 'Rice noodles', 'Stir-fried vegetables', 'Grilled meats without sauce']
  }
]; 