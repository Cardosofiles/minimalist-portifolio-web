// components/CardsCarouselRepositories.tsx
"use client";

import { Card, Carousel } from "@/components/ui/CardCarousel";
import { images } from "@/data";
import { useGithubRepos } from "@/hooks/useRepositories";
import { IconCircle, IconHandFinger } from "@tabler/icons-react";
import { FaLocationArrow } from "react-icons/fa";

export function CardsCarouselRepositories() {
  const { repos, loading } = useGithubRepos("Cardosofiles");

  if (loading)
    return (
      <p className="flex items-center justify-center">
        <IconCircle className="animate-spin size-20" />
      </p>
    );

  if (!Array.isArray(repos)) {
    return (
      <p className="text-white text-center">Nenhum repositório disponível.</p>
    );
  }

  const cards = repos.map((repo, index) => (
    <Card
      key={repo.id}
      index={index}
      card={{
        category: repo.language || "Unknown",

        title: repo.name,

        src: images[index % images.length],

        content: (
          <div className="p-6">
            <p className="text-neutral-200 mb-4 max-w-3xl">
              {repo.description || "Sem descrição."}
            </p>

            <a
              href={repo.html_url}
              target="_blank"
              className="flex items-center"
              rel="noopener noreferrer"
            >
              <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                Verifique o Repositório
              </p>
              <FaLocationArrow className="ms-3" color="#CBACF9" />
            </a>
          </div>
        ),
        access: (
          <p className="flex items-center gap-2 lg:text-xl md:text-xs text-xs text-neutral-50">
            Verifique os detalhes
            <IconHandFinger className="animate-pulse lg:size-5 size-4" />
          </p>
        ),
      }}
    />
  ));

  return (
    <div className="w-full h-full py-20">
      <h1 className="heading">
        <span className="text-white">Repositórios no</span>{" "}
        <span className="bg-gradient-to-r from-blue-600 to-purple bg-clip-text text-transparent">
          GitHub
        </span>
      </h1>
      <Carousel items={cards} />
    </div>
  );
}
