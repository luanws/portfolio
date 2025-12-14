"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { useEffect } from "react";

declare global {
  interface Window {
    ScrollReveal?: scrollReveal.ScrollRevealObject;
  }
}

export default function Home() {
  useEffect(() => {
    // Wait for ScrollReveal to load
    const initScrollReveal = () => {
      if (typeof window !== "undefined" && window.ScrollReveal) {
        const ScrollReveal = window.ScrollReveal;
        const sr = ScrollReveal({ reset: false });

        const defaultProps = {
          easing: "cubic-bezier(0.5, 0, 0, 1)",
          distance: "30px",
          duration: 1000,
          desktop: true,
          mobile: true,
        };

        const targetElements = [
          {
            element: ".section-title",
            animation: {
              delay: 300,
              distance: "0px",
              origin: "bottom",
            },
          },
          {
            element: ".hero-title",
            animation: {
              delay: 500,
              origin: window.innerWidth > 768 ? "left" : "bottom",
            },
          },
          {
            element: ".hero-cta",
            animation: {
              delay: 1000,
              origin: window.innerWidth > 768 ? "left" : "bottom",
            },
          },
          {
            element: ".about-wrapper__image",
            animation: {
              delay: 600,
              origin: "bottom",
            },
          },
          {
            element: ".about-wrapper__info",
            animation: {
              delay: 1000,
              origin: window.innerWidth > 768 ? "left" : "bottom",
            },
          },
          {
            element: ".project-wrapper__text",
            animation: {
              delay: 500,
              origin: window.innerWidth > 768 ? "left" : "bottom",
            },
          },
          {
            element: ".project-wrapper__image",
            animation: {
              delay: 1000,
              origin: window.innerWidth > 768 ? "right" : "bottom",
            },
          },
          {
            element: ".contact-wrapper",
            animation: {
              delay: 800,
              origin: "bottom",
            },
          },
        ];

        targetElements.forEach(({ element, animation }) => {
          sr.reveal(element, { ...defaultProps, ...animation });
        });
      }
    };

    // Check if ScrollReveal is already loaded
    if (window.ScrollReveal) {
      initScrollReveal();
    } else {
      // Wait for ScrollReveal to load
      const checkInterval = setInterval(() => {
        if (window.ScrollReveal) {
          initScrollReveal();
          clearInterval(checkInterval);
        }
      }, 100);

      // Cleanup
      return () => clearInterval(checkInterval);
    }
  }, []);

  return (
    <>
      <div id="top"></div>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
