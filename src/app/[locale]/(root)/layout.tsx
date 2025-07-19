
import { Footer, Header, SocialSidebar } from "@/components";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <SocialSidebar className="fixed top-[436px] z-50 right-0" />
    </>
  );
}
