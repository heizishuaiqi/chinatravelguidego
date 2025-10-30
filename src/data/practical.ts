import { PracticalInfo } from '@/types';

export const practicalInfo: PracticalInfo[] = [
  {
    id: 'currency-banking',
    category: 'Money & Banking',
    title: 'Currency, Banking & Payment',
    description: 'Essential information about money matters in China',
    items: [
      {
        id: 'currency',
        title: 'Chinese Currency (RMB)',
        description: 'The official currency is Renminbi (RMB) with Yuan (¥) as the basic unit',
        details: [
          'Banknotes: ¥1, ¥5, ¥10, ¥20, ¥50, ¥100',
          'Coins: ¥1, ¥0.5, ¥0.1 (1 jiao)',
          'Exchange rate fluctuates daily',
          'US$1 ≈ ¥7 (approximate, check current rates)'
        ],
        tips: ['Exchange money at banks or authorized dealers', 'Keep receipts for currency exchange', 'Small bills are useful for small purchases']
      },
      {
        id: 'mobile-payment',
        title: 'Mobile Payment',
        description: 'WeChat Pay and Alipay are the dominant payment methods',
        details: [
          'WeChat Pay: Integrated with WeChat messaging app',
          'Alipay: Standalone payment app by Alibaba',
          'QR code scanning for payments',
          'Accepted at most shops, restaurants, and transport'
        ],
        tips: ['Link international card for tourist versions', 'Have backup cash payment method', 'Download apps before arrival']
      },
      {
        id: 'banking',
        title: 'Banking Services',
        description: 'ATMs and banking services for foreign visitors',
        details: [
          'ATMs available at banks, airports, hotels',
          'International cards accepted at most ATMs',
          'Bank of China, ICBC, CCB are major banks',
          'Banking hours: 9:00 AM - 5:00 PM (Mon-Fri)'
        ],
        tips: ['Check ATM fees with your bank', 'Withdraw larger amounts to minimize fees', 'Keep ATM receipts']
      }
    ],
    tips: [
      'Cash is still needed for some small vendors',
      'Mobile payments are faster than cash',
      'Keep some cash as backup',
      'Learn basic numbers in Chinese for prices'
    ]
  },
  {
    id: 'communication',
    category: 'Communication',
    title: 'Internet, Phone & Language',
    description: 'Staying connected and communicating in China',
    items: [
      {
        id: 'internet',
        title: 'Internet Access',
        description: 'WiFi and mobile internet availability',
        details: [
          'Free WiFi in most hotels, restaurants, malls',
          'Mobile data plans available for tourists',
          'VPN may be needed for some international sites',
          'Internet speed is generally good in cities'
        ],
        tips: ['Download offline maps before arrival', 'Consider getting a local SIM card', 'Hotels usually provide WiFi passwords']
      },
      {
        id: 'phone',
        title: 'Phone Services',
        description: 'Mobile phone and SIM card options',
        details: [
          'China Mobile, China Unicom, China Telecom are major carriers',
          'Tourist SIM cards available at airports',
          'Prepaid plans are common',
          'International roaming can be expensive'
        ],
        tips: ['Get SIM card at arrival airport', 'Bring passport for SIM card registration', 'Check if your phone is compatible']
      },
      {
        id: 'language',
        title: 'Language Assistance',
        description: 'Communication tools and tips',
        details: [
          'Mandarin Chinese is the official language',
          'English is limited outside major cities',
          'Translation apps are very helpful',
          'Many signs have English in tourist areas'
        ],
        tips: ['Download translation apps', 'Learn basic phrases', 'Have hotel address in Chinese', 'Use pictures to communicate']
      }
    ],
    tips: [
      'Download essential apps before arrival',
      'Have offline backup for important information',
      'Learn basic Chinese phrases',
      'Use translation apps for complex communication'
    ]
  },
  {
    id: 'health-safety',
    category: 'Health & Safety',
    title: 'Health, Safety & Medical',
    description: 'Staying healthy and safe during your visit',
    items: [
      {
        id: 'health',
        title: 'Health Precautions',
        description: 'General health tips for travelers',
        details: [
          'No special vaccinations required for most areas',
          'Drink bottled or boiled water',
          'Air quality can be poor in some cities',
          'Carry basic medications'
        ],
        tips: ['Get travel insurance', 'Bring prescription medications', 'Check air quality apps', 'Avoid tap water for drinking']
      },
      {
        id: 'medical',
        title: 'Medical Services',
        description: 'Healthcare and medical facilities',
        details: [
          'International hospitals in major cities',
          'Pharmacies widely available',
          'Emergency number: 120',
          'Treatment requires upfront payment'
        ],
        tips: ['Know location of nearest hospital', 'Carry insurance cards', 'Learn basic medical phrases', 'Keep emergency contacts handy']
      },
      {
        id: 'safety',
        title: 'General Safety',
        description: 'Personal safety and security tips',
        details: [
          'China is generally very safe',
          'Petty crime is rare but take precautions',
          'Avoid political discussions',
          'Follow local laws and customs'
        ],
        tips: ['Keep valuables secure', 'Stay in groups at night', 'Be aware of surroundings', 'Register with embassy if required']
      }
    ],
    tips: [
      'Get comprehensive travel insurance',
      'Keep emergency contacts readily available',
      'Know basic emergency phrases',
      'Carry copies of important documents'
    ]
  },
  {
    id: 'culture-customs',
    category: 'Culture & Customs',
    title: 'Cultural Norms & Etiquette',
    description: 'Understanding Chinese culture and customs',
    items: [
      {
        id: 'etiquette',
        title: 'Social Etiquette',
        description: 'Basic social customs and manners',
        details: [
          'Bow or nod for greeting',
          'Use both hands when giving/receiving cards',
          'Remove shoes when entering homes',
          'Respect for elders is important'
        ],
        tips: ['Learn basic greetings', 'Be patient and polite', 'Observe and follow local customs', 'Ask permission before taking photos']
      },
      {
        id: 'dining',
        title: 'Dining Customs',
        description: 'Table manners and dining etiquette',
        details: [
          'Wait for host to start eating',
          'Use chopsticks properly',
          'Share dishes with everyone',
          'Don\'t stick chopsticks upright in rice'
        ],
        tips: ['Learn chopstick basics', 'Try everything offered', 'Compliment the food', 'Tipping not expected']
      },
      {
        id: 'taboos',
        title: 'Cultural Taboos',
        description: 'Things to avoid or be careful about',
        details: [
          'Avoid political topics',
          'Don\'t touch someone\'s head',
          'Be respectful in religious sites',
          'Follow photography restrictions'
        ],
        tips: ['Research local customs', 'Be respectful and observant', 'Ask before taking photos', 'Dress appropriately']
      }
    ],
    tips: [
      'Show respect for local customs',
      'Be patient with cultural differences',
      'Learn basic Chinese phrases',
      'Observe before acting'
    ]
  },
  {
    id: 'shopping',
    category: 'Shopping',
    title: 'Shopping & Bargaining',
    description: 'Shopping tips and bargaining strategies',
    items: [
      {
        id: 'shopping-areas',
        title: 'Shopping Areas',
        description: 'Where to shop for different items',
        details: [
          'Malls: Fixed prices, modern shopping',
          'Markets: Bargaining expected, local goods',
          'Street vendors: Cheap items, cash only',
          'Duty-free: Airports, luxury items'
        ],
        tips: ['Compare prices', 'Check product authenticity', 'Keep receipts', 'Know return policies']
      },
      {
        id: 'bargaining',
        title: 'Bargaining Tips',
        description: 'How to negotiate prices effectively',
        details: [
          'Start at 30-50% of asking price',
          'Be prepared to walk away',
          'Stay friendly and patient',
          'Cash payments may get better prices'
        ],
        tips: ['Practice basic numbers in Chinese', 'Don\'t show too much interest initially', 'Bundle items for better deals', 'Know when bargaining is appropriate']
      },
      {
        id: 'souvenirs',
        title: 'Popular Souvenirs',
        description: 'What to buy as gifts and memories',
        details: [
          'Tea: Various types from different regions',
          'Silk products: Scarves, clothing',
          'Jade jewelry: Traditional Chinese stones',
          'Calligraphy items: Brushes, ink'
        ],
        tips: ['Buy from reputable stores', 'Check customs regulations', 'Get certificates for expensive items', 'Consider shipping for fragile items']
      }
    ],
    tips: [
      'Bargain politely and respectfully',
      'Know customs regulations for your country',
      'Check product quality before buying',
      'Keep receipts for warranty and returns'
    ]
  }
];

export const usefulApps = [
  {
    name: 'WeChat',
    category: 'Essential',
    description: 'Messaging and mobile payment',
    platforms: ['iOS', 'Android'],
    features: ['Messaging', 'Mobile payment', 'Mini programs', 'Translation']
  },
  {
    name: 'Alipay',
    category: 'Payment',
    description: 'Mobile payment and services',
    platforms: ['iOS', 'Android'],
    features: ['Mobile payment', 'Transportation', 'Food delivery', 'Utilities']
  },
  {
    name: 'DiDi',
    category: 'Transportation',
    description: 'Ride-hailing service',
    platforms: ['iOS', 'Android'],
    features: ['Taxi booking', 'Real-time tracking', 'Multiple payment options', 'English support']
  },
  {
    name: 'Baidu Maps',
    category: 'Navigation',
    description: 'Navigation and maps',
    platforms: ['iOS', 'Android'],
    features: ['Navigation', 'Public transport', 'Offline maps', 'Voice guidance']
  },
  {
    name: 'Pleco',
    category: 'Language',
    description: 'Chinese dictionary and translator',
    platforms: ['iOS', 'Android'],
    features: ['Dictionary', 'Character recognition', 'Pronunciation', 'Offline mode']
  }
];

export const importantNumbers = [
  { service: 'Police', number: '110', description: 'General emergency police' },
  { service: 'Fire', number: '119', description: 'Fire emergency services' },
  { service: 'Medical', number: '120', description: 'Medical emergency and ambulance' },
  { service: 'Traffic', number: '122', description: 'Traffic police and accidents' }
]; 