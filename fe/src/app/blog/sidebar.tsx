import SearchIcon from "@mui/icons-material/Search";

interface PostDataProps {
  img: string;
  title: string;
  date: string;
}
interface CategoryProps {
  category: string;
}
interface TagProps {
  tag: string;
}

const Post: React.FC<PostDataProps> = ({ img, title, date }) => (
  <div className="flex flex-col gap-[15px]">
    <div className="w-full h-[1px] bg-gray-200 my-5"></div>
    <div className="flex gap-3">
      <img src={img} alt="" className="w-[5.3rem] h-[3rem]" />
      <div className="flex flex-col gap-[10px]">
        <div className=" text-[13px] text-[#666]">{title}</div>
        <div className=" text-[13px] text-[#666]">{date}</div>
      </div>
    </div>
  </div>
);
const Category: React.FC<CategoryProps> = ({ category }) => (
  <div className="text-[#666] text-[1rem]">{category}</div>
);
const Tag: React.FC<TagProps> = ({ tag }) => (
  <button className="rounded-2xl bg-gray-100 p-2 hover:bg-[#2BB9A9] transition duration-500 hover:text-white">
    {tag}
  </button>
);
const Instagram: React.FC<PostDataProps> = ({img}) => (
   <img src={img} alt="" className="w-[100px] h-[100px]" />
)

const Data: PostDataProps[] = [
  {
    img: "https://s3-alpha-sig.figma.com/img/8c8b/04fd/a68b632a9ef3eaba80f8070d323a16ba?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jVzy~5Oe2IfzMaDPHDaeF0SBAUzmMSWfBK1~9sB4NvvTkUARDfM5IDBMEPO5gW1CDn5znweSvd4WYH8jfQxBG8~a0Bc7j1A8spNK22FwuByWP6HZeC4VyQKGKgjuPS-qFfJ0AUPy2zbflVqf5rQYr~G3T-bslJXe0yqc8BGbPiLf5R00hRH3vzC-vzkmgiDy0Vt0qCeC3K91EgRJV1KoDC~oSsKon2i5bVgyTYQ5F79sR0qR6QOSgH784EWQJg220ABdrRiPWBZ1fiL1y6xp-9Z2fuJqi47jHSLMSg09YCErGWH6yo9BE7XNYwVLBL4rRDoLMJ3eTxjdOChJbDyyzQ__",
    title: "DIAM ARCU, FRINGILLA A SEM",
    date: " August 4, 2020",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/a4ee/bb92/1875569660c7a49dc490fa2ea28c52da?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JpR4QW2hjlbFxrltuqw2J9uKIYS~iblAc-vkioeiO0AbUkZYnc~OxpbOqtm73dBCa2tM-ORLuap7QF489GFPq2noup7X2sNRT5RgIv6SZdoVKvj60T79E~u0-y6hAcLn45MxKN9dVRWYg8NLm6ChMrxb6tH-RSNrluGDr~M2qGSjvyYY7fjHgDhVLDj7b3RV6vfoU28VEVt5-UC3qUS59SxSbJlFI52JzOcnWFB~OsmmniBfY6krCMZSYhwvgP0hLIshcId36EJszzZZY1HaSAd315-atP1CnNkwiF5snOoGt4Uj4qCu8idVLjr-SqPtFVj4bnERdXO27OjSd3HRiw__",
    title: "TOP 10 OUTDOOR ITEMS FOR",
    date: " August 5, 2020",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/8c8b/04fd/a68b632a9ef3eaba80f8070d323a16ba?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jVzy~5Oe2IfzMaDPHDaeF0SBAUzmMSWfBK1~9sB4NvvTkUARDfM5IDBMEPO5gW1CDn5znweSvd4WYH8jfQxBG8~a0Bc7j1A8spNK22FwuByWP6HZeC4VyQKGKgjuPS-qFfJ0AUPy2zbflVqf5rQYr~G3T-bslJXe0yqc8BGbPiLf5R00hRH3vzC-vzkmgiDy0Vt0qCeC3K91EgRJV1KoDC~oSsKon2i5bVgyTYQ5F79sR0qR6QOSgH784EWQJg220ABdrRiPWBZ1fiL1y6xp-9Z2fuJqi47jHSLMSg09YCErGWH6yo9BE7XNYwVLBL4rRDoLMJ3eTxjdOChJbDyyzQ__",
    title: "DIAM ARCU, FRINGILLA A SEM",
    date: " August 6, 2020",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/a4ee/bb92/1875569660c7a49dc490fa2ea28c52da?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JpR4QW2hjlbFxrltuqw2J9uKIYS~iblAc-vkioeiO0AbUkZYnc~OxpbOqtm73dBCa2tM-ORLuap7QF489GFPq2noup7X2sNRT5RgIv6SZdoVKvj60T79E~u0-y6hAcLn45MxKN9dVRWYg8NLm6ChMrxb6tH-RSNrluGDr~M2qGSjvyYY7fjHgDhVLDj7b3RV6vfoU28VEVt5-UC3qUS59SxSbJlFI52JzOcnWFB~OsmmniBfY6krCMZSYhwvgP0hLIshcId36EJszzZZY1HaSAd315-atP1CnNkwiF5snOoGt4Uj4qCu8idVLjr-SqPtFVj4bnERdXO27OjSd3HRiw__",
    title: "TOP 10 OUTDOOR ITEMS FOR",
    date: " August 7, 2020",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/8c8b/04fd/a68b632a9ef3eaba80f8070d323a16ba?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jVzy~5Oe2IfzMaDPHDaeF0SBAUzmMSWfBK1~9sB4NvvTkUARDfM5IDBMEPO5gW1CDn5znweSvd4WYH8jfQxBG8~a0Bc7j1A8spNK22FwuByWP6HZeC4VyQKGKgjuPS-qFfJ0AUPy2zbflVqf5rQYr~G3T-bslJXe0yqc8BGbPiLf5R00hRH3vzC-vzkmgiDy0Vt0qCeC3K91EgRJV1KoDC~oSsKon2i5bVgyTYQ5F79sR0qR6QOSgH784EWQJg220ABdrRiPWBZ1fiL1y6xp-9Z2fuJqi47jHSLMSg09YCErGWH6yo9BE7XNYwVLBL4rRDoLMJ3eTxjdOChJbDyyzQ__",
    title: "DIAM ARCU, FRINGILLA A SEM",
    date: " August 6, 2020",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/a4ee/bb92/1875569660c7a49dc490fa2ea28c52da?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JpR4QW2hjlbFxrltuqw2J9uKIYS~iblAc-vkioeiO0AbUkZYnc~OxpbOqtm73dBCa2tM-ORLuap7QF489GFPq2noup7X2sNRT5RgIv6SZdoVKvj60T79E~u0-y6hAcLn45MxKN9dVRWYg8NLm6ChMrxb6tH-RSNrluGDr~M2qGSjvyYY7fjHgDhVLDj7b3RV6vfoU28VEVt5-UC3qUS59SxSbJlFI52JzOcnWFB~OsmmniBfY6krCMZSYhwvgP0hLIshcId36EJszzZZY1HaSAd315-atP1CnNkwiF5snOoGt4Uj4qCu8idVLjr-SqPtFVj4bnERdXO27OjSd3HRiw__",
    title: "TOP 10 OUTDOOR ITEMS FOR",
    date: " August 7, 2020",
  },
];
const Categories: CategoryProps[] = [
  { category: "Creative" },
  { category: "Image" },
  { category: "Music" },
  { category: "Travel" },
  { category: "Uncategorized" },
  { category: "Videos" },
];
const Tags: TagProps[] = [
  { tag: "Basketball" },
  { tag: "Handbag" },
  { tag: "Jackets" },
  { tag: "Kids & Young" },
  { tag: "Training wear" },
  { tag: "Women's" },
];

const SideBar = () => {
  return (
    <>
      <div className=" flex flex-col gap-[50px] w-[23.75rem]">
        <div className=" flex flex-col items-center border px-[2.3rem] pt-[3rem] pb-[4rem]">
          <img
            src="https://s3-alpha-sig.figma.com/img/2a7c/37d3/f07b8dfd7cae20c0cf2de80c25732136?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BEj9juQ8T5jIffQL7upsL-pe8Q0dTxqk8DcvK5EleWCyRdfQdAfTODW4FzrFglBIINJaRthOyyc~Q3RmUjsb11jJIN4l8T0QuUjGkpHCvOuN90g1wczhEM86ZubwgvxGe89rxb1Ep7rvqRk2T3ZeLdstUgRrHTWLIoo9MQDbdVu2r2GySJSeYjJfxugOdqrakPb7j8QRetG3DVrqTLc0lhw54Axr1YmW-L5LA3sqNpOeNvCWAetJAGT1HZAnnv7tAMJyu0ENiFpElpPbUNiN9AiaZeDe-dwUrFL6bawzkmdt4ShmTi9kDNf4VLUSXXZOyby2fD9~MSccX~XwzLq0PQ__"
            alt=""
            className="w-[16.3rem] h-[17rem]"
          />
          <div className=" text-center w-[19rem] text-[#666] text-[14.75px] font-normal">
            There are many variations of passages of lorem ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour or randomised words which don’t look even slightly
            believable.
          </div>
        </div>
        <div className=" flex flex-col items-center h-[12.1rem] gap-10 bg-[#CDE5D3]">
          <div className="pr-[200px] pt-[27.5px]">
            <div className=" font-semibold text-2xl">SEARCH</div>
            <div className=" w-[4.5rem] h-[2px] bg-black"></div>
          </div>
          <form className=" flex items-center border-black border-[1px] bg-white w-[20.5rem]">
            <input
              type="text"
              placeholder="Search ..."
              className=" w-[17rem] px-[10px] py-[22px] "
            />
            <SearchIcon className="text-gray-400 pr-[10px] w-8 h-8" />
          </form>
        </div>
        <div className="border-[1px] px-[2rem] pt-[2rem] pb-[4rem]">
          <div>
            <div className=" font-semibold text-2xl">POPULAR POST</div>
            <div className=" w-[9rem] h-[2px] bg-black"></div>
          </div>
          <div className=" flex flex-col gap-[1rem] pt-[3rem]">
            <div
              style={{
                position: "relative",
                backgroundImage:
                  "url('https://s3-alpha-sig.figma.com/img/8c8b/04fd/a68b632a9ef3eaba80f8070d323a16ba?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jVzy~5Oe2IfzMaDPHDaeF0SBAUzmMSWfBK1~9sB4NvvTkUARDfM5IDBMEPO5gW1CDn5znweSvd4WYH8jfQxBG8~a0Bc7j1A8spNK22FwuByWP6HZeC4VyQKGKgjuPS-qFfJ0AUPy2zbflVqf5rQYr~G3T-bslJXe0yqc8BGbPiLf5R00hRH3vzC-vzkmgiDy0Vt0qCeC3K91EgRJV1KoDC~oSsKon2i5bVgyTYQ5F79sR0qR6QOSgH784EWQJg220ABdrRiPWBZ1fiL1y6xp-9Z2fuJqi47jHSLMSg09YCErGWH6yo9BE7XNYwVLBL4rRDoLMJ3eTxjdOChJbDyyzQ__  ')",
                width: "318px",
                height: "181px",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
              }}
            ></div>
            <div className="flex flex-col gap-4">
              <p className=" text-[15.25px]">Diam arcu, fringilla a sem con</p>
              <p className="text-[#666] text-[13px]">September 16, 2019</p>
            </div>
            {Data.map((Data) => (
              <Post key={Data.date} {...Data} />
            ))}
          </div>
        </div>
        <div className="border-[1px] px-[2rem] pt-[2rem] pb-[4rem]">
          <div className="flex flex-col gap-1.5">
            <div className=" font-semibold text-2xl">CATEGORIES</div>
            <div className=" w-[7rem] h-[2px] bg-black"></div>
          </div>
          <div className="flex flex-col gap-3 pt-[3rem]">
            {Categories.map((Categories) => (
              <Category key={Categories.category} {...Categories} />
            ))}
          </div>
        </div>
        <div className="bg-[#F2E1E0] px-[2rem] py-[2rem]">
          <div className="flex flex-col gap-3">
            <div className=" font-semibold text-2xl">JOIN OUR LIST</div>
            <div className=" w-[7rem] h-[2px] bg-black"></div>
            <div className="text-[#666] text-[1rem]">
              Subscribe to our newsletter and stay updated to our best offers
              and deals!
            </div>
            <form className=" flex items-center border-[#222] border-[1px] bg-white w-[20.5rem]">
              <input
                type="text"
                placeholder="Subscribe Our Newsletter"
                className=" w-[17rem] px-[10px] py-[22px] "
              />
            </form>
            <button className="bg-black w-[20.5rem] h-[4.5rem] text-white ">
              Subscribe
            </button>
          </div>
        </div>
        <div className="border-[1px] px-[2rem] pt-[2rem] pb-[4rem]">
          <div className="flex flex-col gap-1.5">
            <div className=" font-semibold text-2xl">TAG</div>
            <div className=" w-[3rem] h-[2px] bg-black"></div>
          </div>
          <div className="flex flex-wrap gap-3 pt-[3rem]">
            {Tags.map((Tags) => (
              <Tag key={Tags.tag} {...Tags} />
            ))}
          </div>
        </div>
        <div className="bg-[#E0E7F2] px-[2rem] pt-[2rem] pb-[4rem]">
          <div className="flex flex-col gap-1.5">
            <div className=" font-semibold text-2xl">INSTAGRAM</div>
            <div className=" w-[3rem] h-[2px] bg-black"></div>
          </div>
          <div className="grid grid-cols-3 gap-3 pt-[3rem]">
            {Data.map((Data) => (
              <Instagram key={Data.img} {...Data} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default SideBar;
