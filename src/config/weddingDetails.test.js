import { describe, expect, it } from 'vitest';
import { weddingDetails as details } from './weddingDetails';
import { formatName } from '../lib/formatName';
import { getCountdown } from '../lib/countdown';

describe('Malapaka wedding card details', () => {
  it('uses the confirmed couple without invented qualifications', () => {
    expect(formatName(details.groom)).toBe('Chi. Suryanarayana Murthy (Sai)');
    expect(formatName(details.bride)).toBe('Chi. La. Sow. Lakshmi Sai Suguna');
    expect(details.rsvpStorageKey).toBe('murthy-suguna-rsvp');
  });

  it('counts down to the Friday evening Sumuhurtham in IST', () => {
    expect(details.weddingDate).toBe('2026-11-20T20:56:00+05:30');
    expect(new Date(details.weddingDate).toISOString()).toBe('2026-11-20T15:26:00.000Z');
    expect(getCountdown(details.weddingDate, Date.parse('2026-11-19T15:26:00Z'))).toEqual({ days: 1, hours: 0, minutes: 0, seconds: 0, complete: false });
    expect(details.events.find(event => event.auspicious)?.id).toBe('muhurtham');
  });

  it('keeps the Hyderabad Vratham distinct from the Akividu wedding venue', () => {
    expect(details.venue.name).toBe('Sri Padmavathi Venkateswara Swamy Function Hall');
    expect(details.events.find(event => event.id === 'dinner').time).toBe('7:00 PM onwards');
    const vratham = details.events.find(event => event.id === 'vratham');
    expect(vratham.startsAt).toBe('2026-11-22T09:00:00+05:30');
    expect(vratham.location).toBe('Family residence, Hyderabad');
    expect(details.media.temporaryCharacters).toBe(true);
  });
});