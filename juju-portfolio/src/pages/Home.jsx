import { useEffect, useState } from "react";
import tracoCultural from "@/assets/traco-cultural.png";
import jujuFace1 from "@/assets/JujuFace1.png";
import jujuFace2 from "@/assets/JujuFace2.png";

/* ============================================================
   EDITE SEUS PROJETOS AQUI
   - Para adicionar imagem: importe o arquivo e coloque em `image`
     ex: import p1 from "@/assets/projeto1.jpg"  ->  image: p1
   - Edite título, categoria, tags, descrição e link livremente.
   ============================================================ */
const PROJECTS = [
   // <!-- ADICIONAR IMAGEM DO PROJETO 01 AQUI --> / <!-- EDITAR DESCRIÇÃO AQUI -->
  {
    n: "01",
    cat: "Web",
    title: "Traço Cultural",
    tags: "Plataforma Web · Eventos Culturais",
    desc: "Plataforma de eventos brasileiros. React com Vite, Java, Springboot, my",
    link: "https://traco-cultural.vercel.app/",
     image: tracoCultural,
  },
  // <!-- ADICIONAR IMAGEM DO PROJETO 02 AQUI -->
  {
    n: "02",
    cat: "Em breve",
    title: "Logo logo! <3",
    tags: ". . .",
    desc: "Carregando. . .",
    link: "#",
  },
  // <!-- ADICIONAR IMAGEM DO PROJETO 03 AQUI -->
  {
    n: "03",
    cat: "Em breve",
    title: "Já já tem projeto aqui",
    tags: ". . .",
    desc: "Carregando. . .",
    link: "#",
  },
  // <!-- ADICIONAR IMAGEM DO PROJETO 04 AQUI -->
  {
    n: "04",
    cat: "Em breve",
    title: "Espera que logo mais tem",
    tags: ". . .",
    desc: "Carregando. . .",
    link: "#",
  },
  // <!-- ADICIONAR IMAGEM DO PROJETO 05 AQUI -->
  {
    n: "05",
    cat: "Em breve",
    title: "Esperandooo",
    tags: ". . .",
    desc: "Carregando. . .",
    link: "#",
  },
];
const SKILLS = [
  {
    n: "01",
    t: "Front-end",
    items: ["HTML", "CSS", "JavaScript", "React", "Vite"],
    cls: "bg-secondary md:col-span-2 md:row-span-2",
    big: true,
  },
  { n: "02", t: "Mobile", items: ["React Native", "Expo"], cls: "bg-blush" },
  {
    n: "03",
    t: "Back-end",
    items: ["Java", "Spring Boot", "APIs REST"],
    cls: "bg-primary text-primary-foreground",
  },
  { n: "04", t: "Database", items: ["MySQL", "Bancos relacionais"], cls: "bg-cream-deep border" },
  {
    n: "05",
    t: "Design",
    items: ["Figma", "Canva", "Prototipagem", "UI/UX"],
    cls: "bg-blush md:col-span-2",
  },
  { n: "06", t: "Versionamento", items: ["Git", "GitHub"], cls: "bg-secondary" },
];
const NAV = [
  ["Home", "#home"],
  ["Sobre", "#sobre"],
  ["Experiência", "#experiencia"],
  ["Projetos", "#projetos"],
  ["Contato", "#contato"],
];
function Star({ className = "" }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true" fill="currentColor">
      <path d="M20 0c1.5 11 7 17 20 20-13 3-18.5 9-20 20-1.5-11-7-17-20-20C13 17 18.5 11 20 0Z" />
    </svg>
  );
}
function Squiggle({ className = "" }) {
  return (
    <svg
      viewBox="0 0 120 30"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    >
      <path d="M3 15c10-14 20 14 30 0s20 14 30 0 20 14 30 0 15 10 24 0" />
    </svg>
  );
}
function Placeholder({ label, className = "" }) {
  return (
    <div className={`placeholder-img ${className}`} role="img" aria-label={label}>
      {label}
    </div>
  );
}
function Reveal({ children, className = "", delay = 0 }) {
  return (
    <div className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (es) =>
        es.forEach(
          (e) => e.isIntersecting && (e.target.classList.add("is-in"), io.unobserve(e.target)),
        ),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
function ProjectCard({ p, className = "", imgClass = "aspect-[4/3]" }) {
  return (
    <a href={p.link} className={`group block ${className}`}>
      <div className={`relative overflow-hidden rounded-2xl ${imgClass}`}>
        {p.image ? (
          <img
            src={p.image}
            alt={`Projeto ${p.title}`}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <Placeholder
            label={`IMAGEM DO PROJETO ${p.n}`}
            className="h-full w-full transition-transform duration-700 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 flex items-end justify-between bg-blush/70 p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <span className="font-display text-4xl">{p.title}</span>
          <span className="flex h-12 w-12 translate-y-3 items-center justify-center rounded-full bg-primary text-xl text-primary-foreground transition-transform duration-500 group-hover:translate-y-0">
            ↗
          </span>
          <Star className="absolute right-6 top-6 h-6 w-6 scale-0 transition-transform duration-500 group-hover:scale-100" />
        </div>
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold tracking-[.2em] text-muted-foreground">
            {p.n} / {p.cat.toUpperCase()}
          </p>
          <h3 className="mt-1 font-display text-3xl">{p.title}</h3>
          <p className="text-sm text-muted-foreground">{p.tags}</p>
          <p className="mt-2 max-w-md text-sm">{p.desc}</p>
        </div>
        <span className="shrink-0 text-xs font-bold tracking-[.15em] underline decoration-blush-deep decoration-2 underline-offset-4">
          VER PROJETO ↗
        </span>
      </div>
    </a>
  );
}
export default function Home() {
  useReveal();
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-x-hidden">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-[1360px] items-center justify-between px-5 py-4 md:px-10">
          <a href="#home" className="leading-none">
            <span className="font-display text-3xl">BRZAP</span>
            <span className="block text-[10px] font-medium tracking-[.2em] text-muted-foreground">
              INIT DEV + VISUAL ENTHUSIAST
            </span>
          </a>
          <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
            {NAV.map(([l, h]) => (
              <a
                key={h}
                href={h}
                className="text-xs font-bold tracking-[.18em] transition-colors hover:text-blush-deep"
              >
                {l.toUpperCase()}
              </a>
            ))}
          </nav>
          <a href="#contato" className="btn-main hidden lg:inline-flex">
            VAMOS CONVERSAR <span className="arrow">→</span>
          </a>
          <button
            className="lg:hidden flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full bg-primary"
            aria-label="Abrir menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span className="h-0.5 w-5 bg-primary-foreground" />
            <span className="h-0.5 w-5 bg-primary-foreground" />
          </button>
        </div>
        {open && (
          <nav aria-label="Mobile" className="flex flex-col gap-4 border-t px-5 py-6 lg:hidden">
            {NAV.map(([l, h]) => (
              <a key={h} href={h} onClick={() => setOpen(false)} className="font-display text-4xl">
                {l}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main>
        {/* HERO */}
        <section
          id="home"
          className="relative mx-auto max-w-[1360px] px-5 pb-20 pt-10 md:px-10 md:pt-16"
        >
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="relative z-10 lg:col-span-7">
              <Reveal>
                <p className="font-hand text-3xl text-blush-deep md:text-4xl">oi, eu sou a Ju ♡</p>
              </Reveal>
              <h1 className="font-display mt-2 text-[22vw] lg:text-[11.5rem]">
                <Reveal delay={100}>Code</Reveal>
                <Reveal delay={200}>
                  <span className="inline-flex items-center gap-4">
                    With <Star className="h-12 w-12 text-blush-deep md:h-20 md:w-20" />
                  </span>
                </Reveal>
                <Reveal delay={300}>
                  <span className="text-blush-deep">Carinho</span>{" "}
                  <span className="text-blush">&lt;3</span>
                </Reveal>
              </h1>
              <Reveal delay={400}>
                <p className="mt-8 max-w-md text-base md:text-lg">
                  Estudante de desenvolvimento de sistemas, apaixonada por interfaces, tecnologia e
                  pelo lado visual das coisas.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-6">
                  <a href="#projetos" className="btn-main">
                    VER PROJETOS <span className="arrow">→</span>
                  </a>
                  <a href="#sobre" className="btn-ghost">
                    SOBRE MIM <span className="arrow">↗</span>
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={250} className="relative lg:col-span-5">
              <div
                className="absolute -right-24 top-6 aspect-square w-[115%] rounded-full bg-blush"
                aria-hidden="true"
              />
              <div
                className="absolute -left-8 bottom-10 h-24 w-24 rounded-full border-2 border-primary"
                aria-hidden="true"
              />
              {/* <!-- ADICIONAR FOTO PRINCIPAL DA JUJU AQUI --> troque o Placeholder por <img src={fotoJu} alt="Foto da Juju" className="..."/> */}
              <img
              src={jujuFace1}
              alt="Foto da Juju"
              className="relative aspect-[3/4] w-full rounded-t-full rounded-b-3xl object-cover shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-4 flex h-32 w-32 rotate-[-10deg] items-center justify-center rounded-full bg-primary p-4 text-center text-[11px] font-bold tracking-[.15em] text-primary-foreground">
                DESIGN
                <br />+ CODE
                <br />+ CARINHO
              </div>
              <Star className="absolute -top-4 right-8 h-10 w-10 text-primary" />
              <Squiggle className="absolute -right-2 bottom-24 w-24 text-primary" />
            </Reveal>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="relative bg-secondary py-24">
          <div className="mx-auto grid max-w-[1360px] gap-12 px-5 md:px-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-6">
              <h2 className="font-display text-7xl md:text-9xl">
                Oi,
                <br />
                eu sou
                <br />a <span className="text-blush-deep">Ju.</span>
              </h2>
              <div className="mt-10 max-w-lg space-y-4 text-base md:text-lg">
                <p>
                  Sou iniciante na área de desenvolvimento de sistemas, mas meu olhar vai muito além
                  do código. Gosto de pensar em como a sua ideia pode se transformar em uma
                  experiência visualmente bonita! 
                </p>
                <p>
                  Já passei por experiências, projetos e aprendizados que foram me ajudando a
                  descobrir melhor aquilo que gosto e o que quero levar comigo daqui pra frente.
                </p>
                <p>
                  Ainda estou construindo minha história, atualizando meus conhecimentos e botando em prática..
                </p>
              </div>
              <p className="font-hand mt-6 text-3xl">made with carinho ♡</p>
            </Reveal>
            <Reveal delay={150} className="relative lg:col-span-5 lg:col-start-8">
              <div
                className="absolute -left-6 -top-6 h-full w-full rounded-3xl bg-blush"
                aria-hidden="true"
              />
              {/* <!-- ADICIONAR FOTO DA JUJU AQUI --> */}
              <img
              src={jujuFace2}
              alt="Foto da Juju"
              className="relative aspect-[4/5] w-full rounded-3xl object-cover"
              />
              <Star className="absolute -bottom-5 -right-5 h-14 w-14 text-primary" />
            </Reveal>
          </div>
        </section>

        {/* EXPERIÊNCIA */}
        <section id="experiencia" className="mx-auto max-w-[1490px] px-5 py-24 md:px-10">
          <div className="grid gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <h2 className="font-display text-7xl md:text-8xl">
                Qual
                <br />
                minha
                <br />
                <span className="text-blush-deep">experiência</span>
                ?
                <br />
              </h2>
              <p className="mt-6 max-w-xs text-sm text-muted-foreground">
                As ferramentas que venho estudando e usando em alguns dos meus projetos.
              </p>
            </Reveal>
            <div className="grid auto-rows-[minmax(170px,auto)] gap-4 md:grid-cols-3 lg:col-span-8">
              {SKILLS.map((s, i) => (
                <Reveal
                  key={s.n}
                  delay={i * 80}
                  className={`flex flex-col justify-between rounded-3xl p-6 ${s.cls}`}
                >
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-bold tracking-[.2em]">{s.n} —</span>
                    {s.big && <Star className="h-8 w-8" />}
                  </div>
                  <div>
                    <h3 className={`font-display ${s.big ? "text-6xl md:text-7xl" : "text-4xl"}`}>
                      {s.t}
                    </h3>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {s.items.map((it) => (
                        <li
                          key={it}
                          className="rounded-full border border-current px-3 py-1 text-xs font-medium"
                        >
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* TRANSIÇÃO */}
        <section
          aria-label="Design mais code mais carinho"
          className="relative bg-primary py-20 text-primary-foreground"
        >
          <Reveal className="mx-auto max-w-[1360px] px-5 text-center md:px-10">
            <p className="font-display text-[16vw] lg:text-[12rem]">
              Design <span className="text-blush">+</span> Code
              <br />
              <span className="text-blush">+</span> carinho.
            </p>
          </Reveal>
          <Star className="absolute left-[8%] top-10 h-10 w-10 text-blush" />
          <Star className="absolute bottom-10 right-[10%] h-14 w-14 text-secondary" />
          <Squiggle className="absolute bottom-8 left-[12%] w-28 text-blush" />
        </section>

        {/* PROJETOS */}
        <section id="projetos" className="mx-auto max-w-[1360px] px-5 py-24 md:px-10">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-7xl md:text-9xl">
              Projetos
              <br />
              que já saíram
              <br />
              <span className="text-blush-deep">do papel</span>
            </h2>
            <p className="font-hand text-3xl">algumas coisas que tive o prazer de criar ♡</p>
          </Reveal>
          <div className="mt-16 grid gap-x-8 gap-y-16 md:grid-cols-12">
            <Reveal className="md:col-span-12">
            <ProjectCard p={PROJECTS[0]} imgClass="aspect-[21/9]" />
            </Reveal>
            <Reveal className="md:col-span-6">
              <ProjectCard p={PROJECTS[1]} />
            </Reveal>
            <Reveal delay={120} className="md:col-span-6 md:mt-24">
              <ProjectCard p={PROJECTS[2]} />
            </Reveal>
            <Reveal className="md:col-span-7">
              <ProjectCard p={PROJECTS[3]} imgClass="aspect-[16/8]" />
            </Reveal>
            <Reveal delay={120} className="md:col-span-4 md:col-start-9">
              <ProjectCard p={PROJECTS[4]} imgClass="aspect-[3/4]" />
            </Reveal>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="relative overflow-hidden bg-blush py-24">
          <div
            className="absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-secondary"
            aria-hidden="true"
          />
          <div className="relative mx-auto grid max-w-[1360px] gap-10 px-4 md:px-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <h2 className="font-display text-[20vw] lg:text-[10rem]">
                Vamos
                <br />
                criar
                <br />
                juntos !
              </h2>
              <p className="mt-6 max-w-md text-lg">
                Tem uma ideia do que quer fazer? Me chama. ♡
              </p>
            </Reveal>
            <Reveal delay={150} className="flex flex-col justify-end gap-4 lg:col-span-5">
              {[
                ["Instagram", "@br4zap", "https://instagram.com/br4zap"],
                ["E-mail", "juhbraz993@gmail.com", "mailto:juhbraz993@gmail.com"],
                ["WhatsApp", "11 93372-0143", "https://wa.me/5511933720143"],
              ].map(([l, v, h]) => (
                <a
                  key={l}
                  href={h}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-2xl bg-background px-6 py-5 transition-transform duration-300 hover:scale-[1.02]"
                >
                  <span>
                    <span className="block text-xs font-bold tracking-[.2em] text-muted-foreground">
                      {l.toUpperCase()}
                    </span>
                    <span className="text-lg font-bold">{v}</span>
                  </span>
                  <span className="text-2xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </a>
              ))}
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-[1360px] flex-wrap items-center justify-between gap-6 px-5 py-10 md:px-10">
          <span className="font-display text-5xl">Juju</span>
          <nav aria-label="Rodapé" className="flex flex-wrap gap-6">
            {NAV.map(([l, h]) => (
              <a key={h} href={h} className="text-sm hover:text-blush">
                {l}
              </a>
            ))}
          </nav>
          <span className="font-hand text-2xl text-blush">- Made with carinho ♡</span>
        </div>
      </footer>
    </div>
  );
}
