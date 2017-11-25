import React,{Component} from 'react';
import BookList from './containers/book_list'
import BookDetails from './containers/book_details'
import { Provider } from 'react-redux';
import reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';

const DPLA_API_KEY = "173886675245705f4a4d3c27a6191ff4" //dp.la api key
// https://api.dp.la/v2/items?q=france&api_key=173886675245705f4a4d3c27a6191ff4&limit=3
class App extends Component {

    render() {
        return (
          <div className="row">
            <BookList />
            <BookDetails />
          </div>
        );
    }
}


const createStoreWithMiddleware = applyMiddleware()(createStore);

const BookListApp = (_props, _railsContext) => (
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
);

export default BookListApp;
