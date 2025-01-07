export const metrics = [
	{
		name: "Трафик",
		description: "Это общее количество всех посещений сайта за определённый период времени, включая повторы. Трафик позволяет понять масштаб популярности сайта, привлечён ли интерес пользователей. Рост трафика обычно свидетельствует о правильной маркетинговой стратегии или интересном контенте.",
		important: true
	},
	{
		name: "Уникальные посетители",
		description: "Показывает количество уникальных пользователей, которые посетили сайт в указанный период. Каждый человек учитывается только один раз, даже если он зашёл на сайт несколько раз. Это важно для анализа реального охвата аудитории, чтобы исключить влияние повторных визитов.",
		important: true
	},
	{
		name: "Просмотры страниц",
		description: "Общее количество просмотров всех страниц сайта, включая повторы. Эта метрика показывает, насколько глубоко пользователи исследуют контент сайта, и может быть полезна для оценки интереса к материалам или продуктам.",
		important: false
	},
	{
		name: "Среднее время на сайте",
		description: "Средняя продолжительность времени, которое пользователи проводят на сайте за один визит. Эта метрика помогает понять, насколько контент или интерфейс сайта удерживают внимание пользователей. Чем больше времени пользователи проводят, тем выше вероятность конверсий.",
		important: true
	},
	{
		name: "Показатель отказов",
		description: "Процент пользователей, которые покинули сайт после просмотра только одной страницы. Высокий показатель отказов может указывать на то, что пользователи не нашли нужную информацию или сайт неудобен. Оптимизация контента и дизайна может помочь снизить этот показатель.",
		important: true
	},
	{
		name: "Конверсии",
		description: "Количество пользователей, которые выполнили целевое действие, например, зарегистрировались, оформили заказ или подписались на рассылку. Эта метрика является ключевой для оценки эффективности сайта в достижении его бизнес-целей.",
		important: true
	},
	{
		name: "Источники трафика",
		description: "Анализ распределения пользователей по источникам: поисковые системы, социальные сети, переходы по ссылкам с других сайтов и прямые заходы (ввод URL вручную). Это помогает понять, какие каналы продвижения работают лучше всего.",
		important: false
	},
	{
		name: "Органический трафик",
		description: "Количество пользователей, которые пришли на сайт из результатов поисковых систем без использования платной рекламы. Высокий органический трафик указывает на успешную SEO-оптимизацию сайта и наличие релевантного контента.",
		important: true
	},
	{
		name: "Реферальный трафик",
		description: "Число пользователей, которые пришли на сайт по ссылкам с других ресурсов, таких как партнёрские сайты или блоги. Эта метрика позволяет оценить эффективность внешних коллабораций и PR-кампаний.",
		important: false
	},
	{
		name: "Социальный трафик",
		description: "Посетители, которые пришли на сайт через социальные сети, такие как ВКонтакте, Facebook, Instagram или Twitter. Используется для анализа успешности продвижения в социальных платформах и контент-стратегии.",
		important: false
	},
	{
		name: "Время загрузки страницы",
		description: "Время, за которое страница сайта полностью загружается и становится доступной для взаимодействия. Долгая загрузка может ухудшить пользовательский опыт, снизить позиции в поисковых системах и увеличить показатель отказов.",
		important: true
	},
	{
		name: "SEO-оценка",
		description: "Комплексный показатель, отражающий, насколько хорошо сайт оптимизирован для поисковых систем. Включает такие аспекты, как наличие ключевых слов, мета-теги, структура сайта, внутренние ссылки и скорость загрузки.",
		important: true
	},
	{
		name: "Ошибки сайта",
		description: "Анализ технических ошибок, таких как отсутствующие страницы (404), проблемы с кодом (CSS или JavaScript) или ошибки сервера. Устранение таких проблем помогает улучшить работу сайта и повысить доверие пользователей.",
		important: true
	},
	{
		name: "Мобильная оптимизация",
		description: "Проверка удобства использования сайта на мобильных устройствах. Оцениваются такие факторы, как адаптивный дизайн, читабельность текста и удобство нажатия кнопок. Мобильная оптимизация является ключевым фактором ранжирования Google.",
		important: true
	},
	{
		name: "Внешние ссылки",
		description: "Анализ ссылок, ведущих на сайт с других ресурсов. Качество внешних ссылок влияет на авторитетность сайта в глазах поисковых систем и его SEO-ранжирование.",
		important: true
	},
	{
		name: "Внутренние ссылки",
		description: "Анализ структуры ссылок внутри сайта. Хорошая организация внутренних ссылок улучшает навигацию для пользователей и помогает поисковым системам лучше индексировать контент.",
		important: true
	},
	{
		name: "Использование ключевых слов",
		description: "Оценка того, как часто и насколько правильно используются ключевые слова на сайте. Это влияет на релевантность страниц для поисковых систем и их позиции в результатах поиска.",
		important: false
	},
	{
		name: "Позиции в поисковых системах",
		description: "Ранжирование сайта в поисковой выдаче по различным ключевым запросам. Чем выше позиции, тем больше вероятность, что пользователи кликнут на сайт.",
		important: true
	},
	{
		name: "Рейтинг домена (DR)",
		description: "Показатель авторитетности домена, основанный на количестве и качестве внешних ссылок. Высокий DR указывает на надёжность сайта и его популярность среди других ресурсов.",
		important: false
	},
	{
		name: "Рейтинг страницы (PR)",
		description: "Индикатор популярности конкретной страницы сайта. Определяется её ссылочной массой и активностью пользователей. Чем выше PR, тем больше её вес в рамках сайта.",
		important: false
	},
	{
		name: "SSL-сертификат",
		description: "Проверка наличия защищённого соединения HTTPS. Наличие SSL-сертификата защищает данные пользователей и увеличивает доверие к сайту, что особенно важно для интернет-магазинов или банковских сервисов.",
		important: true
	},
	{
		name: "Доступность сайта",
		description: "Процент времени, когда сайт был доступен для пользователей. Высокая доступность свидетельствует о стабильной работе сервера и инфраструктуры сайта.",
		important: false
	},
	{
		name: "CTR (Click-Through Rate)",
		description: "Показатель кликабельности ссылок, объявлений или элементов сайта. Высокий CTR говорит о том, что контент или реклама привлекают внимание пользователей.",
		important: true
	}
]
