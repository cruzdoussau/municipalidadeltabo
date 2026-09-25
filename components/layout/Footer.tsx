import Link from "next/link";

const logo = "/images/header/logo-el-tabo.png";
const footerLandscape = "/images/footer/footer-landscape.png";

export default function Footer() {
  return (
    <footer id="contacto" className="relative overflow-hidden bg-[#00174a] text-white">
      <div className="relative h-[170px] overflow-hidden bg-[#00174a] md:h-[205px]">
        <img
          src={footerLandscape}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-[#00174a]" />
      </div>

      <div className="relative mx-auto max-w-[1040px] px-4 pb-6">
        <div className="grid gap-10 border-b border-white/10 pb-8 pt-4 md:grid-cols-[1.15fr_0.95fr_1.2fr_1.35fr]">
          <div>
            <img
              src={logo}
              alt="Municipalidad de El Tabo"
              className="h-[82px] w-auto object-contain"
            />
            <p className="mt-5 text-base font-medium leading-relaxed text-white/95">
              Trabajamos por el desarrollo y bienestar de nuestra comunidad,
              promoviendo la transparencia, participación ciudadana y el
              crecimiento sostenible de El Tabo.
            </p>

            <div className="mt-6 flex gap-4" aria-label="Redes sociales">
              {[
                ["f", "Facebook", "https://www.facebook.com/municipalidadeltabo/?locale=es_LA"],
                ["◎", "Instagram", "https://www.instagram.com/muni.eltabo/?hl=es"],
                ["▶", "YouTube", "https://www.youtube.com/@munieltabo"],
              ].map(([icon, name, href]) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${name} de la Municipalidad de El Tabo (se abre en una nueva pestaña)`}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/70 text-lg font-black text-white/95"
                >
                  <span aria-hidden="true">{icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-black">Enlaces Rápidos</h2>
            <div className="mt-2 h-1 w-9 rounded bg-yellow-400" />
            <ul className="mt-5 space-y-1.5 text-base font-medium leading-tight text-white/95">
              <li><Link href="/tramites-y-servicios">Trámites y Servicios</Link></li>
              <li><Link href="/vecino-digital">Vecino Digital</Link></li>
              <li><a href="https://www.portaltransparencia.cl/PortalPdT/web/guest/directorio-de-organismos-regulados?p_p_id=pdtorganismos_WAR_pdtorganismosportlet&orgcode=dd4a4856fe4376f915d1ab0c61131f7b" target="_blank" rel="noreferrer" aria-label="Transparencia (se abre en una nueva pestaña)">Transparencia</a></li>
              <li><Link href="/dideco/participacion-ciudadana/presupuestos-participativos">Participación Ciudadana</Link></li>
              <li><Link href="/noticias">Noticias</Link></li>
              <li><Link href="/eventos">Cartelera de Eventos</Link></li>
              <li><Link href="/municipalidad/autoridades">Autoridades</Link></li>
              <li><Link href="/cuentas-publicas">Cuentas Públicas</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-black">Contacto</h2>
            <div className="mt-2 h-1 w-9 rounded bg-yellow-400" />
            <ul className="mt-5 space-y-3 text-base font-medium leading-tight text-white/95">
              <li className="flex gap-3">
                <span className="text-yellow-400" aria-hidden="true">📍</span>
                <span>Av. Presidente Kennedy 1234<br />El Tabo</span>
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-400" aria-hidden="true">☎</span>
                <span><a href="tel:+56352461000">+56 35 246 1000</a><br /><a href="tel:+56352461001">+56 35 246 1001</a></span>
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-400" aria-hidden="true">✉</span>
                <span><a href="mailto:contacto@municipaleldetabo.cl">contacto@municipaleldetabo.cl</a><br /><a href="mailto:alcaldia@municipaleldetabo.cl">alcaldia@municipaleldetabo.cl</a></span>
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-400" aria-hidden="true">◷</span>
                <span>Lunes a Viernes: 8:30 - 17:00<br />Sábados: 9:00 - 13:00</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-black">Nuestro Entorno, Nuestro Orgullo</h2>
            <div className="mt-2 h-1 w-9 rounded bg-yellow-400" />
            <p className="mt-5 text-base font-medium leading-relaxed text-white/95">
              Desde la histórica Casa de Nicanor Parra, pasando por la tranquilidad
              de la Laguna El Peral, hasta nuestra emblemática iglesia en la Playa,
              El Tabo es un lugar único que cuidamos y proyectamos juntos.
            </p>
          </div>
        </div>

        <div className="pt-5 text-center text-xs font-semibold text-white/85">
          © 2026 Municipalidad de El Tabo. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
