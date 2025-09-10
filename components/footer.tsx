"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-6 lg:px-12 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Mohamed</h3>
            <p className="text-muted-foreground">Full Stack Developer</p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-card hover:bg-accent transition-all duration-300 hover:scale-110 group"
            >
              <Github className="h-5 w-5 group-hover:text-accent-foreground" />
            </a>
            <a
              href="https://www.linkedin.com/in/a-mohamed-/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-card hover:bg-accent transition-all duration-300 hover:scale-110 group"
            >
              <Linkedin className="h-5 w-5 group-hover:text-accent-foreground" />
            </a>
            <a
              href="mailto:Mohamedkav5@gmail.com"
              className="p-2 rounded-full bg-card hover:bg-accent transition-all duration-300 hover:scale-110 group"
            >
              <Mail className="h-5 w-5 group-hover:text-accent-foreground" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-border text-center"
        >
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} Mohamed. Made with <Heart className="h-4 w-4 text-red-500 fill-current" /> and lots of
            coffee.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
