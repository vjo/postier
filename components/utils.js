const countryCodeToEmoji = (countryCode) =>
  countryCode
    .toUpperCase()
    .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397));

const getCountryCodeFromEvent = (event, timeline) => {
  const [matchingTimelineEntry] = timeline.filter((t) => t.date === event.date);
  return matchingTimelineEntry ? matchingTimelineEntry.country : undefined;
};

export const getCountryEmojiForEvent = (event, timeline) => {
  const cc = getCountryCodeFromEvent(event, timeline);
  return cc ? countryCodeToEmoji(cc) : '';
};

export const formatDate = (dateStr, lang = 'en') => {
  const date = new Date(dateStr);
  const options = {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };

  return new Intl.DateTimeFormat(lang, options).format(date);
};

export const getStatusFromCode = (code) => statusCode[code];

// From https://developer.laposte.fr/products/suivi/latest
const statusCode = {
  DR1: {
    code: 'DR1',
    label: { fr: 'Déclaratif réceptionné', en: 'Declaration accepted' },
    stage: 1,
  },
  PC1: {
    code: 'PC1',
    label: { fr: 'Pris en charge', en: 'Picked up' },
    stage: 2,
  },
  PC2: {
    code: 'PC2',
    label: {
      fr: "Pris en charge dans le pays d'expédition",
      en: 'Picked up in country of dispatch',
    },
    stage: 2,
  },
  ET1: {
    code: 'ET1',
    label: { fr: 'En cours de traitement', en: 'Being processed' },
    stage: 3,
  },
  ET2: {
    code: 'ET2',
    label: {
      fr: 'En cours de traitement dans le pays d’expédition',
      en: 'Being processed in country of dispatch',
    },
    stage: 3,
  },
  ET3: {
    code: 'ET3',
    label: {
      fr: 'En cours de traitement dans le pays de destination',
      en: 'Being processed in country of destinatination',
    },
    stage: 3,
  },
  ET4: {
    code: 'ET4',
    label: {
      fr: 'En cours de traitement dans un pays de transit',
      en: 'Being processed in a transit country',
    },
    stage: 3,
  },
  EP1: {
    code: 'EP1',
    label: { fr: 'En attente de présentation', en: 'Waiting for presentation' },
    stage: 3,
  },
  DO1: {
    code: 'DO1',
    label: { fr: 'Entrée en Douane', en: 'Customs entry' },
    stage: 3,
  },
  DO2: {
    code: 'DO2',
    label: { fr: 'Sortie de Douane', en: 'Customs exit' },
    stage: 3,
  },
  DO3: {
    code: 'DO3',
    label: { fr: 'Retenu en Douane', en: 'Customs withholding' },
    stage: 3,
  },
  PB1: {
    code: 'PB1',
    label: { fr: 'Problème en cours', en: 'Problem in progress' },
    stage: 3,
  },
  PB2: {
    code: 'PB2',
    label: { fr: 'Problème résolu', en: 'Problem solved' },
    stage: 3,
  },
  MD2: {
    code: 'MD2',
    label: { fr: 'Mis en distribution', en: 'Distribution in progress' },
    stage: 4,
  },
  ND1: {
    code: 'ND1',
    label: { fr: 'Non distribuable', en: 'Not distributable' },
    stage: 4,
  },
  AG1: {
    code: 'AG1',
    label: {
      fr: 'En attente d’être retiré au guichet',
      en: 'To be collected at the counter',
    },
    stage: 4,
  },
  RE1: {
    code: 'RE1',
    label: { fr: 'Retourné à l’expéditeur', en: 'Returned to sender' },
    stage: 4,
  },
  DI1: { code: 'DI1', label: { fr: 'Distribué', en: 'Delivered' }, stage: 5 },
  DI2: {
    code: 'DI2',
    label: { fr: "Distribué à l'expéditeur", en: 'Delivered to sender' },
    stage: 5,
  },
};
