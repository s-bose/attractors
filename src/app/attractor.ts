export class Attractor{
    public a: number;
    public b: number;
    public c: number;
    public d: number;
    public canvas: HTMLCanvasElement;
    public maxIteration: number;

    public constructor(a, b, c, d, canvasElement, maxIteration) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.canvas = canvasElement;
        this.maxIteration = maxIteration;
        // requestAnimationFrame(this.draw);
    }

    public draw(): void {
        const ctx = this.canvas.getContext('2d');
        ctx.fillStyle = '#ff0084';
        ctx.globalAlpha = 0.1;
    }
}