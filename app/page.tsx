import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Services from "@/components/Services"
import Products from "@/components/Products"
import Clients from "@/components/Clients"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Yesp Tech - Leading Web Development & eCommerce Company in Erode",
  description:
    "Yesp Tech is the top web development company in Erode offering custom web solutions, eCommerce development, mobile apps, and digital marketing services. 50+ successful projects delivered.",
  keywords:
    "web development company erode, ecommerce development company, web development company in erode, mobile app development, SEO services, UI UX design company, custom software development, digital marketing erode",
  openGraph: {
    title: "Yesp Tech - Leading Web Development & eCommerce Company in Erode",
    description:
      "Professional web development and eCommerce solutions trusted by 50+ clients. Expert web development company in Erode with 3+ years of experience.",
    url: "https://yesptech.in",
    siteName: "Yesp Tech",
    images: [
      {
        url: "/yesp-logo.png",
        width: 1200,
        height: 630,
        alt: "Yesp Tech - Web Development Company in Erode",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yesp Tech - Leading Web Development & eCommerce Company in Erode",
    description:
      "Professional web development and eCommerce solutions trusted by 50+ clients. Expert web development company in Erode.",
    images: ["/yesp-logo.png"],
  },
  alternates: {
    canonical: "https://yesptech.in",
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Sidebar />
      <Hero />
      <About />
      <Services />
      <Products />
      {/* <TrustedClients /> */}
      <Clients />
      <Contact />
      <Footer />
    </div>
  )
}
