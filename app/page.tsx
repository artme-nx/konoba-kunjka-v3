import { SiteHeader } from "@/components/site-header";
import { RevealInit } from "@/components/reveal-init";

const IMG = {
  hero: "https://images.unsplash.com/photo-1770493966289-037e60d2e19a",
  harborTown: "https://images.unsplash.com/photo-1759764400231-6d2e591b833c",
  terraceView: "https://images.unsplash.com/photo-1761634336326-756ff6e5c274",
  marina: "https://images.unsplash.com/photo-1781303955225-50aa4ca680c6",
  balconyWine: "https://images.unsplash.com/photo-1779094543875-269a3aad24da",
  interior: "https://images.unsplash.com/photo-1648945537549-fdf7c33d9c7f",
  fishOctopusPlate: "https://images.unsplash.com/photo-1768322264423-4b0adf0cf31b",
  octopusPlate: "https://images.unsplash.com/photo-1764397514715-37a966071228",
  shrimpRisotto: "https://images.unsplash.com/photo-1778104683416-5fc7eba1799f",
  shrimpRisotto2: "https://images.unsplash.com/photo-1778104682785-b4447364e25a",
  calamariCarpaccio: "https://images.unsplash.com/photo-1559070135-f259b369bf87",
  tunaSteak: "https://images.unsplash.com/photo-1636552550525-185c9efb8a62",
  grilledMeat: "https://images.unsplash.com/photo-1544009717-1c2561ae1439",
  lambSpit: "https://images.unsplash.com/photo-1778866677043-6f7871cdbec8",
  cheesePlate: "https://images.unsplash.com/photo-1777891257739-5d0f6531a508",
};

function img(url: string, w: number, q = 80) {
  return `${url}?auto=format&fit=crop&w=${w}&q=${q}`;
}

const MENU = [
  {
    cat: "Za početak",
    image: IMG.calamariCarpaccio,
    dishes: [
      { name: "Hobotnica u maslinovom ulju", desc: "Kuhana hobotnica, mladi krumpir, domaće maslinovo ulje i kapari." },
      { name: "Pršut i sir iz zaleđa", desc: "Domaći pršut, ovčji sir i masline, uz topli kruh." },
      { name: "Domaća pjata Kunjka", desc: "Mali izbor mora i kopna za dijeljenje — za dobar početak večeri." },
    ],
  },
  {
    cat: "Rižoti i tjestenine",
    image: IMG.shrimpRisotto,
    dishes: [
      { name: "Crni rižot", desc: "Rižot bojan sipinim crnilom, kuhan polako — gost s Tripadvisora kaže da je najbolji koji je ikad probao." },
      { name: "Rižot od škampa", desc: "Domaći rižot sa svježim škampima s virskog akvatorija." },
      { name: "Špageti sa škampima", desc: "Domaća tjestenina, škampi, bijelo vino i malo čilija." },
    ],
  },
  {
    cat: "S gradela i ražnja",
    image: IMG.fishOctopusPlate,
    dishes: [
      { name: "Riba dana s gradela", desc: "Ulov jutra, jednostavno pripremljen — maslinovo ulje, limun, blitva." },
      { name: "Biftek na žaru", desc: "Domaći biftek s umakom po izboru i sezonskim povrćem s gradela." },
      { name: "Janjetina s ražnja", desc: "Sporo pečena janjetina, sočna i mekana, uz krumpir ispod peke." },
    ],
  },
  {
    cat: "Za kraj",
    image: IMG.cheesePlate,
    dishes: [
      { name: "Sirna plata otoka", desc: "Domaći sirevi, med, orasi i suhe smokve." },
      { name: "Kolač dana", desc: "Domaći kolač po receptu kuće, drugačiji svaki tjedan." },
    ],
  },
];

const GALLERY = [
  { src: IMG.terraceView, alt: "Terasa iznad mora na otoku Viru", tall: true },
  { src: IMG.marina, alt: "Brodice u maloj luci" },
  { src: IMG.octopusPlate, alt: "Hobotnica na drvenom stolu" },
  { src: IMG.harborTown, alt: "Mjesto uz more u sumrak", wide: true },
  { src: IMG.tunaSteak, alt: "Tuna na tanjuru sa salatom" },
  { src: IMG.balconyWine, alt: "Stol na balkonu s pogledom na more" },
  { src: IMG.lambSpit, alt: "Janjetina na ražnju iznad žara", wide: true },
];

export default function Home() {
  return (
    <>
      <RevealInit />
      <SiteHeader />

      {/* HERO */}
      <section className="relative h-screen min-h-[640px] overflow-hidden flex items-end">
        <div className="absolute inset-0">
          <img
            id="heroImg"
            src={img(IMG.hero, 1900)}
            alt="Terasa konobe Kunjka nad morem u sumrak, uz svjetla i stol postavljen za večeru"
            className="h-full w-full object-cover scale-[1.14] will-change-transform"
          />
          <div className="absolute inset-0" style={{ background: "var(--hero-vignette)" }} />
          <div className="absolute inset-0" style={{ background: "var(--hero-glow)" }} />
          <div
            className="absolute inset-x-0 top-0 h-40"
            style={{ background: "linear-gradient(to bottom, rgba(10,34,38,0.6) 0%, transparent 100%)" }}
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20">
          <span className="text-label reveal block mb-5" style={{ color: "var(--rust)" }}>
            Konoba · Otok Vir
          </span>
          <h1
            className="font-display reveal max-w-[16ch]"
            style={{ fontSize: "var(--hero-title-size)", lineHeight: "var(--hero-title-leading)", color: "var(--background)" }}
          >
            Terasa nad morem, uz stari <em className="italic" style={{ color: "var(--rust)" }}>mul</em>.
          </h1>
          <p className="reveal mt-6 max-w-[46ch] text-[1.05rem]" style={{ color: "rgba(250,243,230,0.82)" }}>
            Obiteljska konoba na otoku Viru — svježa riba ravno s brodice, stol na terasi iznad mora i večeri koje traju do kasno u noć.
          </p>
          <div className="reveal mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#kontakt"
              className="rounded-full px-8 py-4 text-[0.8rem] uppercase tracking-[0.12em] font-medium transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--rust)", color: "var(--background)" }}
            >
              Rezerviraj stol
            </a>
            <a
              href="#jelovnik"
              className="border-b pb-1 text-[0.9rem] transition-colors hover:text-[var(--rust)]"
              style={{ borderColor: "rgba(250,243,230,0.4)", color: "var(--background)" }}
            >
              Pogledaj jelovnik →
            </a>
          </div>
        </div>
      </section>

      {/* STATS / SOCIAL PROOF */}
      <div className="border-b" style={{ background: "var(--card)", borderColor: "var(--surface-line)" }}>
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-14 px-6 py-8 text-center">
          <div>
            <div className="font-display text-4xl" data-count="4.4" data-dec="1" style={{ color: "var(--foreground)" }}>
              4.4
            </div>
            <div className="text-label mt-1" style={{ color: "var(--muted-foreground)" }}>★ Tripadvisor ocjena</div>
          </div>
          <div>
            <div className="font-display text-4xl" data-count="38" data-suffix="+" style={{ color: "var(--foreground)" }}>
              38+
            </div>
            <div className="text-label mt-1" style={{ color: "var(--muted-foreground)" }}>Recenzija</div>
          </div>
        </div>
      </div>

      {/* MANIFESTO */}
      <section id="mul" className="py-28 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <span className="text-label reveal block mb-6" style={{ color: "var(--rust)" }}>Uz stari mul</span>
          <p className="font-display reveal text-[clamp(1.6rem,3.2vw,2.5rem)] leading-snug" style={{ color: "var(--foreground)" }}>
            Tamo gdje se ribarske brodice svako jutro vraćaju s ulova, kuhamo pošteno i bez žurbe —{" "}
            <em className="italic" style={{ color: "var(--rust)" }}>onako kako se na Viru kuhalo oduvijek.</em>
          </p>
        </div>
      </section>

      {/* MENU */}
      <section id="jelovnik" className="py-24" style={{ background: "var(--card)" }}>
        <div className="mx-auto max-w-6xl px-6">
          <div className="reveal mb-16 text-center">
            <span className="text-label block mb-4" style={{ color: "var(--rust)" }}>Jelovnik</span>
            <h2 className="font-display text-[clamp(2.1rem,4.2vw,3.2rem)]" style={{ color: "var(--foreground)" }}>
              Riba, rižot i <em className="italic" style={{ color: "var(--rust)" }}>žar</em>
            </h2>
          </div>

          <div className="flex flex-col gap-8">
            {MENU.map((group, i) => (
              <div
                key={group.cat}
                className={`reveal grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-2xl ${
                  i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                }`}
                style={{ background: "var(--background)" }}
              >
                <div className="min-h-[280px] md:min-h-[360px] overflow-hidden">
                  <img src={img(group.image, 900)} alt={group.cat} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="flex flex-col justify-center p-9 md:p-12">
                  <div className="text-label mb-4" style={{ color: "var(--rust)" }}>{group.cat}</div>
                  <div className="flex flex-col">
                    {group.dishes.map((d) => (
                      <div key={d.name} className="border-b py-4 last:border-none" style={{ borderColor: "var(--surface-line)" }}>
                        <div className="font-display text-xl" style={{ color: "var(--foreground)" }}>{d.name}</div>
                        <div className="mt-1 text-[0.92rem]" style={{ color: "var(--muted-foreground)" }}>{d.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="prica" className="py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">
          <div className="reveal h-[420px] md:h-[540px] overflow-hidden rounded-2xl">
            <img src={img(IMG.balconyWine, 1000)} alt="Stol na terasi konobe Kunjka s pogledom na more" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div>
            <span className="text-label reveal block mb-5" style={{ color: "var(--rust)" }}>Naša priča</span>
            <h2 className="font-display reveal text-[clamp(1.9rem,3.6vw,2.8rem)] mb-6" style={{ color: "var(--foreground)" }}>
              Ime po <em className="italic" style={{ color: "var(--rust)" }}>školjci</em> s naše obale
            </h2>
            <p className="reveal mb-4 max-w-[46ch]" style={{ color: "var(--muted-foreground)" }}>
              Kunjka stoji uz stari mul u srcu Vira, na Putu Mula — tamo gdje ribarske brodice svaki dan pristaju s ulovom. Ime smo posudili od robusne, rebraste školjke koja se stoljećima bere u kanalima oko otoka: skromna izgledom, ali puna okusa mora.
            </p>
            <p className="reveal mb-4 max-w-[46ch]" style={{ color: "var(--muted-foreground)" }}>
              Marko i obitelj vode konobu s istom pažnjom kojom bi ugostili prijatelje — svaki stol osobno dočekaju, a najbolji je onaj na terasi, iznad mora, kad brodice upale svjetla za povratak. U sezoni ga vrijedi rezervirati na vrijeme.
            </p>
            <p className="reveal font-display italic text-lg" style={{ color: "var(--rust)" }}>
              — Marko i obitelj Kunjka, otok Vir
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="galerija" className="py-24" style={{ background: "var(--card)" }}>
        <div className="mx-auto max-w-6xl px-6">
          <div className="reveal mb-14 text-center">
            <span className="text-label block mb-4" style={{ color: "var(--rust)" }}>Galerija</span>
            <h2 className="font-display text-[clamp(2.1rem,4.2vw,3.2rem)]" style={{ color: "var(--foreground)" }}>
              Trenuci uz <em className="italic" style={{ color: "var(--rust)" }}>more</em>
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {GALLERY.map((g) => (
              <figure
                key={g.src}
                className={`reveal overflow-hidden rounded-xl ${g.tall ? "row-span-2 h-[220px] md:h-full" : "h-[220px]"} ${
                  g.wide ? "col-span-2" : ""
                }`}
              >
                <img src={img(g.src, 700)} alt={g.alt} className="h-full w-full object-cover" loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section id="kontakt" className="py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-0 overflow-hidden rounded-2xl md:grid-cols-2" style={{ background: "var(--card)" }}>
          <div className="p-9 md:p-14">
            <span className="text-label reveal block mb-5" style={{ color: "var(--rust)" }}>Posjetite nas</span>
            <h2 className="font-display reveal text-[clamp(1.9rem,3.6vw,2.8rem)] mb-8" style={{ color: "var(--foreground)" }}>
              Tu smo, uz <em className="italic" style={{ color: "var(--rust)" }}>mul</em>
            </h2>

            <div className="reveal mb-6">
              <div className="text-label mb-2" style={{ color: "var(--rust)" }}>Adresa</div>
              <p style={{ color: "var(--muted-foreground)" }}>Put Mula 14, 23234 Vir, Hrvatska</p>
            </div>

            <div className="reveal mb-6">
              <div className="text-label mb-2" style={{ color: "var(--rust)" }}>Rezervacije</div>
              <p style={{ color: "var(--muted-foreground)" }}>Stol rezervirajte pozivom — u sezoni preporučamo terasu unaprijed.</p>
              <a href="tel:+38598266893" className="font-display text-2xl mt-1 inline-block" style={{ color: "var(--rust)" }}>
                +385 98 266 893
              </a>
            </div>

            <div className="reveal mb-8">
              <div className="text-label mb-2" style={{ color: "var(--rust)" }}>Radno vrijeme</div>
              <div className="flex justify-between max-w-[280px] border-b border-dotted py-1.5" style={{ borderColor: "var(--surface-line)", color: "var(--foreground)" }}>
                <span>Svaki dan</span><span>17:00 – 23:00</span>
              </div>
            </div>

            <a
              href="tel:+38598266893"
              className="reveal inline-block rounded-full px-8 py-4 text-[0.8rem] uppercase tracking-[0.12em] font-medium"
              style={{ background: "var(--rust)", color: "var(--background)" }}
            >
              Rezerviraj stol
            </a>
          </div>
          <div className="reveal min-h-[360px]">
            <iframe
              src="https://maps.google.com/maps?q=Put+Mula+14+Vir+Hrvatska&output=embed"
              loading="lazy"
              title="Konoba Kunjka — Put Mula 14, Vir"
              className="h-full w-full min-h-[360px] border-0"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pt-20 pb-9" style={{ background: "var(--ink)" }}>
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-12 pb-14 md:grid-cols-3">
            <div>
              <div className="font-display text-2xl mb-4" style={{ color: "var(--background)" }}>
                Kunj<span style={{ color: "var(--rust)" }}>k</span>a
              </div>
              <p className="max-w-[34ch] text-sm" style={{ color: "rgba(250,243,230,0.65)" }}>
                Obiteljska konoba uz stari mul na otoku Viru. Svježa riba, crni rižot i plodovi mora, uz terasu s pogledom na more.
              </p>
            </div>
            <div>
              <h4 className="text-label mb-5" style={{ color: "var(--rust)" }}>Izbornik</h4>
              <div className="flex flex-col gap-2.5 text-sm" style={{ color: "rgba(250,243,230,0.65)" }}>
                <a href="#jelovnik" className="hover:text-[var(--rust)]">Jelovnik</a>
                <a href="#prica" className="hover:text-[var(--rust)]">Naša priča</a>
                <a href="#galerija" className="hover:text-[var(--rust)]">Galerija</a>
                <a href="#kontakt" className="hover:text-[var(--rust)]">Kontakt</a>
              </div>
            </div>
            <div>
              <h4 className="text-label mb-5" style={{ color: "var(--rust)" }}>Kontakt</h4>
              <div className="flex flex-col gap-2.5 text-sm" style={{ color: "rgba(250,243,230,0.65)" }}>
                <a href="tel:+38598266893" className="font-display text-lg" style={{ color: "var(--background)" }}>+385 98 266 893</a>
                <p>Put Mula 14, Vir, Hrvatska</p>
              </div>
            </div>
          </div>
          <div
            className="flex flex-wrap justify-between gap-3 border-t pt-6 text-xs"
            style={{ borderColor: "rgba(250,243,230,0.15)", color: "rgba(250,243,230,0.55)" }}
          >
            <span>© 2026 Konoba Kunjka · Otok Vir</span>
            <span>4.4 ★ Tripadvisor · 38+ recenzija</span>
          </div>
        </div>
      </footer>
    </>
  );
}
