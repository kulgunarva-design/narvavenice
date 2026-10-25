# Поисковая подготовка narvavenice.ee

Подготовлено 25 октября 2026 года. Основной адрес: https://narvavenice.ee/.

## Что сделано

- Русский текст доступен в корне, эстонский в /et/, английский в /en/. Всего 42 HTML-файла. Тексты присутствуют в исходном HTML; JavaScript не требуется для чтения перевода.
- Переключатели языка — обычные ссылки. Язык адреса имеет приоритет над ранее сохранённым выбором пользователя.
- У каждой страницы собственные title, description, canonical, Open Graph и JSON-LD. Нет фиктивных рейтингов, цен, экскурсий или расписания.
- Языковые версии связаны взаимными hreflang ru/et/en. x-default указывает на эстонскую версию. Существующие адреса страниц в корне сохранены.
- robots.txt разрешает обход. sitemap.xml содержит 30 содержательных страниц на актуальном домене и ссылки на 185 архивных фотографий в каждой языковой версии галереи.
- Формы report.html, add-listing.html, share-story.html и пустая оболочка event.html имеют noindex, follow; они не входят в sitemap. robots.txt их не блокирует, чтобы робот мог прочитать noindex.
- CNAME исправлен на narvavenice.ee; .nojekyll подходит для готового статического сайта на GitHub Pages.
- Галерея доступна в исходном HTML. После загрузки JavaScript сохраняются пагинация и просмотр фотографий.

## Публикация и фактическая индексация

Эти изменения подготовлены в локальной папке C:\kulgu. Подготовка файлов сама по себе не публикует их и не означает, что поисковики уже проиндексировали сайт.

1. Загрузить изменённые файлы и целиком новые папки et/ и en/ в корень репозитория kulgunarva-design/narvavenice. Сохранить существующие assets/ и img/. Дождаться успешного GitHub Pages deployment. Резервную копию seo-work/originals не загружать.
2. Проверить HTTPS и Enforce HTTPS в Settings → Pages. Не менять домен обратно на kulgunarva.ee. Проверить https://narvavenice.ee/, /et/, /en/, /robots.txt и /sitemap.xml.
3. В Google Search Console добавить ресурс «Домен» narvavenice.ee и подтвердить его предложенной Google DNS TXT-записью у регистратора. Альтернатива: ресурс «Префикс URL» https://narvavenice.ee/ с выданным Google HTML-файлом подтверждения в корне сайта. Коды проверки нужно получить в собственном аккаунте; их нельзя придумать заранее.
4. В Search Console → Sitemaps отправить https://narvavenice.ee/sitemap.xml. Через «Проверку URL» проверить главные страницы /, /et/, /en/, затем запросить индексирование. Проверить выбранный Google canonical и отсутствие запрета индексации.
5. В Bing Webmaster Tools добавить сайт или импортировать подтверждённый ресурс из Search Console, затем отправить тот же sitemap. Это также помогает обнаружению страниц в поиске Bing.
6. При необходимости продвижения в Яндексе добавить сайт в Яндекс Вебмастер и отправить sitemap после подтверждения владения.
7. Следить в кабинетах за отчётами индексирования и поисковыми запросами. Не отправлять один и тот же URL многократно: это не ускоряет обход.

Обход может занять от нескольких дней до нескольких недель. Sitemap помогает обнаружению страниц, но не гарантирует включение в поиск или позиции. Не требуется специальный тег meta keywords: Google его не использует для ранжирования.

## Слова и фразы на трёх языках

Это тематические варианты, а не отчёт о частотности. Приоритеты нужно уточнять по реальным показам и кликам в Search Console после запуска.

| Назначение | Русский | Eesti | English | Страница |
|---|---|---|---|---|
| Основное название | Нарвская Венеция; Кулгу Нарва; Нарвская Венеция Эстония | Narva Veneetsia; Kulgu Narva; Narva Veneetsia Eesti | Narva Venice; Kulgu Narva; Narva Venice Estonia | /, /et/, /en/ |
| Место и каналы | каналы Кулгу; лодочные гаражи Нарва; Нарвская Венеция каналы | Kulgu kanalid; Narva paadigaraažid; Kulgu paadigaraažid | Kulgu canals; Narva boat garages; Narva Venice canals | Главная и about.html |
| История | история Нарвской Венеции; история Кулгу | Narva Veneetsia ajalugu; Kulgu ajalugu | Narva Venice history; history of Kulgu | about.html |
| Фотографии | Нарвская Венеция фото; Кулгу фотографии | Narva Veneetsia fotod; Kulgu pildid | Narva Venice photos; Kulgu photo gallery | gallery.html |
| Сообщество | сообщество Кулгу; Нарвская Венеция мероприятия | Kulgu kogukond; Narva Veneetsia sündmused | Kulgu community; Narva Venice events | events.html, help.html |
| Контакты | Нарвская Венеция контакты; Кулгу контакты | Narva Veneetsia kontaktid; Kulgu kontaktid | Narva Venice contact; Kulgu contacts | contacts.html |

На страницах уже используются соответствующие названия в заголовках, описаниях и естественном тексте. Не добавляйте одинаковые списки слов во все абзацы.

## Что полезно добавить дальше

- Отдельную содержательную страницу «Как добраться / Kuidas tulla / How to get there»: проверенные ориентиры, карта, общественный транспорт, парковка и правила посещения. Тогда появится основание продвигать «Нарвская Венеция как добраться», «kuidas minna Narva Veneetsiasse», «how to get to Narva Venice».
- Уникальные рассказы жителей с разрешёнными к публикации фотографиями, подписями и датами. Новые материалы переводить на все три языка.
- После появления реальных мероприятий — отдельные статические страницы с датой, местом и описанием; включать их в sitemap. Сейчас список мероприятий пуст, Event-разметка не выдумана.
- Ссылку на новый сайт с принадлежащих вам страниц сообщества и релевантных местных ресурсов. Не покупать массовые ссылки.

## Обновление сайта

Сайт теперь имеет три статических варианта каждой страницы. При изменении содержательного текста синхронизируйте переводы в корне, et/ и en/, а также словари venice.js для динамических элементов. Общие стили и изображения остаются в единственном экземпляре. Не возвращайте автоматическую подмену языка по localStorage на уже выбранном языковом URL.

Если позднее narvavenice.ee полностью заменит старый сайт kulgunarva.ee, перенаправления 301 нужно настраивать на стороне старого домена/хостинга. Это отдельное решение: старый домен сейчас не изменялся.

## Официальные источники

- Языковые версии: https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites
- Hreflang: https://developers.google.com/search/docs/specialty/international/localized-versions
- Запрос обхода: https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl
- Sitemap: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- Google Search Console: https://search.google.com/search-console/
- Bing Webmaster Tools: https://www.bing.com/webmasters/
- Яндекс Вебмастер: https://webmaster.yandex.ru/
