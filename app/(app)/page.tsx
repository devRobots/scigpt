import SimpleArticle from '@/app/components/web/SimpleArticle';
import MainBanner from '@/app/components/web/home/MainBanner';
import Strengths from '@/app/components/web/home/Strengths';
import TechBrands from '@/app/components/web/home/TechBrands';
import UseCases from '@/app/components/web/home/UseCases';

export default function HomePage() {
  return (
    <main className="flex flex-col w-full p-4 items-center justify-center gap-16 md:gap-32">
      <MainBanner />
      <SimpleArticle
        title="Únete a la Revolución"
        content="No dejes que la falta de tiempo o inspiración te detenga. Nuestra aplicación está diseñada para ayudarte a llevar tus ideas al siguiente nivel. Empieza hoy mismo y descubre cómo la inteligencia artificial puede transformar tu proceso de escritura científica."
      />
      <Strengths />
      <SimpleArticle
        title="Potencia y Versatilidad en un Solo Lugar"
        content="Nuestra aplicación no solo te ahorra tiempo, sino que también eleva la calidad de tus escritos. Con la inteligencia artificial de tu lado, cada artículo científico se convierte en una obra maestra."
      />
      <UseCases />
      <TechBrands />
    </main>
  );
}
