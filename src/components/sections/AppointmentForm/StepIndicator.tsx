export function StepIndicator({ step, total }: { step: number; total: number }) {
  return (
    <span className="font-sans text-label-default text-text-secondary">
      Step {step} of {total}
    </span>
  );
}
