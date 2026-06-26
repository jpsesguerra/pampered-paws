import { Eyebrow } from "@/components/ui/Eyebrow";

export function OriginStory() {
  return (
    <section className="flex items-center justify-center px-lg py-7xl">
      <div className="flex w-full max-w-[1240px] flex-col items-start gap-2xl lg:flex-row">
        <div className="flex w-full flex-1 flex-col items-start gap-lg lg:max-w-[552px]">
          <Eyebrow>Origin Story</Eyebrow>
          <h2 className="font-serif text-h2 text-text-primary">
            It started with a university student and a city full of overgrown
            dogs
          </h2>
        </div>
        <div className="flex w-full flex-1 flex-col items-start gap-lg font-sans text-body-default text-text-primary">
          <p>
            In the late 1970s, Lesley Weeks was working toward a graduate
            degree at the University of Toronto. Walking through the city,
            she kept noticing the same thing: dogs coming back from the vet
            shaved down to the skin, because back then, veterinarians did
            most of the grooming and grooming meant shearing.
          </p>
          <p>
            She knew there was a better way. &ldquo;I can make your dog look
            a lot prettier than what you&rsquo;re getting,&rdquo; she&rsquo;d
            tell owners — and she was right. Toronto had never had a
            dedicated professional pet groomer before. Lesley became its
            first.
          </p>
          <p>
            After finishing her master&rsquo;s degree, she spent a short
            stretch in the insurance industry. It paid well and the hours
            were good — but there was no room in it for the artistry she
            needed. So she left a stable career for an uncertain one, and in
            1979, Pampered Paws officially opened its doors.
          </p>
        </div>
      </div>
    </section>
  );
}
