import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Experience',
        path: '/experience',
        icon: <FaIcons.FaBriefcase />,
        cName: 'nav-text'
    },
    {
        title: 'Education',
        path: '/education',
        icon: <FaIcons.FaGraduationCap />,
        cName: 'nav-text'
    },
    {
        title: 'Skills',
        path: '/skills',
        icon: <FaIcons.FaTools />,
        cName: 'nav-text'
    },
    {
        title: 'Hobbies',
        path: '/hobbies',
        icon: <FaIcons.FaThumbsUp />,
        cName: 'nav-text'
    },
    {
        title: 'Details',
        path: '/details',
        icon: <FaIcons.FaIdCard />,
        cName: 'nav-text'
    },
]