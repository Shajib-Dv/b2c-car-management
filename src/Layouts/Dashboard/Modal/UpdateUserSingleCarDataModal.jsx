import React from 'react';
import UserUpdateCar from './UserUpdateCar';

const UpdateUserSingleCarDataModal = ({ open, close, car , refetch }) => {
    return (
        <div>
            <dialog className={`${open ? "flex z-50" : "hidden"}`} open={open}>
                <div className='modal-box  max-w-5xl text-green-500 border border-green-600 hidden-scroll'>
                    <div>
                        <div>
                            <UserUpdateCar car={car} refetch={refetch} close={close} />
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

export default UpdateUserSingleCarDataModal;