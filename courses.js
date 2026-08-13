/* ============================================================
   COURSES INTERACTIVITY & FILTERING SCRIPT - ISMS GLOBAL
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Comprehensive dataset of 30 Postgraduate (PG) and 30 Undergraduate (UG) Courses
  const coursesData = [
    // ------------------ POSTGRADUATE (PG) COURSES ------------------
    {
      id: 1,
      badge: 'Featured',
      badgeClass: 'popular',
      title: 'Master of Business Administration',
      university: 'Leeds Beckett University',
      location: 'Leeds, England, UK',
      destination: 'United Kingdom',
      country: 'UK',
      flag: 'assets/flag_w40_gb.png',
      image: 'assets/img_photo-1541829070764-84a7d30dd3f3.jpg',
      level: 'Postgraduate',
      type: 'Full-time',
      category: 'Business & Management',
      intake: 'October 2026',
      features: 'Internship & Scholarship Availability'
    },
    {
      id: 2,
      badge: 'High Demand',
      badgeClass: 'high-demand',
      title: 'Master of Data Science',
      university: 'University of Birmingham',
      location: 'Birmingham, England, UK',
      destination: 'United Kingdom',
      country: 'UK',
      flag: 'assets/flag_w40_gb.png',
      image: 'assets/img_photo-1517694712202-14dd9538aa97.jpg',
      level: 'Postgraduate',
      type: 'Full-time',
      category: 'Computer Science',
      intake: 'October 2026',
      features: 'Internship & Scholarship Availability'
    },
    {
      id: 3,
      badge: 'Popular',
      badgeClass: 'popular',
      title: 'MSc Cyber Security',
      university: 'Heriot-Watt University Dubai',
      location: 'Dubai, UAE',
      destination: 'Dubai',
      country: 'Dubai, UAE',
      flag: 'assets/flag_w40_ae.png',
      image: 'assets/img_photo-1512453979798-5ea266f8880c.jpg',
      level: 'Postgraduate',
      type: 'Full-time',
      category: 'Computer Science',
      intake: 'September 2026',
      features: 'Internship & Scholarship Availability'
    },
    {
      id: 4,
      badge: null,
      badgeClass: '',
      title: 'MSc Business Analytics',
      university: 'Dublin Business School',
      location: 'Dublin, Ireland',
      destination: 'Ireland',
      country: 'Ireland',
      flag: 'assets/flag_w40_ie.png',
      image: 'assets/img_photo-1562774053-701939374585.jpg',
      level: 'Postgraduate',
      type: 'Full-time',
      category: 'Business & Management',
      intake: 'September 2026',
      features: 'Internship & Scholarship Availability'
    },
    {
      id: 5,
      badge: null,
      badgeClass: '',
      title: 'MSc Computer Science',
      university: 'Griffith College',
      location: 'Dublin, Ireland',
      destination: 'Ireland',
      country: 'Ireland',
      flag: 'assets/flag_w40_ie.png',
      image: 'assets/img_photo-1524178232363-1fb2b075b655.jpg',
      level: 'Postgraduate',
      type: 'Full-time',
      category: 'Computer Science',
      intake: 'September 2026',
      features: 'Scholarship Availability'
    },
    {
      id: 6,
      badge: 'Featured',
      badgeClass: 'popular',
      title: 'MSc International Business',
      university: 'KEDGE Business School',
      location: 'France',
      destination: 'France',
      country: 'France',
      flag: 'assets/flag_w40_fr.png',
      image: 'assets/img_photo-1502602898657-3e91760cbb34.jpg',
      level: 'Postgraduate',
      type: 'Full-time',
      category: 'Business & Management',
      intake: 'September 2026',
      features: 'Scholarship Availability'
    },
    {
      id: 7,
      badge: null,
      badgeClass: '',
      title: 'MSc International Management',
      university: 'SRH University',
      location: 'Berlin, Germany',
      destination: 'Germany',
      country: 'Germany',
      flag: 'assets/flag_w40_de.png',
      image: 'assets/germany.png',
      level: 'Postgraduate',
      type: 'Full-time',
      category: 'Business & Management',
      intake: 'October 2026',
      features: 'Internship & Scholarship Availability'
    },
    {
      id: 8,
      badge: null,
      badgeClass: '',
      title: 'MSc Logistics & Supply Chain Management',
      university: 'Breda University of Applied Sciences',
      location: 'Netherlands',
      destination: 'Netherlands',
      country: 'Netherlands',
      flag: 'assets/flag_w40_nl.png',
      image: 'assets/img_photo-1512470876302-972faa2aa9a4.jpg',
      level: 'Postgraduate',
      type: 'Full-time',
      category: 'Business & Management',
      intake: 'September 2026',
      features: 'Internship & Scholarship Availability'
    },
    {
      id: 9,
      badge: 'Popular',
      badgeClass: 'popular',
      title: 'Master of Business (MBA)',
      university: 'Auckland University of Technology',
      location: 'Auckland, New Zealand',
      destination: 'New Zealand',
      country: 'New Zealand',
      flag: 'assets/flag_w40_nz.png',
      image: 'assets/new_zealand.jpg',
      level: 'Postgraduate',
      type: 'Full-time',
      category: 'Business & Management',
      intake: 'February 2027',
      features: 'Internship & Scholarship Availability'
    },
    {
      id: 10,
      badge: null,
      badgeClass: '',
      title: 'Master of Information Technology',
      university: 'University of Waikato',
      location: 'New Zealand',
      destination: 'New Zealand',
      country: 'New Zealand',
      flag: 'assets/flag_w40_nz.png',
      image: 'assets/img_photo-1517694712202-14dd9538aa97.jpg',
      level: 'Postgraduate',
      type: 'Full-time',
      category: 'Computer Science',
      intake: 'February 2027',
      features: 'Scholarship & Industry Projects'
    },
    {
      id: 11,
      badge: null,
      badgeClass: '',
      title: 'Master of Business Analytics',
      university: 'University of Western Australia',
      location: 'Crawley, Australia',
      destination: 'Australia',
      country: 'Australia',
      flag: 'assets/flag_w40_au.png',
      image: 'assets/australia.png',
      level: 'Postgraduate',
      type: 'Full-time',
      category: 'Business & Management',
      intake: 'Feb 2027',
      features: 'Internship & Scholarship Availability'
    },
    {
      id: 12,
      badge: 'High Demand',
      badgeClass: 'high-demand',
      title: 'Master of Artificial Intelligence',
      university: 'RMIT University',
      location: 'Melbourne, Australia',
      destination: 'Australia',
      country: 'Australia',
      flag: 'assets/flag_w40_au.png',
      image: 'assets/img_photo-1523240795612-9a054b0db644.jpg',
      level: 'Postgraduate',
      type: 'Full-time',
      category: 'Computer Science',
      intake: 'March 2027',
      features: 'Internship & Scholarship Availability'
    },
    {
      id: 13,
      badge: null,
      badgeClass: '',
      title: 'MSc Management',
      university: 'University of Hertfordshire',
      location: 'Hatfield, United Kingdom',
      destination: 'United Kingdom',
      country: 'UK',
      flag: 'assets/flag_w40_gb.png',
      image: 'assets/img_photo-1541829070764-84a7d30dd3f3.jpg',
      level: 'Postgraduate',
      type: 'Full-time',
      category: 'Business & Management',
      intake: 'Sep 2026',
      features: 'Internship & Scholarship Availability'
    },
    {
      id: 14,
      badge: null,
      badgeClass: '',
      title: 'Master of Public Health',
      university: 'Deakin University',
      location: 'Burwood, Australia',
      destination: 'Australia',
      country: 'Australia',
      flag: 'assets/flag_w40_au.png',
      image: 'assets/img_photo-1576091160399-112ba8d25d1d.jpg',
      level: 'Postgraduate',
      type: 'Full-time',
      category: 'Medicine & Health',
      intake: 'Nov 2026',
      features: 'Scholarship & Internship Opportunities'
    },
    {
      id: 15,
      badge: null,
      badgeClass: '',
      title: 'Master of Finance',
      university: 'Deakin University',
      location: 'Burwood, Australia',
      destination: 'Australia',
      country: 'Australia',
      flag: 'assets/flag_w40_au.png',
      image: 'assets/img_photo-1460925895917-afdab827c52f.jpg',
      level: 'Postgraduate',
      type: 'Full-time',
      category: 'Business & Management',
      intake: 'Nov 2026',
      features: 'Scholarship & Internship Opportunities'
    },
    {
      id: 16,
      badge: 'Popular',
      badgeClass: 'popular',
      title: 'Master of Science in Data Science',
      university: 'Northeastern University',
      location: 'Boston, United States',
      destination: 'United States',
      country: 'USA',
      flag: 'assets/flag_w40_us.png',
      image: 'assets/img_photo-1485738422979-f5c462d49f74.jpg',
      level: 'Postgraduate',
      type: 'Full-time',
      category: 'Computer Science',
      intake: 'Sep 2026',
      features: 'Scholarship & Internship Opportunities'
    },
    {
      id: 17,
      badge: null,
      badgeClass: '',
      title: 'Master of Food Science & Technology',
      university: 'RMIT University',
      location: 'Melbourne, Australia',
      destination: 'Australia',
      country: 'Australia',
      flag: 'assets/flag_w40_au.png',
      image: 'assets/img_photo-1523240795612-9a054b0db644.jpg',
      level: 'Postgraduate',
      type: 'Full-time',
      category: 'Medicine & Health',
      intake: 'March 2027',
      features: 'Internship & Scholarship Availability'
    },
    {
      id: 18,
      badge: null,
      badgeClass: '',
      title: 'MSc Strategic Business Management',
      university: 'The University of Law',
      location: 'Leeds, UK',
      destination: 'United Kingdom',
      country: 'UK',
      flag: 'assets/flag_w40_gb.png',
      image: 'assets/img_photo-1589829545856-d10d557cf95f.jpg',
      level: 'Postgraduate',
      type: 'Full-time',
      category: 'Business & Management',
      intake: 'Oct 2026',
      features: 'Internship & Scholarship Availability'
    },
    {
      id: 19,
      badge: null,
      badgeClass: '',
      title: 'Masters in Real Estate Finance',
      university: 'Advantere School of Management',
      location: 'Madrid, Spain',
      destination: 'Spain',
      country: 'Spain',
      flag: 'assets/flag_w40_es.png',
      image: 'assets/img_photo-1454165804606-c3d57bc86b40.jpg',
      level: 'Postgraduate',
      type: 'Full-time',
      category: 'Business & Management',
      intake: 'Sep 2026',
      features: 'Internship & Scholarship Availability'
    },
    {
      id: 20,
      badge: null,
      badgeClass: '',
      title: 'Masters in International Sports Management',
      university: 'European Sport Business School',
      location: 'Valencia, Spain',
      destination: 'Spain',
      country: 'Spain',
      flag: 'assets/flag_w40_es.png',
      image: 'assets/img_photo-1523580494863-6f3031224c94.jpg',
      level: 'Postgraduate',
      type: 'Full-time',
      category: 'Business & Management',
      intake: 'Sep 2026',
      features: 'Internship & Scholarship Availability'
    },
    {
      id: 21,
      badge: null,
      badgeClass: '',
      title: 'Master in Fashion Design',
      university: 'Skema Business School',
      location: 'Paris, France',
      destination: 'France',
      country: 'France',
      flag: 'assets/flag_w40_fr.png',
      image: 'assets/img_photo-1502602898657-3e91760cbb34.jpg',
      level: 'Postgraduate',
      type: 'Full-time',
      category: 'Design & Media',
      intake: 'Sep 2026',
      features: 'Internship & Scholarship Availability'
    },
    {
      id: 22,
      badge: null,
      badgeClass: '',
      title: 'MBA International Business',
      university: 'University of Europe for Applied Sciences (Dubai)',
      location: 'Dubai, UAE',
      destination: 'Dubai',
      country: 'Dubai, UAE',
      flag: 'assets/flag_w40_ae.png',
      image: 'assets/img_photo-1512453979798-5ea266f8880c.jpg',
      level: 'Postgraduate',
      type: 'Full-time',
      category: 'Business & Management',
      intake: 'Sep 2026',
      features: 'Internship & Scholarship Availability'
    },
    {
      id: 23,
      badge: null,
      badgeClass: '',
      title: 'MSc Robotics',
      university: 'Heriot-Watt Dubai University',
      location: 'Dubai, UAE',
      destination: 'Dubai',
      country: 'Dubai, UAE',
      flag: 'assets/flag_w40_ae.png',
      image: 'assets/img_photo-1581092160607-ee22621dd758.jpg',
      level: 'Postgraduate',
      type: 'Full-time',
      category: 'Engineering',
      intake: 'Sep 2026',
      features: 'Internship & Scholarship Availability'
    },
    {
      id: 24,
      badge: null,
      badgeClass: '',
      title: 'MBA Shipping and Logistics',
      university: 'University of Europe for Applied Sciences (Dubai)',
      location: 'Dubai, UAE',
      destination: 'Dubai',
      country: 'Dubai, UAE',
      flag: 'assets/flag_w40_ae.png',
      image: 'assets/img_photo-1512453979798-5ea266f8880c.jpg',
      level: 'Postgraduate',
      type: 'Full-time',
      category: 'Business & Management',
      intake: 'Sep 2026',
      features: 'Internship & Scholarship Availability'
    },
    {
      id: 25,
      badge: 'Popular',
      badgeClass: 'popular',
      title: 'Master in Luxury Management',
      university: 'ESSEC Business School',
      location: 'Cergy, France',
      destination: 'France',
      country: 'France',
      flag: 'assets/flag_w40_fr.png',
      image: 'assets/img_photo-1502602898657-3e91760cbb34.jpg',
      level: 'Postgraduate',
      type: 'Full-time',
      category: 'Business & Management',
      intake: 'Sep 2026',
      features: 'Internship & Scholarship Availability'
    },
    {
      id: 26,
      badge: null,
      badgeClass: '',
      title: 'Masters in Digital Politics and Governance',
      university: 'European School of Political and Social Sciences',
      location: 'Lille, France',
      destination: 'France',
      country: 'France',
      flag: 'assets/flag_w40_fr.png',
      image: 'assets/img_photo-1502602898657-3e91760cbb34.jpg',
      level: 'Postgraduate',
      type: 'Full-time',
      category: 'Law & Governance',
      intake: 'Sep 2026',
      features: 'Internship & Scholarship Availability'
    },
    {
      id: 27,
      badge: null,
      badgeClass: '',
      title: 'M.Sc. Sports Business Management',
      university: 'Leeds Beckett University (LBU)',
      location: 'Leeds, UK',
      destination: 'United Kingdom',
      country: 'UK',
      flag: 'assets/flag_w40_gb.png',
      image: 'assets/img_photo-1541829070764-84a7d30dd3f3.jpg',
      level: 'Postgraduate',
      type: 'Full-time',
      category: 'Business & Management',
      intake: 'Sep 2026',
      features: 'Internship & Scholarship Availability'
    },
    {
      id: 28,
      badge: null,
      badgeClass: '',
      title: 'MSc Accounting and Finance',
      university: 'Leeds Beckett University (LBU)',
      location: 'Leeds, UK',
      destination: 'United Kingdom',
      country: 'UK',
      flag: 'assets/flag_w40_gb.png',
      image: 'assets/img_photo-1541829070764-84a7d30dd3f3.jpg',
      level: 'Postgraduate',
      type: 'Full-time',
      category: 'Business & Management',
      intake: 'Sep 2026',
      features: 'Internship & Scholarship Availability'
    },
    {
      id: 29,
      badge: null,
      badgeClass: '',
      title: 'Master of Laws International Human Rights Law',
      university: 'Leeds Beckett University (LBU)',
      location: 'Leeds, UK',
      destination: 'United Kingdom',
      country: 'UK',
      flag: 'assets/flag_w40_gb.png',
      image: 'assets/img_photo-1589829545856-d10d557cf95f.jpg',
      level: 'Postgraduate',
      type: 'Full-time',
      category: 'Law',
      intake: 'Sep 2026',
      features: 'Internship & Scholarship Availability'
    },
    {
      id: 30,
      badge: null,
      badgeClass: '',
      title: 'MSc International Tourism Management',
      university: 'Leeds Beckett University (LBU)',
      location: 'Leeds, UK',
      destination: 'United Kingdom',
      country: 'UK',
      flag: 'assets/flag_w40_gb.png',
      image: 'assets/img_photo-1541829070764-84a7d30dd3f3.jpg',
      level: 'Postgraduate',
      type: 'Full-time',
      category: 'Business & Management',
      intake: 'Sep 2026',
      features: 'Internship & Scholarship Availability'
    },

    // ------------------ UNDERGRADUATE (UG) COURSES ------------------
    {
      id: 31,
      badge: 'Featured',
      badgeClass: 'popular',
      title: "Bachelor's Degree in Hospitality and Culinary Management",
      university: 'Sant Pol Hospitality & Culinary Business School',
      location: 'Sant Pol de Mar, Spain',
      destination: 'Spain',
      country: 'Spain',
      flag: 'assets/flag_w40_es.png',
      image: 'assets/img_photo-1541829070764-84a7d30dd3f3.jpg',
      level: 'Undergraduate',
      type: 'Full-time',
      category: 'Business & Management',
      intake: 'Sep 2026',
      features: 'Internship & Scholarship Availability'
    },
    {
      id: 32,
      badge: 'High Demand',
      badgeClass: 'high-demand',
      title: 'BSc Computer Science',
      university: 'Coventry University',
      location: 'Coventry, England, UK',
      destination: 'United Kingdom',
      country: 'UK',
      flag: 'assets/flag_w40_gb.png',
      image: 'assets/img_photo-1517694712202-14dd9538aa97.jpg',
      level: 'Undergraduate',
      type: 'Full-time',
      category: 'Computer Science',
      intake: 'September 2026',
      features: 'Placement Year & Scholarship Availability'
    },
    {
      id: 33,
      badge: null,
      badgeClass: '',
      title: 'BBA in International Business',
      university: 'Canadian University Dubai',
      location: 'Dubai, UAE',
      destination: 'Dubai',
      country: 'Dubai, UAE',
      flag: 'assets/flag_w40_ae.png',
      image: 'assets/img_photo-1512453979798-5ea266f8880c.jpg',
      level: 'Undergraduate',
      type: 'Full-time',
      category: 'Business & Management',
      intake: 'September 2026',
      features: 'Scholarship Availability'
    },
    {
      id: 34,
      badge: null,
      badgeClass: '',
      title: 'Bachelor of Business Studies',
      university: 'Maynooth University',
      location: 'Maynooth, Ireland',
      destination: 'Ireland',
      country: 'Ireland',
      flag: 'assets/flag_w40_ie.png',
      image: 'assets/ireland.png',
      level: 'Undergraduate',
      type: 'Full-time',
      category: 'Business & Management',
      intake: 'September 2026',
      features: 'Scholarship & Career Support'
    },
    {
      id: 35,
      badge: null,
      badgeClass: '',
      title: 'Bachelor of International Business',
      university: 'Rennes School of Business',
      location: 'Rennes, France',
      destination: 'France',
      country: 'France',
      flag: 'assets/flag_w40_fr.png',
      image: 'assets/img_photo-1502602898657-3e91760cbb34.jpg',
      level: 'Undergraduate',
      type: 'Full-time',
      category: 'Business & Management',
      intake: 'September 2026',
      features: 'Scholarship Availability'
    },
    {
      id: 36,
      badge: null,
      badgeClass: '',
      title: 'Bachelor of Information Technology',
      university: 'Victoria University of Wellington',
      location: 'Wellington, New Zealand',
      destination: 'New Zealand',
      country: 'New Zealand',
      flag: 'assets/flag_w40_nz.png',
      image: 'assets/new_zealand.jpg',
      level: 'Undergraduate',
      type: 'Full-time',
      category: 'Computer Science',
      intake: 'February 2027',
      features: 'Scholarship & Internship Opportunities'
    },
    {
      id: 37,
      badge: null,
      badgeClass: '',
      title: 'Bachelor of Nursing',
      university: 'Deakin University',
      location: 'Burwood, Australia',
      destination: 'Australia',
      country: 'Australia',
      flag: 'assets/flag_w40_au.png',
      image: 'assets/img_photo-1576091160399-112ba8d25d1d.jpg',
      level: 'Undergraduate',
      type: 'Full-time',
      category: 'Medicine & Health',
      intake: 'Mar 2027',
      features: 'Scholarship & Internship Opportunities'
    },
    {
      id: 38,
      badge: null,
      badgeClass: '',
      title: 'BA (Hons) in Business & Management',
      university: 'Leeds Beckett University',
      location: 'Leeds, UK',
      destination: 'United Kingdom',
      country: 'UK',
      flag: 'assets/flag_w40_gb.png',
      image: 'assets/img_photo-1541829070764-84a7d30dd3f3.jpg',
      level: 'Undergraduate',
      type: 'Full-time',
      category: 'Business & Management',
      intake: 'Sep 2026',
      features: 'Internship & Scholarship Availability'
    },
    {
      id: 39,
      badge: null,
      badgeClass: '',
      title: 'BA (Hons) Business Management & Leadership',
      university: 'Coventry University',
      location: 'London, UK',
      destination: 'United Kingdom',
      country: 'UK',
      flag: 'assets/flag_w40_gb.png',
      image: 'assets/uk-big-ben.jpg',
      level: 'Undergraduate',
      type: 'Full-time',
      category: 'Business & Management',
      intake: 'Sep 2026',
      features: 'Internship & Scholarship Availability'
    },
    {
      id: 40,
      badge: 'Popular',
      badgeClass: 'popular',
      title: 'Bachelor of Engineering',
      university: 'Monash University',
      location: 'Australia',
      destination: 'Australia',
      country: 'Australia',
      flag: 'assets/flag_w40_au.png',
      image: 'assets/australia.png',
      level: 'Undergraduate',
      type: 'Full-time',
      category: 'Engineering',
      intake: 'Sep 2027',
      features: 'Internship & Scholarship Availability'
    },
    {
      id: 41,
      badge: null,
      badgeClass: '',
      title: 'Bachelor of Biomedical Science',
      university: 'Swinburne University of Technology',
      location: 'Hawthorn, Australia',
      destination: 'Australia',
      country: 'Australia',
      flag: 'assets/flag_w40_au.png',
      image: 'assets/img_photo-1523240795612-9a054b0db644.jpg',
      level: 'Undergraduate',
      type: 'Full-time',
      category: 'Medicine & Health',
      intake: 'Aug 2026',
      features: 'Internship & Scholarship Availability'
    },
    {
      id: 42,
      badge: null,
      badgeClass: '',
      title: 'Bachelor of Biomedical Science',
      university: 'Deakin University',
      location: 'Burwood, Australia',
      destination: 'Australia',
      country: 'Australia',
      flag: 'assets/flag_w40_au.png',
      image: 'assets/img_photo-1576091160399-112ba8d25d1d.jpg',
      level: 'Undergraduate',
      type: 'Full-time',
      category: 'Medicine & Health',
      intake: 'Mar 2027',
      features: 'Internship & Scholarship Availability'
    },
    {
      id: 43,
      badge: null,
      badgeClass: '',
      title: 'Bachelor of Commerce',
      university: 'University of New South Wales, Sydney',
      location: 'Kensington, Australia',
      destination: 'Australia',
      country: 'Australia',
      flag: 'assets/flag_w40_au.png',
      image: 'assets/img_photo-1506973035872-a4ec16b8e8d9.jpg',
      level: 'Undergraduate',
      type: 'Full-time',
      category: 'Business & Management',
      intake: 'Sept 2026',
      features: 'Internship & Scholarship Availability'
    },
    {
      id: 44,
      badge: null,
      badgeClass: '',
      title: 'Bachelor of Health Sciences',
      university: 'Deakin University',
      location: 'Burwood, Australia',
      destination: 'Australia',
      country: 'Australia',
      flag: 'assets/flag_w40_au.png',
      image: 'assets/img_photo-1576091160399-112ba8d25d1d.jpg',
      level: 'Undergraduate',
      type: 'Full-time',
      category: 'Medicine & Health',
      intake: 'Nov 2026',
      features: 'Internship & Scholarship Availability'
    },
    {
      id: 45,
      badge: null,
      badgeClass: '',
      title: 'Bachelor of Law LLB (Hons)',
      university: 'University of Hertfordshire',
      location: 'Hatfield, United Kingdom',
      destination: 'United Kingdom',
      country: 'UK',
      flag: 'assets/flag_w40_gb.png',
      image: 'assets/img_photo-1589829545856-d10d557cf95f.jpg',
      level: 'Undergraduate',
      type: 'Full-time',
      category: 'Law',
      intake: 'Sep 2026',
      features: 'Internship & Scholarship Availability'
    },
    {
      id: 46,
      badge: null,
      badgeClass: '',
      title: 'Bachelor of Psychology',
      university: 'Macquarie University',
      location: 'Mt Helen, Australia',
      destination: 'Australia',
      country: 'Australia',
      flag: 'assets/flag_w40_au.png',
      image: 'assets/img_photo-1523580494863-6f3031224c94.jpg',
      level: 'Undergraduate',
      type: 'Full-time',
      category: 'Medicine & Health',
      intake: 'Mar 2027',
      features: 'Internship & Scholarship Availability'
    },
    {
      id: 47,
      badge: null,
      badgeClass: '',
      title: "Bachelor's Degree in Fashion Design",
      university: 'ESMOD',
      location: 'Paris, France',
      destination: 'France',
      country: 'France',
      flag: 'assets/flag_w40_fr.png',
      image: 'assets/img_photo-1502602898657-3e91760cbb34.jpg',
      level: 'Undergraduate',
      type: 'Full-time',
      category: 'Design & Media',
      intake: 'Sep 2026',
      features: 'Internship & Scholarship Availability'
    },
    {
      id: 48,
      badge: null,
      badgeClass: '',
      title: 'BSc Sport & Event Management',
      university: 'University of Applied Sciences – Europe, Dubai',
      location: 'Dubai, United Arab Emirates',
      destination: 'Dubai',
      country: 'Dubai, UAE',
      flag: 'assets/flag_w40_ae.png',
      image: 'assets/img_photo-1512453979798-5ea266f8880c.jpg',
      level: 'Undergraduate',
      type: 'Full-time',
      category: 'Business & Management',
      intake: 'September 2026',
      features: 'Internship & Scholarship Availability'
    },
    {
      id: 49,
      badge: null,
      badgeClass: '',
      title: 'LLB Honours in Law with International Relations',
      university: 'Middlesex University, Dubai',
      location: 'Dubai, United Arab Emirates',
      destination: 'Dubai',
      country: 'Dubai, UAE',
      flag: 'assets/flag_w40_ae.png',
      image: 'assets/img_photo-1589829545856-d10d557cf95f.jpg',
      level: 'Undergraduate',
      type: 'Full-time',
      category: 'Law',
      intake: 'September 2026',
      features: 'Internship & Scholarship Availability'
    },
    {
      id: 50,
      badge: null,
      badgeClass: '',
      title: "Bachelor's Degree in Global Marketing Management",
      university: 'ESIC Business & Marketing School',
      location: 'Valencia, Spain',
      destination: 'Spain',
      country: 'Spain',
      flag: 'assets/flag_w40_es.png',
      image: 'assets/img_photo-1454165804606-c3d57bc86b40.jpg',
      level: 'Undergraduate',
      type: 'Full-time',
      category: 'Business & Management',
      intake: 'September 2026',
      features: 'Internship & Scholarship Availability'
    },
    {
      id: 51,
      badge: 'High Demand',
      badgeClass: 'high-demand',
      title: 'BSc Software Engineering',
      university: 'University of Applied Sciences – Europe, Dubai',
      location: 'Dubai, United Arab Emirates',
      destination: 'Dubai',
      country: 'Dubai, UAE',
      flag: 'assets/flag_w40_ae.png',
      image: 'assets/img_photo-1517694712202-14dd9538aa97.jpg',
      level: 'Undergraduate',
      type: 'Full-time',
      category: 'Computer Science',
      intake: 'Sept 2026',
      features: 'Internship & Scholarship Availability'
    },
    {
      id: 52,
      badge: null,
      badgeClass: '',
      title: 'LLB Honours Law',
      university: 'Middlesex University, Dubai',
      location: 'Dubai, United Arab Emirates',
      destination: 'Dubai',
      country: 'Dubai, UAE',
      flag: 'assets/flag_w40_ae.png',
      image: 'assets/img_photo-1589829545856-d10d557cf95f.jpg',
      level: 'Undergraduate',
      type: 'Full-time',
      category: 'Law',
      intake: 'Sept 2026',
      features: 'Internship & Scholarship Availability'
    },
    {
      id: 53,
      badge: 'Popular',
      badgeClass: 'popular',
      title: 'Bachelor of Science in Artificial Intelligence',
      university: 'Canadian University Dubai',
      location: 'Dubai, United Arab Emirates',
      destination: 'Dubai',
      country: 'Dubai, UAE',
      flag: 'assets/flag_w40_ae.png',
      image: 'assets/img_photo-1512453979798-5ea266f8880c.jpg',
      level: 'Undergraduate',
      type: 'Full-time',
      category: 'Computer Science',
      intake: 'Sept 2026',
      features: 'Internship & Scholarship Availability'
    },
    {
      id: 54,
      badge: null,
      badgeClass: '',
      title: 'BSc Honours in Psychology with Criminology',
      university: 'Middlesex University, Dubai',
      location: 'Dubai, United Arab Emirates',
      destination: 'Dubai',
      country: 'Dubai, UAE',
      flag: 'assets/flag_w40_ae.png',
      image: 'assets/img_photo-1523580494863-6f3031224c94.jpg',
      level: 'Undergraduate',
      type: 'Full-time',
      category: 'Medicine & Health',
      intake: 'Sept 2026',
      features: 'Internship & Scholarship Availability'
    },
    {
      id: 55,
      badge: null,
      badgeClass: '',
      title: 'BSc (Hons) Business Computing and Information Systems',
      university: 'C3S Business School, Barcelona',
      location: 'Barcelona, Spain',
      destination: 'Spain',
      country: 'Spain',
      flag: 'assets/flag_w40_es.png',
      image: 'assets/img_photo-1517694712202-14dd9538aa97.jpg',
      level: 'Undergraduate',
      type: 'Full-time',
      category: 'Computer Science',
      intake: 'Sept 2026',
      features: 'Internship & Scholarship Availability'
    },
    {
      id: 56,
      badge: null,
      badgeClass: '',
      title: 'BA (Hons) Accounting and Finance',
      university: 'Leeds Beckett University (LBU)',
      location: 'Leeds, UK',
      destination: 'United Kingdom',
      country: 'UK',
      flag: 'assets/flag_w40_gb.png',
      image: 'assets/img_photo-1541829070764-84a7d30dd3f3.jpg',
      level: 'Undergraduate',
      type: 'Full-time',
      category: 'Business & Management',
      intake: 'Sep 2026',
      features: 'Internship & Scholarship Availability'
    },
    {
      id: 57,
      badge: null,
      badgeClass: '',
      title: 'BSc (Hons) Human Resource Management and Business',
      university: 'Leeds Beckett University (LBU)',
      location: 'Leeds, UK',
      destination: 'United Kingdom',
      country: 'UK',
      flag: 'assets/flag_w40_gb.png',
      image: 'assets/img_photo-1541829070764-84a7d30dd3f3.jpg',
      level: 'Undergraduate',
      type: 'Full-time',
      category: 'Business & Management',
      intake: 'Sep 2026',
      features: 'Internship & Scholarship Availability'
    },
    {
      id: 58,
      badge: null,
      badgeClass: '',
      title: 'BA (Hons) Marketing and Public Relations',
      university: 'Leeds Beckett University (LBU)',
      location: 'Leeds, UK',
      destination: 'United Kingdom',
      country: 'UK',
      flag: 'assets/flag_w40_gb.png',
      image: 'assets/img_photo-1541829070764-84a7d30dd3f3.jpg',
      level: 'Undergraduate',
      type: 'Full-time',
      category: 'Business & Management',
      intake: 'Sep 2026',
      features: 'Internship & Scholarship Availability'
    },
    {
      id: 59,
      badge: null,
      badgeClass: '',
      title: 'Bachelor in Entrepreneurship',
      university: 'Hult International Business School- Dubai campus',
      location: 'Dubai, UAE',
      destination: 'Dubai',
      country: 'Dubai, UAE',
      flag: 'assets/flag_w40_ae.png',
      image: 'assets/img_photo-1512453979798-5ea266f8880c.jpg',
      level: 'Undergraduate',
      type: 'Full-time',
      category: 'Business & Management',
      intake: 'September 2026',
      features: 'Internship & Scholarship Availability'
    },
    {
      id: 60,
      badge: 'Popular',
      badgeClass: 'popular',
      title: 'Bachelor of Business Administration (BBA)',
      university: 'ISMS Global Partner University',
      location: 'London, UK',
      destination: 'United Kingdom',
      country: 'UK',
      flag: 'assets/flag_w40_gb.png',
      image: 'assets/uk.png',
      level: 'Undergraduate',
      type: 'Full-time',
      category: 'Business & Management',
      intake: 'September 2026',
      features: 'Internship & Scholarship Availability'
    }
  ];

  // DOM Elements
  const searchInput = document.getElementById('heroSearchInput');
  const destSelect = document.getElementById('heroDestSelect');
  const levelSelect = document.getElementById('heroLevelSelect');
  const typeSelect = document.getElementById('heroTypeSelect');
  const searchSubmitBtn = document.getElementById('btnSearchSubmit');
  const applyFiltersBtn = document.getElementById('btnApplyFilters');
  const clearAllBtn = document.getElementById('btnClearAll');

  const gridViewBtn = document.getElementById('btnGridView');
  const listViewBtn = document.getElementById('btnListView');
  const cardsContainer = document.getElementById('courseCardsContainer');
  const resultsCounter = document.getElementById('resultsCountText');

  const fallbackImage = 'assets/img_photo-1541829070764-84a7d30dd3f3.jpg';

  // Dynamic Render Function
  const itemsPerPage = 8;
  let currentPage = 1;
  let currentFilteredData = coursesData;

  const paginationContainer = document.querySelector('.pagination-container');

  function renderCourses(data, page = 1) {
    if (!cardsContainer) return;
    currentFilteredData = data;
    currentPage = page;
    cardsContainer.innerHTML = '';

    if (data.length === 0) {
      cardsContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 48px 20px; background: #fff; border-radius: 16px; border: 1px solid #E2E8F0;">
          <i class="fa-solid fa-graduation-cap" style="font-size: 42px; color: #94A3B8; margin-bottom: 12px;"></i>
          <h3 style="font-size: 18px; color: #1E293B; margin-bottom: 6px;">No Matching Courses Found</h3>
          <p style="font-size: 14px; color: #64748B;">Try adjusting your search terms or filters to find the right program for you.</p>
        </div>
      `;
      if (resultsCounter) resultsCounter.textContent = `Showing 0 of ${coursesData.length} Courses`;
      if (paginationContainer) paginationContainer.style.display = 'none';
      return;
    }

    const totalPages = Math.ceil(data.length / itemsPerPage);
    if (currentPage > totalPages) currentPage = totalPages;
    if (currentPage < 1) currentPage = 1;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const pageItems = data.slice(startIndex, startIndex + itemsPerPage);

    pageItems.forEach(c => {
      const card = document.createElement('div');
      card.className = 'course-card-item';
      card.setAttribute('data-title', c.title);
      card.setAttribute('data-category', c.category);
      card.setAttribute('data-uni', c.university);
      card.setAttribute('data-dest', c.destination);
      card.setAttribute('data-level', c.level);
      card.setAttribute('data-type', c.type);

      const badgeHTML = c.badge ? `<span class="card-badge-pill ${c.badgeClass}">${c.badge}</span>` : '';

      card.innerHTML = `
        <div class="card-image-box">
          ${badgeHTML}
          <img src="${c.image}" alt="${c.university}" loading="lazy" onerror="this.onerror=null; this.src='${fallbackImage}';">
        </div>
        <div class="card-body-content">
          <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 6px;">
            <span class="course-stream-category">${c.category}</span>
            <span style="font-size: 11px; font-weight: 700; background: #EEF2FF; color: #0D47D8; padding: 2px 8px; border-radius: 12px;">${c.level}</span>
          </div>
          <h3 class="course-card-title">${c.title}</h3>
          <div class="course-uni-row">
            <span class="uni-name-text">${c.university}</span>
            <span class="country-flag-badge">
              <img src="${c.flag}" alt="${c.country}"> ${c.country}
            </span>
          </div>
          <div style="font-size: 12px; color: #64748B; margin-bottom: 6px; display: flex; align-items: center; gap: 6px;">
            <i class="fa-solid fa-location-dot" style="color: #0D47D8;"></i> ${c.location}
          </div>
          <div style="font-size: 11.5px; color: #059669; font-weight: 600; margin-bottom: 10px; display: flex; align-items: center; gap: 6px;">
            <i class="fa-solid fa-award"></i> ${c.features}
          </div>
          <div class="course-duration-row" style="display: flex; justify-content: space-between; align-items: center;">
            <span><i class="fa-regular fa-calendar"></i> Intake: ${c.intake}</span>
          </div>
          <div class="card-actions-row" style="margin-top: 14px;">
            <a href="course-details.html" class="btn-view-details">View Details</a>
            <button type="button" class="btn-bookmark-card" aria-label="Bookmark Course">
              <i class="fa-regular fa-bookmark"></i>
            </button>
          </div>
        </div>
      `;
      cardsContainer.appendChild(card);
    });

    if (resultsCounter) {
      const startNum = startIndex + 1;
      const endNum = Math.min(startIndex + itemsPerPage, data.length);
      resultsCounter.textContent = `Showing ${startNum}-${endNum} of ${data.length} Courses`;
    }

    renderPagination(totalPages);
  }

  function renderPagination(totalPages) {
    if (!paginationContainer) return;
    paginationContainer.innerHTML = '';

    if (totalPages <= 1) {
      paginationContainer.style.display = 'none';
      return;
    }

    paginationContainer.style.display = 'flex';

    // Previous Button
    const prevBtn = document.createElement('button');
    prevBtn.type = 'button';
    prevBtn.className = 'page-nav-btn';
    prevBtn.setAttribute('aria-label', 'Previous Page');
    prevBtn.innerHTML = `<i class="fa-solid fa-chevron-left"></i>`;
    if (currentPage === 1) prevBtn.disabled = true;
    prevBtn.addEventListener('click', () => {
      if (currentPage > 1) {
        renderCourses(currentFilteredData, currentPage - 1);
        scrollToListing();
      }
    });
    paginationContainer.appendChild(prevBtn);

    // Number Buttons
    for (let i = 1; i <= totalPages; i++) {
      if (totalPages > 7) {
        if (i > 3 && i < totalPages - 1 && Math.abs(i - currentPage) > 1) {
          if (i === 4 && currentPage > 4) {
            const dots = document.createElement('span');
            dots.className = 'page-dots';
            dots.textContent = '...';
            paginationContainer.appendChild(dots);
          }
          continue;
        }
      }

      const numBtn = document.createElement('button');
      numBtn.type = 'button';
      numBtn.className = `page-nav-btn ${i === currentPage ? 'active' : ''}`;
      numBtn.textContent = i;
      numBtn.addEventListener('click', () => {
        renderCourses(currentFilteredData, i);
        scrollToListing();
      });
      paginationContainer.appendChild(numBtn);
    }

    // Next Button
    const nextBtn = document.createElement('button');
    nextBtn.type = 'button';
    nextBtn.className = 'page-nav-btn';
    nextBtn.setAttribute('aria-label', 'Next Page');
    nextBtn.innerHTML = `<i class="fa-solid fa-chevron-right"></i>`;
    if (currentPage === totalPages) nextBtn.disabled = true;
    nextBtn.addEventListener('click', () => {
      if (currentPage < totalPages) {
        renderCourses(currentFilteredData, currentPage + 1);
        scrollToListing();
      }
    });
    paginationContainer.appendChild(nextBtn);
  }

  function scrollToListing() {
    const listingElem = document.querySelector('.courses-listing-content');
    if (listingElem) {
      listingElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Initial Render of All 60 Courses
  renderCourses(coursesData);

  // Filter application logic
  function filterCourses() {
    const query = (searchInput ? searchInput.value : '').toLowerCase().trim();
    const destVal = destSelect ? destSelect.value : 'all';
    const levelVal = levelSelect ? levelSelect.value : 'all';
    const typeVal = typeSelect ? typeSelect.value : 'all';

    // Checkbox values
    const checkedDests = Array.from(document.querySelectorAll('input[name="dest_filter"]:checked')).map(cb => cb.value);
    const checkedLevels = Array.from(document.querySelectorAll('input[name="level_filter"]:checked')).map(cb => cb.value);
    const checkedTypes = Array.from(document.querySelectorAll('input[name="type_filter"]:checked')).map(cb => cb.value);
    const checkedSubjects = Array.from(document.querySelectorAll('input[name="subject_filter"]:checked')).map(cb => cb.value);

    const filtered = coursesData.filter(c => {
      let matchSearch = !query || c.title.toLowerCase().includes(query) || c.category.toLowerCase().includes(query) || c.university.toLowerCase().includes(query) || c.location.toLowerCase().includes(query);
      let matchDest = destVal === 'all' || c.destination === destVal || c.country === destVal;
      let matchLevel = levelVal === 'all' || c.level === levelVal;
      let matchType = typeVal === 'all' || c.type === typeVal;

      // Checkbox matches
      let matchCbDest = checkedDests.length === 0 || checkedDests.includes('all') || checkedDests.includes(c.destination) || checkedDests.includes(c.country);
      let matchCbLevel = checkedLevels.length === 0 || checkedLevels.includes('all') || checkedLevels.includes(c.level);
      let matchCbType = checkedTypes.length === 0 || checkedTypes.includes('all') || checkedTypes.includes(c.type);
      let matchCbSubject = checkedSubjects.length === 0 || checkedSubjects.includes('all') || checkedSubjects.includes(c.category);

      return matchSearch && matchDest && matchLevel && matchType && matchCbDest && matchCbLevel && matchCbType && matchCbSubject;
    });

    renderCourses(filtered);
  }

  // Bookmark toggle
  document.addEventListener('click', (e) => {
    const bookmarkBtn = e.target.closest('.btn-bookmark-card');
    if (bookmarkBtn) {
      bookmarkBtn.classList.toggle('saved');
      const icon = bookmarkBtn.querySelector('i');
      if (icon) {
        if (bookmarkBtn.classList.contains('saved')) {
          icon.className = 'fa-solid fa-bookmark';
        } else {
          icon.className = 'fa-regular fa-bookmark';
        }
      }
    }
  });

  // Grid / List View Toggle
  if (gridViewBtn && listViewBtn && cardsContainer) {
    gridViewBtn.addEventListener('click', () => {
      gridViewBtn.classList.add('active');
      listViewBtn.classList.remove('active');
      cardsContainer.classList.remove('list-view');
    });

    listViewBtn.addEventListener('click', () => {
      listViewBtn.classList.add('active');
      gridViewBtn.classList.remove('active');
      cardsContainer.classList.add('list-view');
    });
  }

  // Show More / Show Less Toggle
  document.querySelectorAll('.btn-show-more').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const parentList = btn.parentElement;
      const extra = parentList ? parentList.querySelector('.extra-options') : null;
      if (extra) {
        if (extra.style.display === 'none' || !extra.style.display) {
          extra.style.display = 'flex';
          btn.textContent = '- Show Less';
        } else {
          extra.style.display = 'none';
          btn.textContent = '+ Show More';
        }
      }
    });
  });

  // Filter Sidebar Accordion Toggles
  document.querySelectorAll('.filter-title-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
      const parentGroup = toggle.parentElement;
      const optionsList = parentGroup.querySelector('.filter-options-list');
      const icon = toggle.querySelector('i');

      if (optionsList && optionsList.style.display === 'none') {
        optionsList.style.display = 'flex';
        if (icon) icon.className = 'fa-solid fa-chevron-up';
      } else if (optionsList) {
        optionsList.style.display = 'none';
        if (icon) icon.className = 'fa-solid fa-chevron-down';
      }
    });
  });

  // Tab switching
  const tabPills = document.querySelectorAll('.tab-pill');
  tabPills.forEach(pill => {
    pill.addEventListener('click', () => {
      tabPills.forEach(p => {
        p.classList.remove('active');
        p.classList.add('outline');
      });
      pill.classList.add('active');
      pill.classList.remove('outline');
    });
  });

  // Trigger search on submit or input
  if (searchSubmitBtn) searchSubmitBtn.addEventListener('click', filterCourses);
  if (applyFiltersBtn) applyFiltersBtn.addEventListener('click', filterCourses);
  if (searchInput) searchInput.addEventListener('keyup', filterCourses);
  if (destSelect) destSelect.addEventListener('change', filterCourses);
  if (levelSelect) levelSelect.addEventListener('change', filterCourses);
  if (typeSelect) typeSelect.addEventListener('change', filterCourses);

  // Clear all filters
  if (clearAllBtn) {
    clearAllBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (searchInput) searchInput.value = '';
      if (destSelect) destSelect.value = 'all';
      if (levelSelect) levelSelect.value = 'all';
      if (typeSelect) typeSelect.value = 'all';

      document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
        cb.checked = cb.value === 'all';
      });

      document.querySelectorAll('.extra-options').forEach(extra => {
        extra.style.display = 'none';
      });
      document.querySelectorAll('.btn-show-more').forEach(btn => {
        btn.textContent = '+ Show More';
      });

      renderCourses(coursesData);
    });
  }
});
