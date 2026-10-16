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
      intro: "We deliver across Kazakhstan.",
      sections: [
        { heading: "Delivery in Kazakhstan", body: "Complimentary delivery across Kazakhstan on qualifying orders. After you place your order, we confirm the delivery terms and timing for your address." },
        { heading: "Outside Kazakhstan", body: "Write to info@asselkruszka.com before ordering and we will tell you what is possible for your country." },
        { heading: "Your order on its way", body: "We contact you by phone or email when your order ships, so you always know when to expect it." },
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
      intro: "Sizes are shown on every product page.",
      sections: [
        { heading: "Need help choosing?", body: "If you are between sizes or unsure, email info@asselkruszka.com with your height and measurements (bust, waist, hips) and we will help you choose the right size." },
      ],
    },
    loyalty: {
      title: "Loyalty Program",
      intro: "Our loyalty program is being prepared.",
      sections: [
        { heading: "Be the first to know", body: "Follow us on Instagram or write to info@asselkruszka.com — we will let you know the moment it opens." },
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
      intro: "Мы доставляем по всему Казахстану.",
      sections: [
        { heading: "Доставка по Казахстану", body: "Бесплатная доставка по Казахстану при соответствующих условиях заказа. После оформления заказа мы подтверждаем условия и сроки доставки на ваш адрес." },
        { heading: "За пределы Казахстана", body: "Напишите на info@asselkruszka.com до заказа — мы подскажем, что возможно для вашей страны." },
        { heading: "Ваш заказ в пути", body: "Мы свяжемся с вами по телефону или почте, когда заказ будет отправлен, чтобы вы знали, когда его ждать." },
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
      intro: "Размеры указаны на странице каждого товара.",
      sections: [
        { heading: "Нужна помощь с выбором?", body: "Если вы между размерами или сомневаетесь, напишите на info@asselkruszka.com свой рост и мерки (грудь, талия, бёдра) — поможем подобрать размер." },
      ],
    },
    loyalty: {
      title: "Программа лояльности",
      intro: "Мы готовим программу лояльности.",
      sections: [
        { heading: "Узнайте первыми", body: "Подпишитесь на нас в Instagram или напишите на info@asselkruszka.com — сообщим, как только она откроется." },
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
