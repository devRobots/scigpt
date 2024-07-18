import { mate } from '@/app/ui/fonts';
import { Button } from '@nextui-org/button';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';

export default function Chat() {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-2">
      <article className="grid grid-cols-1 p-8 space-y-6 md:content-center">
        <div className="w-full flex flex-col md:items-end">
          <Image src="/logo.png" alt="logo" width={256} height={256} />
        </div>
        <h1 className="title">Tu propio redactor de Articulos Cientificos</h1>
        <p className="w-full md:text-end text-lg">
          Transforma el estado del arte en magia con tu asistente de IA
        </p>
        <div className="w-full flex flex-col md:items-end">
          <Link href="/writer">
            <Button
              radius="lg"
              size="lg"
              endContent={<FaArrowRight />}
              className="super-button"
            >
              Empieza aqui
            </Button>
          </Link>
        </div>
      </article>
      <article className="px-6 pb-4 md:px-12 md:py-10">
        <Card className="flex h-full p-4 md:p-8">
          <CardHeader className={mate.className + ' editorial-header'}>
            Ensayo sobre la ceguera
          </CardHeader>
          <CardBody className={mate.className + ' editorial-body'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            nihil deleniti saepe dicta minus perspiciatis odit quo laborum.
            Autem saepe, expedita quos quaerat temporibus ab aperiam doloremque,
            reprehenderit labore pariatur ratione ducimus dicta debitis alias
            perspiciatis asperiores sequi officia eum excepturi nesciunt.
            Aliquam temporibus quibusdam iure saepe repudiandae obcaecati quae
            at accusamus placeat corrupti! Illum reprehenderit, dolore nulla
            sequi eum ipsam, possimus, nobis placeat harum praesentium neque est
            doloremque quos natus nostrum maxime sapiente illo? Dignissimos
            mollitia fuga velit modi veritatis eum nam! Laboriosam officiis
            assumenda facere aliquid eveniet perferendis? Eos commodi sapiente
            numquam nam, dicta amet eius officiis aliquam dolorum molestiae enim
            accusantium, excepturi necessitatibus fuga aut sint beatae qui?
            Fugiat ipsa sint molestiae laudantium exercitationem. Vero id
            officia sit culpa ipsam velit rerum nihil non error, repellendus
            totam, architecto labore ex? Fugiat, repellendus ratione, alias
            labore aperiam at provident neque ipsa excepturi quibusdam, a fugit
            ullam. Harum facere velit molestias non perspiciatis eos illum eius
            exercitationem cumque architecto voluptatum beatae nisi, aliquam
            tempore eveniet doloremque quam est inventore.
          </CardBody>
        </Card>
      </article>
    </main>
  );
}
