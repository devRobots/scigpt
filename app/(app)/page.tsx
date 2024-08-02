import { Pages } from '@/app/lib/data/consts';
import { mate } from '@/app/ui/fonts';
import { Button } from '@nextui-org/button';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';

import TechBrands from '../components/web/TechBrands';

export default function Chat() {
  return (
    <main className="content-fit">
      <section className="p-4 md:8">
        <div className="w-full">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="flex flex-col w-full lg:w-1/2 gap-4">
              <Image src="/main.webp" alt="main" width={256} height={303} />
              <h1 className="text-3xl font-bold md:text-6xl">
                Tu propio redactor de Articulos Cientificos
              </h1>
              <p className="w-full text-lg">
                Transforma el estado del arte en magia con tu asistente de IA
              </p>
              <div className="w-full flex">
                <Link href={Pages.Writer}>
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
            </div>
            <div className="lg:w-1/2 hidden lg:block">
              <Card className="flex h-full p-4 md:p-8">
                <CardHeader className={mate.className + ' editorial-header'}>
                  Lorem ipsum dolor sit amet
                </CardHeader>
                <CardBody className={mate.className + ' editorial-body'}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis nihil deleniti saepe dicta minus perspiciatis odit quo
                  laborum. Autem saepe, expedita quos quaerat temporibus ab
                  aperiam doloremque, reprehenderit labore pariatur ratione
                  ducimus dicta debitis alias perspiciatis asperiores sequi
                  officia eum excepturi nesciunt. Aliquam temporibus quibusdam
                  iure saepe repudiandae obcaecati quae at accusamus placeat
                  corrupti! Illum reprehenderit, dolore nulla sequi eum ipsam,
                  possimus, nobis placeat harum praesentium neque est doloremque
                  quos natus nostrum maxime sapiente illo? Dignissimos mollitia
                  fuga velit modi veritatis eum nam! Laboriosam officiis
                  assumenda facere aliquid eveniet perferendis? Eos commodi
                  sapiente numquam nam, dicta amet eius officiis aliquam dolorum
                  molestiae enim accusantium, excepturi necessitatibus fuga aut
                  sint beatae qui? Fugiat ipsa sint molestiae laudantium
                  exercitationem. Vero id officia sit culpa ipsam velit rerum
                  nihil non error, repellendus totam, architecto labore ex?
                  Fugiat, repellendus ratione, alias labore aperiam at provident
                  neque ipsa excepturi quibusdam, a fugit ullam. Harum facere
                  velit molestias non perspiciatis eos illum eius exercitationem
                  cumque architecto voluptatum beatae nisi, aliquam tempore
                  eveniet doloremque quam est inventore.
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <TechBrands />
    </main>
  );
}
