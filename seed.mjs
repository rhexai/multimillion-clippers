import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

// Read .env.local manually since we're in node
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

const posts = [
    {
      title: "AI Clip Generators vs Clipping Agencies",
      slug: "ai-clip-generators-vs-clipping-agencies",
      category: "Article",
      excerpt: "Honest comparison of AI clip generators (Opus Clip, Vizard, quso.ai) vs managed clipping agencies. Real pricing, real limitations, and when each model actually wins.",
      content: `
        <p>AI clip generators like Opus Clip, Vizard, and quso.ai promise to turn long-form video into short-form clips automatically. Managed clipping agencies like Multimillion Clippers do the same thing - but with human editors, creator networks, and performance-based distribution.</p>
        <p>This guide compares the two models honestly: what each actually does, what each actually costs, where each wins, and where each falls short.</p>
        <h2>What AI clip generators actually do</h2>
        <p>AI clip generators analyze your video's transcript and audio to identify "highlight" moments. The software then cuts those segments into standalone clips, adds captions, and formats them for short-form platforms.</p>
        <h3>Opus Clip</h3>
        <ul>
          <li><strong>Free tier:</strong> 60 minutes of processing per month.</li>
          <li><strong>Starter:</strong> $15/month. 150 credits, animated captions.</li>
          <li><strong>Pro:</strong> $29/month. 3,600 credits/year, AI B-roll.</li>
        </ul>
        <h2>When AI clip generators are the right choice</h2>
        <ul>
          <li>You need quick drafts for internal testing.</li>
          <li>You are a solo creator posting from one account.</li>
          <li>You are testing a new content format on a low budget.</li>
        </ul>
      `,
      image: "/cover.png"
    },
    {
      title: "How to Start Clipping on TikTok (2026)",
      slug: "how-to-start-clipping-on-tiktok-2026",
      category: "Guide",
      excerpt: "Complete beginner guide to clipping on TikTok: what clipping is, how to find clip-worthy moments, editing tools, posting strategy, and when to hire a managed service instead.",
      content: `
        <p>Clipping on TikTok has evolved. In 2026, it's not just about cutting a video; it's about narrative hooks and community engagement.</p>
        <h2>Step 1: Finding Clip-Worthy Moments</h2>
        <p>Look for emotional spikes, strong contrarian opinions, or clear 'how-to' segments in your long-form video.</p>
        <h2>Step 2: Editing for Retention</h2>
        <p>Use dynamic captions and fast-paced cuts. The goal is to keep the viewer watching until the very end.</p>
      `,
      image: "/cover.png"
    },
    {
      title: "Future Of Work Africa: 2026 Report",
      slug: "future-of-work-africa",
      category: "Report",
      excerpt: "An in-depth analysis of how AI and remote work are shaping the professional landscape across the African continent in 2026.",
      content: `
        <p>Africa is witnessing a digital renaissance. With the rise of Starlink and localized data centers, remote work is no longer a luxury but a standard for high-growth tech hubs.</p>
        <h2>Key Statistics</h2>
        <ul>
          <li>40% increase in cross-border hiring within the EAC.</li>
          <li>AI adoption in fintech has reached 65% in Lagos and Nairobi.</li>
        </ul>
      `,
      image: "/cover.png"
    },
    {
      title: "The economic potential of generative AI: The next productivity frontier",
      slug: "economic-potential-generative-ai",
      category: "Article",
      excerpt: "Exploring the multi-trillion dollar impact of generative AI on global productivity and the specific sectors seeing the most growth.",
      content: `
        <p>Generative AI is projected to add trillions of dollars in value to the global economy. From automated coding to hyper-personalized marketing, the productivity frontier is expanding at an unprecedented rate.</p>
      `,
      image: "/cover.png"
    }
];

async function seed() {
    console.log("Seeding Supabase...");
    for (const post of posts) {
        // Upsert by slug wasn't fully clean in pure supabase insert if there's no unique constraint handler
        // but we'll try to delete it first to make it idempotent
        await supabase.from("Post").delete().eq("slug", post.slug);
        
        const { error } = await supabase.from("Post").insert(post);
        if (error) {
            console.error("Error inserting", post.slug, error);
        } else {
            console.log("Inserted:", post.title);
        }
    }
    console.log("Done!");
}

seed();
