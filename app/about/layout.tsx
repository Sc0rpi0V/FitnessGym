import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Page About",
    description: "Decsription About",
  };

export default function ProductLayout({children}: {
    children : React.ReactNode
}) {

    return (
        <>
        <h2>Je suis rajouter depuis le layout de about</h2>
        {children}
        </>
    )

}