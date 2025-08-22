import { useState, useEffect, useCallback } from 'react';
import { Article } from '../types';
import { NewsApiService } from '../services/newsApi';

interface UseNewsApiResult {
  articles: Article[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useNewsApi(
  selectedCategories: string[],
  searchQuery: string
): UseNewsApiResult {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const newsApi = NewsApiService.getInstance();

  const fetchArticles = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      let allArticles: Article[] = [];

      if (searchQuery.trim()) {
        // If there's a search query, search for articles
        allArticles = await newsApi.fetchArticlesByQuery(searchQuery, 50);
      } else if (selectedCategories.length > 0) {
        // If categories are selected, fetch articles for each category
        const categoryPromises = selectedCategories.map(category =>
          newsApi.fetchArticlesByCategory(category, 10)
        );
        
        const categoryResults = await Promise.allSettled(categoryPromises);
        
        categoryResults.forEach((result, index) => {
          if (result.status === 'fulfilled') {
            allArticles.push(...result.value);
          } else {
            console.error(`Failed to fetch articles for category ${selectedCategories[index]}:`, result.reason);
          }
        });
      } else {
        // If no categories selected and no search, fetch top headlines
        allArticles = await newsApi.fetchTopHeadlines(30);
      }

      // Remove duplicates based on title
      const uniqueArticles = allArticles.filter((article, index, self) =>
        index === self.findIndex(a => a.title === article.title)
      );

      // Sort by publication date (newest first)
      uniqueArticles.sort((a, b) => 
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );

      setArticles(uniqueArticles);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch articles';
      setError(errorMessage);
      console.error('Error fetching articles:', err);
      
      // Fallback to empty array on error
      setArticles([]);
    } finally {
      setLoading(false);
    }
  }, [selectedCategories, searchQuery, newsApi]);

  const refetch = useCallback(() => {
    newsApi.clearCache();
    fetchArticles();
  }, [fetchArticles, newsApi]);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  return {
    articles,
    loading,
    error,
    refetch
  };
}