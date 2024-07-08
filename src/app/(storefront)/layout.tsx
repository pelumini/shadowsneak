import React from "react";

const StoreFrontLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="min-h-screen">{children}</div>;
};

export default StoreFrontLayout;
