import { Article, Category } from '../types';

export const categories: Category[] = [
  { id: 'technology', name: 'Technology', icon: 'Smartphone', color: 'bg-blue-500' },
  { id: 'business', name: 'Business', icon: 'TrendingUp', color: 'bg-green-500' },
  { id: 'science', name: 'Science', icon: 'Atom', color: 'bg-purple-500' },
  { id: 'health', name: 'Health', icon: 'Heart', color: 'bg-red-500' },
  { id: 'sports', name: 'Sports', icon: 'Trophy', color: 'bg-orange-500' },
  { id: 'entertainment', name: 'Entertainment', icon: 'Film', color: 'bg-pink-500' },
  { id: 'world', name: 'World News', icon: 'Globe', color: 'bg-indigo-500' },
  { id: 'politics', name: 'Politics', icon: 'Users', color: 'bg-gray-600' },
];

export const articles: Article[] = [
  {
    id: '1',
    title: 'Revolutionary AI Breakthrough Changes Everything We Know About Machine Learning',
    summary: 'Scientists at leading tech companies have developed a new AI architecture that demonstrates unprecedented reasoning capabilities, potentially transforming how we approach artificial intelligence.',
    category: 'technology',
    author: 'Sarah Chen',
    publishedAt: '2025-01-09T10:30:00Z',
    imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '5 min read',
    source: 'TechCrunch'
  },
  {
    id: '2',
    title: 'Global Markets Rally as Economic Indicators Show Strong Recovery',
    summary: 'Stock markets worldwide are experiencing significant gains following positive economic data releases, with tech and renewable energy sectors leading the charge.',
    category: 'business',
    author: 'Michael Rodriguez',
    publishedAt: '2025-01-09T09:15:00Z',
    imageUrl: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '3 min read',
    source: 'Financial Times'
  },
  {
    id: '3',
    title: 'New Cancer Treatment Shows Remarkable Success in Clinical Trials',
    summary: 'A groundbreaking immunotherapy treatment has shown a 85% success rate in treating previously incurable forms of cancer, offering new hope to millions of patients worldwide.',
    category: 'health',
    author: 'Dr. Emily Watson',
    publishedAt: '2025-01-09T08:45:00Z',
    imageUrl: 'https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '7 min read',
    source: 'Nature Medicine'
  },
  {
    id: '4',
    title: 'Space Discovery Reveals Potentially Habitable Exoplanets',
    summary: 'NASA\'s latest telescope data has identified three Earth-like planets within the habitable zone of nearby stars, advancing our search for extraterrestrial life.',
    category: 'science',
    author: 'Dr. James Parker',
    publishedAt: '2025-01-09T07:20:00Z',
    imageUrl: 'https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '6 min read',
    source: 'Scientific American'
  },
  {
    id: '5',
    title: 'Championship Finals Draw Record-Breaking Global Audience',
    summary: 'The latest international tournament finale attracted over 1.2 billion viewers worldwide, setting new records for sports broadcasting and digital streaming platforms.',
    category: 'sports',
    author: 'Lisa Thompson',
    publishedAt: '2025-01-09T06:30:00Z',
    imageUrl: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '4 min read',
    source: 'ESPN'
  },
  {
    id: '6',
    title: 'Streaming Giant Announces Revolutionary Content Creation Platform',
    summary: 'A major entertainment company unveiled an AI-powered platform that will allow creators to produce professional-quality content with minimal resources.',
    category: 'entertainment',
    author: 'Alex Morgan',
    publishedAt: '2025-01-09T05:45:00Z',
    imageUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '5 min read',
    source: 'Variety'
  },
  {
    id: '7',
    title: 'International Climate Summit Reaches Historic Agreement',
    summary: 'World leaders have signed a comprehensive climate accord featuring unprecedented commitments to renewable energy transition and carbon reduction targets.',
    category: 'world',
    author: 'Maria Gonzalez',
    publishedAt: '2025-01-09T04:15:00Z',
    imageUrl: 'https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '8 min read',
    source: 'BBC News'
  },
  {
    id: '8',
    title: 'Quantum Computing Milestone Achieved by Research Consortium',
    summary: 'A collaborative team of universities and tech companies has demonstrated quantum supremacy in solving complex optimization problems, marking a new era in computing.',
    category: 'technology',
    author: 'Dr. Robert Kim',
    publishedAt: '2025-01-09T03:30:00Z',
    imageUrl: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '6 min read',
    source: 'MIT Technology Review'
  },
  {
    id: '9',
    title: 'Renewable Energy Sector Attracts Record Investment Levels',
    summary: 'Green energy projects worldwide have received over $500 billion in funding this year, signaling a major shift towards sustainable infrastructure development.',
    category: 'business',
    author: 'Jennifer Lee',
    publishedAt: '2025-01-09T02:45:00Z',
    imageUrl: 'https://images.pexels.com/photos/9875428/pexels-photo-9875428.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '4 min read',
    source: 'Bloomberg'
  },
  {
    id: '10',
    title: 'Mental Health Awareness Campaign Launches Globally',
    summary: 'A comprehensive mental health initiative backed by major healthcare organizations aims to provide support resources to over 100 million people worldwide.',
    category: 'health',
    author: 'Dr. Amanda Foster',
    publishedAt: '2025-01-09T01:20:00Z',
    imageUrl: 'https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '5 min read',
    source: 'Health Affairs'
  },
  {
    id: '11',
    title: 'New Legislative Framework Addresses Digital Privacy Rights',
    summary: 'Lawmakers have introduced comprehensive legislation that strengthens online privacy protections and gives users greater control over their personal data.',
    category: 'politics',
    author: 'Thomas Wilson',
    publishedAt: '2025-01-08T23:30:00Z',
    imageUrl: 'https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '7 min read',
    source: 'Politico'
  },
  {
    id: '12',
    title: 'Archaeological Discovery Rewrites Ancient History',
    summary: 'Recent excavations have uncovered artifacts that challenge our understanding of early civilizations, providing new insights into human development and cultural exchange.',
    category: 'science',
    author: 'Dr. Catherine Adams',
    publishedAt: '2025-01-08T22:15:00Z',
    imageUrl: 'https://images.pexels.com/photos/8926537/pexels-photo-8926537.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '6 min read',
    source: 'National Geographic'
  }
];