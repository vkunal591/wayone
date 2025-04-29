import React from 'react';
import HeroContact from './components/HeroContact';
import ReachOut from './components/ReachOut';

export default function page() {
    return (
        <div className=''>
            <div className='max-w-7xl m-auto p-4 lg:px-16'>
                <HeroContact />
                <ReachOut />
            </div>
        </div>
    )
}
