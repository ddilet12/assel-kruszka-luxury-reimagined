import type { Locale } from "@/data/store";

const sizeRows = [
  { size: "XS", eu: "34", ru: "40", bust: "80", waist: "62", hips: "86" },
  { size: "S", eu: "36", ru: "42", bust: "84", waist: "66", hips: "90" },
  { size: "M", eu: "38", ru: "44", bust: "88", waist: "70", hips: "94" },
  { size: "L", eu: "40", ru: "46", bust: "92", waist: "74", hips: "98" },
];

type Item = { title: string; text: string };

const copy: Record<
  Locale,
  {
    subtitle: string;
    intro: string;
    columns: { size: string; eu: string; ru: string; bust: string; waist: string; hips: string };
    range: string;
    approx: string;
    fitHeading: string;
    fit: Item[];
    between: { lead: string; text: string };
    stretch: string;
    measureHeading: string;
    measureHint: string;
    figureAlt: string;
    steps: Item[];
    extraHeading: string;
    extra: Item[];
  }
> = {
  en: {
    subtitle: "Blazers • Jackets • Short jackets • Skirts • Trousers • Dresses",
    intro:
      "Measure your body and compare your measurements with the chart below. All measurements are in centimetres (cm) and refer to the body, not the finished garment.",
    columns: { size: "Size", eu: "EU*", ru: "RU / CIS*", bust: "Bust", waist: "Waist", hips: "Hips" },
    range: "Size range: XS, S, M and L. Availability depends on the style and collection.",
    approx:
      "* EU and RU / CIS labels are approximate references. Sizing varies between brands and national systems. Use body measurements as your main guide.",
    fitHeading: "Fit by garment",
    fit: [
      { title: "Blazers & tailored jackets", text: "Check bust, shoulders and sleeve length; check waist for fitted styles." },
      { title: "Short jackets & lacquer blazers", text: "Check bust and shoulders. Allow for the layers you plan to wear underneath." },
      { title: "Mini & midi skirts", text: "Check waist and hips. For high-waisted styles, measure your natural waist." },
      { title: "Trousers", text: "Check waist, hips and inside leg. Review the rise and leg length for the style." },
      { title: "Dresses", text: "Check bust, waist and hips. Review dress length and sleeve length where relevant." },
    ],
    between: {
      lead: "Between sizes?",
      text: "If your measurements fall across different sizes, contact us with your bust, waist, hips and height so we can help with the fit of your chosen style.",
    },
    stretch:
      "Fabric stretch, lining and cut affect the fit. Finished garment measurements and lengths should be checked in the individual product description.",
    measureHeading: "How to measure",
    measureHint: "Use a soft measuring tape • Stand naturally • Do not pull the tape tight",
    figureAlt: "Body measurement diagram with numbered points",
    steps: [
      { title: "1. Height", text: "Stand barefoot and upright. Measure from the top of your head to the floor." },
      { title: "2. Bust", text: "Measure around the fullest part of your bust, passing the tape under your arms." },
      { title: "3. Waist", text: "Measure around your natural waist, at the narrowest part of your torso. Tie a thin ribbon here as a reference." },
      { title: "4. Hips", text: "Measure horizontally around the fullest part of your hips and seat." },
      { title: "5. Inside leg", text: "Measure from the crotch to the ankle along the inside of your leg. Finished trouser length is checked separately." },
      { title: "6. Arm length", text: "Measure from the shoulder point over a slightly bent elbow to the wrist." },
      { title: "7. Shoulder length", text: "Measure from the base of your neck to the shoulder point. This is the length of one shoulder." },
      { title: "8. Upper arm", text: "Measure around the fullest part of your upper arm while it is relaxed." },
      { title: "9. Thigh", text: "Measure around the fullest part of one thigh, just below the seat." },
    ],
    extraHeading: "Additional measurements",
    extra: [
      { title: "Back waist length", text: "From the prominent bone at the base of the neck down to the natural waist." },
      { title: "Outside leg", text: "From the natural waist down the side of the leg to the ankle." },
      { title: "Seated crotch depth", text: "Sit upright on a firm chair. Measure vertically from the natural waist to the seat." },
      {
        title: "Garment length",
        text: "For skirts, check from the top of the waistband to the hem. For dresses and jackets, use the starting point stated in the product description.",
      },
    ],
  },
  ru: {
    subtitle: "Пиджаки • Жакеты • Короткие куртки • Юбки • Брюки • Платья",
    intro:
      "Снимите мерки и сравните их с таблицей ниже. Все значения указаны в сантиметрах (см) и относятся к параметрам тела, а не к замерам готовой одежды.",
    columns: { size: "Размер", eu: "EU*", ru: "RU / СНГ*", bust: "Грудь", waist: "Талия", hips: "Бёдра" },
    range: "Размерный ряд: XS, S, M и L. Наличие зависит от модели и коллекции.",
    approx:
      "* Соответствие EU и RU / СНГ ориентировочное. Размерные системы разных брендов и стран отличаются. Ориентируйтесь на мерки тела.",
    fitHeading: "Как выбрать размер по типу изделия",
    fit: [
      { title: "Пиджаки и жакеты", text: "Проверьте обхват груди, плечи и длину рукава; для приталенных моделей также обхват талии." },
      { title: "Короткие куртки и лаковые пиджаки", text: "Проверьте обхват груди и плечи. Учитывайте одежду, которую планируете носить под изделием." },
      { title: "Мини- и миди-юбки", text: "Проверьте обхваты талии и бёдер. Для моделей с высокой посадкой измеряйте естественную линию талии." },
      { title: "Брюки", text: "Проверьте талию, бёдра и внутреннюю длину ноги. Уточните высоту посадки и длину выбранной модели." },
      { title: "Платья", text: "Проверьте грудь, талию и бёдра. Уточните длину платья и рукава, если он предусмотрен." },
    ],
    between: {
      lead: "Мерки соответствуют разным размерам?",
      text: "Напишите нам ваши обхваты груди, талии, бёдер и рост — мы поможем подобрать размер выбранной модели.",
    },
    stretch:
      "На посадку влияют растяжимость ткани, подкладка и крой. Замеры готового изделия и его длину уточняйте в описании конкретной модели.",
    measureHeading: "Как снимать мерки",
    measureHint: "Используйте мягкую сантиметровую ленту • Стойте спокойно • Не затягивайте ленту",
    figureAlt: "Схема снятия мерок с пронумерованными точками",
    steps: [
      { title: "1. Рост", text: "Встаньте прямо, без обуви. Измерьте расстояние от макушки до пола." },
      { title: "2. Обхват груди", text: "Измерьте обхват по наиболее выступающим точкам груди, проводя ленту под руками." },
      { title: "3. Обхват талии", text: "Измерьте обхват в самом узком месте корпуса. Повяжите здесь тонкую ленту как ориентир." },
      { title: "4. Обхват бёдер", text: "Проведите ленту горизонтально вокруг наиболее выступающей части бёдер и ягодиц." },
      { title: "5. Внутренняя длина ноги", text: "Измерьте от промежности до щиколотки по внутренней стороне ноги. Длину готовых брюк уточняйте отдельно." },
      { title: "6. Длина руки", text: "Измерьте от плечевой точки через слегка согнутый локоть до запястья." },
      { title: "7. Длина плеча", text: "Измерьте от основания шеи до плечевого сустава. Это длина одного плеча." },
      { title: "8. Обхват плеча", text: "Измерьте обхват самой полной части верхней части руки. Рука должна быть расслаблена." },
      { title: "9. Обхват бедра", text: "Измерьте обхват самой полной части одной ноги, непосредственно под ягодицей." },
    ],
    extraHeading: "Дополнительные мерки",
    extra: [
      { title: "Длина спины до талии", text: "От выступающего позвонка у основания шеи до естественной линии талии." },
      { title: "Боковая длина ноги", text: "От естественной линии талии по боковой стороне ноги до щиколотки." },
      { title: "Высота сидения", text: "Сядьте прямо на твёрдый стул. Измерьте вертикально от талии до поверхности сиденья." },
      {
        title: "Длина изделия",
        text: "Юбку измеряйте от верхнего края пояса до низа. Для платья и жакета используйте точку начала измерения, указанную в описании товара.",
      },
    ],
  },
};

function Block({ items }: { items: Item[] }) {
  return (
    <dl className="mt-4 space-y-4 text-sm">
      {items.map((it) => (
        <div key={it.title}>
          <dt className="font-semibold">{it.title}</dt>
          <dd className="mt-0.5 leading-7 text-muted-foreground">{it.text}</dd>
        </div>
      ))}
    </dl>
  );
}

export function SizeGuide({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const cols = c.columns;
  return (
    <div className="mt-8 space-y-2">
      <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{c.subtitle}</p>
      <p className="text-sm leading-7 text-muted-foreground">{c.intro}</p>

      <div className="overflow-x-auto pt-2">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-border text-left text-[10px] uppercase tracking-[0.04em] min-[420px]:text-xs min-[420px]:tracking-[0.1em] text-muted-foreground">
              <th className="py-2 pr-2 min-[420px]:pr-4 font-medium">{cols.size}</th>
              <th className="py-2 pr-2 min-[420px]:pr-4 font-medium">{cols.eu}</th>
              <th className="py-2 pr-2 min-[420px]:pr-4 font-medium">{cols.ru}</th>
              <th className="py-2 pr-2 min-[420px]:pr-4 font-medium">{cols.bust}</th>
              <th className="py-2 pr-2 min-[420px]:pr-4 font-medium">{cols.waist}</th>
              <th className="py-2 font-medium">{cols.hips}</th>
            </tr>
          </thead>
          <tbody>
            {sizeRows.map((r) => (
              <tr key={r.size} className="border-b border-border text-muted-foreground">
                <td className="py-2 pr-2 min-[420px]:pr-4 font-semibold text-foreground">{r.size}</td>
                <td className="py-2 pr-2 min-[420px]:pr-4">{r.eu}</td>
                <td className="py-2 pr-2 min-[420px]:pr-4">{r.ru}</td>
                <td className="py-2 pr-2 min-[420px]:pr-4">{r.bust}</td>
                <td className="py-2 pr-2 min-[420px]:pr-4">{r.waist}</td>
                <td className="py-2">{r.hips}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="pt-2 text-sm leading-7 text-muted-foreground">{c.range}</p>
      <p className="text-xs leading-6 text-muted-foreground">{c.approx}</p>

      <h2 className="pt-8 text-sm font-semibold">{c.fitHeading}</h2>
      <Block items={c.fit} />
      <p className="pt-3 text-sm leading-7 text-muted-foreground">
        <span className="font-semibold text-foreground">{c.between.lead}</span> {c.between.text}
      </p>
      <p className="text-sm leading-7 text-muted-foreground">{c.stretch}</p>

      <h2 className="pt-8 text-sm font-semibold">{c.measureHeading}</h2>
      <p className="text-xs text-muted-foreground">{c.measureHint}</p>
      <img
        src={`/size-guide/measure-${locale}.png`}
        alt={c.figureAlt}
        width={990}
        height={1215}
        loading="lazy"
        className="mx-auto mt-4 h-auto w-full max-w-md border border-border bg-white"
      />
      <Block items={c.steps} />

      <h2 className="pt-8 text-sm font-semibold">{c.extraHeading}</h2>
      <Block items={c.extra} />
    </div>
  );
}
