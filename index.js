function xemKetQua() {
    let diemChuan = document.getElementById("diem__chuan").value * 1;
    let diemToan = document.getElementById("diem__toan").value * 1;
    let diemLy = document.getElementById("diem__ly").value * 1;
    let diemHoa = document.getElementById("diem__hoa").value * 1;
    let diemTongMon = diemToan + diemLy + diemHoa;
    let khuVuc = document.getElementById("khu__vuc").value;
    switch (khuVuc) {
        case "A": {
            khuVuc = 2;
            break;
        }
        case "B": {
            khuVuc = 1;
            break;
        }
        case "C": {
            khuVuc = 0.5;
            break;
        }
        case "X": {
            khuVuc = 0;
            break;
        }
        default: {
            khuVuc = 0;
            break;
        }
    }
    let dtUuTien = document.getElementById("dt__uu__tien").value;
    switch (dtUuTien) {
        case "1": {
            dtUuTien = 2.5;
            break;
        }
        case "2": {
            dtUuTien = 1.5;
            break;
        }
        case "3": {
            dtUuTien = 1;
            break;
        }
        case "0": {
            dtUuTien = 0;
        }
    }
    diemTongKet = diemTongMon + khuVuc + dtUuTien;
    if (diemToan == 0 && diemLy == 0 && diemHoa == 0) {
        document.getElementById("result").innerText = "rớt";
    }
    else if (diemTongKet < diemChuan) {
        document.getElementById("result").innerText = "rớt";
    }
    else {
        document.getElementById("result").innerText = "trúng tuyển";
    }
}

function tinhTienDien() {
    let name = document.getElementById("ten").value;
    let soDien = document.getElementById("so__dien").value * 1;
    let tienDien = 0;
    if (soDien <= 50) {
        tienDien = soDien * 500;
    }
    else if (soDien <= 100) {
        tienDien = 50 * 500 + ((soDien - 50) * 650);
    }
    else if (soDien <= 200) {
        tienDien = 50 * (500 + 650) + ((soDien - 100) * 850);
    }
    else if (soDien <= 350) {
        tienDien = 50 * (500 + 650 + 2 * 850) + ((soDien - 200) * 1100);
    }
    else {
        tienDien = 50 * (500 + 650 + 2 * 850 + 3 * 1100) + ((soDien - 350) * 1300);
    }
    document.getElementById("result1").innerText = `Tổng tiền điện của ${name} là: ${tienDien}`;
}

function tinhThue() {
    let hoTen = document.getElementById("ho__ten").value;
    let tongThuNhap = document.getElementById("tong__thu__nhap").value * 1;
    let SoNguoiPhuThuoc = document.getElementById("songuoi__phuthuoc").value * 1;
    let thuNhapChiuThue = tongThuNhap - 4 - SoNguoiPhuThuoc * 1.6;
    let tongThue = 0;
    if (thuNhapChiuThue <= 60) {
        tongThue = thuNhapChiuThue * 0.05;
    }
    else if (thuNhapChiuThue <= 120) {
        tongThue = thuNhapChiuThue * 0.1;
    }
    else if (thuNhapChiuThue <= 210) {
        tongThue = thuNhapChiuThue * 0.15;
    }
    else if (thuNhapChiuThue <= 384) {
        tongThue = thuNhapChiuThue * 0.2;
    }
    else if (thuNhapChiuThue <= 624) {
        tongThue = thuNhapChiuThue * 0.25;
    }
    else if (thuNhapChiuThue <= 960) {
        tongThue = thuNhapChiuThue * 0.3;
    }
    else {
        tongThue = thuNhapChiuThue * 0.35
    }
    document.getElementById("result2").innerText = `Số thuế mà ${hoTen} phải nộp là: ${tongThue}`;
}




function selectDt() {
    let dt = document.getElementById("myDropdown").value;
    let soKetNoi = document.getElementById("so__ket__noi");
    if (dt == "doanhNghiep") {
        soKetNoi.style.display = "inline"
    } else {
        soKetNoi.style.display = "none"
    }
}

function tinhTienCap() {
    let dt = document.getElementById("myDropdown").value;
    let soKetNoi = document.getElementById("so__ket__noi").value * 1;
    let userId = document.getElementById("user__id").value;
    let proChannel = document.getElementById("pro__channel").value * 1;
    let tongTien = 0;
    if (dt == "doanhNghiep") {
        if (soKetNoi >= 10) {
            tongTien = 15 + 10 * 75 + (soKetNoi - 10) * 5 + proChannel * 50;
        }
        else {
            tongTien = 15 + soKetNoi * 75 + proChannel * 50;
        }
    } else {
        tongTien = 45 + 20.5 + proChannel * 7.5;
    }
    document.getElementById("result3").innerText = `Tổng tiền cáp của khách hàng ${userId} là: ${tongTien}`;
}