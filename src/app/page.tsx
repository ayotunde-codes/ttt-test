import Image from "next/image";
import { Header } from "./components/shared/Header";
import { Avatar } from "./components/ui/avatar";
import { blogCardData } from "./utils/new-letter-mock";
import { BlogCard } from "./components/ui/blog-card";
import heroImg from "@/app/assets/images/heroImg.png";
import { Footer } from "./components/shared/footer";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import ArcDesign from "@/app/assets/images/arc.svg";

export default function Home() {
  return (
    <div className="bg-white text-black">
      {/* header */}
      <Header />
      {/* about */}
      <div className="container">
        <div className="">
          <div className="~pb-12/20 border-b border-black flex flex-col ~gap-6/10">
            <div className="flex flex-col text-dark-blue items-center gap-3 ~py-6/10">
              <p>Blog</p>
              <h1 className="font-normal text-center">Thoughts and words</h1>
            </div>
            {/* images */}
            <div className="grid items-center lg:grid-cols-2 ~gap-14/24">
              <div>
                <Image
                  alt="hero-image"
                  className="~max-h-[26rem]/[31rem] w-full"
                  src={heroImg}
                  width={500}
                  height={500}
                />
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex gap-3 font-open-sans font-bold items-center">
                  <p className="text-dark-blue">Category</p>
                  <p className="text-gray-500 font-normal">November 22, 2021</p>
                </div>
                <div className="flex flex-col gap-5">
                  <h4 className="font-normal">
                    Pitch termsheet backing validation focus release.
                  </h4>
                  <div className="flex items-start gap-3">
                    <Avatar imageUrl="https://avatars.githubusercontent.com/u/10198965?v=4" />
                    <p className="font-open-sans">Chandler Bing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* latest story */}
        <section className="py-28">
          <div className="px-4 flex flex-col gap-10 lg:px-12 xl:px-24">
            <h4>Latest news</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {blogCardData.map((blogCard) => (
                <BlogCard
                  category={blogCard.category}
                  date={blogCard.date}
                  title={blogCard.title}
                  avaterUrl={blogCard.avaterUrl}
                  name={blogCard.name}
                  imageUrl={blogCard.imageUrl}
                  key={blogCard.title}
                />
              ))}
            </div>

            <Button size="lg" className="w-max mx-auto ~mt-10/20">
              Load more
            </Button>
          </div>
        </section>

        <section className="flex flex-col gap-20">
          <div className="rounded-xl bg-dark-blue overflow-hidden py-[72px] px-7 md:px-14 relative">
            <Image
              alt="arc-design"
              src={ArcDesign}
              className="absolute w-3/4  lg:w-3/5 top-0 lg:-top-7 right-0 pointer-events-none"
            />
            <div className="max-w-[712px] relative leading-[72px] mx-auto flex flex-col gap-12 items-center">
              <h4 className="text-white text-center">
                An enterprise template to ramp up your company website
              </h4>
              <div className="flex flex-col w-full items-center lg:max-w-[600px] h-max lg:flex-row gap-3 lg:gap-6">
                <Input
                  type="text"
                  className="flex-1"
                  placeholder="Enter your email address"
                />
                <Button
                  variant="secondary"
                  size="lg"
                  className="h-full w-full lg:w-max"
                >
                  Start now
                </Button>
              </div>
            </div>
          </div>

          {/* footer */}
          <Footer />
        </section>
      </div>
    </div>
  );
}
