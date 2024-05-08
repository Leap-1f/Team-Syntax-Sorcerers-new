import Image from "next/image";
interface PostDataProps {
  img: string;
  title: string;
  description: string;
}

const Post: React.FC<PostDataProps> = ({ img, title, description }) => (
  <div className="flex gap-[2.5rem]">
    <Image
      src={img}
      alt=""
      className="w-[25.5rem] h-[14.6rem]"
      width={255}
      height={146}
    />
    <div className=" flex flex-col gap-3 w-[35rem]">
      <div className="text-[2rem] font-semibold">{title}</div>
      <div>
        <div className="text-[#888] text-[14.5px]">{description}</div>
      </div>
    </div>
  </div>
);

const Data: PostDataProps[] = [
  {
    img: "https://res.cloudinary.com/dqhy9ufze/image/upload/v1714036669/a68b632a9ef3eaba80f8070d323a16ba_lcjrkb.jpg",

    title: "DIAM ARCU, FRINGILLA A SEM CON",
    description:
      "It is accompanied by a case that can contain up to three different diffusers and can be used for dry storage of loose tea. The perfect way to enjoy brewing tea on low hanging fruit to identify…",
  },
  {
    img: "https://res.cloudinary.com/dqhy9ufze/image/upload/v1714036663/1875569660c7a49dc490fa2ea28c52da_itfvmx.jpg",

    title: "TOP 10 OUTDOOR ITEMS FOR YOUR",
    description:
      "It is accompanied by a case that can contain up to three different diffusers and can be used for dry storage of loose tea. The perfect way to enjoy brewing tea on low hanging fruit to identify…",
  },
  {
    img: "https://res.cloudinary.com/dqhy9ufze/image/upload/v1714036669/a68b632a9ef3eaba80f8070d323a16ba_lcjrkb.jpg",

    title: "DIAM ARCU, FRINGILLA A SEM CON",
    description:
      "It is accompanied by a case that can contain up to three different diffusers and can be used for dry storage of loose tea. The perfect way to enjoy brewing tea on low hanging fruit to identify…",
  },
  {
    img: "https://res.cloudinary.com/dqhy9ufze/image/upload/v1714036663/1875569660c7a49dc490fa2ea28c52da_itfvmx.jpg",

    title: "TOP 10 OUTDOOR ITEMS FOR YOUR",
    description:
      "It is accompanied by a case that can contain up to three different diffusers and can be used for dry storage of loose tea. The perfect way to enjoy brewing tea on low hanging fruit to identify…",
  },
  {
    img: "https://res.cloudinary.com/dqhy9ufze/image/upload/v1714036669/a68b632a9ef3eaba80f8070d323a16ba_lcjrkb.jpg",

    title: "DIAM ARCU, FRINGILLA A SEM CON",
    description:
      "It is accompanied by a case that can contain up to three different diffusers and can be used for dry storage of loose tea. The perfect way to enjoy brewing tea on low hanging fruit to identify…",
  },
  {
    img: "https://res.cloudinary.com/dqhy9ufze/image/upload/v1714036663/1875569660c7a49dc490fa2ea28c52da_itfvmx.jpg",

    title: "TOP 10 OUTDOOR ITEMS FOR YOUR",
    description:
      "It is accompanied by a case that can contain up to three different diffusers and can be used for dry storage of loose tea. The perfect way to enjoy brewing tea on low hanging fruit to identify…",
  },
  {
    img: "https://res.cloudinary.com/dqhy9ufze/image/upload/v1714036669/a68b632a9ef3eaba80f8070d323a16ba_lcjrkb.jpg",

    title: "DIAM ARCU, FRINGILLA A SEM CON",
    description:
      "It is accompanied by a case that can contain up to three different diffusers and can be used for dry storage of loose tea. The perfect way to enjoy brewing tea on low hanging fruit to identify…",
  },
  {
    img: "https://res.cloudinary.com/dqhy9ufze/image/upload/v1714036663/1875569660c7a49dc490fa2ea28c52da_itfvmx.jpg",

    title: "TOP 10 OUTDOOR ITEMS FOR YOUR",
    description:
      "It is accompanied by a case that can contain up to three different diffusers and can be used for dry storage of loose tea. The perfect way to enjoy brewing tea on low hanging fruit to identify…",
  },
  {
    img: "https://res.cloudinary.com/dqhy9ufze/image/upload/v1714036669/a68b632a9ef3eaba80f8070d323a16ba_lcjrkb.jpg",

    title: "DIAM ARCU, FRINGILLA A SEM CON",
    description:
      "It is accompanied by a case that can contain up to three different diffusers and can be used for dry storage of loose tea. The perfect way to enjoy brewing tea on low hanging fruit to identify…",
  },
  {
    img: "https://res.cloudinary.com/dqhy9ufze/image/upload/v1714036663/1875569660c7a49dc490fa2ea28c52da_itfvmx.jpg",

    title: "TOP 10 OUTDOOR ITEMS FOR YOUR",
    description:
      "It is accompanied by a case that can contain up to three different diffusers and can be used for dry storage of loose tea. The perfect way to enjoy brewing tea on low hanging fruit to identify…",
  },
  {
    img: "https://res.cloudinary.com/dqhy9ufze/image/upload/v1714036669/a68b632a9ef3eaba80f8070d323a16ba_lcjrkb.jpg",

    title: "DIAM ARCU, FRINGILLA A SEM CON",
    description:
      "It is accompanied by a case that can contain up to three different diffusers and can be used for dry storage of loose tea. The perfect way to enjoy brewing tea on low hanging fruit to identify…",
  },
  {
    img: "https://res.cloudinary.com/dqhy9ufze/image/upload/v1714036663/1875569660c7a49dc490fa2ea28c52da_itfvmx.jpg",

    title: "TOP 10 OUTDOOR ITEMS FOR YOUR",
    description:
      "It is accompanied by a case that can contain up to three different diffusers and can be used for dry storage of loose tea. The perfect way to enjoy brewing tea on low hanging fruit to identify…",
  },
];

const Posts = () => {
  return (
    <>
      <div className=" flex flex-col gap-[60px]">
        {Data.map((data) => (
          <Post key={data.img} {...data} />
        ))}
      </div>
    </>
  );
};
export default Posts;
