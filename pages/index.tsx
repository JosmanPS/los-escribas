import Layout from "~/components/Layout";
import Features from "~/components/pages/Home/Features";
import Hero from "~/components/pages/Home/Hero";
import CTAImage from "~/components/pages/Home/CTAImage";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Features />
      <CTAImage />
    </Layout>
  );
}
