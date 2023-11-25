import React from "react";
import { EmailForm } from "@/components/email-form";

const HomePage = () => {
  return (
    <div>
      <div className="min-h-screen bg-red-400 grid place-content-center">
        <article className="grid grid-cols-1 md:grid-cols-2 w-full">
          <section>
            <h1 className="text-3xl font-bold">Stay update!</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              porro.
            </p>
            <ul>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
            </ul>
            <EmailForm />
          </section>
          <section className="bg-gray-800 text-white">2</section>
        </article>
      </div>
    </div>
  );
};

export default HomePage;
