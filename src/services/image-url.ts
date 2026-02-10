import logo from "../assets/game-hub-logo.jpg";

const getCroppedImageUrl = (url: string) => {
  if (!url) {
    return logo;
  }
  console.log(url);
  const target = "media/";

  const pos = url.indexOf(target);

  if (pos === -1) return url;

  const index = pos + target.length;
  url.slice(0, index);

  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
