import { lazy } from "react";
const Index1 = lazy(() => import("../componets/pages/index-1"));
const Index2 = lazy(() => import("../componets/pages/index-2/index"));
const Index3 = lazy(() => import("../componets/pages/index-3"));
const Index4 = lazy(() => import("../componets/pages/index-4"));
const About = lazy(() => import("../componets/pages/about"));
const Contact = lazy(() => import("../componets/pages/contact"));
const ErrorPage = lazy(() => import("../componets/pages/404"));
const BlogOne = lazy(() => import("../componets/pages/blog-one"));
const BlogTwo = lazy(() => import("../componets/pages/blog-two"));
const BlogSingle = lazy(() => import("../componets/pages/blog-single"));
const Faq = lazy(() => import("../componets/pages/faq"));
const Team = lazy(() => import("../componets/pages/team"));
const Testimonial = lazy(() => import("../componets/pages/testimonial"));
const ProjectSingle = lazy(() => import("../componets/pages/project-single"));
const Project = lazy(() => import("../componets/pages/project"));
const Services = lazy(() => import("../componets/pages/service"));
const ServiceSingle = lazy(() => import("../componets/pages/service-single"));
const Webdevelopment = lazy(() => import("../componets/pages/WebDevelopment"));
const SoftwareSolutions = lazy(() => import("../componets/pages/SoftwareSolutions"));
const DigitalMarketing = lazy(() => import("../componets/pages/Digitalmarketing"));


export const landingRoutes = [
  {
  path: "/",
  name: "index4",
  element: <Index4 />
}, 
// {
//   path: "/index-2",
//   name: "index2",
//   element: <Index2 />
// }, 
// {
//   path: "/index-3",
//   name: "index3",
//   element: <Index3 />
// }, {
//   path: "/index-4",
//   name: "index4",
//   element: <Index4 />
// }
];
export const pageRoutes = [
  {
    path:"/index-4",
    name:"home",
    element: <Index4 />
  },
  {
  path: "/about",
  name: "about",
  element: <About />
}, {
  path: "/contact",
  name: "contact",
  element: <Contact />
}, {
  path: "/404",
  name: "404",
  element: <ErrorPage />
}, {
  path: "/blog-one",
  name: "blog-one",
  element: <BlogOne />
}, {
  path: "/blog-two",
  name: "blog-two",
  element: <BlogTwo />
}, {
  path: "/blog-single",
  name: "blog-single",
  element: <BlogSingle />
}, {
  path: "/faq",
  name: "faq",
  element: <Faq />
}, {
  path: "/team",
  name: "team",
  element: <Team />
}, {
  path: "/testimonial",
  name: "testimonial",
  element: <Testimonial />
}, {
  path: "/project",
  name: "project",
  element: <Project />
}, {
  path: "/project-single",
  name: "project-single",
  element: <ProjectSingle />
}, {
  path: "/service",
  name: "services",
  element: <Services />
}, {
  path: "/service-single",
  name: "service-single",
  element: <ServiceSingle />
},
{
  path: "/WebDevelopment",
  name: "WebDevelopment",
  element: <Webdevelopment />
},
{
  path: "/SoftwareSolutions",
  name: "SoftwareSolutions",
  element: <SoftwareSolutions />
},
{
  path: "/digital-marketing",
  name: "Digitalmarketing",
  element: <DigitalMarketing />
}
];