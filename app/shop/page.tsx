import Link from "next/link";

export default function Shop() {

  const productId = 77;

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <h1 className="text-center text-slate-900 text-4xl my-6">
        PAGE SHOP
      </h1>

      <ul>
        <li>
          <Link href="/shop/1">Produit 1</Link>
        </li>
        <li>
          <Link href="/shop/2">Produit 2</Link>
        </li>
        <li>
          <Link href={`/shop/${productId}`}>Produit {productId}</Link>
        </li>
        <li>
          <Link href="/shop/3" replace>Produit 3</Link>
        </li>
        <li>
          <Link href="/shop/4" passHref>Produit 4</Link>
        </li>
        <li>
          <Link href="/shop/5" prefetch>Produit 5</Link>
        </li>
      </ul>
    </div>
  );
}
