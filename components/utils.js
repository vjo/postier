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
  return cc ? countryCodeToEmoji(cc) : "";
};

export const formatDate = (dateStr, lang = "en") => {
  const date = new Date(dateStr);
  const options = {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  return new Intl.DateTimeFormat(lang, options).format(date);
};
