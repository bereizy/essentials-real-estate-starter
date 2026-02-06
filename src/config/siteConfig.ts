import type { SiteConfig } from "@indirecttek/essentials-engine";

export const siteConfig: SiteConfig = {
  businessName: "Triangle Key Realty",
  theme: {
    primary: "#1f2937",
    secondary: "#3b82f6",
    accent: "#f59e0b",
    background: "#f9fafb",
    foreground: "#111827",
  },
  contactInfo: {
    phone: "(919) 555-0123",
    email: "info@trianglekeyrealty.com",
    address: "123 Main Street, Fuquay-Varina, NC 27526",
  },
  heroSection: {
    headline: "Your Trusted Partner for Buying & Selling Homes in the Triangle",
    subheadline:
      "With deep local market expertise in Raleigh and Fuquay-Varina, I guide you from your first search to a smooth closing—so you can make your next move with confidence.",
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80",
    imageAlt: "Real estate agent showing a home in the Raleigh area",
    callToActionLabel: "Schedule a Consultation",
  },
  services: [
    {
      name: "Buyer Representation",
      description:
        "From the first showing to the closing table, I advocate for your best interests with expert negotiation and local market insight to help you find the perfect home at the right price.",
    },
    {
      name: "Listing & Marketing Services",
      description:
        "Sell your home faster and for top dollar with professional photography, strategic pricing, and targeted marketing that puts your property in front of qualified buyers.",
    },
    {
      name: "Home Valuation & Pricing Strategy",
      description:
        "Get an accurate, data-driven assessment of your home's value with a comprehensive market analysis, so you can price confidently and maximize your return.",
    },
    {
      name: "Relocation & Move-Up Buyers",
      description:
        "Whether you're moving to the Triangle or upgrading to your next home, I streamline the process with coordinated buying and selling strategies tailored to your timeline.",
    },
    {
      name: "First-Time Homebuyer Guidance",
      description:
        "Navigate your first home purchase with ease. I walk you through every step—from financing options to inspections—so you feel informed and empowered.",
    },
    {
      name: "Investment Property Search",
      description:
        "Build long-term wealth through real estate. I help investors identify properties with strong rental potential and appreciation in the growing Triangle market.",
    },
  ],
  analytics: {
    enableTracking: true,
    mixpanelToken: "YOUR_MIXPANEL_TOKEN_HERE",
  },
  seo: {
    title: "Triangle Key Realty | Real Estate Agent in Fuquay-Varina & Raleigh, NC",
    description:
      "Triangle Key Realty helps buyers and sellers move confidently in the Raleigh and Fuquay-Varina area with expert local representation, strategic guidance, and personalized service.",
  },
  imageSearchHints: {
    hero: "realtor showing home to family in living room",
    services: [
      "real estate agent showing house",
      "family looking at new home",
      "aerial view suburban neighborhood",
      "keys to new house",
      "modern home exterior at sunset",
      "real estate investment property",
    ],
  },

  // Integrations - Scheduling, Payments, Email
  integrations: {
    scheduling: {
      provider: "calendly",
      url: "https://calendly.com/trianglekey-demo/buyer-consultation",
      buttonText: "Schedule Consultation",
    },
    payments: {
      provider: "stripe",
      mode: "deposit",
      depositAmount: 25000, // $250.00 retainer
      buttonText: "Pay $250 Retainer",
    },
    email: {
      provider: "resend",
    },
  },
};
