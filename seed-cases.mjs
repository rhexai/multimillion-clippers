import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

// Read .env.local manually since we're in node without Next.js booting
const envLocal = fs.readFileSync('.env.local', 'utf8');
let URL = '';
let Secret_Key = '';

for (const line of envLocal.split('\n')) {
  if (line.startsWith('URL=')) URL = line.replace('URL=', '').trim();
  if (line.startsWith('Secret_Key=')) Secret_Key = line.replace('Secret_Key=', '').trim();
}

if (!URL || !Secret_Key) {
    console.error("Could not find URL or Secret_Key in .env.local");
    process.exit(1);
}

const supabase = createClient(URL, Secret_Key);

const caseStudies = [
  {
    category: "Podcast Agency",
    title: "12.4M new viewers in 30 days.",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1000&auto=format&fit=crop",
    metric: "12.4M Views",
  },
  {
    category: "B2B SaaS",
    title: "Scaling a demo reach across LinkedIn.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    metric: "400% ROI",
  },
  {
    category: "E-Commerce",
    title: "Driving sales with viral short-form hooks.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop",
    metric: "85% Conversion",
  },
  {
    category: "Gaming Creator",
    title: "Extracting the highest retention gameplay.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop",
    metric: "92% Hold Rate",
  },
  {
    category: "Fitness App",
    title: "Trending challenges that boosted installs.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop",
    metric: "50k Installs",
  },
  {
    category: "Real Estate",
    title: "Luxury property tours built to share.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop",
    metric: "2.1M Reach",
  }
];

async function seed() {
    console.log("Seeding Supabase Case Studies...");

    for (const study of caseStudies) {
        // Just delete by title to ensure idempotency for script
        await supabase.from("CaseStudy").delete().eq("title", study.title);
        
        const { error } = await supabase.from("CaseStudy").insert(study);
        if (error) {
            console.error("Error inserting", study.title, error);
        } else {
            console.log("Inserted:", study.title);
        }
    }
    console.log("Done seeding case studies!");
}

seed();
