import { PortableText, type PortableTextComponents, type PortableTextBlock } from "@portabletext/react";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="font-sans text-body-default text-text-primary">{children}</p>,
    h2: ({ children }) => <h2 className="font-serif text-h4 text-text-primary">{children}</h2>,
    h3: ({ children }) => <h3 className="font-serif text-h5 text-text-primary">{children}</h3>,
    h4: ({ children }) => <h4 className="font-serif text-h6 text-text-primary">{children}</h4>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-brand-primary-pink pl-md font-sans italic text-text-secondary">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc space-y-xs pl-lg font-sans text-body-default text-text-primary">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal space-y-xs pl-lg font-sans text-body-default text-text-primary">{children}</ol>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    underline: ({ children }) => <span className="underline">{children}</span>,
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target={value?.blank ? "_blank" : undefined}
        rel={value?.blank ? "noopener noreferrer" : undefined}
        className="text-brand-primary-pink underline"
      >
        {children}
      </a>
    ),
  },
};

export function RichText({ value, className }: { value: PortableTextBlock[]; className?: string }) {
  return (
    <div className={className ? `flex flex-col items-start gap-md ${className}` : "flex flex-col items-start gap-md"}>
      <PortableText value={value} components={components} />
    </div>
  );
}
