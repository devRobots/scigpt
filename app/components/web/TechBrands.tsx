import Image from 'next/image';

export default function TechBrands() {
  return (
    <section className="flex flex-col items-center justify-center p-4 sm:p-8  gap-8">
      <h2 className="text-center text-xl text-bold">
        Creado con ayuda de las tecnologías
      </h2>
      <div className="grid grid-cols-3 items-end justify-center gap-8 md:gap-32">
        <Image src="/brands/Nextjs.svg" alt="main" width={256} height={52} />
        <Image src="/brands/Gemini.svg" alt="main" width={256} height={94} />
        <Image src="/brands/Firebase.svg" alt="main" width={256} height={70} />
      </div>
    </section>
  );
}
