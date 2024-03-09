import React from "react";
import marco from "../../Assest/marco.png";
import jen from "../../Assest/jen.png";

const Principal = () => {
    return (
        <>
            <div className=" h-screen w-screen overflow-hidden bg-[#2B2B29] border-white">
                <img alt="Marco" src={marco.src} className="md:hidden w-screen " />
                <div className="md:h-30 min-[800px]:hidden bg-[#f3f1f1]"></div>
                <img alt="jen" src={jen.src} className=" absolute left-[50%] top-[300px] md:left-[20%] md:static mx-auto" />

                <div className="text-center md:text-[40px] xl:left-[-20px] xl:text-[40px]  md:left-[0] md:w-screen p-6  md:static left-[20%] top-[40%] w-[619px] h-[250px] text-white text-[64px] font-sans">
                    <p> Jenny Katherine Arevalo Rivera </p>
                    <p>Desarrolladora Web</p>
                </div>
            </div>
        </>
    )
}

export default Principal;