import type { Locale } from "@/data/store";

export type InfoPageSlug = "delivery" | "returns" | "size-guide" | "loyalty" | "privacy" | "terms";

type InfoPageCopy = { title: string; intro: string; sections: { heading: string; body: string }[] };

// Plain-language pages for the footer links. They only restate what the shop already promises
// (free delivery in Kazakhstan on qualifying orders, 14-day returns in original condition, Kaspi payment)
// and point everything else to info@asselkruszka.com — to be reviewed by the brand before relying on them legally.
// Seller details expected by Kazakhstani e-commerce rules. Fill in and a "Seller" section appears on the Terms page.
export const SELLER = { name: "", taxId: "", address: "" };

export const infoPages: Record<Locale, Record<InfoPageSlug, InfoPageCopy>> = {
  en: {
    delivery: {
      title: "Delivery",
      intro: "We deliver across Kazakhstan, to CIS countries and internationally to eligible destinations.",
      sections: [
        { heading: "Astana and Almaty", body: "1–2 business days by courier after your order ships." },
        { heading: "Other cities of Kazakhstan", body: "3–7 business days by courier or Kazpost, depending on the city." },
        { heading: "Shipping & delivery", body: "From Astana, Kazakhstan, to your wardrobe.\n\nInternational shipping is available to eligible destinations, subject to current courier coverage and local import requirements." },
        { heading: "Shipping options", body: "Depending on your destination, shipping may be arranged through DHL Express, FedEx, UPS, or an alternative service such as QazPost/EMS or CDEK." },
        { heading: "Estimated transit times", body: "DHL Express general estimates:\nEurope — including France, Germany, Italy, Spain, the Netherlands, Belgium, Austria, Poland, the United Kingdom and Switzerland: 2–3 days\nUnited States: 3–5 days*\nCanada: 3–5 days*\nAustralia: 3–5 days*\nBrazil: 3–5 days*\n\n* The 3–5-day estimate is DHL Kazakhstan’s general worldwide indication, rather than a confirmed delivery window for each country listed. Availability and transit time must be checked for your exact delivery address. Remote locations and customs clearance may require additional time." },
        { heading: "Complimentary shipping & door-to-door delivery", body: "We offer complimentary shipping within Kazakhstan, to CIS countries and internationally to eligible destinations. Shipping is included in the price of your purchase.\n\nWe usually deliver orders directly to our customers’ doors, subject to courier coverage and local delivery conditions." },
        { heading: "Import duties & taxes", body: "Complimentary shipping does not include import duties, VAT, local taxes or customs clearance fees that may apply in the destination country, including the United Arab Emirates, the United States, European countries, Canada, Australia and Brazil.\n\nAny such charges are determined by the destination country’s authorities and are the responsibility of the recipient. We do not cover or reimburse these charges. Payment may be required before your order can be released by customs or delivered.\n\nPlease check your local import requirements before placing your order." },
        { heading: "Tracking", body: "We contact you by phone or email when your order ships and send the tracking details, so you always know when to expect it." },
      ],
    },
    returns: {
      title: "Returns & Exchanges",
      intro: "We want you to love your ASSEL KRUSZKA pieces.",
      sections: [
        { heading: "Return window", body: "Under the Law of the Republic of Kazakhstan «On Protection of Consumer Rights», you can exchange or return a non-food item of proper quality within 14 calendar days of purchase if it has not been worn or washed, keeps its presentation, tags and labels, and you have a document confirming the purchase (order confirmation or payment receipt)." },
        { heading: "How to return", body: "Email info@asselkruszka.com with your order details and the reason for the return, and we will explain the next steps." },
        { heading: "Exchanges", body: "If you need a different size, tell us and we will arrange an exchange where possible." },
        { heading: "Refunds", body: "If an exchange is not possible (for example the size you need is not available), we return the amount paid for the item. The refund goes back the way you paid, after we receive and inspect the item." },
        { heading: "Items of improper quality", body: "If an item arrives with a defect or does not match the order, you keep all rights provided by Kazakhstani consumer law: you may ask for a replacement, repair, a price reduction or a refund, and we cover return shipping. Please write to us as soon as you notice the problem and attach photos." },
      ],
    },
    "size-guide": {
      title: "Size Guide",
      intro: "Sizes are shown on every product page. Measurements below are body measurements in centimetres.",
      sections: [
        { heading: "Size chart", body: "XS (RU 40–42): bust 82–86, waist 62–66, hips 88–92\nS (RU 42–44): bust 86–90, waist 66–70, hips 92–96\nM (RU 44–46): bust 90–94, waist 70–74, hips 96–100\nL (RU 46–48): bust 94–98, waist 74–78, hips 100–104" },
        { heading: "How to measure", body: "Bust: around the fullest part. Waist: around the narrowest part. Hips: around the fullest part. Keep the tape snug but not tight." },
        { heading: "Need help choosing?", body: "If you are between sizes or unsure, email info@asselkruszka.com with your height and measurements and we will help you choose the right size." },
      ],
    },
    loyalty: {
      title: "Loyalty Program",
      intro: "A small circle for the clients who choose ASSEL KRUSZKA again and again.",
      sections: [
        { heading: "What you get", body: "Early access to new collections and personal help with choosing a size or a look." },
        { heading: "How to join", body: "Place your first order — we will contact you about joining. Questions: info@asselkruszka.com." },
      ],
    },
    privacy: {
      title: "Privacy Policy",
      intro: "How ASSEL KRUSZKA handles your personal data.",
      sections: [
        { heading: "Legal basis and consent", body: "We process personal data in accordance with the Law of the Republic of Kazakhstan «On Personal Data and Their Protection». By placing an order, submitting a form or writing to us you give your consent to the collection and processing of the data you provide, for the purposes described below. You can withdraw your consent at any time by writing to info@asselkruszka.com." },
        { heading: "What we collect", body: "The details you give us when you order or write to us: name, phone number, delivery address and the items you buy." },
        { heading: "How we use it", body: "Only to process, deliver and confirm your order, and to reply to your messages. We do not sell your data." },
        { heading: "Payments and service providers", body: "Payments are made through Kaspi Pay; we never see or store your card details. We share the minimum needed with the payment service, our store platform (Shopify) and delivery partners so your order can be completed. Some of them may process data outside Kazakhstan; we choose providers that protect personal data and do not share it for any other purpose." },
        { heading: "Storage and security", body: "We keep your data only as long as needed to complete your order, meet legal and accounting requirements and handle possible claims, then delete or anonymise it. We take technical and organisational measures to protect it from unauthorised access, loss or disclosure." },
        { heading: "Cookies", body: "The site uses cookies and similar technologies that are necessary for the cart and checkout to work. You can disable cookies in your browser settings, but parts of the site may then stop working." },
        { heading: "Your rights", body: "You have the right to know what data we hold about you, to ask us to correct, block or delete it, and to withdraw your consent: info@asselkruszka.com. We respond within the time set by law." },
      ],
    },
    terms: {
      title: "Terms of Service",
      intro: "The simple rules for shopping with ASSEL KRUSZKA.",
      sections: [
        { heading: "Public offer", body: "The information on this site is a public offer (Civil Code of the Republic of Kazakhstan). The contract of sale is concluded when you place an order and we confirm it. Before ordering, check the item, size, price and delivery details." },
        { heading: "Orders and prices", body: "Prices are shown in Kazakhstani tenge (₸). An order is confirmed once payment is received. We may correct an obvious pricing error and, if we do, you can cancel the order and receive a full refund." },
        { heading: "Payment", body: "We accept payment online through Kaspi Pay. Card and payment details are processed by the payment service; we never see or store them." },
        { heading: "Delivery, exchange and return", body: "Delivery, exchange and return terms are described on the Delivery and Returns & Exchanges pages. These terms do not limit your rights under the Law of the Republic of Kazakhstan «On Protection of Consumer Rights»." },
        { heading: "Brand materials", body: "All photographs, texts and designs on this site belong to ASSEL KRUSZKA and may not be used without permission." },
        { heading: "Complaints and disputes", body: "If you have a complaint, write to info@asselkruszka.com — we will review it and reply. Disputes that cannot be settled by agreement are resolved in the courts of the Republic of Kazakhstan." },
      ],
    },
  },
  ru: {
    delivery: {
      title: "Доставка",
      intro: "Мы доставляем по всему Казахстану, в страны СНГ и в подходящие страны по всему миру.",
      sections: [
        { heading: "Астана и Алматы", body: "1–2 рабочих дня курьером после отправки заказа." },
        { heading: "Другие города Казахстана", body: "3–7 рабочих дней курьером или Казпочтой, в зависимости от города." },
        { heading: "Доставка", body: "Из Астаны, Казахстан, прямо в ваш гардероб.\n\nМеждународная доставка доступна в подходящие страны с учётом текущего покрытия курьерских служб и местных правил импорта." },
        { heading: "Способы доставки", body: "В зависимости от страны назначения доставка может быть организована через DHL Express, FedEx, UPS или альтернативные службы, такие как QazPost/EMS или CDEK." },
        { heading: "Ориентировочные сроки доставки", body: "Ориентировочные сроки DHL Express:\nЕвропа — включая Францию, Германию, Италию, Испанию, Нидерланды, Бельгию, Австрию, Польшу, Великобританию и Швейцарию: 2–3 дня\nСША: 3–5 дней*\nКанада: 3–5 дней*\nАвстралия: 3–5 дней*\nБразилия: 3–5 дней*\n\n* Срок 3–5 дней — это общая ориентировочная оценка DHL Kazakhstan для международных отправлений, а не гарантированный период доставки для каждой из перечисленных стран. Возможность доставки и точное время в пути зависят от конкретного адреса назначения. В случае доставки в отдалённые районы или необходимости прохождения таможенного оформления может потребоваться дополнительное время." },
        { heading: "Бесплатная доставка «до двери»", body: "Мы предлагаем бесплатную доставку по Казахстану, в страны СНГ, а также в ряд других стран. Стоимость доставки уже включена в цену вашего заказа.\n\nКак правило, мы осуществляем доставку заказов непосредственно «до двери» получателя (при условии наличия курьерского покрытия и с учётом местных условий доставки)." },
        { heading: "Импортные пошлины и налоги", body: "Бесплатная доставка не покрывает импортные пошлины, НДС, местные налоги или таможенные сборы, которые могут взиматься в стране назначения (включая Объединённые Арабские Эмираты, США, страны Европы, Канаду, Австралию, Бразилию и другие государства).\n\nРазмер подобных платежей определяется органами власти страны назначения, и ответственность за их уплату лежит на получателе. Мы не покрываем и не возмещаем такие расходы. Для прохождения таможенной очистки или осуществления доставки может потребоваться предварительная оплата данных сборов.\n\nПожалуйста, ознакомьтесь с правилами импорта, действующими в вашей стране, перед оформлением заказа." },
        { heading: "Отслеживание", body: "Мы свяжемся с вами по телефону или почте, когда заказ будет отправлен, и пришлём данные для отслеживания — вы всегда будете знать, когда его ждать." },
      ],
    },
    returns: {
      title: "Возврат и обмен",
      intro: "Мы хотим, чтобы вам нравились вещи ASSEL KRUSZKA.",
      sections: [
        { heading: "Срок возврата", body: "В соответствии с Законом Республики Казахстан «О защите прав потребителей» вы можете обменять или вернуть непродовольственный товар надлежащего качества в течение 14 календарных дней с момента покупки, если он не носился и не стирался, сохранены товарный вид, бирки и ярлыки, и есть документ, подтверждающий покупку (подтверждение заказа или чек об оплате)." },
        { heading: "Как оформить возврат", body: "Напишите на info@asselkruszka.com, указав данные заказа и причину возврата, — мы расскажем, что делать дальше." },
        { heading: "Обмен", body: "Если нужен другой размер, сообщите нам — по возможности организуем обмен." },
        { heading: "Возврат денег", body: "Если обмен невозможен (например, нужного размера нет в наличии), мы возвращаем уплаченную за товар сумму. Деньги возвращаются тем же способом, которым вы платили, после получения и проверки изделия." },
        { heading: "Товар ненадлежащего качества", body: "Если изделие пришло с браком или не соответствует заказу, за вами сохраняются все права по законодательству Казахстана о защите прав потребителей: вы можете потребовать замену, ремонт, уменьшение цены или возврат денег, а обратную доставку оплачиваем мы. Напишите нам, как только заметите проблему, и приложите фото." },
      ],
    },
    "size-guide": {
      title: "Таблица размеров",
      intro: "Размеры указаны на странице каждого товара. Ниже — обхваты тела в сантиметрах.",
      sections: [
        { heading: "Таблица размеров", body: "XS (RU 40–42): грудь 82–86, талия 62–66, бёдра 88–92\nS (RU 42–44): грудь 86–90, талия 66–70, бёдра 92–96\nM (RU 44–46): грудь 90–94, талия 70–74, бёдра 96–100\nL (RU 46–48): грудь 94–98, талия 74–78, бёдра 100–104" },
        { heading: "Как снять мерки", body: "Грудь — по самой выступающей части. Талия — по самой узкой части. Бёдра — по самой широкой части. Сантиметр должен прилегать, но не стягивать." },
        { heading: "Нужна помощь с выбором?", body: "Если вы между размерами или сомневаетесь, напишите на info@asselkruszka.com свой рост и мерки — поможем подобрать размер." },
      ],
    },
    loyalty: {
      title: "Программа лояльности",
      intro: "Небольшой круг для клиентов, которые выбирают ASSEL KRUSZKA снова и снова.",
      sections: [
        { heading: "Что вы получаете", body: "Ранний доступ к новым коллекциям и личную помощь с выбором размера или образа." },
        { heading: "Как присоединиться", body: "Сделайте первый заказ — мы свяжемся с вами. Вопросы: info@asselkruszka.com." },
      ],
    },
    privacy: {
      title: "Политика конфиденциальности",
      intro: "Как ASSEL KRUSZKA обращается с вашими персональными данными.",
      sections: [
        { heading: "Правовое основание и согласие", body: "Мы обрабатываем персональные данные в соответствии с Законом Республики Казахстан «О персональных данных и их защите». Оформляя заказ, отправляя форму или обращаясь к нам, вы даёте согласие на сбор и обработку указанных вами данных для целей, описанных ниже. Согласие можно отозвать в любой момент, написав на info@asselkruszka.com." },
        { heading: "Что мы собираем", body: "Данные, которые вы указываете при заказе или в обращении к нам: имя, номер телефона, адрес доставки и состав заказа." },
        { heading: "Как мы их используем", body: "Только чтобы оформить, доставить и подтвердить заказ и ответить на ваши сообщения. Мы не продаём ваши данные." },
        { heading: "Оплата и сервисы-партнёры", body: "Оплата проходит через Kaspi Pay; данные вашей карты мы не видим и не храним. Платёжному сервису, платформе магазина (Shopify) и службам доставки мы передаём только необходимый минимум, чтобы заказ мог быть выполнен. Часть из них может обрабатывать данные за пределами Казахстана; мы выбираем поставщиков, которые защищают персональные данные, и не передаём их для других целей." },
        { heading: "Хранение и защита", body: "Мы храним данные только столько, сколько нужно для выполнения заказа, соблюдения требований закона и учёта, а также для рассмотрения возможных претензий, после чего удаляем или обезличиваем их. Мы принимаем технические и организационные меры против несанкционированного доступа, потери и раскрытия данных." },
        { heading: "Файлы cookie", body: "Сайт использует cookie и похожие технологии, необходимые для работы корзины и оформления заказа. Вы можете отключить cookie в настройках браузера, но часть функций сайта тогда перестанет работать." },
        { heading: "Ваши права", body: "Вы вправе знать, какие данные мы о вас храним, требовать их исправления, блокирования или удаления и отозвать своё согласие: info@asselkruszka.com. Мы отвечаем в сроки, установленные законом." },
      ],
    },
    terms: {
      title: "Условия использования",
      intro: "Простые правила покупок в ASSEL KRUSZKA.",
      sections: [
        { heading: "Публичная оферта", body: "Информация на этом сайте является публичной офертой (Гражданский кодекс Республики Казахстан). Договор купли-продажи заключается, когда вы оформили заказ, а мы его подтвердили. Перед заказом проверьте изделие, размер, цену и условия доставки." },
        { heading: "Заказы и цены", body: "Цены указаны в казахстанских тенге (₸). Заказ считается подтверждённым после получения оплаты. Мы можем исправить очевидную ошибку в цене; в таком случае вы вправе отменить заказ и получить полный возврат денег." },
        { heading: "Оплата", body: "Мы принимаем оплату онлайн через Kaspi Pay. Данные карты и платежа обрабатывает платёжный сервис — мы их не видим и не храним." },
        { heading: "Доставка, обмен и возврат", body: "Условия доставки, обмена и возврата описаны на страницах «Доставка» и «Возврат и обмен». Эти условия не ограничивают ваши права по Закону Республики Казахстан «О защите прав потребителей»." },
        { heading: "Материалы бренда", body: "Все фотографии, тексты и дизайн на сайте принадлежат ASSEL KRUSZKA и не могут использоваться без разрешения." },
        { heading: "Претензии и споры", body: "Если у вас есть претензия, напишите на info@asselkruszka.com — мы рассмотрим её и ответим. Споры, которые не удалось решить по соглашению, разрешаются в судах Республики Казахстан." },
      ],
    },
  },
};
