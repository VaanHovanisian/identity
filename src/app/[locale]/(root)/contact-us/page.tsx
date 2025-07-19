import React from "react";
import { cn } from "@/lib/utils";
import { ContactUs } from "@/components";

interface Props {
  className?: string;
}

const ContactUsPage: React.FC<Props> = (props) => {
  const { className } = props;
  return (
    <div className={cn("", className)}>
      <ContactUs />
    </div>
  );
};

export default ContactUsPage;
