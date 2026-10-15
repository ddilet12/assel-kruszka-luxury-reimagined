import type { Locale } from "@/data/store";

export type InfoPageSlug = "delivery" | "returns" | "size-guide" | "loyalty" | "privacy" | "terms";

type InfoPageCopy = { title: string; intro: string; sections: { heading: string; body: string }[] };

// Plain-language pages for the footer links. They only restate what the shop already promises
// (free delivery in Kazakhstan on qualifying orders, 14-day returns in original condition, Kaspi payment)
// and point everything else to info@asselkruszka.com — to be reviewed by the brand before relying on them legally.
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
        { heading: "Return window", body: "Returns are accepted within 14 days in original condition." },
        { heading: "How to return", body: "Email info@asselkruszka.com with your order details and the reason for the return, and we will explain the next steps." },
        { heading: "Exchanges and refunds", body: "If you need a different size, tell us and we will arrange an exchange where possible. Refunds are confirmed with you by email once the item has been checked." },
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
        { heading: "What we collect", body: "The details you give us when you order or write to us: name, phone number, delivery address and the items you buy." },
        { heading: "How we use it", body: "Only to process, deliver and confirm your order, and to reply to your messages. We do not sell your data." },
        { heading: "Payments", body: "Payments are made through Kaspi Pay. We never see or store your card details." },
        { heading: "Service providers", body: "We share the minimum needed with the payment service and delivery partners so your order can be completed." },
        { heading: "Your rights", body: "You can ask us to see, correct or delete your data at any time: info@asselkruszka.com." },
      ],
    },
    terms: {
      title: "Terms of Service",
      intro: "The simple rules for shopping with ASSEL KRUSZKA.",
      sections: [
        { heading: "Orders and prices", body: "Prices are shown in Kazakhstani tenge (₸). An order is confirmed once payment is received." },
        { heading: "Payment", body: "We accept payment through Kaspi Pay." },
        { heading: "Delivery and returns", body: "Delivery and return terms are confirmed with you when you order; questions can be sent to info@asselkruszka.com." },
        { heading: "Brand materials", body: "All photographs, texts and designs on this site belong to ASSEL KRUSZKA and may not be used without permission." },
        { heading: "Questions", body: "Questions about these terms: info@asselkruszka.com." },
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
        { heading: "Срок возврата", body: "Возврат принимается в течение 14 дней при сохранении товарного вида." },
        { heading: "Как оформить возврат", body: "Напишите на info@asselkruszka.com, указав данные заказа и причину возврата, — мы расскажем, что делать дальше." },
        { heading: "Обмен и возврат средств", body: "Если нужен другой размер, сообщите нам — по возможности организуем обмен. Возврат средств подтверждаем по почте после проверки изделия." },
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
        { heading: "Что мы собираем", body: "Данные, которые вы указываете при заказе или в обращении к нам: имя, номер телефона, адрес доставки и состав заказа." },
        { heading: "Как мы их используем", body: "Только чтобы оформить, доставить и подтвердить заказ и ответить на ваши сообщения. Мы не продаём ваши данные." },
        { heading: "Оплата", body: "Оплата проходит через Kaspi Pay. Данные вашей карты мы не видим и не храним." },
        { heading: "Сервисы-партнёры", body: "Платёжному сервису и службам доставки мы передаём только необходимый минимум, чтобы заказ мог быть выполнен." },
        { heading: "Ваши права", body: "Вы можете в любое время запросить, исправить или удалить свои данные: info@asselkruszka.com." },
      ],
    },
    terms: {
      title: "Условия использования",
      intro: "Простые правила покупок в ASSEL KRUSZKA.",
      sections: [
        { heading: "Заказы и цены", body: "Цены указаны в казахстанских тенге (₸). Заказ считается подтверждённым после получения оплаты." },
        { heading: "Оплата", body: "Мы принимаем оплату через Kaspi Pay." },
        { heading: "Доставка и возврат", body: "Условия доставки и возврата подтверждаются при оформлении заказа; вопросы можно присылать на info@asselkruszka.com." },
        { heading: "Материалы бренда", body: "Все фотографии, тексты и дизайн на сайте принадлежат ASSEL KRUSZKA и не могут использоваться без разрешения." },
        { heading: "Вопросы", body: "Вопросы по этим условиям: info@asselkruszka.com." },
      ],
    },
  },
};
