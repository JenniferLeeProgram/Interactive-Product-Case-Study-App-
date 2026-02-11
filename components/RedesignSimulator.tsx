import { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface RedesignFeature {
  id: string;
  title: string;
  description: string;
  impact: {
    persistence: number;
    engagement: number;
    cognitiveStrain: number;
    competence: number;
  };
}

const redesignFeatures: RedesignFeature[] = [
  {
    id: 'topicPaths',
    title: 'Topic-Based Learning Paths',
    description: 'Allow learners to choose topics of interest instead of forcing linear progression',
    impact: {
      persistence: 25,
      engagement: 30,
      cognitiveStrain: -15,
      competence: 20
    }
  },
  {
    id: 'lenientGrading',
    title: 'Lenient Grading for Non-Critical Errors',
    description: 'Accept minor spelling/accent errors that don\'t affect meaning comprehension',
    impact: {
      persistence: 20,
      engagement: 15,
      cognitiveStrain: -25,
      competence: 15
    }
  },
  {
    id: 'motivationSafeFeedback',
    title: 'Motivation-Safe Feedback',
    description: 'Replace lives/penalties with constructive feedback and unlimited attempts',
    impact: {
      persistence: 35,
      engagement: 20,
      cognitiveStrain: -30,
      competence: 25
    }
  },
  {
    id: 'adaptiveDifficulty',
    title: 'Adaptive Difficulty Selection',
    description: 'Let learners choose lesson difficulty based on their confidence and time availability',
    impact: {
      persistence: 30,
      engagement: 25,
      cognitiveStrain: -20,
      competence: 30
    }
  },
  {
    id: 'visualSpeaking',
    title: 'Enhanced Speaking Feedback',
    description: 'Visual pronunciation feedback with pitch curves and rhythm patterns',
    impact: {
      persistence: 15,
      engagement: 35,
      cognitiveStrain: -10,
      competence: 40
    }
  }
];

export function RedesignSimulator() {
  const [enabledFeatures, setEnabledFeatures] = useState<Record<string, boolean>>({});
  const [metrics, setMetrics] = useState({
    persistence: 45,
    engagement: 55,
    cognitiveStrain: 70,
    competence: 50
  });

  useEffect(() => {
    // Calculate metrics based on enabled features
    const baseMetrics = {
      persistence: 45,
      engagement: 55,
      cognitiveStrain: 70,
      competence: 50
    };

    const totalImpact = redesignFeatures.reduce((acc, feature) => {
      if (enabledFeatures[feature.id]) {
        return {
          persistence: acc.persistence + feature.impact.persistence,
          engagement: acc.engagement + feature.impact.engagement,
          cognitiveStrain: acc.cognitiveStrain + feature.impact.cognitiveStrain,
          competence: acc.competence + feature.impact.competence
        };
      }
      return acc;
    }, baseMetrics);

    // Clamp values between 0 and 100
    setMetrics({
      persistence: Math.min(100, Math.max(0, totalImpact.persistence)),
      engagement: Math.min(100, Math.max(0, totalImpact.engagement)),
      cognitiveStrain: Math.min(100, Math.max(0, totalImpact.cognitiveStrain)),
      competence: Math.min(100, Math.max(0, totalImpact.competence))
    });
  }, [enabledFeatures]);

  const toggleFeature = (id: string) => {
    setEnabledFeatures(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const getMetricColor = (value: number, inverse: boolean = false) => {
    if (inverse) {
      // For cognitive strain (lower is better)
      if (value <= 40) return 'text-green-600';
      if (value <= 60) return 'text-yellow-600';
      return 'text-red-600';
    } else {
      // For positive metrics (higher is better)
      if (value >= 70) return 'text-green-600';
      if (value >= 50) return 'text-yellow-600';
      return 'text-red-600';
    }
  };

  const getMetricBgColor = (value: number, inverse: boolean = false) => {
    if (inverse) {
      if (value <= 40) return 'bg-green-500';
      if (value <= 60) return 'bg-yellow-500';
      return 'bg-red-500';
    } else {
      if (value >= 70) return 'bg-green-500';
      if (value >= 50) return 'bg-yellow-500';
      return 'bg-red-500';
    }
  };

  const getTrendIcon = (currentValue: number, baseValue: number, inverse: boolean = false) => {
    const diff = currentValue - baseValue;
    if (Math.abs(diff) < 5) return <Minus className="w-4 h-4" />;
    
    if (inverse) {
      return diff < 0 ? <TrendingDown className="w-4 h-4 text-green-600" /> : <TrendingUp className="w-4 h-4 text-red-600" />;
    } else {
      return diff > 0 ? <TrendingUp className="w-4 h-4 text-green-600" /> : <TrendingDown className="w-4 h-4 text-red-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-gray-900 mb-2">Redesign Simulator</h2>
          <p className="text-gray-600">
            Toggle redesigned features to see real-time impact on learner outcomes
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Features Panel */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-gray-900">Redesigned Features</h3>
            
            {redesignFeatures.map((feature) => {
              const isEnabled = enabledFeatures[feature.id];
              return (
                <div
                  key={feature.id}
                  className={`bg-white rounded-xl p-6 shadow-sm border-2 transition-all cursor-pointer ${
                    isEnabled ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => toggleFeature(feature.id)}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all ${
                        isEnabled ? 'bg-indigo-600 border-indigo-600' : 'bg-white border-gray-300'
                      }`}>
                        {isEnabled && (
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className={`mb-1 ${isEnabled ? 'text-indigo-900' : 'text-gray-900'}`}>
                        {feature.title}
                      </h4>
                      <p className={`text-sm mb-3 ${isEnabled ? 'text-indigo-700' : 'text-gray-600'}`}>
                        {feature.description}
                      </p>
                      
                      {/* Impact Preview */}
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="flex items-center gap-1">
                          {feature.impact.persistence > 0 ? (
                            <TrendingUp className="w-3 h-3 text-green-600" />
                          ) : (
                            <Minus className="w-3 h-3 text-gray-400" />
                          )}
                          <span className="text-gray-600">Persistence</span>
                          <span className="text-green-600">+{feature.impact.persistence}%</span>
                        </div>
                        <div className="flex items-center gap-1">
                          {feature.impact.engagement > 0 ? (
                            <TrendingUp className="w-3 h-3 text-green-600" />
                          ) : (
                            <Minus className="w-3 h-3 text-gray-400" />
                          )}
                          <span className="text-gray-600">Engagement</span>
                          <span className="text-green-600">+{feature.impact.engagement}%</span>
                        </div>
                        <div className="flex items-center gap-1">
                          {feature.impact.cognitiveStrain < 0 ? (
                            <TrendingDown className="w-3 h-3 text-green-600" />
                          ) : (
                            <Minus className="w-3 h-3 text-gray-400" />
                          )}
                          <span className="text-gray-600">Cognitive Strain</span>
                          <span className="text-green-600">{feature.impact.cognitiveStrain}%</span>
                        </div>
                        <div className="flex items-center gap-1">
                          {feature.impact.competence > 0 ? (
                            <TrendingUp className="w-3 h-3 text-green-600" />
                          ) : (
                            <Minus className="w-3 h-3 text-gray-400" />
                          )}
                          <span className="text-gray-600">Competence</span>
                          <span className="text-green-600">+{feature.impact.competence}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Impact Panel */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 sticky top-6">
              <h3 className="text-gray-900 mb-6">Real-Time Impact</h3>
              
              <div className="space-y-6">
                {/* Learner Persistence */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-700">Learner Persistence</span>
                    <div className="flex items-center gap-1">
                      {getTrendIcon(metrics.persistence, 45)}
                      <span className={`text-sm ${getMetricColor(metrics.persistence)}`}>
                        {metrics.persistence}%
                      </span>
                    </div>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 ${getMetricBgColor(metrics.persistence)}`}
                      style={{ width: `${metrics.persistence}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Long-term retention rate</p>
                </div>

                {/* Engagement Consistency */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-700">Engagement Consistency</span>
                    <div className="flex items-center gap-1">
                      {getTrendIcon(metrics.engagement, 55)}
                      <span className={`text-sm ${getMetricColor(metrics.engagement)}`}>
                        {metrics.engagement}%
                      </span>
                    </div>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 ${getMetricBgColor(metrics.engagement)}`}
                      style={{ width: `${metrics.engagement}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Regular learning sessions</p>
                </div>

                {/* Cognitive Strain */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-700">Cognitive Strain</span>
                    <div className="flex items-center gap-1">
                      {getTrendIcon(metrics.cognitiveStrain, 70, true)}
                      <span className={`text-sm ${getMetricColor(metrics.cognitiveStrain, true)}`}>
                        {metrics.cognitiveStrain}%
                      </span>
                    </div>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 ${getMetricBgColor(metrics.cognitiveStrain, true)}`}
                      style={{ width: `${metrics.cognitiveStrain}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Extraneous cognitive load</p>
                </div>

                {/* Perceived Competence */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-700">Perceived Competence</span>
                    <div className="flex items-center gap-1">
                      {getTrendIcon(metrics.competence, 50)}
                      <span className={`text-sm ${getMetricColor(metrics.competence)}`}>
                        {metrics.competence}%
                      </span>
                    </div>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 ${getMetricBgColor(metrics.competence)}`}
                      style={{ width: `${metrics.competence}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Learner confidence</p>
                </div>
              </div>

              {/* Summary */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="text-sm text-gray-700 mb-2">Active Features</h4>
                <div className="text-2xl text-indigo-600 mb-1">
                  {Object.values(enabledFeatures).filter(Boolean).length} / {redesignFeatures.length}
                </div>
                <p className="text-xs text-gray-500">
                  {Object.values(enabledFeatures).filter(Boolean).length === 0
                    ? 'Select features to see impact'
                    : Object.values(enabledFeatures).filter(Boolean).length === redesignFeatures.length
                    ? 'All features enabled'
                    : 'Customize your redesign'}
                </p>
              </div>

              {/* Insight */}
              {Object.values(enabledFeatures).filter(Boolean).length >= 3 && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-xs text-green-800">
                    <strong>Strong Impact:</strong> With {Object.values(enabledFeatures).filter(Boolean).length} features enabled, 
                    learners show improved persistence and reduced cognitive strain.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Theory Explanation */}
        <div className="mt-8 bg-indigo-50 border border-indigo-200 rounded-xl p-6">
          <h3 className="text-indigo-900 mb-3">Design Rationale</h3>
          <div className="space-y-2 text-sm text-indigo-800">
            <p>
              <strong>Autonomy-supportive design:</strong> Topic-based paths and difficulty selection give learners 
              control over their learning journey, supporting intrinsic motivation.
            </p>
            <p>
              <strong>Competence-building feedback:</strong> Removing punitive mechanics and providing constructive 
              feedback helps learners develop confidence through experimentation.
            </p>
            <p>
              <strong>Cognitive load optimization:</strong> Lenient grading and visual feedback reduce extraneous 
              load, allowing learners to focus on meaningful language patterns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
