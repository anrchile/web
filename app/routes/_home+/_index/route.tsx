import { Spotlight } from "@web/components/ui/spotlight";
import { YouTubePreview } from "@web/components/ui/youtube-preview";
import ligarobotica from "@web/images/ligarobotica.webp";
import muniolmue from "@web/images/muniolmue.webp";
import { DEFAULT_CLASS_MAIN } from "@web/lib/consts";
import { cn } from "@web/lib/utils";

export default function Home() {
    return (
        <main className={cn(DEFAULT_CLASS_MAIN, "mb-6")}>
            <SpotlightHome />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 lg:px-48 mx-auto max-w-7xl items-center">
                <div className="flex justify-center items-center aspect-video">
                    <YouTubePreview videoId="hE_p_Xkvxaw" title="Torneo robótica de la liga robótica" />
                </div>
                <div className="flex justify-center items-center aspect-square">
                    <a href="https://www.ligarobotica.cl/" target="_blank" rel="noopener">
                        <img src={ligarobotica} alt="Logo Liga Robótica" />
                    </a>
                </div>
                <div className="flex justify-center items-center aspect-square">
                    <a href="https://www.muniolmue.cl/" target="_blank" rel="noopener">
                        <img
                            src={muniolmue}
                            alt="Logo Municipalidad de Olmué"
                            className="max-w-[40vw] md:max-w-[15vw]"
                        />
                    </a>
                </div>
            </div>
        </main>
    );
}

function SpotlightHome() {
    return (
        <div className="py-16 w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
            <div className="p-4 max-w-7xl mx-auto relative w-full pt-5">
                <h1 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    Academia Nacional de Robótica de Olmué
                </h1>
                <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                    La <strong>Academia Nacional de Robótica de Olmué (ANR)</strong>, fundada en 2017, nace
                    del entusiasmo por la tecnología en la Escuela Atenas. Ofrece oportunidades únicas para
                    desarrollar habilidades tecnológicas, destacando en{" "}
                    <strong>competencias nacionales e internacionales</strong>. La ANR no solo fomenta la
                    excelencia en robótica, sino también valores como el{" "}
                    <strong>trabajo en equipo y la ética</strong>. Desde 2023, opera como{" "}
                    <strong>organización sin fines de lucro</strong>, promoviendo la innovación en la región.
                </p>
            </div>
        </div>
    );
}
