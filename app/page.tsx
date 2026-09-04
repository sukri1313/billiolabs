import Header from '@/components/billiolabs/Header';
import Hero from '@/components/billiolabs/Hero';
import Services from '@/components/billiolabs/Services';
import Process from '@/components/billiolabs/Process';
import Founder from '@/components/billiolabs/Founder';
import ContactForm from '@/components/billiolabs/ContactForm';
import Footer from '@/components/billiolabs/Footer';
import GridBackground from '@/components/billiolabs/GridBackground';

export default function Home() {
  return (
    <div className="relative min-h-screen text-white">
      <GridBackground />
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Founder />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
