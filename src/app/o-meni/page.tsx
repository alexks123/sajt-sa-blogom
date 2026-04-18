import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "O meni | Aleksej Bla\u017ei\u0107",
  description: "Kratko predstavljanje autora bloga.",
};

export default function AboutPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-10">O meni</h1>

      <div className="flex flex-col sm:flex-row gap-8 mb-10">
        <div className="flex-shrink-0">
          {/* Zamenite ovaj div sa <Image> komponentom kada dodate svoju fotografiju u public/images/profile.jpg */}
          <div className="w-32 h-32 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-2xl font-semibold text-gray-500 dark:text-gray-400 select-none">
            AB
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Aleksej Bla\u017ei\u0107</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Pravoslavni hri\u0161\u0107anin, pisac ovog bloga.
          </p>
        </div>
      </div>

      <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed mb-12">
        <p>
          Zdravo! Zovem se Aleksej Bla\u00adži\u0107 i ovaj blog je moj li\u010dni prostor za
          deljenje razmi\u0161ljanja o pravoslavnoj hri\u0161\u0107anskoj veri.
        </p>
        <p>
          Vera mi nije samo tradicija \u2014 ona je \u017eivi odnos sa Bogom koji
          svakodnevno gradim kroz molitvu, bogoslu\u017eenje i \u010ditanje svetoota\u010dkih
          tekstova. Ovaj blog pi\u0161em kao svedo\u010danstvo i poziv na razgovor.
        </p>
        <p>
          Ako te interesuje tema ili ima\u0161 pitanje, slobodno me kontaktiraj.
        </p>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
        <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
          Linkovi
        </h3>
        <div className="flex flex-col gap-2">
          {/* Dodajte svoje linkove ovde */}
          <a
            href="#"
            className="text-sm hover:text-gray-600 dark:hover:text-gray-400 transition-colors underline underline-offset-4"
          >
            Instagram
          </a>
          <a
            href="#"
            className="text-sm hover:text-gray-600 dark:hover:text-gray-400 transition-colors underline underline-offset-4"
          >
            Facebook
          </a>
        </div>
      </div>
    </main>
  );
}
