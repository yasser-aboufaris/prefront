import axios from "axios";

function DeleteButton({ id, onDelete }) {
    const handleDelete = () => {
        axios.delete(`http://peapini-re.test/api/plantes/${id}`)
            .then(() => {
                if (onDelete) onDelete(id);
            })
            .catch((error) => {
                console.error("Delete failed:", error);
            });
    };

    return (
        <button
            onClick={handleDelete}
            className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
        >
            Delete
        </button>
    );
}

export default DeleteButton;
