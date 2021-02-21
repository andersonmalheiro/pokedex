import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty-indicator',
  templateUrl: './empty-indicator.component.html',
  styleUrls: ['./empty-indicator.component.scss'],
})
export class EmptyIndicatorComponent implements OnInit {
  @Input() public message?: string;

  constructor() {}

  ngOnInit() {}
}
