import { Component, DoCheck } from '@angular/core';
import { ClockService } from './clock.service';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements DoCheck {

  public hour!: any;

  constructor(private clockService: ClockService) {}

  ngDoCheck(): void {
   this.clock();
  }

  clock(){
    this.hour = this.clockService.getClock(); 
  }

}
