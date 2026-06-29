import { ADD_ON_NOTE } from "@/lib/data/addOns";
import { getServiceGroups } from "@/sanity/lib/services";

export async function AddOnsSection() {
  const groups = await getServiceGroups();
  return (
    <section id="add-ons" className="flex scroll-mt-2xl items-center justify-center px-lg py-7xl">
      <div className="flex w-full max-w-[1240px] flex-col items-center gap-2xl">
        <div className="flex max-w-[716px] flex-col items-center gap-md text-center">
          <h2 className="font-serif text-h3 text-text-primary">
            Add-ons &amp; specialty services
          </h2>
          <p className="font-sans text-body-lg text-text-primary">
            Every pet is different. These services can be added to a Bath or
            Regular Groom, or booked on their own.
          </p>
        </div>
        <div className="flex w-full flex-col items-start gap-2xl lg:flex-row lg:items-stretch">
          {groups.map((group) => (
            <div
              key={group.title}
              className="flex w-full flex-1 flex-col items-start gap-lg rounded-2xl bg-surface-white p-lg"
            >
              <h3 className="font-serif text-h4 text-text-primary">{group.title}</h3>
              <div className="flex w-full flex-col items-start gap-md">
                {group.items.map((item) => (
                  <div key={item.name} className="flex w-full flex-col items-start gap-xxs">
                    <span className="font-sans text-label-lg text-text-primary">{item.name}</span>
                    <span className="font-sans text-body-default text-text-primary">{item.price}</span>
                    <span className="font-sans text-body-sm text-text-secondary">
                      {item.description}
                    </span>
                  </div>
                ))}
              </div>
              {group.title === "Baths & treatments" && (
                <div className="flex w-full flex-col items-start gap-sm rounded-2xl bg-surface-white">
                  <h4 className="font-serif text-h5 text-text-primary">{ADD_ON_NOTE.title}</h4>
                  <p className="font-sans text-body-sm text-text-secondary">
                    {ADD_ON_NOTE.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
