// 基础数据类型定义
export interface BaseItem {
  id: string;
  title: string;
  description?: string;
  image?: string;
  slug?: string;
}

// 目的地类型
export interface Destination extends BaseItem {
  country: string;
  province?: string;
  highlights: string[];
  bestTime: string;
  duration: string;
  attractions: string[];
  transportation: TransportationInfo[];
  accommodation: AccommodationInfo[];
  food: FoodInfo[];
}

// 景点类型
export interface Attraction extends BaseItem {
  destination: string;
  category: string;
  rating: number;
  openTime: string;
  ticketPrice: string;
  address: string;
  transportation: string[];
  highlights: string[];
  tips: string[];
}

// 交通信息类型
export interface TransportationInfo {
  type: string;
  name: string;
  description: string;
  price?: string;
  duration?: string;
  tips?: string[];
}

// 住宿信息类型
export interface AccommodationInfo {
  type: string;
  name: string;
  priceRange: string;
  location: string;
  amenities: string[];
  booking?: string;
}

// 美食信息类型
export interface FoodInfo {
  name: string;
  slug?: string;
  description: string;
  price: string;
  location?: string;
  image?: string;
  category?: 'main-dish' | 'snack' | 'breakfast' | 'street-food' | 'hot-pot' | 'dessert';
}

// 签证信息类型
export interface VisaInfo {
  country: string;
  countryCode: string;
  policy: 'visa-free' | 'visa-on-arrival' | 'e-visa' | 'visa-required';
  duration: string;
  requirements: string[];
  notes?: string[];
}

// 签证政策类型
export interface VisaPolicy {
  id: string;
  title: string;
  description: string;
  countries: VisaInfo[];
  requirements: string[];
  applicationProcess: string[];
  documents: string[];
  tips: string[];
}

// 交通方式类型
export interface TransportationMethod {
  id: string;
  name: string;
  type: 'plane' | 'train' | 'metro' | 'bus' | 'taxi' | 'other';
  description: string;
  coverage: string;
  price: string;
  speed: string;
  advantages: string[];
  disadvantages: string[];
  tips: string[];
  bookingInfo: string[];
}

// 中国菜系类型
export interface ChineseCuisine {
  id: string;
  name: string;
  region: string;
  characteristics: string[];
  famousDishes: FamousDish[];
  diningEtiquette: string[];
  tips: string[];
}

// 著名菜品类型
export interface FamousDish {
  id: string;
  name: string;
  slug: string;
  description: string;
  ingredients: string[];
  taste: string;
  price: string;
  whereToFind: string[];
  tips: string[];
  destinations: string[]; // 关联的目的地城市
  category?: 'main-dish' | 'snack' | 'breakfast' | 'street-food' | 'hot-pot' | 'dessert'; // 菜品类别
}

// 实用信息类型
export interface PracticalInfo {
  id: string;
  category: string;
  title: string;
  description: string;
  items: PracticalItem[];
  tips: string[];
}

// 实用信息项目类型
export interface PracticalItem {
  id: string;
  title: string;
  description: string;
  details: string[];
  tips?: string[];
}

// 紧急信息类型
export interface EmergencyInfo {
  id: string;
  category: string;
  title: string;
  description: string;
  contacts: EmergencyContact[];
  procedures: string[];
  tips: string[];
}

// 应用推荐类型
export interface AppRecommendation {
  name: string;
  description: string;
  category: string;
  platform: string[];
  icon: string;
  downloadUrl?: string;
  features: string[];
}

// 常用短语类型
export interface Phrase {
  category: string;
  english: string;
  chinese: string;
  pinyin: string;
}

// 紧急联系信息类型
export interface EmergencyContact {
  type: string;
  name: string;
  phone: string;
  description: string;
  availability: string;
}

// 导航菜单类型
export interface NavItem {
  title: string;
  href: string;
  icon?: string;
  children?: NavItem[];
} 