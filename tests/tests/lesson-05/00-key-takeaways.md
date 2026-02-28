# I. JavaScript – Functions nâng cao
1. Function Declaration
Định nghĩa function bằng cách gán nó cho 1 biến 
     // Function Declaration (khai báo hàm)
     function add(a, b) {
     return a + b;
    }

2. Function Expression
    // Function Expression (biểu thức hàm)
    const add = function(a, b) {
    };

3. Arrow Function (Lambda)
Viết ngắn gọn hơn 
// Arrow function (Lambda)
const add = (a, b) => {
return a + b;
};
const add = (a, b) => a + b;

4. Anonymous Function
Là function không có tên, dùng khi cần dùng 1 lần hoặc để callback
// Anonymous function (không tên)
function() { // SyntaxError! Không thể đứng một mình
console.log("I'm anonymous!");
}
// Anonymous function phải được sử dụng ngay
// 1. Gán cho biến
const anonymousFunc = function() {
console.log("I'm anonymous but stored in a
variable!");
};

# II. DOM
- Website được máy tính hiểu dưới dạng cây cấu trúc (DOM tree).
1. Thẻ cấu trúc khung trang 
● <html> Thẻ gốc của trang
● <head> Chứa metadata: tiêu đề website, hiển thị Google
● <body>: Nội dung của cả website hiển thị
2. Thẻ Bố Cục & Ngữ nghĩa
● <div>: Khối/container chung
● <span>: Inline container (phần tử nội tuyến)
● <header>, <footer>, <nav>, <section>: Thẻ ngữ nghĩa
3. Thẻ Nội Dung:
● <h1> đến <h6>: Tiêu đề
● <p>: Đoạn văn
● <ul>, <ol>, <li>: Danh sách

4. Thẻ Tương Tác & Media:
● <a>: Liên kết
● <img>: Hình ảnh

# III. Selector

- Selector dùng để tìm element trên web phục vụ automation.

Gồm 3 loại chính:
- XPath (linh hoạt nhất, thường dùng tương đối //)

- CSS Selector (ngắn gọn, nhanh)

- Playwright Selector (ưu tiên dùng)

Thứ tự ưu tiên:
Playwright > CSS > XPath
# IV. Playwright Basic Syntax

- Cấu trúc một test:

test()

test.step()

- Các thao tác cơ bản:

goto() – mở trang

locator() – tìm phần tử

click()

fill()

check() / isChecked()

selectOption()

setInputFiles()