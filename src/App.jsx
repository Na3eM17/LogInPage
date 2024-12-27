import { useState } from "react";
import "./App.css";
import img from "./images/OIP__2.png";
import ReactCardFlip from "react-card-flip";
import menu from "./images/menue.svg";
import close from "./images/close.svg";
function App() {
  const [count, setCount] = useState(false);
  const [Show, setShow] = useState(true);
  const SignUp = () => {
    setShow(true);
  };
  const ShowMenu = () => {
    setCount(true);
  };
  const HideMenu = () => {
    setCount(false);
  };
  const LogIn = () => {
    setShow(false);
  };
  const ShowMnueItems = () => (
    <div className="menu-container animate-slide-in">
      <div className="absolute top-2 right-3" onClick={() => HideMenu()}>
        <img src={close} alt="Close Menu" width={50} height={50} />
      </div>
      <ul className="flex flex-col justify-center gap-8 text-2xl">
        <li>
          <a
            href="#"
            className="hover:border-b-2 border-solid border-black p-2 hover:text-black text-black"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:border-b-2 border-solid border-black p-2 hover:text-black text-black"
          >
            Blog
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:border-b-2 border-solid border-black p-2 hover:text-black text-black"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:border-b-2 border-solid border-black p-2 hover:text-black text-black"
          >
            About
          </a>
        </li>
      </ul>
    </div>
  );

  const LoginForm = () => (
    <div className="w-full h-[80vh] flex flex-col justify-center items-center">
      <div className="w-[95%] md:w-[30%] h-[50%] flex flex-col justify-center items-center">
        <div className="mb-9 flex items-center justify-center">
          <h1 className="text-5xl ">login</h1>
          <button className="ml-5" onClick={() => SignUp()}>
            siun up
          </button>
        </div>
        <div className="w-full flex justify-center gap-1 mb-6">
          <input
            placeholder="name"
            type="text"
            className="placeholder:text-white hover:bg-[rgba(255,255,255,0.5)] hover:placeholder:text-black pb-1 hover:text-black pl-2 text-xl md:text-2xl bg-inherit w-[50%] border-black border-[2px] border-solid rounded-2xl"
          />
          <input
            placeholder="last name"
            type="text"
            className="placeholder:text-white hover:bg-[rgba(255,255,255,0.5)] hover:placeholder:text-black pb-1 hover:text-black pl-2 text-xl md:text-2xl bg-inherit w-[50%] border-black border-[2px] border-solid rounded-2xl"
          />
        </div>
        <div className="w-full flex flex-col gap-6">
          <input
            placeholder="email"
            type="email"
            className="placeholder:text-white hover:bg-[rgba(255,255,255,0.5)] hover:placeholder:text-black pb-1 hover:text-black pl-2 text-xl md:text-2xl bg-inherit border-black border-[2px] border-solid rounded-2xl"
          />
          <input
            placeholder="password"
            type="password"
            className="placeholder:text-white hover:bg-[rgba(255,255,255,0.5)] hover:placeholder:text-black pb-1 hover:text-black pl-2 text-xl md:text-2xl bg-inherit border-black border-[2px] border-solid rounded-2xl"
          />
          <button className="bg-gray-500 text-xl md:text-3xl pb-1 rounded-3xl">
            submit
          </button>
        </div>
        <div className="flex w-full justify-evenly">
          <div className="text-lg md:text-xl">
            <input
              placeholder="name"
              type="checkbox"
              className="placeholder:text-white hover:bg-slate-500 hover:text-black pl-2 text-5xl bg-inherit border-black "
            />
            chiked
          </div>
          <a href="#" className="text-lg md:text-xl hover:text-white">
            terms and condition
          </a>
        </div>
      </div>
    </div>
  );
  return (
    <>
      {count ? (
        <ShowMnueItems />
      ) : (
        <div className="flex items-center justify-between   mt-8">
          <div className="pl-5">
            <img src={img} alt="bjk" width={100} height={100} />
          </div>
          <div>
            <ul className="md:flex gap-8 text-2xl hidden">
              <li>
                <a
                  href="#"
                  className="hover:border-b-2 border-solid border-white p-2 hover:text-white"
                >
                  home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:border-b-2 border-solid border-white p-2 hover:text-white"
                >
                  blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:border-b-2 border-solid border-white p-2 hover:text-white"
                >
                  servecis
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:border-b-2 border-solid border-white p-2 hover:text-white"
                >
                  about
                </a>
              </li>
            </ul>
          </div>
          <div className="md:flex justify-evenly w-[20%] hidden">
            <button
              onClick={() => SignUp()}
              className="text-2xl bg-gray-900 p-2 px-4 rounded-[100px]"
            >
              sign up
            </button>
            <button
              onClick={() => LogIn()}
              className="text-2xl bg-gray-500 p-2 px-4 rounded-[100px]"
            >
              log in
            </button>
          </div>
          <div className="w-10 h-10 mr-5  md:hidden">
            <img
              onClick={() => ShowMenu()}
              src={menu}
              alt="my image"
              width={100}
              height={100}
            />
          </div>
        </div>
      )}
      <ReactCardFlip flipDirection="horizontal" isFlipped={Show}>
        <LoginForm />
        <div className="w-full h-[80vh] flex flex-col justify-center items-center">
          <div className="w-[95%] md:w-[30%] h-[50%] flex flex-col justify-center items-center">
            <div className="mb-9 flex items-center justify-between ">
              <h1 className="text-5xl ">Sign up</h1>
              <button className="ml-5" onClick={() => LogIn()}>
                login
              </button>
            </div>
            <div className="w-full flex justify-center gap-1 mb-6">
              <input
                placeholder="name"
                type="text"
                className="placeholder:text-white hover:bg-[rgba(255,255,255,0.5)] hover:placeholder:text-black pb-1 hover:text-black pl-2 text-xl md:text-2xl bg-inherit w-[50%] border-black border-[2px] border-solid rounded-2xl"
              />
              <input
                placeholder="last name"
                type="text"
                className="placeholder:text-white hover:bg-[rgba(255,255,255,0.5)] hover:placeholder:text-black pb-1 hover:text-black pl-2 text-xl md:text-2xl bg-inherit w-[50%] border-black border-[2px] border-solid rounded-2xl"
              />
            </div>
            <div className="w-full flex flex-col gap-6">
              <input
                placeholder="email"
                type="email"
                className="placeholder:text-white hover:bg-[rgba(255,255,255,0.5)] hover:placeholder:text-black pb-1 hover:text-black pl-2 text-xl md:text-2xl bg-inherit border-black border-[2px] border-solid rounded-2xl"
              />
              <input
                placeholder="password"
                type="password"
                className="placeholder:text-white hover:bg-[rgba(255,255,255,0.5)] hover:placeholder:text-black pb-1 hover:text-black pl-2 text-xl md:text-2xl bg-inherit border-black border-[2px] border-solid rounded-2xl"
              />
              <button className="bg-gray-500 text-xl md:text-4xl pb-1 rounded-3xl">
                submit
              </button>
            </div>
            <div className="flex w-full justify-evenly">
              <div className="text-lg md:text-xl">
                <input
                  placeholder="name"
                  type="checkbox"
                  className="placeholder:text-white hover:bg-slate-500 hover:text-black pl-2 text-5xl bg-inherit border-black "
                />
                chiked
              </div>
              <a href="#" className="text-lg md:text-xl hover:text-white">
                terms and condition
              </a>
            </div>
          </div>
        </div>
      </ReactCardFlip>
    </>
  );
}

export default App;
