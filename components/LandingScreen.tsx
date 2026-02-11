import { ArrowRight, BookOpen, Lightbulb } from 'lucide-react';

interface LandingScreenProps {
  onNavigate: (screen: 'current' | 'redesign' | 'speaking' | 'summary') => void;
}

export function LandingScreen({ onNavigate }: LandingScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-6 pt-16 md:pt-24 pb-12">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl text-gray-900">
            Redesigning a Gamified Language Learning App
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Improving motivation and reducing cognitive load in consumer learning products
          </p>
          <p className="text-base text-gray-500 max-w-2xl mx-auto">
            An interactive, theory-driven product analysis focused on transferable design patterns.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => onNavigate('current')}
            className="px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 group"
          >
            Explore the Current Experience
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => onNavigate('redesign')}
            className="px-8 py-4 bg-white text-indigo-600 border-2 border-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2"
          >
            Test Redesign Scenarios
            <Lightbulb className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Value Props */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-gray-900 mb-2">
              Theory-Driven Analysis
            </h3>
            <p className="text-gray-600">
              Evaluate learning experiences through motivation theory (Self-Determination Theory) and cognitive load principles.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-gray-900 mb-2">
              Interactive Redesign
            </h3>
            <p className="text-gray-600">
              Toggle features and see real-time impact on learner persistence, engagement, and cognitive load.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-gray-900 mb-2">
              Transferable Patterns
            </h3>
            <p className="text-gray-600">
              Insights applicable across EdTech and consumer learning platforms, not just language learning.
            </p>
          </div>
        </div>
      </div>

      {/* Target Audience */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
          <h3 className="text-gray-900 mb-4 text-center">
            Target Audience
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-white rounded-full text-gray-700 border border-gray-200">
              Learning Experience Designers
            </span>
            <span className="px-4 py-2 bg-white rounded-full text-gray-700 border border-gray-200">
              Product Managers (EdTech)
            </span>
            <span className="px-4 py-2 bg-white rounded-full text-gray-700 border border-gray-200">
              Learning Scientists
            </span>
            <span className="px-4 py-2 bg-white rounded-full text-gray-700 border border-gray-200">
              UX Researchers
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
