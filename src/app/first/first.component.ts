import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../to-do.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  data:any;

  constructor(public service:ToDoService,private route: ActivatedRoute,private router : Router) { }

  ngOnInit(): void {

    this.service.getData().then(data=>{
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
