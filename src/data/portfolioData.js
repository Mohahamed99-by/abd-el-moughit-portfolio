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
      thumbnail:"/images/image_1_project.png",
      video: "/videos/agency.net.mp4",
      featured: true
    },
    {
      id: 2,
      title: "Wedding Highlight Reel",
      category: "Wedding",
      thumbnail:
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop&crop=center",
      featured: true
    },
    {
      id: 3,
      title: "Product Launch Campaign",
      category: "Commercial",
      thumbnail:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=center",
      featured: false
    },
    {
      id: 4,
      title: "Documentary Short",
      category: "Documentary",
      thumbnail:
        "https://images.unsplash.com/photo-1478720568477-b2709d01bdda?w=600&h=400&fit=crop&crop=center",
      featured: true
    },
    {
      id: 5,
      title: "Music Video",
      category: "Music",
      thumbnail:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop&crop=center",
      featured: false
    },
    {
      id: 6,
      title: "Real Estate Tour",
      category: "Real Estate",
      thumbnail:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop&crop=center",
      featured: false
    },
    {
      id: 7,
      title: "Tech Startup Pitch",
      category: "Commercial",
      thumbnail:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop&crop=center",
      featured: true
    },
    {
      id: 8,
      title: "Fashion Brand Campaign",
      category: "Fashion",
      thumbnail:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop&crop=center",
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

  contact: {
    email: "contact@videoportfolio.com",
    phone: "+212612455372",
    location: "Morocco",
    social: [
      {
        name: "Instagram",
        url: "https://www.instagram.com/moughit_mr?igsh=bDg3dXRxN29iZjlu&utm_source=qr",
        icon: "instagram",
        handle: "@moughit_mr"
      },
      {
        name: "WhatsApp",
        url: "https://wa.me/212612455372",
        icon: "whatsapp",
        handle: "+212612455372"
      }
    ]
  },

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
