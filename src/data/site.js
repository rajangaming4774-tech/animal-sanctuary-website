// ============================================================
//  Central content for the Karuna Sanctuary platform (mock DB)
//  Replace SANCTUARY details + swap images with your own assets.
// ============================================================

export const SANCTUARY = {
  name: 'Karuna Animal Sanctuary',
  tagline: 'Helping Each Other Can Make World Better',
  city: 'Coimbatore, Tamil Nadu',
  phone: '+91 98765 43210',
  whatsapp: '+91 98765 43210',
  email: 'care@karunasanctuary.org',
  reg: 'Reg. No. TN/TR/2016/0451',
  g80: '80G Approval: AAATK1234F / 2021-22',
  address: '14 Anaikatti Road, Thadagam, Coimbatore 641108',
}

// Homepage impact ticker (mirrors the reference UI counters)
export const STATS = [
  { icon: 'paw', num: 4597, suffix: '+', label: 'Animals Rescued' },
  { icon: 'bowl', num: 8945, suffix: '+', label: 'Meals Served / Month' },
  { icon: 'heart', num: 10, suffix: 'M+', label: 'Rupees Raised' },
  { icon: 'home', num: 100, suffix: '+', label: 'Happy Adoptions' },
]

const img = (id, w = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const ANIMALS = [
  {
    slug: 'kaali',
    name: 'Kaali',
    species: 'Dog',
    breed: 'Indie',
    sex: 'Female',
    age: '2 years',
    status: 'needs_funds',
    urgent: true,
    featured: true,
    hook: 'Hit by a bike on the highway — now learning to walk again after spinal surgery.',
    hero: img('1583337130417-3346a1be7dee'),
    gallery: [
      img('1583337130417-3346a1be7dee'),
      img('1552053831-71594a27632d'),
      img('1537151625747-768eb6cf92b2'),
      img('1518717758536-85ae29035b6d'),
    ],
    goal: 85000,
    raised: 61200,
    donors: 214,
    daysActive: 12,
    intakeDate: '28 Jun 2026',
    location: 'NH-181, Thadagam',
    temperament: ['Gentle', 'Good with kids', 'Special needs'],
    adoptionFee: 0,
    story:
      'Kaali was found motionless at the roadside after being struck by a two-wheeler. Our rescue team stabilised her and rushed her to our partner hospital, where scans revealed a fractured pelvis and spinal trauma. She has already had one surgery and is responding to physiotherapy — wagging her tail for the first time in weeks. Your support funds her second surgery, medicines and months of rehab.',
    costs: [
      { item: 'Spinal surgery (2nd)', amount: 42000 },
      { item: 'Medicines & imaging', amount: 18000 },
      { item: 'Physiotherapy (3 months)', amount: 15000 },
      { item: 'Boarding & food', amount: 10000 },
    ],
    updates: [
      { date: 'Day 12', title: 'Stitches out, eating on her own', body: 'Kaali finished her antibiotics and the first set of stitches are out. She ate a full bowl today!', img: img('1537151625747-768eb6cf92b2', 500) },
      { date: 'Day 6', title: 'First wag of the tail', body: 'A tiny but mighty milestone — sensation is returning to her hind legs.' },
      { date: 'Day 1', title: 'Rescued & stabilised', body: 'Kaali arrived in critical condition. Emergency care given overnight.' },
    ],
    supporters: [
      { name: 'Priya S.', amount: 2500, msg: 'Get well soon, brave girl 💚' },
      { name: 'Anonymous', amount: 5000, msg: '' },
      { name: 'Karthik R.', amount: 1000, msg: 'Sending love from Chennai.' },
      { name: 'Meera & family', amount: 3100, msg: 'Praying for a full recovery.' },
    ],
  },
  {
    slug: 'raja',
    name: 'Raja',
    species: 'Cow',
    breed: 'Indigenous',
    sex: 'Male',
    age: '4 years',
    status: 'needs_funds',
    urgent: true,
    featured: true,
    hook: 'Rescued from an illegal transport truck with severe rope wounds.',
    hero: img('1570042225831-d98fa7577f1e'),
    gallery: [img('1570042225831-d98fa7577f1e'), img('1500595046743-cd271d694d30'), img('1546445317-29d45f9b5d3b')],
    goal: 60000,
    raised: 24800,
    donors: 96,
    daysActive: 8,
    intakeDate: '2 Jul 2026',
    location: 'Mettupalayam checkpost',
    temperament: ['Calm', 'Recovering'],
    adoptionFee: 0,
    story:
      'Raja was crammed into an overloaded truck bound for slaughter when authorities intercepted it. He arrived with deep rope wounds and dehydration. He is now safe in our sanctuary pasture, but needs ongoing wound care and nutrition to fully recover.',
    costs: [
      { item: 'Wound treatment & vet', amount: 22000 },
      { item: 'Nutrition & fodder (3 mo)', amount: 24000 },
      { item: 'Shelter upkeep', amount: 14000 },
    ],
    updates: [
      { date: 'Day 8', title: 'Wounds healing well', body: 'Daily dressing is working — Raja is grazing happily.' },
      { date: 'Day 1', title: 'Arrived at sanctuary', body: 'Intercepted and brought to safety.' },
    ],
    supporters: [
      { name: 'Suresh K.', amount: 5000, msg: 'Thank you for saving him.' },
      { name: 'Anonymous', amount: 2000, msg: '' },
    ],
  },
  {
    slug: 'mittu',
    name: 'Mittu',
    species: 'Cat',
    breed: 'Domestic Shorthair',
    sex: 'Female',
    age: '1 year',
    status: 'adoptable',
    urgent: false,
    featured: true,
    hook: 'A playful, litter-trained sweetheart looking for a forever home.',
    hero: img('1514888286974-6c03e2ca1dba'),
    gallery: [img('1514888286974-6c03e2ca1dba'), img('1495360010541-f48722b34f7d'), img('1533738363-b7f9aef128ce')],
    goal: 0,
    raised: 0,
    donors: 0,
    daysActive: 0,
    intakeDate: '10 May 2026',
    location: 'Sanctuary cattery',
    temperament: ['Playful', 'Litter-trained', 'Good with cats'],
    adoptionFee: 500,
    story:
      'Mittu came to us as a tiny abandoned kitten and has grown into a curious, affectionate cat. She is fully vaccinated, spayed and litter-trained. She would thrive in an indoor home, ideally with another gentle cat for company.',
    costs: [],
    updates: [{ date: 'This week', title: 'Ready for adoption', body: 'Mittu has completed all vaccinations and is spayed.' }],
    supporters: [],
  },
  {
    slug: 'bruno',
    name: 'Bruno',
    species: 'Dog',
    breed: 'Labrador mix',
    sex: 'Male',
    age: '3 years',
    status: 'sponsorable',
    urgent: false,
    featured: false,
    hook: 'A senior-friendly gentle giant who loves belly rubs — sponsor his care.',
    hero: img('1587300003388-59208cc962cb'),
    gallery: [img('1587300003388-59208cc962cb'), img('1543466835-00a7907e9de1'), img('1576201836106-db1758fd1c97')],
    goal: 0,
    raised: 0,
    donors: 38,
    daysActive: 0,
    intakeDate: '15 Feb 2026',
    location: 'Sanctuary kennels',
    temperament: ['Gentle', 'Good with kids', 'Loves walks'],
    adoptionFee: 0,
    story:
      'Bruno was surrendered when his family moved abroad. He is healthy and loving but has been overlooked for adoption because of his size. Until he finds a home, monthly sponsors cover his food, vet checks and enrichment.',
    costs: [],
    updates: [{ date: 'This month', title: 'Sponsors keep Bruno smiling', body: 'Thanks to 38 sponsors, Bruno enjoys daily walks and a full bowl.' }],
    supporters: [],
  },
  {
    slug: 'lucky',
    name: 'Lucky',
    species: 'Dog',
    breed: 'Indie pup',
    sex: 'Male',
    age: '4 months',
    status: 'adoptable',
    urgent: false,
    featured: false,
    hook: 'Rescued from a storm drain, now a bouncy, healthy puppy ready to adopt.',
    hero: img('1425082661705-1834bfd09dca'),
    gallery: [img('1425082661705-1834bfd09dca'), img('1546238232-20216dec9f72'), img('1548199973-03cce0bbc87b')],
    goal: 0,
    raised: 0,
    donors: 0,
    daysActive: 0,
    intakeDate: '20 Jun 2026',
    location: 'Sanctuary nursery',
    temperament: ['Energetic', 'Friendly', 'Needs a yard'],
    adoptionFee: 500,
    story:
      'Lucky and his siblings were pulled from a flooded storm drain during the monsoon. He is dewormed, vaccinated for his age and full of beans. He needs an active family with space to run.',
    costs: [],
    updates: [{ date: 'This week', title: 'All clear for adoption', body: 'Lucky passed his health check with flying colours.' }],
    supporters: [],
  },
  {
    slug: 'gauri',
    name: 'Gauri',
    species: 'Goat',
    breed: 'Rescue',
    sex: 'Female',
    age: '2 years',
    status: 'recovered',
    urgent: false,
    featured: false,
    hook: 'Once malnourished and abandoned — now thriving in our sanctuary herd.',
    hero: img('1524024973431-2ad916746881'),
    gallery: [img('1524024973431-2ad916746881'), img('1533318087102-b3ad366ed041')],
    goal: 30000,
    raised: 30000,
    donors: 120,
    daysActive: 0,
    intakeDate: '1 Jan 2026',
    location: 'Sanctuary pasture',
    temperament: ['Friendly', 'Recovered'],
    adoptionFee: 0,
    story:
      'Gauri was found abandoned and severely malnourished. Thanks to 120 donors, she made a full recovery and now lives happily in our sanctuary herd — proof of what your support makes possible.',
    costs: [],
    updates: [{ date: 'Recovered', title: 'Fully healthy!', body: 'Gauri has doubled her weight and loves the pasture.' }],
    supporters: [],
  },
]

export const CAUSES = [
  {
    slug: 'monsoon-feeding-drive',
    title: 'Monsoon Street-Feeding Drive',
    category: 'Feed & Shelter',
    image: img('1601758228041-f3b2795255f1'),
    goal: 150000,
    raised: 98400,
    donors: 512,
    story: 'When the rains hit, strays struggle to find food. This drive funds 3,000 warm meals a week across the city for eight weeks.',
    status: 'active',
  },
  {
    slug: 'mass-sterilisation',
    title: 'Community Sterilisation (ABC)',
    category: 'Sterilisation',
    image: img('1583511655857-d19b40a7a54e'),
    goal: 200000,
    raised: 76500,
    donors: 289,
    story: 'Humane population control through Animal Birth Control — sterilise and vaccinate 400 street dogs this quarter.',
    status: 'active',
  },
  {
    slug: 'mobile-rescue-ambulance',
    title: 'A Second Rescue Ambulance',
    category: 'Rescue Ops',
    image: img('1615461066841-6116e61058f6'),
    goal: 900000,
    raised: 415000,
    donors: 731,
    story: 'One ambulance can no longer keep up with rescue calls. Help us put a second fully-equipped vehicle on the road.',
    status: 'active',
  },
]

export const CATEGORIES = ['All', 'Medical', 'Feed & Shelter', 'Rescue Ops', 'Sterilisation', 'Sanctuary Upkeep']

export const STORIES = [
  {
    name: 'Sheru',
    before: img('1444212477490-ca407925329e', 500),
    after: img('1583512603805-3cc6b41f3edb', 500),
    text: 'Found with mange and skin barely intact, Sheru was adopted after 4 months of care. He now guards a loving home.',
  },
  {
    name: 'Nandi',
    before: img('1546445317-29d45f9b5d3b', 500),
    after: img('1500595046743-cd271d694d30', 500),
    text: 'A collapsed bullock left for dead. Today Nandi grazes freely in our sanctuary — a gentle giant restored.',
  },
  {
    name: 'Coco',
    before: img('1518020382113-a7e8fc38eac9', 500),
    after: img('1552053831-71594a27632d', 500),
    text: 'Abandoned in a cardboard box, Coco was nursed back to health and adopted by a family who adores her.',
  },
]

export const FUND_ALLOCATION = [
  { label: 'Medical & surgery', pct: 42, color: '#1f9d55' },
  { label: 'Food & shelter', pct: 28, color: '#f08a3c' },
  { label: 'Rescue operations', pct: 16, color: '#27b463' },
  { label: 'Sterilisation', pct: 9, color: '#f7a55e' },
  { label: 'Admin & overhead', pct: 5, color: '#9aa8a1' },
]

export const FAQS = [
  { q: 'Is my donation tax-deductible?', a: 'Yes. Karuna Animal Sanctuary is a registered trust with valid 80G approval. Donations above ₹500 receive an 80G receipt by email. Provide your PAN at checkout to claim the deduction.' },
  { q: 'How much of my money reaches the animals?', a: 'For every ₹100 you give, ₹95 goes directly to animal care. Only ₹5 covers essential admin and payment-processing costs. See our Transparency page for the full breakdown and audited reports.' },
  { q: 'Can I sponsor a specific animal?', a: 'Absolutely. Choose any animal marked "Sponsorable", set a monthly amount, and you will receive a sponsor certificate plus monthly photo updates of your animal.' },
  { q: 'What payment methods do you accept?', a: 'UPI (GPay, PhonePe, Paytm), credit/debit cards, net-banking and wallets. Monthly giving is supported via UPI Autopay and card subscriptions.' },
  { q: 'How do I report an injured animal?', a: 'Use our Report a Rescue form — upload a photo, share the location, and our team is dispatched. For emergencies, call our 24×7 helpline directly.' },
  { q: 'Can I cancel a monthly sponsorship?', a: 'Yes, anytime. Manage, pause, upgrade or cancel your sponsorship from your donor dashboard — no phone calls required.' },
]

export const statusMeta = {
  needs_funds: { label: 'Needs Medical Funds', cls: 'badge-medical' },
  sponsorable: { label: 'Sponsorable', cls: 'badge-sponsor' },
  adoptable: { label: 'Available for Adoption', cls: 'badge-adopt' },
  in_care: { label: 'In Care', cls: 'badge-recovered' },
  recovered: { label: 'Recovered', cls: 'badge-recovered' },
}

export const inr = (n) => '₹' + Number(n).toLocaleString('en-IN')
