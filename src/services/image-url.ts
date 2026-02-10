import noImage from "../assets/no-image-placeholder.webp";

const getCroppedImageUrl = (url: string) => {
  if (!url) {
    return noImage;
  }

  const target = "media/";

  const pos = url.indexOf(target);

  if (pos === -1) return url;

  const index = pos + target.length;
  url.slice(0, index);

  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
