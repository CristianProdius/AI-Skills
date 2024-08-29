import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_5re1guy", // Replace with your EmailJS service ID
          "template_wctk5be", // Replace with your EmailJS template ID
          form.current,
          "kes436w6rIz65sEDf" // Replace with your EmailJS public key
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("Emailul a fost trimis cu Succes!");
            form.current?.reset();
          },
          (error) => {
            console.log(error.text);
            alert("Upsi ceva erori.");
          }
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <section className="bg-[#f9fafe]">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
              Hai să vorbim
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
              Dacă ai întrebări sau vrei să ne spui ceva, scrie-ne un mesaj și
              te vom contacta cât mai curând posibil.
            </p>
            <form ref={form} onSubmit={sendEmail} className="space-y-8">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="ion@gmail.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Subiect
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="Subiectul mesajului"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Mesaj
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="Scrie mesajul tău aici..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-white bg-[#222f5d] rounded-lg hover:bg-[#00c5e7] focus:ring-4 focus:outline-none focus:ring-primary-300"
              >
                Trimite mesajul
              </button>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
