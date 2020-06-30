# modbudget
modbudget
- กด Clone เป็น Download Zip
- แตกไฟล์จะได้ Folder modbudget-budget
- Copy Folder modbudget-budget ไว้ในโฟลเดอร์ที่จะวางเว็บไซต์
- ข้างใน modbudget-budget จะมี 2 Folder คือ Backend และ Frontend
- ใน Frontend จะมี Folder ชื่อ files ข้างในจะมี ไฟล์ sql สำหรับ import ฐานข้อมูล
- import ฐานข้อมูลสำเร็จ เข้า Folder backend/configs/ แก้ไขไฟล์ database.php
  - ใส่ $user, $password สำหรับ login ฐานข้อมูล ที่ /** Development */ บรรทัดที่ 20
- เปิด command ไปที่ path ของ folder Backend 
  - run คำสั่ง php -S 127.0.0.1:9000
- เปิด command อีกอันไปที่ path ของ folder Frontend
  - run คำสั่ง npm install รอจนติดตั้งเสร็จ
  - run คำสั่ง ng serve รอจน Compiled Successfully.
- เปิด เว็บไปที่ http://localhost:4200
  
