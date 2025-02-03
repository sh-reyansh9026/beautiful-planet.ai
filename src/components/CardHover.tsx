import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHoverBlog() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={blogs} />
    </div>
  );
}
export function CardHoverNews() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={news} />
    </div>
  );
}
export const blogs = [
  {
    title: "Blog 1",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "",
    image:"/b1.jpg",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
    image:"/b2.jpg",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
    image:"/b3.jpg",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
    image:"/b4.jpg",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
    image:"/b5.jpg",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
    image:"/b6.jpg",
  },
];

export const news = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
    image:"/n1.jpg",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
    image:"/n2.jpg",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
    image:"/n3.jpg",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
    image:"/n4.jpg",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "",
    image:"/n5.png",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
    image:"/n2.jpg",
  },
];
