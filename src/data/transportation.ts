import { TransportationMethod } from '@/types';

export const transportationMethods: TransportationMethod[] = [
  {
    id: 'high-speed-rail',
    name: 'High-Speed Rail (CRH/CRC)',
    type: 'train',
    description: 'China\'s extensive high-speed rail network connecting major cities',
    coverage: 'Over 40,000 km of track covering most major cities',
    price: '¥50-800 depending on distance and class',
    speed: '200-350 km/h',
    advantages: [
      'Fast and efficient',
      'Comfortable seating',
      'Punctual service',
      'City center to city center',
      'No weather delays',
      'Scenic views'
    ],
    disadvantages: [
      'Advance booking required for popular routes',
      'Luggage restrictions',
      'Limited to rail network coverage',
      'Can be more expensive than regular trains'
    ],
    tips: [
      'Book tickets in advance, especially during holidays',
      'Arrive at station 30 minutes early',
      'Bring passport for ticket purchase and boarding',
      'Download 12306 app for booking',
      'Consider business class for longer journeys'
    ],
    bookingInfo: [
      'Official website: 12306.cn',
      'Mobile app: 12306',
      'Third-party: Trip.com, Ctrip',
      'Station ticket offices',
      'Travel agencies'
    ]
  },
  {
    id: 'regular-train',
    name: 'Regular Trains',
    type: 'train',
    description: 'Traditional train service with various classes from hard seat to soft sleeper',
    coverage: 'Extensive network reaching smaller cities and rural areas',
    price: '¥20-300 depending on distance and class',
    speed: '80-160 km/h',
    advantages: [
      'Affordable pricing',
      'Wide coverage including remote areas',
      'Sleeper options for overnight travel',
      'Cultural experience',
      'No strict luggage limits'
    ],
    disadvantages: [
      'Slower than high-speed rail',
      'Can be crowded',
      'Less comfortable',
      'Limited English signage',
      'Smoking areas on some trains'
    ],
    tips: [
      'Choose soft sleeper or hard sleeper for overnight trips',
      'Bring your own food and drinks',
      'Keep valuables secure',
      'Learn basic Chinese numbers for platform information',
      'Consider hard seat for short journeys only'
    ],
    bookingInfo: [
      'Same booking system as high-speed rail',
      'Tickets available 30 days in advance',
      'Station ticket offices',
      'Online booking requires Chinese ID or passport'
    ]
  },
  {
    id: 'metro-subway',
    name: 'Metro/Subway',
    type: 'metro',
    description: 'Urban rail transit systems in major Chinese cities',
    coverage: 'Available in 50+ cities with extensive networks',
    price: '¥2-10 per ride depending on distance',
    speed: '35-80 km/h',
    advantages: [
      'Fast urban transportation',
      'Affordable fares',
      'Frequent service',
      'Avoid traffic congestion',
      'Clean and modern',
      'Extensive coverage in major cities'
    ],
    disadvantages: [
      'Crowded during rush hours',
      'Limited late-night service',
      'Language barrier',
      'Stairs and escalators may be crowded',
      'Not available in all cities'
    ],
    tips: [
      'Get a transit card for convenience',
      'Use mobile payment (WeChat/Alipay)',
      'Avoid rush hours (7-9 AM, 5-7 PM)',
      'Keep right on escalators',
      'Download city metro apps',
      'Stand aside for exiting passengers'
    ],
    bookingInfo: [
      'Transit cards available at stations',
      'Mobile payment widely accepted',
      'Day passes available in some cities',
      'Tourist cards with discounts'
    ]
  },
  {
    id: 'bus',
    name: 'Public Buses',
    type: 'bus',
    description: 'City buses and intercity bus services',
    coverage: 'Comprehensive urban and intercity networks',
    price: '¥1-5 for city buses, ¥10-200 for intercity',
    speed: '20-60 km/h depending on traffic',
    advantages: [
      'Very affordable',
      'Extensive route coverage',
      'Frequent service',
      'Good for short distances',
      'Air-conditioned buses'
    ],
    disadvantages: [
      'Traffic congestion delays',
      'Language barrier',
      'Can be crowded',
      'Limited luggage space',
      'Stops may be unclear'
    ],
    tips: [
      'Have exact change or use mobile payment',
      'Learn key destination names in Chinese',
      'Use bus route apps',
      'Keep belongings secure',
      'Give seats to elderly and pregnant women',
      'Signal your stop in advance'
    ],
    bookingInfo: [
      'Pay on board',
      'Transit cards accepted',
      'Mobile payment available',
      'No advance booking needed for city buses'
    ]
  },
  {
    id: 'taxi',
    name: 'Taxi',
    type: 'taxi',
    description: 'Traditional taxis and ride-hailing services',
    coverage: 'Available in all cities, 24/7 service',
    price: '¥10-50 for city trips, varies by distance and time',
    speed: '30-60 km/h depending on traffic',
    advantages: [
      'Door-to-door service',
      'Available 24/7',
      'Convenient for luggage',
      'No language barrier with ride-hailing apps',
      'Air-conditioned'
    ],
    disadvantages: [
      'More expensive than public transport',
      'Traffic congestion',
      'Language barrier with traditional taxis',
      'Meter manipulation (rare)',
      'Difficulty during peak hours'
    ],
    tips: [
      'Use Didi (Chinese Uber) for easier communication',
      'Have destination written in Chinese',
      'Check meter is running',
      'Keep receipt',
      'Use seatbelts',
      'Have small bills ready'
    ],
    bookingInfo: [
      'Hail on street',
      'Didi app for ride-hailing',
      'Hotel concierge assistance',
      'Taxi stands at airports/stations'
    ]
  },
  {
    id: 'flight',
    name: 'Domestic Flights',
    type: 'plane',
    description: 'Air travel between Chinese cities',
    coverage: 'Connects all major cities and many smaller ones',
    price: '¥200-2000 depending on route and booking time',
    speed: '800-900 km/h',
    advantages: [
      'Fastest for long distances',
      'Comfortable travel',
      'Good for time-sensitive trips',
      'Frequent flights on major routes',
      'Modern aircraft'
    ],
    disadvantages: [
      'Airport security and check-in time',
      'Weather delays',
      'More expensive than trains',
      'Airport locations often outside city centers',
      'Baggage restrictions'
    ],
    tips: [
      'Book in advance for better prices',
      'Arrive 2 hours early for domestic flights',
      'Bring passport for domestic flights',
      'Check baggage allowances',
      'Consider airport transfer costs',
      'Download airline apps for mobile boarding passes'
    ],
    bookingInfo: [
      'Online: Ctrip, Qunar, official airline websites',
      'Travel agencies',
      'Airport ticket counters',
      'Mobile apps'
    ]
  },
  {
    id: 'bike-sharing',
    name: 'Bike Sharing',
    type: 'other',
    description: 'Dockless bike sharing systems in Chinese cities',
    coverage: 'Available in most major cities',
    price: '¥1-3 per 30 minutes',
    speed: '15-20 km/h',
    advantages: [
      'Very affordable',
      'Convenient for short trips',
      'Good exercise',
      'No traffic congestion',
      'Environmentally friendly',
      'Easy to find and use'
    ],
    disadvantages: [
      'Weather dependent',
      'Limited to short distances',
      'Bike quality varies',
      'No protection from elements',
      'Bike availability issues'
    ],
    tips: [
      'Use WeChat/Alipay to unlock bikes',
      'Check bike condition before riding',
      'Wear helmet if available',
      'Follow traffic rules',
      'Park in designated areas',
      'Download bike-sharing apps'
    ],
    bookingInfo: [
      'Mobike app',
      'Ofo app (service discontinued)',
      'Hellobike app',
      'WeChat mini-programs',
      'Alipay integration'
    ]
  }
];

// 交通支付方式
export const paymentMethods = [
  {
    name: 'WeChat Pay',
    description: 'Mobile payment integrated with WeChat',
    coverage: 'Widely accepted across all transport modes',
    setup: 'Link Chinese bank account or international card',
    advantages: ['Convenient', 'Widely accepted', 'Fast transactions']
  },
  {
    name: 'Alipay',
    description: 'Mobile payment system by Alibaba',
    coverage: 'Widely accepted across all transport modes',
    setup: 'Link Chinese bank account or international card',
    advantages: ['Convenient', 'Widely accepted', 'Fast transactions']
  },
  {
    name: 'Transit Cards',
    description: 'City-specific rechargeable cards',
    coverage: 'Metro, bus, and some taxis in each city',
    setup: 'Purchase at metro stations or convenience stores',
    advantages: ['No phone battery dependency', 'Fast boarding', 'Sometimes transferable']
  },
  {
    name: 'Cash',
    description: 'Chinese Yuan (RMB)',
    coverage: 'Accepted everywhere, required for some services',
    setup: 'Exchange at banks or authorized dealers',
    advantages: ['Universal acceptance', 'No technical issues', 'Backup payment method']
  }
];

// 重要交通提示
export const transportationTips = [
  'Download translation apps for communication',
  'Keep a photo of your hotel address in Chinese',
  'Have emergency contact numbers saved',
  'Learn basic Chinese phrases for directions',
  'Always carry your passport for identity verification',
  'Check local traffic rules and regulations',
  'Be aware of rush hour times in major cities',
  'Keep receipts for taxi rides',
  'Use official transportation apps when available',
  'Stay alert and keep belongings secure'
]; 