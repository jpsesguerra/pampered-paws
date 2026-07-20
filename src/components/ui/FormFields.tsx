import { cn } from "@/lib/cn";

export function FieldLabel({ children, htmlFor }: { children: React.ReactNode; htmlFor?: string }) {
  return (
    <label htmlFor={htmlFor} className="font-sans text-label-default text-text-primary">
      {children}
    </label>
  );
}

const inputClasses =
  "w-full rounded-full border border-[#efeff2] bg-surface-white px-xl py-lg font-sans text-body-default text-text-primary";

export function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={cn(inputClasses, props.className)} />;
}

export function SelectInput({
  options,
  placeholder,
  className,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & { options: string[]; placeholder?: string }) {
  return (
    <select {...props} className={cn(inputClasses, "appearance-none", className)}>
      <option value="" disabled>
        {placeholder ?? "Select an option"}
      </option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
}

export function FileInput({
  fileName,
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { fileName?: string }) {
  return (
    <label
      className={cn(
        "flex w-full cursor-pointer items-center justify-between gap-md rounded-full border border-[#efeff2] bg-surface-white px-xl py-lg font-sans text-body-default text-text-primary",
        className
      )}
    >
      <span className={cn("truncate", !fileName && "text-text-secondary")}>
        {fileName ?? "Choose a file"}
      </span>
      <span className="shrink-0 rounded-full bg-brand-background-neutral px-lg py-xs font-sans text-label-default text-text-primary">
        Browse
      </span>
      <input {...props} type="file" className="sr-only" />
    </label>
  );
}

export function TextareaInput(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={cn(
        "w-full rounded-2xl border border-[#efeff2] bg-surface-white px-xl py-lg font-sans text-body-default text-text-primary",
        props.className
      )}
    />
  );
}

export function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full flex-col items-start gap-xs">
      <FieldLabel htmlFor={htmlFor}>
        {label}
        {required && <span className="text-brand-primary-pink"> *</span>}
      </FieldLabel>
      {children}
    </div>
  );
}

function toggleButtonClasses(active: boolean) {
  return cn(
    "rounded-full border px-lg py-sm font-sans text-label-default transition-colors",
    active
      ? "border-brand-primary-pink bg-brand-primary-pink text-text-on-pink"
      : "border-[#efeff2] bg-surface-white text-text-primary"
  );
}

export function SegmentedToggle({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-sm">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          aria-pressed={value === option}
          onClick={() => onChange(option)}
          className={toggleButtonClasses(value === option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export function MultiToggleGroup({
  options,
  value,
  onChange,
  exclusiveOption,
}: {
  options: string[];
  value: string[];
  onChange: (value: string[]) => void;
  exclusiveOption: string;
}) {
  function toggle(option: string) {
    if (option === exclusiveOption) {
      onChange([exclusiveOption]);
      return;
    }
    const withoutExclusive = value.filter((v) => v !== exclusiveOption);
    if (withoutExclusive.includes(option)) {
      onChange(withoutExclusive.filter((v) => v !== option));
    } else {
      onChange([...withoutExclusive, option]);
    }
  }

  return (
    <div className="flex flex-wrap gap-sm">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          aria-pressed={value.includes(option)}
          onClick={() => toggle(option)}
          className={toggleButtonClasses(value.includes(option))}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export function ChipTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-brand-background-neutral px-lg py-xs font-sans text-label-default text-text-primary">
      {children}
    </span>
  );
}
