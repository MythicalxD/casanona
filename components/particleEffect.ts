"use client";
import { useEffect } from "react";

const ParticleEffect = () => {
  useEffect(() => {
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      document.body.appendChild(particle);
      animateParticle(particle);
    }

    function animateParticle(particle: HTMLDivElement) {
      const duration = Math.random() * 5 + 2;
      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * window.innerHeight;
      const endX = Math.random() * window.innerWidth;
      const endY = Math.random() * window.innerHeight;

      particle.style.transform = `translate(${startX}px, ${startY}px)`;

      particle.animate(
        [
          { transform: `translate(${startX}px, ${startY}px)` },
          { transform: `translate(${endX}px, ${endY}px)` },
        ],
        {
          duration: duration * 4000,
          easing: "linear",
          iterations: Infinity,
        }
      );
    }
  }, []);

  return null;
};

export default ParticleEffect;
