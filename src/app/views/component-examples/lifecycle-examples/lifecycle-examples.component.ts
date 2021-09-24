import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-examples',
  templateUrl: './lifecycle-examples.component.html',
  styleUrls: ['./lifecycle-examples.component.scss']
})
export class LifecycleExamplesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
