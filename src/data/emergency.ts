import { EmergencyInfo, EmergencyContact } from '@/types';

export const emergencyInfo: EmergencyInfo[] = [
  {
    id: 'emergency-numbers',
    category: 'Emergency Services',
    title: 'Emergency Contact Numbers',
    description: 'Important numbers to call in emergencies',
    contacts: [
      {
        type: 'Police',
        name: 'Police Emergency',
        phone: '110',
        description: 'General police emergency, crime reporting, public safety',
        availability: '24/7'
      },
      {
        type: 'Medical',
        name: 'Medical Emergency',
        phone: '120',
        description: 'Ambulance services, medical emergencies, hospital transport',
        availability: '24/7'
      },
      {
        type: 'Fire',
        name: 'Fire Department',
        phone: '119',
        description: 'Fire emergencies, rescue services, hazardous situations',
        availability: '24/7'
      },
      {
        type: 'Traffic',
        name: 'Traffic Police',
        phone: '122',
        description: 'Traffic accidents, road emergencies, traffic violations',
        availability: '24/7'
      }
    ],
    procedures: [
      'Dial the appropriate emergency number',
      'Stay calm and speak clearly',
      'Provide your location (address or landmarks)',
      'Describe the nature of the emergency',
      'Follow the dispatcher\'s instructions',
      'Stay on the line until help arrives'
    ],
    tips: [
      'Learn basic emergency phrases in Chinese',
      'Keep important addresses written in Chinese',
      'Have someone translate if possible',
      'Know your current location at all times',
      'Keep emergency numbers in your phone'
    ]
  },
  {
    id: 'medical-facilities',
    category: 'Medical Services',
    title: 'Medical Facilities & Services',
    description: 'Healthcare options for foreign visitors',
    contacts: [
      {
        type: 'Hospital',
        name: 'Beijing United Family Hospital',
        phone: '+86 10 5927 7000',
        description: 'International hospital with English-speaking staff',
        availability: '24/7 Emergency'
      },
      {
        type: 'Hospital',
        name: 'Shanghai United Family Hospital',
        phone: '+86 21 2216 3999',
        description: 'International hospital with multi-language support',
        availability: '24/7 Emergency'
      },
      {
        type: 'Clinic',
        name: 'International SOS',
        phone: '+86 10 6462 9100',
        description: 'International medical assistance and clinics',
        availability: '24/7 Assistance'
      },
      {
        type: 'Pharmacy',
        name: 'Watsons Pharmacy',
        phone: 'Multiple locations',
        description: 'International pharmacy chain with English labels',
        availability: 'Store hours vary'
      }
    ],
    procedures: [
      'Call emergency number 120 for ambulance',
      'Go to nearest hospital emergency room',
      'Bring passport and insurance documents',
      'Payment required upfront in most cases',
      'Contact insurance company for coverage',
      'Keep all receipts for insurance claims'
    ],
    tips: [
      'Get travel health insurance before arrival',
      'Locate nearest hospital to your hotel',
      'Carry emergency medical information',
      'Know your blood type and allergies',
      'Bring copies of prescriptions'
    ]
  },
  {
    id: 'embassy-consulates',
    category: 'Diplomatic Services',
    title: 'Embassy & Consulate Services',
    description: 'Contact information for diplomatic assistance',
    contacts: [
      {
        type: 'Embassy',
        name: 'US Embassy Beijing',
        phone: '+86 10 8531 3000',
        description: 'American Citizens Services, passport, emergency assistance',
        availability: 'Business hours, emergency after hours'
      },
      {
        type: 'Consulate',
        name: 'US Consulate Shanghai',
        phone: '+86 21 8011 2400',
        description: 'American Citizens Services for eastern China',
        availability: 'Business hours'
      },
      {
        type: 'Embassy',
        name: 'UK Embassy Beijing',
        phone: '+86 10 5192 4000',
        description: 'British Citizens Services, consular assistance',
        availability: 'Business hours, emergency line available'
      },
      {
        type: 'Embassy',
        name: 'Canadian Embassy Beijing',
        phone: '+86 10 5139 4000',
        description: 'Canadian Citizens Services, consular assistance',
        availability: 'Business hours'
      },
      {
        type: 'Embassy',
        name: 'Australian Embassy Beijing',
        phone: '+86 10 5140 4111',
        description: 'Australian Citizens Services, consular assistance',
        availability: 'Business hours'
      }
    ],
    procedures: [
      'Contact your country\'s embassy/consulate',
      'Provide passport number and personal details',
      'Explain the nature of your emergency',
      'Follow their guidance and instructions',
      'Maintain contact as situation develops'
    ],
    tips: [
      'Register with your embassy upon arrival',
      'Keep embassy contact info readily available',
      'Know your consul\'s emergency procedures',
      'Carry copy of passport and visa',
      'Inform embassy of travel plans'
    ]
  },
  {
    id: 'lost-stolen',
    category: 'Lost & Stolen Items',
    title: 'Lost or Stolen Documents',
    description: 'What to do if important documents are lost or stolen',
    contacts: [
      {
        type: 'Police',
        name: 'Local Police Station',
        phone: '110',
        description: 'Report theft or loss of documents',
        availability: '24/7'
      },
      {
        type: 'Embassy',
        name: 'Your Country\'s Embassy',
        phone: 'Varies by country',
        description: 'Passport replacement and emergency documents',
        availability: 'Business hours + emergency'
      },
      {
        type: 'Bank',
        name: 'Credit Card Company',
        phone: 'Check your card',
        description: 'Report stolen credit/debit cards',
        availability: '24/7'
      },
      {
        type: 'Insurance',
        name: 'Travel Insurance',
        phone: 'Check policy',
        description: 'Report loss for insurance claims',
        availability: '24/7'
      }
    ],
    procedures: [
      'Report to local police immediately',
      'Get police report number and copy',
      'Contact your embassy for passport replacement',
      'Cancel credit cards and bank accounts',
      'Contact travel insurance company',
      'Apply for emergency travel documents'
    ],
    tips: [
      'Keep copies of all important documents',
      'Store copies separately from originals',
      'Take photos of documents on phone',
      'Know your passport and visa numbers',
      'Have emergency contact information ready'
    ]
  },
  {
    id: 'natural-disasters',
    category: 'Natural Disasters',
    title: 'Natural Disaster Response',
    description: 'What to do during natural disasters',
    contacts: [
      {
        type: 'Emergency',
        name: 'General Emergency',
        phone: '110',
        description: 'General emergency services coordination',
        availability: '24/7'
      },
      {
        type: 'Weather',
        name: 'Weather Service',
        phone: '400-6000-121',
        description: 'Weather information and warnings',
        availability: '24/7'
      },
      {
        type: 'Embassy',
        name: 'Your Embassy',
        phone: 'Varies',
        description: 'Emergency assistance and evacuation',
        availability: 'Emergency hotline'
      }
    ],
    procedures: [
      'Stay calm and follow local authorities',
      'Monitor official news and weather reports',
      'Follow evacuation orders if given',
      'Stay in safe, sturdy buildings',
      'Contact embassy if situation is severe',
      'Keep emergency supplies ready'
    ],
    tips: [
      'Know evacuation routes from your location',
      'Keep emergency kit with water and food',
      'Stay informed through official channels',
      'Have backup power for communication',
      'Follow local emergency procedures'
    ]
  },
  {
    id: 'transportation-emergencies',
    category: 'Transportation',
    title: 'Transportation Emergencies',
    description: 'Help with transportation-related emergencies',
    contacts: [
      {
        type: 'Traffic Police',
        name: 'Traffic Emergency',
        phone: '122',
        description: 'Traffic accidents, road emergencies',
        availability: '24/7'
      },
      {
        type: 'Railway',
        name: 'Railway Service',
        phone: '12306',
        description: 'Train delays, cancellations, emergencies',
        availability: '24/7'
      },
      {
        type: 'Airport',
        name: 'Airport Information',
        phone: 'Varies by airport',
        description: 'Flight delays, cancellations, airport emergencies',
        availability: '24/7'
      },
      {
        type: 'Taxi',
        name: 'Taxi Companies',
        phone: 'Various',
        description: 'Taxi disputes, lost items in taxi',
        availability: 'Business hours'
      }
    ],
    procedures: [
      'Stay safe and move to secure location',
      'Call appropriate emergency number',
      'Document the incident with photos',
      'Exchange contact information',
      'Report to police if necessary',
      'Contact insurance company'
    ],
    tips: [
      'Keep transportation receipts',
      'Know your route and destination',
      'Have backup transportation plans',
      'Keep emergency cash available',
      'Know alternative routes'
    ]
  }
];

export const emergencyPhrases = [
  { english: 'Help!', chinese: '救命！', pinyin: 'jiùmìng!' },
  { english: 'Emergency!', chinese: '紧急情况！', pinyin: 'jǐnjí qíngkuàng!' },
  { english: 'Call the police!', chinese: '叫警察！', pinyin: 'jiào jǐngchá!' },
  { english: 'Call an ambulance!', chinese: '叫救护车！', pinyin: 'jiào jiùhùchē!' },
  { english: 'I need help', chinese: '我需要帮助', pinyin: 'wǒ xūyào bāngzhù' },
  { english: 'I\'m lost', chinese: '我迷路了', pinyin: 'wǒ mílù le' },
  { english: 'I don\'t speak Chinese', chinese: '我不会说中文', pinyin: 'wǒ bù huì shuō zhōngwén' },
  { english: 'Where is the hospital?', chinese: '医院在哪里？', pinyin: 'yīyuàn zài nǎlǐ?' },
  { english: 'I need a doctor', chinese: '我需要医生', pinyin: 'wǒ xūyào yīshēng' },
  { english: 'My passport is lost', chinese: '我的护照丢了', pinyin: 'wǒde hùzhào diū le' }
];

export const emergencyKit = [
  'Copies of passport and visa',
  'Emergency contact information',
  'Travel insurance documents',
  'Embassy contact information',
  'Basic first aid supplies',
  'Essential medications',
  'Emergency cash',
  'Phone charger and power bank',
  'Flashlight or phone flashlight',
  'Emergency food and water'
];

export const safetyTips = [
  'Always carry identification',
  'Keep emergency numbers in your phone',
  'Inform others of your travel plans',
  'Stay in well-lit, populated areas',
  'Trust your instincts about situations',
  'Keep valuables secure and hidden',
  'Know your hotel address in Chinese',
  'Have backup plans for transportation',
  'Register with your embassy',
  'Stay updated on local news and conditions'
]; 