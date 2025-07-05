import React from 'react';

function PortfolioTest() {
  return (
    <section id="portfolio" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Test Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Portfolio Section Test
          </h2>
          <p className="text-xl text-gray-300">
            This is a test to see if the portfolio section renders correctly.
          </p>
        </div>

        {/* Test Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Test Card 1 */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="w-full h-48 bg-gradient-to-r from-yellow-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-lg">Test Video 1</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Sample Project 1</h3>
            <p className="text-gray-300 text-sm">This is a test project to verify the section is working.</p>
          </div>

          {/* Test Card 2 */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="w-full h-48 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-lg">Test Video 2</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Sample Project 2</h3>
            <p className="text-gray-300 text-sm">Another test project to verify the layout.</p>
          </div>

          {/* Test Card 3 */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="w-full h-48 bg-gradient-to-r from-blue-500 to-green-600 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-lg">Test Video 3</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Sample Project 3</h3>
            <p className="text-gray-300 text-sm">Third test project for the grid layout.</p>
          </div>
        </div>

        {/* API Status Test */}
        <div className="mt-16 text-center">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">API Connection Test</h3>
            <p className="text-gray-300 mb-4">
              If you can see this section but not the real projects, the issue is with the API connection.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>✅ Portfolio section is rendering correctly</p>
              <p>✅ CSS styles are working</p>
              <p>❓ Check if backend server is running on port 5000</p>
              <p>❓ Check browser console for API errors</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioTest;