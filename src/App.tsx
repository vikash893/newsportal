import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { CategorySelector } from './components/CategorySelector';
import { ArticleGrid } from './components/ArticleGrid';
import { ErrorBoundary } from './components/ErrorBoundary';
import { ApiKeySetup } from './components/ApiKeySetup';
import { categories } from './data/mockData';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useNewsApi } from './hooks/useNewsApi';
import { RefreshCw, AlertCircle } from 'lucide-react';

function App() {
  const [selectedCategories, setSelectedCategories] = useLocalStorage<string[]>('selectedCategories', []);
  const [searchQuery, setSearchQuery] = useState('');
  const [showApiSetup, setShowApiSetup] = useState(false);

  const { articles, loading, error, refetch } = useNewsApi(selectedCategories, searchQuery);

  const handleCategoryToggle = (categoryId: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  // Check if API key is missing
  const apiKeyMissing = !import.meta.env.VITE_NEWS_API_KEY;

  if (apiKeyMissing && !showApiSetup) {
    return <ApiKeySetup onApiKeySet={() => window.location.reload()} />;
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        <Header 
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <CategorySelector
            categories={categories}
            selectedCategories={selectedCategories}
            onCategoryToggle={handleCategoryToggle}
          />

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <div className="flex items-center space-x-2">
                <AlertCircle className="w-5 h-5 text-red-600" />
                <p className="text-red-800 font-medium">Error loading articles</p>
              </div>
              <p className="text-red-700 text-sm mt-1">{error}</p>
              <button
                onClick={refetch}
                className="mt-3 inline-flex items-center px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition-colors duration-200"
              >
                <RefreshCw className="w-4 h-4 mr-1" />
                Try Again
              </button>
            </div>
          )}

          <div className="mb-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedCategories.length > 0 || searchQuery 
                  ? `Filtered Articles (${articles.length})`
                  : 'Latest News'
                }
              </h2>
              <div className="flex items-center space-x-4">
                {selectedCategories.length > 0 && (
                  <button
                    onClick={() => setSelectedCategories([])}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors duration-200"
                  >
                    Clear filters
                  </button>
                )}
                <button
                  onClick={refetch}
                  disabled={loading}
                  className="inline-flex items-center text-gray-600 hover:text-gray-700 text-sm font-medium transition-colors duration-200 disabled:opacity-50"
                >
                  <RefreshCw className={`w-4 h-4 mr-1 ${loading ? 'animate-spin' : ''}`} />
                  Refresh
                </button>
              </div>
            </div>
            {searchQuery && (
              <p className="text-gray-600 mt-2">
                Showing results for "{searchQuery}"
              </p>
            )}
          </div>

          <ArticleGrid articles={articles} loading={loading} />
        </main>

        <footer className="bg-white border-t border-gray-100 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center text-gray-500">
              <p>© 2025 NewsDigest. Your personalized news experience.</p>
              <p className="text-xs mt-1">Powered by NewsAPI.org</p>
            </div>
          </div>
        </footer>
      </div>
    </ErrorBoundary>
  );
}

export default App;