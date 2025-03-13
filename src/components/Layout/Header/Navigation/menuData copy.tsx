import { HeaderItem } from "@/types/menu";

// export const headerData: HeaderItem[] = [
//   { label: "Home", href: "/" },
//   { label: "About", href: "/about" },
//   { label: "Services", href: "/services" },
//   { label: "Expertise", href: "/expertise" },
//   { label: "Blog", href: "/blog" },
//   { label: "Contact", href: "/contact" },
//   // { label: "Courses", href: "/#courses  " },
//   // { label: "Mentor", href: "/#mentor" },
//   // { label: "Group", href: "/#portfolio" },
//   // { label: "Testimonial", href: "/#testimonial" },
//   // { label: "Docs", href: "/documentation" },
// ];


export const headerData: HeaderItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    submenu: [
      {
        label: "Seamless Integrations & Custom API Development",
        href: "/services/#seamless-integrations-and-api-development",
      },
      {
        label: "Bespoke Application Development",
        href: "/services/#bespoke-application-development",
      },
      {
        label: "Oracle Fusion Cloud Implementation",
        href: "/services/#oracle-fusion-cloud-implementation",
      },
      {
        label: "Off-shore Technical Support & Resource Augmentation",
        href: "/services/#off-shore-technical-support-and-resource-augmentation",
      },
      {
        label: "AI & Automation",
        href: "/services/#ai-and-automation",
      },
      {
        label: "Cloud Migrations & Management",
        href: "/services/#cloud-migrations-and-management",
      },
      {
        label: "Data Analytics & Reporting",
        href: "/services/#data-analytics-and-reporting",
      },
    ],
  },

  {
    label: "Career",
    href: "/career",
    submenu: [
      { label: "Job Openings", href: "/job-openings" },
      { label: "Life at Innovage", href: "/life-at-innovage" },
    ],
  },
  // {
  //   label: "Expertise",
  //   href: "/expertise",
  //   submenu: [
  //     { label: "OIC - Oracle Integration Cloud", href: "/expertise/#oic" },
  //     { label: "VBCS - Visual Builder Cloud Service", href: "/expertise/#vbcs" },
  //     { label: "PCS - Process Cloud Service", href: "/expertise/#pcs" },
  //     { label: "Apex Development", href: "/expertise/#apex-development" },
  //     { label: "Java Development", href: "/expertise/#java-development" },
  //     { label: "Database", href: "/expertise/#database" },
  //   ],
  // },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

