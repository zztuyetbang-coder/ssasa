// Nút mở/đóng menu trên điện thoại
document.addEventListener('DOMContentLoaded', function () {
    var btn = document.querySelector('.menu-toggle');
    var menu = document.querySelector('.menu');
    if (btn && menu) btn.addEventListener('click', function () { menu.classList.toggle('open'); });
});

// Đã đăng nhập: đổi menu "Tài khoản" thành lời chào + nút Đăng xuất
document.addEventListener('DOMContentLoaded', function () {
    var ten = localStorage.getItem('nguoidung_Storage');
    var dd = document.querySelectorAll('.menu li.dropdown');
    if (!ten || !dd.length) return;
    var acc = dd[dd.length - 1];
    acc.querySelector('a').textContent = 'Xin chào, ' + ten + ' ▾';
    acc.querySelector('.menu-con').innerHTML = '<li><a href="#" id="btnDangXuat">Đăng xuất</a></li>';
    document.getElementById('btnDangXuat').addEventListener('click', function (e) {
        e.preventDefault();
        localStorage.removeItem('nguoidung_Storage');
        window.location.href = 'index.html';
    });
});
