@echo off
echo 🚀 بدء رفع مشروع Youvi Cash إلى GitHub...

git init
git add .
git commit -m "🚀 أول رفع لمشروع Youvi Cash"
git branch -M main
git remote add origin https://github.com/yousifalamarat1221/youvi.git
git push -u origin main

echo ✅ تم رفع المشروع بنجاح!
pause