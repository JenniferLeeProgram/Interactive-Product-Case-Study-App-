import { useState } from 'react';
import { Info, AlertTriangle, CheckCircle2, XCircle } from 'lucide-react';

interface FeatureCard {
  id: string;
  title: string;
  description: string;
  autonomy: 'low' | 'medium' | 'high';
  cognitiveLoad: 'low' | 'medium' | 'high';
  motivationStability: 'volatile' | 'stable';
  icon: string;
  theoryInsights: {
    autonomy: string;
    competence: string;
    relatedness: string;
    cognitiveLoad: string;
  };
}

const features: FeatureCard[] = [
  {
    id: 'streaks',
    title: 'Daily Streaks',
    description: 'Consecutive days of app usage tracked and displayed prominently',
    autonomy: 'low',
    cognitiveLoad: 'low',
    motivationStability: 'volatile',
    icon: 'flame',
    theoryInsights: {
      autonomy: 'Low: Users feel pressured to maintain streaks regardless of readiness or life circumstances',
      competence: 'Can undermine competence when streak breaks despite learning progress',
      relatedness: 'Creates comparison anxiety with other users\' streak counts',
      cognitiveLoad: 'Adds extraneous load through constant monitoring and anxiety about streak loss'
    }
  },
  {
    id: 'points',
    title: 'Reward Points (XP)',
    description: 'Points awarded for completing lessons, independent of learning quality',
    autonomy: 'low',
    cognitiveLoad: 'medium',
    motivationStability: 'volatile',
    icon: 'trophy',
    theoryInsights: {
      autonomy: 'Low: External rewards shift focus from intrinsic learning goals to point accumulation',
      competence: 'Mixed: Points may not reflect actual language competence',
      relatedness: 'Encourages competition over collaborative learning',
      cognitiveLoad: 'Extraneous: Learners track points instead of focusing on language patterns'
    }
  },
  {
    id: 'lives',
    title: 'Lives / Error Penalties',
    description: 'Limited attempts with immediate penalties for mistakes',
    autonomy: 'low',
    cognitiveLoad: 'high',
    motivationStability: 'volatile',
    icon: 'heart',
    theoryInsights: {
      autonomy: 'Very Low: Learners cannot experiment or take productive risks',
      competence: 'Undermines: Fear of failure prevents skill-building through trial and error',
      relatedness: 'Creates isolation—learners hide mistakes rather than seeking help',
      cognitiveLoad: 'High extraneous load: Anxiety about lives detracts from learning focus'
    }
  },
  {
    id: 'timed',
    title: 'Timed Micro-Lessons',
    description: 'Short, fixed-duration lessons with time pressure',
    autonomy: 'low',
    cognitiveLoad: 'high',
    motivationStability: 'volatile',
    icon: 'clock',
    theoryInsights: {
      autonomy: 'Low: No control over pacing—must rush or wait',
      competence: 'Variable: Time pressure benefits some but overwhelms others',
      relatedness: 'Neutral: No social component to time constraints',
      cognitiveLoad: 'Increases extraneous load for slower processors or those in distracting environments'
    }
  },
  {
    id: 'sentence',
    title: 'Word-by-Word Sentence Construction',
    description: 'Drag-and-drop individual words to form sentences',
    autonomy: 'medium',
    cognitiveLoad: 'high',
    motivationStability: 'stable',
    icon: 'type',
    theoryInsights: {
      autonomy: 'Medium: Some choice in word selection, but constrained by available words',
      competence: 'Can support: Provides scaffolding for sentence structure',
      relatedness: 'Neutral: Individual activity',
      cognitiveLoad: 'High intrinsic load for complex sentences; can become overwhelming'
    }
  }
];

export function CurrentStateScreen() {
  const [showTheory, setShowTheory] = useState(false);
  const [motivationLens, setMotivationLens] = useState({
    autonomy: false,
    competence: false,
    relatedness: false
  });
  const [showCognitiveLoad, setShowCognitiveLoad] = useState(false);

  const getIconComponent = (iconName: string) => {
    const icons: Record<string, JSX.Element> = {
      flame: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2c-1.5 4.5-5.5 5-7 10 0 3.86 3.14 7 7 7s7-3.14 7-7c-1.5-5-5.5-5.5-7-10z" />
        </svg>
      ),
      trophy: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      heart: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      ),
      clock: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      type: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10" />
        </svg>
      )
    };
    return icons[iconName] || icons.flame;
  };

  const getAutonomyColor = (level: string) => {
    switch (level) {
      case 'low': return 'bg-red-100 text-red-700 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'high': return 'bg-green-100 text-green-700 border-green-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getCognitiveLoadColor = (level: string) => {
    switch (level) {
      case 'low': return 'bg-green-100 text-green-700 border-green-200';
      case 'medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'high': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getMotivationColor = (stability: string) => {
    return stability === 'volatile' 
      ? 'bg-orange-100 text-orange-700 border-orange-200' 
      : 'bg-blue-100 text-blue-700 border-blue-200';
  };

  const anyLensActive = motivationLens.autonomy || motivationLens.competence || motivationLens.relatedness || showCognitiveLoad;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-gray-900 mb-2">Current Learning Experience</h2>
          <p className="text-gray-600">
            Explore common gamification features and their impact on learner motivation and cognitive load
          </p>
        </div>

        {/* Theory Controls */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-900">Theory Analysis</h3>
            <button
              onClick={() => setShowTheory(!showTheory)}
              className="text-sm text-indigo-600 hover:text-indigo-700"
            >
              {showTheory ? 'Hide All' : 'Show All'}
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Motivation Lens */}
            <div>
              <h4 className="text-gray-700 mb-3 flex items-center gap-2">
                <Info className="w-4 h-4" />
                Motivation Lens (Self-Determination Theory)
              </h4>
              <div className="space-y-2">
                <label className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    checked={motivationLens.autonomy || showTheory}
                    onChange={(e) => setMotivationLens({ ...motivationLens, autonomy: e.target.checked })}
                    className="w-4 h-4 text-indigo-600"
                  />
                  <div>
                    <div className="text-gray-900">Autonomy</div>
                    <div className="text-sm text-gray-500">Control over learning choices</div>
                  </div>
                </label>
                <label className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    checked={motivationLens.competence || showTheory}
                    onChange={(e) => setMotivationLens({ ...motivationLens, competence: e.target.checked })}
                    className="w-4 h-4 text-indigo-600"
                  />
                  <div>
                    <div className="text-gray-900">Competence</div>
                    <div className="text-sm text-gray-500">Sense of mastery and progress</div>
                  </div>
                </label>
                <label className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    checked={motivationLens.relatedness || showTheory}
                    onChange={(e) => setMotivationLens({ ...motivationLens, relatedness: e.target.checked })}
                    className="w-4 h-4 text-indigo-600"
                  />
                  <div>
                    <div className="text-gray-900">Relatedness</div>
                    <div className="text-sm text-gray-500">Connection to others and community</div>
                  </div>
                </label>
              </div>
            </div>

            {/* Cognitive Load */}
            <div>
              <h4 className="text-gray-700 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                Cognitive Load Analysis
              </h4>
              <label className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                <input
                  type="checkbox"
                  checked={showCognitiveLoad || showTheory}
                  onChange={(e) => setShowCognitiveLoad(e.target.checked)}
                  className="w-4 h-4 text-indigo-600"
                />
                <div>
                  <div className="text-gray-900">Show Cognitive Load Impact</div>
                  <div className="text-sm text-gray-500">Intrinsic vs. extraneous load</div>
                </div>
              </label>
              {(showCognitiveLoad || showTheory) && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-1 flex-shrink-0"></div>
                    <div>
                      <span className="text-gray-900">Intrinsic Load:</span>
                      <span className="text-gray-600"> Complexity inherent to learning content</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-1 flex-shrink-0"></div>
                    <div>
                      <span className="text-gray-900">Extraneous Load:</span>
                      <span className="text-gray-600"> Unnecessary complexity from poor design</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-1 flex-shrink-0"></div>
                    <div>
                      <span className="text-gray-900">Germane Load:</span>
                      <span className="text-gray-600"> Effort toward schema construction</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`bg-white rounded-xl p-6 shadow-sm border transition-all ${
                anyLensActive ? 'border-indigo-200' : 'border-gray-200'
              }`}
            >
              {/* Icon and Title */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 flex-shrink-0">
                  {getIconComponent(feature.icon)}
                </div>
                <div className="flex-1">
                  <h4 className="text-gray-900 mb-1">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>

              {/* Indicators */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500 w-24">Autonomy:</span>
                  <span className={`text-xs px-2 py-1 rounded-full border ${getAutonomyColor(feature.autonomy)}`}>
                    {feature.autonomy}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500 w-24">Cognitive Load:</span>
                  <span className={`text-xs px-2 py-1 rounded-full border ${getCognitiveLoadColor(feature.cognitiveLoad)}`}>
                    {feature.cognitiveLoad}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500 w-24">Motivation:</span>
                  <span className={`text-xs px-2 py-1 rounded-full border ${getMotivationColor(feature.motivationStability)}`}>
                    {feature.motivationStability}
                  </span>
                </div>
              </div>

              {/* Theory Insights */}
              {(motivationLens.autonomy || motivationLens.competence || motivationLens.relatedness || showCognitiveLoad || showTheory) && (
                <div className="pt-4 border-t border-gray-100 space-y-3">
                  {(motivationLens.autonomy || showTheory) && (
                    <div className="p-3 bg-indigo-50 rounded-lg">
                      <div className="text-xs text-indigo-900 mb-1">Autonomy</div>
                      <div className="text-xs text-indigo-700">{feature.theoryInsights.autonomy}</div>
                    </div>
                  )}
                  {(motivationLens.competence || showTheory) && (
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <div className="text-xs text-purple-900 mb-1">Competence</div>
                      <div className="text-xs text-purple-700">{feature.theoryInsights.competence}</div>
                    </div>
                  )}
                  {(motivationLens.relatedness || showTheory) && (
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <div className="text-xs text-blue-900 mb-1">Relatedness</div>
                      <div className="text-xs text-blue-700">{feature.theoryInsights.relatedness}</div>
                    </div>
                  )}
                  {(showCognitiveLoad || showTheory) && (
                    <div className="p-3 bg-orange-50 rounded-lg">
                      <div className="text-xs text-orange-900 mb-1">Cognitive Load</div>
                      <div className="text-xs text-orange-700">{feature.theoryInsights.cognitiveLoad}</div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Summary Insight */}
        {anyLensActive && (
          <div className="mt-8 bg-indigo-50 border border-indigo-200 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-indigo-900 mb-2">Key Insight</h4>
                <p className="text-indigo-700">
                  Many gamification features prioritize engagement metrics over learning effectiveness. 
                  External rewards and punitive mechanics can undermine intrinsic motivation and increase 
                  cognitive load, leading to decreased persistence in long-term learning.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
