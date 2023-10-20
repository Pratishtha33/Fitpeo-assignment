import React, { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import Slogin from '../Routes/Slogin';
import Sregister from '../Routes/Sregister';
import Tlogin from '../Routes/Tlogin';

const PublicRoutes = (props) => {
    const pathArray = [
        {
            path: "/student/login",
              component: <Slogin />
        },
        {
            path: "/student/forgot",
            //   component: <ForgotPassword />
        },
        {
            path: "/student/reset",
            //   component: <ResetPassword />
        },
        {
            path: "/student/register",
            component: <Sregister />
        },
        {
            path: "/admin/login",
              component: <Tlogin />
        },
        {
            path: "/admin/forgot",
            //   component: <ForgotPassword />
        },
        {
            path: "/admin/reset",
            //   component: <ResetPassword />
        }
    ];
    return (
        <>
            <Routes>
                {
                    pathArray.map((path) => {
                        <Route exact path={path.path} element={path.component} />
                    })
                }
                <Route exact path='*' element={<Navigate to='/student/login' />} />
            </Routes>
        </>
    )
}

export default PublicRoutes
