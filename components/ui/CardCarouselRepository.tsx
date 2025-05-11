"use client";

import { IconHandFinger } from "@tabler/icons-react";
import { QueryClientProvider } from "@tanstack/react-query";
import { FaLocationArrow } from "react-icons/fa";

import { Card, Carousel } from "@/components/ui/CardCarousel";
import { images } from "@/data";
import { useRepository } from "@/hooks/useRepository";
import { queryClient } from "@/utils/queryClient";
import type { Key } from "react";
import { Skeleton } from "./Skeleton";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  owner: {
    avatar_url: string;
  };
};

export function CardsCarouselRepositories() {
  return (
    <QueryClientProvider client={queryClient}>
      <QueryData />
    </QueryClientProvider>
  );
}

function QueryData() {
  const { data: repo, isPending, error } = useRepository();

  if (isPending) {
    return (
      <div className="flex items-center justify-center gap-11">
        {Array.from({ length: 4 }).map(
          // biome-ignore lint/suspicious/noExplicitAny: <explanation>
          (_: any, index: Key | null | undefined) => (
            <div
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
              className="flex flex-col border border-slate-900 space-y-3"
            >
              <div className="relative">
                <Skeleton className="md:h-[440px] md:w-[270px] h-[220px] w-[135px]" />
                <div className="absolute bottom-5 right-4">
                  <Skeleton className="md:h-8 md:w-60 h-4 w-30" />
                </div>
              </div>
            </div>
          )
        )}
      </div>
    );
  }

  if (error instanceof Error) {
    return <p className="text-red-700 text-center">Error: {error.message}</p>;
  }

  if (!repo || repo.length === 0) {
    return (
      <p className="text-white text-center">Nenhum repositório disponível.</p>
    );
  }

  const cards = repo.map((repo, index) => (
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
          <p className="flex items-center justify-between gap-2 lg:text-xl md:text-xs text-xs text-zinc-950 bg-gradient-to-r from-blue-600 to-purple rounded-lg py-1 px-2 md:px-4">
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
