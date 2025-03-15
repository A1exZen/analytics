export const metrics = [
	{
		"name": "Время ответа сервера",
		"description": "Время, которое сервер потратил на обработку запроса и отправку ответа. Чем быстрее это время, тем быстрее сайт может реагировать на запросы пользователей.",
		"important": true
	},
	{
		"name": "Общий размер страницы",
		"description": "Общий размер страницы, включая все ресурсы (изображения, скрипты и т. д.). Меньший размер страницы способствует более быстрой загрузке.",
		"important": true
	},
	{
		"name": "Индекс скорости",
		"description": "Показатель того, как быстро становится видимым основной контент на странице. Меньшее значение указывает на более быстрый рендеринг страницы.",
		"important": true
	},
	{
		"name": "Время до первого содержимого",
		"description": "Время, которое прошло до появления первого видимого элемента на странице, будь то текст или изображения. Чем быстрее этот элемент появляется, тем лучше для пользователя.",
		"important": true
	},
	{
		"name": "Время до самого большого содержимого",
		"description": "Время, которое прошло до отображения самого большого визуального элемента на странице. Это важный показатель для оценки времени загрузки важного контента.",
		"important": true
	},
	{
		"name": "Общее время блокировки",
		"description": "Время, в течение которого пользователь не может взаимодействовать с сайтом из-за выполнения долгих скриптов. Меньше блокирующего времени — лучше для пользовательского опыта.",
		"important": true
	},
	{
		"name": "Интерактивность",
		"description": "Время, которое прошло до того, как страница стала полностью интерактивной, и пользователь может начать взаимодействовать с ней.",
		"important": true
	},
	{
		"name": "Время до первого важного содержимого",
		"description": "Время, когда на странице появляется важный контент для пользователя. Это показатель того, когда пользователь начинает видеть полезную информацию.",
		"important": true
	},
	{
		"name": "Кумулятивное смещение макета",
		"description": "Показатель того, насколько страница стабильна во время загрузки. Меньший показатель CLS означает меньше случайных изменений в макете, что улучшает опыт пользователя.",
		"important": true
	},
	{
		"name": "Использование оптимизированных изображений",
		"description": "Показатель того, используются ли оптимизированные изображения на странице. Оптимизация изображений помогает уменьшить время загрузки.",
		"important": true
	},
	{
		"name": "RTT сети",
		"description": "Round Trip Time (RTT) сети, время, необходимое для передачи данных от клиента к серверу и обратно. Низкое значение RTT улучшает общую производительность сайта.",
		"important": false
	},
	{
		"name": "Оптимизация для мобильных устройств",
		"description": "Оценка, насколько хорошо сайт оптимизирован для мобильных устройств. Включает адаптивный дизайн и время загрузки на мобильных устройствах.",
		"important": true
	},
	{
		"name": "Средняя скорость загрузки",
		"description": "Среднее время загрузки страницы. Чем быстрее загрузка, тем лучше пользовательский опыт.",
		"important": true
	},
	{
		"name": "SSL-сертификат",
		"description": "Статус SSL-сертификата, который обеспечивает шифрование данных и защиту от атак типа MITM.",
		"important": true
	},
	{
		"name": "SEO-оценка",
		"description": "Оценка SEO-оптимизации сайта, включая использование ключевых слов, мета-тегов и мета-описания. Высокий SEO-скор помогает улучшить видимость сайта в поисковых системах.",
		"important": true
	},
	{
		"name": "Ссылки",
		"description": "Количество внутренних и внешних ссылок на сайте. Внешние ссылки могут повысить авторитет сайта, а внутренние — улучшить навигацию.",
		"important": false
	},
	{
		"name": "Оценка доступности",
		"description": "Оценка доступности сайта для пользователей с особыми потребностями, включая использование альтернативных текстов и ARIA меток.",
		"important": true
	},
	{
		"name": "Оценка процента отказов",
		"description": "Оценка процента пользователей, покидающих сайт сразу после посещения. Низкий показатель указывает на то, что пользователи находят нужную информацию.",
		"important": true
	},
	{
		"name": "Оценка трафика",
		"description": "Оценка трафика сайта по различным источникам, включая социальные сети, реферальный трафик и органический трафик. Это помогает понять, какие каналы приносят больше всего посетителей.",
		"important": true
	},
	{
		"name": "Оценка производительности",
		"description": "Оценка производительности сайта на мобильных и десктопных устройствах. Эти оценки помогают понять, как сайт работает на разных типах устройств.",
		"important": true
	},
	{
		"name": "Качество контента",
		"description": "Оценка качества контента на сайте, включая уникальность и актуальность. Хороший контент помогает удерживать пользователей и повышает SEO-оценку.",
		"important": true
	},
	{
		"name": "Авторитет домена",
		"description": "Авторитет домена, который определяется количеством и качеством внешних ссылок. Высокий авторитет домена помогает улучшить позицию сайта в поисковых системах.",
		"important": true
	},
	{
		"name": "Метрики вовлеченности пользователей",
		"description": "Метрики вовлеченности пользователей, такие как среднее время на сайте и количество просмотров страниц за сессию. Высокая вовлеченность указывает на интересный и полезный контент.",
		"important": true
	},
	{
		"name": "Обратные ссылки",
		"description": "Количество и качество обратных ссылок, которые ссылаются на сайт. Обратные ссылки являются важным фактором для SEO.",
		"important": true
	},
	{
		"name": "Актуальность контента",
		"description": "Оценка актуальности контента. Регулярное обновление контента помогает поддерживать сайт в поисковых системах и интересным для пользователей.",
		"important": true
	},
	{
		"name": "Уязвимости безопасности",
		"description": "Оценка уязвимостей безопасности сайта, включая XSS и CSRF. Защита от уязвимостей помогает обеспечить безопасность пользователей.",
		"important": true
	},
	{
		"name": "Рекомендации",
		"description": "Рекомендации для улучшения производительности, SEO, доступности, безопасности и качества контента сайта.",
		"important": false
	}
]
