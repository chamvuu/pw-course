# git undo
- chuyển file từ vùng staging sang working directory
- git restore --staged <file>
  dk: phải có ít nhất 1 commit thì mới thực hiện lệnh redo được 
- git reset HEAD~1: reset 1 commit về commit trước đó.

# git branch
- git branch <tên_branch>: dùng để tạo branch mới
- git branch: dùng để xem tất cả các branch 
- git checkout <tên_branch>: chuyển sang nhánh mới 
- git checkout -b <tên>: vừa tạo vừa chuyển sang nhánh mới 
- git branch -D <tên nhánh>: xóa branch
NOTE: LUÔN PULL CODE TRƯỚC KHI TẠO BRANCH

# git ignore file 
- File .gitignore là một file cấu hình trong Git, giúp chỉ định những file và thư mục nào sẽ không được Git theo dõi

# Convention 
- snake_case: cham_vu
- kebab_case: đặt tên file và folder
- camelCase: đặt tên biến và hàm
- PascalCase: đặt tên class

# Object 

const/let <variable_name> = {
key1: value1,
key2: value2,

...
}

- với let có thể thay đổi giá trị bên trong object và gán vào object mới 
- với const có thể thay đổi giá trị bên trong object nhưng không gán được vào object mới 
# Array 
const Arr = [ ];
- mảng có thể chứa object 
# Function 
function <nameFunction>() {
// code
}