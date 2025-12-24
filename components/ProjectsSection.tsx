import Image from "next/image";
import Link from "next/link";

type Project = {
  title: string;
  image: string;
  href: string;
};

const projects: Project[] = [
  {
    title: "GyroPlayer",
    image: "/gyroplayer.jpg",
    href: "https://gyroplayer.vercel.app/",
  },
  {
    title: "Boutique Escale",
    image: "/escale.jpg",
    href: "https://www.boutique-escale.com/",
  },
  {
    title: "Must Impression",
    image: "/must.jpg",
    href: "https://must-impression.vercel.app/",
  },
  {
    title: "Maghreb Lab",
    image: "/maghreb.jpg",
    href: "https://maghreblab.vercel.app/",
  },
  {
    title: "Coming Soon...",
    image: "/pos-1.jpg",
    href: "/",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-4 bg-white dark:bg-black">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 space-y-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A171C] dark:text-[#FEFDFB] mb-4">
            Featured Projects
          </h2>
        </div>

        {/* Projects */}
        <div className="space-y-10">
          {projects.map((p) => (
            <div key={p.title} className="space-y-3">
              {/* Title link */}
              <Link
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-medium text-zinc-900 dark:text-white underline"
              >
                {p.title}
              </Link>

              {/* Image (no crop) */}
              <div className="relative w-full">
                <div className="relative w-full aspect-video">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 1152px"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
