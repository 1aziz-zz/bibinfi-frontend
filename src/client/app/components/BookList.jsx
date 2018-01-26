import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import PopoutWindow from 'react-popout'


class BookList extends React.Component {

	constructor(props) {
		super(props);		
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
		<Book book={this.props.book} />		
		return (
			<tr>
				<Link to='/book'><td  width="100%">{this.props.book.id}</td></Link>
				<td>{this.props.book.authors.join()}</td>
				<td>{this.props.book.title}</td>
				<td>{this.props.book.isbn}</td>
				<td>{this.props.book.year}</td>
			</tr>
		)
	}
}
class Book extends React.Component {
	constructor(props) {
		super(props);
		this.popout = this.popout.bind(this);
		this.popoutCloused = this.popoutCloused.bind(this);
		this.state = { isPoppedOut: false };
	}
	popout() {
		this.setState({isPoppedOut: true});
	  }
	
	  popoutClosed() {
		this.setState({isPoppedOut: false});
	  }
	render() {
		if (this.state.isPoppedOut) {
			return (
			  <Popout url='popout.html' title='Window title' onClosing={this.popoutClosed}>
				<div><h2>{book.title}</h2></div>
			  </Popout>
			);
		  } else {
			var popout = <span onClick={this.popout} className="buttonGlyphicon glyphicon glyphicon-export"></span>
			return (
			  <div>
				<strong>Section {popout}</strong>
				<div>Inline content</div>
			  </div>
			);
		  }
	}
}