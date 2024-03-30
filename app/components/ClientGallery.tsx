"use client";

import "react-image-gallery/styles/css/image-gallery.css";

import ImageGallery, { ReactImageGalleryImageSet } from "react-image-gallery";

export interface ClientGalleryProps {
	images: { original: string; thumbnail: string; }[];
}

export default function ClientGallery({ images }: ClientGalleryProps) {
    return <ImageGallery
			items={images}
			lazyLoad={true}
			showFullscreenButton={false}
		/>;
} 