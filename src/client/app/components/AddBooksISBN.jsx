import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import axios from 'axios';

class AddBooksISBN extends React.Component {

    constructor(props) {
        super(props);
        //this.state={inputfield: "no value"};   
        this.handleClick = this.handleClick.bind(this);
        this.updateInputValue = this.updateInputValue.bind(this);
      }
    

	addBook(isbn) {
        var isbnList = [];
        isbnList.push(isbn);
        console.log(isbnList)
            axios.post('http://localhost:9000/books/add', 
                isbnList,
                {headers: {"Content-Type": "application/json"}}
                
              )
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
	}
    handleClick(){
        this.addBook(this.state.inputfield);
     
       }
     
       updateInputValue(evt){
         //console.log("input field updated with "+evt.target.value);
         this.state={inputfield: evt.target.value};   
     
       }
    render() {
        var r; 
         r = <div class="modal fade" id="declineModal"  role="dialog" aria-hidden="true">
         <div class="modal-dialog">
             <div class="modal-content">
                     <div class="modal-body">
                         <textarea placeholder="Please enter a valid ISBN" onChange={this.updateInputValue} class="form-control col-xs-12"></textarea>
                     </div>
                     <div class="modal-footer">
                     <input type="button" class="btn btn-secondary" value="Add" id="addBook" onClick={this.handleClick}/>
                     </div>
             </div>
         </div>
     </div>;
         return r;
        }
    }

      

export default AddBooksISBN; 