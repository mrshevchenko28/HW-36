declare function sumArray(arrNum: number[]): number;
type User = {
    name: string;
    age: number;
    isActive?: boolean;
};
declare function createUser(name: string, age: number, isActive?: boolean): User;
declare enum OrderStatus {
    Pending = "Pending",
    Shipped = "Shipped",
    Delivered = "Delivered",
    Cancelled = "Cancelled"
}
declare function getOrderStatus(status: OrderStatus): string;
export { sumArray, createUser, OrderStatus, getOrderStatus };
//# sourceMappingURL=main.d.ts.map