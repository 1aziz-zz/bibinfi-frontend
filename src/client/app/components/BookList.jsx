import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';

 class BookList extends React.Component {
	render() {
		var books = this.props.books.map((book) =>
			<BookTableRows book={book} />
		);
		return (
			<div class="row">			
			<table class="table table-striped">
				<tbody>
					<tr>
						<th scope="col">ID</th>
						<th scope="col">Authors</th>
						<th scope="col">Title</th>
						<th scope="col">ISBN</th>
						<th scope="col">Year</th>
					</tr>
					{books}
				</tbody>
			</table>
			</div>
		)
	}
}
export default BookList;

class BookTableRows extends React.Component {
	render() {
		
		return (
			<tr>
				<td>{this.props.book.id}</td>
				<td>{this.props.book.authors}</td>
				<td>{this.props.book.title}</td>
				<td>{this.props.book.isbn}</td>
				<td>{this.props.book.year}</td>
			</tr>
		)
	}
}