import { Component, OnInit } from '@angular/core';

//toaster
import { ToastrService } from 'ngx-toastr';
//


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit {

  title = 'gogoTAngularest1';
  constructor(private toastr: ToastrService) {}

  ngOnInit() : void {
    this.showSuccess();
  }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

}



