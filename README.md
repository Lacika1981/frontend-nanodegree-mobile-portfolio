## Website Performance Optimization portfolio project

### Getting started

#### Part 1: Optimize PageSpeed Insights score for index.html

In order to run the webpage locally you need to follow the next steps

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to the top-level of your project directory to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ./ngrok http 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! 

#### index.html

The `index.html` file has inline CSS and uses minified CSS file for the printing style.
The file uses the JS files asynchronous and the `perfmatter.js` file is minified.

Unused CSS are removed.

#### main.js

`updatePositions` function has got major changes

The `phase` variable is moved out from the for loop as it has bad effect on the performance. The values are pushed into an `Array` and the values are used to place the elements on the screen.


`document.addEventListener('DOMContentLoaded', function() {...}`

I have made changes to calculate the required number of pizzas for different screen sizes.


## Important information

The CSS and JS what are used by the `index.html` and `pizza.html` files are minified and they are in the `dist` folder. The original files are at the origin locations.