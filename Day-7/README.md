This is 2nd day of react basics to adavance

# parcel
- Dev Build
- Create local server
- HMR- hot module replacement( real time refreshing on webpage)- how it is doing- 
        - It uses File watching algorithm( written in c++)
- It gives faster build because it do caching
- Do image optimisation also
- Do bundling
- Compressing of files
- Minification
- do consistent hashing
- code splitting
- differential bundling- give support for older browsers also
- gives you better error suggestion
- it also give option to host your app to HTTPs
- Tree shaking - remove unused code for you
- make different dev and prod bundles

# Food ordering App
/**
 * Header
 *  -Logo
 *  -Nav Items
 * Body
 *  -Search
 *  -RestarurantContainer
 *    -RestaurantCard
 *        -Img
 *        - Name of restaraunt, Star Rating, Cuisine, delivery time
 * Footer
 *  -Copyright
 *  -Links
 *  -Address
 *  -Contact
 */

 # Two types of export/import

  - Default Export/Import

  export default Component;
  import Component from "path;

  - Named Export/Import

  export const Component;
  import { Component } from "path;

  # React Hooks

  Normal JS utility functions

  - useState() -  used to create superpowerful State Variables in react
  - useEffect() - It is called after the component is rendered means after render cycle is complete then useEffect is called.


        
  # Reconcilation algorithm - 
  - It is also known as react fiber
  # Virtual DOM - 
  - It is the representation of actual DOM- It is nothing but a react element i.e basically a js object
  # Diff algorithm - 
  - It actually calculates the diff between virtual DOM or say two js object and update the UI 

  # Why react is fast?
  - because it has effecient DOM manipulation- because it uses Diff algorithm to update the UI- as soon as my state variable changes using setStateVariable function , it re-render the UI by seeing the change in js object or Virtual DOM.

  # Promises 
  # Optional chaining
  # Argrument vs Parameter
  # COORS
  # Shimmer UI

  # useEffect hook
  -  if no dependency array => then useEffect will be called on every component render
  -  if dependency array is empty => then useEffect will be called only in the initial render(just once)
  -  if dependency array is btnNameReact => then useEffect will be called everytime btnNameReact is updated.

  # useState hook
  - never use useState outside of the component as useState is used to create a local state variable inside the functional component
  - never use useState inside a if else because it will create the inconsistency in our code.
  - never use useState inside a for loop.

  # React router dom
  - npm i react-router-dom  -- This command will install react router
  - Terms to be used and we should know in Routing:
  - how we can create createBrowserRouter
  - how to add configuration to add diff paths to diff elements
  - useRouteError
  - How to add error element
  - how to made our own error page
  - how to create children route
  - how to load children inside our outlet
  - how SPA actually looks
  - how we can create a dynamic component
  - Dynamic routing
  - how to link cards to route
  -  RouterProvider
  -  Link instead of a tag - does not reload the page so very fast
  -  children route
  -  Outlet - basically creates a tunnel and push children component according to route
  - There are two types of routing
  - 1. server side routing - it do a network call and brings the page which was done using a tag
  - 2. client side routing - all the pages came at once only (SPA)
  - 