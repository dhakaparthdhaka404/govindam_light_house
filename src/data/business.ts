export interface BusinessInfo {
  name: string;
  category: string;
  tagline: string;
  address: string;
  addressShort: string;
  phone: string;
  phoneRaw: string;
  whatsapp: string;
  whatsappRaw: string;
  hours: string;
  instagramUsername: string;
  instagramUrl: string;
  rating: string;
  mapsDirectionsUrl: string;
  mapsEmbedQuery: string;
}

export const BUSINESS_INFO: BusinessInfo = {
  name: "Govindam Light House",
  category: "Lighting Showroom, LED Lights & Home Decor",
  tagline: "Illuminate Your Home, Elevate Your Lifestyle.",
  address: "Guru Kripa Colony, Datel Tower, Hatoj - Kalwar - Jaipur Road, Hathoj, Jaipur, Rajasthan 302044, India.",
  addressShort: "Datel Tower, Kalwar Road, Hathoj, Jaipur, Rajasthan 302044",
  phone: "+91 98291 88634",
  phoneRaw: "919829188634",
  whatsapp: "+91 98291 88634",
  whatsappRaw: "919829188634",
  hours: "Monday to Sunday, 9:00 AM – 8:00 PM",
  instagramUsername: "@govindamlighthouse",
  instagramUrl: "https://www.instagram.com/govindamlighthouse/",
  rating: "5.0 / 5",
  mapsDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=Govindam+Light+House+Guru+Kripa+Colony+Datel+Tower+Hatoj+Kalwar+Road+Jaipur+Rajasthan+302044",
  mapsEmbedQuery: "Guru Kripa Colony, Datel Tower, Hatoj - Kalwar - Jaipur Road, Hathoj, Jaipur, Rajasthan 302044",
};

export interface LightingCategory {
  id: string;
  name: string;
  catalogCategory: string; // maps to category filter in products page
  description: string;
  image: string;
}

// 8 Primary Homepage Category Cards
export const HOME_CATEGORIES: LightingCategory[] = [
  {
    id: "luxury-chandeliers",
    name: "Luxury Chandeliers",
    catalogCategory: "Chandeliers",
    description: "Grand crystal and contemporary tiered masterpieces crafted to make a bold, opulent statement in living rooms and foyers.",
    image: "https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "modern-ceiling-lights",
    name: "Modern Ceiling Lights",
    catalogCategory: "Ceiling Lights",
    description: "Sleek flush-mount and semi-flush fixtures offering ambient illumination with minimalist geometric silhouettes.",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "led-panel-lights",
    name: "LED Panel Lights",
    catalogCategory: "LED Downlights",
    description: "Ultra-slim, energy-efficient recessed panels and architectural downlights engineered for smooth, glare-free light.",
    image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "decorative-hanging-lights",
    name: "Decorative Hanging Lights",
    catalogCategory: "Hanging Lamps",
    description: "Artisanal glass, metallic brass, and sculptural pendants that bring warm focal allure above dining tables and kitchen islands.",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "designer-wall-lights",
    name: "Designer Wall Lights",
    catalogCategory: "Wall Lights",
    description: "Sophisticated up-down sconces, bedside reading lights, and accent brass brackets designed to enrich interior walls.",
    image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "mirror-lights",
    name: "Mirror Lights",
    catalogCategory: "Mirror Lights",
    description: "High-CRI LED vanity bars and backlit mirror accents delivering crisp, shadow-free illumination for luxury dressing rooms and bathrooms.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "lighting-accessories",
    name: "Lighting Accessories",
    catalogCategory: "Lighting Accessories",
    description: "Premium drivers, dimmers, extension rods, brass hardware, and specialized fittings for seamless lighting installations.",
    image: "https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9?auto=format&fit=crop&w=800&q=80",
  },
];

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  featured?: boolean;
  specifications: {
    finish: string;
    lightType: string;
    application: string;
    customization: string;
  };
}

// 10 Catalogue Categories
export const CATALOG_CATEGORIES = [
  "All Products",
  "Chandeliers",
  "Ceiling Lights",
  "LED Downlights",
  "Hanging Lamps",
  "Outdoor Gate Lights",
  "Wall Lights",
  "Mirror Lights",
  "Decorative Lights",
  "LED Bulbs",
  "Lighting Accessories",
] as const;

export type CatalogCategoryType = typeof CATALOG_CATEGORIES[number];

export const PRODUCTS: ProductItem[] = [
  // Chandeliers
  {
    id: "royal-crystal-chandelier",
    name: "Royal Grand Crystal Chandelier",
    category: "Chandeliers",
    description: "Tiered K9 crystal droplets with electroplated gold-finish frame, creating a mesmerizing refraction of warm ambient light.",
    image: "https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?auto=format&fit=crop&w=800&q=80",
    featured: true,
    specifications: {
      finish: "Electroplated Champagne Gold",
      lightType: "Warm White LED Candle Sockets (E14)",
      application: "Living Room, High Ceilings & Foyers",
      customization: "Available in multiple tier configurations",
    },
  },
  {
    id: "modern-ring-led-chandelier",
    name: "Nordic Geometric Ring Chandelier",
    category: "Chandeliers",
    description: "Contemporary multi-tiered circular rings with brushed brass accents and diffused silicone LED optics for modern villas.",
    image: "https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9?auto=format&fit=crop&w=800&q=80",
    featured: false,
    specifications: {
      finish: "Brushed Brass & Matte Black",
      lightType: "Integrated Dimmable Tri-Color LED",
      application: "Dining Area & Modern Drawing Rooms",
      customization: "Adjustable hanging wire heights",
    },
  },
  // Ceiling Lights
  {
    id: "modern-led-ceiling-light",
    name: "Modern Starlight LED Ceiling Light",
    category: "Ceiling Lights",
    description: "Geometric floral-inspired flush mount ceiling fixture with uniform high-efficiency luminous output and remote control dimming.",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80",
    featured: true,
    specifications: {
      finish: "Powder Coated Matte White with Gold Trims",
      lightType: "3-Step CCT Switchable LED (3000K/4000K/6500K)",
      application: "Master Bedrooms & Family Lounges",
      customization: "Remote control & night-lamp mode included",
    },
  },
  {
    id: "celestial-flush-ceiling-luminaire",
    name: "Celestial Minimalist Ceiling Fixture",
    category: "Ceiling Lights",
    description: "Architectural slim disc luminaire with edge-lit LED diffuser that casts an ethereal halo effect across the ceiling.",
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=800&q=80",
    featured: false,
    specifications: {
      finish: "Anodized Champagne Gold Border",
      lightType: "High Lumens Warm White LED",
      application: "Bedrooms, Corridors & Study Rooms",
      customization: "Slim profile only 38mm thickness",
    },
  },
  // Hanging Lamps
  {
    id: "designer-hanging-lamps",
    name: "Designer Smoked Glass Hanging Lamps",
    category: "Hanging Lamps",
    description: "Hand-blown fluted smoked glass pendants with solid brass sockets, perfect for cluster arrangements or single island drops.",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
    featured: true,
    specifications: {
      finish: "Smoked Amber Glass & Brass Socket",
      lightType: "Vintage Filament Warm Edison Bulbs",
      application: "Dining Islands, Breakfast Counters & Cafes",
      customization: "Available in single, triple, and linear sets",
    },
  },
  {
    id: "sculptural-brass-pendant",
    name: "Sculptural Orb Pendant Light",
    category: "Hanging Lamps",
    description: "Opalescent frosted glass sphere cradled within an asymmetrical gold ring frame for an artistic decorative presence.",
    image: "https://images.unsplash.com/photo-1520697830682-bbb6e85e2b0b?auto=format&fit=crop&w=800&q=80",
    featured: false,
    specifications: {
      finish: "Mirror Polished Gold & Opal Matte Glass",
      lightType: "G9 LED Capsule Socket",
      application: "Staircase Voids & Corner Reading Nooks",
      customization: "Custom wire lengths upon showroom request",
    },
  },
  // Outdoor Gate Lights
  {
    id: "heritage-palace-gate-lantern",
    name: "Heritage Jodhpur Style Gate Lantern",
    category: "Outdoor Gate Lights",
    description: "Traditional Rajasthani architectural gate lantern with intricate lattice cutwork casting enchanting shadows on perimeter walls.",
    image: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=800&q=80",
    featured: false,
    specifications: {
      finish: "Antiqued Rustproof Brass Bronze",
      lightType: "Warm Golden LED 2700K",
      application: "Palatial Entrances & Heritage Bungalows",
      customization: "Multiple pillar base sizing options",
    },
  },
  // Wall Lights
  {
    id: "decorative-wall-lights",
    name: "Dual-Beam Architectural Wall Sconce",
    category: "Wall Lights",
    description: "Precision-milled metal sconce throwing sculpted upward and downward light cones to highlight wall textures and stone cladding.",
    image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=800&q=80",
    featured: true,
    specifications: {
      finish: "Brushed Champagne Gold & Jet Black",
      lightType: "COB High-Power Warm LED (3000K)",
      application: "Living Room Feature Walls, Hallways & Bedrooms",
      customization: "Available in indoor and IP65 exterior versions",
    },
  },
  {
    id: "crystal-feather-wall-lamp",
    name: "Luxe Crystal Feather Wall Bracket",
    category: "Wall Lights",
    description: "Exquisite carved crystal segments arranged in a graceful feather motif mounted upon a gilded brass backplate.",
    image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=800&q=80",
    featured: false,
    specifications: {
      finish: "Polished Gold Metal with Fluted Crystals",
      lightType: "Warm White LED Strip Reflector",
      application: "TV Units, Bedside Panels & Console Mirrors",
      customization: "Left & Right matched pairs available",
    },
  },
  // LED Downlights
  {
    id: "architectural-cobia-downlight",
    name: "Deep Anti-Glare COB Downlight",
    category: "LED Downlights",
    description: "Deep-set reflector downlight with high CRI > 90, eliminating glare while providing focused, museum-quality illumination.",
    image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?auto=format&fit=crop&w=800&q=80",
    featured: false,
    specifications: {
      finish: "Matte Black Inner Baffle, White Bezel",
      lightType: "COB LED with 24° / 36° beam angles",
      application: "False Ceilings, Artwork Highlighting & Showrooms",
      customization: "Wattages: 7W, 12W, 18W",
    },
  },
  // Mirror Lights
  {
    id: "luxe-brass-mirror-bar",
    name: "Linear Brass Vanity Mirror Light",
    category: "Mirror Lights",
    description: "Sleek horizontal tubular brass luminaire delivering even, soft light over vanity mirrors without harsh facial shadows.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    featured: true,
    specifications: {
      finish: "Electroplated Warm Gold with Acrylic Diffuser",
      lightType: "Natural White 4000K High CRI 95+",
      application: "Dressing Mirrors & Bathroom Vanities",
      customization: "Sizes: 450mm, 600mm, 900mm lengths",
    },
  },
  // Decorative Lights
  {
    id: "fancy-pendant-lights",
    name: "Constellation Multi-Light Pendant Cluster",
    category: "Decorative Lights",
    description: "Dynamic cascading cluster of multi-drop amber glass orbs suspended from a shared round gold ceiling canopy.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    featured: true,
    specifications: {
      finish: "Amber Glass & Rose Gold Plating",
      lightType: "Warm Glow LED Capsules",
      application: "Double Height Ceilings, Duplex Lobbies & Staircases",
      customization: "Custom drop lengths configured to your ceiling height",
    },
  },
  {
    id: "nordic-minimalist-linear-luminaire",
    name: "Nordic Minimalist Linear Luminaire",
    category: "Decorative Lights",
    description: "Understated horizontal bar fixture with suspended spotlight cones, blending contemporary Nordic design with functional brilliance.",
    image: "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&w=800&q=80",
    featured: false,
    specifications: {
      finish: "Matte Black Body with Champagne Gold Accents",
      lightType: "Directional LED Spots + Ambient Uplight",
      application: "Dining Tables, Conference Rooms & Kitchen Islands",
      customization: "1200mm and 1500mm lengths available",
    },
  },
  // LED Bulbs
  {
    id: "vintage-filament-led-bulbs",
    name: "Edison Vintage Filament LED Bulbs",
    category: "LED Bulbs",
    description: "Curved golden filament spiral bulbs offering antique amber warmth with modern 4W low power consumption.",
    image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=800&q=80",
    featured: false,
    specifications: {
      finish: "Golden Tint Glass Shell",
      lightType: "2200K Super Warm Golden Amber",
      application: "Exposed Sockets, Chandeliers & Hanging Fixtures",
      customization: "ST64, G95, and Globe shapes in stock",
    },
  },
  // Lighting Accessories
  {
    id: "premium-brass-fittings-drivers",
    name: "Architectural Drivers & Brass Suspension Kit",
    category: "Lighting Accessories",
    description: "Heavy-duty brass ceiling canopies, flicker-free constant current LED drivers, and precision wire tension systems.",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=800&q=80",
    featured: false,
    specifications: {
      finish: "Solid Brass & Heat-Dissipating Aluminum",
      lightType: "Surge Protected 4kV Constant Voltage & Current Drivers",
      application: "Commercial & Residential False Ceilings",
      customization: "Compatible with leading smart automation systems",
    },
  },
];

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    id: "variety",
    title: "Wide Variety of Lighting Designs",
    description: "From regal crystal chandeliers to understated Nordic minimalism, explore hundreds of curated designs in person.",
    iconName: "Sparkles",
  },
  {
    id: "collections",
    title: "Modern and Stylish Collections",
    description: "Constantly refreshed inventory aligning with current international architectural and interior design trends.",
    iconName: "Palette",
  },
  {
    id: "solutions",
    title: "Indoor & Outdoor Lighting Solutions",
    description: "Complete illumination for your entire property—living rooms, bedrooms, exterior gates, gardens, and facades.",
    iconName: "Home",
  },
  {
    id: "pricing",
    title: "Affordable Pricing",
    description: "Direct showroom value without retail middlemen markups, delivering uncompromising luxury at honest rates.",
    iconName: "BadgeCheck",
  },
  {
    id: "service",
    title: "Customer-Friendly Service",
    description: "Knowledgeable lighting consultants ready to assist with sizing calculations, light color warmth, and placement advice.",
    iconName: "HeartHandshake",
  },
  {
    id: "location",
    title: "Convenient Showroom Location",
    description: "Easily accessible on Kalwar Road at Datel Tower, Hathoj, Jaipur, with ample customer parking and live demo displays.",
    iconName: "MapPin",
  },
];

export interface InstagramPost {
  id: string;
  image: string;
  caption: string;
  likesHint?: string;
}

export const INSTAGRAM_GALLERY: InstagramPost[] = [
  {
    id: "ig-1",
    image: "https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?auto=format&fit=crop&w=800&q=80",
    caption: "Grand multi-tiered crystal chandelier illuminated in a Jaipur luxury villa project.",
  },
  {
    id: "ig-2",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
    caption: "Artisan smoked glass pendants giving this dining island a warm, cozy evening glow.",
  },
  {
    id: "ig-3",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80",
    caption: "Modern geometric ceiling light installation for living room false ceiling.",
  },
  {
    id: "ig-4",
    image: "https://images.unsplash.com/photo-1526887593587-a307ea5d46b4?auto=format&fit=crop&w=800&q=80",
    caption: "Dual-beam architectural up-down sconces highlighting natural wall stone textures.",
  },
  {
    id: "ig-5",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    caption: "Stately outdoor gate pillar lamps welcoming guests with warm amber illumination.",
  },
  {
    id: "ig-6",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    caption: "Cascading amber droplet chandelier displayed in our Hathoj showroom.",
  },
];
