import { Title } from "@web/components/Title";
import { DEFAULT_CLASS_MAIN } from "@web/lib/consts";
import { cn } from "@web/lib/utils";
import { Link } from "react-router";
import type { Route } from "./+types/route";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Misión | Academia Nacional de Robótica de Olmué" },
    { name: "description", content: "Nos visualizamos como un faro de esperanza y aprendizaje para niños y jóvenes" }
  ];
};

export default function Mision() {
  return (
    <main className={cn(DEFAULT_CLASS_MAIN, "space-y-2 text-pretty px-8 lg:px-48 mb-6")}>
      <Title>Nuestra misión</Title>
      <p>
        La Academia Nacional de Robótica de Olmué tiene como misión inspirar y capacitar a la
        próxima generación de <strong>líderes tecnológicos</strong>, ofreciendo un espacio inclusivo
        y accesible para niños y jóvenes de nuestra comunidad.
        <br />
        Nos comprometemos a proporcionar a cada estudiante, independientemente de sus circunstancias
        socioeconómicas, la oportunidad de explorar, aprender y crear en el fascinante mundo de la
        robótica y la tecnología.
      </p>
      <p>
        A través de una enseñanza innovadora y práctica, buscamos fomentar habilidades críticas como
        la resolución de problemas, el pensamiento lógico y el trabajo en equipo. Al mismo tiempo,
        nos esforzamos por despertar en nuestros estudiantes una curiosidad por la tecnología y la
        ciencia que los motive a seguir aprendiendo y creciendo.
      </p>
      <p>
        Además de desarrollar competencias técnicas, promovemos la confianza en sí mismos,
        preparando a los jóvenes para enfrentar los desafíos de un futuro lleno de oportunidades. En
        la ANR, creemos que cada niño tiene el potencial de convertirse en un agente de cambio y
        nuestro objetivo es brindarles las herramientas y el apoyo necesarios para alcanzar sus
        sueños en el campo de la tecnología.
      </p>
      <div className="flex justify-end mt-4">
        <Link
          to="/vision"
          style={{
            viewTransitionName: "home-link-1"
          }}
          className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
          viewTransition
        >
          Siguiente: Visión
        </Link>
      </div>
    </main>
  );
}
