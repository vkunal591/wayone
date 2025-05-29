import React from 'react';
import HeroContact from './components/HeroContact';
import ReachOut from './components/ReachOut';

export default function page() {
    return (
        <div className='bg-white'>
            <div className='max-w-7xl m-auto p-4 lg:p-16'>
                <HeroContact />
                <ReachOut />
            </div>
        </div>
    )
}
