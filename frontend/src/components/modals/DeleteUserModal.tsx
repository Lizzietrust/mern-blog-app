import { FaTimes } from "react-icons/fa";

const DeleteUserModal = ({ setShowDeleteUserModal, handleDeleteAccount }) => {
  return (
    <div
      className="w-full h-screen fixed top-0 left-0 z-20 bg-black bg-opacity-80 flex items-center justify-center"
      onClick={() => setShowDeleteUserModal(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className=" w-full md:w-[400px] h-[200px] bg-white rounded-lg"
      >
        <div className="flex items-center justify-between w-full p-5 border-b border-gray-300">
          <h2 className="font-bold">Delete this account?</h2>
          <FaTimes
            onClick={() => setShowDeleteUserModal(false)}
            className="cursor-pointer text-gray-500 font-bold"
          />
        </div>
        <p className="p-5 text-gray-500">
          Are you sure you want to permanently delete this account?
        </p>
        <div className="w-full h-[47px]  border-t border-gray-300 bg-gray-300 rounded-b-lg">
          <div className="flex items-center justify-end w-full h-full px-5 gap-4">
            <button
              className="bg-gray-200 border border-gray-300 text-sm w-20 h-8 font-semibold rounded-sm text-gray-500"
              onClick={() => setShowDeleteUserModal(false)}
            >
              Cancel
            </button>
            <button
              className="bg-red-700 text-sm w-[120px] h-8 font-semibold rounded-sm text-gray-200"
              onClick={handleDeleteAccount}
            >
              Delete account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteUserModal;
