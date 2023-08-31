var arr = [];

function getElm(selector) {
  return document.querySelector(selector);
}

// thêm phần tử vào mảng
function themPhanTu() {
  var number = +getElm("#inputNumber").value;

  // nhập số nguyên và lưu trữ vào mảng
  arr.push(number);
  var newArr = arr.join(", ");

  // hiển thị mảng
  getElm(
    "#txtArray"
  ).innerHTML = `<div class="p-3 mb-2 bg-secondary text-white">${newArr}</div>`;
}

// 1. tính tổng các số dương trong mảng
function tinhTongSoDuong() {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  getElm("#txtSum").innerHTML = `Tổng các số dương trong mảng là: ${sum}`;
}

// 2. đếm số dương trong mảng
function demSoDuong() {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      count++;
    }
  }

  getElm("#txtCount").innerHTML = `Có ${count} số dương trong mảng`;
}

// 3. tìm số nhỏ nhất trong mảng
function countMinArr() {
  var min = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  getElm("#txtCountMin").innerHTML = `Số nhỏ nhất trong mảng là: ${min}`;
}

// 4. Tìm số dương nhỏ nhất trong mảng
function countMinPositiveArr() {
  var min = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] < min) {
      min = arr[i];
    }
  }
  getElm(
    "#txtCountMinPositiveArr"
  ).innerHTML = `Số dương nhỏ nhất trong mảng là: ${min}`;
}

// 5. tìm số chẵn cuối cùng trong mảng. nếu không có giá trị chẵn thì trả về -1
function countEvenArr() {
  var count = -1;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      count = arr[i];
    }
  }

  getElm(
    "#txtCountEvenArr"
  ).innerHTML = `Số chẵn cuối cùng trong mảng là: ${count}`;
}

// 6. đổi chỗ 2 giá trị trong mảng theo vị trí (cho nhập vào 2 vị trí muốn đổi giá trị)
function swapValue() {
  var index1 = +getElm("#inputIndex1").value;
  var index2 = +getElm("#inputIndex2").value;

  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;

  getElm(
    "#txtSwapValue"
  ).innerHTML = `Mảng sau khi đổi chỗ 2 giá trị là: ${arr.join(", ")}`;
}

// 7. sắp xếp mảng theo thứ tự tăng dần
function sortArr() {
  arr.sort(function (a, b) {
    if (a < b) {
      return -1;
    }
    return 1;
  });
  getElm("#txtSortArr").innerHTML = `Mảng sau khi sắp xếp là: ${arr.join(
    ", "
  )}`;
}

// 8. tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về -1
function findPrime() {
  var count = -1;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 2) {
      continue;
    }
    var flag = true;
    for (var j = 2; j < arr[i]; j++) {
      if (arr[i] % j == 0) {
        flag = false;
        break;
      }
    }
    if (flag) {
      count = arr[i];
      break;
    }
  }

  getElm(
    "#txtFindPrime"
  ).innerHTML = `Số nguyên tố đầu tiên trong mảng là: ${count}`;
}

// 9. Nhập thêm 1 mảng số thực. Tìm xem trong mảng có bao nhiêu số nguyên
var arrFloat = [];

function themPhanTuSoThuc() {
  var number = +getElm("#inputNumberFloat").value;

  arrFloat.push(number);

  var newArrFloat = arrFloat.join(", ");

  getElm(
    "#txtArrayFLoat"
  ).innerHTML = `<div class="p-3 mb-2 bg-secondary text-white">${newArrFloat}</div>`;
}

function findInteger() {
  var count = 0;

  for (var i = 0; i < arrFloat.length; i++) {
    if (Number.isInteger(arrFloat[i])) {
      count++;
    }
  }
  getElm(
    "#txtFindInteger"
  ).innerHTML = `Có ${count} số nguyên trong mảng số thực`;
}

// 10. So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn
function comparePositiveAndNegative() {
  var soDuong = 0;
  var soAm = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      soDuong++;
    } else if (arr[i] < 0) {
      soAm++;
    }
  }

  if (soDuong > soAm) {
    getElm("#txtPositiveAndNegative").innerHTML = `Số dương nhiều hơn số âm`;
  }else if(soDuong == soAm){
    getElm("#txtPositiveAndNegative").innerHTML = `Số dương bằng số âm`;
  } else{
    getElm("#txtPositiveAndNegative").innerHTML = `Số âm nhiều hơn số dương`;
  }

}
