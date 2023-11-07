import {IOrderStatus} from "user-credits";

export class OrderStatus implements IOrderStatus {
    date: Date;
    message: string;
    status: "pending" | "paid" | "refused" | "error";

}