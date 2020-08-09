
var eps: number = 1e-5;

function eq(a: number, b: number): boolean {
    return Math.abs(a - b) <= eps;
}

export default class Vector3 {
    x: number;
    y: number;
    z: number;

    constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    X(): number{ return this.x; }
    SetX(v: number){ this.x = v; }
    Y(): number{ return this.y; }
    SetY(v: number){ this.y = v; }
    Z(): number{ return this.z; }
    SetZ(v: number){ this.z = v; }
    Clone(): Vector3 {
        return new Vector3(this.x, this.y, this.z);
    }

    Add(other: Vector3): Vector3 { return new Vector3(this.x + other.x, this.y + other.y, this.z + other.z); }
    Sub(other: Vector3): Vector3 { return new Vector3(this.x - other.x, this.y - other.y, this.z - other.z); }
    Mul(num: number): Vector3 { return new Vector3(this.x * num, this.y * num, this.z * num); }
    Div(num: number): Vector3 { return new Vector3(this.x / num, this.y / num, this.z / num); }

    Dot(other: Vector3): number { return this.x * other.x + this.y * other.y + this.z * other.z; }
    Cross(other: Vector3): Vector3 { return new Vector3(this.y*other.z-this.z*other.y, this.z*other.x-this.x*other.z, this.x*other.y-this.y*other.x); }
    LenPow2(): number { return this.x * this.x + this.y * this.y + this.z * this.z; }
    Len(): number { return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z); }
    DisPow2(other: Vector3): number { return (this.x-other.x)*(this.x-other.x) + (this.y-other.y)*(this.y-other.y) + (this.z-other.z)*(this.z-other.z); }
    Dis(other: Vector3): number { return Math.sqrt((this.x-other.x)*(this.x-other.x) + (this.y-other.y)*(this.y-other.y) + (this.z-other.z)*(this.z-other.z)); } 

    Equal(other: Vector3): boolean { return eq(this.x, other.x) && eq(this.y, other.y) && eq(this.z, other.z); }
    Normalize(): void {
        let l = this.Len();
        if (eq(l, 0)) return;
        this.x = this.x / l;
        this.y = this.y / l;
        this.z = this.z / l;
    }

    static Dot(v1: Vector3, v2: Vector3): number { return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z; }
    static Cross(v1: Vector3, v2: Vector3): Vector3 { return new Vector3(v1.y*v2.z-v1.z*v2.y, v1.z*v2.x-v1.x*v2.z, v1.x*v2.y-v1.y*v2.x); }
    static Zero() { return new Vector3(0, 0, 0); }
    static Forward() { return new Vector3(0, 0, -1); }
    static Back() { return new Vector3(0, 0, 1); }
    static Up() { return new Vector3(0, 1, 0); }
    static Down() { return new Vector3(0, -1, 0); }
    static Right() { return new Vector3(1, 0, 0); }
    static Left() { return new Vector3(-1, 0, 0); }
    
}


