// CORE MODULES THEASE ALL PROVIDE NODE JS
// const readline = require("readline");
const http = require('http');
const fs = require('fs');
const url = require('url');
const events = require('events');

// CUSTOM MODULES WHICH WE DEVELOPER CREATED THIS MODULE
// AND EVERY JAVASCRIPR FILE IS MODULE

let productsArray = JSON.parse(
  fs.readFileSync('./nodetemplate/product.json', 'utf-8')
);

let productList = fs.readFileSync('./nodetemplate/products.html', 'utf-8');
let productDetailsList = fs.readFileSync(
  './nodetemplate/productdetails.html',
  'utf-8'
);

// this reusable function means if we have lot of template in your asset you just simply called the function changed the template simple and you have specfict id of the product you have to easily assign the id of the product in the product parameter
let reusableFunction = (template, product) => {
  let output = template.replace('{{%THUMBNAIL%}}', product.thumbnail);

  output = output.replace('{{%NAME%}}', product.title);
  output = output.replace('{{%PRICE%}}', product.price);
  output = output.replace('{{%BRAND%}}', product.brand);
  output = output.replace('{{%RATING%}}', product.rating);
  output = output.replace('{{%STOCK%}}', product.stock);
  output = output.replace('{{%CATEGORY%}}', product.category);
  output = output.replace('{{%DESCRIPTION%}}', product.description);
  output = output.replace('{{%ID%}}', product.id);
  return output;
};

// const interface = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// interface.question("Please Enter Your Name: ", (name) => {
//   console.log(`You Enterd This Name ${name}`);
//   interface.close();
// });

// interface.on("close", () => {
//   console.log("Your Session is Expired.....");
//   process.exit(0);
// });

let htmlData = fs.readFileSync('./nodetemplate/index.html', 'utf-8');

let server = http.createServer((request, response) => {
  // this is url module like url is defalu object so many values stored in that object so we have seperate two properties using object destruction query properties stored in after ?mark string, path name is your products, path means your total url means with your query string means /products?id=1&name=marudhu whatever

  // url parse means Parse an address with the url.parse() method, and it will return a URL object with each part of the address as properties:Split a web address into readable parts
  let { query, pathname: path } = url.parse(request.url, true);
  //   console.log(urlString, "data");

  if (path === '/' || path.toLowerCase() === '/home') {
    response.writeHead(200, { 'content-type': 'text/html' });
    response.end(
      htmlData.replace('{%CONTENT%}', 'you are in home page right now')
    );
  } else if (path.toLowerCase() === '/about') {
    response.writeHead(200);
    response.end(htmlData.replace('{%CONTENT%}', 'You are in about page'));
  } else if (path.toLowerCase() === '/contact') {
    response.writeHead(200);
    response.end(htmlData.replace('{%CONTENT%}', 'You are in contact page'));
  } else if (path.toLowerCase() === '/career') {
    response.writeHead(200);
    response.end(htmlData.replace('{%CONTENT%}', 'You are in career page'));
  } else if (path.toLowerCase() === '/products') {
    // !query.id query.id illaiendral(doesn't exist) if condition will be executed if irunthuchina(exist) else logic will be executed
    if (!query.id) {
      let overProduct = productsArray.map((prod) => {
        return reusableFunction(productList, prod);
      });
      response.writeHead(200, { 'content-type': 'text/html' });
      let productdatas = htmlData.replace('{%CONTENT%}', overProduct.join(','));
      response.end(productdatas);
    } else {
      let prod = productsArray[query.id];
      console.log(prod);
      let productdetailfunction = reusableFunction(productDetailsList, prod);
      //console.log(productdetailfunction);
      // whole html template is replaced into this CONTENT
      response.end(htmlData.replace('{%CONTENT%}', productdetailfunction));
    }
  } else {
    response.writeHead(404);
    response.end(htmlData.replace('{%CONTENT%}', '404 Page Not Found'));
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log(`your server is started in ${8000} port`);
});

let eventEmitter = new events.EventEmitter();
console.log(eventEmitter);

// WE ARE SETTING UP THIS EVENT LISTNER ONLY AFTER EMITTING THE EVENT
eventEmitter.on('nameAdd', (id, name) => {
  console.log(`your data is created and this your ${id} and this your ${name}`);
});

eventEmitter.emit('nameAdd', 24, 'marudhu');
