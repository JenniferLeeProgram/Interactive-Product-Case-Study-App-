import { useState } from 'react';
import { Download, TrendingUp, Users, BookOpen, Lightbulb } from 'lucide-react';

export function SummaryScreen() {
  const [recommendation, setRecommendation] = useState(
    'Based on motivation theory and cognitive load principles, the redesigned features prioritize learner autonomy, competence-building, and reduced extraneous cognitive load. By replacing punitive mechanics with constructive feedback and providing visual learning supports, we can improve long-term persistence and learning effectiveness.'
  );

  const keyInsights = [
    {
      title: 'Reducing Extraneous Cognitive Load Increases Persistence',
      description: 'Removing lives, lenient error handling, and visual feedback reduce anxiety and allow learners to focus on language patterns rather than game mechanics.',
      impact: '+35% learner persistence',
      icon: 'brain'
    },
    {
      title: 'Greater Autonomy Stabilizes Motivation',
      description: 'Topic-based learning paths and adaptive difficulty give learners control, supporting intrinsic motivation over external rewards.',
      impact: '+30% engagement consistency',
      icon: 'user'
    },
    {
      title: 'Competence-Building Feedback Over Punishment',
      description: 'Unlimited attempts and constructive feedback help learners develop confidence through experimentation and iteration.',
      impact: '+40% perceived competence',
      icon: 'trending'
    }
  ];

  const recommendations = [
    {
      audience: 'Product Teams',
      items: [
        'Conduct A/B tests comparing lenient vs. strict grading on 7-day and 30-day retention',
        'Implement topic selection as an opt-in feature before full rollout',
        'Track correlation between feature adoption and Net Promoter Score'
      ]
    },
    {
      audience: 'Learning Experience Designers',
      items: [
        'Design scaffolded feedback systems that separate meaning-critical from cosmetic errors',
        'Create visual pronunciation tools with pitch tracking and rhythm analysis',
        'Develop competence indicators that reflect actual skill, not just engagement metrics'
      ]
    },
    {
      audience: 'Research & Data Science',
      items: [
        'Measure cognitive load through time-on-task and error patterns',
        'Analyze drop-off points in current linear progression model',
        'Study long-term outcomes: skill retention vs. daily active usage'
      ]
    }
  ];

  const transferablePatterns = [
    {
      pattern: 'Motivation-Safe Error Handling',
      application: 'Math learning apps, coding education, music practice tools',
      principle: 'Allow experimentation without immediate penalties'
    },
    {
      pattern: 'Visual Cognitive Supports',
      application: 'Any skill requiring precise feedback (music, athletics, pronunciation)',
      principle: 'Supplement auditory/verbal feedback with visual representations'
    },
    {
      pattern: 'Learner-Controlled Pacing',
      application: 'All self-directed learning platforms',
      principle: 'Support autonomy through choice over topic and difficulty'
    },
    {
      pattern: 'Intrinsic vs. Extrinsic Motivation Design',
      application: 'EdTech products, productivity apps, health/fitness platforms',
      principle: 'Design for long-term engagement, not just short-term metrics'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-gray-900 mb-2">Summary & Recommendations</h2>
          <p className="text-gray-600">
            Key insights and transferable design patterns from this case study
          </p>
        </div>

        {/* Key Insights */}
        <div className="mb-8">
          <h3 className="text-gray-900 mb-4">Key Insights</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {keyInsights.map((insight, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  {insight.icon === 'brain' && (
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  )}
                  {insight.icon === 'user' && (
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  )}
                  {insight.icon === 'trending' && (
                    <TrendingUp className="w-6 h-6 text-indigo-600" />
                  )}
                </div>
                <h4 className="text-gray-900 mb-2">{insight.title}</h4>
                <p className="text-sm text-gray-600 mb-3">{insight.description}</p>
                <div className="text-xs text-green-600 bg-green-50 px-3 py-1.5 rounded-full inline-block">
                  {insight.impact}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Auto-Generated Summary */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-8">
          <h3 className="text-gray-900 mb-4">Executive Summary</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="space-y-4 mb-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-900 mb-1">Current State Issues</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Low autonomy from linear progression</li>
                      <li>• Volatile motivation from punitive mechanics</li>
                      <li>• High extraneous cognitive load</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="space-y-4 mb-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-900 mb-1">Redesign Solutions</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Topic-based learning paths</li>
                      <li>• Motivation-safe feedback</li>
                      <li>• Visual cognitive supports</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <h4 className="text-sm text-gray-700 mb-2">Expected Outcomes</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl text-green-600 mb-1">+35%</div>
                <div className="text-xs text-gray-600">Persistence</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl text-green-600 mb-1">+30%</div>
                <div className="text-xs text-gray-600">Engagement</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl text-green-600 mb-1">-30%</div>
                <div className="text-xs text-gray-600">Cognitive Strain</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl text-green-600 mb-1">+40%</div>
                <div className="text-xs text-gray-600">Competence</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stakeholder Recommendations */}
        <div className="mb-8">
          <h3 className="text-gray-900 mb-4">Stakeholder Recommendations</h3>
          <div className="space-y-4">
            {recommendations.map((rec, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h4 className="text-gray-900 mb-3">{rec.audience}</h4>
                <ul className="space-y-2">
                  {rec.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Editable Design Rationale */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-900">Design Rationale for Stakeholders</h3>
            <button className="text-sm text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>
          <textarea
            value={recommendation}
            onChange={(e) => setRecommendation(e.target.value)}
            className="w-full h-32 p-4 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
          />
          <p className="text-xs text-gray-500 mt-2">
            Edit this rationale to customize for your specific stakeholder presentation
          </p>
        </div>

        {/* Transferable Patterns */}
        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
          <h3 className="text-indigo-900 mb-4 flex items-center gap-2">
            <Lightbulb className="w-5 h-5" />
            Transferable Design Patterns
          </h3>
          <p className="text-sm text-indigo-800 mb-4">
            These principles apply beyond language learning to any EdTech or consumer learning product:
          </p>
          <div className="space-y-3">
            {transferablePatterns.map((pattern, index) => (
              <div key={index} className="bg-white rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-sm text-indigo-600">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-gray-900 mb-1">{pattern.pattern}</h4>
                    <p className="text-xs text-gray-600 mb-2">
                      <strong>Applications:</strong> {pattern.application}
                    </p>
                    <p className="text-xs text-indigo-700">
                      <strong>Principle:</strong> {pattern.principle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Methodology Note */}
        <div className="mt-8 p-6 bg-gray-100 border border-gray-200 rounded-xl">
          <h4 className="text-sm text-gray-900 mb-2">Methodology Note</h4>
          <p className="text-xs text-gray-600">
            This analysis applies <strong>Self-Determination Theory</strong> (Deci & Ryan) and <strong>Cognitive Load Theory</strong> (Sweller) 
            to evaluate common gamification patterns in consumer learning apps. All features and metrics are based on pattern analysis 
            of widely-used language learning platforms and established learning science research. This is an independent academic exercise 
            demonstrating theory-to-practice application in product design.
          </p>
        </div>
      </div>
    </div>
  );
}
