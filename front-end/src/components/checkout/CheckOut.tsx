"use client";

import { Alert, Checkbox } from "@mui/material";
import { FormikProvider, useFormik } from "formik";
import { validationSchema } from "./validationSchema";
import { useEffect, useState, useSyncExternalStore } from "react";
import { PostProductData } from "../networkProduct/ProductPOST";
import { IoCloseOutline } from "react-icons/io5";
import { MdDone } from "react-icons/md";
export const CheckOut = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const store = {
    getSnapshot: () => sessionStorage.getItem("cart") || "[]",
    subscribe: (listener: () => void) => {
      window.addEventListener("storage", listener);
      return () => void window.removeEventListener("storage", listener);
    },
  };
  const kart: any = useSyncExternalStore(store.subscribe, store.getSnapshot);
  const wart: any = JSON.parse(kart);
  const subTotal = wart?.reduce(
    (acc: number, item: any) => acc + item.price * item.quantity,
    0
  );

  const handleCheckboxChange = (event: any) => {
    setIsChecked(event.target.checked);
  };

  const formikCheckout = useFormik({
    initialValues: {
      district: "",
      khoroo: "",
      apartment: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setWarningMessage("");
      try {
        const data = await fetch(" http://localhost:8080/api/location", {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        const response = await data.json();
        console.log(response.user._id);
        PostProductData({
          location: response.user._id,
          orderItems: wart.map((product: any) => {
            return {
              product: product._id,
              count: product.quantity,
            };
          }),
        });
        if (response.message) {
          setWarningMessage(response.message);
        } else if (response.success) {
          console.log(response.success, "amjilttai");
          setShowConfirmation(true);
        }
      } catch (error) {
        console.log(error);
      }
      console.log(values);
    },
  });
  useEffect(() => {}, [warningMessage]);

  // const [myBagToZero, setMyBagToZero] = useState(0);
  const handleButtonEnable = () =>
    !formikCheckout.values.district ||
    !formikCheckout.values.khoroo ||
    !formikCheckout.values.apartment ||
    !isChecked;
  const buttonBackgroundColor = handleButtonEnable() ? "#DDDDDD" : "#2BB9A9";
  // setMyBagToZero(0);
  return (
    <>
      <div className="flex justify-center ">
        {showConfirmation && (
          <div className="flex bg-[#2BB9A9] items-center p-[10px] rounded-md gap-3">
            <MdDone className="text-white text-2xl" />
            <p className="text-white ">Захиалга амжилттай бүртгэгдлээ</p>
          </div>
        )}
        {warningMessage && <Alert>{warningMessage}</Alert>}
      </div>
      <div className="flex justify-center my-[50px]">
        <FormikProvider value={formikCheckout}>
          <form onSubmit={formikCheckout.handleSubmit}>
            <div className="container flex gap-[50px]">
              <div className="w-[60%]">
                <div className="pt-7 *:hover:text-teal-500">
                  <p className="pb-3 text-[#878787]">Дүүрэг *</p>
                  <input
                    name="district"
                    onChange={formikCheckout.handleChange}
                    value={formikCheckout.values.district}
                    className="p-[10px] w-[100%] hover:border-teal-500 border-[1px] rounded-md"
                    type="text"
                  />
                  {formikCheckout.errors.district && (
                    <p className="text-[#EE4C4C] text-[12px] font-semibold">
                      {formikCheckout.errors.district}
                    </p>
                  )}
                </div>
                <div className="pt-7 *:hover:text-teal-500">
                  <p className="pb-3 text-[#878787]">Хороо *</p>
                  <input
                    name="khoroo"
                    onChange={formikCheckout.handleChange}
                    value={formikCheckout.values.khoroo}
                    className="p-[10px] w-[100%] hover:border-teal-500 border-[1px] rounded-md"
                    type="text"
                  />
                  {formikCheckout.errors.district && (
                    <p className="text-[#EE4C4C] text-[12px] font-semibold">
                      {formikCheckout.errors.khoroo}
                    </p>
                  )}
                </div>
                <div className="pt-7 *:hover:text-teal-500">
                  <p className="pb-3 text-[#878787]">Байр *</p>
                  <input
                    name="apartment"
                    onChange={formikCheckout.handleChange}
                    value={formikCheckout.values.apartment}
                    className="p-[10px] w-[100%] hover:border-teal-500 border-[1px] rounded-md"
                    type="text"
                  />
                  {formikCheckout.errors.district && (
                    <p className="text-[#EE4C4C] text-[12px] font-semibold">
                      {formikCheckout.errors.apartment}
                    </p>
                  )}
                </div>

                <div className="pt-7 *:hover:text-teal-500">
                  <p className="pb-3 text-[#878787]">Order notes (optional)</p>
                  <input
                    className="p-[10px] pb-[60px] w-[100%] hover:border-teal-500 border-[1px] rounded-md"
                    type="text"
                  />
                </div>
              </div>
              <div className="w-[40%] bg-[#F5F5F5] p-[30px] rounded-lg h-fit">
                <h1 className="text-[20px] font-semibold">Таны захиалга</h1>
                <div className="border-[1px] border-solid my-[30px]">
                  <div className="flex *:border-[1px] *:border-solid *:text-[#666] *:flex *:justify-center *:p-[25px]">
                    <div className="w-[30%] flex justify-center items-center">
                      Бараа
                    </div>
                    <div className="w-[70%] flex flex-col justify-center items-center">
                      {wart?.map((product: any, index: any) => (
                        <div key={index} className="flex flex-row items-center">
                          <h1>{product.name} </h1>
                          <IoCloseOutline size={20} color="#14B8A6" />
                          <h1>{product.quantity}</h1>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex *:border-[1px] *:border-solid  *:flex *:justify-center *:p-[25px]">
                    <div className="w-[30%] text-[#666]">Үндсэн үнэ</div>
                    <div className="w-[70%] text-teal-500">${subTotal}.00</div>
                  </div>

                  <div className="flex *:border-[1px] *:border-solid *:flex *:justify-center *:p-[25px]">
                    <div className="w-[30%] text-[#666]">Нийт дүн</div>
                    <div className="w-[70%] text-teal-500">${subTotal}.00</div>
                  </div>
                </div>
                <div>
                  <div className=" border-[1px] border-teal-500 p-[10px] rounded-md  mb-[10px]">
                    QPay
                  </div>
                  <div className=" border-[1px] border-teal-500 p-[10px] rounded-md ">
                    Cash
                  </div>
                </div>
                <div>
                  <p className="text-[#666]  my-[20px]">
                    Your personal data will be used to process your order,
                    support your experience throughout this website, and for
                    other purposes described in our privacy policy
                  </p>
                </div>
                <div className="flex items-center">
                  <Checkbox
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  ></Checkbox>
                  <p className="text-[#666] ">
                    I have read and agree to the website terms and conditions *
                  </p>
                </div>
                <button
                  type="submit"
                  className="text-white  my-[20px] rounded-md w-[100%] py-[15px] font-semibold"
                  disabled={handleButtonEnable()}
                  style={{ backgroundColor: buttonBackgroundColor }}
                >
                  Захиалах
                </button>
              </div>
            </div>
          </form>
        </FormikProvider>
      </div>
    </>
  );
};
