import Layout from "~/components/Layout";
import Features from "~/components/pages/Home/Features";
import Hero from "~/components/pages/Home/Hero";
import CTAImage from "~/components/pages/Home/CTAImage";
import Process from "~/components/pages/Home/Process";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Features />
      <CTAImage />
      <Process />
    </Layout>
  );
}
