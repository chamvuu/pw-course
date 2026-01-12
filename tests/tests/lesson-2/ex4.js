/*Các thông số sức khỏe được tính như sau:
Cân nặng lý tưởng = Số lẻ của chiều cao (tính bằng cm) x 9 rồi chia 10
Mức cân tối đa = Bằng số lẻ của chiều cao (tính bằng cm)
Mức cân tối thiểu = Số lẻ của chiều cao (tính bằng cm) x 8 rồi chia 10
Như vậy, nếu bạn cao 1,7m, tức 170cm thì :
Cân cân nặng lý tưởng của bạn là: 70 x 9: 10 = 63 kg
Cân nặng tối đa là: 70kg
Cân nặng tối thiểu là: 70 x 8 :10 = 56 kg
a. Khai báo chiều cao của bạn (cm)
b. In ra cân nặng lý tưởng, cân nặng tối đa, cân nặng tối thiểu trên cùng một dòng.*/
/*----------------------------------------------  */                                


let high = 155; 
let ideal_weight = (55*9)/10;
let maxi_weight = 55;
let mini_weight = (55*8)/10;
console.log( "Ideal weight = " + ideal_weight + "kg" + ", " + "Maximum weight = " + maxi_weight + "kg" +  ", " 
    + "Minimum weight = " + mini_weight +"kg" );