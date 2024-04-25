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
    <Image src={img} fill={true} alt="" className="w-[25.5rem] h-[14.6rem]" />
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
    img: "https://s3-alpha-sig.figma.com/img/8c8b/04fd/a68b632a9ef3eaba80f8070d323a16ba?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jVzy~5Oe2IfzMaDPHDaeF0SBAUzmMSWfBK1~9sB4NvvTkUARDfM5IDBMEPO5gW1CDn5znweSvd4WYH8jfQxBG8~a0Bc7j1A8spNK22FwuByWP6HZeC4VyQKGKgjuPS-qFfJ0AUPy2zbflVqf5rQYr~G3T-bslJXe0yqc8BGbPiLf5R00hRH3vzC-vzkmgiDy0Vt0qCeC3K91EgRJV1KoDC~oSsKon2i5bVgyTYQ5F79sR0qR6QOSgH784EWQJg220ABdrRiPWBZ1fiL1y6xp-9Z2fuJqi47jHSLMSg09YCErGWH6yo9BE7XNYwVLBL4rRDoLMJ3eTxjdOChJbDyyzQ__",
    category: "Creative, Creative, graphy",
    title: "DIAM ARCU, FRINGILLA A SEM CON",
    content:
      "It is accompanied by a case that can contain up to three different diffusers and can be used for dry storage of loose tea. The perfect way to enjoy brewing tea on low hanging fruit to identify…",
    date: " August 4, 2020",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/a4ee/bb92/1875569660c7a49dc490fa2ea28c52da?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JpR4QW2hjlbFxrltuqw2J9uKIYS~iblAc-vkioeiO0AbUkZYnc~OxpbOqtm73dBCa2tM-ORLuap7QF489GFPq2noup7X2sNRT5RgIv6SZdoVKvj60T79E~u0-y6hAcLn45MxKN9dVRWYg8NLm6ChMrxb6tH-RSNrluGDr~M2qGSjvyYY7fjHgDhVLDj7b3RV6vfoU28VEVt5-UC3qUS59SxSbJlFI52JzOcnWFB~OsmmniBfY6krCMZSYhwvgP0hLIshcId36EJszzZZY1HaSAd315-atP1CnNkwiF5snOoGt4Uj4qCu8idVLjr-SqPtFVj4bnERdXO27OjSd3HRiw__",
    category: "Creative, Creative, graphy",
    title: "TOP 10 OUTDOOR ITEMS FOR YOUR",
    content:
      "It is accompanied by a case that can contain up to three different diffusers and can be used for dry storage of loose tea. The perfect way to enjoy brewing tea on low hanging fruit to identify…",
    date: " August 5, 2020",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/8c8b/04fd/a68b632a9ef3eaba80f8070d323a16ba?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jVzy~5Oe2IfzMaDPHDaeF0SBAUzmMSWfBK1~9sB4NvvTkUARDfM5IDBMEPO5gW1CDn5znweSvd4WYH8jfQxBG8~a0Bc7j1A8spNK22FwuByWP6HZeC4VyQKGKgjuPS-qFfJ0AUPy2zbflVqf5rQYr~G3T-bslJXe0yqc8BGbPiLf5R00hRH3vzC-vzkmgiDy0Vt0qCeC3K91EgRJV1KoDC~oSsKon2i5bVgyTYQ5F79sR0qR6QOSgH784EWQJg220ABdrRiPWBZ1fiL1y6xp-9Z2fuJqi47jHSLMSg09YCErGWH6yo9BE7XNYwVLBL4rRDoLMJ3eTxjdOChJbDyyzQ__",
    category: "Creative, Creative, graphy",
    title: "DIAM ARCU, FRINGILLA A SEM CON",
    content:
      "It is accompanied by a case that can contain up to three different diffusers and can be used for dry storage of loose tea. The perfect way to enjoy brewing tea on low hanging fruit to identify…",
    date: " August 6, 2020",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/a4ee/bb92/1875569660c7a49dc490fa2ea28c52da?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JpR4QW2hjlbFxrltuqw2J9uKIYS~iblAc-vkioeiO0AbUkZYnc~OxpbOqtm73dBCa2tM-ORLuap7QF489GFPq2noup7X2sNRT5RgIv6SZdoVKvj60T79E~u0-y6hAcLn45MxKN9dVRWYg8NLm6ChMrxb6tH-RSNrluGDr~M2qGSjvyYY7fjHgDhVLDj7b3RV6vfoU28VEVt5-UC3qUS59SxSbJlFI52JzOcnWFB~OsmmniBfY6krCMZSYhwvgP0hLIshcId36EJszzZZY1HaSAd315-atP1CnNkwiF5snOoGt4Uj4qCu8idVLjr-SqPtFVj4bnERdXO27OjSd3HRiw__",
    category: "Creative, Creative, graphy",
    title: "TOP 10 OUTDOOR ITEMS FOR YOUR",
    content:
      "It is accompanied by a case that can contain up to three different diffusers and can be used for dry storage of loose tea. The perfect way to enjoy brewing tea on low hanging fruit to identify…",
    date: " August 7, 2020",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/8c8b/04fd/a68b632a9ef3eaba80f8070d323a16ba?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jVzy~5Oe2IfzMaDPHDaeF0SBAUzmMSWfBK1~9sB4NvvTkUARDfM5IDBMEPO5gW1CDn5znweSvd4WYH8jfQxBG8~a0Bc7j1A8spNK22FwuByWP6HZeC4VyQKGKgjuPS-qFfJ0AUPy2zbflVqf5rQYr~G3T-bslJXe0yqc8BGbPiLf5R00hRH3vzC-vzkmgiDy0Vt0qCeC3K91EgRJV1KoDC~oSsKon2i5bVgyTYQ5F79sR0qR6QOSgH784EWQJg220ABdrRiPWBZ1fiL1y6xp-9Z2fuJqi47jHSLMSg09YCErGWH6yo9BE7XNYwVLBL4rRDoLMJ3eTxjdOChJbDyyzQ__",
    category: "Creative, Creative, graphy",
    title: "DIAM ARCU, FRINGILLA A SEM CON",
    content:
      "It is accompanied by a case that can contain up to three different diffusers and can be used for dry storage of loose tea. The perfect way to enjoy brewing tea on low hanging fruit to identify…",
    date: " August 8, 2020",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/a4ee/bb92/1875569660c7a49dc490fa2ea28c52da?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JpR4QW2hjlbFxrltuqw2J9uKIYS~iblAc-vkioeiO0AbUkZYnc~OxpbOqtm73dBCa2tM-ORLuap7QF489GFPq2noup7X2sNRT5RgIv6SZdoVKvj60T79E~u0-y6hAcLn45MxKN9dVRWYg8NLm6ChMrxb6tH-RSNrluGDr~M2qGSjvyYY7fjHgDhVLDj7b3RV6vfoU28VEVt5-UC3qUS59SxSbJlFI52JzOcnWFB~OsmmniBfY6krCMZSYhwvgP0hLIshcId36EJszzZZY1HaSAd315-atP1CnNkwiF5snOoGt4Uj4qCu8idVLjr-SqPtFVj4bnERdXO27OjSd3HRiw__",
    category: "Creative, Creative, graphy",
    title: "TOP 10 OUTDOOR ITEMS FOR YOUR",
    content:
      "It is accompanied by a case that can contain up to three different diffusers and can be used for dry storage of loose tea. The perfect way to enjoy brewing tea on low hanging fruit to identify…",
    date: " August 9, 2020",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/8c8b/04fd/a68b632a9ef3eaba80f8070d323a16ba?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jVzy~5Oe2IfzMaDPHDaeF0SBAUzmMSWfBK1~9sB4NvvTkUARDfM5IDBMEPO5gW1CDn5znweSvd4WYH8jfQxBG8~a0Bc7j1A8spNK22FwuByWP6HZeC4VyQKGKgjuPS-qFfJ0AUPy2zbflVqf5rQYr~G3T-bslJXe0yqc8BGbPiLf5R00hRH3vzC-vzkmgiDy0Vt0qCeC3K91EgRJV1KoDC~oSsKon2i5bVgyTYQ5F79sR0qR6QOSgH784EWQJg220ABdrRiPWBZ1fiL1y6xp-9Z2fuJqi47jHSLMSg09YCErGWH6yo9BE7XNYwVLBL4rRDoLMJ3eTxjdOChJbDyyzQ__",
    category: "Creative, Creative, graphy",
    title: "DIAM ARCU, FRINGILLA A SEM CON",
    content:
      "It is accompanied by a case that can contain up to three different diffusers and can be used for dry storage of loose tea. The perfect way to enjoy brewing tea on low hanging fruit to identify…",
    date: " August 8, 2020",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/a4ee/bb92/1875569660c7a49dc490fa2ea28c52da?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JpR4QW2hjlbFxrltuqw2J9uKIYS~iblAc-vkioeiO0AbUkZYnc~OxpbOqtm73dBCa2tM-ORLuap7QF489GFPq2noup7X2sNRT5RgIv6SZdoVKvj60T79E~u0-y6hAcLn45MxKN9dVRWYg8NLm6ChMrxb6tH-RSNrluGDr~M2qGSjvyYY7fjHgDhVLDj7b3RV6vfoU28VEVt5-UC3qUS59SxSbJlFI52JzOcnWFB~OsmmniBfY6krCMZSYhwvgP0hLIshcId36EJszzZZY1HaSAd315-atP1CnNkwiF5snOoGt4Uj4qCu8idVLjr-SqPtFVj4bnERdXO27OjSd3HRiw__",
    category: "Creative, Creative, graphy",
    title: "TOP 10 OUTDOOR ITEMS FOR YOUR",
    content:
      "It is accompanied by a case that can contain up to three different diffusers and can be used for dry storage of loose tea. The perfect way to enjoy brewing tea on low hanging fruit to identify…",
    date: " August 9, 2020",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/8c8b/04fd/a68b632a9ef3eaba80f8070d323a16ba?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jVzy~5Oe2IfzMaDPHDaeF0SBAUzmMSWfBK1~9sB4NvvTkUARDfM5IDBMEPO5gW1CDn5znweSvd4WYH8jfQxBG8~a0Bc7j1A8spNK22FwuByWP6HZeC4VyQKGKgjuPS-qFfJ0AUPy2zbflVqf5rQYr~G3T-bslJXe0yqc8BGbPiLf5R00hRH3vzC-vzkmgiDy0Vt0qCeC3K91EgRJV1KoDC~oSsKon2i5bVgyTYQ5F79sR0qR6QOSgH784EWQJg220ABdrRiPWBZ1fiL1y6xp-9Z2fuJqi47jHSLMSg09YCErGWH6yo9BE7XNYwVLBL4rRDoLMJ3eTxjdOChJbDyyzQ__",
    category: "Creative, Creative, graphy",
    title: "DIAM ARCU, FRINGILLA A SEM CON",
    content:
      "It is accompanied by a case that can contain up to three different diffusers and can be used for dry storage of loose tea. The perfect way to enjoy brewing tea on low hanging fruit to identify…",
    date: " August 8, 2020",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/a4ee/bb92/1875569660c7a49dc490fa2ea28c52da?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JpR4QW2hjlbFxrltuqw2J9uKIYS~iblAc-vkioeiO0AbUkZYnc~OxpbOqtm73dBCa2tM-ORLuap7QF489GFPq2noup7X2sNRT5RgIv6SZdoVKvj60T79E~u0-y6hAcLn45MxKN9dVRWYg8NLm6ChMrxb6tH-RSNrluGDr~M2qGSjvyYY7fjHgDhVLDj7b3RV6vfoU28VEVt5-UC3qUS59SxSbJlFI52JzOcnWFB~OsmmniBfY6krCMZSYhwvgP0hLIshcId36EJszzZZY1HaSAd315-atP1CnNkwiF5snOoGt4Uj4qCu8idVLjr-SqPtFVj4bnERdXO27OjSd3HRiw__",
    category: "Creative, Creative, graphy",
    title: "TOP 10 OUTDOOR ITEMS FOR YOUR",
    content:
      "It is accompanied by a case that can contain up to three different diffusers and can be used for dry storage of loose tea. The perfect way to enjoy brewing tea on low hanging fruit to identify…",
    date: " August 9, 2020",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/8c8b/04fd/a68b632a9ef3eaba80f8070d323a16ba?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jVzy~5Oe2IfzMaDPHDaeF0SBAUzmMSWfBK1~9sB4NvvTkUARDfM5IDBMEPO5gW1CDn5znweSvd4WYH8jfQxBG8~a0Bc7j1A8spNK22FwuByWP6HZeC4VyQKGKgjuPS-qFfJ0AUPy2zbflVqf5rQYr~G3T-bslJXe0yqc8BGbPiLf5R00hRH3vzC-vzkmgiDy0Vt0qCeC3K91EgRJV1KoDC~oSsKon2i5bVgyTYQ5F79sR0qR6QOSgH784EWQJg220ABdrRiPWBZ1fiL1y6xp-9Z2fuJqi47jHSLMSg09YCErGWH6yo9BE7XNYwVLBL4rRDoLMJ3eTxjdOChJbDyyzQ__",
    category: "Creative, Creative, graphy",
    title: "DIAM ARCU, FRINGILLA A SEM CON",
    content:
      "It is accompanied by a case that can contain up to three different diffusers and can be used for dry storage of loose tea. The perfect way to enjoy brewing tea on low hanging fruit to identify…",
    date: " August 8, 2020",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/a4ee/bb92/1875569660c7a49dc490fa2ea28c52da?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JpR4QW2hjlbFxrltuqw2J9uKIYS~iblAc-vkioeiO0AbUkZYnc~OxpbOqtm73dBCa2tM-ORLuap7QF489GFPq2noup7X2sNRT5RgIv6SZdoVKvj60T79E~u0-y6hAcLn45MxKN9dVRWYg8NLm6ChMrxb6tH-RSNrluGDr~M2qGSjvyYY7fjHgDhVLDj7b3RV6vfoU28VEVt5-UC3qUS59SxSbJlFI52JzOcnWFB~OsmmniBfY6krCMZSYhwvgP0hLIshcId36EJszzZZY1HaSAd315-atP1CnNkwiF5snOoGt4Uj4qCu8idVLjr-SqPtFVj4bnERdXO27OjSd3HRiw__",
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
