import * as Yup from "yup";

export interface FromValues {
  district: string | null;
  khoroo: string | null;
  apartment: string | null;
}

export const validationSchema = Yup.object().shape({
  district: Yup.string().required("Дүүргээ оруулна уу *"),
  khoroo: Yup.string().required("Хороогоо оруулна уу *"),
  apartment: Yup.string().required("Байраа оруулна уу *"),
});
