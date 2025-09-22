import { useState, useEffect } from 'react'

function App() {
  const [currentText, setCurrentText] = useState('')
  const [showContent, setShowContent] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const fullText = "Hey, I'm Shivam"

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
      <div className="max-w-4xl mx-auto px-8 py-16">
        
        {/* Hero Section */}
        <div className="mb-20">
          <div className="flex items-center gap-6 mb-14">
            <h1 className="text-5xl md:text-7xl font-bold text-black" style={{ fontFamily: 'ZalandoSansExpanded-Bold, Avenir, sans-serif' }}>
              <span>{currentText}</span>
              <span className="inline-block bg-black w-1 animate-blink">&nbsp;</span>
            </h1>
            {/* emoji ppears after typing completes */}
            {currentIndex >= fullText.length && (
              <div className="dance-container opacity-0 animate-fade-in-slow" style={{animationDelay: '0.05s'}}>
                <span className="dance" role="img" aria-label="dancing">🧿</span>
              </div>
            )}
          </div>
          
          {showContent && (
            <div className="opacity-0 animate-fade-in-slow">
              <p className="text-xl text-gray-700 leading-relaxed max-w-full">
                Welcome to my website! I'm a 3rd year Honours Mathematics and Computer Science student at McGill University.
                I've made scalable software for businesses, worked with large established codebases and aim to get better everyday.
                My passions include Compilers, Machine Learning, and Mathematics.
              </p>
            </div>
          )}
        </div>

        {showContent && (
          <div className="space-y-20 opacity-0 animate-fade-in-slow" style={{animationDelay: '0.3s'}}>
            
            {/* Experience Section */}
            <section>
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-black" style={{ fontFamily: 'ZalandoSansExpanded-SemiBold, Avenir, sans-serif' }}>Experience</h2>
              <div className="space-y-8">
                <div className="relative pb-6">
                  <div className="text-sm text-gray-600 mb-1">aug 2025 - now</div>
                  <div className="text-lg">
                    <span className="font-semibold">Undergraduate Researcher</span> @ 
                    <span className="underline decoration-2 underline-offset-2 ml-1 font-semibold">McGill University</span>
                  </div>
                    <div className="absolute left-0 right-0 bottom-0 border-b border-black" style={{width: '150%'}}></div>
                </div>
                <div className="pb-6">
                  <div className="text-sm text-gray-600 mb-1">may 2025 - jul 2025</div>
                  <div className="text-lg">
                    <span className="font-semibold">Software Developer Intern</span> @
                    <span className="underline decoration-2 underline-offset-2 ml-1 font-semibold">Patel Tax Services</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black" style={{ fontFamily: 'ZalandoSansExpanded-SemiBold, Avenir, sans-serif' }}>Projects</h2>
              <p className="text-gray-700 mb-12 max-w-7xl">
                Some of my recent projects which include React, Node.js, Python, Typescript 
                and various modern web technologies.
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
                    href="#"
                    className="block border-b border-black pb-6 focus:outline-none"
                    tabIndex={0}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 ${proj.color} flex items-center justify-center`}>
                        <span className="text-white text-sm font-bold">{proj.num}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-black">
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
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-black" style={{ fontFamily: 'ZalandoSansExpanded-SemiBold, Avenir, sans-serif' }}>Tech Stack</h2>
              
              <div className="grid md:grid-cols-4 gap-12">
                
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-gray-800">Languages</h3>
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
                  <h3 className="text-xl font-semibold mb-6 text-gray-800">Frameworks</h3>
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
                  <h3 className="text-xl font-semibold mb-6 text-gray-800">Databases</h3>
                  <div className="space-y-3">
                    <div className="border-b border-black pb-2">PostgreSQL</div>
                    <div className="pb-2">Redis</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-6 text-gray-800">Tools</h3>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-black" style={{ fontFamily: 'ZalandoSansExpanded-SemiBold, Avenir, sans-serif' }}>Contacts</h2>
              
              <div className="space-y-6">
                <div className="relative pb-4">
                  <a href="mailto:shivam.patel@mail.mcgill.ca" className="contact-link"> <span className="contact-text">Email: shivam.patel@mail.mcgill.ca</span></a>
              <div className="absolute left-0 right-0 bottom-0 border-b border-black" style={{width: '150%'}}></div>
                </div>
                <div className="relative pb-4">
                  <a href="#" className="contact-link"><span className="contact-text">LinkedIn</span></a>
              <div className="absolute left-0 right-0 bottom-0 border-b border-black" style={{width: '150%'}}></div>
                </div>
                <div className="relative pb-4">
                  <a href="https://github.com/notsplol" className="contact-link"><span className="contact-text">GitHub</span></a>
              <div className="absolute left-0 right-0 bottom-0 border-b border-black" style={{width: '150%'}}></div>
                </div>
              </div>

              <div className="mt-12 text-gray-700">
                Sayonara 👋
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
        /* Dancing emoji animation */
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
        /* Contacts hover overlay */
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
      `}</style>
    </div>
  )
}

export default App
