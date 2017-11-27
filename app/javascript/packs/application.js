import 'bootstrap.native/dist/bootstrap-native-v4'
import '../stylesheets/application.scss'
import 'font-awesome/scss/font-awesome'

import Turbolinks from 'turbolinks'
Turbolinks.start()

import ReactOnRails from 'react-on-rails';
import VideoPlayer from '../video_player';
import BookList from '../book_list';
import Weather from '../weather';

ReactOnRails.register({
  VideoPlayer,
  BookList,
  Weather
});
