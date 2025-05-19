"use client"

import { motion } from "framer-motion"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-sm border"
    >
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-3xl font-bold">EMMANUEL UCHEKA EDOBOR</h1>
          <p className="text-xl text-muted-foreground mt-2">Front-End Developer</p>
        </div>
        <Button className="gap-2" onClick={() => window.print()}>
          <Download className="h-4 w-4" />
          Print/Save PDF
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold border-b pb-2 mb-3">DETAILS</h2>
            <div className="space-y-2">
              <p>
                <span className="font-medium">Address:</span>
                <br />
                Magboro, OGUN 121101, Nigeria
              </p>
              <p>
                <span className="font-medium">Phone:</span>
                <br />
                09037441641
              </p>
              <p>
                <span className="font-medium">Email:</span>
                <br />
                emmanueledobor34@gmail.com
              </p>
              <p>
                <span className="font-medium">LinkedIn:</span>
                <br />
                <a
                  href="https://www.linkedin.com/in/emmanuel-edobor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  linkedin.com/in/emmanuel-edobor
                </a>
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold border-b pb-2 mb-3">SKILLS</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Painting</li>
              <li>Web development</li>
              <li>Content creation</li>
              <li>Illustration</li>
              <li>Digital painting</li>
              <li>Technical writing</li>
              <li>Sketching</li>
              <li>Live painting and drawing</li>
              <li>Problem Solving</li>
              <li>Microsoft Office</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold border-b pb-2 mb-3">LANGUAGES</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>English</li>
              <li>French</li>
            </ul>
          </div>
        </div>

        <div className="md:col-span-2 space-y-6">
          <div>
            <h2 className="text-xl font-semibold border-b pb-2 mb-3">SUMMARY</h2>
            <p className="mb-3">Front-End Developer | HTML, CSS (Bootstrap & Tailwind) JavaScript (React & Nextjs).</p>
            <p>
              Passionate about building interactive, user-friendly web applications. Skilled in JavaScript, React,
              Next.js, HTML, CSS, and ShadCN, with a focus on clean code and seamless UI/UX. Always learning and eager
              to contribute to innovative projects.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold border-b pb-2 mb-3">EDUCATION</h2>
            <div>
              <h3 className="font-medium">BFA - Painting</h3>
              <p className="flex justify-between">
                <span className="text-muted-foreground">AMBROSE ALLI UNIVERSITY</span>
                <span className="text-muted-foreground">Jan 2019 - Apr 2023</span>
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold border-b pb-2 mb-3">EXPERIENCE</h2>
            <div>
              <div className="flex justify-between">
                <h3 className="font-medium">Intern</h3>
                <span className="text-muted-foreground">Sept 2024 – March 2025</span>
              </div>
              <p className="text-muted-foreground mb-2">SOFTLYFT TECHNOLOGY (DIGITAL CENTER AND TECH HUB)</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Assisted in the development of front-end components for web applications using Next.js, Tailwind CSS,
                  and ShadCN.
                </li>
                <li>
                  Collaborated with designers and backend developers to implement responsive and user-friendly
                  interfaces.
                </li>
                <li>Gained experience in optimizing web performance and accessibility best practices.</li>
                <li>Worked on real-world projects, enhancing UI/UX through structured feedback and iteration.</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold border-b pb-2 mb-3">PROJECTS</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between">
                  <h3 className="font-medium">RiddleQuest – Interactive Puzzle Game</h3>
                  <span className="text-muted-foreground">Jan 2025</span>
                </div>
                <p className="text-muted-foreground mb-1">
                  Tech Stack: Next.js, Tailwind CSS, ShadCN, TypeScript (TSX)
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Developed an engaging riddle-solving web game that challenges users with logic-based puzzles.</li>
                  <li>Built a responsive and visually appealing UI using ShadCN and Tailwind CSS.</li>
                  <li>Implemented state management to track user progress, scoring, and game difficulty levels.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between">
                  <h3 className="font-medium">WebflowX – Dynamic Landing Page System</h3>
                  <span className="text-muted-foreground">Dec 2024</span>
                </div>
                <p className="text-muted-foreground mb-1">Tech Stack: Next.js, Tailwind CSS</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    Designed and built high-performance landing pages optimized for speed, SEO, and user engagement.
                  </li>
                  <li>Integrated modern UI/UX practices to enhance accessibility and responsiveness.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between">
                  <h3 className="font-medium">IDGen – Secure Ticket Code Generator</h3>
                  <span className="text-muted-foreground">Jan 2025</span>
                </div>
                <p className="text-muted-foreground mb-1">Tech Stack: Next.js, Tailwind CSS</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Developed a ticket code generation system for secure access control and event management.</li>
                  <li>Ensured randomized unique codes using secure hashing algorithms.</li>
                  <li>Created a minimalist UI with Tailwind CSS for seamless user experience.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between">
                  <h3 className="font-medium">Auth Flow – Modern Login System</h3>
                  <span className="text-muted-foreground">Jan 2025</span>
                </div>
                <p className="text-muted-foreground mb-1">Tech Stack: Next.js, Tailwind CSS</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Built a secure and responsive login page with form validation and authentication handling.</li>
                  <li>Implemented a modern UI with adaptive design for different screen sizes (Media Query).</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between">
                  <h3 className="font-medium">ColorCraze – Interactive Color Guessing Game</h3>
                  <span className="text-muted-foreground">Nov 2024</span>
                </div>
                <p className="text-muted-foreground mb-1">Tech Stack: HTML, CSS, Vanilla JavaScript</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    Designed and developed a fun, interactive game that tests users' ability to guess correct color
                    codes.
                  </li>
                  <li>Implemented dynamic color logic and scoring system using JavaScript.</li>
                  <li>Optimized for smooth performance and cross-browser compatibility.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between">
                  <h3 className="font-medium">HNG ProfileMaster – Personalized Profile Card</h3>
                  <span className="text-muted-foreground">Jan 2025</span>
                </div>
                <p className="text-muted-foreground mb-1">Tech Stack: Next.js, ShadCN, Tailwind CSS</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Created a dynamic profile card system as part of the HNG Tech Internship.</li>
                  <li>Integrated smooth animations and interactive elements for professional user experience.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between">
                  <h3 className="font-medium">Tunde Onakoya – Thread Art Masterpiece</h3>
                  <span className="text-muted-foreground">May 2024 – Jun 2024</span>
                </div>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    Created a highly detailed thread art portrait of Tunde Onakoya, the Guinness World Record holder for
                    chess (2024).
                  </li>
                  <li>Showcased intricate thread art techniques with depth and shading for realism.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between">
                  <h3 className="font-medium">Hope of an African Child – Thread Art Exhibition Piece</h3>
                  <span className="text-muted-foreground">Mar 2024 – Apr 2024</span>
                </div>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    Crafted a symbolic thread art portrait highlighting the resilience and hope of African children.
                  </li>
                  <li>Featured in local art exhibitions as a cultural and artistic statement.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
