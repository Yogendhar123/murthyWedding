// All invitation copy and media can be edited here without changing components.
import groomVideo from '../../assets/Groom_walking_in_place_dfd0f81e.mp4?url';
import brideVideo from '../../assets/Bride_walking_in_place_671ecc04.mp4?url';
import scrollVideo from '../../assets/WhatsApp Video 2026-11-02 at 1.19.01 PM.mp4?url';
import { mediaAssets } from './mediaAssets';
export const weddingDetails = {
  blessing: 'Srirasthu · Subhamasthu · Avignamasthu',
  familyName: 'Malapaka’s',
  groom: { name: 'Murthy', fullName: 'Chi. Suryanarayana Murthy', suffix: 'Sai', qualification: '' },
  bride: { name: 'Suguna', fullName: 'Chi. La. Sow. Lakshmi Sai Suguna', qualification: '' },
  coupleLabel: 'Murthy & Suguna',
  monogram: { groom: 'M', bride: 'S' },
  invitation: 'We solicit your gracious presence with family and friends on the auspicious occasion of the marriage of our son.',
  parchmentInvitation: 'With our families, we invite you to bless our wedding.',
  weddingTimeLabel: '8:56 PM',
  weddingDate: '2026-11-20T20:56:00+05:30',
  dateLabel: '20 November 2026',
  dateStamp: '20.11.26',
  coverDate: { day: '20', month: 'NOVEMBER 2026' },
  city: 'Akividu',
  locationLabel: 'Akividu, Andhra Pradesh',
  regionLabel: 'ANDHRA PRADESH, INDIA',
  rsvpStorageKey: 'murthy-suguna-rsvp',
  brideFamily: 'Only daughter of Sri Madduri Srinivasa Rao and Smt. Aruna, Akividu, W.G. Dt., A.P.',
  hosts: ['Malapaka Murali Ravindra Prasad', 'Smt. Venkata Surya Sri Lakshmi'],
  compliments: 'With best compliments from Malapaka, Devarakonda, Madduri, Nittala and Mukutla families, near and dear.',
  events: [
    { id: 'dinner', name: 'Wedding Dinner', date: '20 November 2026', day: 'Friday', time: '7:00 PM onwards', number: '01', chapter: 'THE WARM WELCOME', description: 'Join our families for dinner, warm wishes and the joy of coming together before the sacred vows.', location: 'Wedding venue, Akividu', icon: 'sparkles', startsAt: '2026-11-20T19:00:00+05:30' },
    { id: 'muhurtham', name: 'Sumuhurtham', date: '20 November 2026', day: 'Friday', time: '8:56 PM', number: '02', chapter: 'THE SACRED VOWS', description: 'The auspicious wedding hour under Uttarabhadra Nakshatrayuktha Mithuna Lagnam. Bless the couple as their forever begins.', location: 'Wedding venue, Akividu', icon: 'sun', auspicious: true, startsAt: '2026-11-20T20:56:00+05:30' },
    { id: 'vratham', name: 'Sri Satyanarayana Swamy Vratham', date: '22 November 2026', day: 'Sunday', time: '9:00 AM onwards', number: '03', chapter: 'THE DIVINE BLESSINGS', description: 'A sacred gathering for Sri Satyanarayana Swamy Vratham at our residence in Hyderabad.', location: 'Family residence, Hyderabad', icon: 'flower', startsAt: '2026-11-22T09:00:00+05:30' },
  ],
  eventsNote: 'Wedding dinner and Sumuhurtham: Akividu. Sri Satyanarayana Swamy Vratham: family residence in Hyderabad on 22 November.',
  venue: { name: 'Sri Padmavathi Venkateswara Swamy Function Hall', address: ['Sai Baba Temple, AJJAMUR,', 'Akividu Mandal, W.G. Dt., Andhra Pradesh'], mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Sri+Padmavathi+Venkateswara+Swamy+Function+Hall+Sai+Baba+Temple+AJJAMUR+Akividu+Andhra+Pradesh' },
  media: {
    // TEMPORARY: reused footage by request, not footage of this couple.
    // Replace the two imports above and matching mediaAssets entries/posters.
    temporaryCharacters: true,
    groomFlipX: mediaAssets.groom.flipX, brideFlipX: mediaAssets.bride.flipX,
    groomCrop: mediaAssets.groom.crop, brideCrop: mediaAssets.bride.crop, scrollCrop: mediaAssets.scroll.crop,
    groom: groomVideo, bride: brideVideo, scroll: scrollVideo,
    groomPoster: new URL('../../assets/groom-poster.png', import.meta.url).href,
    bridePoster: new URL('../../assets/bride-poster.png', import.meta.url).href,
    scrollPoster: new URL('../../assets/scroll-poster.png', import.meta.url).href,
    // Put your own mandap image/video in public/assets and set its URL here.
    backgroundVideo: '', backgroundPoster: '',
    // Optional licensed audio URL. Without it, the music toggle plays a gentle synthesized ambience.
    music: '',
  },
  // Optional HTTPS endpoint receiving JSON. Empty = clearly labelled browser-local RSVP only.
  rsvpEndpoint: '',
  footer: 'Your presence is our most cherished gift. We look forward to celebrating this beautiful beginning with you.',
};