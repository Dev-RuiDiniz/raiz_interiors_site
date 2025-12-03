import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { FloatingChat } from "@/components/ui/floating-chat"
import { GDPRBanner } from "@/components/ui/gdpr-banner"

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatingChat />
      <GDPRBanner />
    </>
  )
}
