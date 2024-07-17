import { tldr } from '@/lib/papers';
import { Paper } from '@/types/paper';
import { Badge } from '@nextui-org/badge';
import { Card, CardBody, CardHeader } from '@nextui-org/card';

export default function ReferenceCard({ paper }: { paper: Paper }) {
  return (
    <Badge content={paper.year} size="sm" variant="solid" color="primary">
      <Card key={paper.url} className="w-96 mb-8">
        <CardHeader>
          <div className="flex flex-col">
            <p className="text-md font-bold">{paper.title}</p>
            <span className="text-sm text-default-500">
              {tldr(paper.authors, 3)}
            </span>
          </div>
        </CardHeader>
        <CardBody>{tldr(paper.abstract, 300)}</CardBody>
      </Card>
    </Badge>
  );
}
