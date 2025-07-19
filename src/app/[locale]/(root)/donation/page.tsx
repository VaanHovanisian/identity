import React from "react";
import { cn } from "@/lib/utils";
import { Donation } from "@/components";

interface Props {
  className?: string;
}

const DonationPage: React.FC<Props> = (props) => {
  const { className } = props;
  return (
    <div className={cn("", className)}>
      <Donation />
    </div>
  );
};

export default DonationPage;
