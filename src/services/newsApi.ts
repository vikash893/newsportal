import { Article } from '../types';

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = import.meta.env.VITE_NEWS_API_BASE_URL;

if (!API_KEY) {
  console.warn('News API key not found. Please add VITE_NEWS_API_KEY to your .env file');
}

interface NewsApiArticle {
  title: string;
  description: string;
  author: string;
  publishedAt: string;
  urlToImage: string;
  source: {
    name: string;
  };
  url: string;
}

interface NewsApiResponse {
  status: string;
  totalResults: number;
  articles: NewsApiArticle[];
}

const categoryMapping: Record<string, string> = {
  'technology': 'technology',
  'business': 'business',
  'science': 'science',
  'health': 'health',
  'sports': 'sports',
  'entertainment': 'entertainment',
  'world': 'general',
  'politics': 'general'
};

export class NewsApiService {
  private static instance: NewsApiService;
  private cache: Map<string, { data: Article[]; timestamp: number }> = new Map();
  private readonly CACHE_DURATION = 10 * 60 * 1000; // 10 minutes

  static getInstance(): NewsApiService {
    if (!NewsApiService.instance) {
      NewsApiService.instance = new NewsApiService();
    }
    return NewsApiService.instance;
  }

  private generateReadTime(description: string): string {
    const wordsPerMinute = 200;
    const wordCount = description ? description.split(' ').length : 100;
    const readTime = Math.max(1, Math.ceil(wordCount / wordsPerMinute));
    return `${readTime} min read`;
  }

  private transformArticle(apiArticle: NewsApiArticle, category: string): Article {
    return {
      id: `${apiArticle.url}-${Date.now()}`,
      title: apiArticle.title || 'Untitled Article',
      summary: apiArticle.description || 'No description available.',
      category: category,
      author: apiArticle.author || 'Unknown Author',
      publishedAt: apiArticle.publishedAt,
      imageUrl: apiArticle.urlToImage || 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: this.generateReadTime(apiArticle.description),
      source: apiArticle.source.name || 'Unknown Source',
      url: apiArticle.url
    };
  }

  private isCacheValid(cacheKey: string): boolean {
    const cached = this.cache.get(cacheKey);
    if (!cached) return false;
    return Date.now() - cached.timestamp < this.CACHE_DURATION;
  }

  async fetchArticlesByCategory(category: string, pageSize: number = 20): Promise<Article[]> {
    if (!API_KEY) {
      throw new Error('News API key is required. Please add VITE_NEWS_API_KEY to your .env file');
    }

    const cacheKey = `${category}-${pageSize}`;
    
    // Check cache first
    if (this.isCacheValid(cacheKey)) {
      return this.cache.get(cacheKey)!.data;
    }

    try {
      const apiCategory = categoryMapping[category] || 'general';
      const url = `${BASE_URL}/top-headlines?category=${apiCategory}&pageSize=${pageSize}&apiKey=${API_KEY}`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Invalid API key. Please check your News API key.');
        }
        if (response.status === 429) {
          throw new Error('API rate limit exceeded. Please try again later.');
        }
        throw new Error(`API request failed: ${response.statusText}`);
      }

      const data: NewsApiResponse = await response.json();
      
      if (data.status !== 'ok') {
        throw new Error('API returned an error status');
      }

      const articles = data.articles
        .filter(article => article.title && article.description && article.title !== '[Removed]')
        .map(article => this.transformArticle(article, category));

      // Cache the results
      this.cache.set(cacheKey, {
        data: articles,
        timestamp: Date.now()
      });

      return articles;
    } catch (error) {
      console.error(`Error fetching articles for category ${category}:`, error);
      throw error;
    }
  }

  async fetchArticlesByQuery(query: string, pageSize: number = 20): Promise<Article[]> {
    if (!API_KEY) {
      throw new Error('News API key is required. Please add VITE_NEWS_API_KEY to your .env file');
    }

    const cacheKey = `search-${query}-${pageSize}`;
    
    // Check cache first
    if (this.isCacheValid(cacheKey)) {
      return this.cache.get(cacheKey)!.data;
    }

    try {
      const url = `${BASE_URL}/everything?q=${encodeURIComponent(query)}&pageSize=${pageSize}&sortBy=publishedAt&apiKey=${API_KEY}`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Invalid API key. Please check your News API key.');
        }
        if (response.status === 429) {
          throw new Error('API rate limit exceeded. Please try again later.');
        }
        throw new Error(`API request failed: ${response.statusText}`);
      }

      const data: NewsApiResponse = await response.json();
      
      if (data.status !== 'ok') {
        throw new Error('API returned an error status');
      }

      const articles = data.articles
        .filter(article => article.title && article.description && article.title !== '[Removed]')
        .map(article => this.transformArticle(article, 'general'));

      // Cache the results
      this.cache.set(cacheKey, {
        data: articles,
        timestamp: Date.now()
      });

      return articles;
    } catch (error) {
      console.error(`Error searching articles for query ${query}:`, error);
      throw error;
    }
  }

  async fetchTopHeadlines(pageSize: number = 30): Promise<Article[]> {
    if (!API_KEY) {
      throw new Error('News API key is required. Please add VITE_NEWS_API_KEY to your .env file');
    }

    const cacheKey = `headlines-${pageSize}`;
    
    // Check cache first
    if (this.isCacheValid(cacheKey)) {
      return this.cache.get(cacheKey)!.data;
    }

    try {
      const url = `${BASE_URL}/top-headlines?country=us&pageSize=${pageSize}&apiKey=${API_KEY}`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Invalid API key. Please check your News API key.');
        }
        if (response.status === 429) {
          throw new Error('API rate limit exceeded. Please try again later.');
        }
        throw new Error(`API request failed: ${response.statusText}`);
      }

      const data: NewsApiResponse = await response.json();
      
      if (data.status !== 'ok') {
        throw new Error('API returned an error status');
      }

      const articles = data.articles
        .filter(article => article.title && article.description && article.title !== '[Removed]')
        .map(article => this.transformArticle(article, 'general'));

      // Cache the results
      this.cache.set(cacheKey, {
        data: articles,
        timestamp: Date.now()
      });

      return articles;
    } catch (error) {
      console.error('Error fetching top headlines:', error);
      throw error;
    }
  }

  clearCache(): void {
    this.cache.clear();
  }
}