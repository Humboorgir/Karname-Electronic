import Head from "@/components/head";
import Header from "@/components/home/header";
import Hero from "@/components/home/hero";
import Footer from "@/components/footer";
const Home = () => {
  return (
    <div className="flex flex-col min-h-[100svh] justify-between">
      <Head page="خانه"></Head>
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;
