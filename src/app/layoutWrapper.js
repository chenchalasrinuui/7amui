"use client"

import { useSelector } from "react-redux";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Menu } from "@/components/Menu";
import { Loader } from "@/common/reusableComponents/Loader";
import { Toaster } from "@/common/reusableComponents/Toaster";

export const RootLayoutWrapper = ({ children }) => {
  const isLoggedIn = useSelector((state) => state?.appReducer?.isLoggedIn)
  const isShowLoader = useSelector((state) => state?.appReducer?.isShowLoader)
  const { isShowToaster, message, bgColor } = useSelector((state) => state?.appReducer?.toaster)

  return <div>
    <Header />
    {isLoggedIn && <Menu />}
    {children}
    <Footer />
    {isShowLoader && <Loader />}
    {isShowToaster && <Toaster msg={message} bgcolor={bgColor} />}
  </div>
}


