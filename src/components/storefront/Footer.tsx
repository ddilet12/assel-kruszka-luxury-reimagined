import { Instagram,Search,ChevronDown } from "lucide-react";import { Link } from "@tanstack/react-router";import { Brand } from "./Brand";import { useStore } from "@/state/storefront";import { copy,footerNav } from "@/data/store";import { Accordion,AccordionContent,AccordionItem,AccordionTrigger } from "@/components/ui/accordion";
const CONTACT_EMAIL="info@asselkruszka.com";
// Footer entries that are just a way to reach the brand open an email; the value is an optional mailto query.
const MAIL_LABELS:Record<string,string>={"Customer Care":"","Помощь клиентам":"","Contact Us":"","Связаться с нами":"","Partners":"?subject=Partnership","Партнёры":"?subject=Partnership","Wholesale Enquiries":"?subject=Wholesale","Оптовые предложения":"?subject=Wholesale"};
const SEARCH_LABELS=["Search","Поиск"];
const ABOUT_LABELS=["About Us","О нас"];
const INFO_LABELS:Record<string,string>={"Delivery":"delivery","Доставка":"delivery","Returns & Exchanges":"returns","Возврат и обмен":"returns","Size Guide":"size-guide","Таблица размеров":"size-guide","Loyalty Program":"loyalty","Программа лояльности":"loyalty","Privacy Policy":"privacy","Политика конфиденциальности":"privacy","Terms of Service":"terms","Условия использования":"terms"};
const INSTAGRAM_URL="https://instagram.com/assel.kruszka";
const KASPI_PHONE="+7 778 965 4642";
function FooterLink({label}:{label:string}){const{setSearchOpen}=useStore();
if(SEARCH_LABELS.includes(label))return <button type="button" className="text-left" onClick={()=>setSearchOpen(true)}>{label}</button>;
if(ABOUT_LABELS.includes(label))return <Link to="/about">{label}</Link>;
if(label in MAIL_LABELS)return <a href={`mailto:${CONTACT_EMAIL}${MAIL_LABELS[label]}`}>{label}</a>;
const slug=INFO_LABELS[label];if(slug)return <Link to="/info/$slug" params={{slug}}>{label}</Link>;
return <span>{label}</span>}
function Group({g}:{g:(typeof footerNav)["en"][number]}){return <div><h3 className="mb-4 text-xs font-semibold">{g.title}</h3><ul className="space-y-2 text-[11px] leading-tight text-footer-muted">{g.links.map(x=><li key={x}><FooterLink label={x}/></li>)}</ul></div>}
export function Footer(){const{locale,setLocale,setSearchOpen}=useStore();const t=copy[locale];const groups=footerNav[locale];return <footer className="bg-footer text-footer-foreground"><div className="mx-auto max-w-[1440px] px-6 py-12 sm:px-10 lg:px-16"><div className="grid gap-10 md:grid-cols-[1.2fr_3fr_1.2fr]"><div><Brand inverse/><p className="mt-5 max-w-48 text-xs leading-5 text-footer-muted">{t.footerTaglineLine1}<br/>{t.footerTaglineLine2}</p><a href={`mailto:${CONTACT_EMAIL}`} className="mt-3 block py-1.5 text-xs text-footer-muted hover:text-footer-foreground">{CONTACT_EMAIL}</a><div className="mt-5 flex gap-4"><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex size-7 items-center justify-center hover:text-footer-foreground/70"><Instagram className="size-4"/></a></div></div><div className="hidden grid-cols-3 gap-10 md:grid">{groups.map(g=><Group g={g} key={g.title}/>) }</div><Accordion type="single" collapsible className="md:hidden">{groups.map(g=><AccordionItem value={g.title} key={g.title}><AccordionTrigger>{g.title}</AccordionTrigger><AccordionContent><Group g={g}/></AccordionContent></AccordionItem>)}</Accordion><div><h3 className="text-xs font-semibold">{t.language}</h3><label className="mt-3 flex border border-footer-line px-3"><select value={locale} onChange={e=>setLocale(e.target.value as "en"|"ru")} className="h-9 w-full bg-transparent text-xs outline-none"><option className="text-foreground" value="en">English</option><option className="text-foreground" value="ru">Русский</option></select><ChevronDown className="size-3 self-center"/></label><button type="button" onClick={()=>setSearchOpen(true)} className="mt-4 flex h-9 w-full items-center border border-footer-line px-3 text-xs text-footer-muted hover:text-footer-foreground"><span className="flex-1 text-left">{t.search}...</span><Search className="size-3"/></button>{/* Only Kaspi Pay is actually wired up today. The other methods below are
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
