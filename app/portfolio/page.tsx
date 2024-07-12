import Link from "next/link";

export default function Portfolio() {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <h1 className="text-center text-slate-900 text-4xl my-6">
        PAGE PORTFOLIO
      </h1>
      <ul className="flex flex-col gap-5">
        <li>
          <Link href="/portfolio/webdesign">Webdesign</Link>
          <Link href="/portfolio/design">Design</Link>
        </li>
      </ul>
    </div>
  );
}
