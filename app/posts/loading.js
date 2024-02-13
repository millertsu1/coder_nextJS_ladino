import Image from "next/image";

const Loading = () =>{
    return(
        <div className=" w-full h-full min-h-screen flex justify-center items-center">
            <Image src={'/FOKIU code-Morado.svg'} alt="logo vercel" width={100} height={100} className="animate-pulse"/>   

        </div>
    )
}
export default Loading