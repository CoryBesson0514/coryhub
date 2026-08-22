"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import SocialModal from "@/components/SocialModal";

type Language = "en" | "fr";

const translations = {
  en: {
    online: "Online",
    socials: "Socials",

    welcome: "Welcome to my corner of the internet",

    heroDescription: (
      <>
        Digital projects, automotive obsession
        <br />
        and things I love building.
      </>
    ),

    littleWhiteUpLabel: "AUTOMOTIVE PROJECT",
    littleWhiteUpTitle: "LittleWhiteUp",

    littleWhiteUpDescription: (
      <>
        A little up!. A big project.
        <br />
        From 1.0 MPI to 1.0 TSI DKL.
      </>
    ),

    portfolioLabel: "PORTFOLIO",
    portfolioTitle: "Coryfolio",
    portfolioDescription: "My journey, experience and professional projects.",

    inkLabel: "WEB DESIGN",
    inkTitle: "L'Encre Florale",
    inkDescription: "A website designed and developed for a tattoo studio.",

    visitProject: "Visit project →",

    footerBuilt: "Designed & built by",
  },

  fr: {
    online: "En ligne",
    socials: "Réseaux",

    welcome: "Bienvenue dans mon univers",

    heroDescription: (
      <>
        Projets digitaux, passion automobile
        <br />
        et tout ce que j'aime créer.
      </>
    ),

    littleWhiteUpLabel: "PROJET AUTOMOBILE",
    littleWhiteUpTitle: "LittleWhiteUp",

    littleWhiteUpDescription: (
      <>
        Une petite up!. Un gros projet.
        <br />
        Du 1.0 MPI au 1.0 TSI DKL.
      </>
    ),

    portfolioLabel: "PORTFOLIO",
    portfolioTitle: "Coryfolio",
    portfolioDescription:
      "Mon parcours, mes expériences et mes projets professionnels.",

    inkLabel: "WEB DESIGN",
    inkTitle: "L'Encre Florale",
    inkDescription: "Un site conçu et développé pour un studio de tatouage.",

    visitProject: "Voir le projet →",

    footerBuilt: "Design & développement par",
  },
};

export default function Home() {
  const [socialOpen, setSocialOpen] = useState(false);
  const [language, setLanguage] = useState<Language>("fr");

  const t = translations[language];

  const projects = [
    {
      title: t.portfolioTitle,
      label: t.portfolioLabel,
      description: t.portfolioDescription,
      href: "https://coryfolio.vercel.app/",
    },
    {
      title: t.inkTitle,
      label: t.inkLabel,
      description: t.inkDescription,
      href: "https://lencreflorale.vercel.app/",
    },
  ];

  return (
    <>
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="cory-ambient" />
      <div className="cory-grain" />

      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className="relative min-h-screen px-5 py-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          {/* =====================================================
              NAVBAR
          ===================================================== */}

          <motion.header
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-between"
          >
            {/* Logo */}

            <div className="text-sm font-medium tracking-[-0.02em]">
              CORY<span className="text-white/40">.</span>
            </div>

            {/* Controls */}

            <div className="flex items-center gap-2">
              {/* Language */}

              <div className="flex items-center rounded-full border border-white/10 bg-white/[0.04] p-1 text-[10px] backdrop-blur-xl">
                <button
                  type="button"
                  onClick={() => setLanguage("en")}
                  aria-label="Switch to English"
                  className={`rounded-full px-3 py-1.5 transition-all duration-300 ${
                    language === "en"
                      ? "bg-white/10 text-white shadow-sm"
                      : "text-white/35 hover:text-white/60"
                  }`}
                >
                  EN
                </button>

                <button
                  type="button"
                  onClick={() => setLanguage("fr")}
                  aria-label="Passer en français"
                  className={`rounded-full px-3 py-1.5 transition-all duration-300 ${
                    language === "fr"
                      ? "bg-white/10 text-white shadow-sm"
                      : "text-white/35 hover:text-white/60"
                  }`}
                >
                  FR
                </button>
              </div>

              {/* Socials */}

              <motion.button
                type="button"
                onClick={() => setSocialOpen(true)}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-4
                  py-2
                  text-xs
                  text-white/60
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-white/20
                  hover:bg-white/[0.08]
                  hover:text-white
                "
              >
                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-violet-400
                    shadow-[0_0_10px_rgba(167,139,250,0.8)]
                  "
                />

                {t.socials}
              </motion.button>

              {/* Online */}

              <div
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-4
                  py-2
                  text-xs
                  text-white/60
                  backdrop-blur-xl
                "
              >
                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-emerald-400
                    shadow-[0_0_10px_rgba(52,211,153,0.8)]
                  "
                />

                {t.online}
              </div>
            </div>
          </motion.header>

          {/* =====================================================
              HERO
          ===================================================== */}

          <section
            className="
              relative
              flex
              min-h-[72vh]
              flex-col
              items-center
              justify-center
              py-24
              text-center
            "
          >
            {/* Ambient hero light */}

            <div className="hero-glow" />

            {/* Welcome */}

            <motion.div
              initial={{
                opacity: 0,
                y: 12,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                mb-8
                flex
                items-center
                gap-2.5
                rounded-full
                border
                border-white/[0.09]
                bg-white/[0.035]
                px-4
                py-2
                text-[11px]
                text-white/50
                shadow-[0_10px_40px_rgba(0,0,0,0.2)]
                backdrop-blur-2xl
              "
            >
              <span className="relative flex h-1.5 w-1.5">
                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-violet-400/50
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-violet-400
                    shadow-[0_0_10px_rgba(167,139,250,0.9)]
                  "
                />
              </span>

              {t.welcome}
            </motion.div>

            {/* Title */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 1.1,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                hero-title
                relative
                max-w-5xl
                text-6xl
                font-medium
                tracking-[-0.075em]
                text-white
                sm:text-7xl
                md:text-8xl
                lg:text-[9.5rem]
                lg:leading-[0.88]
              "
            >
              Cory Besson
            </motion.h1>

            {/* Description */}

            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.35,
                ease: "easeOut",
              }}
              className="
                relative
                mt-8
                max-w-xl
                text-base
                leading-7
                text-white/40
                sm:text-lg
                sm:leading-8
              "
            >
              {t.heroDescription}
            </motion.p>

            {/* Scroll indicator */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1.2,
                duration: 0.8,
              }}
              className="
                absolute
                bottom-4
                flex
                flex-col
                items-center
                gap-3
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-white/25
              "
            >
              <span>Scroll</span>

              <span className="scroll-indicator text-white/40">↓</span>
            </motion.div>
          </section>

          {/* =====================================================
    LITTLEWHITEUP
===================================================== */}

          <motion.a
            href="https://www.instagram.com/littlewhiteup/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            whileHover={{
              y: -4,
            }}
            className="
    glass
    group
    block
    rounded-[32px]
    p-3
    transition-all
    duration-500
  "
          >
            <div
              className="
      relative
      min-h-[520px]
      overflow-hidden
      rounded-[24px]
      bg-[#111]
    "
            >
              {/* =================================================
        ORIGINAL BACKGROUND
    ================================================= */}

              <div
                className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,.12),transparent_30%),linear-gradient(135deg,#181818,#080808)]
      "
              />

              <div
                className="
        absolute
        inset-0
        bg-gradient-to-t
        from-black
        via-black/20
        to-transparent
      "
              />

              {/* =================================================
    LITTLEWHITEUP — CAR
================================================= */}
              {/* taille image up modifier "h-[130%]"/}

              <div
                aria-hidden="true"
                className="
    pointer-events-none
    absolute
    inset-y-0
    right-0
    z-[1]
    w-[48%]
    overflow-hidden
  "
              >
                <img
                  src="/upnobg.png"
                  alt=""
                  className="
      absolute
      right-[-38%]
      top-[58%]
      h-[130%]
      w-auto
      max-w-none
      -translate-y-1/2
      grayscale
      brightness-[0.22]
      contrast-[1.4]
      opacity-80
      [mask-image:linear-gradient(to_right,transparent_0%,black_45%,black_100%)]
      [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_45%,black_100%)]
      transition-all
      duration-700
      group-hover:brightness-[0.28]
      group-hover:opacity-90
    "
                />
              </div>

              {/* =================================================
        CONTENT
    ================================================= */}

              <div
                className="
        relative
        z-10
        flex
        min-h-[520px]
        flex-col
        justify-between
        p-7
        sm:p-10
        lg:p-12
      "
              >
                {/* Header */}

                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs tracking-[0.2em] text-white/40">
                      {t.littleWhiteUpLabel}
                    </p>

                    <h2
                      className="
              mt-3
              text-4xl
              font-medium
              tracking-[-0.05em]
              text-white
              sm:text-6xl
            "
                    >
                      {t.littleWhiteUpTitle}
                    </h2>
                  </div>

                  <div
                    className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/[0.06]
            backdrop-blur-xl
            transition-transform
            duration-500
            group-hover:rotate-12
          "
                  >
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                {/* Bottom */}

                <div>
                  <p
                    className="
            max-w-md
            text-lg
            leading-7
            text-white/60
          "
                  >
                    {t.littleWhiteUpDescription}
                  </p>

                  <div
                    className="
            mt-8
            flex
            items-center
            gap-2
            text-sm
            text-white/60
          "
                  >
                    <InstagramIcon />
                    @littlewhiteup
                  </div>
                </div>
              </div>
            </div>
          </motion.a>

          {/* =====================================================
              OTHER PROJECTS
          ===================================================== */}

          <section className="grid gap-4 py-4 sm:grid-cols-2">
            {projects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -4,
                }}
                className="
                  glass
                  group
                  rounded-[28px]
                  p-7
                  transition-all
                  duration-500
                  sm:p-9
                "
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[10px] tracking-[0.2em] text-white/35">
                      {project.label}
                    </p>

                    <h3
                      className="
                        mt-3
                        text-2xl
                        font-medium
                        tracking-[-0.04em]
                      "
                    >
                      {project.title}
                    </h3>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="
                      text-white/30
                      transition-transform
                      duration-500
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </div>

                <p
                  className="
                    mt-8
                    max-w-sm
                    text-sm
                    leading-6
                    text-white/45
                  "
                >
                  {project.description}
                </p>

                <div className="mt-8 text-xs text-white/50">
                  {t.visitProject}
                </div>
              </motion.a>
            ))}
          </section>

          {/* =====================================================
              FOOTER
          ===================================================== */}

          <footer
            className="
              flex
              flex-col
              items-center
              justify-between
              gap-4
              border-t
              border-white/[0.07]
              py-10
              text-xs
              text-white/30
              sm:flex-row
            "
          >
            <div>© 2026 Cory Besson</div>

            <div>
              {t.footerBuilt} <span className="text-white/60">Cory Besson</span>
            </div>
          </footer>
        </div>

        {/* =====================================================
            SOCIAL MODAL
        ===================================================== */}

        <SocialModal
          open={socialOpen}
          onClose={() => setSocialOpen(false)}
          language={language}
        />
      </main>
    </>
  );
}

/* ============================================================
   INSTAGRAM ICON
============================================================ */

function InstagramIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />

      <circle cx="12" cy="12" r="4" />

      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}
