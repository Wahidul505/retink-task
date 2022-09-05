import React from 'react';
import Card from '../Components/Card';
import spaceMan from '../images/space_man_landing_page.png';
import '../App.css';

const LandingPage = () => {

    return (
        <div className='h-screen'>
            <div className='grid grid-cols-1 lg:grid-cols-2 h-3/4 w-full bg-gradient-to-b from-pink-500 to-blue-600 p-8 lg:p-28 lg:pb-0 lg:pr-0 relative z-10'>
                <div className=''>
                    <h1 className='text-2xl lg:text-5xl font-semibold mb-7 font-sans text-white'>What are you looking for?</h1>
                    <div className='flex flex-col gap-6'>
                        <Card heading="Help me create a Marketing Plan!" description="The Arctic Ocean freezes every winter and much of the sea-ice than thaws every summer, and that" />
                        <Card heading="I know what I am looking for" description="The Arctic Ocean freezes every winter and much of the sea-ice than thaws every summer, and that" />
                    </div>
                </div>

                {/* floating part  */}
                <div className='lg:flex justify-start items-center  w-full relative text-[#525F7F] hidden -translate-x-20'>
                    <div
                        className='custom-animation w-full grid grid-cols-5'>

                        <div className='col-span-3'>
                            <img src={spaceMan} alt="" className='w-full' />
                        </div>

                        <div className="flex flex-col gap-6 items-center w-full col-span-2">
                            <div className='bg-white w-full p-3 rounded-xl'>
                                <span className='font-semibold'>Hi there!</span> Need help in creating a Marketing plan for your business? I can help you to create one using <span className='font-semibold'>Retink AI Engine</span>
                            </div>
                            <div className='bg-white w-3/4 p-3 rounded-xl'>
                                Click on the options to get started
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <svg className='-translate-y-0.5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgb(37 99 235)" fillOpacity="1" d="M0,160L60,149.3C120,139,240,117,360,96C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
        </div>
    );
};

export default LandingPage;