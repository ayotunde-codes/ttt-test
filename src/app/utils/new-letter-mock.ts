// Assuming you've defined BlogCardProps in a separate file

import imageOne from "@/app/assets/images/image-1.png";
import imageTwo from "@/app/assets/images/image-2.png";
import imageThree from "@/app/assets/images/image-3.png";
import imageFour from "@/app/assets/images/image-4.png";
import imageFive from "@/app/assets/images/image-5.png";
import avatarOne from "@/app/assets/images/avatarOne.png";
import avatarTwo from "@/app/assets/images/avatarTwo.png";
import avatarThree from "@/app/assets/images/avatarThree.png";

export const blogCardData = [
  {
    category: "Category",
    date: "November 22, 2021",
    title: "Pitch termsheet backing validation focus release.",
    avaterUrl: avatarOne,
    name: "Chandler Bing",
    imageUrl: imageOne,
  },
  {
    category: "Category",
    date: "November 22, 2021",
    title:
      "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
    avaterUrl: avatarTwo,
    name: "Rachel Green",
    imageUrl: imageTwo,
  },
  {
    category: "Category",
    date: "November 22, 2021",
    title:
      "Beta prototype sales iPad gen-z marketing network effects value proposition",
    avaterUrl: avatarThree,
    name: "Monica Geller",
    imageUrl: imageThree,
  },
  {
    category: "Technology",
    date: "December 5, 2021",
    title: "The Future of AI in Everyday Life",
    avaterUrl: avatarOne,
    name: "Ross Geller",
    imageUrl: imageThree,
  },
  {
    category: "Business",
    date: "January 15, 2022",
    title: "Startup Funding: A Comprehensive Guide",
    avaterUrl: avatarTwo,
    name: "Phoebe Buffay",
    imageUrl: imageFour,
  },
  {
    category: "Design",
    date: "February 3, 2022",
    title: "UX Design Trends to Watch in 2022",
    avaterUrl: avatarThree,
    name: "Joey Tribbiani",
    imageUrl: imageFive,
  },
];
