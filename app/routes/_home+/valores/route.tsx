import { Title } from "@web/components/Title";
import { DEFAULT_CLASS_MAIN } from "@web/lib/consts";
import { cn } from "@web/lib/utils";
import { Link } from "react-router";
import type { Route } from "./+types/route";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Valores | Academia Nacional de Robótica de Olmué" },
    { name: "description", content: "Nos visualizamos como un faro de esperanza y aprendizaje para niños y jóvenes" }
  ];
};

export default function Valores() {
  return (
    <main className={cn(DEFAULT_CLASS_MAIN, "space-y-2 text-pretty px-8 lg:px-48 mb-6")}>
      <Title>Nuestros valores</Title>
      <p>
        En la Academia Nacional de Robótica de Olmué, nuestros valores fundamentales guían cada
        aspecto de nuestra misión y visión. Estos valores son el pilar sobre el cual construimos
        nuestro compromiso con el empoderamiento de niños y jóvenes a través de la robótica y la
        tecnología.
      </p>
      <ol className="list-decimal pl-5 [&>li]:mb-2 mt-2">
        <li>
          <strong>Inclusión:</strong> Creemos que todos los niños, sin importar sus circunstancias
          socioeconómicas, merecen la oportunidad de aprender y desarrollarse. Promovemos un
          entorno inclusivo donde cada estudiante se sienta valorado y tenga acceso a las mismas
          oportunidades para explorar su potencial.
        </li>
        <li>
          <strong>Innovación:</strong> Fomentamos la creatividad y el pensamiento innovador,
          animando a los estudiantes a imaginar nuevas soluciones para los problemas del presente
          y del futuro. La robótica es una plataforma para despertar su curiosidad y pasión por la
          tecnología.
        </li>
        <li>
          <strong>Colaboración:</strong> Valoramos el trabajo en equipo y la cooperación.
          Enseñamos a los estudiantes la importancia de colaborar con otros para alcanzar metas
          comunes, reforzando habilidades sociales y profesionales esenciales.
        </li>
        <li>
          <strong>Pensamiento Crítico:</strong> Desarrollar la capacidad de pensar de manera
          crítica y resolver problemas complejos es un pilar en nuestra formación. Incentivamos a
          nuestros estudiantes a analizar y buscar soluciones eficientes e innovadoras.
        </li>
        <li>
          <strong>Empoderamiento:</strong> Creemos en el poder transformador del aprendizaje.
          Nuestro objetivo es empoderar a cada estudiante para que tenga confianza en sus
          habilidades y tome control de su futuro.
        </li>
      </ol>
      <div className="flex mt-4">
        <Link
          to="/vision"
          style={{
            viewTransitionName: "home-link-2"
          }}
          className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
          viewTransition
        >
          Anterior: Visión
        </Link>
      </div>
    </main>
  );
}
