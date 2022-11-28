# Development

https://jumpingjaguar24.github.io/development/

### Link to Deployed Website
If you used the stencil code, this is `https://<your GitHub username>.github.io/<name of your repository>`

### Goal and Value of the Application

The goal of this application is to give users the ability to effectively and efficiently shop for the products 
of a Bakery or other store. The value of the application lies in its clean layout and ability to sort, filter
and aggregate products. Users are able to filter through three different categories as they refer to the "type" 
and "dietary restrictions" of bakery item: Cake, Pastry, Nut-Free, Gluten-Free or Nut-Free & Gluten-Free. The 
application then offers users the ability to sort the bakery items by price, which automatically sorts prices 
ascending, lowest to highest price. Finally, the "cart" functionality allows potential users to add specific
items to a checkout-cart and view each item, its price, and the total price of all items in the cart. 


### Usability Principles Considered

Usability principles were considered in the design of this application to allow for user efficiency and effectiveness.

The learnability of the site is intuitive. The top nav bar creates a clear hierarchy where you are given options labeled
"Bakery Items", "Dietary Restrictions" and "Sort By". Each menu acts as a dropdown that when clicked on will either filter or 
sort by the chosen category. Furthermore, learnability is created by the use of icons (such as the "add to cart" icon), pictures and bolded texts which help instruct users on what to press/where to look.

The usability of the site is helped by a clear layout of bakery items. Each "bakery item card" contains a boiler plate set of 
information that describes the bakery item. This information is formatted in such ways that emphasize a hierarchy of information. For instance, the price of each item is located directly under the picture of the item and is bolded and italicized.
Similarly, the dietary restrictions that apply to each item are set in the same place on each bakery item card and all formatted in a specific text color/font.

### Organization of Components

I followed the format given by the gear up slides to organize the layout of my components. The majority of my code is found in the main App.js component. This component builds the basic layout of the site, the navbar and header. It also contains the call
to the MakeItem component which creates each bakery item card. Above the return statement in the App component I define several constants, state properties and the array of Bakery Items (I chose to do this as opposed to fetching the data from an API).

The other component is called 'MakeItem' in the BakeryItem.js class. Each time the page is loaded, depending on filtering or 
sorting conditions, a number of bakery item cards are rendered. It contains the code that constructs each bakery item card.

### How Data is Passed Down Through Components

The data is passed from my App to my MakeItem component via the use of props. First, in the App component I use the map function
to iterate through the bakeryItems array and call MakeItem on each array item. I then pass in as props the current item, a state
property called "cart" and its corresponding function "setCart", and a state property called "total" and its corresponding function "setTotal". These props are necessary because 1. the item passed in contains all the values that are necessary for 
constructing the card 2. the cart state property needs to be updated every time the cart icon is clicked (the cart icon is located
on each item card) 3. the total property must be updated similarly, each time the cart icon is clicked. 

### How the User Triggers State Changes

3 useStates: type, cart, total

The user is able to trigger state changes through several means. Clicking on any filtering or sorting category uses the "type"
state, which sets an eventkey to a certain type and based off of this, only items with this specific time are rendered. The user
is also able to trigger a state change by adding items to the cart (clicking on the cart icon). This triggers two state changes.
The "cart" state is an array of strings that is added to every time this icon is clicked, it reads as "{name} ${price}". The total state is also changed because this state is an int which is updated based off of the price of each item added to the cart
and displays as the aggregate sum of all items.
