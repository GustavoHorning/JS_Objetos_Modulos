import Order from "./models/Order.js";
import * as orderService from "./services/order-service.js";

const date = document.getElementById("product").innerHTML.split("\n").map(x => Number(x));

const order = new Order(date[0], date[1], date[2]);

const total = orderService.orderService(order);

console.log(`Pedido código ${order.code}`);
console.log(`Valor total: ${total.toFixed(2)}`);