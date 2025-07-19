import React from "react";
import { cn } from "@/lib/utils";
import { Foundation } from "@/components";

interface Props {
  className?: string;
}

const FoundationPage: React.FC<Props> = (props) => {
  const { className } = props;
  return (
    <div className={cn("", className)}>
      <Foundation />
    </div>
  );
};

export default FoundationPage;
