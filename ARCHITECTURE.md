# OmarKhazaal.com Architecture

## فلسفة المشروع

المشروع مبني وفق مبدأ:

Design First
Code Second

أي أن التصميم يقود البرمجة، وليس العكس.

---

# هيكل المشروع

app/

مسؤول عن صفحات Next.js فقط.

لا يحتوي على منطق واجهة معقد.

---

components/

كل شيء قابل لإعادة الاستخدام.

ينقسم إلى:

layout/

مكونات هيكل الموقع.

مثل:

Navbar

Footer

Sidebar

---

sections/

الأقسام الكاملة للصفحات.

مثل:

Hero

Manifesto

Courses

Books

About

---

ui/

العناصر الصغيرة.

مثل:

Button

Card

Heading

Text

Badge

Section

Container

Eye

---

lib/

الثوابت والمنطق.

مثل:

navigation

site

helpers

constants

---

styles/

Design System

يتكون من:

tokens.css

typography.css

utilities.css

animations.css

---

public/

الصور

الفيديو

الأيقونات

الخطوط

---

# قواعد المشروع

لا يكتب CSS داخل Components إلا عند الضرورة.

لا تكرر أي كود.

كل Component يجب أن يكون قابلاً لإعادة الاستخدام.

لا تستخدم ألواناً مباشرة داخل المكونات.

كل الألوان تأتي من Design Tokens.

لا تستخدم قياسات عشوائية.

كل المسافات تأتي من النظام.

---

# تسمية الملفات

PascalCase

مثال

Button.tsx

SectionTitle.tsx

CourseCard.tsx

---

# تسمية المتغيرات

camelCase

مثال

courseList

featuredArticles

---

# الترتيب داخل Component

Imports

Types

Component

Return

Export

---

# الأولوية

وضوح الكود أهم من قصره.

الجمال أهم من كثرة المؤثرات.

الهوية أهم من التقليد.
