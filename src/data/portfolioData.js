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
      title: "Motion graphics",
      thumbnail:"/images/image_1_project.png",
      video: "/videos/agency.net.mp4",
      featured: true
    },
    {
      id: 2,
      title: "Cinematic style",
      thumbnail:
        "/images/image_2_project.png",
        video: '/videos/video_2.mp4',
      featured: true
    },
    {
      id: 3,
      title: "Writing style and sound effects",
      thumbnail:
        "/images/image_3_project.png",
        video: '/videos/video_3.mp4',
      featured: false
    },
    {
      id: 4,
      title: "Advertising videos",
      thumbnail:
        "/images/image_4_project.png",
        video: "videos/video_4.mp4",
      featured: true
    },
    {
      id: 5,
      title: "Animatising advertising video",
     thumbnail:"/images/Screenshot 2025-07-06 220826.png",
        video: "/videos/video_44.mp4",
      featured: false
    },
    {
      id: 6,
      title: "Real Estate Tour",
     thumbnail:
        "/images/image_6_project.png",
        video: "videos/video_6.mp4",
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
    email: "moughitmoughit777@gmail.com",
    phone: "+212 624-821600",
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
        url: "https://wa.me/212624821600",
        icon: "whatsapp",
        handle: "+212 624-821600"
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/share/19WRcY1fmt/?mibextid=wwXIfr",
        icon: "facebook",
        handle: "Facebook Profile"
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
