'use client';

import { exportDraft } from '@/app/lib/writer/draft';
import { Card } from '@nextui-org/react';

export default function DownloadButton({
  children,
  draft,
  isPdf
}: {
  children: React.ReactNode;
  draft: string;
  isPdf?: boolean;
}) {
  return (
    <Card
      className="w-72 h-72 items-center justify-evenly hover:bg-content3"
      onPress={() => exportDraft(draft, isPdf)}
      isPressable
    >
      {children}
    </Card>
  );
}
