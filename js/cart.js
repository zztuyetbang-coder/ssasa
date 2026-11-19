// Định dạng tiền: 35000 -> 35.000 đ
function dinhDang(n) { return Number(n).toLocaleString('vi-VN') + ' đ'; }

// Thông báo nhỏ ở cuối màn hình
function showToast(msg) {
    let t = document.getElementById('toast');
    t.innerText = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 1800);
}

// Hiển thị sản phẩm gợi ý (8 sản phẩm đầu)
let hienThiDs = ds.slice(0, 8);
for (let i = 0; i < hienThiDs.length; i++) {
    document.getElementById('productAll').innerHTML +=
        `<div class="col3">
            <img src="image/${hienThiDs[i].hinh}" alt="${hienThiDs[i].ten}">
            <h2>${hienThiDs[i].ten}</h2>
            <span class="tag">${hienThiDs[i].loai}</span>
            <p>${hienThiDs[i].mota}</p>
            <h3>${dinhDang(hienThiDs[i].gia)}</h3>
            <button class="fm1" onclick="addCart(${i},${hienThiDs[i].id})">Thêm vào giỏ</button>
        </div>`;
}

// Khởi tạo giỏ hàng từ localStorage
let giohang = JSON.parse(localStorage.getItem('giohang_Storage')) || [];
viewCart();

function luuGio() {
    localStorage.setItem('giohang_Storage', JSON.stringify(giohang));
    viewCart();
}

function addCart(index, ID) {
    let found = false;
    for (let i = 0; i < giohang.length; i++) {
        if (giohang[i].id == ID) { giohang[i].sl++; found = true; break; }
    }
    if (!found) {
        let sp = { ...ds[index] };
        sp.sl = 1;
        giohang.push(sp);
    }
    showToast('Đã thêm "' + ds[index].ten + '" vào giỏ hàng');
    luuGio();
}

function viewCart() {
    let kq = "";
    let tongtien = 0;

    if (giohang.length === 0) {
        kq = `<tr><td colspan="7" class="cart-empty">Giỏ hàng đang trống. <a href="#productAll">Chọn vài món ngon bên dưới nhé</a>.</td></tr>`;
    }

    for (let i = 0; i < giohang.length; i++) {
        let thanhtien = giohang[i].gia * giohang[i].sl;
        tongtien += thanhtien;
        kq += `
        <tr>
            <td data-label="STT">${i + 1}</td>
            <td data-label="Sản phẩm">${giohang[i].ten}</td>
            <td data-label="Hình"><img src="image/${giohang[i].hinh}" alt="${giohang[i].ten}"></td>
            <td data-label="Số lượng">
                <div class="qty">
                    <button type="button" onclick="giamSL(${i})" aria-label="Giảm">−</button>
                    <span>${giohang[i].sl}</span>
                    <button type="button" onclick="tangSL(${i})" aria-label="Tăng">+</button>
                </div>
            </td>
            <td data-label="Đơn giá">${dinhDang(giohang[i].gia)}</td>
            <td data-label="Thành tiền">${dinhDang(thanhtien)}</td>
            <td data-label="Thao tác"><button type="button" class="btn-xoa" onclick="xoaSanPham(${i})">Xoá</button></td>
        </tr>`;
    }

    document.getElementById("addCart").innerHTML = kq;
    document.getElementById("tongtien").innerText = dinhDang(tongtien);
}

function tangSL(index) { giohang[index].sl++; luuGio(); }

function giamSL(index) {
    if (giohang[index].sl > 1) { giohang[index].sl--; luuGio(); }
}

function xoaSanPham(index) {
    giohang.splice(index, 1);
    luuGio();
}

function thanhToan() {
    if (giohang.length === 0) {
        alert("Giỏ hàng của bạn đang trống, hãy chọn vài món ngon nhé!");
        return;
    }
    alert("Thanh toán thành công! Cảm ơn bạn đã đặt hàng, Sushi Snow sẽ sớm mang món ngon đến tận tay bạn.");
    giohang = [];
    localStorage.removeItem("giohang_Storage");
    viewCart();
}
