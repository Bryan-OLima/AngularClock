import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClockService {

  constructor() { }
  
  private hour!: string;

  private clock(): void {
    setTimeout(() => {
      this.hour = new Date().toLocaleTimeString();
    }, 1000);
  }

  public getClock(): any {
    this.clock();
    return this.hour;
  }
}
