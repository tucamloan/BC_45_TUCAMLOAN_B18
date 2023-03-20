

// khởi tạo mảng rỗng
var arrNumber = [];

// sử dụng sự kiện onclick để thêm phần tử vào mảng
document.getElementById('btnThemMang').onclick = function () {
  // lấy giá trị số từ người dùng nhập
  var soNhap = +document.getElementById('nhap-so').value;

  // thêm giá trị số vào mảng
  arrNumber.push(soNhap);

  // in mảng ra giao diện
  var ketQua = '';
  for (var i = 0; i < arrNumber.length; i++) {
    ketQua += arrNumber[i] + ' ';
  }
  document.getElementById('ket-qua-bai-0').innerHTML = `[ ${ketQua}]`;

  // cập nhật giá trị của mảng trong phần tử HTML
  document.getElementById('arrNumber').innerHTML = JSON.stringify(arrNumber);
}
//Bài 1:
document.getElementById("btnTongSoDuong").onclick = function () {
    var sum = 0; // khởi tạo biến tổng

for (var i = 0; i < arrNumber.length; i++) {
  if (arrNumber[i] > 0) { // kiểm tra nếu phần tử là số dương
    sum += arrNumber[i]; // cộng vào tổng
  }
}

    //In giá trị output ra ngoài giao diện
    document.getElementById("ket-qua-bai-1").innerHTML = sum;
  };
//bài 2
document.getElementById("btnDemSoDuong").onclick = function () {

var demSo = 0; // khởi tạo biến đếm

for (var i = 0; i < arrNumber.length; i++) {
  if (arrNumber[i] > 0) { // kiểm tra nếu phần tử là số dương
    demSo++; // tăng biến đếm lên 1
  }
}

document.getElementById("ket-qua-bai-2").innerHTML = demSo;
}

//bài 3
document.getElementById("btnSoNhoNhat").onclick = function () {

var minNumber = arrNumber[0]; // khởi tạo biến số nhỏ nhất với giá trị ban đầu là phần tử đầu tiên trong mảng

for (var i = 1; i < arrNumber.length; i++) {
  if (arrNumber[i] < minNumber) { // kiểm tra nếu phần tử là số nhỏ hơn giá trị hiện tại của biến số nhỏ nhất
    minNumber = arrNumber[i]; // cập nhật giá trị của biến số nhỏ nhất bằng giá trị của phần tử đó
  }
}

document.getElementById("ket-qua-bai-3").innerHTML = minNumber;}
//bài 4
document.getElementById("btnSoDuongNhoNhat").onclick = function () {
    var giaTriMin; // khởi tạo biến số dương nhỏ nhất

    for (var i = 0; i < arrNumber.length; i++) {
      if (arrNumber[i] > 0 && (giaTriMin == undefined || arrNumber[i] < giaTriMin)) { // kiểm tra nếu phần tử là số dương và nhỏ hơn giá trị hiện tại của biến số dương nhỏ nhất
        giaTriMin = arrNumber[i]; // cập nhật giá trị của biến số dương nhỏ nhất bằng giá trị của phần tử đó
      }
    }
    document.getElementById("ket-qua-bai-4").innerHTML = giaTriMin;}

  //bài 5
  document.getElementById("btnSoChanCuoi").onclick = function () {
    var soChanCuoi; // khởi tạo biến số chẵn cuối cùng

    for (var i = 0; i < arrNumber.length; i++) {
      if (arrNumber[i] % 2 == 0) { // kiểm tra nếu phần tử là số chẵn
        soChanCuoi = arrNumber[i]; // cập nhật giá trị của biến số chẵn cuối cùng bằng giá trị của phần tử đó
      }
    }
    if (soChanCuoi !== undefined) {
        document.getElementById("ket-qua-bai-5").innerHTML = soChanCuoi;
      } else {
        document.getElementById("ket-qua-bai-5").innerHTML = "Không có số chẵn trong mảng";
      }
}
//Bài 6
document.getElementById('btnDoiCho').onclick = function () {
    // lấy vị trí của 2 phần tử cần đổi chỗ từ người dùng nhập
    var viTri1 = +document.getElementById('vi-tri-1').value;
    var viTri2 = +document.getElementById('vi-tri-2').value;
  
    // tạo biến tạm thời để lưu giá trị của phần tử tại vị trí thứ nhất
    var giaTriTam = arrNumber[viTri1];
  
    // gán giá trị của phần tử tại vị trí thứ hai vào vị trí thứ nhất
    arrNumber[viTri1] = arrNumber[viTri2];
  
    // gán giá trị tạm thời vào vị trí thứ hai
    arrNumber[viTri2] = giaTriTam;
  
    // in mảng đã đổi chỗ giá trị ra giao diện
    var ketQua = '';
    for (var i = 0; i < arrNumber.length; i++) {
      ketQua += arrNumber[i] + ' ';
    }
    document.getElementById('ket-qua-bai-6').innerHTML = `[ ${ketQua}]`;
  }
//bài 7
document.getElementById('btnSapXep').onclick = function () {

    arrNumber.sort(function(a, b) {
       if (a>b) return 1;
       if (a<b) return -1;
        return 0;
      });
      document.getElementById('ket-qua-bai-7').innerHTML = arrNumber;
    }
  //Bài 8

  document.getElementById('btnSoNguyenTo').onclick = function () {
    var soNTDau = 0;
    
    for (var i = 0; i < arrNumber.length; i++) {
      var num = arrNumber[i];
      var soNT = true;
      if (num < 2) {
        continue; 
      }
      for (var j = 2; j <= Math.sqrt(num); j++) {
        if (num % j === 0) {
          soNT = false;
          break;
        }
      }
      if (soNT) {
        soNTDau = num;
        break; // dừng
      }
    }
    
    if (soNTDau > 0) {
      document.getElementById('ket-qua-bai-8').innerHTML = "Số nguyên tố đầu tiên trong mảng là: " + soNTDau;
    } else {
      document.getElementById('ket-qua-bai-8').innerHTML = "Không có số nguyên tố nào trong mảng";
    }
  };
  //Bài 9:
  // khởi tạo mảng rỗng
var arrNumber1 = [];

// sử dụng sự kiện onclick để thêm phần tử vào mảng
document.getElementById('btnThemSo').onclick = function () {
  // lấy giá trị số từ người dùng nhập
  var so = +document.getElementById('nhap').value;

  // thêm giá trị số vào mảng
  arrNumber1.push(so);

  // in mảng ra giao diện
  var ketQua1 = '';
  for (var i = 0; i < arrNumber1.length; i++) {
    ketQua1 += arrNumber1[i] + ' ';
  }
  document.getElementById('ket-qua-bai-9-1').innerHTML = `[ ${ketQua1}]`;

  // cập nhật giá trị của mảng trong phần tử HTML
  document.getElementById('arrNumber1').innerHTML = JSON.stringify(arrNumber1);
}
document.getElementById('btnDemSoNguyen').onclick = function () {

var soLuong = 0
for (var i = 0; i < arrNumber1.length; i++) {
  if (Number.isInteger(arrNumber1[i])) {
    soLuong++;
  }
}
document.getElementById('ket-qua-bai-9-2').innerHTML = soLuong;}


//Bài 10
document.getElementById('btnSoSanhSo').onclick = function () {
var soAm =0;
var soDuong=0;
for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] < 0) {
        soAm++;
      } else if (arrNumber[i] > 0) {
        soDuong++;
}};
if (soAm<soDuong) {
    document.getElementById('ket-qua-bai-10').innerHTML = "Số lượng số âm < số lượng số dương ";
  } else if (soAm>soDuong) {
    document.getElementById('ket-qua-bai-10').innerHTML = "Số lượng số âm > số lượng số dương";
  } else 
  document.getElementById('ket-qua-bai-10').innerHTML = "Số lượng số âm = số lượng số dương";

};