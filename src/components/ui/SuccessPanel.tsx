export function SuccessPanel({
  title,
  message,
  mailtoHref,
  secondaryPrompt = "If you need to send pet photos or vaccination records, use the button below to open your email client.",
}: {
  title: string;
  message: string;
  mailtoHref: string;
  secondaryPrompt?: string;
}) {
  return (
    <div className="flex w-full max-w-[776px] flex-col items-center gap-lg rounded-2xl bg-surface-white p-2xl text-center">
      <h3 className="font-serif text-h4 text-text-primary">{title}</h3>
      <p className="font-sans text-body-default text-text-primary">{message}</p>
      <p className="font-sans text-body-sm text-text-secondary">{secondaryPrompt}</p>
      <a
        href={mailtoHref}
        className="flex min-h-[40px] items-center justify-center rounded-full bg-brand-accent-dark px-xl py-md font-sans text-btn-primary text-text-on-pink"
      >
        Open email client
      </a>
    </div>
  );
}
