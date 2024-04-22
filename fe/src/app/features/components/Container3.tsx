export const Container3 = () => {
  const experienceItems = [
    {
      title: "Fast delivery",
      description:
        "Nunc et augue pulvinar, luctus mi non, sagittis odio. Phasellus congue sem nulla.non orci malesu da vel. Aliquam posuere mi eros.",
    },
    {
      description:
        "Nunc et augue pulvinar, luctus mi non, sagittis odio. Phasellus congue sem nulla.non orci malesu da vel. Aliquam posuere mi eros.",

      title: "Item inspection",
    },
    {
      title: "Boxing service",
      description:
        "Nunc et augue pulvinar, luctus mi non, sagittis odio. Phasellus congue sem nulla.non orci malesu da vel. Aliquam posuere mi eros.",
    },
  ];

  return (
    <div className="flex flex-col gap-[70px] justify-center items-center">
      <h1 className="text-[35px] font-semibold text-center">OUR EXPERTISE</h1>
      <div className="flex w-[1150px] gap-[15px]">
        <div className="w-[600px] h-[850px] bg-[#dee2e6]"></div>
        <div className="w-[600px] h-[900px] flex flex-col gap-[50px]">
          {experienceItems.map((item, index) => (
            <div
              key={index}
              className="w-[580px] h-[176px] border border-black flex gap-[50px] items-center pl-[50px]"
            >
              <div className="w-[115px] h-[115px] border-8 border-[#E5B034] flex justify-center items-center">
                hello
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
// export const Container3 = () => {
//   const experienceItems = [
//     {
//       title: "Fast delivery",
//       description:
//         "Nunc et augue pulvinar, luctus mi non, sagittis odio. Phasellus congue sem nulla.non orci malesu da vel. Aliquam posuere mi eros.",
//     },
//     {
//       description:
//         "Nunc et augue pulvinar, luctus mi non, sagittis odio. Phasellus congue sem nulla.non orci malesu da vel. Aliquam posuere mi eros.",

//       title: "Item inspection",
//     },
//     {
//       title: "Boxing service",
//       description:
//         "Nunc et augue pulvinar, luctus mi non, sagittis odio. Phasellus congue sem nulla.non orci malesu da vel. Aliquam posuere mi eros.",
//     },
//   ];

//   return (
//     <div className="flex flex-col gap-[70px] justify-center items-center">
//       <div className="leading-none ">
//         <h1 className="text-[35px] font-semibold text-center">OUR </h1>
//         <h1 className="text-[35px] font-semibold"> EXPERIENCE</h1>
//       </div>
//       <div className="flex w-[1150px] justify-between">
//         <div className="w-[530px] h-[742px] bg-black"></div>
//         <div className="w-[600px] h-[742px] flex flex-col gap-[50px]">
//           {experienceItems.map((item, index) => (
//             <div key={index}>
//               <button className="border text-gray-50  duration-300 relative group cursor-pointer w-[600px]   overflow-hidden   h-[176px] rounded-md bg-neutral-800 p-2  font-extrabold hover:bg-sky-700">
//                 <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-700 right-12 top-12 bg-yellow-500"></div>
//                 <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150  duration-700 right-20 -top-6 bg-orange-500"></div>
//                 <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8   rounded-full group-hover:scale-150  duration-700 right-32 top-6 bg-pink-500"></div>
//                 <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4   rounded-full group-hover:scale-150  duration-700 right-2 top-12 bg-red-600"></div>
//                 <div className="z-10 w-[115px] h-[115px] border-8 border-[#E5B034] bottom-6 absolute bg-white flex justify-center items-center text-black">
//                   hi
//                 </div>

//                 <h1 className="z-10 absolute flex right-[150px] top-[10px] uppercase">
//                   {item.title}
//                 </h1>
//                 <p className="z-10 left-[150px] absolute bottom-2  w-[337px] h-[100px] border border-black">
//                   {item.description}
//                 </p>
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
