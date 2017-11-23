import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class BookDetails extends Component {

    render() {
      let bookDetails = ""
      if (!this.props.book){

        bookDetails = (
          <div className="book-details">
            <h4>Select a book to see the details ...</h4>
          </div>
        )

      } else {

        bookDetails = (
          <div className="book-details">
            <h4>{this.props.book.title}</h4>
            <p>Author : {this.props.book.author}</p>
            <p>Genre : {this.props.book.genre}</p>
          </div>
        )

      }

      return (
        <div className="col-sm-8">
          {bookDetails}
        </div>
      )
    }
}

function mapStateToProps(state){
    return { book: state.selectedBook };
}

export default connect (mapStateToProps)(BookDetails);
