"use client"

import { motion } from "framer-motion"

export default function SkillsSection() {
  const skills = [
    { name: "Python", icon: "logos:python", level: 90 },
    { name: "JavaScript", icon: "logos:javascript", level: 85 },
    { name: "React", icon: "logos:react", level: 80 },
    { name: "HTML5", icon: "logos:html-5", level: 90 },
    { name: "CSS3", icon: "logos:css-3", level: 85 },
    { name: "Tailwind CSS", icon: "logos:tailwindcss-icon", level: 80 },
    { name: "Node.js", icon: "logos:nodejs-icon", level: 75 },
    { name: "Express.js", icon: "logos:express", level: 75 },
    { name: "FastAPI", icon: "logos:fastapi-icon", level: 70 },
    { name: "MySQL", icon: "logos:mysql-icon", level: 85 },
    { name: "MongoDB", icon: "logos:mongodb-icon", level: 75 },
    { name: "Git", icon: "logos:git-icon", level: 80 },
    { name: "GitHub", icon: "logos:github-icon", level: 80 },
    { name: "VS Code", icon: "logos:visual-studio-code", level: 90 },
    { name: "Jest", icon: "logos:jest", level: 65 },
    { name: "Webpack", icon: "logos:webpack", level: 60 },
  ]

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            whileInView={{ scale: [0.9, 1.1, 1] }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 inline-block relative">
              Technical Skills
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-primary"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              />
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-primary/50 transition-all"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 mr-3">
                    <iconify-icon icon={skill.icon} width="40" height="40" className="w-full h-full" />
                  </div>
                  <h3 className="font-medium">{skill.name}</h3>
                </div>

                <div className="w-full bg-gray-800 rounded-full h-2.5">
                  <motion.div
                    className="h-2.5 rounded-full bg-gradient-to-r from-blue-400 to-blue-600"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.05 }}
                    viewport={{ once: true }}
                  />
                </div>
                <div className="mt-2 text-right text-xs text-gray-400">{skill.level}%</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
