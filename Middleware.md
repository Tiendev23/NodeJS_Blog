# Middleware

## Ý nghĩa
 - Phần mềm trung gian (Đứng giữa các thành phần trong mô hình phần mềm)

 Browser (Client) =================Request===============> Server (NodeJS)



 Browser (Client) <=================Response===============Server (NodeJS)

## Vai trò
 - Giống như "Bác bảo vệ"

 Nhà ==========================> Bác bảo vệ(middleware):Sự kiện(soát vé)

 Nhà <========================== Sự kiện
 
1. Soát vé (kiểm soát -> Validation)
2. Không cho vào
3. Cho phép vào (Validation passed -> cho vào)
4. Chỉnh sửa / thay đổi

## Ứng dụng
- Dựng chức năng xác thực (Authentication)
- Chức năng phân quyền (Authorization)
- Chia sẻ các giá trị của biến tới các view(BE)
- Chức năng kiểm soát truy cập (Access Control)