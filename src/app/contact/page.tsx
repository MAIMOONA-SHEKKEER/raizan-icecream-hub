"use client";
import Button from "@/components/common/Button";

import { useState } from "react";
import Container from "@/components/common/Container";
import PageHero from "@/components/common/PageHero";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleWhatsAppRedirect = () => {
    const phone = "917012420156";

    const text = `Hello Raizan Ice Cream Hub! 🍨

I'm interested in GLAZE products.

Name: ${name}
Email: ${email}
Message: ${message}`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <PageHero
        badge="Contact Us"
        title="Let’s Build Something Sweet Together"
        description="Whether you want to ask about GLAZE, partnerships, collaborations, or future launches, we’d love to hear from you."
      />

      <section className="py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <div className="rounded-[2rem] border border-pink-100 bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-zinc-900">
                  Get in Touch
                </h2>

                <div className="mt-6 space-y-4 text-zinc-600">
                  <p>
                    <span className="font-semibold text-zinc-900">Email:</span>{" "}
                    hello@raizanicecreamhub.com
                  </p>
                  <p>
                    <span className="font-semibold text-zinc-900">Phone:</span>{" "}
                    +91 70124 20156
                  </p>
                  <p>
                    <span className="font-semibold text-zinc-900">
                      Location:
                    </span>{" "}
                    Kerala, India
                  </p>
                </div>
              </div>

              <div className="mt-6 overflow-hidden rounded-[2rem] border border-pink-100 shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!4v1775926146439!6m8!1m7!1s1r5P5nFq24q8DXMPULRY0Q!2m2!1d12.42884263785744!2d75.07200143456504!3f304.2537634083521!4f1.3328190168839171!5f0.7820865974627469"
                  width="1200"
                  height="450"
                  allowFullScreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="rounded-[2rem] border border-pink-100 bg-pink-50 p-8">
              <h2 className="text-2xl font-bold text-zinc-900">
                Send a Message
              </h2>

              <div className="mt-6 space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-medium text-zinc-700">
                    Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 outline-none transition focus:border-pink-400"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-zinc-700">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 outline-none transition focus:border-pink-400"
                    placeholder="Your email"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-zinc-700">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 outline-none transition focus:border-pink-400"
                    placeholder="Write your message..."
                  />
                </div>

                <Button
                  type="button"
                  href="/contact"
                  variant="secondary"
                  onClick={handleWhatsAppRedirect}
                >
                  Send WhatsApp Message
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
