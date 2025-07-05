import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@web/components/ui/dialog";
import { Play } from "lucide-react";
import { useState } from "react";
import { flushSync } from "react-dom";

interface YouTubePreviewProps {
  videoId: string;
  title?: string;
}

export const YouTubePreview: React.FC<YouTubePreviewProps> = ({
  videoId,
  title = "YouTube Video"
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`;
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        document.startViewTransition(() => {
          flushSync(() => {
            setIsOpen(open);
          });
        });
      }}
    >
      <DialogTrigger asChild>
        <a
          href={videoUrl}
          target="_blank"
          className="block w-full relative rounded-lg overflow-hidden group no-underline"
          onClick={(e) => {
            e.preventDefault();
            document.startViewTransition(() => {
              flushSync(() => {
                setIsOpen(true);
              });
            });
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent z-10">
            <h2 className="text-white text-xl font-bold p-4 line-clamp-2">{title}</h2>
          </div>
          <div className="relative w-full aspect-video">
            {!isOpen && (
              <div
                style={{
                  viewTransitionName: `youtube-preview-${videoId}`
                }}
              >
                <img
                  src={thumbnailUrl}
                  alt={title}
                  className="transition-transform group-hover:scale-105 object-cover"
                />
              </div>
            )}

            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-all">
              {isOpen && <Play className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 transition-opacity" />}
            </div>
          </div>
        </a>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] p-0">
        <VisuallyHidden>
          <DialogTitle>{title}</DialogTitle>
        </VisuallyHidden>
        <div className="aspect-video relative">
          {isOpen && (
            <img
              src={thumbnailUrl}
              alt={title}
              style={{
                viewTransitionName: `youtube-preview-${videoId}`
              }}
              className="transition-transform group-hover:scale-105 rounded-lg object-cover"
            />
          )}
          <iframe
            className="rounded-lg relative z-10"
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
