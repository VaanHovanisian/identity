"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./ui";
import { Updates } from "./updates";
import { useUpdates } from "@/hooks/updates";

interface Props {
  className?: string;
}

export const FoundationUpdates: React.FC<Props> = ({ className }) => {
  const { data } = useUpdates();

  return (
    <Container className={cn("", className)}>
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {data?.map((el, id) => (
          <li key={id}>
            <Updates
              videoUrl={el.video}
              date={el.date}
              dateAgo={"6"}
              title={el.title}
              desc={el.aboutUpdate}
            />
          </li>
        ))}
      </ul>
    </Container>
  );
};
