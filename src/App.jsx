import "@/App.scss";
import Navbar from "./components/ui/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Filter from "@ui/Filter/Filter";
import BrandCarousel from "./components/Carousels/BrandCarousel/BrandCarousel";
import TestimonialCarousel from "./components/Carousels/TestimonialCarousel/TestimonialCarousel";
import { useVh } from "@hooks/useVh";

function App() {
  useVh();

  const menuItems = [
    {
      id: 1,
      url: "/",
      text: "Main",
    },
    {
      id: 2,
      url: "/about",
      text: "About",
    },
    {
      id: 3,
      url: "/services",
      text: "Service",
    },
    {
      id: 4,
      url: "/portfolio",
      text: "Portfolio",
    },
    {
      id: 5,
      url: "/contacts",
      text: "Contacts",
    },
  ];

  const categories = [
    { id: 0, name: "All Projects", image: "house" },
    { id: 1, name: "Construction", image: "construction" },
    { id: 2, name: "Project Development", image: "plan" },
    { id: 3, name: "Interior Design", image: "pantone" },
    { id: 4, name: "Repairs", image: "painting" },
    { id: 5, name: "Fixes", image: "construction" },
  ];

  const projects = [
    {
      id: 1,
      title: "Cubes Building",
      subtitle: "Building 1",
      category: { id: 1 },
      img: {
        src: "building_1.png",
        alt: "Cubes Building project",
      },
    },
    {
      id: 2,
      title: "Modern Cottage",
      subtitle: "Building 2",
      category: { id: 2 },
      img: {
        src: "building_2.png",
        alt: "Modern Cottage project",
      },
    },
    {
      id: 3,
      title: "Glass Tower",
      subtitle: "Building 3",
      category: { id: 3 },
      img: {
        src: "building_3.png",
        alt: "Glass Tower project",
      },
    },
    {
      id: 4,
      title: "Eco House",
      subtitle: "Building 4",
      category: { id: 4 },
      img: {
        src: "building_4.png",
        alt: "Eco House project",
      },
    },
    {
      id: 5,
      title: "Skyline Plaza",
      subtitle: "Building 5",
      category: { id: 1 },
      img: {
        src: "building_5.png",
        alt: "Skyline Plaza project",
      },
    },
    {
      id: 6,
      title: "Brick Residence",
      subtitle: "Building 6",
      category: { id: 2 },
      img: {
        src: "building_6.png",
        alt: "Brick Residence project",
      },
    },
    {
      id: 7,
      title: "Steel Factory",
      subtitle: "Building 7",
      category: { id: 3 },
      img: {
        src: "building_7.png",
        alt: "Steel Factory project",
      },
    },
    {
      id: 8,
      title: "Skyscraper Viva",
      subtitle: "Building 8",
      category: { id: 4 },
      img: {
        src: "building_8.png",
        alt: "Luxury Villa project",
      },
    },
  ];

  const sliders = [
    { id: 0, img: { src: "logo_1.png" } },
    { id: 1, img: { src: "logo_2.png" } },
    { id: 2, img: { src: "logo_3.png" } },
    { id: 3, img: { src: "logo_4.png" } },
    { id: 4, img: { src: "logo_5.png" } },
    { id: 5, img: { src: "logo_6.png" } },
  ];

  const testimonialsData = [
    {
      id: 1,
      img: {
        src: "/images/testimonials/work-team-1.jpg",
        title: "Sunrise Project team",
      },
      thumbImg: {
        src: "/images/testimonials/avatars/john-doe.jpg",
        title: "John Doe",
      },
      testimonial: {
        text: "Very high quality and professional service! All problems were solved, even those I wasn't aware of.",
        name: "John Doe",
        position: "CEO of Vector LLC",
      },
    },
    {
      id: 2,
      img: {
        src: "/images/testimonials/work-team-2.jpg",
        title: "Team meeting",
      },
      thumbImg: {
        src: "/images/testimonials/avatars/sarah-wilson.jpg",
        title: "Sarah Wilson",
      },
      testimonial: {
        text: "Deadlines were met down to the hour. The result exceeded all expectations. We will definitely work with them again.",
        name: "Sarah Wilson",
        position: "Marketing Director at TechSolutions Inc.",
      },
    },
    {
      id: 3,
      img: {
        src: "/images/testimonials/work-team-3.jpg",
        title: "Office workspace",
      },
      thumbImg: {
        src: "/images/testimonials/avatars/michael-brown.jpg",
        title: "Michael Brown",
      },
      testimonial: {
        text: "The team demonstrated exceptional expertise and attention to detail. The project was delivered flawlessly.",
        name: "Michael Brown",
        position: "CTO at Innovation Labs",
      },
    },
    {
      id: 4,
      img: {
        src: "/images/testimonials/work-team-4.jpg",
        title: "Creative session",
      },
      thumbImg: {
        src: "/images/testimonials/avatars/emily-davis.jpg",
        title: "Emily Davis",
      },
      testimonial: {
        text: "Outstanding communication and results. They truly understand our business needs and deliver beyond expectations.",
        name: "Emily Davis",
        position: "Product Manager at CreativeStudio",
      },
    },
  ];

  return (
    <div className="app">
      <Navbar menuItems={menuItems}></Navbar>
      <TestimonialCarousel
        title="What clients are saying"
        testimonials={testimonialsData}
      ></TestimonialCarousel>
      <BrandCarousel sliders={sliders}></BrandCarousel>
      <Filter
        items={projects}
        categories={categories}
      ></Filter>
      <Footer></Footer>
    </div>
  );
}

export default App;
