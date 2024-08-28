export const golfPackages = [
  {
    id: 1,
    title: "Classic Golf Retreat",
    price: "$250 / Day",
    description:
      "Enjoy a classic golf retreat with access to top-tier courses and exclusive amenities.",
    features: [
      "Access to all vehicle categories",
      "Complimentary golf cart rental",
      "Daily breakfast included",
    ],
    golfPerkTitle: "Unlimited Tee Times",
    golfPerkDescription:
      "Book as many tee times as you like during your stay, ensuring you never miss an opportunity to hit the greens.",
    button: {
      text: "Get Started Now",
      href: "/classic-golf-retreat",
    },
  },
  {
    id: 2,
    title: "Luxury Golf Escape",
    price: "$350 / Day",
    description:
      "Indulge in a luxurious golf escape with premium accommodations and services.",
    features: [
      "Access to all vehicle categories",
      "Personal caddie service",
      "Daily gourmet breakfast included",
    ],
    golfPerkTitle: "VIP Club Access",
    golfPerkDescription:
      "Enjoy exclusive access to members-only areas at the finest golf clubs, enhancing your golfing experience.",
    button: {
      text: "Book Your Escape",
      href: "/luxury-golf-escape",
    },
  },
  {
    id: 3,
    title: "Family Golf Adventure",
    price: "$200 / Day",
    description:
      "A perfect golf getaway for the whole family, featuring fun activities for everyone.",
    features: [
      "Access to all vehicle categories",
      "Kids golf lessons included",
      "Daily family-friendly breakfast included",
    ],
    golfPerkTitle: "Family Golf Clinics",
    golfPerkDescription:
      "Join our family-friendly golf clinics, where both adults and children can learn and enjoy the game together.",
    button: {
      text: "Plan Your Adventure",
      href: "/family-golf-adventure",
    },
  },
] as const;
