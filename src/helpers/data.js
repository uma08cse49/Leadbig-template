import demo1 from "@/assets/img/all-images/demo/demo-img1.png";
import demo2 from "@/assets/img/all-images/demo/demo-img2.png";
import demo3 from "@/assets/img/all-images/demo/demo-img3.png";
import demo4 from "@/assets/img/all-images/demo/demo-img4.png";
export const menuItems = [{
  label: "Home",
  url: "/index-4"

  // megaMenuItems: [{
  //   image: demo1,
  //   items: [{
  //     label: "View Demo",
  //     url: "/"
  //   }],
  //   labels: "RENEV - Homepage 01"
  // }, {
  //   image: demo2,
  //   items: [{
  //     label: "View Demo",
  //     url: "/index-2"
  //   }],
  //   labels: "RENEV - Homepage 02"
  // }, {
  //   image: demo3,
  //   items: [{
  //     label: "View Demo",
  //     url: "/index-3"
  //   }],
  //   labels: "RENEV - Homepage 03"
  // }, {
  //   image: demo4,
  //   items: [{
  //     label: "View Demo",
  //     url: "/index-4"
  //   }],
  //   labels: "RENEV - Homepage 04"
  // }]
}, 
// {
//   label: "Pages",
//   children: [{
//     label: "About Us",
//     url: "/about"
//   }, {
//     label: "Our Team",
//     url: "/team"
//   }, {
//     label: "Testimonials",
//     url: "/testimonial"
//   }, {
//     label: "Contact Us",
//     url: "/contact"
//   }, {
//     label: "FAQ,s",
//     url: "/faq"
//   }, {
//     label: "404",
//     url: "/404"
//   }]
// }, {
//   label: "Services",
//   children: [{
//     label: "Our Service",
//     url: "/service"
//   }, {
//     label: "Service Single",
//     url: "/service-single"
//   }]
// }, {
//   label: "Project",
//   children: [{
//     label: "Project",
//     url: "/project"
//   }, {
//     label: "Project Single",
//     url: "/project-single"
//   }]
// }, {
//   label: "Blog",
//   children: [{
//     label: "Blog One",
//     url: "/blog-one"
//   }, {
//     label: "Blog Two",
//     url: "/blog-two"
//   }, {
//     label: "Blog Single",
//     url: "/blog-single"
//   }]
// }
// ===============================================================================================

 {
    label: "Services",
    children: [
      {
        label: "Development",
        children: [
          {
            label: "Web Development",
            url: "/service"
          },
          {
            label: "Software Solutions",
            url: "/service"
          },
          {
            label: "UI/UX Design",
            url: "/service-single"
          }
        ]
      },
      {
        label: "Digital Marketing",
        children: [
          {
            label: "Digital Marketing",
            url: "/service-single"
          },
          {
            label: "SEO & Performance Marketing",
            url: "/service-single"
          },
          {
            label: "Lead Generation",
            url: "/service-single"
          }
        ]
      }
    ]
  },
{
  label: "Projects",
  children: [{
    label: "All Projects",
    url: "/project"
  }, {
    label: "Case Studies",
    url: "/project-single"
  }]
}, 
// {
//   label: "Project",
//   children: [{
//     label: "Project",
//     url: "/project"
//   }, {
//     label: "Project Single",
//     url: "/project-single"
//   }]
// }, 
{
  label: "Insights",
  children: [{
    label: "Articles",
    url: "/blog-one"
  }, {
    label: "Industry Insights",
    url: "/blog-two"
  }, {
    label: "Guides",
    url: "/blog-single"
  }]
},

{
  label: "About",
  children: [{
    label: "About Us",
    url: "/about"
  }, {
    label: "Our Team",
    url: "/team"
  }, {
    label: "Testimonials",
    url: "/testimonial"
  }]
}

];