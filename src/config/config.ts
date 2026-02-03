// src/config/config.ts

export const getAsset = (path: string) => {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${path}`;
};

const siteConfig = {
  personal: {
    name: 'Upanshu Sil',
    title: 'First Year Economics and Data Science Student',
    image: getAsset('images/profile.png'), // Customize or replace with your profile image
    description:
      'Christ University 29 \n' +
      'Passionate about Public Policy, Data & Finance\n' +
      'Theatre Artist\n' +
      'Mood Indigo 2025 Street Play 3rd place\n' +
      'Cricket, Tennis, Geopolitics, Politics\n' +
      '',
    tagline: 'Esala Cup Namdu',
    location: 'Kolkata, India',
  },

  seo: {
    title: 'Upanshu Sil',
    description: "Portfolio website showcasing your education, research, projects, and experience.",
  },

  animatedText: ['Student', 'Economics', 'Public Policy and Finance', 'Builder'],

  navigation: [
    { name: 'Home', url: '/' },
    { name: 'Projects', url: '/projects' },
    { name: 'Research', url: '/research' },
    { name: 'Education', url: '/education' },
    { name: 'Experience', url: '/experience' },
    { name: 'Blogs', url: '/blogs' },
    { name: 'Resume', url: '/resume' },
    { name: 'Contact', url: '/contact' },
  ],

  // Static blog entries. Use getAsset so the URL respects NEXT_PUBLIC_BASE_PATH / next.config.basePath
  // Add more entries here as you add more static HTML blog files under public/static_page/
  blogs: [
    {
      title: 'Your Blog Title',
      url: getAsset('static_page/project_management_blog.html'), // Replace with your static HTML page
    },
  ],


  education: [
    {
      institution: 'Christ (Deemed to be university)',
      degree: 'BSc Economics and Data Science',
      year: '2025-2029',
      image: getAsset('images/education/placeholder.png'),
      description: ['Public Policy and Economics'],
    },
    {
      institution: 'IVWS',
      degree: 'Higher Senior Secondary',
      year: '2025',
      image: getAsset('images/education/placeholder.png'),
      description: ['How to deal with failures'],
    },
  ],

// ✅ Unified MOOC + Certifications Section
  certifications: [
    {
      title: 'Your Certificate or Specialization',
      specialization: true,
      file: getAsset('images/education/Certifications/download.svg'),
      certificates: [
        { name: 'Course 1', file: getAsset('images/education/Certifications/download.svg') },
        { name: 'Course 2', file: getAsset('images/education/Certifications/download.svg') },
      ],
    },
    {
      title: 'Another Certificate',
      file: getAsset('images/education/Certifications/download.svg'),
    },
  ],



  // ✅ Experience section updated
  experience: [
    {
      title: 'Photographer',
      cardImage: getAsset('images/experience/placeholder.png'),
      place: 'SWO, BRC',
      time: '(June 2025 – Present)',
      desp: ['Brief responsibility 1', 'Brief responsibility 2'],
    },
    {
      title: 'Theatre Artist',
      cardImage: getAsset('images/experience/placeholder.png'),
      place: 'Zariya Productions',
      time: '(June 2025 – Present)',
      desp: ['Key contribution 1', 'Key contribution 2'],
    },
  ],


  // ✅ Projects section updated
  projects: [
    {
      title: 'Project Title 1',
      cardImage: getAsset('images/project/placeholder.png'),
      description: 'Short description of your project and what it does...',
      Githublink: 'https://github.com/your-username/your-project',
    },
    {
      title: 'Project Title 2',
      cardImage: getAsset('images/project/placeholder.png'),
      description: 'Another project summary...',
      Githublink: 'https://github.com/your-username/another-project',
    },
  ],


  research: [
    {
      title: 'Your Paper or Research Title',
      authors: 'Your Name, Collaborator Name',
      conferences: 'Conference or Journal, Publisher',
      researchYr: 2024,
  image: getAsset('images/research/placeholder.png'),
      citation: {
        vancouver:
          'Author A, Author B. Title of the work. Venue, Year. DOI/URL.',
      },
      abstract:
        'One or two sentences summarizing the contribution...',
      link: 'https://example.com/your-publication',
    },
  ],

  books: [
    {
      title: 'Your Book Title',
      description: 'Short description of your book or resource.',
      image: getAsset('images/book_cover_placeholder.png'),
      link: 'https://example.com/your-book',
    },
  ],

  contact: {
    email: 'abcd123@example.com',
    linkedin: 'https://www.linkedin.com/in/your-linkedin/',
    github: 'https://github.com/your-username',
    googleScholar: 'https://scholar.google.com/citations?user=YOURID',
    orcid: 'https://orcid.org/0000-0000-0000-0000',
  },
};

export default siteConfig;
