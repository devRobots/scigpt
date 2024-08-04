'use client';

import { Card } from '@nextui-org/react';
import { saveAs } from 'file-saver';

export default function DownloadButton({
  children,
  draft,
  isPdf
}: {
  children: React.ReactNode;
  draft: string;
  isPdf?: boolean;
}) {
  const handleExport = async () => {
    const base_api = 'https://' + process.env.NEXT_PUBLIC_VERCEL_URL;
    const api_endpoint = `${base_api}/api/writer/export?draft=${draft}`;
    const res = await fetch(api_endpoint);
    const blob = await res.blob();
    saveAs(blob, 'redaccion.' + (isPdf ? 'pdf' : 'docx'));
  };

  return (
    <Card
      className="w-72 h-72 items-center justify-evenly hover:bg-content3"
      onPress={handleExport}
      isPressable
    >
      {children}
    </Card>
  );
}
