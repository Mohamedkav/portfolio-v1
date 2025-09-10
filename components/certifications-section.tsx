"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, Building } from "lucide-react";
import Image from "next/image";

const certifications = [
  {
    title: "Cloud Foundations",
    provider: "Great Learning Academy",
    date: "2023",
    description:
      "Comprehensive certification covering cloud computing fundamentals, including AWS services, cloud architecture, security best practices, and deployment strategies. This certification demonstrates proficiency in designing and implementing cloud-based solutions.",
    image: "/cloud-certificate.png",
    skills: ["AWS", "Cloud Architecture", "Security", "DevOps", "Scalability"],
    credentialId: "GL-2023-CC-001",
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
            <span className="text-accent">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Professional certifications that validate my expertise and
            commitment to continuous learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="cursor-pointer hover:shadow-xl transition-all duration-300 group overflow-hidden">
                    <div className="relative overflow-hidden">
                      <Image
                        src={cert.image || "/placeholder.svg"}
                        alt={`${cert.title} Certificate`}
                        width={600}
                        height={400}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                        <Badge className="bg-accent text-accent-foreground">
                          Click to view details
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-6 text-center">
                      <div className="flex justify-center mb-3">
                        <Award className="h-8 w-8 text-accent" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        {cert.provider}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {cert.date}
                      </p>
                    </CardContent>
                  </Card>
                </DialogTrigger>

                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl text-accent">
                      {cert.title}
                    </DialogTitle>
                  </DialogHeader>

                  <div className="space-y-6">
                    <div className="relative rounded-lg overflow-hidden">
                      <Image
                        src={cert.image || "/placeholder.svg"}
                        alt={`${cert.title} Certificate`}
                        width={600}
                        height={400}
                        className="w-full h-auto"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <Building className="h-5 w-5 text-accent" />
                          <span className="font-semibold">Provider:</span>
                          <span>{cert.provider}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <Calendar className="h-5 w-5 text-accent" />
                          <span className="font-semibold">Date:</span>
                          <span>{cert.date}</span>
                        </div>

                        <div>
                          <span className="font-semibold">Credential ID:</span>
                          <p className="text-muted-foreground">
                            {cert.credentialId}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">
                            Skills Covered:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {cert.skills.map((skill) => (
                              <Badge key={skill} variant="secondary">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Description:</h4>
                      <p className="text-muted-foreground text-pretty">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
