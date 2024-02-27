// import React from 'react'
import SideBar from "../partials/sidebar/SideBar"

function SettingPage() {
    return (
        <>
            <div className="bg-base-color flex flex-row">
                <SideBar />
                <div className="flex flex-col flex-1 items-center justify-center">
                    <h1 className="text-3xl font-bold">
                        Setting Page
                    </h1>
                </div>
            </div>
        </>
    )
}

export default SettingPage
