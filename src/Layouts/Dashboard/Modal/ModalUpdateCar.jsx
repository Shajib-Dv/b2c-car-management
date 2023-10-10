import React from 'react';

const ModalUpdateCar = ({car}) => {
    console.log(car)
    return (
        <div className="modal-box w-full max-w-5xl border border-green-600">
            <h3 className="font-bold text-lg">{car._id}</h3>
            <p className="py-4">Click the button below to close Click the button below to close</p>
            <div className="modal-action">
                <form method="dialog">
                    {/* if there is a button, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
            </div>
        </div>
    );
};

export default ModalUpdateCar;