import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiReact, 
  SiGithub, 
  SiTailwindcss,
  SiSass,
  SiBootstrap,
  SiAngular,
  SiNodedotjs,
  SiSymfony,
} from 'react-icons/si'

const skills = [
  { 
    name: 'HTML5', 
    icon: SiHtml5, 
    level: 90,
    color: '#E34F26' // Orange HTML5
  },
  { 
    name: 'CSS3', 
    icon: SiCss3, 
    level: 90,
    color: '#1572B6' // Bleu CSS3
  },
  { 
    name: 'Sass', 
    icon: SiSass, 
    level: 70,
    color: '#CC6699' // Rose Sass
  },
  { 
    name: 'Bootstrap', 
    icon: SiBootstrap, 
    level: 75,
    color: '#7952B3' // Violet Bootstrap
  },
  { 
    name: 'Tailwind CSS', 
    icon: SiTailwindcss, 
    level: 85,
    color: '#06B6D4' // Cyan Tailwind
  },
  { 
    name: 'JavaScript', 
    icon: SiJavascript, 
    level: 85,
    color: '#F7DF1E' // Jaune JavaScript
  },
  {
    name: 'React ',
    icon: SiReact,
    level: 80,
    color: '#61DAFB' // Cyan React
  },{
    name: 'Angular',
    icon: SiAngular,
    level: 70,
    color: '#d80836' // Cyan React
  },
  {
    name: 'Node JS',
    icon: SiNodedotjs,
    level: 80,
    color: '#6da066' // Cyan React
  },{
    name: 'Symfony',
    icon: SiSymfony,
    level: 80,
    color: '#000000' // Cyan React
  },
  {
    name: 'GitHub', 
    icon: SiGithub, 
    level: 75,
    color: '#181717' // Noir GitHub
  }
]

function Skills() {
  return (
    <section id="skills" className="relative py-20 bg-gray-50">      
      <div className="container mx-auto px-4 md:px-8">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary-dark">
            Mes Compétences
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12">
            Les technologies que j'utilise
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <div
                  key={skill.name}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Logo avec couleur officielle */}
                  <div className="flex justify-center mb-4">
                    <Icon 
                      className="text-6xl transition-transform duration-300 hover:scale-110" 
                      style={{ color: skill.color }}
                    />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-center mb-4 text-primary-dark">
                    {skill.name}
                  </h3>
                  
                  {/* Barre de progression */}
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out animate-progress"
                      style={{ 
                        width: `${skill.level}%`,
                        backgroundColor: skill.color 
                      }}
                    />
                  </div>
                  <p className="text-right text-sm text-gray-500 mt-2">{skill.level}%</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>          
    </section>    
  )
}

export default Skills