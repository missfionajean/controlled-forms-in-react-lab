import { useState } from "react";

const Bookshelf = () => {
	// state varaibles
	const [books, setBooks] = useState([]);
	const [newBook, setNewBook] = useState({ title: "", author: "" });

	// handler functions for controlled
	const handleInputChange = (event) => {
		setNewBook({ ...newBook, [event.target.name]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setBooks([...books, newBook]);
		setNewBook({ title: "", author: "" });
	};

	return (
		<div className="bookshelfDiv">
			<div className="formDiv">
				<h2>New Book</h2>
				<form onSubmit={handleSubmit}>
					<label htmlFor="title">Title: </label>
					<input
						name="title"
						id="title"
						value={newBook.title}
						onChange={handleInputChange}
					/>
					<label htmlFor="author">Author: </label>
					<input
						name="author"
						id="author"
						value={newBook.author}
						onChange={handleInputChange}
					/>
					<button type="submit">Add Book</button>
				</form>
			</div>
			<div className="bookCardsDiv">
				{books.map((book, index) => (
					<div className="bookCard" key={index}>
						<h4>{book.title}</h4>
						<p>{book.author}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Bookshelf;
