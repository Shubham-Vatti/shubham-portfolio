"use client";

import { GlowingEffect } from "@/components/ui/glowing-effect";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { LinkPreview } from "@/components/ui/link-preview";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const DownloadLogo = () => {
    return (
      <svg
        width="66"
        height="65"
        viewBox="0 0 66 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-3 w-3 text-black dark:text-white"
      >
        <path
          d="M33 10V45M33 45L25 37M33 45L41 37"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 50H56"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
    );
  };

  const handleDownloadresume = () => {
    // Replace with your Google Drive file ID.   https://drive.google.com/file/d//view?usp=sharing
    const fileId = "1liOxpJK4ya2otSBvu7p9mZRSBV-opJbl";
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

    // Create a temporary anchor tag to trigger download
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.setAttribute("download", "resume.pdf"); // File name for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["intro", "work", "thoughts", "connect"].map((section) => (
            <button
              key={section}
              onClick={() =>
                document
                  .getElementById(section)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className={`w-2 h-8 rounded-full transition-all duration-500 ${
                activeSection === section
                  ? "bg-foreground"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Navigate to ${section}`}
            />
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        <header
          id="intro"
          ref={(el) => {
            sectionsRef.current[0] = el;
          }}
          className="min-h-screen flex items-center opacity-0"
        >
          <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
            <div className="lg:col-span-3 space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-2">
                <div className="text-sm text-muted-foreground font-mono tracking-wider">
                  AppXpertServices / 2025
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
                  SHUBHAM
                  <br />
                  <span className="text-muted-foreground">Kumar</span>
                </h1>
              </div>

              <div className="space-y-6 max-w-md">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Full-stack developer building seamless mobile and backend
                  experiences with{" "}
                  <span className="text-foreground"> React Native</span>,
                  <span className="text-foreground"> Node.js</span>, and{" "}
                  <span className="text-foreground"> four years</span> of
                  expertise.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Available for work
                  </div>
                  <div>&#127470;&#127475; Indian</div>

                  <HoverBorderGradient
                    containerClassName="rounded-full"
                    as="button"
                    onClick={() => handleDownloadresume()}
                    className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 cursor-pointer"
                  >
                    <DownloadLogo />
                    <span>Resume</span>
                  </HoverBorderGradient>
                  {/* <div></div> */}
                </div>
                {/* <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Available for work
                  </div>
                  <div>&#127470;&#127475; Indian</div>
                </div> */}
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0">
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">
                  CURRENTLY
                </div>
                <div className="space-y-2">
                  <div className="text-foreground">Full Stack Developer</div>
                  <LinkPreview
                    url="https://www.nic.gov.in/"
                    className="text-muted-foreground hover:text-white cursor-pointer"
                  >
                    {/* <div
                    ></div> */}
                    @ National Informatics Centre
                  </LinkPreview>

                  <div className="text-xs text-muted-foreground">
                    Feb 2025 — Present
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">
                  SKILLS
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React Native",
                    "React.js",
                    "TypeScript",
                    "JavaScript",
                    "Node.js",
                    "Express.js",
                    "Angular.js",
                    "Ionic Framework",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="text-muted-foreground px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300 hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        <section
          id="work"
          ref={(el) => {
            sectionsRef.current[1] = el;
          }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">
                Work Experience
              </h2>
            </div>

            <div className="space-y-2 sm:space-y-12">
              {[
                {
                  year: "Jan 2022 - May 2022",
                  role: "React Native Developer Intern",
                  company: "Kandid Technologies",
                  description: [
                    "Developed responsive mobile app UI with full functionality during internship.",
                    // "Implemented key features for Maharashtra's specific agricultural needs and users.",
                    "Engineered responsive components ensuring seamless performance across all devices.",
                    "Collaborated to deliver a user-centric app for the local farming community.",
                  ],
                  tech: ["React Native", "JavaScript", "TypeScript"],
                  url: "https://kandid.in/",
                },
                {
                  year: "Jul 2022 - Jan 2023",
                  role: "React Native Developer Intern",
                  company: "Perspicientia Consultancy Private Limited",
                  description: [
                    "Developed a fully functional, responsive mobile application UI.",
                    // "Engineered core warranty claim processing and management features.",
                    "Built a pixel-perfect, user-friendly interface for YPP Australia.",
                    "Ensured application performance and responsiveness across all devices.",
                  ],
                  tech: ["React Native", "JavaScript", "TypeScript"],
                  url: "https://pcpl.io/",
                },
                {
                  year: "Jan 2023 - Feb 2025",
                  role: "Full Stack Mobile App Developer",
                  company: "Perspicientia Consultancy Private Limited",
                  description: [
                    "Developed full-stack mobile applications with responsive UI.",
                    "Built and deployed six diverse apps to playstore and app store.",
                    "Created user, vendor, and admin panel applications.",
                    // "Engineered complete functionality for finance and health applications.",
                  ],
                  tech: [
                    "React Native",
                    "TypeScript",
                    "React",
                    "JavaScript",
                    "Node.js",
                    "Express.js",
                  ],
                  url: "https://pcpl.io/",
                },
                {
                  year: "Feb 2025 - current",
                  role: "Full Stack Mobile App Developer",
                  company: "NIC - ( Forest Management Information System )",
                  description: [
                    "Developed a complete functional mobile app UI with Ionic Framework.",
                    "Engineered a secure backend REST API using Express.js.",
                    "Built a responsive cross-platform application for mobile and web.",
                    // "Created Forest Protection App an online crime reporting application for citizens.",
                  ],
                  tech: ["React", "Node.js", "MySQL"],
                  url: "https://www.nic.gov.in/",
                },
              ].map((job, index) => (
                <div
                  key={index}
                  className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
                >
                  <div className="lg:col-span-2">
                    <div className="text-sm font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                      {job.year}
                    </div>
                  </div>

                  <div className="lg:col-span-6 space-y-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium">
                        {job.role}
                      </h3>
                      <LinkPreview url={job.url} className="cursor-pointer">
                        {job.company}
                      </LinkPreview>
                    </div>
                    <ul className="list-disc pl-5 text-muted-foreground leading-relaxed max-w-lg space-y-1">
                      {job.description.map((ele, index) => (
                        <li key={index}>{ele}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
                    {job.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs text-muted-foreground rounded group-hover:border-muted-foreground/50 transition-colors duration-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="thoughts"
          ref={(el) => {
            sectionsRef.current[2] = el;
          }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <h2 className="text-3xl sm:text-4xl font-light">Projects</h2>

            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
              {[
                {
                  title: "Dash Drinks",
                  excerpt:
                    "A React Native mobile app for convenient online browsing, ordering, and delivery of a wide variety of drinks and liquors.",
                  date: "React Native",
                  // readTime: "6 min",
                  url: "https://github.com/Shubham-Vatti/DashDrinks-Frontend",
                },
                {
                  title: "ImmunizeBuddy",
                  excerpt:
                    "A mobile app for parents to easily track and manage their baby's vaccination schedule, appointments, and health records.",
                  date: "React Native",
                  // readTime: "4 min",÷
                  url: "https://github.com/Shubham-Vatti/ImmunizeBuddy-Frontend",
                },
                {
                  title: "Chhattisgarh Forest Protection App",
                  excerpt:
                    "A mobile app for Chhattisgarh forest guards to instantly report crimes with GPS, photos, and real-time data for rapid response.",
                  date: "Ionic Framework",
                  // readTime: "5 min",
                  url: "https://github.com/Shubham-Vatti/CG_FOREST_PROTECTION-ANGULAR",
                },
                {
                  title: "Attorneys Info",
                  excerpt:
                    "A website connecting USA clients with local attorneys by filtering specific city, state, and practice area for efficient legal matching.",
                  date: "Next.js",
                  url: "https://www.attorneys-info.com/",
                },
              ].map((post, index) => (
                <article
                  key={index}
                  className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg cursor-pointer relative"
                  onClick={() => window.open(post.url)}
                >
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                  />
                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                      <span>{post.date}</span>
                      {/* <span>{post.readTime}</span> */}
                    </div>

                    <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      <span>Read more</span>
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="connect"
          ref={(el) => {
            sectionsRef.current[3] = el;
          }}
          className="py-20 sm:py-32 opacity-0"
        >
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Let's Connect</h2>

              <div className="space-y-6">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Always interested in new opportunities, collaborations, and
                  conversations about technology and design.
                </p>

                <div className="space-y-4">
                  <Link
                    href="mailto:shubhamvatti10@gmail.com"
                    className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
                  >
                    <span className="text-base sm:text-lg">
                      shubhamvatti10@gmail.com
                    </span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="text-sm text-muted-foreground font-mono">
                ELSEWHERE
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    name: "GitHub",
                    handle: "@shubham-vatti",
                    url: "https://github.com/Shubham-Vatti",
                  },
                  // { name: "v0.dev", handle: "@felixmacaspac", url: "#" },
                  // {
                  //   name: "HubSpot Community",
                  //   handle: "@felixmacaspac",
                  //   url: "#",
                  // },
                  {
                    name: "LinkedIn",
                    handle: "shubhamvatti",
                    url: "https://www.linkedin.com/in/shubhamvatti/",
                  },
                ].map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                  >
                    <div className="space-y-2">
                      <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                        {social.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {social.handle}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 sm:py-16 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">
                © 2025 Shubham Kumar. All rights reserved.
              </div>
              {/* <div className="text-xs text-muted-foreground"> */}
              {/* Built with v0.dev by Felix Macaspac */}
              {/* </div> */}
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>

              {/* <button className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300">
                <svg
                  className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </button> */}
            </div>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  );
}
