// 1. DỮ LIỆU NỘI DUNG GIỚI THIỆU
const aboutData = {
    sections: [
        {
            title: "Hành Trình Mang Hương Vị Nhật Bản Đến Việt Nam",
            paragraphs: [
                "Xuất phát từ tình yêu sâu sắc dành cho ẩm thực xứ sở hoa anh đào, <strong>Sushi Snow</strong> ra đời với mong muốn mang trải nghiệm tinh tế, đúng chuẩn vị Nhật Bản đến gần hơn với thực khách Việt. Với chúng tôi, mỗi miếng sushi hay sashimi không chỉ là một món ăn đẹp mắt, mà còn là tinh hoa của văn hóa trân trọng thiên nhiên và từng nguyên liệu nhỏ nhất.",
                "Cái tên 'Snow' gợi lên sự tinh khiết, trong trẻo và tươi mới đến từng chi tiết – cũng chính là tiêu chuẩn cốt lõi mà nhà hàng luôn gìn giữ trong từng món ăn phục vụ mỗi ngày."
            ]
        },
        {
            title: "Tiêu Chuẩn Nguyên Liệu & Chế Biến",
            paragraphs: [
                "100% hải sản tại Sushi Snow được tuyển chọn kỹ lưỡng và nhập khẩu trực tiếp từ những vùng biển uy tín, giữ trọn độ tươi nguyên bản của đại dương. Kết hợp cùng gạo Nhật dẻo thơm, giấm sushi pha theo công thức độc quyền và đôi bàn tay tài hoa của các đầu bếp giàu kinh nghiệm, mỗi món ăn đều hoàn hảo từ hương vị đến màu sắc."
            ]
        },
        {
            title: "Cam Kết Của Sushi Snow",
            listItems: [
                "<strong>Độ tươi ngon tuyệt đối:</strong> Nguyên liệu mới mỗi ngày, nói không với chất bảo quản.",
                "<strong>Không gian đậm chất Nhật:</strong> Ấm cúng, thư thái để gia đình và bạn bè thong thả bên nhau.",
                "<strong>Dịch vụ tận tâm:</strong> Phục vụ chu đáo, chuyên nghiệp, thấm đẫm tinh thần Omotenashi nổi tiếng của người Nhật."
            ]
        }
    ]
};

// 2. HÀM ĐỔ DỮ LIỆU GIỚI THIỆU VÀO HTML
function renderAboutUs() {
    const container = document.getElementById("about-content");
    if (!container) return;

    let htmlContent = "";

    aboutData.sections.forEach((section, index) => {
        let isLast = index === aboutData.sections.length - 1;
        htmlContent += `<div class="about-block">`;
        htmlContent += `<h2>${section.title}</h2>`;

        if (section.paragraphs) {
            section.paragraphs.forEach(p => {
                htmlContent += `<p>${p}</p>`;
            });
        }

        if (section.listItems) {
            htmlContent += `<ul>`;
            section.listItems.forEach(item => {
                htmlContent += `<li>${item}</li>`;
            });
            htmlContent += `</ul>`;
        }

        htmlContent += `</div>`;
    });

    container.innerHTML = htmlContent;
}

// 3. XỬ LÝ SỰ KIỆN KHI TRANG TẢI XONG
$(document).ready(function() {
    // Đổ nội dung giới thiệu
    renderAboutUs();

    // Nút tắt form đăng nhập
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
        i = arr.length - 1;
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