import { useState, useEffect } from 'react'

function App() {
  const [currentText, setCurrentText] = useState('')
  const [showContent, setShowContent] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isEnglish, setIsEnglish] = useState(true)

  const fullText = isEnglish ? "Hey, I'm Shivam" : "Hey, je suis Shivam"

  useEffect(() => {
    // Reset animation when language changes
    setCurrentText('')
    setCurrentIndex(0)
    setShowContent(false)
  }, [isEnglish])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < fullText.length) {
        setCurrentText(prev => prev + fullText.charAt(currentIndex))
        setCurrentIndex(prev => prev + 1)
      } else if (!showContent) {
        // Typing is complete, show content after a brief delay
        setTimeout(() => {
          setShowContent(true)
        }, 500)
      }
    }, 150)

    return () => clearTimeout(timer)
  }, [currentIndex, fullText, showContent])

  return (
    <div className="min-h-screen bg-stone-100 text-gray-900" style={{ fontFamily: 'ZalandoSansExpanded-Regular, Avenir, sans-serif' }}>
      <div className="max-w-5xl mx-auto px-8 py-16">
        
        {/* Language Toggle Button */}
        {currentIndex >= fullText.length && (
          <div className="absolute top-16 right-14 opacity-0 animate-fade-in-slow" style={{animationDelay: '0.5s'}}>
            <button 
              onClick={() => setIsEnglish(!isEnglish)}
              className="text-gray-900 text-sm font-semibold hover:scale-110 transition-transform duration-200 language-toggle"
            >
              {isEnglish ? 'FR' : 'EN'}
            </button>
          </div>
        )}
        
        {/* Hero Section */}
        <div className="mb-20">
          <div className="flex items-center gap-6 mb-14">
            <h1 className="text-5xl md:text-7xl font-bold text-black" style={{ fontFamily: 'ZalandoSansExpanded-Bold, Avenir, sans-serif' }}>
              <span>{currentText}</span>
              <span className="inline-block bg-black w-1 animate-blink">&nbsp;</span>
            </h1>
            {/* emoji appears after typing completes */}
            {currentIndex >= fullText.length && (
              <div className="dance-container opacity-0 animate-fade-in-slow" style={{animationDelay: '0.05s'}}>
                <span className="dance" role="img" aria-label="dancing">🧿</span>
              </div>
            )}
          </div>
          
          {showContent && (
            <div className="opacity-0 animate-fade-in-slow">
              <p className="text-xl text-gray-700 leading-relaxed">
                {isEnglish ? (
                  <>
                    Welcome to my website! I'm a 3rd year Honours Mathematics and Computer Science student at McGill University. I've made scalable software for businesses, worked with large established codebases and aim to get better everyday.
                    My passions include compilers, machine learning, and functional programming. Outside of coding, I enjoy swing trading stocks (unsuccessfully), 
                    learning mathematics, and biking.
                  </>
                ) : (
                  <>
                    Bienvenue sur mon site web ! Je suis étudiant en Mathématiques et Informatique à l'Université McGill. J'ai développé des logiciels évolutifs pour des entreprises, travaillé avec de grandes bases de code établies et je vise à m'améliorer chaque jour.
                    Mes passions incluent les compilateurs, l'apprentissage automatique et la programmation fonctionnelle. En dehors du codage, j'aime le swing trading d'actions (sans succès), 
                    apprendre les mathématiques et faire du vélo.
                  </>
                )}
              </p>
            </div>
          )}
        </div>

        {showContent && (
          <div className="space-y-20 opacity-0 animate-fade-in-slow max-w-4xl" style={{animationDelay: '0.3s'}}>
            
            {/* Experience Section */}
            <section>
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-black" style={{ fontFamily: 'ZalandoSansExpanded-SemiBold, Avenir, sans-serif' }}>
                {isEnglish ? 'Experience' : 'Expérience'}
              </h2>
              <div className="space-y-8">
                <div className="relative pb-6">
                  <div className="text-sm text-gray-600 mb-1">aug 2025 - now</div>
                  <div className="text-lg">
                    <span className="font-semibold">{isEnglish ? 'Undergraduate Researcher' : 'Chercheur'}</span> @
                    <span className="underline decoration-2 underline-offset-2 ml-1 font-semibold">{isEnglish ? 'McGill University' : 'Université McGill'}</span>
                  </div>
                    <div className="absolute left-0 right-0 bottom-0 border-b border-black" style={{width: '150%'}}></div>
                </div>
                <div className="pb-6">
                  <div className="text-sm text-gray-600 mb-1">may 2025 - jul 2025</div>
                  <div className="text-lg">
                    <span className="font-semibold">{isEnglish ? 'Software Developer Intern' : 'Stagiaire Développeur Logiciel'}</span> @
                    <span className="underline decoration-2 underline-offset-2 ml-1 font-semibold">Patel Tax Services</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black" style={{ fontFamily: 'ZalandoSansExpanded-SemiBold, Avenir, sans-serif' }}>
                {isEnglish ? 'Projects' : 'Projets'}
              </h2>
              <p className="text-gray-700 mb-12 max-w-7xl">
                {isEnglish 
                  ? 'Some of my recent projects which include React, Node.js, Python, Typescript, C and various modern web technologies. All links go to my GitHub.'
                  : 'Quelques-uns de mes projets récents qui incluent React, Node.js, Python, Typescript, C et diverses technologies web modernes. Tous les liens mènent à mon GitHub.'
                }
              </p>
              
              <div className="grid md:grid-cols-2 gap-x-32 gap-y-8 max-w-7xl mx-auto">
                {/* Project List*/}
                {[
                  { color: 'bg-blue-800', num: '01', title: 'Ad Astra' },
                  { color: 'bg-purple-800', num: '02', title: 'Tax Management App' },
                  { color: 'bg-emerald-700', num: '03', title: 'Code Review CLI' },
                  { color: 'bg-red-700', num: '04', title: 'Portfolio Website' },
                  { color: 'bg-amber-600', num: '05', title: 'ETCA-GCC' },
                  { color: 'bg-indigo-800', num: '06', title: 'OS Simulation' },
                ].map((proj, i) => (
                  <a
                    key={proj.num}
                    href="https://github.com/notsplol"
                    className="block border-b border-black pb-6 focus:outline-none project-link"
                    tabIndex={0}
                  >
                    <div className="flex items-center">
                      <div className={`w-12 h-12 ${proj.color} flex items-center justify-center`}>
                        <span className="text-white text-sm font-bold">{proj.num}</span>
                      </div>
                      <div className="project-title-container relative overflow-hidden">
                        <div 
                          className="project-overlay absolute left-0 top-0 bottom-0 w-0 transition-all duration-300 ease-out"
                          style={{ backgroundColor: `var(--project-color-${i})` }}
                        ></div>
                        <h3 className="text-xl font-medium text-black project-title relative z-10 transition-colors duration-200 pl-4">
                          {proj.title}
                        </h3>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </section>

            {/* Tech Stack Section */}
            <section>
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-black" style={{ fontFamily: 'ZalandoSansExpanded-SemiBold, Avenir, sans-serif' }}>
                {isEnglish ? 'Tech Stack' : 'Technologies'}
              </h2>
              
              <div className="grid md:grid-cols-4 gap-12">
                
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-gray-800">{isEnglish ? 'Languages' : 'Langages'}</h3>
                  <div className="space-y-3">
                    <div className="border-b border-black pb-2">C/C++</div>
                    <div className="border-b border-black pb-2">Python</div>
                    <div className="border-b border-black pb-2">Java</div>
                    <div className="border-b border-black pb-2">JavaScript</div>
                    <div className="border-b border-black pb-2">TypeScript</div>
                    <div className="pb-2">HTML/CSS</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-6 text-gray-800">{isEnglish ? 'Frameworks' : 'Frameworks'}</h3>
                  <div className="space-y-3">
                    <div className="border-b border-black pb-2">React</div>
                    <div className="border-b border-black pb-2">Next.js</div>
                    <div className="border-b border-black pb-2">Node.js</div>
                    <div className="border-b border-black pb-2">NestJS</div>
                    <div className="border-b border-black pb-2">Express</div>
                    <div className="border-b border-black pb-2">FastAPI</div>
                    <div className="pb-2">scikit-learn</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-6 text-gray-800">{isEnglish ? 'Databases' : 'Databases'}</h3>
                  <div className="space-y-3">
                    <div className="border-b border-black pb-2">PostgreSQL</div>
                    <div className="pb-2">Redis</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-6 text-gray-800">{isEnglish ? 'Tools' : 'Outils'}</h3>
                  <div className="space-y-3">
                    <div className="border-b border-black pb-2">Git</div>
                    <div className="border-b border-black pb-2">Docker</div>
                    <div className="border-b border-black pb-2">AWS</div>
                    <div className="border-b border-black pb-2">GitHub Actions</div>
                    <div className="pb-2">Tableau</div>
                  </div>
                </div>

              </div>
            </section>

            {/* Contacts Section */}
            <section>
              <h2 className="text-4xl md:text-5xl font-bold mb-10 text-black" style={{ fontFamily: 'ZalandoSansExpanded-SemiBold, Avenir, sans-serif' }}>
                {isEnglish ? 'Contacts' : 'Contacts'}
              </h2>
              
              <div className="space-y-3">
                <div className="relative pb-2">
                  <a href="mailto:shivam.patel@mail.mcgill.ca" className="contact-link"> <span className="contact-text">{isEnglish ? 'Email: ' : 'Courriel: '}shivam.patel@mail.mcgill.ca</span></a>
              <div className="absolute left-0 right-0 bottom-0 border-b border-black" style={{width: '150%'}}></div>
                </div>
                <div className="relative pb-2">
                  <a href="#" className="contact-link"><span className="contact-text">LinkedIn</span></a>
              <div className="absolute left-0 right-0 bottom-0 border-b border-black" style={{width: '150%'}}></div>
                </div>
                <div className="relative pb-2">
                  <a href="https://github.com/notsplol" className="contact-link"><span className="contact-text">GitHub</span></a>
              <div className="absolute left-0 right-0 bottom-0 border-b border-black" style={{width: '150%'}}></div>
                </div>
              </div>

              <div className="mt-16 text-gray-700">
                Sayonara <span className="wave" role="img" aria-label="waving-hand">👋</span>
              </div>
            </section>

          </div>
        )}

      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        @keyframes fade-in-slow {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
        .animate-fade-in-slow {
          animation: fade-in-slow 1.2s ease-out forwards;
        }
        /* emoji animation */
        @keyframes dance-bounce {
          0% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-6px) rotate(-8deg); }
          50% { transform: translateY(0) rotate(0deg); }
          75% { transform: translateY(-4px) rotate(8deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
        .dance {
          display: inline-block;
          font-size: 1.4rem;
          transform-origin: 50% 70%;
          animation: dance-bounce 1.6s ease-in-out infinite;
          will-change: transform;
        }
        .dance-container { line-height: 0; }
        /* Contacts hover animation */
        .contact-link {
          position: relative;
          display: inline-block;
          padding: 0.125rem 0.25rem;
          overflow: hidden;
          color: inherit;
          text-decoration: none;
        }
        .contact-link::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 0;
          background: #000;
          z-index: 0;
          transition: width 250ms cubic-bezier(.2,.8,.2,1);
        }
        .contact-link:hover::before,
        .contact-link:focus::before {
          width: 100%;
        }
        .contact-text {
          position: relative;
          z-index: 1;
          transition: color 200ms ease;
        }
        .contact-link:hover .contact-text,
        .contact-link:focus .contact-text {
          color: #fff;
        }
        /* Project hover animation */
        .project-link {
          --project-color-0: #1e40af; /* blue-800 */
          --project-color-1: #6b21a8; /* purple-800 */
          --project-color-2: #047857; /* emerald-700 */
          --project-color-3: #b91c1c; /* red-700 */
          --project-color-4: #d97706; /* amber-600 */
          --project-color-5: #3730a3; /* indigo-800 */
        }
        .project-title-container {
          height: 3rem; /* Same height as the number square (w-12 h-12) */
          display: flex;
          align-items: center;
          flex: 1;
        }
        .project-link:hover .project-overlay,
        .project-link:focus .project-overlay {
          width: 100%;
        }
        .project-link:hover .project-title,
        .project-link:focus .project-title {
          color: #fff;
        }
        /* Waving hand animation */
        @keyframes hand-wave {
          0% { transform: rotate(0deg); }
          15% { transform: rotate(14deg); }
          30% { transform: rotate(-8deg); }
          45% { transform: rotate(14deg); }
          60% { transform: rotate(-4deg); }
          100% { transform: rotate(0deg); }
        }
        .wave {
          display: inline-block;
          transform-origin: 70% 70%;
          animation: hand-wave 2s ease-in-out infinite;
        }
        /* Language toggle animation */
        .language-toggle {
          position: relative;
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;
        }
        .language-toggle::after {
          content: '';
          position: absolute;
          width: 0;
          height: 1px;
          bottom: -2px;
          left: 50%;
          background-color: currentColor;
          transition: width 0.3s ease-out, left 0.3s ease-out;
        }
        .language-toggle:hover::after {
          width: 100%;
          left: 0;
        }
        /* Remove outline/visual jump on mouse click while preserving keyboard focus */
        .language-toggle:focus {
          outline: none;
          box-shadow: none;
        }
        .language-toggle:focus-visible {
          /* subtle focus ring for keyboard users */
          outline: 2px solid rgba(0,0,0,0.12);
          outline-offset: 3px;
        }
        /* Disable click/active animation (no scale/underline jump on mouse down) */
        .language-toggle:active {
          transform: none !important;
          transition: none !important;
        }
      `}</style>
    </div>
  )
}

export default App
