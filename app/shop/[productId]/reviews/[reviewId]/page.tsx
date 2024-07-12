import { notFound } from "next/navigation";

function getNb(count: number) {
  return Math.floor(Math.random() * count);
}

export default function Reviews({params} : {
    params: {
        productId: string;
        reviewId: string;
    } 
}) {
  
if(parseInt(params.reviewId) > 1000) {
  notFound();
}

const random = getNb(2);

if(random === 1) {
  throw new Error('Il y a une erreur dans product')
}

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <h1 className="text-center text-slate-900 text-4xl my-6">
        REVIEW de {params.reviewId} du produit {params.productId}
      </h1>
    </div>

  );
}
