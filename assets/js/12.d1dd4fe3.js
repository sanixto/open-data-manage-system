(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{619:function(t,v,a){t.exports=a.p+"assets/img/SQL_scheme.b6684a80.png"},641:function(t,v,a){"use strict";a.r(v);var _=a(34),e=Object(_.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"проєктування-бази-даних"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#проєктування-бази-даних"}},[t._v("#")]),t._v(" Проєктування бази даних")]),t._v(" "),_("p",[t._v("В рамках проекту розробляється:")]),t._v(" "),_("ul",[_("li",[t._v("ER-модель")])]),t._v(" "),_("img",{attrs:{src:"https://www.plantuml.com/plantuml/svg/bLHDRu904BtpApOS6qpqIeoHjDf3qulIfjSjZ0qf0baM6zBqltVs2tRHjTQOQ6RUsttpvi6wvPJnxbW60LIyu3rve9pkWPFlWE2dQtBA8KzuB1eWQnc3IGs_F-h7EcHRbF2lKzmZqhunz8eU8IRfvYqzGoKdMfJqlOHjpH3jxoSPB-hAWeoOP-1K27w2Nb_u2Vrm7o4vj1ah6i6F1n7dz5TQTaRnIVot98_eUvpresRcfb6m8_kb1NPfU48QshPVDSizVZmoMd4pvLZUrQN7p16pvoZj1iUDaG97nVQITED1-NRezzIaBrn4Yv0iPpCIpgExS0YK3Pb7H68w2IA8SbOH6-GE3fec8taRJq0LSTZOtqG3bKIakj7G7AIln7pYB2jwoZuxYmv-FiN760M6RWzKonV1KYJa656JKHnxBSoL9SXmOL-5pBf73ID3Uwcjj8iC-hjZO9G6vy6MQEic3RkASQsL3u3kBCqyavU3VQ9E-NH6HwN6oFqOQqnjfHudgu8bTyOrL3c-U7y1",alt:"uml diagram"}}),t._v(" "),_("p",[t._v("Пояснення до "),_("strong",[t._v("ER-моделі")]),t._v(":")]),t._v(" "),_("p",[t._v("Задачі, які стоять перед нами:")]),t._v(" "),_("ol",[_("li",[t._v("Керування структурою датасета.")]),t._v(" "),_("li",[t._v("Супроводження датасетів метаданими.")]),t._v(" "),_("li",[t._v("Забезпечення доступу до датасетів.")])]),t._v(" "),_("hr"),t._v(" "),_("ol",[_("li",[t._v("Керування структурою датасета")])]),t._v(" "),_("p",[t._v("Датасет - це колекція файлів, кожен файл відноситься до одного датасету, в зворотньому напрямку: датасет може складатись з будь-якої кількості файлів, включаючи можливість бути пустими, в тому випадку, коли при створенні датасету він ще не має жодних файлів.")]),t._v(" "),_("p",[t._v("Для того, щоб упорядкувати датасети, вони відносяться до категорій: датасет може мати одну категорію, причому, бувають ситуації, коли датасет не віднесений до жодної з категорій. Категорії являють собою ієрархічне дерево, вони  можуть мати або не мати надкатегорію.")]),t._v(" "),_("hr"),t._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[t._v("Супроводження датасетів метаданими.")])]),t._v(" "),_("p",[t._v("Важливо супроводжувати дані інформацією, яка буде характеризувати до якої області вони відносяться, хто їх створив, хто ними володіє і т.д. Для цього ми використовуємо метадані.")]),t._v(" "),_("p",[t._v("Є задекларовані  ключі метаданих, в них є поле як ключ, це може бути автор, колаборатор, ліцензія і т.д., є опис, який дозволяє нам зрозуміти сенс того чи іншого ключа. Ключем метаданих будуть помічені багато датасетів, тому між цими сутностями виникають відношення багато на багато, для того, щоб це вирішити між ними вставляється асоціююча сутність зі значенням MetaDataValue, яка показує, що до конкретного датасету відноситься конкретне значення ключа метаданих.\nМетаданими ми також супроводжуємо категорії та саме файли даних. Конкретне значення відноситься або до категорії, або до датасета, або до датафайлу. Для встановлення цих взаємозв’язків ми використовуємо посилання (CategoryRef, DataSetRef, DataFileRef).\nМетадані можуть бути зібрані в ієрархічні структури, наприклад складні метадані будуть складатися з інших метаданих (наприклад автор буде складатися з ім’я, прізвища, контакту).")]),t._v(" "),_("p",[t._v("Таблиця Type: типи тих об'єктів які зберігаються у нас - це категорії, датасети та датафайли. Для того, щоб створювати користувацький інтерфейс потрібні певні правила, тобто потрібно визначити, які ключі метаданих для яких об’єктів доступні. Таблиця AvailableFor дозволяє визначити, які ключі до яких об’єктів можна застосовувати. Це дасть нам можливість визначити, які набори метаданих, доступні для опису різних типів об'єктів.")]),t._v(" "),_("hr"),t._v(" "),_("ol",{attrs:{start:"3"}},[_("li",[t._v("Забезпечення доступу до датасетів.")])]),t._v(" "),_("p",[t._v("У нас є користувачі, вони мають різні права доступу до датасетів, ці права укладені в об’єкті Grant. Кожен дозвіл зв’язаний з датасетом і конкретним користувачем. Типи операції укладені в ActionType (наприклад створити, оновити, видалити і т.д.). Підхід, коли кожному Grant’у відповідає один тип операції, один користувач та один датасет називається вибірковий підхід до формування авторизації доступу до ресурсів, але при великій кількості користувачів він стає занадто складним, в першу чергу для адміністратора, який виставляє ці права. Тому існує груповий підхід, він пов’язаний з тим, що типи операцій складаються в групи, які називають зазвичай ролями і Grant видається користувачу фактично як Role. Системі буде приходити запрос, в якому є тип операції, ідентифікатор користувача і об’єкт над яким ми хочемо виконувати дію, внаслідок чого система зможе перевірити існування Grant’а та чи відповідає йому та операція, яку просить виконати користувач і як результат система прийме рішення, чи давати доступ для виконання дії над об’єктом. Користувачам призначають Role і потім при необхідності йому призначаються додаткові можливості. Таким чином вирішується задача з розділенням прав доступа на різні об’єкти в базах (в нашому випадку це датасети, відносно яких визначаються можливі операції над ними і можливість формувати для кожного користувача AvailableAction).")]),t._v(" "),_("p",[t._v("Нам обов'язково потрібно підтримувати життєвий цикл, в залежності від того в якому стані знаходяться наші об'єкти, тобто на якій стадії життєвого циклу, вони повинні по-різному оброблятися, відображатися  нашою системою. Для того, щоб записати дії, які відбуваються над датасетом, вводиться таблиця Action (має атрибут Date, що дозволяє нам зафіксувати час зміни)), яке пов'язується, по-перше, з Grant’ом, тому що знаючи його ми можемо визначити користувача та дію, яку він виконува, по-друге, з станом (таблиця State), в який цей об’єкт буде переходити.")]),t._v(" "),_("hr"),t._v(" "),_("ul",[_("li",[t._v("реляційна схема")])]),t._v(" "),_("p",[_("img",{attrs:{src:a(619),alt:"alt text"}})])])}),[],!1,null,null,null);v.default=e.exports}}]);