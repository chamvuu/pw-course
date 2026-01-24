//1. Viết hàm multiply nhận 2 tham số a và b, in ra kết quả nhân của chúng. Gọi hàm với 2 cặp giá trị khác nhau.
 function multiply(a , b){
    let tich = a * b;
    console.log(tich);
 
 }
 multiply( 3, 7);
 multiply( 11, 45);


//2. Viết hàm findMin nhận 3 tham số a, b, c, trả về giá trị nhỏ nhất. Gọi hàm và in kết quả với 2 bộ số khác nhau.
function findMin( a, b, c ){
    let min = Math.min(a, b, c);
    return min;
 };

console.log(findMin(66, 43, 7)); 
console.log(findMin(645, 7, 8));

/*3. Viết hàm getTopStudents nhận 2 tham số:
● students: mảng các object, mỗi object chứa name (tên) và score (điểm).
● threshold: ngưỡng điểm để được coi là "top" (số).
Hàm trả về mảng mới chứa tên của những học sinh có điểm >= threshold.
Gọi hàm với danh sách thực tế và in kết quả.*/

function getTopStudents(students, threshold ){
    let topArr = [ ];

    for( let i = 0; i < students.length ; i++ ){
        if( students[i].score >= threshold){
            topArr.push(students[i].name);
        }
    }
    return topArr;
}
 const students = [
        {
            name : "Cham Vu",
            score : 3
        },
        {
            name : "Minh Duc",
            score : 10
        },
        {
            name : "Minh Duc Beo",
            score : 9
        }
    ];

    const threshold = 7;
    let resultTopStudents = getTopStudents(students, threshold);
    console.log('Top student: ', resultTopStudents);


/*4. Viết hàm calculateInterest nhận 3 tham số:
● principal: số tiền gửi ban đầu (số).
● rate: lãi suất hàng năm (phần trăm, ví dụ 5 nghĩa là 5%).
● years: số năm gửi.
Hàm tính và trả về tổng số tiền (gốc + lãi) sau years năm, sử dụng công thức lãi
đơn: total = principal + principal * rate * years / 100. Gọi hàm với ví dụ thực tế và
in kết quả.*/

function calculateInterest( principal, rate, years){
    let total = principal + principal * rate * years / 100;
    return total;
}; 
 
 let totalInterest = (calculateInterest( 1_000_000_000, 10, 5));
 console.log(`Tổng số tiền là: ${totalInterest}`);