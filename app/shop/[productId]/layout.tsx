export default function ProductLayout({children}: {
    children : React.ReactNode
}) {

    return (
        <>
        <h2>Je suis rajouter depuis le layout products</h2>
        {children}
        </>
    )

}