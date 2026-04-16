import localFont from "next/font/local";

export const ppNeueMontreal = localFont({
  src: [
    {
      path: "../../public/fonts/ppNeueMontreal400.woff2",
      weight: "400",
    },
    {
      path: "../../public/fonts/ppNeueMontreal700.woff2",
      weight: "700",
    },
  ],
  variable: "--ff-base",
  display: "swap",
});

export const merchant = localFont({
  src: "../../public/fonts/merchant.woff2",
  variable: "--ff-header",
  weight: "200",
  display: "swap",
});
