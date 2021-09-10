import React, { useState } from 'react';
import logo from '@Assets/images/logo.png';
import { AlignJustify, X } from 'react-feather';

const Footer = () => {
    const [showSidebar, setShowSidebar] = useState(0);

    return (
        <div class="h-24 z-10 bg-t_lightgray text-gray-700 flex">
            <div class="container max-w-screen-xl flex items-center justify-between">
              footer---
            </div>
        </div>
    )
}

export default Footer