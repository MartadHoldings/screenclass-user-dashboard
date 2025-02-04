"use client";
import { useEffect } from "react";

const BackgroundContainer = ({
  children,
  color,
}: {
  children: React.ReactNode;
  color?: string;
}) => {
  // useEffect(() => {
  //   const bodyColor = color || "#f1f1f1";
  //   document.body.style.backgroundColor = bodyColor;

  //   return () => {
  //     document.body.style.backgroundColor = "";
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return <>{children}</>;
};

export default BackgroundContainer;
