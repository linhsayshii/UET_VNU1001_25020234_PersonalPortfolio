# PHÂN TÍCH YÊU CẦU & HƯỚNG DẪN THỰC HIỆN DỰ ÁN CÁ NHÂN (PORTFOLIO)
**Học phần:** Nhập môn Công nghệ số và Ứng dụng Trí tuệ Nhân tạo (VNU1001)  
**Sinh viên thực hiện:** Hoàng Việt Linh (MSSV: 25020234)  
**Trường:** Đại học Công nghệ, ĐHQGHN (UET - VNU)

---

## I. Phân Tích Yêu Cầu Dự Án

Dựa trên tài liệu mô tả yêu cầu, dự án cá nhân này yêu cầu thiết lập một **Digital Portfolio (Portfolio Kỹ thuật số)** nhằm hệ thống hóa và trình bày các sản phẩm/báo cáo từ 6 bài tập lớn trong suốt học phần. Dưới đây là phân tích chi tiết cấu trúc nội dung và kỹ thuật:

### 1. Cấu Trúc Trang Web Yêu Cầu
Trang web portfolio cần chứa đầy đủ 3 phần nội dung chính:
1. **Trang Giới thiệu (Home):** 
   - Giới thiệu bản thân (Họ tên, ngành học, sở thích, thông tin liên hệ).
   - Mục tiêu học tập và định hướng phát triển cá nhân.
   - Mục tiêu của portfolio (lưu trữ sản phẩm, chứng minh năng lực số).
2. **Trang Dự án (Projects):** 
   - Trình bày trực quan danh sách các bài tập lớn đã hoàn thành.
   - Đối với mỗi dự án: Nêu rõ mục tiêu, tóm tắt quá trình thực hiện, trưng bày kết quả (bảng biểu, code mẫu, ảnh minh họa) và liên kết tải xuống tài liệu gốc (PDF/DOCX).
3. **Trang Tổng kết (Reflection):** 
   - Trải nghiệm và cảm nhận cá nhân về quá trình làm portfolio.
   - Các kiến thức và kỹ năng số/AI quan trọng nhất đã tích lũy.
   - Những điểm tâm đắc nhất và các thách thức đã vượt qua.

### 2. Danh Sách Bài Tập Cần Tích Hợp (6 Bài học phần + 1 Bài bổ sung)
Dựa trên các tệp Word đã trích xuất từ thư mục `docs/` của sinh viên Hoàng Việt Linh, danh sách dự án thực tế bao gồm:
* **Bài 1: Máy tính và các thiết bị ngoại vi** (Thao tác cơ bản với tập tin & thư mục trên macOS, thiết lập thư mục tối ưu).
* **Bài 2: Khai thác tài nguyên thông tin** (Báo cáo tìm kiếm và đánh giá 10 nguồn tài liệu học thuật về tác động của AI đến việc học lập trình).
* **Bài 3: Tổng quan về trí tuệ nhân tạo** (Bài tập thực hành kỹ năng viết prompt 3 cấp độ cho 3 tác vụ học tập trên Claude/ChatGPT).
* **Bài 4: Giao tiếp và hợp tác trong môi trường số** (Nhật ký hợp tác nhóm trực tuyến 7 ngày sử dụng Trello, Meet, Drive, Docs).
* **Bài 5: Sáng tạo nội dung số** (Ứng dụng Gemini, MS Designer, Canva để viết và thiết kế Tech Blog về hướng đối tượng Java OOP).
* **Bài 6: An toàn và liêm chính học thuật** (Báo cáo sử dụng AI có trách nhiệm trong học tập, phân tích đạo đức và Infographic).
* **Bài 7 (Dự án Bổ sung): Nghiên cứu tài liệu khoa học bằng AI** (Bảng đối sánh 5 bài báo khoa học về Học máy phát hiện Ransomware). *Mặc dù rubric yêu cầu 6 bài, việc tích hợp thêm Bài 7 làm dự án bổ sung sẽ nâng cao đánh giá chất lượng lên mức "Xuất sắc" (8.1 - 10đ).*

---

## II. Phương Án Thiết Kế Giao Diện (Aesthetic & UX Design)

Theo tiêu chí đánh giá mức **Xuất sắc (8.1 - 10 điểm)**, portfolio cần được xây dựng chuyên nghiệp, sáng tạo và mang tính ứng dụng cao. Chúng ta sẽ áp dụng các nguyên tắc thiết kế hiện đại từ hệ thống hướng dẫn thiết kế frontend (`design-taste-frontend`):

1. **Phong cách thiết kế (Vibe):** Clean Developer, Modern Academic.
   - Kết hợp giữa tính học thuật nghiêm túc (bảng biểu rõ ràng, tài liệu trích dẫn chuẩn khoa học) với tính thẩm mỹ công nghệ hiện đại của một sinh viên Công nghệ thông tin UET.
2. **Hệ màu sắc (Color Palette - Slate & Emerald):**
   - **Nền tối chủ đạo (Dark Mode):** Slate rất sâu (`#0b0f19`) làm nền trang, các thẻ bento box sử dụng màu tối hơn (`#111827`) với đường viền mờ ảo (`border: 1px solid rgba(255, 255, 255, 0.08)`).
   - **Màu nhấn (Accent):** Emerald Green (`#10b981`) và Teal (`#14b8a6`) đại diện cho công nghệ, sự chính xác và trí tuệ nhân tạo.
   - **Chữ:** Trắng sáng (`#f9fafb`) cho tiêu đề và xám nhẹ (`#9ca3af`) cho nội dung để tránh mỏi mắt.
   - **Chuyển đổi sáng/tối (Theme Toggle):** Hỗ trợ chuyển đổi sang Light Mode tương thích (Nền `#f8fafc`, chữ `#0f172a`, thẻ `#ffffff`, viền xám nhạt) thông qua một nút chuyển đổi tinh tế.
3. **Kiểu chữ (Typography):**
   - Phông chữ không chân (Sans-serif) hiện đại: **Inter** hoặc **Satoshi** (sử dụng Google Fonts trực tiếp) cho phần nội dung và tiêu đề lớn để tăng tính sang trọng.
   - Phông chữ đơn cách (Monospace) cho các thẻ tag, code block, dữ liệu kỹ thuật: **JetBrains Mono** hoặc **Fira Code**.
4. **Bố cục (Layout):**
   - **Trang chủ:** Thiết kế tối giản, chia hai cột (asymmetric split screen): cột trái giới thiệu thông tin sinh viên kèm avatar, cột phải tóm tắt mục tiêu portfolio bằng các khối hình học tinh tế.
   - **Trang dự án:** Sử dụng mô hình **Bento Grid** (grid bất đối xứng) để phân chia thẻ các dự án dựa trên dung lượng nội dung. Ví dụ: Các bài viết sâu như Bài 5 và Bài 2 sẽ chiếm ô lớn (2x2 hoặc 2x1), các bài ngắn hơn chiếm ô 1x1.
   - **Trang chi tiết dự án:** Bố cục dạng bài viết chuyên môn (tech blog) với mục lục nhanh (sticky outline) bên cạnh, bảng biểu tối giản, mã nguồn được tô màu cú pháp (syntax highlighting) và các hình ảnh minh chứng được thiết kế bo góc tròn mềm mại có chú thích chân ảnh đầy đủ.

---

## III. Cấu Trúc Thư Mục Dự Án (Static HTML)

Vì đây là trang web **tĩnh (static HTML/CSS/JS)** không cần build step, dự án sẽ được tổ chức ngăn nắp như sau:

```text
UET_VNU1001_25020234_PersonalPortfolio/
├── index.html                   # Trang Giới thiệu (Trang chủ)
├── projects.html                # Trang danh sách Dự án (Bento Grid)
├── project-1.html               # Chi tiết Bài 1: Quản lý tệp tin & thư mục
├── project-2.html               # Chi tiết Bài 2: Tìm kiếm thông tin học thuật
├── project-3.html               # Chi tiết Bài 3: Kỹ năng viết Prompt
├── project-4.html               # Chi tiết Bài 4: Hợp tác nhóm trực tuyến
├── project-5.html               # Chi tiết Bài 5: Ứng dụng AI sáng tạo nội dung
├── project-6.html               # Chi tiết Bài 6: Sử dụng AI có trách nhiệm
├── project-7.html               # Chi tiết Bài 7: Nghiên cứu tài liệu khoa học (Bonus)
├── summary.html                 # Trang Tổng kết & Chiêm nghiệm
├── assets/
│   ├── css/
│   │   └── style.css            # File CSS chung (Design System, Tokens, Layouts, Animation)
│   ├── js/
│   │   └── main.js              # File JS xử lý menu, chuyển đổi Theme (Dark/Light)
│   └── images/
│       ├── avatar.jpg           # Ảnh chân dung sinh viên
│       ├── project1/            # Các screenshot minh họa cho Bài 1
│       ├── project4/            # Các screenshot minh họa cho Bài 4 (Trello, Meet...)
│       ├── project5/            # Các screenshot minh họa cho Bài 5 (Gemini, Canva...)
│       └── project6/            # Ảnh Infographic của Bài 6
└── docs/                        # Thư mục chứa các tệp tài liệu gốc (.docx / .pdf)
```

---

## IV. Kế Hoạch & Các Bước Triển Khai (Hướng thực hiện)

Dưới đây là kế hoạch chi tiết từng bước để hoàn thành trang web Portfolio từ dữ liệu hiện có:

### Bước 1: Thiết lập Hệ thống Thiết kế và Style Cơ bản (CSS & Asset Setup)
1. Tạo file [style.css](file:///Users/linhsayshii/UET/Code/UET_VNU1001_25020234_PersonalPorfolio/assets/css/style.css) chứa toàn bộ biến CSS (CSS variables) cho bảng màu Slate/Emerald ở cả hai chế độ `@media (prefers-color-scheme)` hoặc class `.light-theme`.
2. Định nghĩa hệ thống font chữ từ Google Fonts (Inter & JetBrains Mono), xác định kiểu dáng chung cho typography (H1, H2, H3, body, code blocks, tables).
3. Thiết lập grid hệ thống, bố cục container và các nút tương tác (CTA).
4. Tổ chức thư mục hình ảnh: Di chuyển các tệp ảnh đã trích xuất từ `extracted_data/` sang thư mục tương ứng trong `assets/images/`.

### Bước 2: Xây dựng Trang Giới thiệu (index.html)
1. Viết mã HTML cho thanh điều hướng (Navbar) tinh tế, bao gồm logo thương hiệu cá nhân của sinh viên, liên kết chuyển trang (`Giới thiệu`, `Dự án`, `Tổng kết`) và nút chuyển đổi Theme.
2. Xây dựng khu vực Hero giới thiệu thông tin Hoàng Việt Linh (Ngành khoa học máy tính/CNTT tại UET), sở thích cá nhân, các tag kỹ năng cơ bản và định hướng nghề nghiệp.
3. Trình bày 3 mục tiêu chính của portfolio một cách trực quan bằng 3 khối bento mini.
4. Xây dựng phần chân trang (Footer) tiêu chuẩn chứa liên kết mạng xã hội (GitHub, LinkedIn) và thông tin bản quyền môn học.

### Bước 3: Thiết kế Trang danh sách Dự án (projects.html)
1. Kế thừa Navbar và Footer từ trang chủ.
2. Thiết kế tiêu đề trang hiện đại, có đoạn giới thiệu ngắn gọn về phương pháp tích hợp AI xuyên suốt môn học.
3. Triển khai grid Bento chứa 7 thẻ tương ứng với 7 dự án. Mỗi thẻ hiển thị:
   - Số hiệu bài tập (Badge: ví dụ: `BÀI TẬP 1`).
   - Tiêu đề ngắn gọn và lĩnh vực (ví dụ: `Hợp tác nhóm trực tuyến`).
   - Tóm tắt 1 câu về mục tiêu hoặc công nghệ/AI sử dụng (ví dụ: `Trello, Meet & Google Docs`).
   - Hiệu ứng hover dịch chuyển nhẹ và đường viền phát sáng nhẹ.
   - Liên kết truy cập chi tiết (`Chi tiết dự án →`).

### Bước 4: Viết Trang Chi tiết cho từng Dự án (project-1.html đến project-7.html)
Triển khai giao diện đọc báo cáo học thuật chuyên sâu. Tận dụng dữ liệu văn bản đã trích xuất:
1. **Bài 1:** Liệt kê các bước thao tác Finder & Terminal kèm ảnh screenshot minh họa thao tác tệp tin.
2. **Bài 2:** Thiết kế bảng đánh giá 10 nguồn tài liệu học thuật sạch sẽ bằng thẻ `<table>` trong CSS, có tô màu xen kẽ hàng và làm nổi bật cột đánh giá độ tin cậy. Đưa phần phân tích và thư mục tài liệu tham khảo định dạng chuẩn APA.
3. **Bài 3:** Trình bày 3 tác vụ học thuật dưới dạng bảng đối sánh hoặc tab tương tác so sánh: *Prompt Cơ bản vs. Prompt Cải tiến vs. Prompt Nâng cao* kèm theo giải thích cơ chế (Role, CoT, Few-shot).
4. **Bài 4:** Trình bày nhật ký 7 ngày. Chèn các hình ảnh minh chứng tương ứng từ Trello, Google Drive, Meet và Docs. Trình bày bảng phân tích ưu nhược điểm của các công cụ.
5. **Bài 5:** Hiển thị bài Tech Blog về thiết kế class OOP Java bằng CSS code block sạch đẹp. Chèn ảnh bìa búa đấu giá do AI tạo ra và quy trình làm việc phối hợp với Gemini và Canva.
6. **Bài 6:** Trình bày bộ nguyên tắc sử dụng AI có trách nhiệm (5-7 nguyên tắc) dưới dạng danh sách thẻ biểu tượng. Nhúng infographic minh họa.
7. **Bài 7:** Trình bày bảng so sánh kết quả nghiên cứu 5 bài báo khoa học về ML Ransomware Detection và nhận xét.

### Bước 5: Viết Trang Tổng kết & Chiêm nghiệm (summary.html)
1. Trình bày bài tự nhận xét, cảm nhận sâu sắc của sinh viên về hành trình môn học.
2. Tổng kết các kiến thức cốt lõi và bài học kinh nghiệm.
3. Thiết kế một CTA lớn ở cuối trang để người chấm có thể dễ dàng tải xuống trọn bộ tài liệu báo cáo dạng PDF.

### Bước 6: Tích hợp Interactivity & Kiểm tra Khả năng Truy cập (JS & Testing)
1. Viết code JavaScript trong [main.js](file:///Users/linhsayshii/UET/Code/UET_VNU1001_25020234_PersonalPorfolio/assets/js/main.js) để xử lý việc lưu trữ trạng thái theme (Light/Dark) vào `localStorage` của trình duyệt để giữ nguyên cài đặt khi chuyển trang.
2. Đảm bảo toàn bộ mã HTML tuân thủ các quy tắc SEO cốt lõi, có cấu trúc heading (`H1`, `H2`, `H3`) đúng chuẩn học thuật và dễ tiếp cận (A11y - thuộc tính alt trên ảnh đầy đủ, độ tương phản văn bản đạt chuẩn WCAG AA).

---

## V. Tiêu Chí Đánh Giá Xuất Sắc (Rubric Alignment)

Để chắc chắn đạt điểm tối đa **(8.1 - 10 điểm)**, trang web của chúng ta sẽ được rà soát cơ học theo các tiêu chí:
* **Tính chuyên nghiệp & sáng tạo:** Không sử dụng các mẫu thiết kế đại trà (templating) hoặc màu sắc gradient tím-hồng AI mặc định rẻ tiền. Mọi thành phần từ nút bấm, thẻ dự án, phông chữ đều được căn chỉnh tỉ mỉ bằng CSS thuần chất lượng cao.
* **Đầy đủ nội dung:** Tích hợp đầy đủ cả 7 tệp báo cáo chi tiết mà sinh viên đã làm thay vì tóm tắt sơ sài. Mỗi bài tập đều có mục tiêu, quy trình rõ ràng và minh chứng đi kèm.
* **Liêm chính học thuật:** Trình bày rõ ràng phần đóng góp thực tế của cá nhân sinh viên đối với các sản phẩm do AI sinh ra (đặc biệt là bài viết OOP Java ở Bài 5, ghi nhận rõ tỉ lệ đóng góp của AI và chỉnh sửa thủ công của con người).
