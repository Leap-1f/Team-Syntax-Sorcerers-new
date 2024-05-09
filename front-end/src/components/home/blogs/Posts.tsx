import Image from "next/image";
interface PostDataProps {
  img: string;
  category: string;
  title: string;
  content: string;
  date: string;
}

const Post: React.FC<PostDataProps> = ({
  img,
  category,
  title,
  content,
  date,
}) => (
  <div className="flex gap-[2.5rem]">
    <Image
      src={img}
      alt=""
      className="w-[25.5rem] h-[14.6rem]"
      width={255}
      height={146}
    />
    <div className=" flex flex-col gap-3 w-[35rem]">
      <div className="text-[#2BB9A9] text-[15px] font-normal">{category}</div>
      <div className="text-[2rem] font-semibold">{title}</div>
      <div className="flex flex-col gap-10">
        <div className="text-[#888] text-[14.5px]">{content}</div>
        <div className="text-[#888] text-[12px]">
          Post Date: <span className="text-[#2BB9A9]">{date}</span>
        </div>
      </div>
    </div>
  </div>
);

const Data: PostDataProps[] = [
  {
    img: "https://res.cloudinary.com/dqhy9ufze/image/upload/v1714036669/a68b632a9ef3eaba80f8070d323a16ba_lcjrkb.jpg",

    category: "Creative, Creative, graphy",
    title: "DIAM ARCU, FRINGILLA A SEM CON",
    content:
      "It is accompanied by a case that can contain up to three different diffusers and can be used for dry storage of loose tea. The perfect way to enjoy brewing tea on low hanging fruit to identify…",
    date: " August 4, 2020",
  },
  {
    img: "https://res.cloudinary.com/dqhy9ufze/image/upload/v1714036663/1875569660c7a49dc490fa2ea28c52da_itfvmx.jpg",
    category: "Creative, Creative, graphy",
    title: "TOP 10 OUTDOOR ITEMS FOR YOUR",
    content:
      "It is accompanied by a case that can contain up to three different diffusers and can be used for dry storage of loose tea. The perfect way to enjoy brewing tea on low hanging fruit to identify…",
    date: " August 5, 2020",
  },
  {
    img: "https://res.cloudinary.com/dqhy9ufze/image/upload/v1714036669/a68b632a9ef3eaba80f8070d323a16ba_lcjrkb.jpg",
    category: "Creative, Creative, graphy",
    title: "DIAM ARCU, FRINGILLA A SEM CON",
    content:
      "It is accompanied by a case that can contain up to three different diffusers and can be used for dry storage of loose tea. The perfect way to enjoy brewing tea on low hanging fruit to identify…",
    date: " August 6, 2020",
  },
  {
    img: "https://res.cloudinary.com/dqhy9ufze/image/upload/v1714036663/1875569660c7a49dc490fa2ea28c52da_itfvmx.jpg",
    category: "Creative, Creative, graphy",
    title: "TOP 10 OUTDOOR ITEMS FOR YOUR",
    content:
      "It is accompanied by a case that can contain up to three different diffusers and can be used for dry storage of loose tea. The perfect way to enjoy brewing tea on low hanging fruit to identify…",
    date: " August 7, 2020",
  },
  {
    img: "https://res.cloudinary.com/dqhy9ufze/image/upload/v1714036669/a68b632a9ef3eaba80f8070d323a16ba_lcjrkb.jpg",
    category: "Creative, Creative, graphy",
    title: "DIAM ARCU, FRINGILLA A SEM CON",
    content:
      "It is accompanied by a case that can contain up to three different diffusers and can be used for dry storage of loose tea. The perfect way to enjoy brewing tea on low hanging fruit to identify…",
    date: " August 8, 2020",
  },
  {
    img: "https://res.cloudinary.com/dqhy9ufze/image/upload/v1714036663/1875569660c7a49dc490fa2ea28c52da_itfvmx.jpg",
    category: "Creative, Creative, graphy",
    title: "TOP 10 OUTDOOR ITEMS FOR YOUR",
    content:
      "It is accompanied by a case that can contain up to three different diffusers and can be used for dry storage of loose tea. The perfect way to enjoy brewing tea on low hanging fruit to identify…",
    date: " August 9, 2020",
  },
  {
    img: "https://res.cloudinary.com/dqhy9ufze/image/upload/v1714036669/a68b632a9ef3eaba80f8070d323a16ba_lcjrkb.jpg",
    category: "Creative, Creative, graphy",
    title: "DIAM ARCU, FRINGILLA A SEM CON",
    content:
      "It is accompanied by a case that can contain up to three different diffusers and can be used for dry storage of loose tea. The perfect way to enjoy brewing tea on low hanging fruit to identify…",
    date: " August 8, 2020",
  },
  {
    img: "https://res.cloudinary.com/dqhy9ufze/image/upload/v1714036663/1875569660c7a49dc490fa2ea28c52da_itfvmx.jpg",
    category: "Creative, Creative, graphy",
    title: "TOP 10 OUTDOOR ITEMS FOR YOUR",
    content:
      "It is accompanied by a case that can contain up to three different diffusers and can be used for dry storage of loose tea. The perfect way to enjoy brewing tea on low hanging fruit to identify…",
    date: " August 9, 2020",
  },
  {
    img: "https://res.cloudinary.com/dqhy9ufze/image/upload/v1714036669/a68b632a9ef3eaba80f8070d323a16ba_lcjrkb.jpg",
    category: "Creative, Creative, graphy",
    title: "DIAM ARCU, FRINGILLA A SEM CON",
    content:
      "It is accompanied by a case that can contain up to three different diffusers and can be used for dry storage of loose tea. The perfect way to enjoy brewing tea on low hanging fruit to identify…",
    date: " August 8, 2020",
  },
  {
    img: "https://res.cloudinary.com/dqhy9ufze/image/upload/v1714036663/1875569660c7a49dc490fa2ea28c52da_itfvmx.jpg",
    category: "Creative, Creative, graphy",
    title: "TOP 10 OUTDOOR ITEMS FOR YOUR",
    content:
      "It is accompanied by a case that can contain up to three different diffusers and can be used for dry storage of loose tea. The perfect way to enjoy brewing tea on low hanging fruit to identify…",
    date: " August 9, 2020",
  },
  {
    img: "https://res.cloudinary.com/dqhy9ufze/image/upload/v1714036669/a68b632a9ef3eaba80f8070d323a16ba_lcjrkb.jpg",
    category: "Creative, Creative, graphy",
    title: "DIAM ARCU, FRINGILLA A SEM CON",
    content:
      "It is accompanied by a case that can contain up to three different diffusers and can be used for dry storage of loose tea. The perfect way to enjoy brewing tea on low hanging fruit to identify…",
    date: " August 8, 2020",
  },
  {
    img: "https://res.cloudinary.com/dqhy9ufze/image/upload/v1714036663/1875569660c7a49dc490fa2ea28c52da_itfvmx.jpg",
    category: "Creative, Creative, graphy",
    title: "TOP 10 OUTDOOR ITEMS FOR YOUR",
    content:
      "It is accompanied by a case that can contain up to three different diffusers and can be used for dry storage of loose tea. The perfect way to enjoy brewing tea on low hanging fruit to identify…",
    date: " August 9, 2020",
  },
];

const Posts = () => {
  return (
    <>
      <div className=" flex flex-col gap-[60px]">
        {Data.map((data) => (
          <Post key={data.date} {...data} />
        ))}
      </div>
    </>
  );
};
export default Posts;
