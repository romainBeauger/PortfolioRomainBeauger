import { useState } from 'react'
import emailjs from 'emailjs-com'
import { Send, CheckCircle, AlertCircle, Mail, MapPin } from 'lucide-react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      await emailjs.send(
        'service_j1po3gc',
        'template_7uemrk9',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        'Esvc7w62Vy005jwHO'
      )

      setStatus({
        type: 'success',
        message: 'Message envoyé avec succès ! Je vous répondrai bientôt.'
      })
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setStatus({
        type: 'error',
        message: `Une erreur est survenue : ${error}. Veuillez réessayer.`
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative py-20 bg-gray-50">

      
      

      <div className="container mx-auto px-4 md:px-8">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 mt-10 text-primary-dark">
            Contactez-moi
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12">
            Une question ? Un projet ? N'hésitez pas à me contacter
          </p>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Informations de contact */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary-dark mb-4">
                Informations
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Je suis disponible pour des projets freelance ou des opportunités
                d'emploi. N'hésitez pas à me contacter !
              </p>

              <div className="space-y-4">
                {/* <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent-blue/10 rounded-full flex items-center justify-center">
                    <Mail className="text-accent-blue" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-primary-dark">Email</p>
                    <p className="text-gray-600">romain.beauger@gmail.com</p>
                  </div>
                </div> */}

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent-blue/10 rounded-full flex items-center justify-center">
                    <MapPin className="text-accent-blue" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-primary-dark">Localisation</p>
                    <p className="text-gray-600">Poitiers, France</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulaire */}
            <form onSubmit={handleSubmit} className="space-y-4 mb-10">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-accent-blue focus:outline-none transition-colors"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Votre email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-accent-blue focus:outline-none transition-colors"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Sujet"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-accent-blue focus:outline-none transition-colors"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Votre message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-accent-blue focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Message de statut */}
              {status.message && (
                <div className={`flex items-center gap-2 p-4 rounded-lg ${
                  status.type === 'success' 
                    ? 'bg-green-50 text-green-700' 
                    : 'bg-red-50 text-red-700'
                }`}>
                  {status.type === 'success' ? (
                    <CheckCircle size={20} />
                  ) : (
                    <AlertCircle size={20} />
                  )}
                  <span>{status.message}</span>
                </div>
              )}

              {/* Bouton submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary-dark text-white font-semibold rounded-lg hover:bg-primary transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSubmitting ? (
                  'Envoi en cours...'
                ) : (
                  <>
                    <Send size={20} />
                    Envoyer le message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Séparateur arrondi */}
      <div className="absolute bottom-0 left-0 w-full ">
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            fill="#0d0b27"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  )
}

export default Contact