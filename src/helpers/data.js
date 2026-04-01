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
}, {
  label: "Pages",
  children: [{
    label: "About Us",
    url: "/about"
  }, {
    label: "Our Team",
    url: "/team"
  }, {
    label: "Testimonials",
    url: "/testimonial"
  }, {
    label: "Contact Us",
    url: "/contact"
  }, {
    label: "FAQ,s",
    url: "/faq"
  }, {
    label: "404",
    url: "/404"
  }]
}, {
  label: "Services",
  children: [{
    label: "Our Service",
    url: "/service"
  }, {
    label: "Service Single",
    url: "/service-single"
  }]
}, {
  label: "Project",
  children: [{
    label: "Project",
    url: "/project"
  }, {
    label: "Project Single",
    url: "/project-single"
  }]
}, {
  label: "Blog",
  children: [{
    label: "Blog One",
    url: "/blog-one"
  }, {
    label: "Blog Two",
    url: "/blog-two"
  }, {
    label: "Blog Single",
    url: "/blog-single"
  }]
}];