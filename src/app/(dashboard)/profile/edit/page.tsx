import EditProfile from '@/components/EditProfile'
import { auth } from '@/lib/auth';


const page = async () => {
    const session = await auth();
    //TODO: fetch user from server action and pass his details below
    return <div>
        <EditProfile />
    </div>
};

export default page;