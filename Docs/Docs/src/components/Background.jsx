import React from "react";

function Background() {
  return (
    <>
    <div className="fixed z-[2] w-full h-screen">
    <nav>
        <div className="absolute top-[5%] w-full py-5  flex justify-center text-zinc-600 text-xl">
          Documents
        </div>
      </nav>
      <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] font-poppins leading-none tracking-tighter font-medium text-zinc-900">
        Docs
      </h1>
    </div>
      
    </>
  );
}

export default Background;
