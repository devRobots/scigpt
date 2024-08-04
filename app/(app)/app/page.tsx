import NewDraft from '@/app/components/writer/NewDraft';
import PersonalDrafts from '@/app/components/writer/PersonalDrafts';

export default function Writer() {
  return (
    <main className="content-full">
      <section className="flex flex-col w-full sm:flex-row sm:items-center sm:justify-evenly items-start gap-2">
        <div>
          <h1 className="text-4xl font-bold">Mis articulos</h1>
          <p className="text-lg text-default-900/40">
            Bienvenido a la revolución en escritura academica.
          </p>
        </div>
        <NewDraft />
      </section>
      <PersonalDrafts />
    </main>
  );
}
