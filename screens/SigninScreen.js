import { useRef } from "react";
import { auth } from "../firebase";
import styles from "../styles/Signin.module.css";

function SigninScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div>
      <form action="" className={styles.forming}>
        <h1 className=" text-3xl font-bold text-green-400 ">Sign In</h1>
        <div>
          <input
            ref={emailRef}
            type="text"
            placeholder="Enter your Email"
            className="py-3 rounded-md w-full pl-3 mt-12 outline-none"
          />
          <input
            ref={passwordRef}
            type="password"
            placeholder="Enter your Password"
            className="py-3 rounded-md w-full pl-3 mt-4 outline-none"
          />
          <button
            className="bg-green-400 text-white text-base font-bold py-4 px-8 rounded-md w-full mt-8"
            onClick={signIn}
          >
            Sign In
          </button>
          <p className="mt-3 text-xs text-white mr-40" onClick={register}>
            New to Hulu?{" "}
            <span className="text-sm text-green-400 font-semibold cursor-pointer">
              Sign Up
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SigninScreen;
