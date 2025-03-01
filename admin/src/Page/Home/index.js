import React, { useEffect, useState } from 'react'
import SideBar from './SideBar'
import Body from './Body'
import { useNavigate } from 'react-router-dom'
import Header from './Header'

const Home = () => {
    const [tab, setTab] = useState(1)
    const navigate = useNavigate()

    useEffect(() => {
        const userId = localStorage.getItem("userId")
        if (!userId) navigate('/login')
    }, [])

    return (<
        div className='flex flex-col mobile:gap-4 gap-6 w-full h-full' >
        <
            Header />
        <
        div className='flex w-full mobile:px-0 mobile:gap-2 gap-6 px-4 h-full' >
            <
                SideBar setTab={setTab}
                tab={tab}
            /> <
                Body tab={tab}
            /> < /
        div > <
        /div>
            )
}

            export default Home