import 'bootstrap.native/dist/bootstrap-native-v4'
import Turbolinks from 'turbolinks'

import ReactOnRails from 'react-on-rails';
import HelloWorld from '../bundles/HelloWorld/components/HelloWorld';
import VideoPlayer from '../video_player';
import BookList from '../book_list';
import Weather from '../weather';

ReactOnRails.register({
  VideoPlayer,
  BookList,
  Weather
});

// Turbolinks.start()
