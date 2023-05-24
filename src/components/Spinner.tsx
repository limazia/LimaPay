interface SpinnerProps {
  type?: string;
  colorClass?: string;
  title?: string;
  width?: string;
  height?: string;
}

export function Spinner({
  type = "border",
  colorClass = "light",
  title = "Loading...",
  width = "0.9rem",
  height = "0.9rem",
}: SpinnerProps) {
  return (
    <div
      className={`spinner-${type} text-${colorClass}`}
      role="status"
      style={{
        width: width,
        height: height,
      }}
    >
      <span className="sr-only">{title}</span>
    </div>
  );
}
