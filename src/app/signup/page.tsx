"use client";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/config";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onFinish = (e: any) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        window.localStorage.setItem("user", JSON.stringify(user));
        setEmail("");
        setPassword("");
        router.push("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        alert(errorMessage);
      });
  };

  return (
    <>
      <div className="flex items-center gap-[110px] bg-[#060B26]">
        <div>
          <img
            className="w-[750px] h-[730px]"
            src="/Image.png"
            alt="rasm"
            width={700}
            height={600}
          />
        </div>
        <div>
          <div
            style={{ background: "#060B26", height: "100vh" }}
            className="flex flex-col items-center justify-center text-white"
          >
            <div className="text-white mb-[50px] text-center">
              <h2 className="text-3xl mb-2">Welcome, New User!</h2>
              <p className="text-[#a1a0a0]">
                Enter your email, username, and password to sign up
              </p>
            </div>
            <form
              onSubmit={onFinish}
              style={{
                width: "350px",
                borderRadius: "15px",
                padding: "20px",
                paddingTop: "25px",
              }}
              className="flex flex-col gap-5 items-center justify-center shadow-[0_2px_15px_0_rgba(255,0,255)]"
            >
              <h2 className="text-3xl font-bold mb-2">New User!</h2>

              <label className="input input-bordered flex items-center gap-2 w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="black"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="text"
                  className="grow text-black"
                  placeholder="Email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2 text-black w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="password"
                  className="grow text-black"
                  placeholder="Password"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <button type="submit" className="btn w-full btn-primary">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
