import * as shipment from "./shipping-service.js";

function orderService(order) {
    const shipping = shipment.shipment(order);
    return order.basic * (1 - (order.discount / 100)) + shipping;
}

export {orderService};