import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import PackagesSection from "../components/PackagesSection";
import ContactSection from "../components/ContactSection";

/**
 * Adaptation Living LLC — Main Page Assembly
 * ---------------------------------------------
 * This composes all major site sections in order:
 * Hero → About → Packages → Contact
 * ---------------------------------------------
 */

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full overflow-hidden">
      <Hero />
      <AboutSection />
      <PackagesSection />
      <ContactSection />
    </main>
  );
}
