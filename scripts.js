// إضافة تأثيرات عند التمرير
document.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add("visible");
        }
    });
});

// التحقق إذا كان القسم داخل نطاق الرؤية
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
}

// تفعيل التأثيرات على الأقسام عند التمرير
window.addEventListener("load", function () {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add("visible");
        }
    });
});
