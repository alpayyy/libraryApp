import DeleteBook from "../BookDelete/BookDelete";

const BookItem = ({ book, onDelete }) => {
    return (
        <div>
            <span>{book.book}</span>
            <DeleteBook onDelete={onDelete} />
        </div>
    );
};

export default BookItem;
