import Image from "next/image";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";


import SigninScreen from "../screens/SigninScreen";
import { useState } from "react";

function LoginScreen() {
  const [Signin, setSignin] = useState(false);

  return (
    <div>
      <header className={styles.banner}>
        {Signin ? (
          <SigninScreen />
        ) : (
          <>
            <div className="" onClick={() => setSignin(true)}>
              <h3 className="text-white flex justify-end text-base font-semibold hover:text-gray-300 cursor-pointer">
                LOG IN
              </h3>
            </div>

            <div className={styles.banner_description}>
              <p className="text-green-500 text-xs font-bold">
                BUNDLE WITH ANY HULU PLAN & SAVE
              </p>
              <img loading="lazy" src="/hulu.png" alt="hulu" className="mt-6" />
              <p className="mt-[90px] text-white text-xl font-bold md:text-2xl md:mt-36">
                Get endless entertainment, live sports, and the shows and movies
                you love.
              </p>
              <button className="bg-white mt-6 hover:bg-gray-200 text-black rounded-md py-3 px-10 font-semibold text-base">
                GET THE DISNEY BUNDLE
              </button>
            </div>

            <div className={styles.banner_footer}>
              <img loading="lazy" src="/hululogo.png" alt="" />
              <div className="text-white">
                <p className="text-green-400 text-lg mb-3 font-semibold hidden md:block">
                  TRY UP TO ONE MONTH FREE
                </p>
                <p className="font-bold text-base hidden md:block">
                  Here just for Hulu? Get thousands of TV shows and movies.
                </p>
              </div>
              <button className="text-white border-2 rounded-md p-4 text-sm font-bold ">
                START YOUR FREE TRIAL
              </button>
            </div>
          </>
        )}
      </header>

      <section className="bg-black pb-16">
        {!Signin && (
          <>
            <div className={styles.tv_section}>
              <div className="flex flex-col justify-center items-center text-white py-16">
                <p className="text-green-400 text-xs font-bold">
                  INCLUDED IN ALL PLANS
                </p>
                <h2 className="mt-5 text-5xl font-bold">All The TV You Love</h2>
                <p className="mt-10 text-base font-semibold">
                  Stream full seasons of exclusive series, current-season
                  episodes, hit movies, Hulu Originals, kids shows, and more.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div className={styles.tv_banner}>
                  <img
                    loading="lazy"
                    src="/pic-4.jpg"
                    alt=""
                    className="bg-gradient-to-r from-cyan-500 to-blue-500"
                  />
                  <div className={styles.tv_description}>
                    <p className="text-xs lg:text-base text-white font-semibold">
                      Past & Current Seasons
                    </p>
                    <p className="text-base lg:text-2xl text-white font-bold">
                      TV Shows
                    </p>
                  </div>
                </div>
                <div className={styles.tv_banner}>
                  <img loading="lazy" src="/pic-3.jpg" alt="" />
                  <div className={styles.tv_description}>
                    <p className="text-xs lg:text-base text-white font-semibold">
                      New & Classic
                    </p>
                    <p className="text-base lg:text-2xl text-white font-bold">
                      Movies
                    </p>
                  </div>
                </div>
                <div className={styles.tv_banner}>
                  <img loading="lazy" src="/pic-2.jpg" alt="" />
                  <div className={styles.tv_description}>
                    <p className="text-xs lg:text-base text-white font-semibold">
                      Groundbreaking
                    </p>
                    <p className="text-base lg:text-2xl text-white font-bold">
                      Hulu Originals
                    </p>
                  </div>
                </div>
                <div className={styles.tv_banner}>
                  <img loading="lazy" src="/pic-1.jpg" alt="" />
                  <div className={styles.tv_description}>
                    <p className="text-xs lg:text-base text-white font-semibold">
                      Add-on
                    </p>
                    <p className="text-base lg:text-2xl text-white font-bold">
                      Primiums
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </section>

      {!Signin && <Footer />}
    </div>
  );
}

export default LoginScreen;
