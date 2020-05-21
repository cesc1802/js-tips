## Example Array string

```
var a = [1, 2, 3];
var b = [1, 2, 3];
var c = '1,2,3';

console.log(a == c);
console.log(b == c);
console.log(a == b);
```

## Description

- Khi so sánh Double Equals (==) giữa array và string, cụ thể là a hoặc b với c, Javascript sẽ tự động gọi arr.toString() để chuyển đổi array sang string trước khi so sánh, hai mảng a và b convert sang string sẽ là '1,2,3', vì thế a == c và b == c cho kết quả true.

- Khi so sánh Double Equals (==) hay Triple Equals (===) giữa các đối tượng là kiểu dữ liệu tham chiếu (Reference Type), như object, array, function, chúng ta không quan tâm đến giá trị mà đối tượng đang chứa, mà chỉ quan tâm đến chúng có cùng trỏ đến một địa chỉ ô nhớ hay không mà thôi. Trong trường hợp này, a và b là hai array trỏ đến hai ô nhớ khác nhau, vì thế a == b cho kết quả false.

## Example Array number 

```
var a = [9];
var b = [10];

console.log(a == 9);
console.log(b == 10);
console.log(a < b);
```

## Description

- Khi so sánh Double Equals (==) giữa array và number, Javascript sẽ chuyển đổi array sang number trước khi so sánh ([9] -> 9 và [10] -> 10), vì thế [9] == 9 và [10] == 10 cho kết quả true.

- Nhưng khi so sánh hai array với toán tử < hoặc >, lúc này array sẽ không được chuyển đổi sang number mà là sang string ([9] -> "9" và [10] -> "10"). Khi so sánh hai string thì sẽ so sánh theo alphabet với từng ký tự một, vì thế "9" < "10" cho kết quả là false vì "9" < "1" là sai.