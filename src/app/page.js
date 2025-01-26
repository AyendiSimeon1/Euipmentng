import Image from "next/image";
import Header from '@/components/homepage/header';
import Hero from '@/components/homepage/hero';
import Footer from '@/components/homepage/footer'
export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Footer />
    </div>
    
  );
}
