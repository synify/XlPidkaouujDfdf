
var eps: number = 1e-5;

function eq(a: number, b: number): boolean {
    return Math.abs(a - b) <= eps;
}

export default class Vector2 {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    X(): number{ return this.x; }
    SetX(v: number){ this.x = v; }
    Y(): number{ return this.y; }
    SetY(v: number){ this.y = v; }
    copy(): Vector2 {
        return new Vector2(this.x, this.y);
    }

    Add(other: Vector2): Vector2 { return new Vector2(this.x + other.x, this.y + other.y); }
    Sub(other: Vector2): Vector2 { return new Vector2(this.x - other.x, this.y - other.y); }
    Mul(num: number): Vector2 { return new Vector2(this.x * num, this.y * num); }
    Div(num: number): Vector2 { return new Vector2(this.x / num, this.y / num); }

    Dot(other: Vector2): number { return this.x * other.x + this.y * other.y; }
    Cross(other: Vector2): number { return this.x * other.y - this.y * other.x; }
    LenPow2(): number { return this.x * this.x + this.y * this.y; }
    Len(): number { return Math.sqrt(this.x * this.x + this.y * this.y); }
    DisPow2(other: Vector2): number { return (this.x-other.x)*(this.x-other.x) + (this.y-other.y)*(this.y-other.y); }
    Dis(other: Vector2): number { return Math.sqrt((this.x-other.x)*(this.x-other.x) + (this.y-other.y)*(this.y-other.y)); } 

    Equal(other: Vector2): boolean { return eq(this.x, other.x) && eq(this.y, other.y); }
    Normalize(): void {
        let len = this.Len();
        if (eq(len, 0)) return;
        this.x = this.x / len;
        this.y = this.y / len;
    }

    static Dot(v1: Vector2, v2: Vector2): number { return v1.x * v2.x + v1.y * v2.y; }
    static Cross(v1: Vector2, v2: Vector2): number { return v1.x * v2.y - v1.y * v2.x; }
    static Zero() { return new Vector2(0, 0); }
    static Forward() { return new Vector2(0, 1); }
    static Back() { return new Vector2(0, -1); }
    static Right() { return new Vector2(1, 0); }
    static Left() { return new Vector2(-1, 0); }
    
}


