import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { GlobalAuthService } from 'app/services/global-auth.service';
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from 'app/services/notification.service';
import { Notification } from 'app/interfaces/notification.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isHidden = true;
  notifications: Notification[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private globalAuth: GlobalAuthService,
    private notificationService: NotificationService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.router.events.pipe(
      filter((event) => event instanceof ActivationEnd)
    )
      .subscribe((event) => {
        this.activatedRoute.firstChild.data.subscribe((value) => {
          this.isHidden = !!value.withoutHeader;
        });
      });

      this.notificationService.getNotifications().subscribe((res: any) => {
        this.notifications = res;
        this.getNotificationsCount();
      }, (res) => {
        this.toastr.error(res.error.message, 'Error!');
      });
  }

  onLogout() {
    this.globalAuth.logout();
    this.router.navigate(['/auth/login']);
  }

  getNotificationsCount() {
    return this.notifications.filter((elem: Notification) => {
      return !elem.readed;
    }).length;
  }
}
