// ============================================================
// IMAGE CONFIGURATION
// Public assets live in: public/images/*
// Use them via absolute paths like: /images/hero.png
// ============================================================

// Placeholder generator using picsum (used when a local image isn't available yet)
const placeholder = (w, h, seed) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const images = {
  // Hero Section
  heroLandscape: '/images/hero.png',

  // Travel Styles (square sources for circular crops; swap with local assets anytime)
  activeAdventure:
    'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=560&h=560&q=80',
  innerWellness:
    '/images/inner_and_wellness.jpg',
  foodCulture:
    '/images/food_and_culture.jpg',

  // Nayarit section (full-bleed background; coastal / Pacific Mexico feel)
  nayaritJourneyBg:
    'https://images.unsplash.com/photo-1510099374519-5384a3b90356?auto=format&fit=crop&w=2000&q=80',

  // Location Thumbnails
  sayulita: placeholder(200, 200, 'sayulita-village'),
  sanPancho: placeholder(200, 200, 'san-pancho'),
  puertoVallarta: placeholder(200, 200, 'puerto-vallarta'),

  // First Experiences
  sunsetJungleHike: placeholder(400, 250, 'sunset-jungle'),
  monkeyMountainSunrise: placeholder(400, 250, 'monkey-mountain'),
  hiddenBeachPicnic: placeholder(400, 250, 'hidden-beach'),
  sunriseYoga: placeholder(400, 250, 'sunrise-yoga'),
  intimateLocalDinners: placeholder(400, 250, 'local-dinners'),

  // Community Section (beach / group — swap with local asset in src/assets/images if needed)
  communityTogether: '/images/community_together.jpg',

  // Founders (portrait placeholders — replace with local assets when available)
  nicolHuis: '/images/founder_image.png',
  daniyalSultan: '/images/cto_image.png',

  // Join the Journey (left column portrait — beach / gathering; swap with local asset if needed)
  joinJourneyPortrait: '/images/join_journey.jpg',
};
