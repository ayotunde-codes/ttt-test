import Image, { StaticImageData } from "next/image";
import { Avatar } from "./avatar";

interface BlogCardProps {
  category: string;
  date: string;
  title: string;
  // ideally there would be user object that would contain the avatar url and name
  name: string;
  avaterUrl: string | StaticImageData;
  imageUrl: string | StaticImageData;
  // if we are  fetching from an api we won't need the StaticImageData plus i don't like to over load the public folder hence the use of assets folder that require the image import
}

// Idea if it were a full project i would have a card component that will return individual compound components such as Card, CardBody , CardHeader< CardFooter, then use this to create niched card like the blog card this is similar articture to that of shadcn which i'm a big fan of.

export const BlogCard = ({
  name,
  category,
  date,
  title,
  avaterUrl,
  imageUrl,
}: BlogCardProps) => {
  return (
    <div className="flex flex-col w-full h-full gap-6">
      <div className="w-full relative overflow-hidden h-full min-h-60 max-h-60 lg:min-h-52 lg:max-h-52 rounded-xl">
        <Image
          src={imageUrl}
          alt="blog-image"
          layout="fill"
          objectFit="cover"
          className=" hover:scale-110 transition-all duration-500"
        />
      </div>
      <div className="flex-1 flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <div className="flex gap-3 font-open-sans font-bold items-center">
            <p className="text-dark-blue">{category}</p>
            <p className="text-gray-500 font-normal">{date}</p>
          </div>
          <p className="font-normal font-open-sans"> {title}</p>
        </div>

        <div className="flex items-start mt-auto gap-3">
          {/* avatar */}
          <Avatar imageUrl={avaterUrl as string} />
          <p className="font-open-sans">{name}</p>
        </div>
      </div>
    </div>
  );
};
