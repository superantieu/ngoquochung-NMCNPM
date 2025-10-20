# 🧪 Lab 3.1 – Review Process Models and IDEs

## 🎯 Mục tiêu

- Hiểu và so sánh các mô hình phát triển phần mềm (SDLC Models).
- Làm quen với môi trường phát triển tích hợp (IDE).
- Thực hành xây dựng ứng dụng **Product Management** (thêm/sửa/xóa sản phẩm) bằng **TypeScript**.

---

## 🧩 Phần 1: Lý thuyết – So sánh các mô hình SDLC

### 1. Giới thiệu

**SDLC (Software Development Life Cycle)** là chu trình phát triển phần mềm có cấu trúc, bao gồm các giai đoạn:

> Requirement → Design → Implementation → Testing → Deployment → Maintenance

Mục tiêu của SDLC là đảm bảo phần mềm được phát triển **đúng yêu cầu**, **đúng tiến độ**, và **chất lượng cao**.

---

### 2. Các mô hình SDLC phổ biến

#### 🔹 Waterfall Model (Thác nước)

**Đặc điểm:**

- Quy trình tuyến tính, mỗi giai đoạn hoàn tất mới chuyển sang giai đoạn sau.
- Phù hợp với dự án có yêu cầu rõ ràng và ổn định.

**Ưu điểm:**

- Dễ hiểu, dễ quản lý.
- Có tài liệu chi tiết từng bước.

**Nhược điểm:**

- Khó thay đổi yêu cầu sau khi bắt đầu.
- Phát hiện lỗi muộn → tốn chi phí sửa chữa.

---

#### 🔹 Iterative Model (Lặp lại)

**Đặc điểm:**

- Phát triển phần mềm qua nhiều vòng lặp, mỗi vòng cho ra một phiên bản hoàn thiện hơn.

**Ưu điểm:**

- Phát hiện sớm lỗi.
- Có thể cung cấp sản phẩm mẫu sớm cho khách hàng.

**Nhược điểm:**

- Tốn thời gian và công sức quản lý nhiều vòng lặp.
- Yêu cầu kinh nghiệm cao.

---

#### 🔹 Agile Model (Linh hoạt)

**Đặc điểm:**

- Làm việc theo chu kỳ ngắn (Sprint) 1–4 tuần.
- Ưu tiên phản hồi khách hàng và cải tiến liên tục.

**Ưu điểm:**

- Linh hoạt, dễ thích nghi khi thay đổi.
- Tăng sự hài lòng của khách hàng.

**Nhược điểm:**

- Cần sự phối hợp chặt chẽ trong nhóm.
- Không phù hợp nếu khách hàng không sẵn sàng tương tác liên tục.

---

#### 🔹 Spiral Model (Xoắn ốc)

**Đặc điểm:**

- Kết hợp giữa Waterfall và Iterative.
- Mỗi vòng xoắn gồm 4 pha: Lập kế hoạch → Phân tích rủi ro → Thiết kế & Phát triển → Đánh giá.

**Ưu điểm:**

- Giảm rủi ro, thích hợp cho dự án lớn.
- Cho phép phản hồi sớm.

**Nhược điểm:**

- Chi phí cao.
- Quản lý phức tạp.

---

#### 🔹 DevOps Model

**Đặc điểm:**

- Tích hợp giữa **phát triển (Dev)** và **vận hành (Ops)**.
- Nhấn mạnh tự động hóa, CI/CD, giám sát và phản hồi liên tục.

**Ưu điểm:**

- Rút ngắn thời gian triển khai.
- Giảm lỗi và tăng ổn định.

**Nhược điểm:**

- Đòi hỏi hạ tầng mạnh và nhân lực có kỹ năng DevOps.

---

### 3. Bảng so sánh tổng quát

| Tiêu chí                | Waterfall | Iterative        | Agile                   | Spiral     | DevOps                  |
| ----------------------- | --------- | ---------------- | ----------------------- | ---------- | ----------------------- |
| Tính linh hoạt          | Thấp      | Trung bình       | Cao                     | Cao        | Rất cao                 |
| Chi phí thay đổi        | Cao       | Trung bình       | Thấp                    | Trung bình | Thấp                    |
| Quản lý rủi ro          | Thấp      | Trung bình       | Trung bình              | Cao        | Trung bình              |
| Phù hợp với             | Dự án nhỏ | Dự án trung bình | Dự án thay đổi liên tục | Dự án lớn  | Dự án vận hành liên tục |
| Tham gia của khách hàng | Thấp      | Có               | Cao                     | Cao        | Cao                     |

---

### 4. Kết luận

- **Waterfall** phù hợp với dự án có yêu cầu cố định.
- **Agile** phù hợp với môi trường học tập, startup, hoặc dự án cần linh hoạt.
- Trong bài lab này, nhóm chọn **Agile Model** vì dễ thích nghi, dễ chia Sprint, và dễ demo tiến độ.

---

## ⚙️ Phần 2: Thực hành – Product Management Project (TypeScript)

### 1. Công cụ và công nghệ

- **IDE:** Visual Studio Code
- **Ngôn ngữ:** TypeScript
- **Runtime:** Node.js (Express Framework)
- **Thư viện:** express, cors, body-parser
- **Kiểu dữ liệu:** CRUD sản phẩm gồm `id`, `name`, `price`.

---

### 2. Cấu trúc thư mục

```bash
product-management/
├── src/
│   ├── index.ts
│   └── routes/
│       └── products.ts
├── package.json
├── tsconfig.json
├── nodemon.json
├── README.md
└── .gitignore
```
