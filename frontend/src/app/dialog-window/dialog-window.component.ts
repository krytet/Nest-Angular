import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-window',
  templateUrl: './dialog-window.component.html',
  styleUrls: ['./dialog-window.component.css']
})
export class DialogWindowComponent implements OnInit {
  @Input() title!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
