"use client";

import { ImageIcon, Maximize2, X, Youtube } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export enum GalleryImageType {
  Image,
  YouTubeVideo,
}

export type GalleryImage = {
  type?: GalleryImageType;
  url: string;
  caption?: string;
  author?: string;
};

export default function Gallery({ images }: GalleryProps) {
  const [fullscreen, setFullscreen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const firstImage = images[0];

  return (
    <>
      {fullscreen && (
        <div className="fixed z-50 inset-0 w-full h-full bg-black/80 p-4">
          <button onClick={() => setFullscreen(false)}>
            <X className="w-12 h-12" />
          </button>
          <p>wip</p>
        </div>
      )}
      <button
        onClick={() => setFullscreen(true)}
        className="group block cursor-zoom-in overflow-hidden bg-muted rounded-md p-2 aspect-video w-full md:w-64 h-auto"
      >
        {/* Stupid hack lol */}
        <div
          style={{ "backgroundImage": `url(${firstImage.url})` }}
          className="bg-cover bg-center w-full h-full rounded-md"
        >
          <div className="relative transition-all group-hover:backdrop-brightness-50 w-full h-full rounded-md">
            <Maximize2 className="transition-transform absolute flex group-hover:visible invisible w-12 h-12 scale-0 group-hover:scale-100 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]" />
            <span className="absolute flex flex-row gap-1 right-2 bottom-2">
              <ImageIcon className="w-6 h-6" />
              {images.length.toFixed(0)}
            </span>
            <span className="transition-opacity absolute flex flex-row left-2 bottom-2 opacity-0 group-hover:opacity-100">
              Gallery
            </span>
          </div>
        </div>
      </button>
    </>
  );
}

export interface GalleryProps extends React.PropsWithChildren {
  images: GalleryImage[];
}
