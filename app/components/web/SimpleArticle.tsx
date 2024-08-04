export default function SimpleArticle({
  title,
  content
}: {
  title: string;
  content: string;
}) {
  return (
    <article className="flex flex-col items-center justify-center gap-4 xl:w-1/2 text-center">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-xl">{content}</p>
    </article>
  );
}
