import { Card, CardBody, CardHeader, Chip } from '@nextui-org/react';

export function TimelineHeader({ content }: { content: React.ReactNode }) {
  return (
    <div className="items-center hidden lg:flex">
      <div className="z-10 flex items-center justify-center w-2 h-2 bg-primary rounded-full ring-0 ring-primary sm:ring-8  shrink-0">
        {content}
      </div>
      <div className="hidden sm:flex w-full bg-secondary-200 h-0.5"></div>
    </div>
  );
}

export function TimelineItem({
  title,
  content,
  icon
}: {
  title: string;
  content: string;
  icon: React.ReactNode;
}) {
  return (
    <article>
      <TimelineHeader content={icon} />
      <div className="mt-3 sm:pe-8">
        <Card>
          <CardHeader className="flex flex-col items-start">
            <Chip color="primary" size="sm" className="flex lg:hidden">
              {icon}
            </Chip>
            <h3 className="text-lg font-bold">{title}</h3>
          </CardHeader>
          <CardBody>
            <p>{content}</p>
          </CardBody>
        </Card>
      </div>
    </article>
  );
}
