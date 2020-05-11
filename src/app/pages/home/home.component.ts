import { Component, OnInit } from '@angular/core';
import { WebrestService } from '../../services/webrest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private rest: WebrestService ) { }

  ngOnInit(): void {
  }

}
