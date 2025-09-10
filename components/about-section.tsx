"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Lightbulb, Users, Zap } from "lucide-react"

const highlights = [
  {
    icon: <Code className="h-8 w-8" />,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and efficient code following best practices.",
  },
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "Problem Solver",
    description: "Analytical thinking to break down complex problems into simple solutions.",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Team Player",
    description: "Collaborative approach with excellent communication and leadership skills.",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Fast Learner",
    description: "Quick to adapt to new technologies and frameworks in the ever-evolving tech landscape.",
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
            About <span className="text-accent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            I'm a passionate full-stack developer with expertise in modern web technologies. I love creating digital
            experiences that are not only functional but also beautiful and user-friendly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-pretty">
                With a strong foundation in both frontend and backend development, I specialize in creating full-stack
                applications using React, Node.js, Python, and modern cloud technologies.
              </p>
              <p className="text-pretty">
                My passion lies in solving complex problems through code and creating seamless user experiences. I'm
                constantly learning new technologies and staying up-to-date with industry best practices.
              </p>
              <p className="text-pretty">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing knowledge with the developer community.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="text-accent mb-4 flex justify-center">{highlight.icon}</div>
                    <h4 className="font-semibold mb-2">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground text-pretty">{highlight.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
