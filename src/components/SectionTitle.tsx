interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export function SectionTitle({ title = "", subtitle = "" }: SectionTitleProps) {
  return (
    <>
      <h1 className="font-weight-bold">{title}</h1>
      {subtitle && <small className="text-muted">{subtitle}</small>}
    </>
  );
}
