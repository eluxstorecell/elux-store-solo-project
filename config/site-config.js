export const siteConfig = {
  name: "Elux Store Solo Project",
  tagline: "Professional WoW Retail Services | Fast & Secure Deliveries",
  description: "For players who can't play 8-10 hours a day",
  
  about: {
    intro: "This is a very ambitious 'solo' project, which seeks to be as clear and transparent as possible for my clients. I have the support of a family of relatives guild bank.",
    features: [
      "Intense WoW Player",
      "WoW Retail Booster since Shadowlands (2019)",
      "Secure service deliveries",
      "Focus: Players who can't play 8-10 hours a day"
    ]
  },

  regions: ["US", "EU"],
  factions: ["Horde", "Alliance"],

  discord: "https://discord.gg/2R6MMRVH",

  gold: {
    pricePerMillion: 65,
    minimumOrder: 100000,
    deliveryMethods: [
      { method: "In-game mail", time: "~1 hour" },
      { method: "Face-to-face trade", time: "~10 minutes" },
      { method: "Personal guild bank", time: "~5-6 minutes" }
    ]
  },

  leveling: [
    { service: "1-90 Level Boost", price: 60 },
    { service: "80-90 Level Boost", price: 33 }
  ],

  warWithin: [
    { service: "Midnight Campaign (1-17 chapters)", price: 50 },
    { service: "Midnight Quests", price: 5 }
  ],

  payments: [
    "Binance Pay (USDT)",
    "PayPal",
    "Crypto (USDT TRC20/BEP20)"
  ]
};