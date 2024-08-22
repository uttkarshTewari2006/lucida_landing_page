"use client";

import { useEffect, useState } from "react";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import app from "./firebase";
import Image from "next/image";

export default function Home() {
  const db = getFirestore(app);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const handleSubmit = async () => {
    try {
      const docRef = await addDoc(collection(db, "signups"), {
        name: name,
        email: email,
        timestamp: new Date(),
      });
      alert("sucessefully signed up for the waitlist! Stay tuned for updates.");
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("There was an error. Please try again.");
    }
  };
  return (
    <div className="w-full h-full flex flex-col items-center justify-between text-black">
      {/* Navbar */}
      <div className="navbar bg-base-100 shadow-lg">
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-xl font-bold">Lucida</a>
        </div>
        <div className="navbar-center hidden lg:flex"></div>
        <div className="navbar-end">
          <button
            onClick={() => document.getElementById("my_modal_3").showModal()}
            className="btn btn-primary"
          >
            Sign up for the waitlist
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://epe.brightspotcdn.com/dd/2d/e84d750c411b8d86b81e946c33df/ai-sel-1634086519.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">What is Lucida?</h1>
            <p className="mb-5">
              In this fast-paced world, it&apos;s easy to lose sight of
              ourselves. Lucida is an innovative and therapeutic chatbot
              designed to promote self-love and assist with various everyday
              dilemmas, struggles, and difficult moments.
            </p>
            <button
              className="btn btn-primary"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="flex flex-col justify-around items-center mx-8 w-full py-12 bg-base-200 border-y-2 border-solid">
        <div className="collapse collapse-arrow bg-orange-200 shadow-md">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-center text-xl font-medium">
            How do I use this chatbot?
          </div>
          <div className="collapse-content text-center">
            <p className="collapse-content text-center">
              This web app is currently in development, but be sure to{" "}
              <a href="#" className="text-primary">
                sign up
              </a>{" "}
              for the waitlist to be the first to know when it&apos;s live!
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-orange-200 shadow-md mt-4">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-center text-xl font-medium">
            Who is this app made for?
          </div>
          <div className="collapse-content text-center">
            <p className="collapse-content text-center">
              Lucida is designed for anyone seeking a supportive companion in
              their daily life. Whether you&apos;re facing tough times or just
              need someone to talk to, Lucida is here to help.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-orange-200 shadow-md mt-4">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-center text-xl font-medium">
            What are some ways this app will be able to help me?
          </div>
          <div className="collapse-content text-center">
            <p>
              Lucida can assist with a variety of needs including AI therapy
              sessions, support for neurodivergent disorders like ADHD, and even
              helping you find purpose and set meaningful goals.
            </p>
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmx8EFp2WQnwCfqop0DHpu1KwkQ9i2vr_YHw&s"
            className="max-w-sm rounded-lg shadow-2xl"
            alt="Lucida chatbot illustration"
          />
          <div>
            <h1 className="text-5xl font-bold">
              No more overpriced therapy sessions
            </h1>
            <p className="py-6">
              With Lucida, you can access quality mental health support without
              breaking the bank. Our chatbot provides effective and accessible
              assistance for anyone in need.
            </p>
            <button
              className="btn btn-primary"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="hero bg-base-200 min-h-screen border-solid border-t-2">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">
              Be the First to Experience Lucida
            </h1>
            <p className="py-6">
              We're excited to bring Lucida to you soon! Sign up for the
              waitlist to be among the first to try our innovative chatbot and
              stay updated on our launch.
            </p>
            <button
              className="btn btn-primary"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg text-center">
            Sign up for the waitlist:
          </h3>
          <div className="flex flex-col items-center justify-around">
            <label className="w-80 m-2 input input-bordered flex items-center gap-2">
              Name
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="grow"
                placeholder="Daisy"
              />
            </label>
            <label className="w-80 m-2 input input-bordered flex items-center gap-2">
              Email
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="grow"
                placeholder="user@gmail.com"
              />
            </label>
            <button onClick={handleSubmit} className="btn btn-accent">
              Submit
            </button>
          </div>
        </div>
      </dialog>

      {/* Footer */}
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>© 2024 Lucida. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="link link-hover">
              Privacy Policy
            </a>
            <a href="#" className="link link-hover">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
