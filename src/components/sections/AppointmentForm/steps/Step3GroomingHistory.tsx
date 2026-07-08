import { LastGroomedField } from "../LastGroomedField";

export function Step3GroomingHistory({
  petName,
  lastGroomed,
  onLastGroomedChange,
}: {
  petName: string;
  lastGroomed: string;
  onLastGroomedChange: (value: string) => void;
}) {
  return (
    <div className="flex w-full flex-col items-start gap-lg">
      <LastGroomedField petName={petName} value={lastGroomed} onChange={onLastGroomedChange} />
    </div>
  );
}
