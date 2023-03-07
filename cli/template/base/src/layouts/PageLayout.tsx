import { type ReactElement } from "react";
import TopNav from "./components/TopNav";

type Props = { children: ReactElement };

export default function PageLayout({ children }: Props) {
  return (
    <>
      <TopNav />
      {children}
    </>
  );
}
