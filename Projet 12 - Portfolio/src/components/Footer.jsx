// Footer.jsx - Version 100% Tailwind CSS
import { Github, Linkedin, Mail } from 'lucide-react'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0a0e27] text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="text-white/70 text-center md:text-left">
            © {currentYear} Romain Beauger. Tous droits réservés.
          </p>

          {/* Liens sociaux */}
          <div className="flex gap-6">
            <a
              href="https://github.com/romainBeauger"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-all duration-300 hover:-translate-y-1"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/rbeauger"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-all duration-300 hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:romain.beauger@gmail.com"
              className="text-white/70 hover:text-white transition-all duration-300 hover:-translate-y-1"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer