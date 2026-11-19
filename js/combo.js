// 1. DỮ LIỆU COMBO TẠM (mỗi trang combo hiển thị 8 combo = 2 hàng)
//    id từ 101 trở đi để không trùng id sản phẩm trong ds.js
let combos = [
    // ===== TRANG combo1.html: GIA ĐÌNH & NHÓM =====
    { id: 101, trang: 'combo1.html', ten: 'Combo Gia Đình 4 Người', gia: 450000, hinh: 'sp12.jpg',
      mota: 'Bữa tối sum họp trọn vị Nhật cho cả nhà: sushi, sashimi, nigiri và nước ngọt mát lạnh.',
      gom: ['Set Sushi Sashimi Mix Đặc Biệt (1 đĩa)', 'Set Nigiri Thượng Hạng (1 đĩa)', 'Sushi Cuộn California (8 miếng)', '4 ly Coca vừa'] },
    { id: 103, trang: 'combo1.html', ten: 'Combo Nhóm Bạn 6 Người', gia: 690000, hinh: 'sp16.jpg',
      mota: 'Đĩa sashimi đầy đặn kèm nigiri và cuộn, đủ cho cả nhóm cùng nhâm nhi.',
      gom: ['Set Sushi Sashimi Tổng Hợp (2 đĩa)', 'Set Nigiri Thượng Hạng (1 đĩa)', 'Sushi Cuộn California (16 miếng)', '6 ly Coca vừa'] },
    { id: 104, trang: 'combo1.html', ten: 'Combo Tiệc Cuối Tuần', gia: 560000, hinh: 'sp15.jpg',
      mota: 'Combo cho buổi tụ họp cuối tuần với đĩa sushi sashimi và tô chirashi hải sản.',
      gom: ['Set Sushi Sashimi Đĩa Trắng (1 đĩa)', 'Set Sushi Sashimi Mix Đặc Biệt (1 đĩa)', 'Cơm Chirashi Hải Sản (1 tô)', '4 ly Coca vừa'] },
    { id: 105, trang: 'combo1.html', ten: 'Combo Cơm Trưa Văn Phòng', gia: 540000, hinh: 'sp5.jpg',
      mota: 'Năm phần cơm trưa bò teppanyaki nóng hổi, tiện đặt chung cho cả team.',
      gom: ['Set Cơm Trưa Bò Teppanyaki (5 phần)', 'Salad Bò Nướng (1 phần lớn)', '5 ly trà đá'] },
    { id: 106, trang: 'combo1.html', ten: 'Combo Nướng Kiểu Nhật', gia: 420000, hinh: 'sp3.jpg',
      mota: 'Các món nướng thơm lừng theo lối truyền thống, dùng kèm chanh tươi và củ cải bào.',
      gom: ['Cá Nướng Muối Kiểu Nhật (1 con)', 'Đầu Cá Hồi Nướng Muối (1 phần)', 'Bò Teppanyaki Tỏi Chiên Giòn (1 phần)', 'Salad Rau Củ Kiểu Nhật (1 phần)'] },
    { id: 107, trang: 'combo1.html', ten: 'Combo Sinh Nhật Sushi', gia: 800000, hinh: 'sp14.jpg',
      mota: 'Bàn tiệc sinh nhật rực rỡ với nhiều loại nigiri, gunkan và sashimi tuyển chọn.',
      gom: ['Set Nigiri Thượng Hạng (2 đĩa)', 'Set Sushi Sashimi Mix Đặc Biệt (1 đĩa)', 'Gunkan Nhím Biển & Trứng Cá Hồi (2 phần)', '6 ly Coca vừa'] },
    { id: 108, trang: 'combo1.html', ten: 'Combo Cuộn Party', gia: 380000, hinh: 'sp7.jpg',
      mota: 'Cuộn California béo mịn cùng nigiri và cuộn trứng cá cam, hợp cho bữa tiệc nhỏ.',
      gom: ['Sushi Cuộn California (24 miếng)', 'Set Nigiri & Cuộn Trứng Cá Cam (1 đĩa)', '4 ly Coca vừa'] },
    { id: 109, trang: 'combo1.html', ten: 'Combo Hải Sản Đại Dương', gia: 520000, hinh: 'sp11.jpg',
      mota: 'Bốn loại sashimi cá ngừ, cá cam tươi mát lạnh cùng rong biển ăn kèm.',
      gom: ['Sashimi Cá Ngừ Mỡ Vân Đá Lạnh (1 phần)', 'Sashimi Cá Ngừ Đại Dương (1 phần)', 'Sashimi Cá Cam Hamachi (1 phần)', 'Rong Biển Tươi Mát Lạnh (1 phần)'] },

    // ===== TRANG combo2.html: CẶP ĐÔI & CÁ NHÂN =====
    { id: 102, trang: 'combo2.html', ten: 'Combo Cặp Đôi Sashimi', gia: 299000, hinh: 'sp9.jpg',
      mota: 'Bữa hẹn hò nhẹ nhàng với sashimi cá ngừ tươi, nigiri sò ngọt và hai ly Coca.',
      gom: ['Sashimi Cá Ngừ Đại Dương (1 phần)', 'Sashimi Cá Ngừ Béo & Cá Cam (1 phần)', 'Nigiri Sò Ngọt (4 miếng)', '2 ly Coca vừa'] },
    { id: 110, trang: 'combo2.html', ten: 'Combo Cặp Đôi Nigiri', gia: 259000, hinh: 'sp18.jpg',
      mota: 'Nigiri lươn nướng, tôm ngọt cùng gunkan trứng cá hồi cho hai người.',
      gom: ['Nigiri Lươn Nướng & Tôm Ngọt (1 phần)', 'Gunkan Nhím Biển & Trứng Cá Hồi (1 phần)', 'Nigiri Sò Ngọt (2 miếng)', '2 ly Coca vừa'] },
    { id: 111, trang: 'combo2.html', ten: 'Combo Hẹn Hò Lãng Mạn', gia: 350000, hinh: 'sp10.jpg',
      mota: 'Sashimi cá ngừ béo và cá cam bày trên đá lạnh, thêm cuộn California cho bữa tối nhẹ nhàng.',
      gom: ['Sashimi Cá Ngừ Béo & Cá Cam (1 phần)', 'Sushi Cuộn California (8 miếng)', 'Salad Rau Củ Kiểu Nhật (1 phần)', '2 ly Coca vừa'] },
    { id: 112, trang: 'combo2.html', ten: 'Combo 3 Sashimi & 1 Coca', gia: 279000, hinh: 'sp13.jpg',
      mota: 'Ba loại sashimi tươi ngon dành cho người mê hải sản, kèm một ly Coca vừa.',
      gom: ['Sashimi Sò Lông Tươi Sống (1 phần)', 'Sashimi Cá Ngừ Đại Dương (1 phần)', 'Sashimi Cá Ngừ Béo Tô Đá (1 phần)', '1 ly Coca vừa'] },
    { id: 113, trang: 'combo2.html', ten: 'Combo 10 Sushi Ngẫu Nhiên', gia: 189000, hinh: 'sp14.jpg',
      mota: 'Mười miếng sushi do đầu bếp chọn ngẫu nhiên mỗi ngày, bất ngờ trong từng miếng.',
      gom: ['10 miếng sushi ngẫu nhiên (nigiri, gunkan, cuộn)', 'Wasabi và gừng hồng', '1 ly Coca vừa'] },
    { id: 114, trang: 'combo2.html', ten: 'Combo 2 Set Sushi Mix', gia: 399000, hinh: 'sp15.jpg',
      mota: 'Hai đĩa sushi mix đủ loại, thích hợp chia sẻ cùng bạn bè hoặc người thân.',
      gom: ['Set Sushi Sashimi Đĩa Trắng (1 đĩa)', 'Set Sushi Sashimi Tổng Hợp (1 đĩa)', '2 ly Coca vừa'] },
    { id: 115, trang: 'combo2.html', ten: 'Combo Cơm Trưa 1 Người', gia: 149000, hinh: 'sp21.jpg',
      mota: 'Phần ăn gọn nhẹ cho một người: bò áp chảo nóng hổi, cơm trắng và salad tươi.',
      gom: ['Set Cơm Trưa Bò Teppanyaki (1 phần)', 'Salad Rau Củ Kiểu Nhật (1 phần)', '1 ly trà đá'] },
    { id: 116, trang: 'combo2.html', ten: 'Combo Chirashi & Salad', gia: 159000, hinh: 'sp8.jpg',
      mota: 'Tô cơm chirashi hải sản đầy đặn cùng salad rau củ và nước mát lạnh.',
      gom: ['Cơm Chirashi Hải Sản (1 tô)', 'Salad Rau Củ Kiểu Nhật (1 phần)', '1 ly Coca vừa'] }
];

function dinhDang(n) { return Number(n).toLocaleString('vi-VN') + ' đ'; }

function showToast(msg) {
    let t = document.getElementById('toast');
    t.innerText = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 1800);
}

// Combo của trang hiện tại (comboTrang khai báo trong combo1.html / combo2.html)
let dsTrang = combos.filter(c => c.trang === comboTrang);
let combo = dsTrang[0];

// 2. HIỂN THỊ 8 COMBO (2 hàng x 4 cột)
function renderDanhSach() {
    let html = "";
    for (let i = 0; i < dsTrang.length; i++) {
        html += `
        <div class="col3">
            <img src="image/${dsTrang[i].hinh}" alt="${dsTrang[i].ten}">
            <h2>${dsTrang[i].ten}</h2>
            <span class="tag">combo</span>
            <p>${dsTrang[i].mota}</p>
            <h3>${dinhDang(dsTrang[i].gia)}</h3>
            <button class="fm" onclick="xemChiTiet(${dsTrang[i].id})">Mua Ngay</button>
            <button class="fm1" onclick="themGio(${dsTrang[i].id})">Thêm vào giỏ</button>
        </div>`;
    }
    document.getElementById("dscombo").innerHTML = html;
}

// 3. HIỂN THỊ CHI TIẾT COMBO ĐANG CHỌN
function renderChiTiet() {
    document.getElementById("main-img").src = `image/${combo.hinh}`;
    document.getElementById("main-img").alt = combo.ten;
    document.getElementById("ten").innerText = combo.ten;
    document.getElementById("mota").innerText = combo.mota;
    document.getElementById("gia").innerText = dinhDang(combo.gia);
    document.getElementById("quantity").value = 1;

    let htmlGom = "";
    for (let i = 0; i < combo.gom.length; i++) {
        htmlGom += `<li>${combo.gom[i]}</li>`;
    }
    document.getElementById("gom").innerHTML = htmlGom;

    // Ảnh nhỏ: combo đang xem + các combo khác cùng trang (tối đa 4 ảnh)
    let dsAnh = [combo, ...dsTrang.filter(c => c.id !== combo.id)].slice(0, 4);
    let htmlAnh = "";
    for (let i = 0; i < dsAnh.length; i++) {
        htmlAnh += `<div class="frame" onclick="changeImage('image/${dsAnh[i].hinh}')"><img src="image/${dsAnh[i].hinh}" alt="${dsAnh[i].ten}"></div>`;
    }
    document.getElementById("thumbs").innerHTML = htmlAnh;
}

function xemChiTiet(id) {
    combo = combos.find(c => c.id === id);
    renderChiTiet();
    document.getElementById("chitiet").scrollIntoView({ behavior: 'smooth' });
}

// 4. ĐỔI ẢNH, TĂNG GIẢM SỐ LƯỢNG
function changeImage(imagePath) {
    document.getElementById("main-img").src = imagePath;
}

function increaseQty() {
    let qtyInput = document.getElementById("quantity");
    qtyInput.value = parseInt(qtyInput.value) + 1;
}

function decreaseQty() {
    let qtyInput = document.getElementById("quantity");
    let val = parseInt(qtyInput.value);
    if (val > 1) qtyInput.value = val - 1;
}

// 5. THÊM VÀO GIỎ HÀNG (cùng key giohang_Storage với trang cart)
function themVaoGio(c, quantity) {
    let giohang = JSON.parse(localStorage.getItem('giohang_Storage')) || [];
    let foundIndex = giohang.findIndex(p => p.id === c.id);
    if (foundIndex !== -1) {
        giohang[foundIndex].sl = (giohang[foundIndex].sl || 1) + quantity;
    } else {
        giohang.push({ id: c.id, ten: c.ten, gia: c.gia, hinh: c.hinh, mota: c.mota, loai: 'combo', sl: quantity });
    }
    localStorage.setItem("giohang_Storage", JSON.stringify(giohang));
}

// Nút "Mua Ngay" mở phần chi tiết combo bên dưới (giống trang sản phẩm). Nút "Thêm vào giỏ" trên thẻ combo: thêm 1 phần, ở lại trang
function themGio(id) {
    let c = combos.find(x => x.id === id);
    themVaoGio(c, 1);
    showToast('Đã thêm "' + c.ten + '" vào giỏ hàng');
}

// Nút "Đặt Combo Ngay" ở phần chi tiết: thêm theo số lượng rồi sang giỏ hàng
function orderCombo() {
    let quantity = parseInt(document.getElementById("quantity").value);
    themVaoGio(combo, quantity);
    alert(`Đã thêm "${combo.ten}" (Số lượng: ${quantity}) vào giỏ hàng rồi nhé!`);
    window.location.href = "cart.html";
}

renderDanhSach();
renderChiTiet();
