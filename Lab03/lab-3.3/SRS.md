# Software Requirements Specification (SRS)

**Project:** SmartGrocery – Ứng dụng bán lẻ tạp hóa công nghệ 4.0  
**Version:** 1.0  
**Date:** October 2025  
**Prepared by:** NGÔ QUỐC HƯNG – Software Engineering Lab 3.3

---

## 1. Giới thiệu

### 1.1 Mục đích

Tài liệu này mô tả chi tiết các yêu cầu chức năng và phi chức năng của hệ thống **SmartGrocery**.  
Mục tiêu là cung cấp cơ sở để phát triển, kiểm thử và bảo trì phần mềm thống nhất giữa các bên liên quan.

### 1.2 Mục tiêu dự án

Xây dựng một ứng dụng hỗ trợ các cửa hàng tạp hóa trong việc quản lý hàng hóa, bán hàng, theo dõi doanh thu và khách hàng.  
Ứng dụng áp dụng công nghệ 4.0 (AI, Cloud, IoT, phân tích dữ liệu) để tự động hóa và tối ưu hoạt động bán lẻ.

### 1.3 Phạm vi dự án

-   Quản lý sản phẩm, tồn kho, nhập – xuất hàng.
-   Quản lý đơn hàng, thanh toán (tiền mặt, QR, ví điện tử).
-   Quản lý khách hàng (tích điểm, ưu đãi, lịch sử mua hàng).
-   Báo cáo doanh thu, thống kê mặt hàng bán chạy.
-   Hỗ trợ bán hàng qua di động.

### 1.4 Định nghĩa & Từ viết tắt

| Thuật ngữ | Giải thích                         |
| --------- | ---------------------------------- |
| SRS       | Software Requirement Specification |
| POS       | Point of Sale                      |
| API       | Application Programming Interface  |
| QR        | Quick Response Code                |
| Cloud     | Điện toán đám mây                  |

### 1.5 Tài liệu tham khảo

-   IEEE Std 830-1998 – Software Requirements Specification
-   Tài liệu môn SE Lab 3.3
-   Đề bài dự án “SmartGrocery”

---

## 2. Tổng quan hệ thống

### 2.1 Bối cảnh sản phẩm

Hệ thống gồm 3 phần:

-   **Frontend (React / React Native):** giao diện web & mobile.
-   **Backend (NestJS):** xử lý API, nghiệp vụ, quản lý dữ liệu.
-   **Database (PostgreSQL / Firebase):** lưu trữ thông tin sản phẩm, đơn hàng, khách hàng.

### 2.2 Các chức năng chính

-   Quản lý sản phẩm, tồn kho, danh mục.
-   Quản lý đơn hàng và thanh toán.
-   Báo cáo doanh thu, thống kê mặt hàng bán chạy.
-   Quản lý khách hàng và tích điểm.
-   AI gợi ý nhập hàng, dự đoán xu hướng mua.

### 2.3 Người dùng hệ thống

| Loại người dùng    | Mô tả                                       |
| ------------------ | ------------------------------------------- |
| Quản lý cửa hàng   | Theo dõi doanh thu, nhập hàng, tạo báo cáo. |
| Nhân viên bán hàng | Bán hàng, xử lý hóa đơn và thanh toán.      |
| Khách hàng         | Mua hàng, xem lịch sử, nhận ưu đãi.         |

### 2.4 Ràng buộc

-   Kết nối Internet bắt buộc để đồng bộ dữ liệu.
-   Giao dịch ≤ 2 giây.
-   Tương thích với trình duyệt Chrome, Edge, Safari, Android & iOS.

---

## 3. Yêu cầu chi tiết

### 3.1 Yêu cầu chức năng

| Mã  | Tên chức năng      | Mô tả                                     |
| --- | ------------------ | ----------------------------------------- |
| FR1 | Quản lý sản phẩm   | Thêm, sửa, xóa, tìm kiếm sản phẩm.        |
| FR2 | Quản lý tồn kho    | Theo dõi số lượng tồn, cảnh báo hết hàng. |
| FR3 | Quản lý đơn hàng   | Tạo, cập nhật, in và lưu hóa đơn.         |
| FR4 | Thanh toán         | Hỗ trợ nhiều phương thức thanh toán.      |
| FR5 | Quản lý khách hàng | Quản lý hồ sơ, lịch sử mua, điểm thưởng.  |
| FR6 | Báo cáo doanh thu  | Thống kê doanh số, mặt hàng bán chạy.     |
| FR7 | AI Gợi ý nhập hàng | Đề xuất nhập hàng dựa vào dữ liệu.        |
| FR8 | Ứng dụng di động   | Hỗ trợ nhân viên thao tác qua smartphone. |

### 3.2 Yêu cầu phi chức năng

| Mã   | Loại              | Mô tả                                    |
| ---- | ----------------- | ---------------------------------------- |
| NFR1 | Hiệu năng         | Xử lý đơn hàng ≤ 2s.                     |
| NFR2 | Bảo mật           | Dữ liệu mã hóa và truyền qua HTTPS.      |
| NFR3 | Mở rộng           | Hỗ trợ 1000 người dùng đồng thời.        |
| NFR4 | Giao diện         | Thân thiện, dễ dùng, hỗ trợ đa ngôn ngữ. |
| NFR5 | Khả năng phục hồi | Hệ thống phục hồi trong 30s khi lỗi.     |

---

## 4. Use Case

### Use Case 1 – Bán hàng

**Tác nhân:** Nhân viên bán hàng  
**Tiền điều kiện:** Đã đăng nhập hệ thống.  
**Luồng chính:**

1. Chọn sản phẩm bằng quét mã QR hoặc tìm kiếm.
2. Hệ thống hiển thị thông tin và giá.
3. Xác nhận thanh toán và phương thức.
4. Cập nhật tồn kho và tạo hóa đơn.  
   **Kết quả:** Hóa đơn lưu trong cơ sở dữ liệu.

---

### Use Case 2 – Quản lý sản phẩm

**Tác nhân:** Quản lý cửa hàng

1. Đăng nhập hệ thống.
2. Thêm hoặc chỉnh sửa thông tin sản phẩm.
3. Theo dõi tồn kho và cảnh báo hàng hết.

---

### Use Case 3 – Báo cáo doanh thu

**Tác nhân:** Quản lý cửa hàng

1. Chọn mốc thời gian (ngày, tháng, năm).
2. Hệ thống tổng hợp doanh thu và sản phẩm bán chạy.
3. Xuất file PDF hoặc Excel.

---

## 5. Giao diện ngoài

| Loại     | Mô tả                                 |
| -------- | ------------------------------------- |
| UI       | Web & mobile, responsive, hiện đại.   |
| API      | RESTful API giữa frontend và backend. |
| Hardware | Máy POS, điện thoại, máy in hóa đơn.  |

---

## 6. Yêu cầu khác

-   Dữ liệu backup mỗi 24h.
-   CI/CD tự động trên Cloud.
-   Mã nguồn lưu trữ công khai trên GitHub.

---

## 7. Phụ lục

| Phiên bản | Ngày       | Mô tả              |
| --------- | ---------- | ------------------ |
| 1.0       | 21/10/2025 | Phiên bản khởi tạo |
