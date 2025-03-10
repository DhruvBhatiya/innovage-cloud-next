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
        label: "Off-shore technical support",
        href: "/services/#off-shore-technical-support",
      },
      {
        label: "Incident management",
        href: "/services/#incident-management",
      },
      {
        label: "Manual Regression Testing",
        href: "/services/#manual-regression-testing",
      },
      {
        label: "Assessment as a Service",
        href: "/services/#assessment-as-a-service",
      },
      {
        label: "Configure and Code Integrations",
        href: "/services/#configure-and-code-integrations",
      },
      {
        label: "Bespoke Application Development",
        href: "/services/#bespoke-application-development",
      },
    ],
  },
  {
    label: "Career",
    href: "/career",
    submenu: [
      { label: "Job Openings", href: "/career/#job-openings" },
      { label: "Life at Innovage", href: "/career/#life-at-innovage" },
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

