import React, { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import SideNav from '../components/SideNav';

const PublicRoutes = (props) => {
    const pathArrayStudent = [
        {
            path: "/dashboard",
            //   component: <SignIn />
        },
        {
            path: "/profile",
            //   component: <ForgotPassword />
        },
        {
            path: "/jobs",
            //   component: <ResetPassword />
        },
        {
            path: "/resume",
            // component: <ResetPassword />
        },
        {
            path: "/placement-policy",
            //   component: <SignIn />
        },

        {
            path: "/job/:id",
            //   component: <ResetPassword />
        },
        {
            path: "/logout",
            //   component: <ForgotPassword />
        }
    ];
    const pathArrayAdmin = [
        {
            path: "/dashboard",
            //   component: <SignIn />
        },
        {
            path: "/status",
            //   component: <ForgotPassword />
        },
        {
            path: "/status/third-year",
            //   component: <ForgotPassword />
        },
        {
            path: "/status/fourth-year",
            //   component: <ResetPassword />
        },
        {
            path: "/placement-policy",
            //   component: <SignIn />
        },
        {
            path: "/job/:id",
            //   component: <ResetPassword />
        },
        {
            path: "/job/create",
            //   component: <ResetPassword />
        },
        {
            path: "/logout",
            //   component: <ForgotPassword />
        }
    ];
    const pathArraySuperAdmin = [
        {
            path: "/dashboard",
            //   component: <SignIn />
        },
        {
            path: "/status",
            //   component: <ForgotPassword />
        },
        {
            path: "/status/third-year",
            //   component: <ForgotPassword />
        },
        {
            path: "/status/fourth-year",
            //   component: <ResetPassword />
        },
        {
            path: "/placement-policy",
            //   component: <SignIn />
        },
        {
            path: "/job/:id",
            //   component: <ResetPassword />
        },
        {
            path: "/job/create",
            //   component: <ResetPassword />
        },
        {
            path: "/register",
            // component: </>
        },
        {
            path: "/logout",
            //   component: <ForgotPassword />
        }
    ];
    return (
        <>
        <SideNav />
            <Routes>
                {
                    props.role === 1 ?
                        (pathArrayStudent.map((path) => {
                            <Route exact path={path.path} element={path.component} />
                        }))
                        :
                        (props.role === 2 ?
                            (pathArrayAdmin.map((path) => {
                                <Route exact path={path.path} element={path.component} />
                            }))
                            :
                            (pathArraySuperAdmin.map((path) => {
                                <Route exact path={path.path} element={path.component} />
                            })))
                }
                <Route exact path='*' element={<Navigate to='/student/login' />} />
            </Routes>
        </>
    )
}

export default PublicRoutes
