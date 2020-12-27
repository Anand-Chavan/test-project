import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  data:any;

  constructor(public service:ToDoService,private route: ActivatedRoute,private router : Router) { }

  ngOnInit(): void {

    this.service.getData2().then(data=>{
      this.data = data;
      console.log(this.data);
    }
    );
  }

  gotoDynamic() {
    //this.router.navigateByUrl('/dynamic', { state: { id:1 , name:'Angular' } });
    this.router.navigateByUrl('/second', { state: this.data });
  }


}
