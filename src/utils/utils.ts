export type Size = { width: number, height: number };
type ImageSizeCallback = (size: Size) => void

export function getImageSize(imageUrl: string, callback: ImageSizeCallback) {
    const img = new Image()
    img.src = imageUrl;
    img.onload = function () {
        callback({ height: (this as HTMLImageElement).height, width: (this as HTMLImageElement).width });
    }
}