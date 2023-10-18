import UpdateCarData from "./UpdateCarData";

const UpdateSingleCarDataModal = ({ open, close ,car}) => {
  
  return (
    <div>
      <dialog className={`${open ? "flex z-50" : "hidden"}`} open={open}>
        <div className='modal-box  max-w-5xl text-green-500 border border-green-600 hidden-scroll'>
          <div>
            <div>
                <UpdateCarData car={car} />
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

export default UpdateSingleCarDataModal;
