import { Component, OnInit } from '@angular/core';
import { Attractor } from './attractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'attractor';
  public cxt: any;
  canvasSize: number;
  private maxSize = 800;
  private maxIteration = 10000;
  public x;
  public y;
  public t;
  public a = -1.5;
  public b = 1.38;
  public c = 2.4;
  public d = -2.1;
  public pSize = 0;
  public scale = 4;
  public inputA;
  public inputB;
  public inputC;
  ngOnInit(): void {
    this.x = this.y = this.t = 0;
    const canvas: any = document.getElementById('fractalCanvas');
    this.cxt = canvas.getContext('2d');
    let bodySize = document.body.clientWidth - 100;
    if (bodySize > this.maxSize) {
      bodySize = this.maxSize;
    }
    console.log(bodySize);
    canvas.width = bodySize;
    canvas.height = bodySize;
    this.cxt.clearRect(0, 0, this.maxSize, this.maxSize);
    this.cxt.fillRect(0, 0, canvas.width, canvas.height);
    // this.cxt.fillRect(0, 0, 10, 10);
    // requestAnimationFrame(this.draw);
    let atr: Attractor = new Attractor(1.4, -2.3, 2.4, -2.1, canvas, 200);
    atr.draw();
  }

  public draw = () => {
    // console.log(this.cxt);
    // console.log(this.canvasSize);
    this.cxt.fillStyle = '#ff0084';
    this.cxt.globalAlpha = 0.1;
    if (this.t < this.maxIteration) {
      for (let i = 1000; i--;) {
        const xprev = this.x;
        this.x = Math.sin(this.a * this.y) - Math.cos(this.b * xprev);
        this.y = Math.sin(this.c * xprev) - Math.cos(this.d * this.y);
        // tslint:disable-next-line: max-line-length
        this.cxt.fillRect(this.x * this.maxSize / this.scale + this.maxSize / 2, this.y * this.maxSize / this.scale + this.maxSize / 2, 1, 1);
      }
      this.t++;
      requestAnimationFrame(this.draw);
    }
  }

}


