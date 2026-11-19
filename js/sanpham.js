// ===== TRANG SẢN PHẨM =====
// Phân nhóm món (không sửa ds.js): dựa trên tên + loại của từng món
const NHOM = [
    { key: 'all',     ten: 'Tất cả',          icon: 'fa-bowl-food' },
    { key: 'sashimi', ten: 'Sashimi',         icon: 'fa-fish' },
    { key: 'nigiri',  ten: 'Nigiri & Gunkan', icon: 'fa-bowl-rice' },
    { key: 'salad',   ten: 'Salad & Khai vị', icon: 'fa-leaf' },
    { key: 'cuon',    ten: 'Cuộn & Cơm',      icon: 'fa-circle-notch' },
    { key: 'nuong',   ten: 'Món nướng',       icon: 'fa-fire' },
    { key: 'set',     ten: 'Set mix',         icon: 'fa-utensils' }
];

function layNhom(sp) {
    let ten = sp.ten.toLowerCase();
    if (ten.includes('salad') || sp.loai === 'khai vị') return 'salad';
    if (sp.loai === 'sashimi') return 'sashimi';
    if (sp.loai === 'set') return 'set';
    if (ten.includes('nigiri') || ten.includes('gunkan')) return 'nigiri';
    if (sp.loai === 'món nướng') return 'nuong';
    return 'cuon'; // sushi cuộn, cơm chirashi...
}

let nhomHienTai = 'all';
let tuKhoa = '';
let sapXep = 'macdinh';

// Giỏ hàng dùng chung với cart.html
let giohangSP = JSON.parse(localStorage.getItem('giohang_Storage')) || [];

function dinhDang(n) { return Number(n).toLocaleString('vi-VN') + ' đ'; }

function showToast(msg) {
    let t = document.getElementById('toast');
    t.innerText = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 1800);
}

// Bỏ dấu tiếng Việt để tìm kiếm dễ hơn
function boDau(s) {
    return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').toLowerCase();
}

function veTab() {
    let html = '';
    NHOM.forEach(n => {
        let dem = n.key === 'all' ? ds.length : ds.filter(sp => layNhom(sp) === n.key).length;
        html += `<button type="button" class="tab-nhom ${n.key === nhomHienTai ? 'active' : ''}" onclick="chonNhom('${n.key}')">
                    <i class="fa-solid ${n.icon}"></i> ${n.ten} <span class="dem">${dem}</span>
                 </button>`;
    });
    document.getElementById('tabNhom').innerHTML = html;
}

function veSanPham() {
    let kq = ds.filter(sp => nhomHienTai === 'all' || layNhom(sp) === nhomHienTai);
    if (tuKhoa) kq = kq.filter(sp => boDau(sp.ten + ' ' + sp.mota).includes(boDau(tuKhoa)));

    if (sapXep === 'tang') kq.sort((a, b) => a.gia - b.gia);
    if (sapXep === 'giam') kq.sort((a, b) => b.gia - a.gia);

    let tenNhom = NHOM.find(n => n.key === nhomHienTai).ten;
    document.getElementById('tieuDeNhom').innerText = tenNhom.toUpperCase();
    document.getElementById('soLuongSP').innerText = kq.length + ' món';

    if (kq.length === 0) {
        document.getElementById('dsSanPham').innerHTML = `<p class="khong-co">Không tìm thấy món phù hợp. Thử từ khoá khác nhé!</p>`;
        return;
    }

    let html = '';
    kq.forEach(sp => {
        html += `
        <div class="col3">
            <img src="image/${sp.hinh}" alt="${sp.ten}" onclick="xemChiTiet(${sp.id})" style="cursor:pointer">
            <h2>${sp.ten}</h2>
            <span class="tag">${NHOM.find(n => n.key === layNhom(sp)).ten}</span>
            <p>${sp.mota}</p>
            <h3>${dinhDang(sp.gia)}</h3>
            <div class="nut-sp">
                <button type="button" class="fm1" onclick="xemChiTiet(${sp.id})">Chi tiết</button>
                <button type="button" onclick="themVaoGio(${sp.id})"><i class="fa-solid fa-cart-plus"></i> Mua ngay</button>
            </div>
        </div>`;
    });
    document.getElementById('dsSanPham').innerHTML = html;
}

function chonNhom(key) {
    nhomHienTai = key;
    veTab();
    veSanPham();
}

function xemChiTiet(id) { window.location.href = 'detail.html?id=' + id; }

function themVaoGio(id) {
    let sp = ds.find(s => s.id === id);
    let co = giohangSP.find(s => s.id === id);
    if (co) { co.sl = (co.sl || 1) + 1; }
    else { giohangSP.push({ ...sp, sl: 1 }); }
    localStorage.setItem('giohang_Storage', JSON.stringify(giohangSP));
    capNhatSoGio();
    showToast('Đã thêm "' + sp.ten + '" vào giỏ hàng');
}

function capNhatSoGio() {
    let tong = giohangSP.reduce((t, s) => t + (s.sl || 1), 0);
    let el = document.getElementById('soGio');
    el.innerText = tong;
    el.style.display = tong > 0 ? 'inline-block' : 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    // Mở thẳng một nhóm qua đường dẫn: sanpham.html?nhom=salad
    let q = new URL(window.location.href).searchParams.get('nhom');
    if (q && NHOM.some(n => n.key === q)) nhomHienTai = q;

    document.getElementById('timKiem').addEventListener('input', function (e) {
        tuKhoa = e.target.value.trim();
        veSanPham();
    });
    document.getElementById('sapXep').addEventListener('change', function (e) {
        sapXep = e.target.value;
        veSanPham();
    });

    veTab();
    veSanPham();
    capNhatSoGio();
});
