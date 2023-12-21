import Calendar from "../../public/icons/calendar.png";
import Next from "../../public/icons/nextjs.png";
import Mongo from "../../public/icons/mongodb.png";
import Cloudinary from "../../public/icons/cloudinary.png";
import NextAuth from "../../public/icons/nextAuth.png";
import Node from "../../public/icons/nodejs.png";
import Stripe from "../../public/icons/stripe.png";
import Vercel from "../../public/icons/vercel.png";
import Google from "../../public/icons/google.png";
import Booking from "../../public/icons/booking.png";
import Profile from "../../public/icons/profile.png";
import Reviews2 from "../../public/icons/reviews2.png";
import Admin2 from "../../public/icons/admin2.png";
import Payment from "../../public/icons/payment.png";
import Responsive from "../../public/icons/responsive.png";
import Accessibility from "../../public/icons/accessibility.png";
import SEO from "../../public/icons/seo.png";
import Page from "../../public/icons/page.png";
import Blog from "../../public/icons/blog.png";
import Sitemap from "../../public/icons/sitemap.png";
import Social from "../../public/icons/social.png";
import Index from "../../public/icons/index.png";
import Diverse from "../../public/icons/diverse.png";
import Fee from "../../public/icons/fee.png";
import Data from "../../public/icons/data.png";
import Client from "../../public/icons/client.png";
import Innovation from "../../public/icons/innovation.png";
import Elite from "../../public/images/elite.png";

export const benefits = [
  {
    heading: "Lower Fees",
    description:
      "When you have your own website, you have full control over your property listings, pricing, and booking policies. You can set your own rules and policies without being subject to the platforms' terms and conditions.",
  },
  {
    heading: "Greater Control",
    description:
      "Airbnb and VRBO charge hosts various fees, including service fees, host fees, and payment processing fees. These can significantly eat into your profits. With your own website, you can avoid or minimize these fees.",
  },
  {
    heading: "No Competing Listings",
    description:
      "On third-party platforms, your property is often listed alongside numerous competing properties, making it harder to stand out. On your website, you can focus solely on your property, giving it the undivided attention it deserves.",
  },
  {
    heading: "Diversification",
    description:
      "Relying solely on Airbnb and VRBO can be risky, as their policies and algorithms can change at any time. Having your own website provides a level of diversification and independence.",
  },
  {
    heading: "Long-Term Cost Savings",
    description:
      "While building and maintaining a website may involve an initial investment, it can save you money in the long run compared to paying ongoing fees to third-party platforms.",
  },
  {
    heading: "Data Ownership",
    description:
      "When you use Airbnb and VRBO, they own and control the guest data. With your own website, you own and control this valuable information, allowing you to build a list of past guests for marketing purposes.",
  },
] as const;

export const features = [
  {
    service: "Booking and Reservation System",
    description:
      "Implement a user-friendly booking system that allows guests to check availability, select dates, and make reservations directly on your site.",
    icon: Calendar,
  },
  {
    service: "Guest Reviews and Testimonials",
    description:
      "Showcase positive reviews and testimonials from previous guests to build trust and credibility. Visitors will only be able to review once they've booked a stay on your property.",
    icon: Reviews2,
  },
  {
    service: "Admin Panel",
    description:
      "Admin panel will allow you to create, update, and delete listings on your personalized booking websites. View the number of bookings, and make any updates as needed.",
    icon: Admin2,
  },
  {
    service: "Payment Processing",
    description:
      "Stripe payment processing enables secure online transactions, integrating a trusted payment gateway for businesses to accept credit card payments.",
    icon: Payment,
  },
  {
    service: "Mobile Resposive",
    description:
      "Designed to adapt and display optimally on various devices and screen sizes, providing an optimal user experience by adjusting its layout and content dynamically.",
    icon: Responsive,
  },
  {
    service: "Accessible",
    description:
      "Ensures that people with disabilities can perceive, understand, navigate, and interact with its content, features, and functionalities effectively.",
    icon: Accessibility,
  },
  {
    service: "Search Engine Optomization",
    description:
      "A search engine optimized website is configured to enhance its visibility and ranking on search engine results pages.",
    icon: SEO,
  },
  {
    service: "Page Speed Optmization",
    description:
      "Ensure that webite pages load quickly and efficiently and has fast loading times for its pages and content, improving user experience search engine rankings.",
    icon: Page,
  },
  {
    service: "Blog Articles",
    description:
      "Blog articles enhance website visibility by providing fresh, relevant, and keyword-rich content that boosts organic search rankings, and engages potential clients.",
    icon: Blog,
  },
  {
    service: "Site Map",
    description:
      "Site maps increase website visibility by helping search engines to understand the site's structure, improving rankings and ensuring that all pages are easily accessible.",
    icon: Sitemap,
  },
  {
    service: "Social Media Intergration",
    description:
      "Enhances website visibility by connecting your website to social platforms, enabling easy sharing of content, ultimately expanding the online reach of your business.",
    icon: Social,
  },
  {
    service: "Google Indexing",
    description:
      "Allows google to crawl and analyze the content of your website, and then indexes it in its database, ensuring that your website is eligible to appear in Google search results.",
    icon: Index,
  },
] as const;

export const caseStudies = [
  {
    company: "Elite Retreat Rentals",
    companyDesc: "ABC Company is a company that does business",
    projectDetails:
      "This website showcases Elite Retreat Rentals is a curated selection of meticulously designed houses, each offering a unique blend of modern amenities and scenic beauty.",
    href: "https://case-study-one.vercel.app/",
    src: Elite,
  },
] as const;

export const process = [
  {
    id: 59,
    processName: "Initial Consultation",
    processDescription:
      "Here, we arrange a virtual meeting over Zoom with you as the vacation rental owner to discuss your needs and goals. We ask detailed questions about your property, target audience, and any unique features or requirements. We gather information that will help tailor your services to your specific needs. At the end of the call, a contract is sent to you outlining all the services that will be rendered.",
  },
  {
    id: 60,
    processName: "Onboarding",
    processDescription:
      "Once the Contract is signed and returned, you will be given access to the client dashboard. From here, we have you complete a detailed questionnaire to help us better understand you as a business. Your answers assist with the copywriting process.",
  },
  {
    id: 61,
    processName: "Design & Development",
    processDescription:
      "You will be sent five different designs. After you tell us which ones you prefer, we will build the website based on those designs. You will be given a temporary link to see the progress over time. The site will look perfect on all devices, and details and small animations give it that certain something.",
  },
  {
    id: 62,
    processName: "Deployment and Going Live",
    processDescription:
      "We'll seek your approval before moving forward once the website is completed and meets your expectations. Upon receiving your permission, we'll deploy your custom booking application to the World Wide Web. Your new booking platform will be instantly accessible to potential guests and clients globally. A  brief training session on using the back-end dashboard will be provided, ensuring you're comfortable navigating and accessing information.",
  },
] as const;

export const pricing = [
  {
    id: 26,
    plan: "Starter",
    description:
      "Ideal for individual owners with one property who are looking to get started.",
    price: 199,
    includes: [
      {
        id: 26.1,
        feature: "5 page website",
      },
      {
        id: 26.2,
        feature: "Hosting",
      },
      {
        id: 26.3,
        feature: "SEO",
      },
      {
        id: 27.3,
        feature: "Payment Processing",
      },
      {
        id: 27.5,
        feature: "12 Blog Articles",
      },
    ],
    btnType: "primary",
  },
  {
    id: 27,
    plan: "Advanced",
    description:
      "Perfect for growing businesses with 2 to 9 properties that need additional features.",
    price: 249,
    includes: [
      {
        id: 26.1,
        feature: "Everything in Starter, plus:",
      },
      {
        id: 26.3,
        feature: "Analytics and Reporting",
      },
      {
        id: 27.3,
        feature: "Dynamic Pricing Engine",
      },
      {
        id: 27.4,
        feature: "Customer Support Enhancements",
      },
      {
        id: 27.6,
        feature: "24 Blog Articles",
      },
    ],
    btnType: "secondary",
  },
  {
    id: 28,
    plan: "Enterprise",
    description:
      "For large-scale organizations with at least 10 or more rental properties.",
    price: "349",
    includes: [
      {
        id: 28.1,
        feature: "Everything in Advanced, plus:",
      },
      {
        id: 28.2,
        feature: "Geographical Expansion",
      },
      {
        id: 28.3,
        feature: "Enterprise-Level Scalability",
      },
      {
        id: 28.3,
        feature: "Advanced SEO Services",
      },
      {
        id: 28.5,
        feature: "Unlimited Blog Articles",
      },
    ],
    btnType: "tertiary",
  },
] as const;

export const faqs = [
  {
    id: 36,
    question: "Why should I use a direct booking website instead of Airbnb?",
    answer:
      "Direct booking websites offer more control over your property, lower fees, and personalized branding. You have direct communication with guests and can build a loyal customer base.",
  },
  {
    id: 36.1,
    question: "How does the booking process work on a direct booking website?",
    answer:
      "Guests can browse your property, view details, and make reservations directly through your website. You have the flexibility to set your own booking policies and payment processes.",
  },
  {
    id: 36.2,
    question: "What features can I customize on my direct booking website?",
    answer:
      "You can customize the website design, branding elements, property details, pricing, and policies. We offer flexibility to tailor the platform to your unique needs.",
  },
  {
    id: 36.3,
    question: "Is it easy for guests to find my direct booking website?",
    answer:
      "We implement SEO strategies to improve the visibility of your website on search engines. Additionally, we can assist with marketing strategies to drive traffic to your platform.",
  },
  {
    id: 36.4,
    question:
      "How do I manage bookings and communicate with guests on the platform?",
    answer:
      "We provide a user-friendly dashboard where you can manage bookings, communicate with guests, and access important information. Training is offered to ensure you can navigate the platform with ease.",
  },
  {
    id: 36.5,
    question:
      "Can I integrate the direct booking website with my existing property management system (PMS)?",
    answer:
      "Depending on your PMS, integration may be possible. We'll assess compatibility and work towards seamless integration to streamline your management processes.",
  },
  {
    id: 37,
    question: "How long does it typically take to build a website?",
    answer:
      "The timeline can vary based on the complexity of the project. On average, a small business website takes around 2 to 4 weeks from initial concept to launch.",
  },
  {
    id: 42,
    question: "Do you offer website maintenance and support?",
    answer:
      "Yes, we offer ongoing maintenance and support packages to ensure your website remains up-to-date, secure, and functioning optimally after launch.",
  },
  {
    id: 46,
    question:
      "Can you assist with transferring my existing domain name to your hosting service?",
    answer:
      "Absolutely, we can guide you through the process of transferring your domain name to our hosting service. We'll ensure a smooth transition so that your website remains accessible with minimal downtime during the switch.",
  },
] as const;

export const footer = [
  {
    id: 1,
    heading: "Home",
    href: "/",
  },
  {
    id: 6,
    heading: "About",
    href: "/about",
  },
  {
    id: 11,
    heading: "Features",
    href: "/features",
  },
  {
    id: 16,
    heading: "Contact",
    href: "/contact",
  },
  {
    id: 17,
    heading: "Blog",
    href: "/blog",
  },
] as const;

export const values = [
  {
    icon: Client,
    value: "Client Focus",
    desc: "Client success is our unwavering commitment. We prioritize deep understanding, cultivating lasting partnerships, and delivering solutions that exceed expectations, fostering trust and mutual growth.",
  },
  {
    icon: Diverse,
    value: "Integrity",
    desc: "Integrity is our business's bedrock, guiding us with unwavering ethical standards. Transparency, honesty, and accountability shape our interactions, ensuring trust, fostering a positive work culture, and establishing enduring credibility.",
  },
  {
    icon: Innovation,
    value: "Innovation",
    desc: "Innovation is our driving force, propelling continuous improvement and a forward-thinking approach. Embracing creativity, curiosity, and adaptability, we pioneer new solutions, anticipating and meeting evolving needs to stay at the forefront of positive change in our industry.",
  },
] as const;

export const techStack = [
  {
    icon: Next,
    name: "Next.js",
    desc: "A React-based open-source framework that enables the development of server-rendered, or statically generated web applications with a focus on simplicity and performance.",
  },
  {
    icon: Mongo,
    name: "Mongo DB",
    desc: "MongoDB is a cross-platform, document-oriented NoSQL database that provides high performance, scalability, and flexibility for handling and organizing data in a JSON-like BSON format.",
  },
  {
    icon: Cloudinary,
    name: "Cloudinary",
    desc: "Cloudinary is a cloud-based image and video management platform that offers a comprehensive suite of tools for uploading, storing, optimizing, and delivering media assets.",
  },
  {
    icon: NextAuth,
    name: "Next Auth",
    desc: "An authentication library for Next.js applications that simplifies the implementation of various authentication providers, offering a seamless and customizable solution for user authentication.",
  },
  {
    icon: Node,
    name: "Node",
    desc: "Node.js is a server-side JavaScript runtime environment that allows developers to execute JavaScript code on the server, enabling the development of scalable and high-performance web applications.",
  },
  {
    icon: Stripe,
    name: "Stripe",
    desc: "Stripe is a popular online payment processing platform that provides APIs and tools for businesses to securely accept and manage payments over the internet, supporting various payment methods and currencies.",
  },
  {
    icon: Vercel,
    name: "Vercel",
    desc: "Vercel is a cloud platform for serverless deployment that specializes in hosting Jamstack websites and serverless functions, providing a seamless and efficient way to deploy and scale web applications with ease.",
  },
  {
    icon: Google,
    name: "Google Analytics",
    desc: "A web analytics service that tracks and reports website traffic, providing insights into user behavior, demographics, and other metrics to help better understand and optimize online presence.",
  },
] as const;

export const adminData = [
  {
    icon: Admin2,
    category: "Admin Dashboard",
    tasks: [
      {
        task: "Retrieve the total sales for either the current day or an extended period, check the number of bookings, and view a graph chart illustrating the sales history.",
      },
    ],
  },
  {
    icon: Diverse,
    category: "Property Listings",
    tasks: [
      {
        task: "Create new property listings for your guests, update existing listings as needed, enjoy unlimited image uploads for each property, and easily delete listings when necessary.",
      },
    ],
  },
  {
    icon: Calendar,
    category: "Guest Reservations",
    tasks: [
      {
        task: "Review booked dates, check-in/check-out details, and access guest receipts easily. Additionally, manage your reservations efficiently by deleting them as needed.",
      },
    ],
  },
  {
    icon: Social,
    category: "User Info",
    tasks: [
      {
        task: "View comprehensive reservation information for all guests, assign user roles like admin or regular user, and effortlessly delete users when required.",
      },
    ],
  },
  {
    icon: Reviews2,
    category: "Guest Reviews",
    tasks: [
      {
        task: "Effortlessly view all comments and efficiently manage your content by deleting comments as necessary.",
      },
    ],
  },
  {
    icon: Fee,
    category: "Payment Access",
    tasks: [
      {
        task: "Access all of the payments that were sent to you by your guest. Issue refunds, print receipts, and manage all charges.",
      },
    ],
  },
] as const;

export const guestData = [
  {
    icon: Booking,
    category: "My Bookings",
    tasks: [
      {
        task: "Check booked dates, view check-in/check-out details, and review the total amount paid for reservations. Additionally, access detailed reservation information and conveniently print reservation receipts in PDF format.",
      },
    ],
  },
  {
    icon: Profile,
    category: "My Profile",
    tasks: [
      {
        task: "Easily update your profile by changing your username, updating your email address, uploading a new user image, and modifying your password as needed.",
      },
    ],
  },
] as const;

export const webFeatures = [
  {
    feature: "Resposive",
    desc: "Designed to adapt and display optimally on various devices and screen sizes, providing an optimal user experience by adjusting its layout and content dynamically.",
  },
  {
    feature: "Accessible",
    desc: "Ensures that people with disabilities can perceive, understand, navigate, and interact with its content, features, and functionalities effectively, providing an inclusive and equal user experience for all.",
  },
  {
    feature: "SEO",
    desc: "A search engine optimized website is configured to enhance its visibility and ranking on search engine results pages, employing strategies to improve its relevance, accessibility, and overall performance for better search engine discoverability.",
  },
  {
    feature: "Page Speed Optimzed",
    desc: "Webite pages load quickly and efficiently, ensuring fast loading times for its pages and content, which contributes to a better user experience and may positively impact search engine rankings.",
  },
];

export const preHero = [
  {
    icon: Fee,
    feature: "Lower Fee's",
    desc: "When you have your own website, you have full control over your property listings, pricing, and booking policies. You can set your own rules and policies without being subject to the platforms' terms and conditions.",
  },
  {
    icon: Diverse,
    feature: "Diversification",
    desc: "Relying solely on Airbnb and VRBO can be risky, as their policies and algorithms can change at any time. Having your own website provides a level of diversification and independence.",
  },
  {
    icon: Data,
    feature: "Data Ownership",
    desc: "When you use Airbnb and VRBO, they own and control the guest data. With your own website, you own and control this valuable information, allowing you to build a list of past guests for marketing purposes.",
  },
];

export const mission = [
  {
    feature: "Trust & Transparency",
    desc: "We prioritize trust and transparency, building a reliable and secure environment for vacation rental owners.",
  },
  {
    feature: "User-Friendly",
    desc: "We strive to offer a personalized and user-friendly experience, tailoring our services to meet the unique needs of each host.",
  },
  {
    feature: "Growth",
    desc: "Our mission is to contribute to the growth of vacation rental businesses, enabling hosts to thrive in a competitive marketplace",
  },
  {
    feature: "Personalization",
    desc: "Continuously enhance user experience by offering personalized solutions that cater to the specific requirements of each vacation rental owner.",
  },
];
