import React from 'react'
import SideNav from '../../components/components/SideNav'
import './DashboardLayout.css'

const DashboardLayout = (props) => {
    return (
        <div className='dashboard'>
            <div className='main-section'>
                <div className="left-section">
                    <SideNav />
                </div>
                <div className='right-section'>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout
