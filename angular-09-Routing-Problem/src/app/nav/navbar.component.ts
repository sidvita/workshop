import { Component, OnInit } from '@angular/core';
import { CartService } from '../core/services/cart.service';
import { NotificationMessage } from '../shared/models/notification-message.model';
import { NotificationService } from '../core/services/notification.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavBarComponent implements OnInit {
  cartItemsTotal: number = 0;

  constructor(private cartService: CartService, private notificationService: NotificationService) {}

  ngOnInit() {
    this.notificationService.notificationObservable.subscribe((message: NotificationMessage) => {
      if (message.messageType === 'cartUpdated') {
        this.cartService.getCartQuantity().subscribe((totalItems: number) => this.cartItemsTotal = totalItems);
      }
    });
  }
}
