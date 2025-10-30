/**
 * Official China Visa Information
 * Data source: https://cs.mfa.gov.cn/wgrlh/lhqz/
 * Last updated: December 2024
 */

export interface OfficialVisaType {
  code: string;
  name: string;
  description: string;
  duration?: string;
  category: 'work' | 'study' | 'tourism' | 'business' | 'family' | 'transit' | 'other';
}

export interface VisaFreePolicy {
  type: 'bilateral' | 'unilateral' | 'transit';
  description: string;
  duration?: string;
  conditions: string[];
  countries?: string[];
}

export interface VisaRequirement {
  category: string;
  items: string[];
}

export interface VisaImportantNote {
  title: string;
  content: string;
  severity: 'info' | 'warning' | 'critical';
}

// Official visa types according to China Consular Service Network
export const officialVisaTypes: OfficialVisaType[] = [
  {
    code: 'C',
    name: 'Crew Visa',
    description: 'For international train crew members, international aircraft crew members, international navigation ship crew and their accompanying family members, and international road transport drivers',
    category: 'work'
  },
  {
    code: 'D',
    name: 'Residence Visa',
    description: 'For persons entering China for permanent residence',
    category: 'other'
  },
  {
    code: 'F',
    name: 'Exchange Visa',
    description: 'For persons entering China for exchanges, visits, inspections and other activities',
    category: 'business'
  },
  {
    code: 'G',
    name: 'Transit Visa',
    description: 'For persons transiting through China',
    category: 'transit'
  },
  {
    code: 'J1',
    name: 'Resident Journalist Visa',
    description: 'For foreign resident journalists (staying over 180 days) of foreign news agencies stationed in China',
    duration: 'Over 180 days',
    category: 'work'
  },
  {
    code: 'J2',
    name: 'Short-term Journalist Visa',
    description: 'For foreign journalists entering China for short-term (not exceeding 180 days) news reporting',
    duration: 'Not exceeding 180 days',
    category: 'work'
  },
  {
    code: 'L',
    name: 'Tourist Visa',
    description: 'For persons entering China for tourism',
    category: 'tourism'
  },
  {
    code: 'M',
    name: 'Business Visa',
    description: 'For persons entering China for commercial trade activities',
    category: 'business'
  },
  {
    code: 'Q1',
    name: 'Family Reunion Visa (Long-term)',
    description: 'For family members of Chinese citizens or foreign nationals with Chinese permanent residence applying for residence in China for family reunion, and persons applying for residence for foster care reasons',
    category: 'family'
  },
  {
    code: 'Q2',
    name: 'Family Visit Visa (Short-term)',
    description: 'For relatives of Chinese citizens residing in China or foreign nationals with Chinese permanent residence, entering for short-term (not exceeding 180 days) family visits',
    duration: 'Not exceeding 180 days',
    category: 'family'
  },
  {
    code: 'R',
    name: 'Talent Visa',
    description: 'For foreign high-level talents and urgently needed specialists required by the state',
    category: 'work'
  },
  {
    code: 'S1',
    name: 'Private Affairs Visa (Long-term)',
    description: 'For spouses, parents, children under 18, and spouses\' parents of foreigners residing in China for work or study, entering for long-term (over 180 days) visits, and persons needing to stay in China for other private affairs',
    duration: 'Over 180 days',
    category: 'family'
  },
  {
    code: 'S2',
    name: 'Private Affairs Visa (Short-term)',
    description: 'For family members of foreigners staying or residing in China for work or study, entering for short-term (not exceeding 180 days) visits, and persons needing to stay in China for other private affairs',
    duration: 'Not exceeding 180 days',
    category: 'family'
  },
  {
    code: 'X1',
    name: 'Student Visa (Long-term)',
    description: 'For persons studying in China for long-term (over 180 days)',
    duration: 'Over 180 days',
    category: 'study'
  },
  {
    code: 'X2',
    name: 'Student Visa (Short-term)',
    description: 'For persons studying in China for short-term (not exceeding 180 days)',
    duration: 'Not exceeding 180 days',
    category: 'study'
  },
  {
    code: 'Z',
    name: 'Work Visa',
    description: 'For persons working in China',
    category: 'work'
  }
];

// Visa-free policy information
export const visaFreePolicies: VisaFreePolicy[] = [
  {
    type: 'bilateral',
    description: 'Bilateral Agreement Visa-Free',
    conditions: [
      'Based on bilateral agreements or arrangements signed between China and relevant countries',
      'Citizens of certain countries meeting specific conditions can enter China without a visa',
      'Please refer to the China-Foreign Mutual Visa Exemption Agreement List for details'
    ]
  },
  {
    type: 'unilateral',
    description: 'Unilateral Visa-Free Policy',
    duration: 'Not exceeding 30 days',
    conditions: [
      'Citizens of certain countries holding ordinary passports for business, tourism, family visits, exchanges, or transit',
      'Stay period not exceeding 30 days',
      'Can enter China without a visa'
    ]
  },
  {
    type: 'transit',
    description: 'Transit Visa-Free',
    conditions: [
      '24-hour transit visa-free',
      '72-hour transit visa-free',
      '144-hour transit visa-free',
      'Please refer to China National Immigration Administration website for details'
    ]
  }
];

// Visa application basic requirements
export const visaRequirements: VisaRequirement[] = [
  {
    category: 'Basic Documents',
    items: [
      'Valid passport original and photocopy',
      'Visa application form (fully completed and signed)',
      'Recent passport-sized color photo',
      'Relevant supporting documents'
    ]
  },
  {
    category: 'Tourist Visa (L) Special Requirements',
    items: [
      'Round-trip flight itinerary',
      'Hotel reservation confirmation',
      'Travel itinerary',
      'Proof of financial capability'
    ]
  },
  {
    category: 'Business Visa (M) Special Requirements',
    items: [
      'Invitation letter from Chinese enterprise',
      'Business license copy of the enterprise',
      'Dispatch letter from applicant\'s company',
      'Proof of financial capability'
    ]
  },
  {
    category: 'Work Visa (Z) Special Requirements',
    items: [
      'Foreign Worker Employment Permit Notice',
      'Invitation letter from Chinese employer',
      'Applicant\'s educational credentials',
      'Criminal background check certificate'
    ]
  }
];

// Important notes
export const importantNotes: VisaImportantNote[] = [
  {
    title: 'Visa Validity Check',
    content: 'Applicants should check visa validity and sufficient entry times before coming to China. Those with expired visas or insufficient entry times should reapply for visas.',
    severity: 'critical'
  },
  {
    title: 'Legal Compliance',
    content: 'Foreigners in China must comply with the laws and regulations of the People\'s Republic of China.',
    severity: 'critical'
  },
  {
    title: 'Activity Restrictions',
    content: 'Foreigners entering China must not engage in activities unrelated to the stated purpose when applying for their visa.',
    severity: 'warning'
  },
  {
    title: 'Stay Period Limitations',
    content: 'Foreign citizens must not overstay in China. Foreign citizens in China should pay attention to their passport validity and visa stay period. If extension is needed, they must apply to local public security organs 7 days before the stay period expires.',
    severity: 'critical'
  },
  {
    title: 'Restricted Areas',
    content: 'Without approval, foreigners are not allowed to enter areas restricted to foreigners.',
    severity: 'warning'
  },
  {
    title: 'Item Declaration Requirements',
    content: 'Foreigners bringing animals, plants, currency and other items into China must comply with relevant Chinese laws and regulations of health quarantine, animal and plant quarantine, customs, and financial regulatory departments.',
    severity: 'info'
  }
];

// Situations that may lead to entry refusal
export const refusalReasons: string[] = [
  'Coming to China without obtaining a visa in advance (except those exempted from visa requirements)',
  'Coming to China with expired or invalid visas',
  'Overstaying in China',
  'Passport expiration during stay in China (regardless of whether visa stay period is valid)'
];

// Contact information and official resources
export const officialResources = {
  website: 'https://cs.mfa.gov.cn/wgrlh/lhqz/',
  department: 'Ministry of Foreign Affairs of the People\'s Republic of China',
  lastUpdated: 'December 2024',
  additionalInfo: {
    visaFreeAgreements: 'http://cs.mfa.gov.cn/zlbg/bgzl/lhqz/',
    transitVisaFree: 'http://cs.mfa.gov.cn/gyls/lsgz/fwxx/202411/t20241130_11535783.shtml',
    immigrationBureau: 'China National Immigration Administration website'
  }
};

// Export consolidated data
export const officialVisaData = {
  visaTypes: officialVisaTypes,
  visaFreePolicies,
  requirements: visaRequirements,
  importantNotes,
  refusalReasons,
  resources: officialResources
};

export default officialVisaData; 