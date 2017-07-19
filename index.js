const app = "I don't do much."

var pbj = {
  bread: "white",
  ingredients: ["peanut butter", "jelly"],
  cut: "triangles",
  name: "peanut butter and jelly",
  serve: function() {
    console.log("here's your " + this.name + ", enjoy!");
  }
}

function Sandwich(bread, ingredients, cut) {
  this.bread = bread;
  this.ingredients = ingredients;
  this.cut = cut;
  }
}

var gc = new Sandwich("white", ["cheese"], "Grilled Cheese");
var pbj = new Sandwich("wheat", ["peanut butter", "raspberry jam"], "Peanut Butter & Jelly");

function serve(customer) {
console.log("Hey " + customer + ", here's your " + this.name + ", enjoy!")}

serve.call(gc, "Terry");
serve.call(pbj, "Jesse");


function deliverFood(customer, table) {
  console.log("Delivering " + this.name + " to " + customer + " at table " + table);
}

deliverFood.call(gc, "Terry", "4");
deliverFood.apply(pbj, ["Jesse", "15"]);

//create new Customer instance
var sally = new Customer("Sally", "4");

//schedule table visit
var visitSally = visitTable.bind(sally);
setTimeout(visitSally, 1000);
