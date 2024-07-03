import React, { useEffect, useState } from "react";

export const Eyes = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });

  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-speed="-.7" className="relative w-full h-[80vh] bg-cover bg-center bg-[url('https://images.pexels.com/photos/1420701/pexels-photo-1420701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
      {/* https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg */}
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className="flex justify-center items-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
            <div className="relative w-1/2 h-1/2 rounded-full bg-zinc-900">
              <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10">
                <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
            <div className="relative w-1/2 h-1/2 rounded-full bg-zinc-900">
              <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10">
                <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
