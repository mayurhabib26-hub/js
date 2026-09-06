import { Project, Service, Testimonial, MaterialItem, GalleryItem } from '../types';

export const SERVICES: Service[] = [
  {
    id: 'residential',
    number: '01',
    slug: 'residential-interior-design',
    title: 'Residential Interior Design',
    shortDesc: 'Complete interior concepts for homes designed around personality, lifestyle and functionality.',
    fullDesc: 'Our flagship residential design service crafts turnkey living sanctuaries across Canada. We harmonize architectural volume, natural light, tailored millwork, and bespoke furnishings to reflect your unique personal story.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
    deliverables: [
      'Comprehensive 3D Spatial Visualizations & Renders',
      'Architectural Millwork & Cabinetry Drawings',
      'Material, Finish & Lighting Schedules',
      'Custom Furniture Procurement & White-Glove Installation',
      'On-site Contractor Coordination & Styling'
    ],
    timeline: '8 – 16 Weeks',
    idealFor: 'Custom home builds, luxury condominiums, and full-home refurbishments.'
  },
  {
    id: 'commercial',
    number: '02',
    slug: 'commercial-interior-design',
    title: 'Commercial Interior Design',
    shortDesc: 'Strategic interiors for offices, retail spaces, studios and hospitality environments.',
    fullDesc: 'We design brand-defining commercial and executive environments that elevate workflow efficiency, client perception, and employee wellness through calculated acoustic design and architectural presence.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85',
    deliverables: [
      'Workplace Strategy & Flow Optimization',
      'Brand Identity Spatial Integration',
      'Commercial Grade Finishes & Acoustic Engineering',
      'Lighting Layouts for Productivity & Drama',
      'Permit Documentation & Construction Oversight'
    ],
    timeline: '10 – 20 Weeks',
    idealFor: 'Executive headquarters, flagship boutiques, luxury wellness clinics, and boutique hospitality.'
  },
  {
    id: 'kitchen',
    number: '03',
    slug: 'kitchen-design',
    title: 'Kitchen Design',
    shortDesc: 'Modern kitchens combining intelligent layouts, premium finishes and functional storage.',
    fullDesc: 'The culinary heart of the modern Canadian home. We engineer culinary workshops with concealed appliance banks, slab marble waterfall islands, tactile walnut cabinetry, and integrated ambient lighting.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=85',
    deliverables: [
      'Ergonomic Work Triangle Optimization',
      'Custom Cabinetry Engineering with Concealed Hardware',
      'Monolithic Stone Slab Selection & Sourcing',
      'Integrated High-Performance Appliance Coordination',
      'Architectural Under-Cabinet & Cove Lighting'
    ],
    timeline: '6 – 12 Weeks',
    idealFor: 'Homeowners seeking a Michelin-grade, entertaining-ready culinary showcase.'
  },
  {
    id: 'bathroom',
    number: '04',
    slug: 'bathroom-design',
    title: 'Bathroom Design',
    shortDesc: 'Elegant bathrooms designed as calm, luxurious personal environments.',
    fullDesc: 'Transform everyday routines into private spa rituals. We weave heated slab limestone floors, walk-in steam showers, fluted glass partitions, and brushed brass architectural tapware into serene sanctuaries.',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1600&q=85',
    deliverables: [
      'Spa Layouts with Freestanding Soaking Tubs',
      'Curbless Walk-in Rain Shower Details',
      'Custom Floating Vanities with Integrated Basins',
      'Waterproofing & Niche Detailing Specs',
      'Illuminated Architectural Mirrors & Dimmable Sconces'
    ],
    timeline: '5 – 10 Weeks',
    idealFor: 'Primary ensuites, guest powder rooms, and wellness wellness suites.'
  },
  {
    id: 'renovation',
    number: '05',
    slug: 'renovation-remodeling',
    title: 'Renovation & Remodeling',
    shortDesc: 'Transformation of existing properties through thoughtful planning and contemporary design.',
    fullDesc: 'Breathe contemporary luxury into heritage estates and outdated layouts. We reimagine load-bearing divisions, maximize ceiling heights, and modernize structural infrastructure with minimal friction.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85',
    deliverables: [
      'Structural Feasibility & Wall Removal Studies',
      'Historic Character Preservation & Modern Contrast',
      'Mechanical, Electrical & Plumbing (MEP) Harmonization',
      'Budget Phasing & Contractor Tender Management',
      'Complete Transformation Project Direction'
    ],
    timeline: '12 – 24 Weeks',
    idealFor: 'Mid-century homes, Victorian rowhouses, and luxury penthouse gut renovations.'
  },
  {
    id: 'space-planning',
    number: '06',
    slug: 'space-planning',
    title: 'Space Planning',
    shortDesc: 'Functional layouts maximizing circulation, comfort and usability.',
    fullDesc: 'Precise dimensional analysis that unlocks overlooked square footage. We choreograph natural sightlines, intuitive circulation pathways, and multi-functional zones tailored to contemporary Canadian living.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
    deliverables: [
      'Scale 2D Floor Plans & Furniture Space Optimization',
      'Circulation & Egress Flow Analysis',
      'Sightline Alignment & Focal Point Definition',
      'Storage Volume Optimization Calculations'
    ],
    timeline: '3 – 6 Weeks',
    idealFor: 'New floor plan assessments, pre-construction condo purchases, and complex footprints.'
  },
  {
    id: 'furniture-styling',
    number: '07',
    slug: 'furniture-styling',
    title: 'Furniture & Styling',
    shortDesc: 'Furniture, lighting, art and accessories curated into one cohesive visual identity.',
    fullDesc: 'The final layer of tactile refinement. We curate bespoke European upholstery, artisan sculptural lighting, gallery-grade Canadian fine art, and handcrafted objects to create an elevated, lived-in aesthetic.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85',
    deliverables: [
      'Curated Furniture Concept Boards & Fabric Swatches',
      'Trade-Only Access to Milan & Scandinavian Design Houses',
      'Bespoke Rug & Drapery Specifications',
      'Fine Art Curation & Placement Consulting',
      'White-Glove Delivery, Assembly & Accessorizing Day'
    ],
    timeline: '4 – 8 Weeks',
    idealFor: 'Turnkey interior dressing, existing rooms in need of elevating, and styling refreshes.'
  },
  {
    id: 'custom-solutions',
    number: '08',
    slug: 'custom-interior-solutions',
    title: 'Custom Interior Solutions',
    shortDesc: 'Bespoke design solutions tailored to unique spaces and requirements.',
    fullDesc: 'From climate-controlled glass wine cellars and hidden panic rooms to custom acoustic listening lounges and boutique dressing suites, we engineer one-of-a-kind interior architectural statements.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    deliverables: [
      'Engineered Joinery & Millwork Shop Drawings',
      'Climate Control & Specialized Environmental Specs',
      'Rare Material Sourcing (Bronze, Leather, Onyx)',
      'Direct Artisan & Metalworker Collaboration',
      'Commissioned Focal Point Architecture'
    ],
    timeline: '6 – 14 Weeks',
    idealFor: 'Connoisseurs desiring bespoke architectural amenities that cannot be bought off the shelf.'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'yorkville-residence',
    slug: 'modern-residence-toronto',
    title: 'Modern Residence',
    subtitle: 'A sanctuary of walnut, fluted limestone, and quiet light.',
    location: 'Toronto, Ontario',
    province: 'Ontario',
    year: '2025',
    category: 'Residential',
    area: '5,800 sq ft',
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85'
    ],
    overview: 'Located in Toronto’s prestigious Yorkville neighborhood, this single-family residence balances rigorous architectural symmetry with organic warmth. The client sought a tranquil refuge from the urban bustle that could effortlessly transition from family intimacy to high-profile entertaining.',
    challenge: 'The narrow urban footprint required bringing natural daylight deep into the ground floor while maintaining utmost privacy from adjacent historic brownstones.',
    approach: 'We inserted a triple-height skylit atrium encased in vertical walnut louvers and light-toned travertine. Custom low-profile Italian furnishings ground each space, while micro-cement flooring creates uninterrupted flow between indoor living areas and the private courtyard.',
    materialsUsed: ['Bookmatched Roman Travertine', 'American Black Walnut', 'Brushed Bronze Hardware', 'Textured Bouclé & Linen'],
    beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85',
    clientReview: {
      quote: 'JS Alpha Interiors achieved what seemed mathematically impossible: a home that feels monumental yet deeply inviting and warm.',
      author: 'David & Catherine M.',
      role: 'Homeowners, Toronto'
    }
  },
  {
    id: 'vancouver-villa',
    slug: 'minimalist-villa-vancouver',
    title: 'Minimalist Villa',
    subtitle: 'Where Pacific Northwest cedar meets Japanese wabi-sabi precision.',
    location: 'Vancouver, British Columbia',
    province: 'British Columbia',
    year: '2024',
    category: 'Residential',
    area: '6,400 sq ft',
    heroImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85'
    ],
    overview: 'Perched along the rocky coastline of West Vancouver, this custom villa is a masterclass in elemental restraint. Large glass curtain walls dissolve the boundaries between the interior living pavilions and the dramatic Pacific Ocean backdrop.',
    challenge: 'Reflecting the moody coastal climate without creating a cold or sterile ambiance during overcast winter months.',
    approach: 'We utilized radiant heated sandblasted limestone floors, black cedar ceiling slats, and an elongated double-sided ethanol fireplace framed in raw steel. Custom low-slung upholstery in charcoal and oatmeal wool absorbs sound and wraps occupants in tactile comfort.',
    materialsUsed: ['Western Red Cedar', 'Sandblasted Vancouver Island Marble', 'Darkened Hot-Rolled Steel', 'Belgian Linen Upholstery'],
    clientReview: {
      quote: 'The way the light shifts through the louvers throughout the day is pure poetry. JS Alpha understands the spirit of Canadian architecture.',
      author: 'Dr. Alistair Ross',
      role: 'Private Collector, Vancouver'
    }
  },
  {
    id: 'penthouse-toronto',
    slug: 'luxury-penthouse-toronto',
    title: 'Luxury Penthouse',
    subtitle: 'Dramatic skyline views framed by monolithic marble and brass.',
    location: 'Toronto, Ontario',
    province: 'Ontario',
    year: '2025',
    category: 'Interior Renovation',
    area: '4,200 sq ft',
    heroImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1600&q=85'
    ],
    overview: 'A complete gut renovation of a two-storey penthouse overlooking Lake Ontario. The layout was re-engineered from a segmented series of rooms into a grand, open-concept gallery space suitable for an extensive art collection.',
    challenge: 'Strict condo board engineering regulations and building crane logistics for large monolithic Calacatta Viola slabs.',
    approach: 'Custom modular engineering allowed seamless jointless appearance for the 14-foot kitchen island. Integrated reveal baseboards and concealed frameless doors create pure monolithic surfaces.',
    materialsUsed: ['Calacatta Viola Marble', 'Smoked European Oak', 'Satin Brass Inlays', 'Acoustic Suede Wall Panels'],
    beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
    clientReview: {
      quote: 'The attention to alignment, flush joints, and custom lighting transformed a standard penthouse into an international-grade masterpiece.',
      author: 'Marcus Sterling',
      role: 'Investment Principal, Toronto'
    }
  },
  {
    id: 'executive-mississauga',
    slug: 'executive-workspace-mississauga',
    title: 'Executive Workspace',
    subtitle: 'An acoustic sanctuary tailored for executive leadership and focus.',
    location: 'Mississauga, Ontario',
    province: 'Ontario',
    year: '2024',
    category: 'Commercial',
    area: '12,500 sq ft',
    heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85'
    ],
    overview: 'Corporate headquarters designed for a Canadian wealth management institution. The brief called for understated luxury that communicates security, discretion, and timeless stability to ultra-high-net-worth clients.',
    challenge: 'Providing supreme acoustic dampening across open collaboration wings while maintaining an airy, glass-filled atmosphere.',
    approach: 'Double-glazed soundproof acoustic partitions with integrated walnut baffles, concealed micro-perforated ceiling panels, and residential-feeling client lounges with curated Canadian landscape photography.',
    materialsUsed: ['Quarter-Sawn White Oak', 'Acoustic Felt Baffles', 'Statuary White Quartzite', 'Custom Cognac Leather Seating'],
    clientReview: {
      quote: 'Our clients comment on the atmosphere the second they walk through our doors. It feels more like a private salon in Zurich or London than a corporate office.',
      author: 'Elena Tremblay',
      role: 'Managing Partner, Apex Capital'
    }
  },
  {
    id: 'contemporary-kitchen-oakville',
    slug: 'contemporary-kitchen-oakville',
    title: 'Contemporary Kitchen',
    subtitle: 'Sculptural stone architecture and precision German appliance integration.',
    location: 'Oakville, Ontario',
    province: 'Ontario',
    year: '2025',
    category: 'Kitchen Design',
    area: '950 sq ft',
    heroImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1800&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=1600&q=85'
    ],
    overview: 'Designed for a culinary enthusiast and family in Oakville. We removed separating walls to merge an outdated 90s kitchen with an adjacent conservatory, creating a unified pavilion bathed in southern garden light.',
    challenge: 'Concealing everyday clutter while keeping professional-grade induction, steam oven, and refrigeration tools immediately accessible.',
    approach: 'We built a secondary scullery / prep kitchen behind pocketing walnut wall panels, reserving the central island as an immaculate sculptural centerpiece in Brazilian Taj Mahal quartzite.',
    materialsUsed: ['Taj Mahal Quartzite', 'Fumed Oak Cabinetry', 'Champagne Bronze Fixtures', 'Miele PureLine Appliances'],
    beforeImage: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85',
    clientReview: {
      quote: 'Cooking and hosting here is an absolute joy. The proportion of the island and the concealed pantry changed our daily life.',
      author: 'Jonathan & Michelle K.',
      role: 'Homeowners, Oakville'
    }
  },
  {
    id: 'boutique-calgary',
    slug: 'boutique-interior-calgary',
    title: 'Boutique Interior',
    subtitle: 'Warm industrial modernism in Calgary’s historic Beltline district.',
    location: 'Calgary, Alberta',
    province: 'Alberta',
    year: '2024',
    category: 'Commercial',
    area: '3,800 sq ft',
    heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1800&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85'
    ],
    overview: 'A luxury multi-brand fashion and lifestyle atelier occupying a restored brick warehouse. The concept marries exposed historical heritage elements with razor-sharp brass and limestone retail fixtures.',
    challenge: 'Illuminating garments accurately under retail lighting without destroying the moody, inviting ambiance.',
    approach: 'We engineered custom 97+ CRI museum lighting tracks recessed into black steel unistruts, paired with curved plaster display podiums and intimate velvet private fitting salons.',
    materialsUsed: ['Reclaimed Red Brick', 'Brushed Architectural Brass', 'Cream Venetian Plaster', 'Fluted Glass Screens'],
    clientReview: {
      quote: 'JS Alpha created an experiential retail atmosphere that draws visitors from across Western Canada. It has become a design landmark in the Beltline.',
      author: 'Sophia Vance',
      role: 'Creative Director, Atelier Noir'
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: 'JS Alpha Interiors completely transformed our home. Every detail feels intentional, sophisticated and perfectly suited to the way our family lives. Their ability to balance monumental architecture with cozy livability is unmatched in Canada.',
    client: 'David & Catherine Montgomery',
    role: 'Residential Client',
    location: 'Toronto, Ontario',
    projectType: 'Yorkville Custom Residence',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 't2',
    quote: 'From our very first discovery workshop to the final day of white-glove styling, the JS Alpha team was extraordinary. They understood our aversion to cookie-cutter luxury and delivered an architectural masterpiece that feels timeless.',
    client: 'Dr. Alistair & Mei Ross',
    role: 'Homeowners',
    location: 'West Vancouver, British Columbia',
    projectType: 'Minimalist Coastal Villa',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 't3',
    quote: 'Our firm’s executive suite in Mississauga has become our greatest client conversion tool. The acoustic control, the quality of walnut joinery, and the refined gold accents speak volumes about our brand before we say a word.',
    client: 'Elena Tremblay',
    role: 'Managing Partner',
    location: 'Mississauga, Ontario',
    projectType: 'Corporate Headquarters',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 't4',
    quote: 'The kitchen and ensuite renovation exceeded every expectation. Their precision drawings left zero room for contractor confusion. Everything arrived on schedule and the material textures are sublime.',
    client: 'Jonathan & Michelle Klein',
    role: 'Private Homeowners',
    location: 'Oakville, Ontario',
    projectType: 'Kitchen & Primary Ensuite',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80'
  }
];

export const MATERIALS: MaterialItem[] = [
  {
    id: 'calacatta',
    name: 'Calacatta Viola Marble',
    category: 'Natural Stone',
    origin: 'Carrara, Italy',
    texture: 'Honed Matte with Cabernet Veining',
    description: 'A historic, bold marble characterized by creamy ivory ground and dramatic aubergine-to-cabernet brecciated veining. Sourced exclusively from Tuscan quarries for waterfall islands and fireplace mantels.',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'walnut',
    name: 'American Black Walnut',
    category: 'Hardwood Joinery',
    origin: 'Eastern North America',
    texture: 'Straight Grain, Silk Oil Finish',
    description: 'Celebrated for its deep chocolate tones and dense grain stability. We use select architectural-grade walnut for custom fluted wall panels, floating vanities, and built-in library millwork.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'travertine',
    name: 'Navona Travertine',
    category: 'Architectural Stone',
    origin: 'Tivoli, Italy',
    texture: 'Filled & Honed, Warm Cream',
    description: 'The ancient stone of Rome rendered modern. Provides quiet acoustic absorption and tactile temperature retention over heated floor assemblies.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'brass',
    name: 'Aged Architectural Brass',
    category: 'Metal Finish',
    origin: 'Bespoke Canadian Fabrication',
    texture: 'Hand-Rubbed Satin Gold',
    description: 'Living metallic finishes that gently patina with touch and age, reflecting ambient candlelight and natural daylight with subdued warmth.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'textiles',
    name: 'Belgian Bouclé & Linen',
    category: 'Textiles',
    origin: 'Flanders, Belgium',
    texture: 'Tactile Slub & Soft Curl',
    description: 'Heavyweight organic weaves crafted from 100% European flax and virgin wool. Breathable in Canadian summers, luxuriously insulating in winter.',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'glass',
    name: 'Architectural Fluted Glass',
    category: 'Specialty Glazing',
    origin: 'Custom Tempered Glazing',
    texture: 'Linear Ribbed Distortion',
    description: 'Diffuses harsh glare into luminous atmospheric gradients while preserving visual privacy between ensuite showers and executive conference rooms.',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=85'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'The Great Room Pavilion',
    category: 'Living Rooms',
    location: 'Toronto, Ontario',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85',
    aspect: 'landscape'
  },
  {
    id: 'g2',
    title: 'Monolithic Quartzite Island',
    category: 'Kitchens',
    location: 'Oakville, Ontario',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85',
    aspect: 'portrait'
  },
  {
    id: 'g3',
    title: 'Minimalist Primary Suite',
    category: 'Bedrooms',
    location: 'Vancouver, BC',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85',
    aspect: 'landscape'
  },
  {
    id: 'g4',
    title: 'Freestanding Stone Soak',
    category: 'Bathrooms',
    location: 'Yorkville, Toronto',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=85',
    aspect: 'portrait'
  },
  {
    id: 'g5',
    title: 'Executive Boardroom & Baffles',
    category: 'Offices',
    location: 'Mississauga, Ontario',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
    aspect: 'landscape'
  },
  {
    id: 'g6',
    title: 'Atelier Noir Retail Gallery',
    category: 'Commercial',
    location: 'Calgary, Alberta',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85',
    aspect: 'portrait'
  },
  {
    id: 'g7',
    title: 'Sculptural Marble Staircase',
    category: 'Details',
    location: 'Vancouver, BC',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    aspect: 'square'
  },
  {
    id: 'g8',
    title: 'Sunlit Dining & Chandelier',
    category: 'Living Rooms',
    location: 'Montreal, Quebec',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=85',
    aspect: 'landscape'
  }
];

export const PHILOSOPHY_PILLARS = [
  {
    number: '01',
    title: 'Function',
    concept: 'Architecture starts with human ritual.',
    description: 'Design starts with understanding how the space will actually be used. Before selecting a finish or drafting a wall, we study your daily movements, morning routines, and entertaining habits.'
  },
  {
    number: '02',
    title: 'Balance',
    concept: 'Proportion, light, and mass in equilibrium.',
    description: 'Materials, light and proportion work together harmoniously. We balance hard stone with tactile wool, sweeping expanses of glass with intimate enclosed nooks, and dramatic heights with human-scaled comfort.'
  },
  {
    number: '03',
    title: 'Detail',
    concept: 'The micro informs the macro.',
    description: 'Every finish and fixture contributes to the complete experience. The tactile weight of an aged brass door handle, the shadow reveal beneath baseboards, and the precise junction where timber meets limestone.'
  },
  {
    number: '04',
    title: 'Longevity',
    concept: 'Enduring elegance beyond ephemeral trends.',
    description: 'We create interiors designed to remain relevant beyond trends. Sourcing honest, durable materials that gain patina and dignity over decades, ensuring your investment retains value for generations.'
  }
];

export const DESIGN_STEPS = [
  {
    number: '01',
    title: 'Discovery',
    duration: 'Week 1 – 2',
    description: "Understand the client's lifestyle, preferences, spatial pain points, budget parameters, and architectural vision through an in-depth spatial audit and lifestyle consultation."
  },
  {
    number: '02',
    title: 'Concept',
    duration: 'Week 3 – 4',
    description: 'Define the aesthetic direction, initial space plans, mood boards, and overall visual identity. We establish the emotional resonance and tonal palette of the home.'
  },
  {
    number: '03',
    title: 'Design Development',
    duration: 'Week 5 – 8',
    description: 'Develop comprehensive material specifications, custom millwork drawings, lighting design schedules, and detailed architectural plan sets for contractor pricing.'
  },
  {
    number: '04',
    title: 'Visualization',
    duration: 'Week 9 – 10',
    description: 'Present photorealistic 3D renders and physical material trays (stone samples, timber cuts, fabric swatches) so you experience your completed environment before construction begins.'
  },
  {
    number: '05',
    title: 'Execution',
    duration: 'Week 11 – 18+',
    description: 'Coordinate contractor implementation, trade site visits, bespoke furniture procurement, and strict quality control to guarantee architectural drawings are realized without compromise.'
  },
  {
    number: '06',
    title: 'Final Styling',
    duration: 'Installation Week',
    description: 'Complete the environment through furniture placement, fine art hanging, accessorizing, and white-glove handover. You receive the keys to a completely realized sanctuary.'
  }
];

export const WHY_CHOOSE_US = [
  {
    id: 'w1',
    title: 'Personalized Design',
    description: 'No two clients or spaces receive the same solution. We reject standardized formulas, creating bespoke design narratives tailored to your family or brand.'
  },
  {
    id: 'w2',
    title: 'Functional Planning',
    description: 'Beautiful spaces engineered to function naturally. We maximize storage, optimize natural circulation, and eliminate spatial friction.'
  },
  {
    id: 'w3',
    title: 'Premium Materials',
    description: 'Direct quarry and artisan sourcing across Italy, Belgium, and Canada for marble slabs, quarter-sawn hardwoods, and architectural metals.'
  },
  {
    id: 'w4',
    title: 'Attention to Detail',
    description: 'From 1/8-inch shadow reveal moldings to custom flush-mount lighting fixtures, micro-details are rigorously coordinated and executed.'
  },
  {
    id: 'w5',
    title: 'Collaborative Approach',
    description: 'Transparent communication throughout the entire journey. You remain informed and inspired with real-time budget and schedule tracking.'
  },
  {
    id: 'w6',
    title: 'Canadian Expertise',
    description: 'Bespoke design solutions tailored specifically for Canadian climates, light angles, heating needs, and architectural building codes.'
  }
];
