import React from "react";
import { EmailForm } from "@/components/email-form";
import { Check } from "lucide-react";
import ItemList from "@/components/ui/item-list";
import Image from "next/image";

const HomePage = () => {
  return (
    <div>
      <div className="min-h-screen bg-[#36384D] grid place-content-start md:place-content-center">
        <article className="grid grid-cols-1 md:grid-cols-2 bg-white md:max-w-[650px] md:max-h-[700px] items-center md:p-8 rounded-3xl">
          <section className="space-y-4 p-4 order-last">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-500 bg-clip-text text-transparent">
              Stay update!
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              porro.
            </p>
            <ul className="flex flex-col gap-4">
              <ItemList>Lorem ipsum dolor sit amet.</ItemList>
              <ItemList>Lorem ipsum dolor sit amet.</ItemList>
              <ItemList>Lorem ipsum dolor sit amet.</ItemList>
            </ul>
            <EmailForm />
          </section>
          <section className="md:order-last hidden md:block">
            <Image
              src={"/img-desktop.svg"}
              alt=""
              width="500"
              height="500"
              className="object-cover w-full"
            />
          </section>
          <section className="md:order-last block md:hidden">
            <Image
              src={"/mobile.svg"}
              alt=""
              width="500"
              height="500"
              className="object-cover w-full"
            />
          </section>
        </article>
      </div>
    </div>
  );
};

export default HomePage;
