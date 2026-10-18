import type { ReactNode } from "react";
import { Instagram,Search,ChevronDown } from "lucide-react";import { Link } from "@tanstack/react-router";import { Brand } from "./Brand";import { useStore } from "@/state/storefront";import { copy,footerNav } from "@/data/store";import { Accordion,AccordionContent,AccordionItem,AccordionTrigger } from "@/components/ui/accordion";
const CONTACT_EMAIL="info@asselkruszka.com";
// Footer entries that are just a way to reach the brand open an email; the value is an optional mailto query.
const MAIL_LABELS:Record<string,string>={"Customer Care":"","Помощь клиентам":"","Contact Us":"","Связаться с нами":"","Partners":"?subject=Partnership","Партнёры":"?subject=Partnership","Wholesale Enquiries":"?subject=Wholesale","Оптовые предложения":"?subject=Wholesale"};
const SEARCH_LABELS=["Search","Поиск"];
const ABOUT_LABELS=["About Us","О нас"];
const INFO_LABELS:Record<string,string>={"Delivery":"delivery","Доставка":"delivery","Returns & Exchanges":"returns","Возврат и обмен":"returns","Size Guide":"size-guide","Таблица размеров":"size-guide","Loyalty Program":"loyalty","Программа лояльности":"loyalty","Privacy Policy":"privacy","Политика конфиденциальности":"privacy","Terms of Service":"terms","Условия использования":"terms"};
const KASPI_PHONE="+7 778 965 4642";

// Brand social links. Add TikTok / WhatsApp later by filling `url` and adding an icon: a link without a url is not shown.
const PinterestIcon=()=><svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/></svg>;
const SOCIALS:{id:string;label:string;url:string|null;icon:()=>ReactNode}[]=[
{id:"instagram",label:"Instagram",url:"https://www.instagram.com/assel.kruszka/",icon:()=><Instagram className="size-4"/>},
{id:"pinterest",label:"Pinterest",url:"https://pin.it/2PTvwHr6a",icon:PinterestIcon},
];
function SocialLinks(){return <>{SOCIALS.filter(x=>x.url).map(x=><a key={x.id} href={x.url!} target="_blank" rel="noopener noreferrer" aria-label={x.label} title={x.label} className="flex size-8 items-center justify-center rounded-full border border-footer-line text-footer-foreground transition-colors hover:border-footer-foreground hover:bg-footer-foreground/10">{x.icon()}</a>)}</>}
function FooterLink({label}:{label:string}){const{setSearchOpen}=useStore();
if(SEARCH_LABELS.includes(label))return <button type="button" className="text-left" onClick={()=>setSearchOpen(true)}>{label}</button>;
if(ABOUT_LABELS.includes(label))return <Link to="/about">{label}</Link>;
if(label in MAIL_LABELS)return <a href={`mailto:${CONTACT_EMAIL}${MAIL_LABELS[label]}`}>{label}</a>;
const slug=INFO_LABELS[label];if(slug)return <Link to="/info/$slug" params={{slug}}>{label}</Link>;
return <span>{label}</span>}
function Group({g}:{g:(typeof footerNav)["en"][number]}){return <div><h3 className="mb-4 text-xs font-semibold">{g.title}</h3><ul className="space-y-2 text-[11px] leading-tight text-footer-muted">{g.links.map(x=><li key={x}><FooterLink label={x}/></li>)}</ul></div>}
export function Footer(){const{locale,setLocale,setSearchOpen}=useStore();const t=copy[locale];const groups=footerNav[locale];return <footer className="bg-footer text-footer-foreground"><div className="mx-auto max-w-[1440px] px-6 py-12 sm:px-10 lg:px-16"><div className="grid gap-10 md:grid-cols-[1.2fr_3fr_1.2fr]"><div><Brand inverse/><p className="mt-5 max-w-48 text-xs leading-5 text-footer-muted">{t.footerTaglineLine1}<br/>{t.footerTaglineLine2}</p><a href={`mailto:${CONTACT_EMAIL}`} className="mt-3 block py-1.5 text-xs text-footer-muted hover:text-footer-foreground">{CONTACT_EMAIL}</a><div className="mt-5 flex gap-4"><SocialLinks/></div></div><div className="hidden grid-cols-3 gap-10 md:grid">{groups.map(g=><Group g={g} key={g.title}/>) }</div><Accordion type="single" collapsible className="md:hidden">{groups.map(g=><AccordionItem value={g.title} key={g.title}><AccordionTrigger>{g.title}</AccordionTrigger><AccordionContent><Group g={g}/></AccordionContent></AccordionItem>)}</Accordion><div><h3 className="text-xs font-semibold">{t.language}</h3><label className="mt-3 flex border border-footer-line px-3"><select value={locale} onChange={e=>setLocale(e.target.value as "en"|"ru")} className="h-9 w-full bg-transparent text-xs outline-none"><option className="text-foreground" value="en">English</option><option className="text-foreground" value="ru">Русский</option></select><ChevronDown className="size-3 self-center"/></label><button type="button" onClick={()=>setSearchOpen(true)} className="mt-4 flex h-9 w-full items-center border border-footer-line px-3 text-xs text-footer-muted hover:text-footer-foreground"><span className="flex-1 text-left">{t.search}...</span><Search className="size-3"/></button>{/* Only Kaspi Pay is actually wired up today. The other methods below are
    commented out (not deleted) so the real logos/labels can be restored
    the moment each one is actually connected. */}
<p className="mt-5 text-[10px] uppercase tracking-[0.14em] text-footer-muted">{t.paymentMethodsLabel}</p>
<div className="mt-2.5 flex">
  <span className="rounded-sm border border-footer-foreground/35 px-3 py-1.5 text-left">
    <span className="block font-display text-[13px] tracking-wide text-footer-foreground">Kaspi Pay</span>
    <a href={`tel:${KASPI_PHONE.replace(/\s/g,"")}`} className="block py-1.5 text-[10px] text-footer-muted hover:text-footer-foreground">{KASPI_PHONE}</a>
  </span>
</div>
{/*
<div className="mt-2 flex flex-wrap gap-1.5">{["VISA","MC","PayPal","Kaspi QR","Kaspi Kredit","Kaspi Red","Pay","G Pay"].map(x=><span className="bg-footer-chip px-2 py-1 text-[8px] text-footer" key={x}>{x}</span>)}</div>
*/}</div></div><div className="mt-10 flex flex-col gap-3 border-t border-footer-line pt-5 text-[9px] text-footer-muted sm:flex-row sm:justify-between"><span>{t.copyrightLine}</span><span>{t.legalLine}</span></div></div></footer>}
