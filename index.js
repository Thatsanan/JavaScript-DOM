let count = 0;
function checkAnswer(answer) {
    const result = document.getElementById('result');
    if (answer === 'a') {
    result.textContent = "ถูกต้อง PIM ย่อมาจาก PIM";
    result.style.color = 'green';
    count++;
    } else {
    result.textContent = "Incorrect! Try again.";
    result.style.color = 'red'; 
    }
   }

   
   function checkAnswer1(answer) {
    const result2 = document.getElementById('result2');
    const result3 = document.getElementById('result3');
    if (answer === 'c') {
    result2.textContent = "ถูกต้อง บริษัท วาสอัพ ให้บริการในด้านจัดหาพนักงานด้าน IT";
    result2.style.color = 'green';
    count++;
    } else {
    result2.textContent = "Incorrect! Try again.";
    result2.style.color = 'red';
    }


    result3.textContent = "คุณได้คะแนนทั้งหมด " + count + " คะแนน"; // แสดงคะแนน
   
   
}
