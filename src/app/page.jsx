import Banner from "@/components/Home/Banner";
import { ProductData } from "@/components/Home/Products";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <section>
        <Banner />
      </section>
      <section>
        <ProductData />
      </section>
    </div>
  );
}
