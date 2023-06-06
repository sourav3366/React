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
  - useEffect() - 



  # Reconcilation algorithm - It is also known as react fiber
  # Virtual DOM - It is the representation of actual DOM- It is nothing but a react element i.e basically a js object
  # Diff algorithm - It actually calculates the diff between virtual DOM or say two js object and update the UI 

  # Why react is fast?
  - because it has effecient DOM manipulation- because it uses Diff algorithm to update the UI- as soon as my state variable changes using setStateVariable function , it re-render the UI by seeing the change in js object or Virtual DOM.