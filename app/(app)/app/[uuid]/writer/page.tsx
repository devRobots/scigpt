import { Card, CardBody } from '@nextui-org/card';
import { Spinner } from '@nextui-org/spinner';

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-2">
      <h2 className={'editorial-header'}>Redactando...</h2>
      <h4 className="text-default-800">Esto puede tardar unos minutos...</h4>
      <Card className="w-full p-4">
        <div className="flex flex-col">
          <div className="flex gap-4 text-finish">Palabras clave</div>
          <div className="flex gap-4">
            Justificacion
            <Spinner size="sm" />
          </div>
          <div className="flex gap-4 text-waiting">Metodologia</div>
          <div className="flex gap-4 text-waiting">Resultados esperados</div>
          <div className="flex gap-4 text-waiting">
            Referencias y Bibliografia
          </div>
        </div>
      </Card>
    </div>
  );
}
