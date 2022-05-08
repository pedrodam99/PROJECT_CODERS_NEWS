import { useRouter } from "next/router";
import { useCallback } from "react";

export default function Layout({ children, title }){
    const router = useRouter();

    const handleLogoClick = useCallback(() => {
        router.push(`/`)
    }, [])

    return (
        <div className="h-full min-h-screen relative">
            <div className="w-full h-60 bg-black rounded-b-[6.25em] pt-11 px-32 flex justify-center items-center text-center">
               <img src="/logo.png" alt="Logo" onClick={handleLogoClick} className="w-36 h-14 absolute left-[10%] top-10 cursor-pointer" />
                <h1 className="text-white text-4xl w-8/12">{title}</h1>
            </div>

            {children}
            <div className="pb-40"></div>
            <footer className="w-full h-28 absolute bottom-0 bg-black flex justify-center items-center">
                <div className="w-4/5 h-4/5 flex items-center">
                    <hr className="w-full border-t border-[#ff2147]"/>
                    <h3 className="text-white"> Copyright Coders Club © 2022 Todos os direitos reservados. </h3>
                </div>
            </footer>
        </div>
    )
}