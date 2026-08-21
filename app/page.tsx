"use client";

import { useState } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
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
        <br className="hidden sm:block" />
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
        <br className="hidden sm:block" />
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
            {/* Language selector */}

            <div className="flex items-center rounded-full border border-white/10 bg-white/[0.04] p-1 text-[10px] backdrop-blur-xl">
              <button
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
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(167,139,250,0.8)]" />

              {t.socials}
            </motion.button>

            {/* Online status */}

            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-white/60 backdrop-blur-xl">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />

              {t.online}
            </div>
          </div>
        </motion.header>

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="
              mb-7
              flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/[0.035]
              px-4
              py-2
              text-xs
              text-white/50
              backdrop-blur-xl
            "
          >
            <Sparkles size={13} />

            {t.welcome}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="
              max-w-4xl
              text-6xl
              font-medium
              tracking-[-0.065em]
              text-white
              sm:text-7xl
              lg:text-9xl
            "
          >
            Cory Besson
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="
              mt-7
              max-w-xl
              text-base
              leading-7
              text-white/45
              sm:text-lg
            "
          >
            {t.heroDescription}
          </motion.p>
        </section>

        {/* =====================================================
            LITTLEWHITEUP
        ===================================================== */}

        <motion.a
          href="https://www.instagram.com/littlewhiteup/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ y: -4 }}
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
          <div className="relative min-h-[520px] overflow-hidden rounded-[24px] bg-[#111]">
            {/* Background */}

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

            <div
              className="
              relative
              flex
              min-h-[520px]
              flex-col
              justify-between
              p-7
              sm:p-10
              lg:p-12
            "
            >
              {/* Card header */}

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

              {/* Card bottom */}

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

                {/* Instagram */}

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

                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="0.8"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>
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
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              whileHover={{ y: -4 }}
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

              <div className="mt-8 text-xs text-white/50">{t.visitProject}</div>
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
  );
}
