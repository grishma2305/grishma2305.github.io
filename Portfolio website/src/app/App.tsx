import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Code2, Database, Cloud, Server, Users, Award, GraduationCap, Briefcase } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0F19]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#0B0F19]/95 backdrop-blur-lg z-50 border-b border-[#1F2937]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold text-xl text-[#E6EDF3]">Grishma Thumar</h1>
          <div className="flex gap-8">
            <a href="#about" className="text-[#9BA3B4] hover:text-[#3B82F6] transition font-medium">About</a>
            <a href="#skills" className="text-[#9BA3B4] hover:text-[#3B82F6] transition font-medium">Skills</a>
            <a href="#projects" className="text-[#9BA3B4] hover:text-[#3B82F6] transition font-medium">Projects</a>
            <a href="#experience" className="text-[#9BA3B4] hover:text-[#3B82F6] transition font-medium">Experience</a>
            <a href="#contact" className="text-[#9BA3B4] hover:text-[#3B82F6] transition font-medium">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="w-36 h-36 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#22C55E] flex items-center justify-center text-white text-5xl font-bold shadow-2xl mb-8">
              GT
            </div>
            <h1 className="text-6xl font-bold text-[#E6EDF3] mb-4">
              Grishma Thumar
            </h1>
            <p className="text-2xl text-[#9BA3B4] font-semibold mb-6">Computer Science Student & Software Engineer</p>
            <p className="text-lg text-[#9BA3B4] max-w-2xl mb-10 leading-relaxed">
              Passionate about distributed systems, cloud infrastructure, and building scalable applications.
              Dean's List student with <span className="font-semibold text-[#22C55E]">3.93 GPA</span> seeking impactful internship opportunities.
            </p>
            <div className="flex gap-4 mb-10">
              <a href="mailto:gthumar@sfsu.edu" className="flex items-center gap-2 px-8 py-4 bg-[#3B82F6] text-white rounded-lg hover:bg-[#2563EB] hover:shadow-xl hover:shadow-[#3B82F6]/20 transition-all duration-200 font-semibold">
                <Mail size={20} />
                Contact Me
              </a>
              <a href="https://github.com/grishma2305/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-[#374151] text-[#E6EDF3] rounded-lg hover:border-[#3B82F6] hover:text-[#3B82F6] hover:shadow-lg transition-all duration-200 font-semibold">
                <Github size={20} />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/gthumar/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-[#374151] text-[#E6EDF3] rounded-lg hover:border-[#3B82F6] hover:text-[#3B82F6] hover:shadow-lg transition-all duration-200 font-semibold">
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
            <div className="flex gap-8 text-[#9BA3B4]">
              <div className="flex items-center gap-2 bg-[#1F2937] px-4 py-2 rounded-lg">
                <Phone size={18} className="text-[#22C55E]" />
                <span className="font-medium">(415) 740-7237</span>
              </div>
              <div className="flex items-center gap-2 bg-[#1F2937] px-4 py-2 rounded-lg">
                <MapPin size={18} className="text-[#22C55E]" />
                <span className="font-medium">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-[#0B0F19]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#E6EDF3] mb-12 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#1F2937] rounded-2xl p-8 border border-[#374151]">
              <div className="space-y-5 text-[#9BA3B4] leading-relaxed">
                <p>
                  I'm a Computer Science student at San Francisco State University with a <span className="font-semibold text-[#22C55E]">3.93 GPA</span>,
                  on the Dean's List from Fall 2022 to Fall 2025. I'm passionate about building robust,
                  scalable systems and have hands-on experience with full-stack development, distributed systems,
                  and cloud infrastructure.
                </p>
                <p>
                  As <span className="font-semibold text-[#3B82F6]">CTO of the SFSU Tutoring Platform</span>, I lead a 5-member engineering team using Agile methodologies.
                  I've also built a distributed log monitoring system with Dockerized microservices, demonstrating my
                  interest in systems programming and infrastructure.
                </p>
                <p>
                  Beyond coding, I'm actively involved in leadership roles including <span className="font-semibold text-[#3B82F6]">Vice President of SparkSF</span>,
                  Logistics Team Lead for SF Hacks, and Social Media Chair for the Society of Women Engineers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-[#0D1117]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#E6EDF3] mb-4 text-center">Technical Skills</h2>
          <p className="text-center text-[#9BA3B4] mb-12 max-w-2xl mx-auto">
            Proficient in modern technologies and frameworks for building scalable, efficient applications
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard
              icon={<Code2 className="text-[#22C55E]" size={32} />}
              title="Languages & Tools"
              skills={["Python", "Java", "C/C++", "JavaScript", "React", "TypeScript", "HTML/CSS", "TailwindCSS"]}
              gradient="from-[#22C55E] to-[#10B981]"
            />
            <SkillCard
              icon={<Server className="text-[#9BA3B4]" size={32} />}
              title="Systems"
              skills={["Linux/Unix", "Multithreading", "Process Management", "Memory Systems"]}
              gradient="from-[#6B7280] to-[#4B5563]"
            />
            <SkillCard
              icon={<Cloud className="text-[#3B82F6]" size={32} />}
              title="Cloud & DevOps"
              skills={["Docker", "Kubernetes", "AWS EC2", "CI/CD", "Nginx"]}
              gradient="from-[#3B82F6] to-[#2563EB]"
            />
            <SkillCard
              icon={<Database className="text-[#F59E0B]" size={32} />}
              title="Backend & APIs"
              skills={["REST APIs", "FastAPI", "MySQL", "API Integration"]}
              gradient="from-[#F59E0B] to-[#D97706]"
            />
            <SkillCard
              icon={<Code2 className="text-[#06B6D4]" size={32} />}
              title="Tools & AI"
              skills={["Git", "ChatGPT", "GitHub Copilot", "VS Code"]}
              gradient="from-[#06B6D4] to-[#0891B2]"
            />
            <SkillCard
              icon={<Users className="text-[#EC4899]" size={32} />}
              title="Practices"
              skills={["Agile", "Testing", "State Management", "Debugging"]}
              gradient="from-[#EC4899] to-[#DB2777]"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-[#0B0F19]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#E6EDF3] mb-4 text-center">Featured Projects</h2>
          <p className="text-center text-[#9BA3B4] mb-12 max-w-2xl mx-auto">
            Real-world applications showcasing full-stack development and systems programming expertise
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="SFSU Tutoring Platform"
              subtitle="Full-Stack Web Application"
              description="Leading a 5-member engineering team as CTO, building a comprehensive tutoring platform using Agile sprints."
              highlights={[
                "Built and debugged backend services using REST APIs",
                "Cloud deployment on AWS EC2",
                "Analyzed system logs to identify performance bottlenecks",
                "Conducted testing and iterative improvements for UX"
              ]}
              tech={["React", "REST APIs", "AWS EC2", "Agile"]}
              gradient="from-[#22C55E] to-[#10B981]"
              link="https://github.com/CSC-648-SFSU/csc648-fa25-03-team06"
            />
            <ProjectCard
              title="Distributed Log Monitoring & Alert System"
              subtitle="Backend / Systems Project"
              description="Built a distributed system for real-time log processing with automated anomaly detection."
              highlights={[
                "Dockerized microservices architecture",
                "REST APIs with Python/FastAPI",
                "Anomaly detection and automated alerting",
                "Inter-service communication using HTTP/sockets",
                "Centralized log aggregation for improved observability"
              ]}
              tech={["Python", "FastAPI", "Docker", "Linux"]}
              gradient="from-[#3B82F6] to-[#2563EB]"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-[#0D1117]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#E6EDF3] mb-4 text-center">Experience</h2>
          <p className="text-center text-[#9BA3B4] mb-12 max-w-2xl mx-auto">
            Proven track record in technical support, team leadership, and community building
          </p>

          {/* Work Experience */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-gradient-to-br from-[#22C55E] to-[#10B981] rounded-xl">
                <Briefcase className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-[#E6EDF3]">Work Experience</h3>
            </div>
            <ExperienceCard
              title="IT Help Desk Assistant"
              organization="J Paul Leonard Library, San Francisco State University"
              period="Jul 2023 - Jul 2025"
              achievements={[
                "Provided technical support for Linux, Windows, and campus network systems",
                "Diagnosed and resolved system, software, and networking issues",
                "Assisted with software deployment and system configuration",
                "Created documentation for recurring issues, improving efficiency",
                "Strengthened team collaboration and communication skills"
              ]}
            />
          </div>

          {/* Leadership */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-gradient-to-br from-[#EC4899] to-[#DB2777] rounded-xl">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-[#E6EDF3]">Leadership & Involvement</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <ExperienceCard
                title="Vice President"
                organization="SparkSF @SFSU"
                achievements={[
                  "Led and coordinated networking events and career workshops",
                  "Fostered peer professional development for students"
                ]}
              />
              <ExperienceCard
                title="Logistics Team Lead"
                organization="SF Hacks @SFSU"
                achievements={[
                  "Led budgeting and evaluation planning for large-scale hackathons"
                ]}
              />
              <ExperienceCard
                title="Social Media Chair"
                organization="Society of Women Engineers"
                achievements={[
                  "Managed event promotion and engagement strategy",
                  "Increased online interaction by 40%"
                ]}
              />
              <ExperienceCard
                title="Venture Management Partner"
                organization="IncuGator"
                achievements={[
                  "Mentored student startups",
                  "Evaluated technical feasibility of projects"
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-24 px-6 bg-[#0B0F19]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#E6EDF3] mb-4 text-center">Education & Certifications</h2>
          <p className="text-center text-[#9BA3B4] mb-12 max-w-2xl mx-auto">
            Academic excellence and continuous learning through specialized programs
          </p>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-[#1F2937] to-[#111827] rounded-2xl p-10 border border-[#374151] shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/10 to-transparent pointer-events-none"></div>
              <div className="relative flex items-start gap-6">
                <div className="p-4 bg-[#3B82F6]/20 rounded-2xl backdrop-blur-sm">
                  <GraduationCap size={56} className="text-[#3B82F6]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-3 text-[#E6EDF3]">San Francisco State University</h3>
                  <p className="text-xl mb-4 text-[#9BA3B4]">Bachelor of Science in Computer Science</p>
                  <div className="flex flex-wrap gap-6 mb-5">
                    <div className="flex items-center gap-2 bg-[#22C55E]/20 px-4 py-2 rounded-lg backdrop-blur-sm border border-[#22C55E]/30">
                      <span className="font-bold text-2xl text-[#22C55E]">3.93</span>
                      <span className="text-sm text-[#9BA3B4]">GPA</span>
                    </div>
                    <div className="flex items-center gap-2 bg-[#374151] px-4 py-2 rounded-lg backdrop-blur-sm">
                      <span className="text-sm text-[#9BA3B4]">Fall 2022 - Fall 2026</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-5 bg-[#F59E0B]/20 px-4 py-2 rounded-lg inline-flex backdrop-blur-sm border border-[#F59E0B]/30">
                    <Award size={20} className="text-[#F59E0B]" />
                    <p className="font-semibold text-[#F59E0B]">Dean's List: Fall 2022 - Fall 2025</p>
                  </div>
                  <p className="text-[#9BA3B4] leading-relaxed">
                    Relevant Coursework: Data Structures & Algorithms, Operating Systems,
                    Linear Algebra, Probability/Statistics, Machine Learning
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <CertCard title="Advanced Diploma in Programming" subtitle="C, C++, Java, Web Development" />
            <CertCard title="CodePath Technical Interview Prep" subtitle="Data Structures & Algorithms" />
            <CertCard title="Web Development Bootcamp" subtitle="Full-Stack Development" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-[#0D1117]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#E6EDF3] mb-6">Let's Connect</h2>
          <p className="text-xl text-[#E6EDF3] mb-4 font-semibold">
            I'm actively seeking internship and entry-level opportunities in software engineering.
          </p>
          <p className="text-lg text-[#9BA3B4] mb-10">
            Open to opportunities in full-stack development, distributed systems, and cloud infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="mailto:gthumar@sfsu.edu" className="flex items-center justify-center gap-3 px-10 py-5 bg-[#3B82F6] text-white rounded-lg hover:bg-[#2563EB] hover:shadow-2xl hover:shadow-[#3B82F6]/20 transition-all duration-200 font-semibold text-lg">
              <Mail size={22} />
              gthumar@sfsu.edu
            </a>
            <a href="tel:+14157407237" className="flex items-center justify-center gap-3 px-10 py-5 bg-transparent border-2 border-[#374151] text-[#E6EDF3] rounded-lg hover:border-[#3B82F6] hover:text-[#3B82F6] hover:shadow-xl transition-all duration-200 font-semibold text-lg">
              <Phone size={22} />
              (415) 740-7237
            </a>
          </div>
          <div className="flex gap-4 justify-center">
            <a href="https://www.linkedin.com/in/gthumar/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-10 py-5 bg-transparent border-2 border-[#374151] text-[#E6EDF3] rounded-lg hover:border-[#3B82F6] hover:text-[#3B82F6] hover:shadow-2xl transition-all duration-200 font-semibold">
              <Linkedin size={22} />
              LinkedIn
            </a>
            <a href="https://github.com/grishma2305/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-10 py-5 bg-transparent border-2 border-[#374151] text-[#E6EDF3] rounded-lg hover:border-[#22C55E] hover:text-[#22C55E] hover:shadow-2xl transition-all duration-200 font-semibold">
              <Github size={22} />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 bg-[#0B0F19] border-t border-[#1F2937]">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-4">
            <p className="text-xl font-bold text-[#3B82F6]">Grishma Thumar</p>
          </div>
          <p className="text-[#9BA3B4]">© 2026 Grishma Thumar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function SkillCard({ icon, title, skills, gradient }: { icon: React.ReactNode; title: string; skills: string[]; gradient: string }) {
  return (
    <div className="group bg-[#1F2937] rounded-2xl p-7 hover:shadow-2xl hover:shadow-[#3B82F6]/10 transition-all duration-300 border border-[#374151] hover:border-[#3B82F6]/50 hover:-translate-y-1">
      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${gradient} mb-4`}>
        <div className="text-white">
          {icon}
        </div>
      </div>
      <h3 className="font-bold text-xl text-[#E6EDF3] mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span key={index} className="px-3 py-1.5 bg-[#374151] text-[#9BA3B4] rounded-lg text-sm font-medium border border-[#4B5563] hover:border-[#3B82F6] hover:text-[#E6EDF3] transition">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ title, subtitle, description, highlights, tech, gradient, link }: {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tech: string[];
  gradient: string;
  link?: string;
}) {
  return (
    <div className="group bg-[#1F2937] rounded-2xl p-8 hover:shadow-2xl hover:shadow-[#3B82F6]/10 transition-all duration-300 border border-[#374151] hover:border-[#3B82F6]/50 hover:-translate-y-2">
      <div className="flex items-start justify-between mb-5">
        <div>
          <h3 className="font-bold text-2xl text-[#E6EDF3] mb-2">{title}</h3>
          <p className={`text-transparent bg-gradient-to-r ${gradient} bg-clip-text font-semibold text-lg`}>{subtitle}</p>
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-lg bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110`}
          >
            <ExternalLink className="text-white" size={20} />
          </a>
        )}
      </div>
      <p className="text-[#9BA3B4] mb-6 leading-relaxed">{description}</p>
      <ul className="space-y-3 mb-6">
        {highlights.map((highlight, index) => (
          <li key={index} className="text-sm text-[#9BA3B4] flex items-start gap-3">
            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${gradient} flex-shrink-0`}></span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {tech.map((t, index) => (
          <span key={index} className={`px-4 py-2 bg-gradient-to-r ${gradient} text-white rounded-lg text-sm font-semibold shadow-md`}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function ExperienceCard({ title, organization, period, achievements }: {
  title: string;
  organization: string;
  period?: string;
  achievements: string[]
}) {
  return (
    <div className="group bg-[#1F2937] rounded-2xl p-7 hover:shadow-xl hover:shadow-[#3B82F6]/10 transition-all duration-300 border border-[#374151] hover:border-[#3B82F6]/50">
      <div className="mb-5">
        <h4 className="font-bold text-xl text-[#E6EDF3] mb-2">{title}</h4>
        <div className="flex justify-between items-center flex-wrap gap-2">
          <p className="text-[#3B82F6] font-semibold">{organization}</p>
          {period && <p className="text-[#9BA3B4] text-sm font-medium bg-[#374151] px-3 py-1 rounded-lg">{period}</p>}
        </div>
      </div>
      <ul className="space-y-3">
        {achievements.map((achievement, index) => (
          <li key={index} className="text-sm text-[#9BA3B4] flex items-start gap-3">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#22C55E] flex-shrink-0"></span>
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CertCard({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="group bg-[#1F2937] rounded-2xl p-7 hover:shadow-xl hover:shadow-[#3B82F6]/10 transition-all duration-300 text-center border border-[#374151] hover:border-[#3B82F6]/50 hover:-translate-y-1">
      <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-[#3B82F6] to-[#2563EB] mb-4">
        <Award className="text-white" size={32} />
      </div>
      <h4 className="font-bold text-lg text-[#E6EDF3] mb-2">{title}</h4>
      <p className="text-sm text-[#9BA3B4] leading-relaxed">{subtitle}</p>
    </div>
  );
}