// Portfolio data - easy to update and maintain
export const portfolioData = {
  skills: [
    {
      name: "Video Editing",
      level: 95,
      tools: ["Adobe Premiere Pro", "Final Cut Pro", "DaVinci Resolve"],
    },
    {
      name: "Motion Graphics",
      level: 90,
      tools: ["After Effects", "Cinema 4D", "Blender"],
    },
    {
      name: "Color Grading",
      level: 85,
      tools: ["DaVinci Resolve", "Lumetri Color", "Magic Bullet"],
    },
    {
      name: "Audio Editing",
      level: 80,
      tools: ["Audition", "Pro Tools", "Logic Pro"],
    },
  ],

  projects: [
    {
      id: 1,
      title: "Corporate Brand Video",
      category: "Commercial",
      description:
        "A dynamic brand video showcasing modern corporate values with sleek animations and professional storytelling.",
      thumbnail:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop&crop=center",
      duration: "2:30",
      client: "Tech Innovations Inc.",
      techDetails: [
        "4K Resolution",
        "Advanced Color Grading",
        "Motion Graphics",
        "Professional Audio Mix",
        "Multi-camera Editing"
      ],
      tags: ["Corporate", "Branding", "Motion Graphics"],
      year: 2024,
      featured: true
    },
    {
      id: 2,
      title: "Wedding Highlight Reel",
      category: "Wedding",
      description:
        "An emotional wedding highlight reel capturing the most precious moments with cinematic color grading and smooth transitions.",
      thumbnail:
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop&crop=center",
      duration: "4:15",
      client: "Sarah & Michael",
      techDetails: [
        "Cinematic Color Grading",
        "Emotional Storytelling",
        "Smooth Transitions",
        "Audio Synchronization"
      ],
      tags: ["Wedding", "Cinematic", "Emotional"],
      year: 2024,
      featured: true
    },
    {
      id: 3,
      title: "Product Launch Campaign",
      category: "Commercial",
      description:
        "High-energy product showcase with dynamic motion graphics and compelling visual storytelling for a successful product launch.",
      thumbnail:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=center",
      duration: "1:45",
      client: "Innovation Labs",
      techDetails: [
        "Dynamic Motion Graphics",
        "Product Visualization",
        "High-energy Editing",
        "Brand Integration"
      ],
      tags: ["Product", "Launch", "Commercial"],
      year: 2024,
      featured: false
    },
    {
      id: 4,
      title: "Documentary Short",
      category: "Documentary",
      description:
        "A powerful documentary piece exploring social impact with thoughtful editing and compelling narrative structure.",
      thumbnail:
        "https://images.unsplash.com/photo-1478720568477-b2709d01bdda?w=600&h=400&fit=crop&crop=center",
      duration: "12:30",
      client: "Impact Stories",
      techDetails: [
        "Narrative Structure",
        "Interview Editing",
        "B-roll Integration",
        "Social Impact Focus"
      ],
      tags: ["Documentary", "Social Impact", "Storytelling"],
      year: 2023,
      featured: true
    },
    {
      id: 5,
      title: "Music Video",
      category: "Music",
      description:
        "Creative music video with rhythmic editing, vibrant color schemes, and innovative visual effects synchronized to the beat.",
      thumbnail:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop&crop=center",
      duration: "3:20",
      client: "Rising Star Records",
      techDetails: [
        "Rhythmic Editing",
        "Beat Synchronization",
        "Visual Effects",
        "Creative Transitions"
      ],
      tags: ["Music", "Creative", "Visual Effects"],
      year: 2023,
      featured: false
    },
    {
      id: 6,
      title: "Real Estate Tour",
      category: "Real Estate",
      description:
        "Cinematic property showcase featuring smooth camera movements and luxurious presentation for high-end real estate marketing.",
      thumbnail:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop&crop=center",
      duration: "2:00",
      client: "Luxury Properties",
      techDetails: [
        "Cinematic Camera Work",
        "Luxury Presentation",
        "Smooth Movements",
        "Property Showcase"
      ],
      tags: ["Real Estate", "Luxury", "Cinematic"],
      year: 2023,
      featured: false
    },
    {
      id: 7,
      title: "Tech Startup Pitch",
      category: "Commercial",
      description:
        "Compelling pitch video for a tech startup featuring animated infographics and professional presentation.",
      thumbnail:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop&crop=center",
      duration: "3:45",
      client: "StartupTech",
      techDetails: [
        "Animated Infographics",
        "Data Visualization",
        "Professional Presentation",
        "Startup Branding"
      ],
      tags: ["Startup", "Tech", "Pitch"],
      year: 2024,
      featured: true
    },
    {
      id: 8,
      title: "Fashion Brand Campaign",
      category: "Fashion",
      description:
        "Stylish fashion campaign video with dynamic cuts, color grading, and modern aesthetic for luxury brand.",
      thumbnail:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop&crop=center",
      duration: "2:15",
      client: "Luxe Fashion",
      techDetails: [
        "Fashion Cinematography",
        "Luxury Aesthetic",
        "Dynamic Cuts",
        "Brand Storytelling"
      ],
      tags: ["Fashion", "Luxury", "Brand"],
      year: 2024,
      featured: false
    }
  ],

  services: [
    {
      title: "Video Editing & Post-Production",
      description:
        "Professional video editing with color correction, audio mixing, and seamless transitions.",
      icon: "🎬",
      features: [
        "Multi-camera editing",
        "Color grading",
        "Audio enhancement",
        "Visual effects",
      ],
    },
    {
      title: "Motion Graphics & Animation",
      description:
        "Eye-catching motion graphics and animations to enhance your video content.",
      icon: "✨",
      features: [
        "2D/3D animations",
        "Logo animations",
        "Lower thirds",
        "Title sequences",
      ],
    },
    {
      title: "Commercial & Marketing Videos",
      description:
        "Compelling commercial videos that drive engagement and conversions.",
      icon: "📈",
      features: [
        "Brand videos",
        "Product demos",
        "Social media content",
        "Promotional videos",
      ],
    },
    {
      title: "Event & Wedding Videography",
      description:
        "Capturing life's precious moments with cinematic storytelling.",
      icon: "💝",
      features: [
        "Wedding highlights",
        "Event coverage",
        "Documentary style",
        "Same-day edits",
      ],
    },
  ],

  testimonials: [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "Tech Innovations Inc.",
      quote:
        "Outstanding work! The video exceeded our expectations and helped us achieve a 300% increase in engagement.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Creative Director",
      company: "Rising Star Records",
      quote:
        "Incredible attention to detail and creative vision. The music video perfectly captured our artist's style.",
      rating: 5,
    },
    {
      name: "Emma Wilson",
      role: "Event Coordinator",
      company: "Luxury Properties",
      quote:
        "Professional, reliable, and incredibly talented. Our property videos now stand out from the competition.",
      rating: 5,
    },
  ],
};
