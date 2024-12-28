import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-full h-screen bg-black flex flex-col">
        <div id="header" className="w-full flex">
        <div
          id="left"
          className="w-1/2 h-screen flex justify-center items-center"
        >
          <div
            style={{ width: "500px", height: "500px" }}
            className="flex justify-center items-center"
          >
            <img
              src="/public/twitter.svg"
              alt=""
              style={{ width: "330px", height: "330px" }}
            />
          </div>
        </div>
        <div id="right" className="w-1/2 h-screen ">
          <div
            id="rightContent"
            style={{ width: "500px", height: "700px" }}
            className="px-20 py-20"
           >
            <div
              id="headings"
              className="flex flex-col justify-between"
              style={{ width: "600px", height: "170px" }}
            >
              <h1 className="text-white text-7xl font-bold">Happening now</h1>
              <h1 className="text-white text-4xl font-bold">Join today.</h1>
            </div>
            <div
              id="buttons"
              className="flex flex-col gap-2 mt-10"
              style={{ width: "330px", height: "300px" }}
             >
              <button
                className="bg-white rounded-3xl font-medium flex justify-center items-center gap-2"
                style={{ width: "330px", height: "40px" }}
              >
                {" "}
                <img
                  src="/public/google.png"
                  alt=""
                  style={{ width: "25px", height: "25px" }}
                />{" "}
                Sign up with Google
              </button>
              <button
                className="bg-white rounded-3xl font-bold flex justify-center items-center gap-2"
                style={{ width: "330px", height: "40px" }}
              >
                {" "}
                <img
                  src="/public/apple.png"
                  alt=""
                  style={{ width: "30px", height: "30px" }}
                />{" "}
                Sign up with Apple
              </button>
              <div class="flex items-center">
                <div class="flex-grow border-t border-gray-400"></div>
                <span class="mx-4 text-gray-500">or</span>
                <div class="flex-grow border-t border-gray-400"></div>
              </div>

              <button
                className="text-white rounded-3xl font-bold flex justify-center items-center"
                style={{
                  width: "330px",
                  height: "40px",
                  backgroundColor: "rgb(29,155,240)",
                }}
              >
                Create Account
              </button>
              <p className="text-[rgb(113,118,123)] text-xs">
                By signing up, you agree to the{" "}
                <a
                  href="https://x.com/en/tos"
                  className="text-[rgba(29,155,240,1)] hover:underline"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="https://x.com/en/privacy"
                  className="text-[rgba(29,155,240,1)] hover:underline"
                >
                  Privacy Policy
                </a>
                , including{" "}
                <a
                  href="https://help.x.com/en/rules-and-policies/x-cookies"
                  className="text-[rgba(29,155,240,1)] hover:underline"
                >
                  Cookie Use.
                </a>
              </p>
            </div>
            <div id="Account" className="flex flex-col justify-space gap-3">
                <h1 className="text-white text-xl font-semibold">Already have an account?</h1>
                <button
                className="border border-[rgba(29,155,240,0.3)] text-[rgba(29,155,240,1)] rounded-3xl font-bold flex justify-center items-center"
                style={{
                  width: "330px",
                  height: "40px",
                  
                }}
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
        </div>
        <div id="footer">
          <div id="anchor" className="w-full p-2 bg-black">
            <ul className="text-sm flex justify-center gap-6 items-center text-[rgb(113,118,123)]">
              <li><a href="https://about.x.com/en" className="hover:underline">About</a></li>
              <li><a href="https://help.x.com/en/using-x/download-the-x-app"className="hover:underline">Download the X app</a></li>
              <li><a href="https://help.x.com/en" className="hover:underline">Help Center</a></li>
              <li><a href="https://x.com/en/tos" className="hover:underline">Terms of Service</a></li>
              <li><a href="https://x.com/en/privacy" className="hover:underline">Privacy Policy</a></li>
              <li><a href="https://help.x.com/en/rules-and-policies/x-cookies" className="hover:underline">Cookie Policy</a></li>
              <li><a href="https://help.x.com/en/resources/accessibility" className="hover:underline"></a>Accessibility</li>
              <li><a href="https://business.x.com/en/help/troubleshooting/how-x-ads-work" className="hover:underline">Ads info</a></li>
              <li><a href="https://blog.x.com/" className="hover:underline">Blog</a></li>
              <li><a href="https://careers.x.com/en" className="hover:underline">Careers</a></li>
              <li><a href="" className="hover:underline">Brand Resources</a></li>
              <li><a href="https://about.x.com/en/who-we-are/brand-toolkit" className="hover:underline">Advertising</a></li>
              <li><a href="https://business.x.com/en/advertising?ref=gl-tw-tw-twitter-advertise" className="hover:underline">Marketing</a></li>
              <li><a href="https://business.x.com/en?ref=web-twc-ao-gbl-twitterforbusiness" className="hover:underline">X for Business</a></li>
              <li><a href="https://developer.x.com/en" className="hover:underline">Developers</a></li>
              <li><a href="https://x.com/i/directory/profiles" className="hover:underline">Directory</a></li>
              <li><a href="https://x.com/settings" className="hover:underline">Settings</a></li>
            </ul>
            <ul className="text-sm flex justify-center items-center text-[rgb(113,118,123)] mt-2">
              <li>© 2024 X Corp.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
