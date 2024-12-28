import React, { useRef } from "react";
import Card from "./Card";

function Foreground() {
  /*
         icon , description , fileSize , closeOrDownload , tagDetails
        */
    const ref = useRef(null);
  const data = [
    {
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      filesize: ".8mb",
      close: false,
      tag: {
        isOpened: true,
        tagTitle: "Download Now",
        tagColor: "#FF8383",
      },
    },
    {
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      filesize: ".8mb",
      close: false,
      tag: {
        isOpened: true,
        tagTitle: "Download Now",
        tagColor: "#5CB338",
      },
    },
    {
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      filesize: ".8mb",
      close: false,
      tag: {
        isOpened: true,
        tagTitle: "Download Now",
        tagColor: "#FFB26F",
      },
    },
    {
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      filesize: ".8mb",
      close: false,
      tag: {
        isOpened: true,
        tagTitle: "Download Now",
        tagColor: "#F5004F",
      },
    },
  ];

  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full p-5 flex gap-10 flex-wrap ">
        {data.map((item,index)=>(
            <Card data={item} reference={ref}/>
        ))}
      
    </div>
  );
}

export default Foreground;
