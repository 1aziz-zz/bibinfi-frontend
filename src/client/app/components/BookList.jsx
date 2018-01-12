import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';


class BookList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			searchTerm = '',
			books = []
		}
		this.onInputChange = this.onInputChange.bind(this);
		
	}
	render() {
		var books = this.props.books.map((book) =>
			<BookTableRows book={book} />
		);
		return (
			<table class="table table-striped table-responsive">
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
		)
	}
}
export default BookList;

class BookTableRows extends React.Component {
	render() {
		
		return (
			<tr>
				<td>{this.props.book.id}</td>
				<td>{this.props.book.authors.join()}</td>
				<td>{this.props.book.title}</td>
				<td>{this.props.book.isbn}</td>
				<td>{this.props.book.year}</td>
			</tr>
		)
	}
}