# **React and Rails Playground App**

This project was initiated while I was following the Udemy course "Modern React with Redux". It is now a Playground app for testing various technologies between React and Rails.

While the courses on Udemy focus mostly on stand alone application, the first step was to bundle those components into a basic rails app using `rails 5.1.4` and `Webpacker 3.0`.

The second step was to use the same components with the `gem React on Rails` to benchmark the pros & cons of the native integration vs React on Rails.

In further experiments, I am testing various approaches to persist data in a Rails back end and in general interface backends with React components.

This app is built with the following key points:

* jQuery is completely removed
* the Rails asset pipeline is only used for images
* all css, scss and js are processed with Webpacker
* optimization to get google page speed as close as possible to 100
* Bootstrap 4
* Turbolinks 5

# Demo

Live demo can be seen at:
https://react-rails-playground.herokuapp.com/

# Install

```sh
git clone git@github.com:adrienpoly/React_Rails_Playground.git

cd React_Rails_Playground

rails db:create db:migrate db:seed

bundle && yarn

foreman start -f Procfile.dev -p 3000
```

and visit http://localhost:3000/

# The various examples demonstrated in the playground

## Page Speed component

Those are simple react charting components built with Recharts lib. Those charts are populated with data store in the rails db. Two options are used to populate the charts the native React approach with an api call to /commits endpoint or the React on Rails gem approach.

**Key Points**

* React component populated from Rails
* React on Rails Gem
* Api Fetching

## Video Player

This is the first component built during the Udemy track.
Search a term and display videos from a Youtube query

**Key points:**

* Youtube api
* Simple components without Redux
* No link to any backends, all data are coming from Youtube and none are persisted

## Book list

This is the second component built and the first introduction to Redux.

**Key points:**

* First introduction to Redux
* Very basic reducers

## Weather

This is the third component built during the Udemy track
Search a city and display the weather forecast for the next 5 days

**Key points:**

* Introduction to Middleware
* Fetching live data from API
* Charting results with Rechart
* Displaying maps with Google maps in React

# Credits

Various project have helped me putting all this together:
....
