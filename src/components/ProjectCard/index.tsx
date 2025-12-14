"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

interface TiltElement extends HTMLDivElement {
  vanillaTilt?: {
    destroy: () => void;
  };
}

interface ProjectCardProps {
  title: string;
  image: string;
  demoUrl?: string;
  sourceUrl?: string;
  isReverse?: boolean;
  children: React.ReactNode;
}

export default function ProjectCard({
  title,
  image,
  demoUrl,
  sourceUrl,
  isReverse = false,
  children,
}: ProjectCardProps) {
  const tiltRef = useRef<TiltElement>(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 4,
        glare: true,
        "max-glare": 0.5,
      });
    }

    return () => {
      if (tiltRef.current && tiltRef.current.vanillaTilt) {
        tiltRef.current.vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <div className="row">
      <div className={`col-lg-4 col-sm-12 ${isReverse ? "order-lg-2" : ""}`}>
        <div className="project-wrapper__text load-hidden">
          <h3 className="project-wrapper__text-title">{title}</h3>
          <div>
            <p className="mb-4">{children}</p>
          </div>
          {demoUrl && (
            <a
              rel="noreferrer"
              target="_blank"
              className="cta-btn cta-btn--hero"
              href={demoUrl}
            >
              Acessar
            </a>
          )}
          {sourceUrl && (
            <a
              rel="noreferrer"
              target="_blank"
              className="cta-btn text-color-main"
              href={sourceUrl}
            >
              Código fonte
            </a>
          )}
        </div>
      </div>
      <div className={`col-lg-8 col-sm-12 ${isReverse ? "order-lg-1" : ""}`}>
        <div className="project-wrapper__image load-hidden">
          <a rel="noreferrer" href={demoUrl || "#!"} target="_blank">
            <div ref={tiltRef} className="thumbnail rounded js-tilt">
              <Image
                alt="Project Image"
                className="img-fluid rounded-xl"
                src={image}
                width={800}
                height={600}
                priority={false}
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
