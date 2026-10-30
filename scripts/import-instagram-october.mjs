import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

// Source captions, dates and image URLs were read from the official profile in the browser.
const source = JSON.parse(await readFile(process.argv[2], 'utf8'));
const titles = {
  De_6i5rCBhG: ['Farmacias municipales informan horario especial para el 30 de octubre', 'Salud'],
  DfILQSUDHoo: ['Taller de Folclor promueve la vida activa y las tradiciones entre personas mayores', 'Cultura'],
  DfHv1ohFS0V: ['Autoridades de la provincia solicitan reforzar la dotación de Carabineros', 'Seguridad'],
  DfGIy0NggBa: ['Abren postulaciones para emprendedores del Encuentro Costumbrista El Membrillo 2026', 'DIDECO'],
  DfFmdW5jBfT: ['Taller Fotos que venden entrega herramientas a emprendedores de El Tabo', 'DIDECO'],
  DfFEIzLoF0x: ['Taller de crochet fortalece la creatividad y el encuentro de personas mayores', 'DIDECO'],
  'DfDlI3VDvc-': ['Vecinos aportan propuestas para un nuevo recorrido de transporte público subsidiado', 'Comunidad'],
  DfDNS_TI2oH: ['Campeonato de bochas reúne a personas mayores de El Tabo', 'Deportes'],
  'DfDNS-TI2oH': ['Campeonato de bochas reúne a personas mayores de El Tabo', 'Deportes'],
  DfCfV7PmKfQ: ['Justicia Móvil anuncia atención gratuita para el viernes 30 de octubre', 'Comunidad'],
  DfAqmkNDyPT: ['Abren convocatoria para abogado del Programa Acceso a la Justicia', 'Empleo'],
  DfAWBBQiR6I: ['Feria de Servicios de OMIL acerca beneficios y orientación a la comunidad', 'Comunidad'],
  'De-aZ_ADSEb': ['Municipio en Terreno informa operativos del 27 al 30 de octubre', 'Municipalidad'],
  'De9-8c9jK5T': ['Refuerzan operativos preventivos en los sectores altos de El Tabo', 'Seguridad'],
  De9qVzxD1PF: ['Talleres comunitarios entregan herramientas de primeros auxilios e inclusión', 'DIDECO'],
  De9VwN_gc6W: ['Invitan al cierre del Mes de la Prevención del Cáncer de Mama', 'Salud'],
  'De6-uimDFuc': ['El Tabo invita a celebrar Halloween en el Complejo Cinco’s', 'Comunidad'],
  De48NbMDfLe: ['El Tabo, El Quisco y Algarrobo realizan jornada conjunta de prevención', 'Salud'],
  De1pIxpROYH: ['Operativo de salud acercará atención a la comunidad Los Aromos', 'Salud'],
  De1nWE4DDQN: ['Invitan a emprendedores al taller Fotografía que Vende', 'DIDECO'],
  Dezpfr_CTzB: ['Estudiantes de Diseño UC presentan propuestas de señalética turística para El Tabo y Las Cruces', 'Cultura'],
  DezCkysiPL2: ['Baila por la Vida invita a una jornada de prevención en Las Cruces', 'Salud'],
  DexAFjoFQl2: ['Invitan a participar en diagnóstico comunal sobre género, cuidados y diversidad', 'DIDECO'],
  DeweQaMjqYO: ['Feria de Servicios 2026 reunirá orientación y beneficios en el frontis municipal', 'Comunidad'],
  Deu9pwgjAKb: ['Programa de Adulto Mayor recorre la comuna con actividades de bienestar integral', 'DIDECO'],
  DesY1a7jB9m: ['Convocan a artistas locales para el show comunal de la Teletón 2026', 'Cultura'],
  DesEPlgDeQZ: ['Seguridad Pública informa procedimientos realizados con colaboración vecinal', 'Seguridad'],
  Der2hmbgqEm: ['Feria de Servicios promueve la prevención y detección temprana del cáncer de mama', 'Salud'],
  DeovdjCDy9R: ['Encuesta escolar aborda conocimientos sobre cambio climático en Las Cruces', 'Medio Ambiente'],
  DenQ5Zqka7h: ['El Tabo celebró el Día de la Música Chilena con artistas locales y Pascuala Ilabaca', 'Cultura'],
  DemKpQYDSd9: ['Municipio informa medidas para el ingreso responsable de mascotas al edificio municipal', 'Medio Ambiente'],
  'DekxZ_kkXQ-': ['Presupuestos Participativos entrega más de 289 millones a 52 organizaciones comunitarias', 'Comunidad'],
  DekcvkZlCwj: ['Actividades físicas, salud mental y primeros auxilios marcan el Mes de las Personas Mayores', 'DIDECO'],
  Dejl5G6DfOn: ['Ciclo de talleres comunitarios abordará primeros auxilios y derechos sexuales y reproductivos', 'Salud'],
  DeiFvDLDWpY: ['Registratón ofrece apoyo gratuito para el registro de servicios turísticos', 'DIDECO'],
  DehmBbYIBvs: ['Campaña preventiva refuerza la colaboración vecinal en Piedra del Elefante', 'Seguridad'],
  DehBKVwjaJG: ['Jornada de yoga promueve el bienestar de las personas mayores', 'DIDECO'],
  DefMTpvAfUp: ['Coro Polifónico del Centro Cultural San Antonio se presenta en El Tabo', 'Cultura'],
  Deew2JWDWdW: ['Zoonosis anuncia operativo de veterinaria básica con inscripción previa', 'Medio Ambiente'],
  DeccOubmC45: ['Municipio en Terreno anuncia atención en Fermín García, Santa Luisa y frontis municipal', 'Municipalidad'],
  Deb4KYWksL9: ['Estadio El Tabo se suma a Octubre Rosa con información preventiva', 'Salud'],
  DeaJitFjAEo: ['Fiesta del Mar reúne música, emprendimiento y encuentro familiar en El Tabo', 'Cultura'],
  DeSo7U3jfX2: ['Muni en Terreno continúa acercando servicios a los barrios', 'Municipalidad'],
  DeR_kbZoD2f: ['Niños y niñas de AFOL Las Cruces protagonizan esquinazo de Fiestas Patrias', 'Cultura'],
  DeRwY53oJ9L: ['Comité Operativo revisa acciones de seguridad y prevención comunal', 'Seguridad'],
  DePPacjIItS: ['Estudiantes de El Tabo y Las Cruces participan en diálogo sobre cambio climático', 'Medio Ambiente'],
  DeNfWUAjYMB: ['Jornada de estimulación cognitiva reúne a personas mayores', 'DIDECO'],
  DeK6inIgQtu: ['Red Local de Apoyos y Cuidados cierra su ciclo 2025-2026 con encuentro comunitario', 'DIDECO'],
  DeKYLt_CIxO: ['Municipio informa actualización preventiva por precipitaciones en El Tabo', 'Municipalidad'],
  'DeKYLt-CIxO': ['Municipio informa actualización preventiva por precipitaciones en El Tabo', 'Municipalidad'],
  DeJ124hjQrs: ['Muni en Terreno anuncia nuevos operativos de atención durante octubre', 'Municipalidad'],
  'DeIH-aiiR6E': ['Municipio emite aviso preventivo por precipitaciones en el litoral central', 'Municipalidad'],
  DeHzYURCUSq: ['Personas mayores participan en una mañana deportiva y de encuentro', 'Deportes'],
  DeFrn8JkRev: ['Coordinación entre Carabineros y Seguridad Pública permite detención por robo en El Tabito', 'Seguridad'],
  DeFNJ36xyhd: ['Municipio reconoce el esfuerzo deportivo de José García Rozas', 'Deportes'],
  DeDMMgkCJS7: ['Servicios municipales recorren sectores de la comuna para acercar atención a los vecinos', 'Municipalidad'],
  DeCVQQlCIno: ['Clubes de personas mayores se reúnen en celebración comunal de Fiestas Patrias', 'Cultura'],
  DeB5x8RCQ4m: ['CEDIAM El Tabo abre convocatoria para dos cargos profesionales', 'Empleo'],
  DeAZmLsgZ_r: ['El Tabo inicia campaña de prevención y detección temprana del cáncer de mama', 'Salud'],
  DeAFBmxjQ2C: ['Equipo femenino de Newcom recibe respaldo municipal antes del campeonato nacional', 'Deportes'],
  Dd_iqbrjawe: ['Bus de Justicia Móvil vuelve a El Tabo con orientación gratuita', 'Comunidad'],
  Dd9gNoejBLH: ['Escuela Las Cruces presenta Gala Folclórica Latinoamericana 2026', 'Educación'],
};

const clean = value => value.normalize('NFKC')
  .replace(/[\p{Extended_Pictographic}\p{Regional_Indicator}\p{Emoji_Modifier}\u200d\ufe0f\u20e3]/gu, '')
  .replace(/[ \t]+/g, ' ').replace(/ *\n */g, '\n').trim();
const slugify = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const root = process.cwd();
await mkdir(path.join(root, 'public/images/noticias/octubre-2026'), { recursive: true });
const news = [];
const failures = [];
for (const post of source) {
  const code = post.url.split('/').filter(Boolean).at(-1);
  if (!titles[code]) continue;
  const timestamp = post.times.at(-1)?.date;
  if (!timestamp || !post.images[0]) throw new Error(`Missing evidence: ${code}`);
  const publishedAt = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Santiago' }).format(new Date(timestamp));
  if (!publishedAt.startsWith('2026-10')) throw new Error(`Wrong month: ${code}`);
  const [title, category] = titles[code];
  const slug = slugify(title);
  const image = `/images/noticias/octubre-2026/${code}.jpg`;
  try {
    const response = await fetch(post.images[0]);
    if (!response.ok || !response.headers.get('content-type')?.startsWith('image/')) throw new Error(`HTTP ${response.status}`);
    await writeFile(path.join(root, 'public', image), Buffer.from(await response.arrayBuffer()));
  } catch (error) { failures.push({code, error:String(error)}); continue; }
  const paragraphs = clean(post.alt).split(/\n{2,}/).filter(Boolean);
  // Short social headings become the article title; retain the informative paragraphs verbatim.
  const body = paragraphs.length > 1 && paragraphs[0].length < 180 ? paragraphs.slice(1) : paragraphs;
  const intro = body.find(p => p.length > 65) || body[0];
  const excerpt = intro.length > 240 ? `${intro.slice(0,237).replace(/\s+\S*$/, '')}…` : intro;
  news.push({id:`instagram-${code}`, slug, title, category, date:new Intl.DateTimeFormat('es-CL',{day:'numeric',month:'long',year:'numeric',timeZone:'America/Santiago'}).format(new Date(timestamp)),publishedAt,excerpt,image,sourceUrl:`https://www.instagram.com${post.url}`,author:'Municipalidad de El Tabo',body,tags:[category,'Octubre 2026'],featured:false});
}
if(failures.length) throw new Error(JSON.stringify(failures));
news.sort((a,b)=>b.publishedAt.localeCompare(a.publishedAt));
await writeFile(path.join(root,'data/noticias-octubre-2026.json'),JSON.stringify(news,null,2)+'\n');
console.log(`Imported ${news.length} articles with local images.`);
