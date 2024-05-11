class ThongTin {
    constructor(ten,mo_ta,tham_so = 1) {
        this.ten = ten
        this.mo_ta = mo_ta
        this.tham_so = tham_so
    }
    tinhToan(x) {
        return x*3
    }
}

class HinhHoc extends ThongTin {
    constructor(ten,mo_ta,tham_so = 1,chieu_dai) {
        super(ten,mo_ta,tham_so)
        this.chieu_dai = chieu_dai
    }
    tinhToan(x) {
        return super.tinhToan(x)
    }
}

let hinhchunhat = new HinhHoc("Hình chữ nhật","Hình có 4 góc vuông",10,15)
console.log("Tên: " + hinhchunhat.ten);
console.log("Mô tả: " + hinhchunhat.mo_ta);
console.log("Chiều dài: " + hinhchunhat.chieu_dai);
console.log("Tham số: " + hinhchunhat.tham_so);
console.log("Tính toán: " + hinhchunhat.tinhToan(5));