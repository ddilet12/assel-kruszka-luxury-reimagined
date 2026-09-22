import { Link } from "@tanstack/react-router";
import logo from "@/assets/assel-kruszka-logo.png";
// Footer keeps the live white text mark: the supplied logo file only has a
// black/red version for light backgrounds, so there is no matching light
// version to show on the dark footer (see AUDIT.md / logo install notes).
export function Brand({inverse=false}:{inverse?:boolean}){if(inverse)return <Link to="/" aria-label="ASSEL KRUSZKA home" className="block leading-none text-footer-foreground"><span className="font-display text-[20px] tracking-[0.08em] sm:text-[23px]">ASSEL KRUSZKA</span><span className="mt-1 block text-center text-[7px] font-semibold tracking-[0.28em] text-primary">REBELLIOUS ELEGANCE</span></Link>;return <Link to="/" aria-label="ASSEL KRUSZKA home" className="block"><img src={logo} alt="" width={1600} height={376} className="h-8 w-auto sm:h-9"/></Link>}
