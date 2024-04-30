import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";
const Dashboard = () => {
  return (
    <div className="flex w-[100vw] h-[100vh] ">
      <div className="w-[100vw] h-[100vh] bg-gray-100 p-[30px] flex gap-[20px]">
        <div className="w-[50%] flex flex-col gap-[20px] ">
          <div className=" bg-white h-fit rounded-xl p-[20px]  flex flex-col gap-[10px]">
            <div className="flex gap-[20px] font-ml">
              <AttachMoneyIcon />
              <p>Орлого</p>
            </div>
            <p className="font-bold text-3xl">245,000</p>
            <p className=" text-gray-500">Өнөөдөр</p>
          </div>
          <div className="bg-white h-fit rounded-xl p-[20px]  flex flex-col gap-[10px]">
            <div className="flex justify-between">
              <h1 className="text-xl font-bold ">Шилдэг Бүтээгдэхүүн</h1>
              <ArrowForwardIosIcon />
            </div>
            <div className="grid grid-cols-12 gap-4 w-full h-[50px] bg-[#D6D8DB]">
              <div className="col-span-2  flex justify-center items-center">
                #
              </div>
              <div className=" col-span-4 flex justify-center items-center">
                Бүтээгдэхүүн
              </div>
              <div className=" col-span-4 flex justify-center items-center">
                Зарагдсан
              </div>
              <div className=" col-span-2 flex justify-center items-center">
                Үнэ
              </div>
            </div>
            {/* START Бүтээгдэхүүн нэмэж байгаа хэсэг  */}
            <div className="grid grid-cols-12 grid-rows-1 gap-4 w-full h-fit pt-3 pb-3 border-b-2">
              <div className="col-span-2  flex justify-center items-center">
                1
              </div>
              <div className=" col-span-4 flex gap-3 justify-start items-center">
                <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                  <Image
                    className="w-full h-full"
                    src="https://res.cloudinary.com/dqhy9ufze/image/upload/v1714037268/MV5BZGY4MjdmMGYtZjQwYi00YTlhLThhZDItZjcwOWZiYjBiOGZkXkEyXkFqcGdeQXVyMTI3MDk3MzQ_._V1__yqgneq.jpg"
                    width={50}
                    height={50}
                    alt=""
                  />
                </div>
                <div>
                  <h1 className="font-bold">Women`s jacket</h1>
                  <p>#12345678</p>
                </div>
              </div>
              <div className=" col-span-4 flex justify-center items-center">
                200
              </div>
              <div className=" col-span-2 flex justify-center items-center">
                12,000$
              </div>
            </div>
            {/* END Бүтээгдэхүүн нэмэж байгаа хэсэг */}
            {/* START Бүтээгдэхүүн нэмэж байгаа хэсэг  */}
            <div className="grid grid-cols-12 grid-rows-1 gap-4 w-full h-fit pt-3 pb-3 border-b-2">
              <div className="col-span-2  flex justify-center items-center">
                1
              </div>
              <div className=" col-span-4 flex gap-3 justify-start items-center">
                <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                  <Image
                    className="w-full h-full"
                    src="https://res.cloudinary.com/dqhy9ufze/image/upload/v1714037268/MV5BZGY4MjdmMGYtZjQwYi00YTlhLThhZDItZjcwOWZiYjBiOGZkXkEyXkFqcGdeQXVyMTI3MDk3MzQ_._V1__yqgneq.jpg"
                    width={50}
                    height={50}
                    alt=""
                  />
                </div>
                <div>
                  <h1 className="font-bold">Women`s jacket</h1>
                  <p>#12345678</p>
                </div>
              </div>
              <div className=" col-span-4 flex justify-center items-center">
                200
              </div>
              <div className=" col-span-2 flex justify-center items-center">
                12,000$
              </div>
            </div>
            {/* END Бүтээгдэхүүн нэмэж байгаа хэсэг */}
          </div>
        </div>
        <div className=" w-[50%] flex flex-col gap-[20px]">
          <div className=" bg-white h-fit rounded-xl p-[20px]  flex flex-col gap-[10px]">
            <div className="flex gap-[20px] font-ml">
              <AttachMoneyIcon />
              <p>Захиалах</p>
            </div>
            <p className="font-bold text-3xl">58</p>
            <p className=" text-gray-500">Өнөөдөр</p>
          </div>
          <div className="bg-white h-fit rounded-xl p-[20px]  flex flex-col gap-[10px]">
            <div className="flex justify-between">
              <h1 className="text-xl font-bold ">Борлуулалт</h1>
              <ArrowForwardIosIcon />
            </div>
            <div>{/* Graphic орж ирнэ */}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
