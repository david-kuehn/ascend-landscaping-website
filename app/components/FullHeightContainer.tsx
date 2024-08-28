import { ReactNode } from "react";

export default function FullHeightContainer({ children }: { children: ReactNode}) {
  return (
    <div className="flex flex-col min-h-screen">
    {children}
    </div>
    )
}
