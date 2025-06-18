// eslint-disable-next-line react/prop-types
const DeletePopup = ({onConfirm, onCancel}) => {
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-bold mb-4">Are you sure?</h2>
          <p className="mb-6">
            Do you really want to delete this post? This action cannot be
            undone.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={onConfirm}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Delete
            </button>
            <button
              onClick={onCancel}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeletePopup;
