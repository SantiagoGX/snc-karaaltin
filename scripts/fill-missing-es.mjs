import fs from "node:fs";

const en = JSON.parse(fs.readFileSync("src/i18n/locales/en.json", "utf8"));
const es = JSON.parse(fs.readFileSync("src/i18n/locales/es.json", "utf8"));

function flatten(obj, prefix = "", out = []) {
  if (obj && typeof obj === "object" && !Array.isArray(obj)) {
    for (const key of Object.keys(obj)) {
      flatten(obj[key], prefix ? `${prefix}.${key}` : key, out);
    }
  } else {
    out.push(prefix);
  }
  return out;
}

function get(obj, dottedKey) {
  return dottedKey.split(".").reduce((acc, k) => (acc && typeof acc === "object" ? acc[k] : undefined), obj);
}

function set(obj, dottedKey, value) {
  const parts = dottedKey.split(".");
  let cursor = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    const part = parts[i];
    if (!cursor[part] || typeof cursor[part] !== "object" || Array.isArray(cursor[part])) {
      cursor[part] = {};
    }
    cursor = cursor[part];
  }
  cursor[parts.at(-1)] = value;
}

const translations = {
  "common.bookNow": "Reservar Ahora",
  "common.noPageContactButton": "Contactar al Dr. Karaaltın",
  "common.noPageOverlayText":
    "Para saber más sobre este procedimiento y ver resultados de antes y después, agenda una consulta con el Dr. Karaaltın.",
  "footer.emailPlaceholder": "Correo electrónico",

  "procedurePages.advancedSafeBBL.title": "Advanced Safe BBL™",
  "procedurePages.advancedSafeBBL.subtitle": "Esculpido corporal basado en la ciencia",
  "procedurePages.advancedSafeBBL.intro":
    "Advanced Safe BBL™ es un sistema integral de gluteoplastia con grasa diseñado por el Prof. Dr. Karaaltin. Combina monitorización por ultrasonido en tiempo real, mapeo Doppler vascular, tecnología de inyección controlada de grasa e injerto enriquecido con células madre para lograr resultados seguros, naturales y duraderos.",
  "procedurePages.advancedSafeBBL.featuredTitle": "Advanced Safe BBL™ con el Dr. Karaaltin",
  "procedurePages.advancedSafeBBL.featuredText":
    "Advanced Safe BBL™ no es solo un procedimiento estético: es un sistema quirúrgico basado en ciencia, anatomía avanzada y tecnología de monitorización continua. Diseñado por el Prof. Dr. Karaaltin —pionero en cirugía reconstructiva y microquirúrgica— este método redefine el estándar moderno de aumento glúteo seguro, logrando curvas suaves, proporciones naturales y resultados que respetan la integridad vascular.",
  "procedurePages.advancedSafeBBL.detailsTitle": "Detalles del procedimiento",
  "procedurePages.advancedSafeBBL.overviewTitle": "Advanced Safe BBL™",
  "procedurePages.advancedSafeBBL.overview": "Resumen",
  "procedurePages.advancedSafeBBL.journeyTitle": "Tu recorrido quirúrgico",
  "procedurePages.advancedSafeBBL.journey1Title": "Consulta",
  "procedurePages.advancedSafeBBL.journey1Desc": "Análisis 3D, evaluación anatómica y definición de proporciones.",
  "procedurePages.advancedSafeBBL.journey2Title": "Mapeo preoperatorio",
  "procedurePages.advancedSafeBBL.journey2Desc": "Doppler + planificación del vector de proyección.",
  "procedurePages.advancedSafeBBL.journey3Title": "Día de cirugía",
  "procedurePages.advancedSafeBBL.journey3Desc": "Extracción, purificación, enriquecimiento y reinyección guiada por ultrasonido.",
  "procedurePages.advancedSafeBBL.journey4Title": "Postoperatorio inmediato",
  "procedurePages.advancedSafeBBL.journey4Desc": "Compresión especializada y monitorización temprana.",
  "procedurePages.advancedSafeBBL.journey5Title": "Seguimiento",
  "procedurePages.advancedSafeBBL.journey5Desc": "Controles críticos durante los primeros 10 días para máxima seguridad.",
  "procedurePages.advancedSafeBBL.candidatesTitle": "Candidatos ideales",

  "procedurePages.advancedSafeBBL.card1Title": "01 // Qué es el Advanced Safe BBL™",
  "procedurePages.advancedSafeBBL.card1Text":
    "Advanced Safe BBL™ es un sistema integral de gluteoplastia con grasa diseñado para maximizar la seguridad y la precisión. Utiliza monitorización por ultrasonido en tiempo real, Doppler vascular, inyección controlada de grasa y tecnología enriquecida con células madre para resultados consistentes y duraderos.",
  "procedurePages.advancedSafeBBL.card2Title": "02 // Monitorización de seguridad por ultrasonido en tiempo real",
  "procedurePages.advancedSafeBBL.card2Text":
    'La inyección se realiza exclusivamente por encima del músculo, verificada en tiempo real con tecnología inalámbrica Clarius AI™. Esto elimina el riesgo de inyecciones profundas cerca de los principales vasos glúteos y evita por completo la técnica "a ciegas".',
  "procedurePages.advancedSafeBBL.card3Title": "03 // Mapeo Doppler vascular",
  "procedurePages.advancedSafeBBL.card3Text":
    "Antes y durante la cirugía, se mapean todos los perforantes vasculares relevantes para evitar vasos críticos. Esto guía trayectorias seguras para la grasa, reduce el riesgo de trauma y mejora la supervivencia del injerto.",
  "procedurePages.advancedSafeBBL.card4Title": "04 // Inyección de grasa controlada (Liposat™ + Vibrosat Pro™)",
  "procedurePages.advancedSafeBBL.card4Text":
    "El sistema dual Vibrosat Pro™ + Liposat Pump™ permite una expansión mecánica uniforme del tejido y una inyección controlada en ml/min.",
  "procedurePages.advancedSafeBBL.card4Benefits": "Beneficios:",
  "procedurePages.advancedSafeBBL.card4Benefit1": "Distribución homogénea",
  "procedurePages.advancedSafeBBL.card4Benefit2": "Menor presión",
  "procedurePages.advancedSafeBBL.card4Benefit3": "Menos trauma tisular",
  "procedurePages.advancedSafeBBL.card4Benefit4": "Mejor integración del injerto",
  "procedurePages.advancedSafeBBL.card5Title": "05 // Injerto de grasa enriquecido con células madre",
  "procedurePages.advancedSafeBBL.card5Text":
    "Con tecnología Stempia™, el injerto combina grasa macro y micro con células madre derivadas de la grasa, aumentando la vascularidad, mejorando la supervivencia del injerto y generando un resultado más suave, natural y estable.",
  "procedurePages.advancedSafeBBL.card6Title": "06 // Seguridad comprobada por auditoría",
  "procedurePages.advancedSafeBBL.card6Text":
    "En 543 pacientes, el uso del protocolo completo redujo las complicaciones mayores en más del 90%:",
  "procedurePages.advancedSafeBBL.card6Item1": "0 casos de embolia grasa",
  "procedurePages.advancedSafeBBL.card6Item2": "0 neumonía lipoidea",
  "procedurePages.advancedSafeBBL.card6Item3": "Seromas drásticamente reducidos",
  "procedurePages.advancedSafeBBL.card6Item4": "Menos dolor postoperatorio",
  "procedurePages.advancedSafeBBL.card6Item5": "Menor incidencia de necrosis grasa",

  "procedurePages.advancedSafeBBL.protocolTitle": "Cómo funciona el protocolo",
  "procedurePages.advancedSafeBBL.protocolIntro": "El protocolo combina cuatro pilares:",
  "procedurePages.advancedSafeBBL.protocol1": "Ultrasonido en tiempo real: asegura el plano seguro.",
  "procedurePages.advancedSafeBBL.protocol2": "Inyección controlada: flujo preciso, sin picos de presión.",
  "procedurePages.advancedSafeBBL.protocol3": "Mapeo Doppler: evita vasos críticos.",
  "procedurePages.advancedSafeBBL.protocol4": "Grasa enriquecida con células madre: mejor integración y proyección.",

  "procedurePages.advancedSafeBBL.spongeTitle": "El Experimento de la Esponja Karaaltin™",
  "procedurePages.advancedSafeBBL.spongeText":
    "En un estudio comparativo con cinco tecnologías líderes, Vibrosat Pro™ + Liposat Pump™ produjo la dispersión más uniforme, sin zonas muertas ni daño tisular. Esta evidencia respalda la superioridad biomecánica del sistema.",

  "procedurePages.advancedSafeBBL.scarBadge": "Cicatrices mínimas",
  "procedurePages.advancedSafeBBL.scarLocation": "Ubicación",
  "procedurePages.advancedSafeBBL.scarLocationValue": "Ocultas en pliegues naturales",
  "procedurePages.advancedSafeBBL.scarSize": "Tamaño",
  "procedurePages.advancedSafeBBL.scarSizeValue": "Microincisiones de 2–3 mm",
  "procedurePages.advancedSafeBBL.scarVisibility": "Visibilidad",
  "procedurePages.advancedSafeBBL.scarVisibilityValue": "Prácticamente invisible al cicatrizar",
  "procedurePages.advancedSafeBBL.scarText":
    "Advanced Safe BBL™ utiliza microincisiones de 2–3 mm, colocadas estratégicamente para que, al cicatrizar, permanezcan prácticamente invisibles. No hay cicatriz glútea visible, ya que el injerto se realiza a través de estos puntos de acceso mínimos.",

  "procedurePages.advancedSafeBBL.recoveryTitle": "Recuperación y cicatrización",
  "procedurePages.advancedSafeBBL.recoveryText":
    "El proceso de recuperación está optimizado para maximizar la supervivencia del injerto y la comodidad del paciente. Siguiendo nuestro protocolo Advanced Safe BBL™, los pacientes experimentan un retorno bien estructurado a sus actividades normales.",
  "procedurePages.advancedSafeBBL.recoveryItem1": "Primera semana: faja compresiva, reposo, masaje linfático",
  "procedurePages.advancedSafeBBL.recoveryItem2": "Semanas 2–4: actividad ligera; evitar sentarse directamente",
  "procedurePages.advancedSafeBBL.recoveryItem3": "Semanas 4–6: retorno gradual al trabajo y ejercicio",
  "procedurePages.advancedSafeBBL.recoveryItem4": "Mes 3: evaluación final del contorno",

  "procedurePages.advancedSafeBBL.revisionsTitle": "Revisiones complejas — injerto graso macro/micro",
  "procedurePages.advancedSafeBBL.revisionsText":
    "En casos de fibrosis o fallas previas de BBL, la técnica macro/micro de células grasas inventada por el Dr. Karaaltin permite corregir deformidades del contorno en una o dos sesiones, usando capas precisas de injerto enriquecido.",

  "procedurePages.hybridAugmentation.recoveryText":
    "La recuperación combina elementos de ambos procedimientos. La mayoría vuelve al trabajo en 1–2 semanas. Los resultados finales aparecen a medida que la grasa se integra durante 3–6 meses.",

  "procedurePages.ribCageMolding.recoveryText":
    "La recuperación acelerada permite que la mayoría de los pacientes vuelva a su rutina diaria en pocos días, con resultados progresivos visibles en 4–8 semanas a medida que se resuelve la inflamación.",
  "procedurePages.ribCageMolding.scarBadge": "Prácticamente invisible",
  "procedurePages.ribCageMolding.scarSubtitle": "Microincisión única",
  "procedurePages.ribCageMolding.scarLocationLabel": "Ubicación",
  "procedurePages.ribCageMolding.scarLocationValue": "Pliegue lateral del torso",
  "procedurePages.ribCageMolding.scarSizeLabel": "Tamaño",
  "procedurePages.ribCageMolding.scarSizeValue": "0,5 cm",
  "procedurePages.ribCageMolding.scarVisibilityLabel": "Visibilidad",
  "procedurePages.ribCageMolding.scarVisibilityValue": "Casi invisible",
  "procedurePages.ribCageMolding.scarText":
    "Una microincisión de 0,5 cm colocada estratégicamente en el pliegue lateral natural del torso. Al cicatrizar, se vuelve prácticamente invisible.",

  "procedurePages.twirlBra.overviewTitle": "Twirl Internal Bra",
  "procedurePages.twirlBra.card1Title": "Qué lo hace diferente",
  "procedurePages.twirlBra.card1Text":
    "Utiliza tejido autólogo para crear un “sujetador biológico” desde el interior, proporcionando elevación y soporte sin materiales extraños.",
  "procedurePages.twirlBra.card2Title": "Resultados duraderos",
  "procedurePages.twirlBra.card2Text":
    "La estructura interna de soporte mantiene la forma y la posición del pecho durante años.",
  "procedurePages.twirlBra.card3Title": "Sensación y movimiento naturales",
  "procedurePages.twirlBra.card3Text":
    "Da como resultado pechos que se ven y se sienten completamente naturales.",
  "procedurePages.twirlBra.card4Title": "Cicatrices mínimas",
  "procedurePages.twirlBra.card4Text":
    "La colocación estratégica de las incisiones garantiza que las cicatrices queden bien ocultas.",
  "procedurePages.twirlBra.card5Title": "Ideal para casos de revisión",
  "procedurePages.twirlBra.card5Text":
    "Perfecto para pacientes que buscan alternativas a soluciones basadas en implantes.",
};

const enKeys = new Set(flatten(en));
const esKeys = new Set(flatten(es));
const missingKeys = [...enKeys].filter((k) => !esKeys.has(k));

let filledCount = 0;
let fallbackCount = 0;

for (const key of missingKeys) {
  if (Object.prototype.hasOwnProperty.call(translations, key)) {
    set(es, key, translations[key]);
    filledCount++;
    continue;
  }

  const value = get(en, key);
  set(es, key, value);
  fallbackCount++;
}

fs.writeFileSync("src/i18n/locales/es.json", JSON.stringify(es, null, 2) + "\n");

console.log(`Filled ${filledCount} missing keys with ES translations.`);
if (fallbackCount) {
  console.log(`Filled ${fallbackCount} missing keys with EN fallback (review needed).`);
}

