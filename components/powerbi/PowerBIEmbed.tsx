"use client";
type Props = { embedUrl?: string; reportId?: string; title?: string };

export default function PowerBIEmbed({ embedUrl, reportId, title }: Props) {
  return (
    <div className="rounded-lg border bg-white p-4">
      <div className="mb-2 text-sm text-neutral-600">{title ?? "Power BI Report"}</div>
      <div className="aspect-video grid place-items-center bg-neutral-100 text-neutral-500 text-sm">
        {embedUrl ? (
          <iframe src={embedUrl} className="w-full h-full" allowFullScreen />
        ) : (
          <span>Embed Power BI aqui (reportId: {reportId ?? "—"})</span>
        )}
      </div>
    </div>
  );
}
