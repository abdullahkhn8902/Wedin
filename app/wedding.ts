/**
 * Single source of truth for the invitation's details.
 *
 * The hero, countdown, event cards, venue maps, footer and social share image
 * all read from here, so a name/date/venue only ever has to be changed once.
 */

export const BRIDE = "Binte Shakir";
export const GROOM = "Afaq Ishaq";
export const COUPLE = `${BRIDE} & ${GROOM}`;
/** Monogram stamped on the envelope's wax seal. */
export const INITIALS = "B&A";

/** Spaced date line under the hero names. */
export const DATE_LINE = "21 · 22 · 23 AUGUST 2026";
/** Compact stamp on the envelope card. */
export const DATE_STAMP = "21 – 23 · 08 · 2026";
/** Footer / share-image date. */
export const DATE_LONG = "AUGUST 21 – 23, 2026";

export type Venue = {
  id: string;
  name: string;
  /** Short "which part of town" line, so an event card locates itself. */
  area: string;
  address: string;
  /** Public Google Maps link the guest opens on their phone. */
  mapsLink: string;
  /** Same place as an embeddable map for the inline iframe. */
  mapsEmbed: string;
};

const RESIDENCE: Venue = {
  id: "residence",
  name: "At the Residence",
  area: "Ideal Garden, Ferozepur Road",
  address: "Ideal Garden, Ferozepur Road, Lahore, Punjab, Pakistan",
  mapsLink: "https://goo.gl/maps/wQqPBh9KuGtdtiyA8?g_st=awb",
  // Pinned by coordinates — the location is a home, not a listed business.
  mapsEmbed: "https://maps.google.com/maps?q=31.435110,74.354279&z=17&output=embed",
};

const DYNASTY: Venue = {
  id: "dynasty",
  name: "Dynasty Garrison — Hall 21",
  area: "Askari IX Approach Rd, Lahore Cantt",
  address: "Askari IX Approach Road, Askari 1, Lahore Cantt, Punjab, Pakistan",
  mapsLink: "https://share.google/nr33Pqa44L0iwOh90",
  mapsEmbed:
    "https://maps.google.com/maps?q=Dynasty+Garrison+Hall,+Askari+IX+Approach+Road,+Lahore&z=16&output=embed",
};

export const VENUES = { residence: RESIDENCE, dynasty: DYNASTY };

export type WeddingEvent = {
  id: string;
  /** "Day One" — the ribbon across the top of the event card. */
  ordinal: string;
  name: string;
  /** The second name guests know the function by. */
  alt: string;
  /** Small ornament on the event card. */
  glyph: string;
  weekday: string;
  dateLabel: string;
  /** Condensed date for the venue card's event list. */
  shortDate: string;
  time: string;
  /**
   * Start of the function, pinned to Pakistan Standard Time (+05:00) so the
   * countdown reads correctly for guests joining from any timezone.
   */
  startsAt: string;
  venue: Venue;
};

export const EVENTS: WeddingEvent[] = [
  {
    id: "bbq",
    ordinal: "Day One",
    name: "BBQ Dinner",
    alt: "Our Mehndi night",
    glyph: "❋",
    weekday: "Friday",
    dateLabel: "21 August 2026",
    shortDate: "Fri 21 Aug",
    time: "8:00 PM",
    startsAt: "2026-08-21T20:00:00+05:00",
    venue: RESIDENCE,
  },
  {
    id: "barat",
    ordinal: "Day Two",
    name: "Barat",
    alt: "The wedding day",
    glyph: "♡",
    weekday: "Saturday",
    dateLabel: "22 August 2026",
    shortDate: "Sat 22 Aug",
    time: "5:00 PM",
    startsAt: "2026-08-22T17:00:00+05:00",
    venue: RESIDENCE,
  },
  {
    id: "walima",
    ordinal: "Day Three",
    name: "Walima",
    alt: "The reception",
    glyph: "✦",
    weekday: "Sunday",
    dateLabel: "23 August 2026",
    shortDate: "Sun 23 Aug",
    time: "6:00 PM",
    startsAt: "2026-08-23T18:00:00+05:00",
    venue: DYNASTY,
  },
];

/**
 * Events grouped by where they happen, so the venue section shows each map
 * once instead of repeating the shared BBQ Dinner / Barat location twice.
 */
export const VENUE_GROUPS = Object.values(VENUES).map((venue) => ({
  venue,
  events: EVENTS.filter((event) => event.venue.id === venue.id),
}));
