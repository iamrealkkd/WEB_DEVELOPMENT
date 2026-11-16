package com.iamrealkkd.notification;

public class OrderService {
EmailService notification = new EmailService();
    public void placeOrder() {
        System.out.println("Order Placed");
        notification.Sent();
    }
}