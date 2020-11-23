let myStore = new Array();

function product(maHang, tenHang, dvt, soLuong){
    this.maHang = maHang;
    this.tenHang = tenHang;
    this.dvt = dvt;
    this.soLuong = soLuong;
}

function addProduct() {// Hàm thêm Item vào mảng myStore
    let maHangInput = document.getElementById("id-text-maHang").value;
    let tenHangInput = document.getElementById('id-text-tenHang').value;
    let dvtInput = document.getElementById('id-text-dvt').value;
    let soLuongInput = document.getElementById('id-text-soLuong').value;

    if (!checkCode("maHang",maHangInput)){ // Kiểm tra mã hàng nhập vào đã tồn tại hay chưa.
        let newProduct = new product(maHangInput, tenHangInput, dvtInput, soLuongInput);
        myStore.push(newProduct);
    } else alert("Không được phép nhập, mã hàng đã tồn tại");
}

function checkCode(keys,value) { // Hàm kiểm tra giá trị đã tồn tại trong mảng hay chưa. True: là có, False: là không.
    for (element of myStore){
        if ((element[keys].toLowerCase()).includes(value.toLowerCase())) {
            return true;
        }
    }
    return false;
}
function showProduct() { // Hàm in ra trang dữ liệu đã nhập vào.
    document.getElementById('id-result-add').innerHTML = addItem(myStore);
}

function addItem(myArray){ // Trả về chuỗi HTML để in ra kết quả dữ liệu trong mảng.
    let str = "<ol id='myList' type='1' start='1'>";
    for (index in myArray){
        let i = "<div class='listLine'>" + "<li>" +
                    "<div class='listData'>" +
                        myArray[index].maHang + " - " + myArray[index].tenHang + " - " + myArray[index].soLuong + " - " + myArray[index].dvt +
                    "</div>" +
                    "<div class='cls-span'>" +
                        "<button onclick='editItem("+index+");'>Edit</button>" + "   " + "<button onclick='deleteItem("+index+");showProduct();'>Delete</button>" +
                    "</div>"
                + "</li> </div>"
        str += i;
    }
    return str + "</ol>";
}

function showFindProduct(arr) { // Hàm in ra các dữ liệu thỏa điều kiện tìm kiếm. Không phân biệt chữ hoa hay chữ thường.
    document.getElementById('id-result-find').innerHTML = '';
    let str = '';
    arr.forEach(function (element, index) {
        str = index + " - " + element.maHang + " - " + element.tenHang + " - " + element.dvt + " - " + element.soLuong;
        document.getElementById('id-result-find').innerHTML += str + "<br>";
    })
}

function findProduct(findWhat, findValue){
    document.getElementById('id-result-find').innerHTML = '';
    let indexFind = [];
    for (element of myStore){
        if ((element[findWhat].toLowerCase()).includes(findValue.toLowerCase())){
            indexFind.push(element);
        }
    } return indexFind;
}

function clearInput(){ // Trả lại trạng thái trống các ô nhập liệu.
    document.getElementById('id-text-find').value = '';
    document.getElementById('id-text-maHang').value = '';
    document.getElementById('id-text-tenHang').value = '';
    document.getElementById('id-text-dvt').value = '';
    document.getElementById('id-text-soLuong').value = '';
}

function editItem(index) {
    let element = myStore[index];
    document.getElementById('id-code').value = index;
    console.log(index);
    document.getElementById('id-text-maHang').value = element.maHang;
    document.getElementById('id-text-tenHang').value = element.tenHang;
    document.getElementById('id-text-dvt').value = element.dvt;
    document.getElementById('id-text-soLuong').value = element.soLuong;
}
function updateData(index){
    let newMaHang = document.getElementById('id-text-maHang').value
    if (!checkCode('maHang',newMaHang)){
        myStore[index].maHang = document.getElementById('id-text-maHang').value;
        myStore[index].tenHang = document.getElementById('id-text-tenHang').value;
        myStore[index].dvt = document.getElementById('id-text-dvt').value;
        myStore[index].soLuong = document.getElementById('id-text-soLuong').value;
        clearInput();
        showProduct();
    } else alert(newMaHang + ' Đã tồn tại')
}

function deleteItem(index) {
    myStore.splice(index,1)
}