# **React and Rails Playground App**

This project was initiated while I was following the Udemy course "Modern React with Redux". It is now a Playground app for testing various technologies between React and Rails.

While the courses on Udemy focus mostly on stand alone application, the first steps was to bundle those components into a basic rails app using `rails 5.1.4` and `Webpacker 3.0`.

The second step was to use the same components with the `gem React on Rails` to benchmark the pros & cons of the native integration vs React on Rails.

In further experiments, I am testing various approches to persist data in a Rails back end and in general interface backends with React components (coming....).

# Demo
Live demo can be see at:
https://react-rails-playground.herokuapp.com/

## Video Player

This is the first component built during the Udemy track.
Search a term and display videos from a Youtube query

**Key points:**
- Youtube api
- Simple components without Redux
- No link to any backends, all datas are coming from Youtube and none are persitted

## Book list

This is the second component built and the first introduction to Redux.

**Key points:**
- First introduction to Redux
- Very basic reducers

## Weather  

This is the third component built during the Udemy track
Search a city and display the weather forecast for the next 5 days

**Key points:**
- Introduction to Middleware
- Fetching live data from API
- Charting results with Rechart
- Displaying maps with Google maps in React


# Credits

Various project have helped me putting all this together:
....
