import { Eyebrow } from "@/components/ui/Eyebrow";

type BreadcrumbProps = {
  children: React.ReactNode;
};

export function Breadcrumb({ children }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb">
      <Eyebrow>{children}</Eyebrow>
    </nav>
  );
}
