import Image from "next/image";

export default function Docs({params} : {
    params: {
        slug: string[]
    } 
}) {

    if(params.slug?.length === 2) {
        return <h2>Slug 1 : {params.slug[0]} et slug 2 : {params.slug[1]}</h2>
    } else if (params.slug?.length === 1) {
        return <h2>Slug 1 : {params.slug[0]}</h2>
    }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <h1 className="text-center text-slate-900 text-4xl my-6">
        PAGE DOCS
      </h1>
    </div>
  );
}
