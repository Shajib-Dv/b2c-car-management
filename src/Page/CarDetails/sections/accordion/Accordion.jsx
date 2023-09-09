import React from 'react';
import { Collapse } from 'react-collapse';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';

const Accordion = ({open, toggle, title, des, img, des1}) => {
    return (
        <div>
            <div className='flex items-center justify-between text-2xl font-bold' onClick={toggle}>
                <p>{title}</p>
                <div className='text-green-600'>
                    {open ? <AiOutlineMinusCircle/> : <AiOutlinePlusCircle/> }
                </div>
            </div>

            <Collapse isOpened={open}>
                <div className='flex flex-col gap-2'>
                    <p>{des1}</p>
                    <img className='w-full' src={img} alt="" />
                    <p>{des}</p>

                </div>
            </Collapse>
        </div>
    );
};

export default Accordion;