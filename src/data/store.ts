import burgundy from "@/assets/product-burgundy.jpg";
import dress from "@/assets/product-ivory-dress.jpg";
import whiteSuit from "@/assets/product-white-suit.jpg";
import knit from "@/assets/product-knit.jpg";
import pinstripeWhiteBlazer from "@/assets/product-pinstripe-white-blazer.jpg";
import pinstripeWhiteSkirt from "@/assets/product-pinstripe-white-skirt.jpg";
import pinstripeCharcoalBlazer from "@/assets/product-pinstripe-charcoal-blazer.jpg";
import pinstripeCharcoalSkirt from "@/assets/product-pinstripe-charcoal-skirt.jpg";
import pinstripeNavyEditorial from "@/assets/product-pinstripe-navy-editorial.jpg";
import pinstripeNavySet from "@/assets/product-pinstripe-navy-set.jpg";

export type Locale = "en" | "ru";
export type Product = { id:string; slug:string; name:{en:string;ru:string}; price:number; category:string; images:string[]; colors:string[]; sizes:string[]; description:{en:string;ru:string} };
export const localProducts: Product[] = [
{id:"classic",slug:"classic-blazer",name:{en:"Classic blazer",ru:"Классический пиджак"},price:89990,category:"suits",images:[burgundy,burgundy],colors:["Burgundy","Black"],sizes:["XS","S","M","L"],description:{en:"A precise double-breasted silhouette cut from fluid premium suiting.",ru:"Выверенный двубортный силуэт из премиальной костюмной ткани."}},
{id:"midi",slug:"midi-dress",name:{en:"Midi dress with a neckline",ru:"Платье миди с вырезом"},price:69990,category:"dresses",images:[dress,dress],colors:["Ivory","Black"],sizes:["XS","S","M","L"],description:{en:"A fluid midi dress with a softly draped neckline and sculpted waist.",ru:"Струящееся платье миди с мягкой драпировкой и подчеркнутой талией."}},
{id:"oversized",slug:"oversized-blazer",name:{en:"Oversized blazer",ru:"Пиджак оверсайз"},price:59990,category:"blazers",images:[burgundy,burgundy],colors:["Burgundy","Black"],sizes:["S","M","L"],description:{en:"Confident proportions and impeccable tailoring for modern layering.",ru:"Уверенные пропорции и безупречный крой для современных образов."}},
{id:"pantsuit",slug:"white-pantsuit",name:{en:"Pantsuit",ru:"Брючный костюм"},price:49990,category:"jackets",images:[whiteSuit,whiteSuit],colors:["Ivory","Burgundy"],sizes:["XS","S","M","L","XL"],description:{en:"A luminous ivory suit balancing clean structure with ease.",ru:"Светлый костюм, сочетающий чистую архитектуру кроя и свободу."}},
{id:"knit",slug:"knit-set",name:{en:"Knit set",ru:"Трикотажный комплект"},price:45990,category:"knitwear",images:[knit,knit],colors:["Cream","Charcoal"],sizes:["XS/S","M/L"],description:{en:"A refined ribbed set in a soft, substantial premium knit.",ru:"Изысканный комплект из мягкого плотного трикотажа премиум-класса."}},
{id:"pinstripe-white",slug:"pinstripe-suit-white",name:{en:"Pinstripe suit — White",ru:"Костюм в полоску — белый"},price:79990,category:"sets",images:[pinstripeWhiteBlazer,pinstripeWhiteSkirt],colors:["White"],sizes:["XS","S","M","L"],description:{en:"A sharp pinstripe blazer and pencil skirt set with a red satin lining.",ru:"Чёткий костюм-комплект в полоску: пиджак и юбка-карандаш с красной атласной подкладкой."}},
{id:"pinstripe-charcoal",slug:"pinstripe-suit-charcoal",name:{en:"Pinstripe suit — Charcoal",ru:"Костюм в полоску — графит"},price:74990,category:"sets",images:[pinstripeCharcoalBlazer,pinstripeCharcoalSkirt],colors:["Charcoal"],sizes:["XS","S","M","L"],description:{en:"A sharp pinstripe blazer and pencil skirt set with a red satin lining.",ru:"Чёткий костюм-комплект в полоску: пиджак и юбка-карандаш с красной атласной подкладкой."}},
{id:"pinstripe-navy",slug:"pinstripe-suit-navy",name:{en:"Pinstripe suit — Navy",ru:"Костюм в полоску — тёмно-синий"},price:84990,category:"sets",images:[pinstripeNavyEditorial,pinstripeNavySet],colors:["Navy"],sizes:["XS","S","M","L"],description:{en:"A sharp pinstripe blazer and pencil skirt set with a red satin lining.",ru:"Чёткий костюм-комплект в полоску: пиджак и юбка-карандаш с красной атласной подкладкой."}},
];
export const categories=[
{slug:"suits",en:"Suits",ru:"Костюмы",image:burgundy},{slug:"blazers",en:"Blazers",ru:"Пиджаки",image:burgundy},{slug:"jackets",en:"Jackets",ru:"Брючные костюмы",image:whiteSuit},{slug:"dresses",en:"Dresses",ru:"Платья",image:dress},{slug:"outerwear",en:"Outerwear",ru:"Верхняя одежда",image:burgundy},{slug:"sets",en:"Sets",ru:"Костюмы-комплекты",image:pinstripeNavyEditorial},{slug:"knitwear",en:"Knitwear",ru:"Трикотаж",image:knit},
];
export const money=(value:number,locale:Locale)=>new Intl.NumberFormat(locale==="ru"?"ru-RU":"en-US").format(value)+" ₸";
export const copy={
en:{women:"Women",newIn:"New In",collections:"Collections",about:"About",shop:"Shop the collection",categories:"Categories",choose:"Choose your style",bestsellers:"Bestsellers",popular:"Most popular models",viewAll:"View all",aboutBrand:"About the brand",more:"More than just clothing",learn:"Learn more",quality:"Premium quality",delivery:"Fast delivery",payment:"Secure payment",care:"Care & support",search:"Search",wishlist:"Wishlist",bag:"Shopping bag",checkout:"Checkout",add:"Add to cart",size:"Select size",color:"Color",quantity:"Quantity",
  remove:"Remove",total:"Total",noProductsFound:"No products found.",wishlistEmpty:"Your wishlist is empty.",
  orderReceivedTitle:"Order received",orderReceivedText:"Thank you. Your order request has been created.",returnHome:"Return home",
  secureCheckout:"Secure checkout",contactDelivery:"Contact & delivery",firstName:"First name",lastName:"Last name",email:"Email",phone:"Phone",city:"City",postalCode:"Postal code",address:"Address",
  paymentTitle:"Payment",paymentMethod:"Card / Kaspi Pay",paymentNote:"This preview does not process a real payment.",yourOrder:"Your order",placeOrder:"Place order",
  pleaseSelectSize:"Please select a size.",sizeGuide:"Size guide",deliveryInfo:"Delivery information",deliveryInfoText:"Complimentary delivery across Kazakhstan on qualifying orders.",returnsInfo:"Returns information",returnsInfoText:"Returns are accepted within 14 days in original condition.",
  notFoundTitle:"Page not found",notFoundText:"The page you're looking for doesn't exist or has been moved.",goHome:"Go home",errorTitle:"This page didn't load",errorText:"Something went wrong on our end. You can try refreshing or head back home.",tryAgain:"Try again",
  footerTaglineLine1:"Elegant style. Modern women.",footerTaglineLine2:"Timeless values.",paymentMethodsLabel:"Payment methods:",copyrightLine:"© 2026 ASSEL KRUSZKA. All rights reserved.",legalLine:"Privacy Policy　|　Terms of Service",
  account:"Account",menu:"Menu",language:"Language",addToWishlist:"Add to wishlist",removeFromWishlist:"Remove from wishlist"},
ru:{women:"Женщины",newIn:"Новинки",collections:"Коллекции",about:"О бренде",shop:"Смотреть коллекцию",categories:"Категории",choose:"Выберите свой стиль",bestsellers:"Бестселлеры",popular:"Популярные модели",viewAll:"Смотреть все",aboutBrand:"О бренде",more:"Больше, чем одежда",learn:"Узнать больше",quality:"Премиальное качество",delivery:"Быстрая доставка",payment:"Безопасная оплата",care:"Забота и поддержка",search:"Поиск",wishlist:"Избранное",bag:"Корзина",checkout:"Оформить заказ",add:"Добавить в корзину",size:"Выберите размер",color:"Цвет",quantity:"Количество",
  remove:"Удалить",total:"Итого",noProductsFound:"Товары не найдены.",wishlistEmpty:"Ваш список избранного пуст.",
  orderReceivedTitle:"Заказ принят",orderReceivedText:"Спасибо! Ваш заказ оформлен.",returnHome:"На главную",
  secureCheckout:"Безопасное оформление",contactDelivery:"Контакты и доставка",firstName:"Имя",lastName:"Фамилия",email:"Email",phone:"Телефон",city:"Город",postalCode:"Индекс",address:"Адрес",
  paymentTitle:"Оплата",paymentMethod:"Карта / Kaspi Pay",paymentNote:"Это демо-версия — оплата не проводится по-настоящему.",yourOrder:"Ваш заказ",placeOrder:"Оформить заказ",
  pleaseSelectSize:"Пожалуйста, выберите размер.",sizeGuide:"Таблица размеров",deliveryInfo:"Информация о доставке",deliveryInfoText:"Бесплатная доставка по Казахстану при соответствующих условиях заказа.",returnsInfo:"Информация о возврате",returnsInfoText:"Возврат принимается в течение 14 дней при сохранении товарного вида.",
  notFoundTitle:"Страница не найдена",notFoundText:"Такой страницы не существует, или она была перемещена.",goHome:"На главную",errorTitle:"Страница не загрузилась",errorText:"Что-то пошло не так с нашей стороны. Попробуйте обновить страницу или вернуться на главную.",tryAgain:"Повторить",
  footerTaglineLine1:"Элегантный стиль. Современная женщина.",footerTaglineLine2:"Вечные ценности.",paymentMethodsLabel:"Способы оплаты:",copyrightLine:"© 2026 ASSEL KRUSZKA. Все права защищены.",legalLine:"Политика конфиденциальности　|　Условия использования",
  account:"Аккаунт",menu:"Меню",language:"Язык",addToWishlist:"Добавить в избранное",removeFromWishlist:"Убрать из избранного"}}
export const footerNav={
en:[{title:"Navigation",links:["Search","Customer Care","Contact Us","Delivery","Returns & Exchanges","Size Guide","Loyalty Program"]},
    {title:"About the Brand",links:["About Us","Partners","Wholesale Enquiries"]},
    {title:"Legal Information",links:["Privacy Policy","Terms of Service"]}],
ru:[{title:"Навигация",links:["Поиск","Помощь клиентам","Связаться с нами","Доставка","Возврат и обмен","Таблица размеров","Программа лояльности"]},
    {title:"О бренде",links:["О нас","Партнёры","Оптовые предложения"]},
    {title:"Правовая информация",links:["Политика конфиденциальности","Условия использования"]}]}
