"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, MessageCircle } from "lucide-react";
import Image from "next/image";
const viewResume = () =>
  window.open("/resume.pdf", "_blank", "noopener,noreferrer");

export default function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 lg:px-12"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative cursor-pointer"
          >
            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-accent shadow-2xl">
              <Image
                src="https://media.licdn.com/dms/image/v2/D5603AQG1mXm3E3VJ7g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729483646282?e=1760572800&v=beta&t=l8o7YClbLdJbm-YP2b8xinyVNeDgDnEdkZx8jsH8BB4"
                alt="Mohamed A - Software Engineer"
                width={320}
                height={320}
                className="w-full h-full object-cover transition-transform duration-500"
              />
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute -inset-4 rounded-full border-2 border-dashed border-accent/30"
            />
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center lg:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-5xl lg:text-7xl font-bold mb-4 text-balance"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent [&]:text-accent">
              Mohamed A
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-2xl lg:text-3xl font-semibold mb-6 text-muted-foreground"
          >
            Software Engineer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-lg text-muted-foreground mb-8 max-w-2xl text-pretty"
          >
            Computer Science Engineering graduate with strong skills in Python
            and SQL. Passionate about developing efficient programs and managing
            databases with a keen interest in solving real-world problems
            through technology.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <Button size="lg" className="group" onClick={scrollToContact}>
              <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Contact Me
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group bg-transparent"
              onClick={viewResume}
            >
              <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              View Resume
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex justify-center lg:justify-start gap-6"
          >
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-accent transition-all duration-300 hover:scale-110 group"
            >
              <Github className="h-6 w-6 group-hover:text-accent-foreground" />
            </a>
            <a
              href="https://www.linkedin.com/in/a-mohamed-/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-accent transition-all duration-300 hover:scale-110 group"
            >
              <Linkedin className="h-6 w-6 group-hover:text-accent-foreground" />
            </a>
            <a
              href="mailto:Mohamedkav5@gmail.com"
              className="p-3 rounded-full bg-card hover:bg-accent transition-all duration-300 hover:scale-110 group"
            >
              <Mail className="h-6 w-6 group-hover:text-accent-foreground" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
