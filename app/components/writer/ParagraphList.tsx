export default function ParagraphList({
  subtitle,
  items
}: {
  subtitle: string;
  items: string[];
}) {
  return (
    <article>
      <h3 className="font-bold text-lg">{subtitle}</h3>
      <ul className="flex flex-col gap-2">
        {items!.map((item, index) => (
          <li key={`${subtitle}-${index}`}>・ {item}</li>
        ))}
      </ul>
    </article>
  );
}
