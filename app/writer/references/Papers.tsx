import { tldr } from '@/app/lib/papers';
import { Paper } from '@/app/types/paper';
import { Accordion, AccordionItem } from '@nextui-org/accordion';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { Chip } from '@nextui-org/react';

export function PaperCard({ paper }: { paper: Paper }) {
  return (
    <Card key={paper.url} className="w-full">
      <CardHeader>
        <div className="flex flex-col gap-1">
          <p className="text-md font-bold">{paper.title}</p>
          <span className="text-sm text-default-500">
            {tldr(paper.authors, 3)}
          </span>
          <Chip size="sm">{paper.year}</Chip>
        </div>
      </CardHeader>
      <CardBody>
        <Accordion isCompact variant="splitted">
          <AccordionItem title="Abstract">{paper.abstract}</AccordionItem>
        </Accordion>
      </CardBody>
      <CardHeader>
        <div className="flex gap-2">
          <span className="text-sm text-default-500">Citations: </span>
          <Chip size="sm" color="primary">
            {paper.citationCount}
          </Chip>
          <span className="text-sm text-default-500">Fields of study: </span>
          {paper.fieldsOfStudy.map((field) => (
            <Chip size="sm" key={field} color="default">
              {field}
            </Chip>
          ))}
        </div>
      </CardHeader>
    </Card>
  );
}

export default function PaperList({ papers }: { papers: Paper[] }) {
  const hasPapers = papers.length > 0;

  return (
    <>
      {hasPapers ? (
        papers.map((paper) => <PaperCard key={paper.url} paper={paper} />)
      ) : (
        <p>No papers found</p>
      )}
    </>
  );
}