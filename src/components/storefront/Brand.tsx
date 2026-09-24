import { Link } from "@tanstack/react-router";
import logo from "@/assets/assel-kruszka-logo.png";
import logoWhite from "@/assets/assel-kruszka-logo-white.png";
export function Brand({inverse=false}:{inverse?:boolean}){if(inverse)return <Link to="/" aria-label="ASSEL KRUSZKA home" className="block max-w-48 leading-none"><img src={logoWhite} alt="Assel Kruszka logo" width={6928} height={1324} className="h-9 w-auto max-w-full object-contain sm:h-10"/></Link>;return <Link to="/" aria-label="ASSEL KRUSZKA home" className="block"><img src={logo} alt="" width={1600} height={376} className="h-8 w-auto sm:h-9"/></Link>}
