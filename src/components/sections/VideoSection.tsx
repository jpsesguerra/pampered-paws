export function VideoSection() {
  return (
    <section className="flex items-center justify-center px-lg py-7xl">
      <div className="flex w-full max-w-[960px] flex-col items-center gap-lg">
        <h2 className="font-serif text-h2 text-text-primary">Watch Lesley&rsquo;s Interview</h2>
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl border-[12px] border-brand-primary-pink shadow-[0px_20px_40px_0px_rgba(0,0,0,0.12)]">
          <iframe
            src="https://www.youtube.com/embed/PrOf79mY4Gc?start=8"
            title="Watch Lesley's Interview"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 size-full"
          />
        </div>
      </div>
    </section>
  );
}
