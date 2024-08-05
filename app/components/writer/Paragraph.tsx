export default function Paragraph({
  subtitle,
  paragraph
}: {
  subtitle: string;
  paragraph: string;
}) {
  return (
    <article>
      <h3 className="font-bold text-lg">{subtitle}</h3>
      <p>{paragraph}</p>
    </article>
  );
}
