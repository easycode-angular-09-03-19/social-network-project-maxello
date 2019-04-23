import { Component, OnInit, Input } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home-inner',
  templateUrl: './home-inner.component.html',
  styleUrls: ['./home-inner.component.css']
})
export class HomeInnerComponent implements OnInit {
  @Input() data;
  constructor(
    private toastr: ToastrService,
    private homeService: HomeService
  ) { }

  ngOnInit() {
  }
  getNotifications() {
    this.homeService.getNotifications().subscribe((res: any) => {
      console.log(res);
      // if (!res.error) {
      //   this.toastr.success(res.message, 'Success!');
      //   this.router.navigate(['/auth/login']);
      // } else {
      //   this.toastr.error(res.message, 'Error!');
      // }
    }, (res) => {
      this.toastr.error(res.error.message, 'Error!');
    });
    // this.messageService.add({severity: 'success', summary: 'Service Message', detail: 'Via MessageService'});
  }
}
