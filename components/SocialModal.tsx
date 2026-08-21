"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, MessageCircle, X } from "lucide-react";

type Language = "en" | "fr";

type SocialModalProps = {
  open: boolean;
  onClose: () => void;
  language: Language;
};

const translations = {
  en: {
    label: "Connect with me",
    title: "Cory Besson",
    description: "Find me online and follow my latest projects.",
    instagram: "Instagram",
    littleWhiteUp: "LittleWhiteUp",
    whatsapp: "WhatsApp",
    letsTalk: "Let's talk",
    close: "Close",
    copyright: "© 2026 Cory Besson",
  },

  fr: {
    label: "Mes réseaux",
    title: "Cory Besson",
    description: "Retrouve-moi en ligne et suis mes derniers projets.",
    instagram: "Instagram",
    littleWhiteUp: "LittleWhiteUp",
    whatsapp: "WhatsApp",
    letsTalk: "Discutons",
    close: "Fermer",
    copyright: "© 2026 Cory Besson",
  },
};

export default function SocialModal({
  open,
  onClose,
  language,
}: SocialModalProps) {
  const t = translations[language];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto px-4 py-6 sm:px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label={t.label}
        >
          {/* =================================================
              BACKGROUND
          ================================================= */}

          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={onClose}
          />

          {/* =================================================
              MODAL
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.97,
            }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              z-10
              my-auto
              w-full
              max-w-lg
              overflow-hidden
              rounded-[30px]
              border
              border-white/10
              bg-[#090909]
              shadow-[0_30px_100px_rgba(0,0,0,0.65)]
            "
          >
            {/* =================================================
                CLOSE
            ================================================= */}

            <motion.button
              type="button"
              onClick={onClose}
              aria-label={t.close}
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                absolute
                right-5
                top-5
                z-30
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-black/50
                text-white
                backdrop-blur-xl
                transition-colors
                duration-300
                hover:bg-white/10
              "
            >
              <X size={18} strokeWidth={1.8} />
            </motion.button>

            {/* =================================================
                PHOTO
            ================================================= */}

            <div className="relative h-[250px] w-full overflow-hidden sm:h-[280px]">
              <motion.img
                src="/moi.jpg"
                alt="Cory Besson"
                initial={{
                  scale: 1.04,
                }}
                animate={{
                  scale: 1,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/20 to-transparent" />

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -bottom-24
                  left-1/2
                  h-48
                  w-72
                  -translate-x-1/2
                  rounded-full
                  bg-violet-500/10
                  blur-[90px]
                "
              />

              <div className="absolute bottom-0 left-7 right-7 h-px bg-white/10" />
            </div>

            {/* =================================================
                CONTENT
            ================================================= */}

            <div className="px-6 pb-7 pt-1 sm:px-7 sm:pb-8">
              <motion.p
                initial={{
                  opacity: 0,
                  y: 5,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.15,
                  duration: 0.4,
                }}
                className="
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.28em]
                  text-zinc-500
                "
              >
                {t.label}
              </motion.p>

              <motion.h2
                initial={{
                  opacity: 0,
                  y: 8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.2,
                  duration: 0.45,
                }}
                className="
                  mt-2
                  text-3xl
                  font-semibold
                  tracking-[-0.04em]
                  text-white
                "
              >
                {t.title}
              </motion.h2>

              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.25,
                  duration: 0.45,
                }}
                className="
                  mt-2
                  max-w-sm
                  text-sm
                  leading-relaxed
                  text-zinc-500
                "
              >
                {t.description}
              </motion.p>

              {/* =================================================
                  SOCIAL LINKS
              ================================================= */}

              <div className="mt-7 space-y-3">
                {/* Instagram */}

                <SocialLink
                  href="https://www.instagram.com/cory.besson"
                  label={t.instagram}
                  username="@cory.besson"
                  icon={<InstagramIcon />}
                />

                {/* LittleWhiteUp */}

                <SocialLink
                  href="https://www.instagram.com/littlewhiteup/"
                  label={t.littleWhiteUp}
                  username="@littlewhiteup"
                  icon={<InstagramIcon />}
                />

                {/* WhatsApp */}

                <SocialLink
                  href="https://wa.me/33609581742"
                  label={t.whatsapp}
                  username={t.letsTalk}
                  icon={<MessageCircle size={19} strokeWidth={1.8} />}
                />
              </div>

              {/* Footer */}

              <p className="mt-5 text-center text-[10px] text-zinc-700">
                {t.copyright}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ============================================================
   SOCIAL LINK
============================================================ */

function SocialLink({
  href,
  label,
  username,
  icon,
}: {
  href: string;
  label: string;
  username: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        flex
        items-center
        gap-4
        rounded-2xl
        border
        border-white/10
        bg-white/[0.025]
        p-4
        transition-all
        duration-300
        hover:border-white/20
        hover:bg-white/[0.055]
      "
    >
      <div
        className="
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center
          rounded-xl
          border
          border-white/10
          bg-white/[0.045]
          text-zinc-400
          transition-all
          duration-300
          group-hover:border-violet-400/20
          group-hover:bg-violet-500/10
          group-hover:text-violet-200
        "
      >
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-600">
          {label}
        </p>

        <p className="mt-1 truncate text-sm text-white">{username}</p>
      </div>

      <ArrowUpRight
        size={16}
        className="
          shrink-0
          text-zinc-700
          transition-all
          duration-300
          group-hover:-translate-y-0.5
          group-hover:translate-x-0.5
          group-hover:text-violet-300
        "
      />
    </a>
  );
}

/* ============================================================
   INSTAGRAM ICON
============================================================ */

function InstagramIcon() {
  return (
    <svg
      width="19"
      height="19"
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
