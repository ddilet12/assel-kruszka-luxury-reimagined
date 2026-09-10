import burgundy from "@/assets/product-burgundy.jpg";
import dress from "@/assets/product-ivory-dress.jpg";
import whiteSuit from "@/assets/product-white-suit.jpg";
import knit from "@/assets/product-knit.jpg";

export type Locale = "en" | "ru";
export type Product = { id:string; slug:string; name:{en:string;ru:string}; price:number; category:string; images:string[]; colors:string[]; sizes:string[]; description:{en:string;ru:string} };
export const products: Product[] = [
{id:"classic",slug:"classic-blazer",name:{en:"Classic blazer",ru:"Классический пиджак"},price:89990,category:"suits",images:[burgundy,burgundy],colors:["Burgundy","Black"],sizes:["XS","S","M","L"],description:{en:"A precise double-breasted silhouette cut from fluid premium suiting.",ru:"Выверенный двубортный силуэт из премиальной костюмной ткани."}},
{id:"midi",slug:"midi-dress",name:{en:"Midi dress with a neckline",ru:"Платье миди с вырезом"},price:69990,category:"dresses",images:[dress,dress],colors:["Ivory","Black"],sizes:["XS","S","M","L"],description:{en:"A fluid midi dress with a softly draped neckline and sculpted waist.",ru:"Струящееся платье миди с мягкой драпировкой и подчеркнутой талией."}},
{id:"oversized",slug:"oversized-blazer",name:{en:"Oversized blazer",ru:"Пиджак оверсайз"},price:59990,category:"blazers",images:[burgundy,burgundy],colors:["Burgundy","Black"],sizes:["S","M","L"],description:{en:"Confident proportions and impeccable tailoring for modern layering.",ru:"Уверенные пропорции и безупречный крой для современных образов."}},
{id:"pantsuit",slug:"white-pantsuit",name:{en:"Pantsuit",ru:"Брючный костюм"},price:49990,category:"jackets",images:[whiteSuit,whiteSuit],colors:["Ivory","Burgundy"],sizes:["XS","S","M","L","XL"],description:{en:"A luminous ivory suit balancing clean structure with ease.",ru:"Светлый костюм, сочетающий чистую архитектуру кроя и свободу."}},
{id:"knit",slug:"knit-set",name:{en:"Knit set",ru:"Трикотажный комплект"},price:45990,category:"knitwear",images:[knit,knit],colors:["Cream","Charcoal"],sizes:["XS/S","M/L"],description:{en:"A refined ribbed set in a soft, substantial premium knit.",ru:"Изысканный комплект из мягкого плотного трикотажа премиум-класса."}},
];
export const categories=[
{slug:"suits",en:"Suits",ru:"Костюмы",image:burgundy},{slug:"blazers",en:"Blazers",ru:"Пиджаки",image:burgundy},{slug:"jackets",en:"Jackets",ru:"Брючные костюмы",image:whiteSuit},{slug:"dresses",en:"Dresses",ru:"Платья",image:dress},{slug:"outerwear",en:"Outerwear",ru:"Верхняя одежда",image:burgundy},{slug:"sets",en:"Sets",ru:"Костюмы-комплекты",image:burgundy},{slug:"knitwear",en:"Knitwear",ru:"Трикотаж",image:knit},
];
export const money=(value:number,locale:Locale)=>new Intl.NumberFormat(locale==="ru"?"ru-RU":"en-US").format(value)+" ₸";
export const copy={
en:{women:"Women",newIn:"New In",collections:"Collections",about:"About",shop:"Shop the collection",categories:"Categories",choose:"Choose your style",bestsellers:"Bestsellers",popular:"Most popular models",viewAll:"View all",aboutBrand:"About the brand",more:"More than just clothing",learn:"Learn more",quality:"Premium quality",delivery:"Fast delivery",payment:"Secure payment",care:"Care & support",search:"Search",wishlist:"Wishlist",bag:"Shopping bag",checkout:"Checkout",add:"Add to cart",size:"Select size",color:"Color",quantity:"Quantity"},
ru:{women:"Женщины",newIn:"Новинки",collections:"Коллекции",about:"О бренде",shop:"Смотреть коллекцию",categories:"Категории",choose:"Выберите свой стиль",bestsellers:"Бестселлеры",popular:"Популярные модели",viewAll:"Смотреть все",aboutBrand:"О бренде",more:"Больше, чем одежда",learn:"Узнать больше",quality:"Премиальное качество",delivery:"Быстрая доставка",payment:"Безопасная оплата",care:"Забота и поддержка",search:"Поиск",wishlist:"Избранное",bag:"Корзина",checkout:"Оформить заказ",add:"Добавить в корзину",size:"Выберите размер",color:"Цвет",quantity:"Количество"}}
