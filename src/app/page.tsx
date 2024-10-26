import { YouTubePreview } from "@/components/ui/youtube-preview";
import ligarobotica from "@/images/ligarobotica.webp";
import muniolmue from "@/images/muniolmue.webp";
import { DEFAULT_CLASS_MAIN } from "@/lib/consts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { SpotlightHome } from "./page.client";
export default function Home() {
  return (
    <main className={cn(DEFAULT_CLASS_MAIN, "mb-6")}>
      <SpotlightHome />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 lg:px-48 mx-auto max-w-7xl items-center">
        <div className="flex justify-center items-center">
          <YouTubePreview
            videoId="hE_p_Xkvxaw"
            title="Torneo robótica de la liga robótica"
          />
        </div>
        <div className="flex justify-center items-center">
          <a href="https://www.ligarobotica.cl/" target="_blank">
            <Image src={ligarobotica} alt="Logo Liga Robótica" />
          </a>
        </div>
        <div className="flex justify-center items-center">
          <a href="https://www.muniolmue.cl/" target="_blank">
            <Image
              src={muniolmue}
              alt="Logo Municipalidad de Olmué"
              className="max-w-[40vw] md:max-w-full"
            />
          </a>
        </div>
      </div>
    </main>
  );
}
