import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    
  {
    title: 'Home',
    path: '/dashboard',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Custormers ',
    path: '/user',
    icon: < IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Drivers',
    path: '/driver',
    icon: < IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Branches ',
    path: '/kandy',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Booking',
    path: '/bkandy',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Place Details',
    path: '/dkandy',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  }
];