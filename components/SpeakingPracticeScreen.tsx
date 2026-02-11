import { useState } from 'react';
import { Mic, RotateCcw, Play, Volume2 } from 'lucide-react';

export function SpeakingPracticeScreen() {
  const [isRecording, setIsRecording] = useState(false);
  const [hasRecording, setHasRecording] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const [playingNative, setPlayingNative] = useState(false);
  const [playingUser, setPlayingUser] = useState(false);

  const handleRecord = () => {
    if (isRecording) {
      setIsRecording(false);
      setHasRecording(true);
      setShowComparison(true);
    } else {
      setIsRecording(true);
      setHasRecording(false);
      setShowComparison(false);
    }
  };

  const handleReset = () => {
    setIsRecording(false);
    setHasRecording(false);
    setShowComparison(false);
  };

  const simulatePlayNative = () => {
    setPlayingNative(true);
    setTimeout(() => setPlayingNative(false), 2000);
  };

  const simulatePlayUser = () => {
    setPlayingUser(true);
    setTimeout(() => setPlayingUser(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-gray-900 mb-2">Speaking Practice Redesign</h2>
          <p className="text-gray-600">
            Visual feedback supports self-regulation and reduces cognitive strain in pronunciation practice
          </p>
        </div>

        {/* Practice Card */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 mb-6">
          {/* Phrase */}
          <div className="text-center mb-8">
            <p className="text-sm text-gray-500 mb-2">Practice this phrase:</p>
            <h3 className="text-2xl text-gray-900 mb-1">¿Cómo estás?</h3>
            <p className="text-gray-600">How are you?</p>
          </div>

          {/* Native Speaker Reference */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-gray-700">Native Speaker Reference</h4>
              <button
                onClick={simulatePlayNative}
                disabled={playingNative}
                className="flex items-center gap-2 px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors disabled:opacity-50"
              >
                <Volume2 className="w-4 h-4" />
                {playingNative ? 'Playing...' : 'Listen'}
              </button>
            </div>
            
            {/* Native Waveform */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="relative h-32 flex items-center justify-center">
                {/* Pitch curve visualization */}
                <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="nativeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                  
                  {/* Waveform */}
                  <path
                    d="M0,50 Q50,30 100,40 T200,45 T300,35 T400,50"
                    fill="none"
                    stroke="#4F46E5"
                    strokeWidth="2"
                    className={playingNative ? 'animate-pulse' : ''}
                  />
                  <path
                    d="M0,50 Q50,30 100,40 T200,45 T300,35 T400,50 L400,100 L0,100 Z"
                    fill="url(#nativeGradient)"
                  />
                  
                  {/* Stress markers */}
                  <circle cx="100" cy="40" r="4" fill="#4F46E5" opacity="0.6" />
                  <circle cx="300" cy="35" r="4" fill="#4F46E5" opacity="0.6" />
                </svg>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>¿Có</span>
                <span>mo es</span>
                <span>tás?</span>
              </div>
            </div>
          </div>

          {/* User Recording */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-gray-700">Your Pronunciation</h4>
              <div className="flex items-center gap-2">
                {hasRecording && (
                  <>
                    <button
                      onClick={simulatePlayUser}
                      disabled={playingUser}
                      className="flex items-center gap-2 px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors disabled:opacity-50"
                    >
                      <Play className="w-4 h-4" />
                      Replay
                    </button>
                    <button
                      onClick={handleReset}
                      className="flex items-center gap-2 px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
                    >
                      <RotateCcw className="w-4 h-4" />
                      Re-record
                    </button>
                  </>
                )}
              </div>
            </div>
            
            <div className={`bg-gray-50 rounded-lg p-6 border-2 transition-all ${
              isRecording ? 'border-red-400 bg-red-50' : hasRecording ? 'border-green-400' : 'border-gray-200'
            }`}>
              {!hasRecording && !isRecording && (
                <div className="text-center py-8">
                  <button
                    onClick={handleRecord}
                    className="w-16 h-16 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full flex items-center justify-center mx-auto mb-3 transition-colors"
                  >
                    <Mic className="w-8 h-8" />
                  </button>
                  <p className="text-gray-600">Click to record</p>
                </div>
              )}

              {isRecording && (
                <div className="text-center py-8">
                  <button
                    onClick={handleRecord}
                    className="w-16 h-16 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center mx-auto mb-3 animate-pulse transition-colors"
                  >
                    <div className="w-6 h-6 bg-white rounded-sm" />
                  </button>
                  <p className="text-red-700">Recording... Click to stop</p>
                </div>
              )}

              {hasRecording && (
                <div className="relative h-32 flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="userGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#10B981" stopOpacity="0.1" />
                      </linearGradient>
                    </defs>
                    
                    {/* User waveform (slightly different from native) */}
                    <path
                      d="M0,50 Q50,35 100,45 T200,50 T300,40 T400,55"
                      fill="none"
                      stroke="#10B981"
                      strokeWidth="2"
                      className={playingUser ? 'animate-pulse' : ''}
                    />
                    <path
                      d="M0,50 Q50,35 100,45 T200,50 T300,40 T400,55 L400,100 L0,100 Z"
                      fill="url(#userGradient)"
                    />
                    
                    {/* Stress markers */}
                    <circle cx="100" cy="45" r="4" fill="#10B981" opacity="0.6" />
                    <circle cx="300" cy="40" r="4" fill="#10B981" opacity="0.6" />
                  </svg>
                </div>
              )}
            </div>
          </div>

          {/* Comparison View */}
          {showComparison && (
            <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-200">
              <h4 className="text-indigo-900 mb-4">Visual Comparison</h4>
              
              {/* Overlay comparison */}
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-sm text-gray-600 mb-3">Overlay (Your recording in green)</p>
                <div className="relative h-32">
                  <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
                    {/* Native (background) */}
                    <path
                      d="M0,50 Q50,30 100,40 T200,45 T300,35 T400,50"
                      fill="none"
                      stroke="#4F46E5"
                      strokeWidth="2"
                      opacity="0.4"
                    />
                    
                    {/* User (foreground) */}
                    <path
                      d="M0,50 Q50,35 100,45 T200,50 T300,40 T400,55"
                      fill="none"
                      stroke="#10B981"
                      strokeWidth="2"
                    />
                    
                    {/* Alignment markers */}
                    <circle cx="100" cy="40" r="3" fill="#4F46E5" opacity="0.5" />
                    <circle cx="100" cy="45" r="3" fill="#10B981" opacity="0.8" />
                    <line x1="100" y1="40" x2="100" y2="45" stroke="#F59E0B" strokeWidth="1" strokeDasharray="2,2" />
                    
                    <circle cx="300" cy="35" r="3" fill="#4F46E5" opacity="0.5" />
                    <circle cx="300" cy="40" r="3" fill="#10B981" opacity="0.8" />
                    <line x1="300" y1="35" x2="300" y2="40" stroke="#F59E0B" strokeWidth="1" strokeDasharray="2,2" />
                  </svg>
                </div>
              </div>

              {/* Feedback */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-900">Rhythm</span>
                  </div>
                  <p className="text-xs text-gray-600">Good pacing and stress placement</p>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-900">Intonation</span>
                  </div>
                  <p className="text-xs text-gray-600">Try rising tone at the end for questions</p>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-900">Clarity</span>
                  </div>
                  <p className="text-xs text-gray-600">Clear pronunciation of syllables</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Design Explanation */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-gray-900 mb-4">Design Rationale</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div>
                <h4 className="text-gray-900 mb-1">Visual Feedback Reduces Cognitive Load</h4>
                <p className="text-sm text-gray-600">
                  Pitch curves and waveforms provide concrete, visual targets. Learners can see alignment 
                  rather than relying solely on auditory discrimination, which is especially helpful for 
                  learners with different first-language phonetic systems.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-gray-900 mb-1">Self-Regulation and Autonomy</h4>
                <p className="text-sm text-gray-600">
                  Unlimited re-recording and immediate visual comparison support self-directed practice. 
                  Learners can iterate at their own pace without fear of losing "lives" or points, 
                  fostering intrinsic motivation and competence-building.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <h4 className="text-gray-900 mb-1">Specific, Actionable Guidance</h4>
                <p className="text-sm text-gray-600">
                  Instead of binary correct/incorrect feedback, learners receive specific guidance on 
                  rhythm, intonation, and clarity. This supports germane cognitive load by directing 
                  attention to productive learning activities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
