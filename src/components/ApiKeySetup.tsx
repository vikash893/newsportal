import React, { useState } from 'react';
import { Key, ExternalLink, CheckCircle } from 'lucide-react';

interface ApiKeySetupProps {
  onApiKeySet: () => void;
}

export const ApiKeySetup: React.FC<ApiKeySetupProps> = ({ onApiKeySet }) => {
  const [showInstructions, setShowInstructions] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        <div className="text-center mb-8">
          <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Key className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">News API Setup Required</h1>
          <p className="text-gray-600">
            To display real news articles, you need to configure your News API key.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-blue-900 mb-2">Quick Setup Instructions:</h3>
            <ol className="list-decimal list-inside space-y-2 text-blue-800 text-sm">
              <li>Get a free API key from NewsAPI.org</li>
              <li>Add it to your .env file as VITE_NEWS_API_KEY</li>
              <li>Restart the development server</li>
            </ol>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://newsapi.org/register"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Get Free API Key
            </a>
            <button
              onClick={() => setShowInstructions(!showInstructions)}
              className="flex-1 inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              {showInstructions ? 'Hide' : 'Show'} Detailed Instructions
            </button>
          </div>

          {showInstructions && (
            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <h3 className="font-semibold text-gray-900">Detailed Setup Instructions:</h3>
              
              <div className="space-y-4 text-sm text-gray-700">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mt-0.5">1</div>
                  <div>
                    <p className="font-medium">Register for a free NewsAPI account</p>
                    <p>Visit <a href="https://newsapi.org/register" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">newsapi.org/register</a> and create your account</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mt-0.5">2</div>
                  <div>
                    <p className="font-medium">Copy your API key</p>
                    <p>After registration, you'll receive an API key from your dashboard</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mt-0.5">3</div>
                  <div>
                    <p className="font-medium">Add to .env file</p>
                    <p>Create or update the .env file in your project root:</p>
                    <div className="bg-gray-800 text-green-400 p-3 rounded mt-2 font-mono text-xs">
                      VITE_NEWS_API_KEY=your_api_key_here
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mt-0.5">4</div>
                  <div>
                    <p className="font-medium">Restart the development server</p>
                    <p>Stop the current server (Ctrl+C) and run <code className="bg-gray-200 px-1 rounded">npm run dev</code> again</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <p className="text-green-800 font-medium">Free Tier Includes:</p>
                </div>
                <ul className="list-disc list-inside text-green-700 text-sm mt-2 ml-7">
                  <li>1,000 requests per day</li>
                  <li>Access to headlines and everything endpoints</li>
                  <li>No credit card required</li>
                </ul>
              </div>
            </div>
          )}

          <div className="text-center">
            <button
              onClick={onApiKeySet}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors duration-200"
            >
              I've added my API key, refresh the page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};