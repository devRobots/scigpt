import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react';
import { FaBolt, FaCrosshairs, FaPaintbrush, FaPerson } from 'react-icons/fa6';

export default function Strengths() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
      <article>
        <Card className="">
          <CardHeader className="flex justify-center">
            <FaBolt size={32} />
          </CardHeader>
          <CardBody className="flex justify-center text-center">
            <h3 className="text-lg font-bold">Eficiencia</h3>
          </CardBody>
          <CardFooter className="flex justify-center text-center">
            <p>Transforma horas de trabajo en minutos.</p>
          </CardFooter>
        </Card>
      </article>
      <article>
        <Card className="">
          <CardHeader className="flex justify-center">
            <FaCrosshairs size={32} />
          </CardHeader>
          <CardBody className="flex justify-center text-center">
            <h3 className="text-lg font-bold">Precisión</h3>
          </CardBody>
          <CardFooter className="flex justify-center text-center">
            <p>Reduce errores y omisiones en tus textos.</p>
          </CardFooter>
        </Card>
      </article>
      <article>
        <Card className="">
          <CardHeader className="flex justify-center">
            <FaPaintbrush size={32} />
          </CardHeader>
          <CardBody className="flex justify-center text-center">
            <h3 className="text-lg font-bold">Personalización</h3>
          </CardBody>
          <CardFooter className="flex justify-center text-center">
            <p>Ajusta el texto a tu estilo y necesidades.</p>
          </CardFooter>
        </Card>
      </article>
      <article>
        <Card className="">
          <CardHeader className="flex justify-center">
            <FaPerson size={32} />
          </CardHeader>
          <CardBody className="flex justify-center text-center">
            <h3 className="text-lg font-bold">Accesibilidad</h3>
          </CardBody>
          <CardFooter className="flex justify-center text-center">
            <p>Disponible para diversas disciplinas y niveles académicos.</p>
          </CardFooter>
        </Card>
      </article>
    </section>
  );
}
