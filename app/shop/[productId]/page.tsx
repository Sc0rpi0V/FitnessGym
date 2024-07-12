export default function Produit({params} : {params: {productId:string}}) {
    // create dynamique page
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <h1 className="text-center text-slate-900 text-4xl my-6">
        PAGE PRODUIT - {params.productId}
      </h1>
    </div>
  );
}
