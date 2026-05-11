export const info = {
    name: "Diksha Phuloria",
    tagline: "Analyze, Visualize and Predict Insights From Data With Me",
    email: "dikshaphuloria@gmail.com",
    github: "https://github.com/dikshaphuloria",
    LinkedIn: "https://www.linkedin.com/in/dikshaph7/",
    photo: "/profile.jpg",

    about: {
        story: `I grew up in India, with two great loves - games and puzzles. There was always something deeply satisfying about finding the hidden pattern, catching the little trick that made everything click. Then somewhere around 2006, a boxy little machine called a computer entered my life, and I discovered you could do both at once. I wasn't just playing games though, I kept wondering: how is this thing actually doing this? What's happening under the hood?

        That curiosity led me to pursue Information Technology for my undergrad, where I learned how every complex system in the world ultimately reduces to just 0s and 1s. Then 2020 happened. COVID brought an avalanche of data into everyday life, case counts, trends, projections and watching how fast information travelled and how much it mattered was like seeing the world's biggest puzzle unfold in real time. That was the moment data stopped being abstract for me and became something urgent and alive.

        I graduated in 2021 and joined Accenture as an Analyst, where I worked supporting applications for a banking client. It was eye-opening in unexpected ways. I saw how banks generate mountains of data daily and rely on it for everything, and how even something as mundane as where to place a signature box requires a surprising degree of precision. I also started noticing the messiness of real-world data: inconsistent entries, missing fields, forms people casually skip (myself included - if there's no asterisk, I'm not filling it). Easy for the customer, but a genuine challenge for any company that depends on that data to function. I didn't just want to observe that mess anymore. I wanted to be the person who could actually make sense of it and fix it.

        That drive brought me to the MSDS program at Rutgers in 2024. Being here made the power of data even more tangible and connected a thread I hadn't expected. Those same 0s and 1s I first learned about in undergrad, stored across servers at massive scale, are exactly what power the giant transformer models like GPT, Claude, and Gemini that have completely changed how we interact with technology. I started this journey with a computer that had no internet and now a few words is all it takes to analyze, transform, and create anything and everything possible.

        It's been a wild ride. And the best part about technology is exactly what makes a great puzzle, the pieces just keep getting added, with no end in sight. That's what keeps me going: deep curiosity, the ability to adapt to whatever the next piece looks like, and a genuine belief that the best problems are solved by learning from the people around you.`,
    interests: [
      { label: "Researching and Analyzing", emoji: "🔬" },
      { label: "Agentic AI Systems", emoji: "🤖" },
      { label: "Sustainable ML", emoji: "🌱" },
      { label: "Cooking", emoji: "🍳" },
      { label: "Travelling", emoji: "✈️" },
      { label: "Reading", emoji: "📚" },
      { label: "Photography", emoji: "📸" }
    ],
    funFacts: [
      "I can debug a data pipeline faster than I can decide what to eat for lunch 🤔",
      "I've tracked CO₂ emissions of ML models before tracking my own carbon footprint",
      "My first ML project was predicting whether an email was spam or not — spoiler: And I still ended up clicking on the spam emails because, well, curiosity wins every time but don't worry I am more careful now!",
    ],
    },

    education: [
        {
          school: "Rutgers University",
          degree: "MS, Data Science",
          date: "Aug 2024 – May 2026",
          location: "New Brunswick, NJ",
          gpa: "3.88 / 4.0",
        },
        {
          school: "Manipal University Jaipur",
          degree: "BTech, Information Technology",
          date: "Jul 2017 – Jun 2021",
          location: "Rajasthan, India",
          gpa: "8.07 / 10",
        },
      ],

      experience: [
        {
          company: "Accenture",
          role: "Analyst, Custom Software Engineering",
          date: "May 2021 – Jun 2023",
          location: "Gurugram, India",
          bullets: [
            "Supported Tableau and Cognos enterprise analytics platforms, improving reporting reliability.",
            "Debugged 100+ client-reported data pipeline and application issues via ServiceNow.",
            "Monitored SLA compliance metrics to drive client satisfaction across enterprise engagements.",
          ],
        },
      ],

      skills: {
        "Languages": ["Python", "SQL", "R"],
        "Platforms": ["FastAPI", "VS Code", "MySQL", "Docker", "Streamlit", "Google Colab"],
        "Analytics": ["Pandas", "Predictive Modeling", "Feature Engineering", "Causal Inference", "ETL"],
        "Concepts" : ["Data Wrangling", "Data Visualization", "NLP", "LLM Interpretability", "Agentic AI Systems", "Sustainable ML", "Data Storytelling"],
      },

      projects: [
        {
          title: "Interpreting Climate Representations in GPT-2",
          subtitle: "via Sparse Autoencoders",
          summary: "Large language models like GPT-2 are powerful, but their internal mechanisms and feature representations remain opaque. This project uses sparse autoencoders to investigate how GPT-2 internally represents and understands climate change concepts.",
          tech: "Python · PyTorch · Hugging Face · Google Colab A100",
          github:"https://github.com/dikshaphuloria/climate-sae-gpt2.git",
          bullets: [
            "Trained a 32,768-feature SAE on 839,773 GPT-2 Medium activations, extending Anthropic's mechanistic interpretability framework to the climate domain.",
            "Discovered Carbon (15.96×) and Greenhouse/Emissions (8.56×) as the most climate-selective features across 21 analyzed.",
            "Proved surface-level token inspection is insufficient — Glaciers, Species & Atmosphere were non-climate-selective despite intuitive relevance.",
          ],
        },
        {
          title: "NutriSync",
          subtitle: "Agentic AI Meal Planning System",
          summary: "NutriSync is a smart meal planning app which addresses a core gap in existing nutrition apps: the inability to adapt to real-world variability such as changing pantry stocks, evolving dietary goals/restrictions, meal-prep habits, and spontaneous cravings. NutriSync handles all of these through an interconnected pipeline",
          tech: "Next.js · FastAPI · PostgreSQL · Google Gemini · Docker",
          github:"https://github.com/shrutielangovan/meal-plan-project.git",
          bullets: [
            "Built a full-stack agentic AI platform unifying meal planning, nutrition tracking, pantry management, and grocery shopping with HITL checkpoints.",
            "Engineered cross-module data propagation — selecting a meal auto-updates pantry, macros, and grocery list instantly.",
            "Integrated Gemini Vision for receipt scanning; backed by a 12-table PostgreSQL schema with Spoonacular & USDA APIs.",
          ],
        },
        {
          title: "Veralyze",
          subtitle: "AI Video & Image Authenticity Detector",
          summary:"As AI-generated videos and images flood the internet, telling real from fake is increasingly hard, Veralyze combines multiple forensic signals to give you a verdict with evidence, not just a guess.",
          tech: "FastAPI · Next.js · Gemini Vision · FFmpeg · Pillow",
          github:"https://github.com/dikshaphuloria/Veralyze.git",
          bullets: [
            "Built a forensic web app detecting AI-generated content using Gemini Vision, ELA, frame transition analysis, and EXIF inspection.",
            "Clean split between signal collection (analyzer.py) and scoring logic (scorer.py) with duration-aware FFmpeg frame sampling.",
            "Real-time progress streamed via SSE across a 15–40 second forensic pipeline with full evidence surfacing.",
          ],
        },
        {
          title: "Carbon Emissions Tracking",
          subtitle: "in Language Model Fine-Tuning",
          summary: "Training AI models has a real environmental cost that rarely gets measured, this project tracks exactly how much CO₂ different fine-tuning strategies produce and whether the performance trade-off is worth it.",
          tech: "Python · Hugging Face · CodeCarbon · SQuAD v2.0",
          github:"https://github.com/shrutielangovan/CarbonEmissionsinFine-TuningLanguageModelS.git",
          bullets: [
            "Benchmarked DistilBERT, BERT, RoBERTa & GPT-2 across full fine-tuning, LoRA, and few-shot learning with CodeCarbon emission tracking.",
            "RoBERTa + LoRA was optimal: F1=0.7426, 9.56 F1/kg CO₂, achieving ~95% performance with 12–24% lower emissions.",
            "Introduced F1-per-kg-CO₂ as a replicable metric for evaluating LLMs under both performance and environmental constraints.",
          ],
        },
      ],

      certifications: [
        {
          name: "SnowPro Core Certification — Snowflake (Aug 2025 – Aug 2027)",
          url: "https://achieve.snowflake.com/f93aa466-1e48-4236-a287-fbfb880b7dd8#acc.N5oiShaZ"
        },
        {
          name: "Claude 101 Certification — Anthropic (May 2026)",
          url: "https://verify.skilljar.com/c/zimkbb8n4248"
        },
        {
          name: "L'Oréal Brandstorm Participation Certificate — 2026",
          url: "https://drive.google.com/file/d/1JcJlSz5Xy9yvvfjtO_1N1fZz1TsSGXBD/view"
        },
      ],

};