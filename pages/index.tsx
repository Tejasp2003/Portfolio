import LeftSide from "@/components/LeftSide";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import { motion } from "framer-motion";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-slate-950">
      <Head>
        <title>Tejas Patel - Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <main className="w-full h-screen bg-neutral-950 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] text-textLight overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-track-bodyColor/20 scrollbar-thumb-textDark font-bodyFont">
        <Navbar />
        <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0"
          >
            <LeftSide />
          </motion.div>
          <div className="h-[88vh] w-full mx-auto p-4">
            <Banner />
            <About />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}
