import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const pillars = [
  {
    title: "Design Regenerativo",
    description: "Criar produtos pensando na sua desmontagem e reciclagem.",
  },
  {
    title: "Uso Otimizado",
    description: "Maximizar a utilização de produtos e componentes.",
  },
  {
    title: "Loop Técnico",
    description: "Reutilização, reparo, remanufatura e reciclagem de materiais.",
  },
  {
    title: "Loop Biológico",
    description: "Retornar nutrientes de forma segura à biosfera.",
  },
];

export function CircularEconomyPillars() {
  return (
    <section className="flex flex-col md:flex-row gap-6 md:gap-8 md:items-start w-full max-w-5xl mb-12 md:mb-20 mx-auto px-4">
      <div className="flex-1 flex flex-col justify-center mb-4 md:mb-0">
        <Card className="shadow-2xl border border-gray-100 bg-gradient-to-br from-white via-gray-50 to-gray-100 p-4 sm:p-6 md:p-8 rounded-2xl h-full">
          <CardHeader className="text-center pb-4 sm:pb-6 md:pb-8">
            <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary tracking-tight drop-shadow-sm">
              Pilares da Economia Circular
            </CardTitle>
            <CardDescription className="text-neutral-600 text-base sm:text-lg md:text-xl mt-2">
              Um sistema que visa a eliminação do desperdício e a contínua utilização de recursos.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 sm:space-y-4 text-neutral-800 text-sm sm:text-base md:text-lg">
              {pillars.map(pillar => (
                <li key={pillar.title} className="flex items-start gap-2">
                  <span className="inline-block mt-2.5 w-2 h-2 rounded-full bg-accent shrink-0" />
                  <span>
                    <span className="font-semibold text-accent">{pillar.title}:</span>{" "}
                    {pillar.description}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
      <div className="flex-1 flex flex-col md:flex-col justify-center items-center gap-4 sm:gap-6 w-full">
        {["/circular-economy.png", "/circular-economy-2.png"].map((src, idx) => (
          <img
            key={src}
            src={src}
            alt={`Economia Circular ${idx + 1}`}
            loading="lazy"
            className="rounded-2xl shadow-2xl w-full max-w-md md:max-w-sm h-auto object-cover transition-transform duration-200 hover:scale-105 border border-gray-200"
          />
        ))}
      </div>
    </section>
  );
}
