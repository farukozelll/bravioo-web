import { ProductTourSection } from '@/components/sections/product-tour-section';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function ProductTourPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-white dark:bg-gray-900">
      <Header />
      <main className="flex-1">
        <ProductTourSection />
      </main>
      <Footer />
    </div>
  );
}


