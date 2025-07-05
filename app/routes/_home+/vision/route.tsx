import { Title } from "@web/components/Title";
import { DEFAULT_CLASS_MAIN } from "@web/lib/consts";
import { cn } from "@web/lib/utils";
import { Link } from "react-router";
import type { Route } from "./+types/route";


export const meta: Route.MetaFunction = () => {
  return [
    { title: "Visión | Academia Nacional de Robótica de Olmué" },
    {
      name: "description",
      content: "Nos visualizamos como un faro de esperanza y aprendizaje para niños y jóvenes"
    }
  ];
};

export default function Vision() {
  return (
    <main className={cn(DEFAULT_CLASS_MAIN, "space-y-2 text-pretty px-8 lg:px-48 mb-6")}>
      <Title>Nuestra visión</Title>
      <p>
        Nos visualizamos como un faro de esperanza y aprendizaje para niños y jóvenes, donde la
        robótica se convierte en una poderosa herramienta para el empoderamiento y la transformación
        personal. En la Academia Nacional de Robótica de Olmué, aspiramos a ser reconocidos por el
        impacto positivo que generamos en las vidas de nuestros estudiantes, ofreciéndoles no solo
        conocimientos técnicos en robótica, sino también habilidades esenciales como el pensamiento
        crítico, la colaboración y la resolución de problemas, fundamentales para su crecimiento
        personal y profesional.
      </p>
      <p>
        Nuestra visión es crear un mundo donde todos los niños, sin importar sus circunstancias
        socioeconómicas, tengan acceso a un entorno inclusivo que les permita desarrollar su máximo
        potencial a través del aprendizaje y la innovación tecnológica. Queremos que nuestros
        estudiantes se conviertan en líderes y agentes de cambio, capaces de enfrentar con confianza
        los desafíos del futuro y contribuir activamente al progreso de sus comunidades.
      </p>
      <p>
        A través de la educación en robótica y tecnología, buscamos preparar a los jóvenes para un
        futuro lleno de oportunidades, inspirándolos a imaginar y crear soluciones que transformen
        el mundo.
      </p>
      <div className="flex justify-between mt-4">
        <Link
          to="/mision"
          style={{
            viewTransitionName: "home-link-1"
          }}
          className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
          viewTransition
        >
          Anterior: Misión
        </Link>
        <Link
          to="/valores"
          style={{
            viewTransitionName: "home-link-2"
          }}
          className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
          viewTransition
        >
          Siguiente: Valores
        </Link>
      </div>
    </main>
  );
}
