import Layout from "~/components/Layout";
import Features from "~/components/pages/Home/Features";
import Hero from "~/components/pages/Home/Hero";
import CTAImage from "~/components/pages/Home/CTAImage";
import Process from "~/components/pages/Home/Process";
import Products from "~/components/pages/Home/Products";
import Pricing from "~/components/pages/Home/Pricing";
import Contact from "~/components/pages/Home/Contact";
import CTAImageCustom from "~/components/pages/Home/CTAImageCustom";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Features />
      <CTAImage />
      <Process />
      <Products />
      <Pricing />
      <CTAImageCustom />
      <Contact />
    </Layout>
  );
}
