import Image, { StaticImageData } from "next/image";

interface AvatarProps {
  imageUrl: string | StaticImageData;
}

export const Avatar = ({ imageUrl }: AvatarProps) => {
  return (
    <Image
      src={imageUrl}
      alt="avatar"
      width={32}
      height={32}
      className="rounded-full"
    />
  );
};
