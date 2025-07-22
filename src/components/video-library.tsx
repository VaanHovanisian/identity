"use client";

import React from "react";
import { cn } from "@/lib/utils";
import {
  Container,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Title,
} from "./ui";
import { VideoCard } from "./video-card";
import { useVideoPosts } from "@/hooks/video-posts";

interface Props {
  className?: string;
}

export const VideoLibrary: React.FC<Props> = ({ className }) => {
  const { data } = useVideoPosts();

  return (
    <div className={cn("max-w-[1920px] mx-auto", className)}>
      <div className="bg-[url(/videoLibrary.png)] pt-28 pb-10 bg-cover bg-center bg-no-repeat flex items-center">
        <div className="max-w-[1680px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          <Title
            className="font-bebas leading-[125%] text-white text-center sm:text-start"
            size="n"
            text="ՏԵՍԱԴԱՐԱՆ"
          />
        </div>
      </div>

      <Container className="px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <Tabs defaultValue="all">
          <TabsList className="flex flex-wrap gap-3 bg-transparent my-5">
            <TabsTrigger value="all">Բոլորը</TabsTrigger>
            <TabsTrigger value="provinces">Մարզեր</TabsTrigger>
            <TabsTrigger value="ethnography">Ազգագրություն</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data?.map((el, id) => (
                <li key={id}>
                  <VideoCard
                    place={el.address}
                    title={el.title}
                    videoUrl={el.video.url}
                  />
                </li>
              ))}
            </ul>
          </TabsContent>

          <TabsContent value="provinces">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(7)].map((_, id) => (
                <li key={id}>
                  <VideoCard
                    place="Նկարահանման վայրը"
                    title="Տեսանյութի վերնագիրը"
                    videoUrl="/videoCard.png"
                  />
                </li>
              ))}
            </ul>
          </TabsContent>

          <TabsContent value="ethnography">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(4)].map((_, id) => (
                <li key={id}>
                  <VideoCard
                    place="Նկարահանման վայրը"
                    title="Տեսանյութի վերնագիրը"
                    videoUrl="/videoCard.png"
                  />
                </li>
              ))}
            </ul>
          </TabsContent>
        </Tabs>
      </Container>
    </div>
  );
};
