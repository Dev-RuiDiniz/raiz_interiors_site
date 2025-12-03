import type { Metadata } from "next"
import "./globals.css"
import { cormorant, inter, playfair } from "@/lib/fonts"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { SessionProvider } from "@/components/providers/session-provider"

export const metadata: Metadata = {
  title: "RAIZ Interiors | Interior Design Studio",
  description: "Creating meaningful spaces that tell your story through thoughtful design and attention to detail. Architecture, Interior Design, Decoration, Consultancy & Staging.",
  keywords: ["interior design", "architecture", "decoration", "Portugal", "Lisbon", "design studio"],
  authors: [{ name: "RAIZ Interiors" }],
  openGraph: {
    title: "RAIZ Interiors | Interior Design Studio",
    description: "Creating meaningful spaces that tell your story.",
    type: "website",
    locale: "en_US",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${cormorant.variable} ${inter.variable} ${playfair.variable} font-inter antialiased`}
      >
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
