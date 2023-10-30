import React from 'react';
import UserOrderSummaryDetails from './UserOrderSummaryDetails';

const UserOrderSummary = ({open, close, order}) => {
    return (
        <div>
            <dialog className={`${open ? "flex z-50" : "hidden"}`} open={open}>
                <div className='modal-box  max-w-5xl text-green-500 border border-green-600 hidden-scroll'>
                    <div>
                        <div>
                            <UserOrderSummaryDetails order={order} close={close} />
                        </div>
                        <button
                            onClick={() => close()}
                            className='btn btn-sm btn-circle btn-ghost absolute right-0 top-0'
                        >
                            ✕
                        </button>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default UserOrderSummary;