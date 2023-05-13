import { useEffect, useState } from 'react'
import React from 'react'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'
import { useNavigate } from 'react-router-dom'
const ViewWarden = () => {

    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const checkUserToken = () => {
        const userToken = localStorage.getItem('user-token');
        if (userToken === 'adminadmin') {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
            navigate('/');
        }
    }
    useEffect(() => {
        checkUserToken();
    }, [isLoggedIn])
    return (
        <div className='relative'>
            <Navbar />
            <div className='flex space-x-10'>
                <div><SideBar user="Admin" links={[
                    { label: "DashBoard", path: '/admin' },
                    { label: "Authenticate Warden", path: "/admin/approval" },
                    { label: "View Warden Details", path: "/admin/view-warden" },
                    { label: "Enable Room Allocation", path: "/admin/enable-room" },
                    { label: "View Student Details", path: '/admin/view-student' }
                ]} />
                </div>

            </div>
        </div>
    )
}

export default ViewWarden
