export function VideoSection() {
  return (
    <section className="flex items-center justify-center px-lg py-7xl">
      <div className="flex w-full max-w-[960px] flex-col items-center gap-lg">
        <h2 className="font-serif text-h2 text-text-primary">Watch Lesley&rsquo;s Interview</h2>
        {/* TODO: replace with the real video embed URL once provided */}
        <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl bg-brand-neutral-dark">
          <span className="flex size-20 items-center justify-center rounded-full bg-brand-primary-pink">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 4.5L23 14L7 23.5V4.5Z" fill="white" />
            </svg>
          </span>
        </div>
      </div>
    </section>
  );
}
