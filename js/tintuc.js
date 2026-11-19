// 1. MẢNG DỮ LIỆU TIN TỨC
const newsData = [
    {
        image: "image/sp1.jpg",
        title: "Sashimi Sò Lông Tươi Sống – Tuyển Chọn Từ Đại Dương",
        description: "Khám phá vị giòn ngọt, mát lành đậm đà của sashimi sò lông nhập khẩu cao cấp, mang cả hơi thở đại dương đến bàn ăn tại Sushi Snow...",
        date: "24/10/2026"
    },
    {
        image: "image/sp2.jpg",
        title: "Nigiri Sò Ngọt – Tinh Hoa Ẩm Thực Nhật",
        description: "Vị ngọt tự nhiên của thịt sò tươi hòa quyện cùng lớp cơm Nhật dẻo thơm, tạo nên miếng nigiri tròn vị và để lại dư vị khó quên...",
        date: "22/10/2026"
    },
    {
        image: "image/sp3.jpg",
        title: "Bí Quyết Cá Nướng Muối Chuẩn Vị Nhật",
        description: "Cá tươi nguyên con được nướng muối theo lối truyền thống, giữ trọn vị ngọt thanh tự nhiên trong từng thớ thịt mềm mọng...",
        date: "20/10/2026"
    },
    {
        image: "image/sp4.jpg",
        title: "Salad Bò Nướng Thanh Mát Cho Bữa Ăn Cân Bằng",
        description: "Thịt bò nướng mềm mọng kết hợp rau củ xanh giòn và sốt trộn đặc trưng, vừa ngon miệng vừa giúp bữa ăn thêm nhẹ nhàng, đủ chất...",
        date: "18/10/2026"
    },
    {
        image: "image/sp5.jpg",
        title: "Ra Mắt Set Cơm Trưa Bò Teppanyaki",
        description: "Cơm trưa bò áp chảo nóng hổi đi cùng salad tươi, canh miso ấm bụng và món tráng miệng thanh mát, tất cả với mức giá vô cùng dễ thương...",
        date: "15/10/2026"
    },
    {
        image: "image/sp6.jpg",
        title: "Đầu Cá Hồi Nướng Muối Sốt Nhật Bản",
        description: "Đầu cá hồi nướng thơm phức, da giòn rụm, thịt béo ngậy, thưởng thức cùng chanh tươi và củ cải bào thanh mát – ngon khó cưỡng...",
        date: "12/10/2026"
    },
    {
        image: "image/sp7.jpg",
        title: "California Roll Trứng Cua Hấp Dẫn",
        description: "Cuộn sushi phủ đầy trứng cua tobiko giòn tan, quyện bơ sáp béo mịn và vị thanh mát, luôn là lựa chọn số 1 của thực khách...",
        date: "10/10/2026"
    }
];

// 2. HÀM ĐỔ DỮ LIỆU TIN TỨC VÀO HTML
function renderNews() {
    const container = document.getElementById("shownews");
    if (!container) return;

    let htmlContent = "";
    newsData.forEach(item => {
        htmlContent += `
            <div class="col3">
                <img src="${item.image}" alt="${item.title}">
                <h2>${item.title}</h2>
                <p>${item.description}</p>
                <h3>${item.date}</h3>
                <button class="fm" onclick="alert('Xem chi tiết: ${item.title}')">Chi tiết</button>
            </div>
        `;
    });

    container.innerHTML = htmlContent;
}

// 3. XỬ LÝ SỰ KIỆN KHI TRANG TẢI XONG
$(document).ready(function() {
    // Đổ dữ liệu tin tức
    renderNews();

    // Ẩn/hiện khung đăng nhập
    $("#btnTat").click(function() {
        $("#login").hide();
    });
});

// 4. LOGIC CHẠY BANNER SLIDER
let arr = [
            "image/banner1.webp",
            "image/banner2.webp",
            "image/banner3.webp"
        ];
let i = 0;

function showBanner() {
    let bannerElement = document.getElementById("banner");
    if (bannerElement) {
        bannerElement.src = arr[i];
    }
}

function left() {
    i--;
    if (i < 0) {
        i = arr.length - 1; // Đã sửa lỗi cú pháp ở đây
    }
    showBanner();
}

function right() {
    i++;
    if (i >= arr.length) {
        i = 0;
    }
    showBanner();
}

// Tự động chuyển banner sau mỗi 3 giây
setInterval(right, 3000);