interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export function SectionTitle({ title = "", subtitle = "" }: SectionTitleProps) {
  return (
    <>
      <h1 className="font-weight-bold">{title}</h1>
      {subtitle && <h5 className="text-muted">{subtitle}</h5>}
    </>
  );
}
