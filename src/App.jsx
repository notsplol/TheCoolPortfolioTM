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
    }, 100)

    return () => clearTimeout(timer)
  }, [currentIndex, fullText, showContent])

  return (
    <div className="min-h-screen bg-stone-100 text-gray-900" style={{ fontFamily: 'ZalandoSansExpanded-Regular, Avenir, sans-serif' }}>
      <div className="max-w-4xl mx-auto px-8 py-16">
        
        {/* Hero Section */}
        <div className="mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-14 text-black" style={{ fontFamily: 'ZalandoSansExpanded-Bold, Avenir, sans-serif' }}>
            <span>{currentText}</span>
            <span className="inline-block bg-black w-1 animate-blink">&nbsp;</span>
          </h1>
          
          {showContent && (
            <div className="opacity-0 animate-fade-in-slow">
              <p className="text-xl text-gray-700 leading-relaxed max-w-8xl">
                I'm a 3rd year Honours Computer Science and Mathematics student at McGill University.
                I'm obsessed with being the best software engineer I can be and I try to improve everyday. My passions include Compilers,
                Machine Learning, and Mathematics.
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
                  <div className="absolute left-0 right-0 bottom-0 border-b border-gray-400" style={{width: '150%'}}></div>
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
                {/* Project Card List - 6 only, colored numbers, clickable, black text */}
                {[
                  { color: 'bg-blue-500', num: '01', title: 'Ad Astra' },
                  { color: 'bg-purple-600', num: '02', title: 'Tax Management App' },
                  { color: 'bg-green-500', num: '03', title: 'Code Review CLI' },
                  { color: 'bg-red-500', num: '04', title: 'Portfolio Website' },
                  { color: 'bg-yellow-500', num: '05', title: 'ETCA-GCC' },
                  { color: 'bg-indigo-500', num: '06', title: 'OS Simulation' },
                ].map((proj, i) => (
                  <a
                    key={proj.num}
                    href="#"
                    className="block border-b border-gray-400 pb-6 focus:outline-none"
                    tabIndex={0}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 ${proj.color} rounded-lg flex items-center justify-center`}>
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
                    <div className="border-b border-gray-300 pb-2">C/C++</div>
                    <div className="border-b border-gray-300 pb-2">Python</div>
                    <div className="border-b border-gray-300 pb-2">Java</div>
                    <div className="border-b border-gray-300 pb-2">JavaScript</div>
                    <div className="border-b border-gray-300 pb-2">TypeScript</div>
                    <div className="pb-2">HTML/CSS</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-6 text-gray-800">Frameworks</h3>
                  <div className="space-y-3">
                    <div className="border-b border-gray-300 pb-2">React</div>
                    <div className="border-b border-gray-300 pb-2">Next.js</div>
                    <div className="border-b border-gray-300 pb-2">Node.js</div>
                    <div className="border-b border-gray-300 pb-2">NestJS</div>
                    <div className="border-b border-gray-300 pb-2">Express</div>
                    <div className="border-b border-gray-300 pb-2">FastAPI</div>
                    <div className="border-b border-gray-300 pb-2">scikit-learn</div>
                    <div className="pb-2">Tailwind CSS</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-6 text-gray-800">Databases</h3>
                  <div className="space-y-3">
                    <div className="border-b border-gray-300 pb-2">PostgreSQL</div>
                    <div className="pb-2">Redis</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-6 text-gray-800">Tools</h3>
                  <div className="space-y-3">
                    <div className="border-b border-gray-300 pb-2">Git</div>
                    <div className="border-b border-gray-300 pb-2">Docker</div>
                    <div className="border-b border-gray-300 pb-2">AWS</div>
                    <div className="border-b border-gray-300 pb-2">GitHub Actions</div>
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
                  <span>Email: </span>
                  <a href="mailto:shivam.patel@mail.mcgill.ca" className="hover:underline">shivam.patel@mail.mcgill.ca</a>
                  <div className="absolute left-0 right-0 bottom-0 border-b border-gray-400" style={{width: '150%'}}></div>
                </div>
                <div className="relative pb-4">
                  <a href="#" className="hover:underline">LinkedIn</a>
                  <div className="absolute left-0 right-0 bottom-0 border-b border-gray-400" style={{width: '150%'}}></div>
                </div>
                <div className="relative pb-4">
                  <a href="#" className="hover:underline">GitHub</a>
                  <div className="absolute left-0 right-0 bottom-0 border-b border-gray-400" style={{width: '150%'}}></div>
                </div>
                <div className="relative pb-4">
                  <a href="#" className="hover:underline">Twitter</a>
                  <div className="absolute left-0 right-0 bottom-0 border-b border-gray-400" style={{width: '150%'}}></div>
                </div>
                <div className="relative pb-4">
                  <a href="#" className="hover:underline">Instagram</a>
                  <div className="absolute left-0 right-0 bottom-0 border-b border-gray-400" style={{width: '150%'}}></div>
                </div>
                <div className="relative pb-4">
                  <a href="#" className="hover:underline">Dribbble</a>
                  <div className="absolute left-0 right-0 bottom-0 border-b border-gray-400" style={{width: '150%'}}></div>
                </div>
                <div className="pb-4">
                  <a href="#" className="hover:underline">CodePen</a>
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
      `}</style>
    </div>
  )
}

export default App
