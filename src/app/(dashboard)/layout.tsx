import Navbar from "@/components/Navbar";
import { auth } from "@/lib/auth";


const RootLayout = async ({children} : {children: React.ReactNode}) => {
    const session = await auth();
    return (
        <div>
            <Navbar session={session}/>
            {children}
        </div>
    )
}

export default RootLayout