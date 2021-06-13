import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.scss']
})
export class SlotComponent implements OnInit {

  belegt: number = 0;
  monitor: number = 0;
  quelle: string = "-";
  ziel: string = "-";
  daten: number = 0;
  antwort1: number = 0;
  antwort2: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
