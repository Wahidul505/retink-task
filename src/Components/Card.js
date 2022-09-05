import React from 'react';

const Card = ({ heading, description }) => {
    return (
        <div className='bg-white rounded-xl p-3 lg:p-5 flex items-start w-full lg:w-3/4 gap-3 lg:gap-4'>
            <div className='pt-2'>
                <div className='rounded-full bg-[#f5365c4a] p-3 w-fit'>
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.7354 5.23008L10.1354 0.750078C10.0496 0.710078 9.95042 0.710078 9.86466 0.750078L0.264657 5.23008C0.152017 5.28256 0.0800171 5.39552 0.0800171 5.52C0.0800171 5.64448 0.152017 5.75744 0.264657 5.80992L9.86466 10.2899C9.90754 10.3101 9.95362 10.32 10 10.32C10.0464 10.32 10.0925 10.3101 10.1354 10.2899L13.52 8.7104V16.9376L11.9795 19.0941C11.9101 19.1917 11.9005 19.3197 11.9555 19.4266C12.0103 19.5331 12.12 19.6 12.24 19.6H15.44C15.56 19.6 15.6698 19.5331 15.7245 19.4266C15.7792 19.3197 15.7699 19.1917 15.7005 19.0941L14.16 16.9376V8.41184L19.7354 5.80992C19.848 5.75744 19.92 5.64448 19.92 5.52C19.92 5.39552 19.848 5.28256 19.7354 5.23008Z" fill="#F5365C" />
                        <path d="M12.88 9.71552L10.4061 10.8701C10.28 10.9286 10.1395 10.96 10 10.96C9.86051 10.96 9.72003 10.9286 9.59363 10.8701L3.28003 7.92352V13.2C3.28003 14.9942 6.23171 16.4 10 16.4C11.0381 16.4 12.0106 16.2902 12.88 16.0979V9.71552Z" fill="#F5365C" />
                        <path d="M14.8 8.81952V15.4589C15.9923 14.8842 16.72 14.0902 16.72 13.2V7.9232L14.8 8.81952Z" fill="#F5365C" />
                    </svg>
                </div>
            </div>
            <div>
                <h2 className='text-base lg:text-lg font-semibold mb-2'>{heading}</h2>
                <p title={description} className='text-[#525F7F] text-sm leading-6'>{description?.length > 95 ? description?.slice(0, 95) : description}</p>
            </div>
        </div>
    );
};

export default Card;