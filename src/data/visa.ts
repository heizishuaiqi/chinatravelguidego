import { VisaPolicy, VisaInfo } from '@/types';

// 签证政策数据
export const visaPolicies: VisaPolicy[] = [
  {
    id: 'visa-free',
    title: 'Visa-Free Entry',
    description: 'Citizens of these countries can enter China without a visa for short stays',
    countries: [
      {
        country: 'Singapore',
        countryCode: 'SG',
        policy: 'visa-free',
        duration: '15 days',
        requirements: ['Valid passport with at least 6 months validity', 'Return or onward ticket', 'Sufficient funds'],
        notes: ['Must enter through designated ports', 'Cannot be extended']
      },
      {
        country: 'Brunei',
        countryCode: 'BN',
        policy: 'visa-free',
        duration: '15 days',
        requirements: ['Valid passport with at least 6 months validity', 'Return or onward ticket', 'Sufficient funds'],
        notes: ['Must enter through designated ports', 'Cannot be extended']
      },
      {
        country: 'Japan',
        countryCode: 'JP',
        policy: 'visa-free',
        duration: '15 days',
        requirements: ['Valid passport with at least 6 months validity', 'Return or onward ticket', 'Sufficient funds'],
        notes: ['Must enter through designated ports', 'Cannot be extended']
      },
      {
        country: 'San Marino',
        countryCode: 'SM',
        policy: 'visa-free',
        duration: '90 days',
        requirements: ['Valid passport with at least 6 months validity', 'Return or onward ticket', 'Sufficient funds'],
        notes: ['Must hold ordinary passport', 'Cannot be extended']
      }
    ],
    requirements: [
      'Valid passport with at least 6 months remaining validity',
      'Return or onward ticket',
      'Proof of sufficient funds for the stay',
      'No criminal record',
      'Good health condition'
    ],
    applicationProcess: [
      'No application required',
      'Present documents at port of entry',
      'Immigration officer will stamp passport',
      'Duration cannot be extended'
    ],
    documents: [
      'Valid passport',
      'Return or onward ticket',
      'Hotel booking confirmation',
      'Proof of sufficient funds'
    ],
    tips: [
      'Check entry requirements may change',
      'Ensure passport has blank pages for stamps',
      'Keep all documents organized',
      'Be prepared for questioning at immigration'
    ]
  },
  {
    id: 'transit-visa-free',
    title: '72/144-Hour Transit Visa-Free',
    description: 'Transit passengers can stay without visa in select cities',
    countries: [
      {
        country: 'United States',
        countryCode: 'US',
        policy: 'visa-free',
        duration: '144 hours (Beijing/Shanghai/others), 72 hours (select cities)',
        requirements: ['Valid passport', 'Transit ticket to third country', 'Valid visa for destination'],
        notes: ['Must depart from different city than arrival', 'Cannot leave designated area']
      },
      {
        country: 'United Kingdom',
        countryCode: 'GB',
        policy: 'visa-free',
        duration: '144 hours (Beijing/Shanghai/others), 72 hours (select cities)',
        requirements: ['Valid passport', 'Transit ticket to third country', 'Valid visa for destination'],
        notes: ['Must depart from different city than arrival', 'Cannot leave designated area']
      },
      {
        country: 'Canada',
        countryCode: 'CA',
        policy: 'visa-free',
        duration: '144 hours (Beijing/Shanghai/others), 72 hours (select cities)',
        requirements: ['Valid passport', 'Transit ticket to third country', 'Valid visa for destination'],
        notes: ['Must depart from different city than arrival', 'Cannot leave designated area']
      },
      {
        country: 'Australia',
        countryCode: 'AU',
        policy: 'visa-free',
        duration: '144 hours (Beijing/Shanghai/others), 72 hours (select cities)',
        requirements: ['Valid passport', 'Transit ticket to third country', 'Valid visa for destination'],
        notes: ['Must depart from different city than arrival', 'Cannot leave designated area']
      },
      {
        country: 'Germany',
        countryCode: 'DE',
        policy: 'visa-free',
        duration: '144 hours (Beijing/Shanghai/others), 72 hours (select cities)',
        requirements: ['Valid passport', 'Transit ticket to third country', 'Valid visa for destination'],
        notes: ['Must depart from different city than arrival', 'Cannot leave designated area']
      },
      {
        country: 'France',
        countryCode: 'FR',
        policy: 'visa-free',
        duration: '144 hours (Beijing/Shanghai/others), 72 hours (select cities)',
        requirements: ['Valid passport', 'Transit ticket to third country', 'Valid visa for destination'],
        notes: ['Must depart from different city than arrival', 'Cannot leave designated area']
      }
    ],
    requirements: [
      'Valid passport with at least 6 months validity',
      'Confirmed onward ticket to third country/region',
      'Valid visa or residence permit for destination',
      'Transit through eligible airports',
      'Stay within designated administrative areas'
    ],
    applicationProcess: [
      'No advance application required',
      'Apply at port of entry',
      'Present required documents',
      'Immigration officer will issue transit permit',
      'Must depart within allowed timeframe'
    ],
    documents: [
      'Valid passport',
      'Confirmed onward ticket',
      'Valid visa for destination country',
      'Hotel booking (if staying overnight)',
      'Proof of sufficient funds'
    ],
    tips: [
      'Check which cities are included in your transit route',
      'Ensure you have proper documentation for final destination',
      'Book hotels in advance in eligible areas',
      'Keep all travel documents with you',
      'Check current policy updates before travel'
    ]
  },
  {
    id: 'tourist-visa',
    title: 'Tourist Visa (L Visa)',
    description: 'Standard tourist visa for most countries',
    countries: [
      {
        country: 'United States',
        countryCode: 'US',
        policy: 'visa-required',
        duration: '30 days (single entry), 60-90 days (multiple entry)',
        requirements: ['Valid passport', 'Completed application form', 'Photo', 'Itinerary', 'Hotel bookings'],
        notes: ['Processing time: 4-7 business days', 'Can be extended once for 30 days']
      },
      {
        country: 'United Kingdom',
        countryCode: 'GB',
        policy: 'visa-required',
        duration: '30 days (single entry), 60-90 days (multiple entry)',
        requirements: ['Valid passport', 'Completed application form', 'Photo', 'Itinerary', 'Hotel bookings'],
        notes: ['Processing time: 4-7 business days', 'Can be extended once for 30 days']
      },
      {
        country: 'Canada',
        countryCode: 'CA',
        policy: 'visa-required',
        duration: '30 days (single entry), 60-90 days (multiple entry)',
        requirements: ['Valid passport', 'Completed application form', 'Photo', 'Itinerary', 'Hotel bookings'],
        notes: ['Processing time: 4-7 business days', 'Can be extended once for 30 days']
      },
      {
        country: 'Australia',
        countryCode: 'AU',
        policy: 'visa-required',
        duration: '30 days (single entry), 60-90 days (multiple entry)',
        requirements: ['Valid passport', 'Completed application form', 'Photo', 'Itinerary', 'Hotel bookings'],
        notes: ['Processing time: 4-7 business days', 'Can be extended once for 30 days']
      },
      {
        country: 'Germany',
        countryCode: 'DE',
        policy: 'visa-required',
        duration: '30 days (single entry), 60-90 days (multiple entry)',
        requirements: ['Valid passport', 'Completed application form', 'Photo', 'Itinerary', 'Hotel bookings'],
        notes: ['Processing time: 4-7 business days', 'Can be extended once for 30 days']
      },
      {
        country: 'France',
        countryCode: 'FR',
        policy: 'visa-required',
        duration: '30 days (single entry), 60-90 days (multiple entry)',
        requirements: ['Valid passport', 'Completed application form', 'Photo', 'Itinerary', 'Hotel bookings'],
        notes: ['Processing time: 4-7 business days', 'Can be extended once for 30 days']
      }
    ],
    requirements: [
      'Valid passport with at least 6 months validity and 2 blank pages',
      'Completed visa application form',
      'Recent passport-sized photo',
      'Round-trip air ticket booking',
      'Hotel bookings or invitation letter',
      'Proof of sufficient funds',
      'Travel insurance (recommended)'
    ],
    applicationProcess: [
      'Complete online application form',
      'Schedule appointment at Chinese consulate',
      'Submit documents and pay fees',
      'Attend appointment (if required)',
      'Collect passport with visa'
    ],
    documents: [
      'Original passport',
      'Visa application form',
      'Passport photo',
      'Flight itinerary',
      'Hotel reservations',
      'Bank statements',
      'Travel insurance certificate'
    ],
    tips: [
      'Apply at least 1-2 weeks before travel',
      'Double-check all information on application',
      'Keep copies of all documents',
      'Check consulate-specific requirements',
      'Consider applying for multiple-entry visa for frequent travel'
    ]
  }
];

// 签证费用信息
export const visaFees = {
  'US': { single: 140, double: 140, multiple: 140, express: 210 },
  'UK': { single: 30, double: 45, multiple: 60, express: 90 },
  'CA': { single: 100, double: 150, multiple: 200, express: 300 },
  'AU': { single: 100, double: 150, multiple: 200, express: 300 },
  'DE': { single: 30, double: 45, multiple: 60, express: 90 },
  'FR': { single: 30, double: 45, multiple: 60, express: 90 }
};

// 签证处理时间
export const processingTimes = {
  regular: '4-7 business days',
  express: '2-3 business days',
  rush: '1 business day (limited availability)'
};

// 重要提醒
export const importantNotes = [
  'Visa requirements can change frequently, always check with the Chinese consulate',
  'Processing times may vary during peak seasons',
  'Some consulates require appointments, book in advance',
  'Keep your passport and visa safe during travel',
  'Register with local police within 24 hours of arrival (hotels usually handle this)'
]; 