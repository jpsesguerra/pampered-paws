type HighlightProps = {
  children: React.ReactNode;
  className?: string;
};

export function Highlight({ children, className }: HighlightProps) {
  return (
    <span className={`relative inline-block whitespace-nowrap ${className ?? ""}`}>
      <img
        src="/icons/highlight.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-x-[-4%] bottom-[-0.15em] -z-10 h-[0.5em] w-[108%] object-fill"
      />
      <span className="relative">{children}</span>
    </span>
  );
}
