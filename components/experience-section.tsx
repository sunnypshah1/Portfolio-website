import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    company: "Wayne State University",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wayne-state-9Doku3jRNT4uzwf619E0mg1sfXHytI.png",
    title: "Software Engineer Intern - Research",
    date: "November 2023 – August 2024",
    description:
      "Developed drone designs in CAD software, improved lift-induced drag and air resistance through iterative tests and simulations. Utilized Power BI and Python for data visualization and analysis.",
  },
  {
    company: "theCoderSchool",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/coder-school-BQsyrHMJm24jxbjn4ZtiEPs4eBEaf3.png",
    title: "Code Coach",
    date: "July 2022 – September 2022",
    description:
      "Mentored students in various programming languages, developed adaptable curriculums, and fostered a collaborative learning environment resulting in improved student performance.",
  },
  {
    company: "My Hydro Depot",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hydro-depot-OKmGe245biKgjGcNOoYtGCP7pK627P.png",
    title: "Web Developer",
    date: "July 2020 – July 2022",
    description:
      "Built a business website using React, implemented SEO strategies, and improved website accessibility and performance using AWS hosting.",
  },
]

export function ExperienceSection() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-8">Experience</h2>

      <div className="space-y-8">
        {experiences.map((exp) => (
          <Card key={exp.company} className="bg-secondary/50 border-white/10">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12">
                    <Image
                      src={exp.logo || "/placeholder.svg"}
                      alt={`${exp.company} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <CardTitle>{exp.company}</CardTitle>
                    <p className="text-purple-400">{exp.title}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-400">{exp.date}</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">{exp.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

