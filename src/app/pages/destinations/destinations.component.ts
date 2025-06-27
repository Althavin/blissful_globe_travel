import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('expand', [
      transition(':enter', [
        style({ height: 0, opacity: 0 }),
        animate('300ms ease-out', style({ height: '*', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ height: '*', opacity: 1 }),
        animate('300ms ease-in', style({ height: 0, opacity: 0 }))
      ])
    ]),
    trigger('slideInRight', [
      state('void', style({ transform: 'translateX(-100%)', opacity: 0 })),
      state('animated', style({ transform: 'translateX(0)', opacity: 1 })),
      transition('void => animated', [
        animate('800ms ease-out')
      ])
    ])
  ]
})
export class DestinationsComponent implements OnInit {
  selectedCountry: string = 'Kenya'; // Default
  isAnimated: boolean = false; // Animation state

  packages: { [key: string]: { name: string; description: string; image: string; expanded: boolean; itinerary?: string; inclusions?: string; price?: string; }[] } = {
    'Kenya': [
      {
        name: 'Maasai Mara National Reserve',
        description: 'Step into the world’s most legendary safari destination, where golden savannahs host life-changing wildlife spectacles. The Great Wildebeest Migration: Witness over two million hooves thundering across open plains. Big Five Safaris: Search for lions, elephants, leopards, buffalo, and rhinos amid rolling grasslands. Hot-Air Balloon Excursions: Drift silently above acacia-dotted horizons at dawn. Maasai Cultural Visits: Engage with Maasai warriors, admire vibrant beadwork, and learn traditional dances.',
        image: '/assets/images/Maasai Mara.jpg',
        expanded: false,
        itinerary: '- Day 1: Nairobi → Maasai Mara (~5 hr drive)\n- Evening game drive\n- Day 2: Full-day safari with hot-air balloon option\n- Day 3: Maasai cultural visit and afternoon game drive\n- Day 4: Return to Nairobi (~5 hr)',
        inclusions: '- Shared 4x4 safari vehicle with guide\n- Full board on safari\n- Park entry fees\n- Bottled water & tented camp accommodation',
        price: 'Approx. USD 1,200-2,500 per person (varies by package)'
      },
      {
        name: 'Amboseli National Park',
        description: 'With Mount Kilimanjaro’s snow-capped peak as your backdrop, Amboseli offers iconic elephant encounters and endless skies. Mount Kilimanjaro Views: Snap postcard-worthy photos of Africa’s tallest peak rising above marshes. Elephant Herds: Witness majestic bull elephants and playful calves at dusty watering holes. Birding & Marshes: Spot flamingos, pelicans, and other wetland birds against golden sunsets. Sunset Safaris: Experience Kilimanjaro’s peaks blushing pink as you return to camp under a blanket of stars.',
        image: '/assets/images/Mt Kilimanjaro.jpg',
        expanded: false,
        itinerary: '- Day 1: Nairobi → Amboseli (~4 hr drive)\n- Afternoon game drive\n- Day 2: Full-day safari and cultural dawn walk\n- Day 3: Return to Nairobi (~4 hr)',
        inclusions: '- Shared 4x4 safari vehicle\n- Full board\n- Park fees\n- Basic accommodation',
        price: 'Approx. USD 1,200 per person'
      },
      {
        name: 'Tsavo East & Tsavo West National Parks',
        description: 'Vast wilderness awaits: from red-dust elephants roaming open plains to hidden oases fed by underground springs. Tsavo East: Red Elephants: See large herds rolling in the ochre dust. Yatta Plateau & Akamba Pavements: Ancient lava formations stretching to the horizon. Tsavo West: Mzima Springs: Crystal-clear pools where hippos and crocodiles surface amid palm trees. Shetani Lava Flow: A surreal expanse of jagged basalt fields. Lake Chala: A tranquil crater lake perfect for reflective canoeing and birdwatching. Lake Jipe: A cross-border lake alive with fishing villages and herons lining the shores.',
        image: '/assets/images/Tsavo.jpg',
        expanded: false,
        itinerary: '- Day 1: Nairobi → Tsavo West (~5 hr drive)\n- Afternoon game drive\n- Day 2: Tsavo West full-day safari\n- Day 3: Tsavo East game drive\n- Day 4: Return to Nairobi (~5 hr)',
        inclusions: '- Shared 4x4 vehicle\n- Full board\n- Park fees\n- Tented camps',
        price: 'Approx. USD 1,500-2,000 per person'
      },
      {
        name: 'Kenyan Coastline Getaway',
        description: 'Let the warm Indian Ocean waters whisk you away as you explore history-soaked cities, white-sand beaches, and island paradises. Mombasa Old Town: Wander narrow alleys lined with coral-stone houses, sample Swahili spices, and tour the iconic Fort Jesus. Diani Beach: Lounge on powder-white sands, snorkel vibrant coral gardens, or kite-surf above turquoise waves. Watamu Marine National Park: Swim with sea turtles, dive among coral reefs, and relax in seaside cottages. Malindi: Discover Swahili ruins at Gedi, dine on fresh seafood by the shore, and browse vibrant marketplaces. Lamu Island: Step back in time to a UNESCO-listed village—no cars, just donkeys and dhow sails drifting in the breeze. Funzi Island: Paddle through mangrove forests, birdwatch for kingfishers, and stay in eco-friendly beach bandas. Robinson Island: Escape to a private sandbar surrounded by clear lagoon waters—ideal for picnics and snorkeling. Taita Hills: Explore rolling tea plantations, hidden forest trails, and luxury lodges perched on escarpment edges.',
        image: '/assets/images/Kenyan Coastline.jpg',
        expanded: false,
        itinerary: '- Day 1: Nairobi → Mombasa (flight)\n- Beach relaxation\n- Day 2: Diani Beach activities\n- Day 3: Watamu Marine Park\n- Day 4: Return to Nairobi (flight)',
        inclusions: '- Flight transfers\n- Full board\n- Beach resort accommodation\n- Water excursions',
        price: 'Approx. USD 2,000-3,000 per person'
      },
      {
        name: 'Nairobi City Escape',
        description: 'Experience Kenya’s capital: a cosmopolitan hub fringed by wildlife sanctuaries and cultural gems. Nairobi National Park: Encounter lions, rhinos, and giraffes grazing against a city skyline. David Sheldrick Wildlife Trust: Visit orphaned elephants during their feeding times and learn about conservation. Giraffe Centre: Feed endangered Rothschild’s giraffes and view Nairobi from a treetop observatory. Karen Blixen Museum: Step into the world of “Out of Africa” at the author’s historic home and coffee estate. Nairobi National Museum: Explore Kenya’s cultural heritage, paleontological exhibits, and vibrant art collections.',
        image: '/assets/images/Nairobi.jpg',
        expanded: false,
        itinerary: '- Day 1: Arrival in Nairobi\n- City tour (National Park, Giraffe Centre)\n- Day 2: Museum and Karen Blixen visit\n- Day 3: Return',
        inclusions: '- Transport\n- Guided tours\n- Meals\n- Entry fees',
        price: 'Approx. USD 400-600 per person'
      },
      {
        name: 'The Great Rift Valley Safari Circuit',
        description: 'Embark on a journey through the dramatic landscapes of Kenya’s Rift Valley, where shimmering lakes and volcanic wonders beckon explorers. Lake Nakuru: Famous for pastel-hued flamingo lagoons and rhinos grazing against pink-tinged shores. Lake Naivasha: A tranquil freshwater haven alive with hippos, birds, and sunset boat rides. Mt. Longonot: An extinct volcano with a rim trail that rewards hikers with sweeping Rift Valley panoramas. Hell’s Gate National Park: Towering cliffs, steaming fumaroles, and cycling safaris through narrow gorges. Lake Turkana: The “Jade Sea,” a remote desert lake ringed by volcanic landscapes and traditional fishing villages.',
        image: '/assets/images/Great Riftvalley.jpg',
        expanded: false,
        itinerary: '- Day 1: Nairobi → Lake Nakuru (~4 hr drive)\n- Day 2: Lake Naivasha boat ride\n- Day 3: Hell’s Gate cycling\n- Day 4: Return to Nairobi (~5 hr)',
        inclusions: '- Shared 4x4 vehicle\n- Full board\n- Park fees\n- Basic accommodation',
        price: 'Approx. USD 1,300-1,800 per person'
      },
      {
        name: 'Mount Kenya & Nanyuki Highlands',
        description: 'Discover Kenya’s “roof” and the charming highland town that serves as your gateway to alpine adventure. Mount Kenya National Park: Trek through bamboo forests, glimpse glaciers, and ascend to stunning high-altitude lakes. Nanyuki Town: Stand on the Equator, visit Maasai villages, and savor locally roasted coffee. Aberdare Ranges: Navigate misty trails past waterfalls, listen for bongo antelopes, and stay in treetop lodges. Highland Lodges: Cozy chalets and tented camps offering roaring fireplaces and mountain vistas.',
        image: '/assets/images/Mt Kenya.jpg',
        expanded: false,
        itinerary: '- Day 1: Nairobi → Nanyuki (~4 hr drive)\n- Day 2: Mount Kenya trek\n- Day 3: Aberdare visit\n- Day 4: Return to Nairobi (~4 hr)',
        inclusions: '- Shared transport\n- Full board\n- Park fees\n- Lodge accommodation',
        price: 'Approx. USD 1,400-2,000 per person'
      },
      {
        name: 'Lake Victoria Region Experience',
        description: 'Journey to Africa’s largest freshwater lake, where vibrant cultures and watery wonders converge. Kisumu Town: Stroll along Dunga Beach at sunset, dine on tilapia freshly grilled by local fishermen, and enjoy lakeside nightlife. Mfangano Island (Ring Island): Discover ancient rock art in Nyang’ome Caves and immerse yourself in Luo traditions. Hippo & Bird Safaris: Cruise to Yala Swamp and the Rusinga Channel to spot hippos, African fish eagles, and elusive shoebills. Dunga Hill Camp: Lounge on sun-drenched terraces overlooking fishing canoes and stage dramatic lakeside sunsets. Floating Papyrus Gardens: Observe farmers tending floating islands of papyrus and matoke banana groves—a unique local livelihood.',
        image: '/assets/images/Lake Victoria.jpg',
        expanded: false,
        itinerary: '- Day 1: Nairobi → Kisumu (~7 hr drive)\n- Day 2: Boat safari and island visit\n- Day 3: Return to Nairobi (~7 hr)',
        inclusions: '- Shared transport\n- Full board\n- Boat tours\n- Basic accommodation',
        price: 'Approx. USD 1,200-1,700 per person'
      },
      {
        name: 'Samburu & Northern Frontier',
        description: 'In Kenya’s semi-arid north, rugged landscapes and rare wildlife create a safari experience unlike any other. Samburu National Reserve: The Samburu Five: Seek out Grevy’s zebra, reticulated giraffe, Somali ostrich, Beisa oryx, and gerenuk. Ewaso Ng’iro River: Watch desert-adapted elephants and crocodiles at the riverbanks. Kalacha & Shaba Reserves: Lesser-known arid wildernesses where salt licks attract big cats and hoofed game, and endless skies promise stellar stargazing.',
        image: '/assets/images/Samburu.jpg',
        expanded: false,
        itinerary: '- Day 1: Nairobi → Samburu (~6 hr drive)\n- Day 2: Full-day safari\n- Day 3: Return to Nairobi (~6 hr)',
        inclusions: '- Shared 4x4 vehicle\n- Full board\n- Park fees\n- Tented camps',
        price: 'Approx. USD 1,400-1,900 per person'
      }
    ],
    'Uganda': [
      {
        name: 'Bwindi Impenetrable Forest',
        description: 'Venture into lush rainforests where misty slopes and ancient trees frame unforgettable close-ups with some of Africa’s most iconic primates. Bwindi Impenetrable Forest: Embark on heart-pounding gorilla treks through dense, emerald-canopied jungle—face-to-face with majestic mountain gorilla families. Mgahinga Gorilla National Park: Follow expert trackers in the Virunga foothills to find smaller, habituated gorilla groups and glimpse golden monkeys leaping among bamboo.',
        image: '/assets/images/Gorilla.jpg',
        expanded: false,
        itinerary: '- Day 1: Entebbe → Bwindi (~8 hr drive)\n- Day 2: Gorilla trekking\n- Day 3: Return to Entebbe (~8 hr)',
        inclusions: '- Shared 4x4 vehicle\n- Gorilla permit (USD 700)\n- Full board\n- Budget lodge',
        price: 'Approx. USD 1,200-1,500 per person'
      },
      {
        name: 'Murchison Falls National Park',
        description: 'Experience Uganda’s dramatic landscapes where roaring rivers carve gorges, savannah plains teem with wildlife, and flamingo-streaked lakes glimmer at sunset. Murchison Falls National Park: Witness the Nile’s raw power as it blasts through a narrow gorge—cruise to the base of Murchison Falls for thunderous spray and spot lions, giraffes, and hippos on the Albertine Rift savannah.',
        image: '/assets/images/Murchison.jpg',
        expanded: false,
        itinerary: '- Day 1: Kampala → Murchison (~5 hr drive)\n- Day 2: Game drive and boat safari\n- Day 3: Return to Kampala (~5 hr)',
        inclusions: '- Shared 4x4 vehicle\n- Full board\n- Park fees\n- Budget camp',
        price: 'Approx. USD 1,300-1,800 per person'
      },
      {
        name: 'Lake Bunyonyi',
        description: 'Unwind on Africa’s second-deepest lake, dotted with 29 islands—canoe among papyrus-fringed shores, visit Punishment Island for local legends, and soak up serene volcano-framed sunsets.',
        image: '/assets/images/Lake Bunyonyi.jpg',
        expanded: false,
        itinerary: '- Day 1: Kampala → Lake Bunyonyi (~7 hr drive)\n- Day 2: Canoeing and island visit\n- Day 3: Return to Kampala (~7 hr)',
        inclusions: '- Shared transport\n- Full board\n- Basic accommodation',
        price: 'Approx. USD 1,000-1,400 per person'
      }
    ],
    'Tanzania': [
      {
        name: 'Serengeti National Park',
        description: 'Embark on Tanzania’s most famous wildlife loop, where rolling savannahs, crater lakes, and ancient forests converge to create life-changing safari moments. Serengeti National Park: Home of the Great Migration—over two million wildebeest and zebra thunder across endless plains under big-cat watch.',
        image: '/assets/images/Serengeti.jpg',
        expanded: false,
        itinerary: '- Day 1: Arusha → Serengeti (~6 hr drive)\n- Day 2: Full-day safari\n- Day 3: Return to Arusha (~6 hr)',
        inclusions: '- Shared 4x4 vehicle\n- Full board\n- Park fees\n- Budget lodge',
        price: 'Approx. USD 1,300-1,500 per person'
      },
      {
        name: 'Zanzibar Archipelago',
        description: 'After wild safaris or mountain climbs, trade dusty roads for turquoise seas and spice-scented breezes—experience Zanzibar’s vibrant fusion of Swahili culture, history, and beach paradise.',
        image: '/assets/images/Zanzibar.jpg',
        expanded: false,
        itinerary: '- Day 1: Arusha → Zanzibar (flight)\n- Day 2: Stone Town tour\n- Day 3: Beach relaxation\n- Day 4: Return to Arusha (flight)',
        inclusions: '- Flight transfers\n- Half-board\n- Beach resort',
        price: 'Approx. USD 1,500-2,000 per person'
      },
      {
        name: 'Mount Kilimanjaro',
        description: 'Stand on Africa’s rooftop as you trek through tropical rainforests, heathlands, and alpine deserts to reach Kilimanjaro’s snow-capped summit.',
        image: '/assets/images/Mt Kilimanjaro.jpg',
        expanded: false,
        itinerary: '- Day 1: Moshi → Start trek (Machame route)\n- Day 2-5: Trek to summit\n- Day 6: Descent and return to Moshi',
        inclusions: '- Guide and porters\n- Full board\n- Park fees',
        price: 'Approx. USD 2,000-3,000 per person'
      }
    ],
    'Rwanda': [
      {
        name: 'Volcanoes National Park',
        description: 'Venture into mist-shrouded mountains and ancient rainforests where you’ll come face-to-face with majestic gorillas and playful chimpanzees. Volcanoes National Park: Trek through bamboo and mossy forests to track habituated mountain gorilla families—an awe-inspiring, once-in-a-lifetime encounter.',
        image: '/assets/images/Volcanoes.jpg',
        expanded: false,
        itinerary: '- Day 1: Kigali → Volcanoes NP (~2 hr drive)\n- Day 2: Gorilla trekking\n- Day 3: Return to Kigali (~2 hr)',
        inclusions: '- Shared 4x4 vehicle\n- Gorilla permit (USD 1,500)\n- Full board\n- Budget lodge',
        price: 'Approx. USD 1,200-1,400 per person'
      },
      {
        name: 'Akagera National Park',
        description: 'Discover Rwanda’s eastern plains and serene lakeshore retreats—where open grasslands teem with wildlife and calm waters mirror rolling hills. Akagera National Park: Embark on Big Five game drives through acacia-studded savannahs—spot lions, elephants, buffalo, and giraffes against the backdrop of Lake Ihema’s shimmering wetlands.',
        image: '/assets/images/Lake Kivu.jpg',
        expanded: false,
        itinerary: '- Day 1: Kigali → Akagera (~2.5 hr drive)\n- Day 2: Game drive and boat safari\n- Day 3: Return to Kigali (~2.5 hr)',
        inclusions: '- Shared 4x4 vehicle\n- Full board\n- Park fees\n- Budget camp',
        price: 'Approx. USD 1,300-1,700 per person'
      },
      {
        name: 'Kigali City Escape',
        description: 'Immerse yourself in Rwanda’s vibrant heritage, innovative urban scene, and panoramic highland vistas—where history and modernity intertwine. Kigali City Tour: Explore the poignant Kigali Genocide Memorial, wander bustling markets in Nyarugenge, and dine on creative cuisine in leafy Kiyovu.',
        image: '/assets/images/Kigali.jpg',
        expanded: false,
        itinerary: '- Day 1: Arrival in Kigali\n- City tour\n- Day 2: Return',
        inclusions: '- Transport\n- Guided tour\n- Meals',
        price: 'Approx. USD 300-500 per person'
      }
    ]
  };

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      const country = params.get('country');
      if (country) {
        this.isAnimated = false;
        this.selectedCountry = country.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
        console.log('Route Param - Country:', country, 'Selected Country:', this.selectedCountry);
        setTimeout(() => {
          this.isAnimated = true;
        }, 100);
      }
    });
  }

  ngOnInit() {
    console.log('Component Initialized - Initial selectedCountry:', this.selectedCountry);
  }

  toggleExpand(pkg: any) {
    pkg.expanded = !pkg.expanded;
  }

  getPackages() {
    const packages = this.packages[this.selectedCountry] || [];
    console.log('Getting Packages for:', this.selectedCountry, 'Count:', packages.length);
    return packages;
  }

  isImageLeft(index: number): boolean {
    return index % 2 === 0;
  }

  getPackageUrl(packageName: string): string {
    return packageName.toLowerCase().replace(/\s+/g, '-');
  }
}