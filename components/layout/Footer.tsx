const logo = "/images/header/logo-el-tabo.png";
const footerLandscape = "/images/footer/footer-landscape.png";

export default function Footer() {
  return (
    <footer id="contacto" className="relative overflow-hidden bg-[#00174a] text-white">
      <div className="relative h-[170px] overflow-hidden bg-[#00174a] md:h-[205px]">
        <img
          src={footerLandscape}
          alt="Ilustración patrimonial de El Tabo"
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

            <div className="mt-6 flex gap-4">
              {["f", "◎", "𝕏", "▶"].map((item) => (
                <span
                  key={item}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/70 text-lg font-black text-white/95"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black">Enlaces Rápidos</h4>
            <div className="mt-2 h-1 w-9 rounded bg-yellow-400" />
            <ul className="mt-5 space-y-1.5 text-base font-medium leading-tight text-white/95">
              <li>Servicios Municipales</li>
              <li>Trámites en Línea</li>
              <li>Transparencia</li>
              <li>Participación Ciudadana</li>
              <li>Ordenanzas Municipales</li>
              <li>Presupuesto Municipal</li>
              <li>Licitaciones</li>
              <li>Concejo Municipal</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black">Contacto</h4>
            <div className="mt-2 h-1 w-9 rounded bg-yellow-400" />
            <ul className="mt-5 space-y-3 text-base font-medium leading-tight text-white/95">
              <li className="flex gap-3">
                <span className="text-yellow-400">📍</span>
                <span>Av. Presidente Kennedy 1234<br />El Tabo</span>
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-400">☎</span>
                <span>+56 35 246 1000<br />+56 35 246 1001</span>
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-400">✉</span>
                <span>contacto@municipaleldetabo.cl<br />alcaldia@municipaleldetabo.cl</span>
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-400">◷</span>
                <span>Lunes a Viernes: 8:30 - 17:00<br />Sábados: 9:00 - 13:00</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black">Nuestro Entorno, Nuestro Orgullo</h4>
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