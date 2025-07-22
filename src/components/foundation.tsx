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
import { FoundationAboutUs } from "./";
import { FoundationUpdates } from "./foundation-updates";

interface Props {
  className?: string;
}

export const Foundation: React.FC<Props> = (props) => {
  const { className } = props;
  return (
    <div className={cn("max-w-[1920px] mx-auto", className)}>
      <div className="bg-[url(/videoLibrary.png)] bg-cover h-[240px]">
        <div className="max-w-[1680px] mx-auto bg-center bg-cover h-[240px] px-4 pt-28 pb-10 bg-no-repeat flex items-center">
          <Title
            className="font-bebas leading-[125%] text-white text-center sm:text-left"
            size={"n"}
            text={"ՀԻՄՆԱԴՐԱՄ"}
          />
        </div>
      </div>
      <Container className="p-16">
        <Tabs className="" defaultValue="about">
          <TabsList className="flex gap-3 bg-transparent my-7 overflow-auto">
            <TabsTrigger
              className="bg-transparent active:bg-transparent active:border-b-1 active:border-b-primary"
              value="about"
            >
              ՀԻՄՆԱԴՐԱՄԻ ՄԱՍԻՆ
            </TabsTrigger>
            <TabsTrigger value="new">ԹԱՐՄԱՑՈՒՄՆԵՐ</TabsTrigger>
            <TabsTrigger value="report">ՀԱՇՎԵՏՎՈՒԹՅՈՒՆՆԵՐ</TabsTrigger>
          </TabsList>
          <TabsContent value="about">
            <FoundationAboutUs />
          </TabsContent>
          <TabsContent value="new">
            <FoundationUpdates />
          </TabsContent>
          <TabsContent value="report"></TabsContent>
        </Tabs>
      </Container>
    </div>
  );
};
