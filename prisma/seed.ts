import "dotenv/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from '../app/generated/prisma/client';

const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaBetterSqlite3({ url: connectionString });
const prisma = new PrismaClient({ adapter });

/*Claude generated Seed import for development purposes*/

async function main() {
  // Create 10 categories
  const categories = await Promise.all([
    prisma.category.create({ data: { category_name: 'Technology' } }),
    prisma.category.create({ data: { category_name: 'Film' } }),
    prisma.category.create({ data: { category_name: 'Music' } }),
    prisma.category.create({ data: { category_name: 'Books' } }),
    prisma.category.create({ data: { category_name: 'Games' } }),
    prisma.category.create({ data: { category_name: 'Food & Drink' } }),
    prisma.category.create({ data: { category_name: 'Travel' } }),
    prisma.category.create({ data: { category_name: 'Sports' } }),
    prisma.category.create({ data: { category_name: 'Fashion' } }),
    prisma.category.create({ data: { category_name: 'Science' } }),
  ])

  const reviews = [
    // Technology (5)
    { titel: 'MacBook Pro M3 Review', ingress: 'Apple raises the bar again.', body: 'The M3 chip delivers exceptional performance with improved efficiency. Thermals are well managed and the display remains class-leading.', score: 9, mainmedia: 'macbook-pro.jpg', original_review: 'https://example.com/macbook-pro', published: true, category_id: categories[0].id },
    { titel: 'Samsung Galaxy S24 Ultra', ingress: 'Android at its most refined.', body: 'The titanium frame and improved S Pen make this the best Galaxy yet. Camera system is versatile but software still feels bloated.', score: 8, mainmedia: 'galaxy-s24.jpg', original_review: 'https://example.com/galaxy-s24', published: true, category_id: categories[0].id },
    { titel: 'Sony WH-1000XM5 Headphones', ingress: 'Best ANC on the market.', body: 'Noise cancellation is industry-leading. Sound signature is warm and pleasant. Build quality took a step back from the XM4 however.', score: 8, mainmedia: 'xm5.jpg', original_review: 'https://example.com/xm5', published: true, category_id: categories[0].id },
    { titel: 'Steam Deck OLED', ingress: 'Valve fixes the one weak spot.', body: 'The OLED screen transforms the experience. Battery life is meaningfully better. Still the best handheld gaming PC available.', score: 9, mainmedia: 'steam-deck-oled.jpg', original_review: 'https://example.com/steam-deck-oled', published: true, category_id: categories[0].id },
    { titel: 'Logitech MX Master 3S', ingress: 'The productivity mouse refined.', body: 'Near-silent clicks and 8K DPI sensor are welcome upgrades. Ergonomics remain excellent for right-handed users. Pricey but worth it.', score: 8, mainmedia: 'mx-master-3s.jpg', original_review: 'https://example.com/mx-master', published: false, category_id: categories[0].id },

    // Film (5)
    { titel: 'Oppenheimer', ingress: 'Nolan delivers his magnum opus.', body: 'A three-hour biographical epic that never drags. Cillian Murphy is revelatory. The practical effects in the Trinity sequence are breathtaking.', score: 10, mainmedia: 'oppenheimer.jpg', original_review: 'https://example.com/oppenheimer', published: true, category_id: categories[1].id },
    { titel: 'Past Lives', ingress: 'Quietly devastating.', body: 'Celine Song\'s debut is a masterclass in restraint. Greta Lee gives one of the year\'s best performances. The final scene will stay with you.', score: 9, mainmedia: 'past-lives.jpg', original_review: 'https://example.com/past-lives', published: true, category_id: categories[1].id },
    { titel: 'Killers of the Flower Moon', ingress: 'Scorsese at his most morally serious.', body: 'Three and a half hours of meticulous, painful history. DiCaprio and De Niro are both excellent. Essential but harrowing viewing.', score: 9, mainmedia: 'kotfm.jpg', original_review: 'https://example.com/kotfm', published: true, category_id: categories[1].id },
    { titel: 'The Zone of Interest', ingress: 'Horror through absence.', body: 'Glazer shows the banality of evil with clinical precision. The sound design does more work than any image could. Unforgettable.', score: 10, mainmedia: 'zone-of-interest.jpg', original_review: 'https://example.com/zone-of-interest', published: true, category_id: categories[1].id },
    { titel: 'Poor Things', ingress: 'Lanthimos unchained.', body: 'Emma Stone is fearless in a wildly original film. The production design is unlike anything else in recent memory. Divisive but essential.', score: 8, mainmedia: 'poor-things.jpg', original_review: 'https://example.com/poor-things', published: false, category_id: categories[1].id },

    // Music (5)
    { titel: 'Beyoncé – Renaissance', ingress: 'A love letter to dance music.', body: 'Forty years of Black club culture distilled into one seamless record. Production is immaculate. Best listened to at full volume.', score: 10, mainmedia: 'renaissance.jpg', original_review: 'https://example.com/renaissance', published: true, category_id: categories[2].id },
    { titel: 'Mitski – The Land Is Inhospitable', ingress: 'Her most orchestral work yet.', body: 'Lush arrangements frame Mitski\'s sharpest songwriting. Short at 33 minutes but there is no filler. "My Love Mine All Mine" is an instant classic.', score: 9, mainmedia: 'mitski-land.jpg', original_review: 'https://example.com/mitski', published: true, category_id: categories[2].id },
    { titel: 'Lana Del Rey – Did You Know That There\'s a Tunnel', ingress: 'Maximalist and moving.', body: 'Her most ambitious album to date. The country and folk influences work better than expected. Occasionally overlong but consistently beautiful.', score: 8, mainmedia: 'lana-tunnel.jpg', original_review: 'https://example.com/lana', published: true, category_id: categories[2].id },
    { titel: 'boygenius – the record', ingress: 'Three become one, brilliantly.', body: 'Phoebe Bridgers, Julien Baker and Lucy Dacus blend seamlessly. The harmonies are stunning throughout. A rare supergroup that justifies its existence.', score: 9, mainmedia: 'boygenius.jpg', original_review: 'https://example.com/boygenius', published: true, category_id: categories[2].id },
    { titel: 'Sufjan Stevens – Javelin', ingress: 'Grief transmuted into beauty.', body: 'Written while caring for his late partner, Javelin is devastating and gorgeous in equal measure. His most personal record.', score: 9, mainmedia: 'javelin.jpg', original_review: 'https://example.com/javelin', published: false, category_id: categories[2].id },

    // Books (5)
    { titel: 'Tomorrow, and Tomorrow, and Tomorrow', ingress: 'The great novel about games.', body: 'Gabrielle Zevin charts a thirty-year creative partnership with warmth and precision. About collaboration, love, and what it means to make things.', score: 9, mainmedia: 'tomorrow.jpg', original_review: 'https://example.com/tomorrow', published: true, category_id: categories[3].id },
    { titel: 'Intermezzo – Sally Rooney', ingress: 'Her most mature work.', body: 'Two grieving brothers, two complicated relationships. Rooney\'s prose is as precise as ever but the emotional range here is wider than before.', score: 8, mainmedia: 'intermezzo.jpg', original_review: 'https://example.com/intermezzo', published: true, category_id: categories[3].id },
    { titel: 'James – Percival Everett', ingress: 'Huck Finn retold, devastatingly.', body: 'Jim tells his own story. The result is one of the most important American novels in years. Witty, furious, and formally inventive.', score: 10, mainmedia: 'james-everett.jpg', original_review: 'https://example.com/james', published: true, category_id: categories[3].id },
    { titel: 'The Women – Kristin Hannah', ingress: 'Vietnam through a nurse\'s eyes.', body: 'Emotionally gripping historical fiction. Hannah does her research and it shows. Some passages lean melodramatic but the core story is powerful.', score: 7, mainmedia: 'the-women.jpg', original_review: 'https://example.com/the-women', published: true, category_id: categories[3].id },
    { titel: 'Orbital – Samantha Harvey', ingress: 'A day aboard the ISS.', body: 'Man Booker winner. Lyrical and meditative, almost plotless. Either transcendent or dull depending on your tolerance for interior prose. Gorgeous sentences.', score: 8, mainmedia: 'orbital.jpg', original_review: 'https://example.com/orbital', published: false, category_id: categories[3].id },

    // Games (5)
    { titel: 'Baldur\'s Gate 3', ingress: 'The new gold standard for RPGs.', body: 'Larian has made the most reactive, densely authored RPG ever created. The sheer volume of meaningful choice is staggering. A landmark release.', score: 10, mainmedia: 'bg3.jpg', original_review: 'https://example.com/bg3', published: true, category_id: categories[4].id },
    { titel: 'The Legend of Zelda: Tears of the Kingdom', ingress: 'Breath of the Wild surpassed.', body: 'The Ultrahand and Ascend mechanics open up extraordinary possibilities. The Depths add genuine mystery. An argument for Nintendo\'s continued relevance.', score: 10, mainmedia: 'totk.jpg', original_review: 'https://example.com/totk', published: true, category_id: categories[4].id },
    { titel: 'Alan Wake 2', ingress: 'Remedy\'s most ambitious game.', body: 'Genuinely weird, visually stunning, and deeply committed to its own mythology. The musical sequences are breathtaking. Remedy are in a class of their own.', score: 9, mainmedia: 'alan-wake-2.jpg', original_review: 'https://example.com/alan-wake-2', published: true, category_id: categories[4].id },
    { titel: 'Cocoon', ingress: 'Puzzle design at its purest.', body: 'A masterwork of interlocking puzzle systems with zero tutorial text. Short but perfectly formed. One of the most elegant games ever made.', score: 9, mainmedia: 'cocoon.jpg', original_review: 'https://example.com/cocoon', published: true, category_id: categories[4].id },
    { titel: 'Dave the Diver', ingress: 'Hybrid genre done right.', body: 'Diving roguelite meets sushi restaurant management. Sounds odd, plays brilliantly. Packed with content and consistently surprising.', score: 8, mainmedia: 'dave-the-diver.jpg', original_review: 'https://example.com/dave', published: false, category_id: categories[4].id },

    // Food & Drink (5)
    { titel: 'Noma, Copenhagen', ingress: 'The end of an era.', body: 'Foraging-led tasting menu that defined a generation of cooking. Final season menus were the best yet. A genuinely unrepeatable experience.', score: 10, mainmedia: 'noma.jpg', original_review: 'https://example.com/noma', published: true, category_id: categories[5].id },
    { titel: 'Macallan 18 Sherry Oak', ingress: 'A benchmark Speyside.', body: 'Rich dried fruit, dark chocolate, and subtle oak. Consistent and reliably excellent. The price has climbed steeply but quality justifies it.', score: 9, mainmedia: 'macallan-18.jpg', original_review: 'https://example.com/macallan', published: true, category_id: categories[5].id },
    { titel: 'Ottolenghi Simple – Cookbook', ingress: 'Complex flavours, simple method.', body: 'Every recipe in this book works. The ingredient lists look long but most are pantry staples. Transformative for weeknight cooking.', score: 9, mainmedia: 'ottolenghi-simple.jpg', original_review: 'https://example.com/ottolenghi', published: true, category_id: categories[5].id },
    { titel: 'Oatly Barista Edition', ingress: 'The oat milk that changed cafés.', body: 'Steams well, minimal sweetness, holds its own in espresso. Still the standard against which other oat milks are judged.', score: 8, mainmedia: 'oatly.jpg', original_review: 'https://example.com/oatly', published: true, category_id: categories[5].id },
    { titel: 'Fever-Tree Smoky Ginger Ale', ingress: 'A mixer worth drinking solo.', body: 'Gentle smoke from chipotle and lapsang. Complex enough to sip on its own, excellent with aged spirits. Niche but brilliant.', score: 8, mainmedia: 'fever-tree-smoky.jpg', original_review: 'https://example.com/fever-tree', published: false, category_id: categories[5].id },

    // Travel (5)
    { titel: 'Tokyo, Japan', ingress: 'The most liveable megacity on earth.', body: 'Effortless public transit, extraordinary food at every price point, and a culture of quiet consideration for others. No city does urban life better.', score: 10, mainmedia: 'tokyo.jpg', original_review: 'https://example.com/tokyo', published: true, category_id: categories[6].id },
    { titel: 'Lisbon, Portugal', ingress: 'Europe\'s most underrated capital.', body: 'Affordable by western European standards, beautiful, and blessed with great seafood. The tram network is charming if unreliable. Go before it changes further.', score: 8, mainmedia: 'lisbon.jpg', original_review: 'https://example.com/lisbon', published: true, category_id: categories[6].id },
    { titel: 'Oaxaca, Mexico', ingress: 'The food alone justifies the trip.', body: 'Mezcal, mole, and tlayudas. Colonial architecture and a thriving arts scene. One of the most culturally rich destinations in the Americas.', score: 9, mainmedia: 'oaxaca.jpg', original_review: 'https://example.com/oaxaca', published: true, category_id: categories[6].id },
    { titel: 'Kyoto in Autumn', ingress: 'The foliage is worth every crowd.', body: 'Arashiyama and Fushimi Inari in November are genuinely spectacular. Book accommodation six months ahead. The crowds are real but so is the beauty.', score: 8, mainmedia: 'kyoto-autumn.jpg', original_review: 'https://example.com/kyoto', published: true, category_id: categories[6].id },
    { titel: 'Iceland Road Trip', ingress: 'Raw, remote, and unforgettable.', body: 'The Ring Road in summer offers near-endless daylight and dramatic landscapes every few kilometres. Expensive but the scenery is compensation enough.', score: 9, mainmedia: 'iceland.jpg', original_review: 'https://example.com/iceland', published: false, category_id: categories[6].id },

    // Sports (5)
    { titel: 'Nike Vaporfly 3', ingress: 'Still the fastest marathon shoe.', body: 'Carbon plate and ZoomX foam combination remains the benchmark. Fit is more secure than the Vaporfly 2. Worth the price for serious runners.', score: 9, mainmedia: 'vaporfly-3.jpg', original_review: 'https://example.com/vaporfly', published: true, category_id: categories[7].id },
    { titel: 'Garmin Forerunner 965', ingress: 'The complete running watch.', body: 'AMOLED display, training load metrics, and multi-band GPS. Battery life is excellent. The best all-round running watch currently available.', score: 9, mainmedia: 'forerunner-965.jpg', original_review: 'https://example.com/forerunner', published: true, category_id: categories[7].id },
    { titel: 'Peloton Row', ingress: 'Premium rowing, premium price.', body: 'Build quality is excellent and the form coaching via camera is genuinely useful for beginners. Subscription cost on top of hardware is hard to justify long term.', score: 7, mainmedia: 'peloton-row.jpg', original_review: 'https://example.com/peloton-row', published: true, category_id: categories[7].id },
    { titel: 'Whoop 4.0', ingress: 'Data-first wearable with no display.', body: 'Recovery and strain metrics are well implemented. No screen keeps it unobtrusive. The subscription model remains controversial but the data is genuinely useful.', score: 7, mainmedia: 'whoop-4.jpg', original_review: 'https://example.com/whoop', published: true, category_id: categories[7].id },
    { titel: 'Technogym Skillmill', ingress: 'The best non-motorised treadmill.', body: 'Sled-like resistance training and sprint work in one machine. Built for commercial gyms but robust enough for serious home use. Transformative for speed training.', score: 8, mainmedia: 'skillmill.jpg', original_review: 'https://example.com/skillmill', published: false, category_id: categories[7].id },

    // Fashion (5)
    { titel: 'New Balance 550', ingress: 'The sleeper hit of the decade.', body: 'Basketball silhouette repurposed as a lifestyle shoe. Clean lines, great colourways, and accessible pricing. Collaborations have elevated its profile further.', score: 8, mainmedia: 'nb-550.jpg', original_review: 'https://example.com/nb550', published: true, category_id: categories[8].id },
    { titel: 'Uniqlo Heattech Ultra Warm', ingress: 'Thermal base layer, solved.', body: 'Incredibly thin for the warmth it provides. Comfortable against skin and layers without bulk. The most useful item in a cold-weather wardrobe.', score: 9, mainmedia: 'heattech.jpg', original_review: 'https://example.com/heattech', published: true, category_id: categories[8].id },
    { titel: 'Arc\'teryx Beta AR Jacket', ingress: 'The hardshell benchmark.', body: 'Gore-Tex Pro construction is genuinely waterproof under sustained rain. Trim fit, excellent hood, minimal features. The price is painful but this is a lifetime purchase.', score: 9, mainmedia: 'beta-ar.jpg', original_review: 'https://example.com/beta-ar', published: true, category_id: categories[8].id },
    { titel: 'Levi\'s 501 Original', ingress: 'Still the jeans standard.', body: 'The straight leg and high rise have never really gone out of fashion. Quality control has declined versus earlier decades but value for money remains solid.', score: 7, mainmedia: 'levis-501.jpg', original_review: 'https://example.com/levis-501', published: true, category_id: categories[8].id },
    { titel: 'Loro Piana Cashmere Overshirt', ingress: 'The luxury casual layer.', body: 'Extraordinarily soft and well constructed. The kind of garment that lasts decades. Pricing is rarefied but per-wear cost over a lifetime is reasonable.', score: 9, mainmedia: 'loro-piana.jpg', original_review: 'https://example.com/loro-piana', published: false, category_id: categories[8].id },

    // Science (5)
    { titel: 'The Coming Wave – Mustafa Suleyman', ingress: 'AI risk from an insider.', body: 'DeepMind co-founder\'s account of where AI and synthetic biology are heading. Unusually honest about the risks given his position. Essential reading for 2024.', score: 8, mainmedia: 'coming-wave.jpg', original_review: 'https://example.com/coming-wave', published: true, category_id: categories[9].id },
    { titel: 'James Webb Space Telescope – Year Two', ingress: 'The universe rewritten.', body: 'JWST\'s second year of data has challenged models of early galaxy formation. The quality and volume of discoveries continues to exceed pre-launch expectations.', score: 10, mainmedia: 'jwst-year2.jpg', original_review: 'https://example.com/jwst', published: true, category_id: categories[9].id },
    { titel: 'GLP-1 Drugs in 2024', ingress: 'Beyond weight loss.', body: 'Semaglutide and tirzepatide trials showing benefit in heart failure, kidney disease, and addiction. The therapeutic scope appears broader than initially anticipated.', score: 9, mainmedia: 'glp1.jpg', original_review: 'https://example.com/glp1', published: true, category_id: categories[9].id },
    { titel: 'AlphaFold 3', ingress: 'Protein folding extended.', body: 'DeepMind\'s third iteration now models DNA, RNA, and small molecules alongside proteins. Implications for drug discovery are substantial. Open access a positive step.', score: 9, mainmedia: 'alphafold3.jpg', original_review: 'https://example.com/alphafold3', published: true, category_id: categories[9].id },
    { titel: 'Nuclear Fusion – NIF Update', ingress: 'Ignition sustained, scaling remains unsolved.', body: 'The National Ignition Facility has repeated ignition several times. Net energy gain at facility scale confirmed. Commercial timelines remain speculative at best.', score: 7, mainmedia: 'nif-fusion.jpg', original_review: 'https://example.com/nif', published: false, category_id: categories[9].id },
  ]

  for (const review of reviews) {
    await prisma.reviews.create({ data: review })
  }

  console.log(`Seeded ${categories.length} categories and ${reviews.length} reviews.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })