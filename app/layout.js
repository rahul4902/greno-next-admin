import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Providers from "./providers";
export const metadata = {
  title: "Greno - Next.Js Admin Dashboard Template",
  description:
    "Greno - Next JS admin dashboard template is free and available on GitHub. Create your stunning web apps with our Free Next js template. An open-source admin dashboard built using the new router, server components, and everything new in Next.js 13.",
  keywords:
    "Greno, Next.js 13, Admin dashboard, admin template, web apps, bootstrap 5, admin theme",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Providers>
          {children}
          <ToastContainer
            theme="dark"
            position="bottom-center"
            hideProgressBar={true}
            limit={1}
            toastStyle={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            closeButton={false}
          />
        </Providers>
      </body>
    </html>
  );
}
