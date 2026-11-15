import React, { useState } from 'react';

const ROOM_DATA = {
  deluxe: {
    name: "Deluxe Room",
    price: 3499,
    capacity: "Max Adults: 2–3 · 1 Room · up to 3 guests",
    maxGuests: 3,
    description: "Spacious mountain-facing room with premium amenities, warm timber accents, and sweeping Himalayan valley views. Perfect for couples, trekkers, and leisure travelers.",
    amenities: [
      "High-Speed WiFi", "Smart LED TV", "All-Weather Heating & Geyser",
      "Stocked Mini Bar", "24/7 Room Service", "In-Room Digital Safe",
      "Running Hot Water", "Private Mountain View Balcony"
    ],
    images: [
      "https://theauliheritage.com/uploads/tenants/d551b0ab-f329-479e-8119-59fb35b85128/rooms/1788502974408-9dd9ae47.webp",
      "https://theauliheritage.com/uploads/tenants/d551b0ab-f329-479e-8119-59fb35b85128/rooms/1788502974408-9dd9ae47.webp",
      "https://theauliheritage.com/uploads/tenants/d551b0ab-f329-479e-8119-59fb35b85128/rooms/1788591945423-7f74ad0e.webp",
      "https://theauliheritage.com/uploads/tenants/d551b0ab-f329-479e-8119-59fb35b85128/rooms/1788591970345-41ef9d78.webp"
    ]
  },
  "family-room": {
    name: " family Room",
    price: 5499,
    capacity: "Max Adults: 4–5 · 1 Room · up to 5 guests",
    maxGuests: 3,
    description: "Spacious and thoughtfully laid out for families or small groups, the Family Suite easily accommodates up to 4 to 5 guests without compromising privacy or comfort.",
    amenities: [
      "High-Speed WiFi", "Smart LED TV", "All-Weather Heating & Geyser",
      "Stocked Mini Bar", "24/7 Room Service", "In-Room Digital Safe",
      "Running Hot Water", "Private Mountain View Balcony"
    ],
    images: [
      "https://theauliheritage.com/uploads/tenants/d551b0ab-f329-479e-8119-59fb35b85128/rooms/1788500433632-81f09366.webp",
      "https://theauliheritage.com/uploads/tenants/d551b0ab-f329-479e-8119-59fb35b85128/rooms/1788500454963-15a04e3b.webp",
      "https://theauliheritage.com/uploads/tenants/d551b0ab-f329-479e-8119-59fb35b85128/rooms/1788591862938-d8190051.webp",
      "https://theauliheritage.com/uploads/tenants/d551b0ab-f329-479e-8119-59fb35b85128/rooms/1788502974408-9dd9ae47.webp",
      "https://theauliheritage.com/uploads/tenants/d551b0ab-f329-479e-8119-59fb35b85128/rooms/1788502974408-9dd9ae47.webp",
      "https://theauliheritage.com/uploads/tenants/d551b0ab-f329-479e-8119-59fb35b85128/rooms/1788591945423-7f74ad0e.webp",
      "https://theauliheritage.com/uploads/tenants/d551b0ab-f329-479e-8119-59fb35b85128/rooms/1788591970345-41ef9d78.webp"
    ]
  },
  "super-deluxe": {
    name: "Deluxe Room with balcony",
    price: 4899,
    capacity: "Max Adults: 2–4 · 1 Room · up to 4 guests",
    maxGuests: 4,
    description: "Signature luxury suite featuring a separate living lounge, private soaking Jacuzzi, and 180-degree panoramic views of snow-clad Garhwal peaks.",
    amenities: [
      "High-Speed WiFi", "Smart LED TV", "All-Weather Heating & Geyser",
      "Stocked Mini Bar", "Private Jacuzzi", "Executive Lounge Access",
      "Separate Living Area", "180° Peak View Balcony"
    ],
    images: [
      "https://theauliheritage.com/uploads/tenants/d551b0ab-f329-479e-8119-59fb35b85128/rooms/1788500262076-414920c0.webp",
      "https://theauliheritage.com/uploads/tenants/d551b0ab-f329-479e-8119-59fb35b85128/rooms/1788502624097-a3c59316.webp",
      "https://theauliheritage.com/uploads/tenants/d551b0ab-f329-479e-8119-59fb35b85128/rooms/1788502546968-1467e99d.webp",
      "https://theauliheritage.com/uploads/tenants/d551b0ab-f329-479e-8119-59fb35b85128/rooms/1788502638045-c397314b.webp",
     
    ]
  }
};

const REVIEWS = [
  { initials: "PG", name: "Priya Gupta", quote: "Excellent property, hygienic and tasty food with good staff. The Auli Heritage is very close to nature—loved waking up to snow peaks!" },
  { initials: "DD", name: "Debaraty Chatterjee", quote: "Amazing place! Room was very clean, staff behavior was exceptionally warm, and the home-style food was delicious." },
  { initials: "HC", name: "Himanshu Chaubey", quote: "Stay was very comfortable and the mountain view from the balcony was awesome. Very peaceful location in Sunil." },
  { initials: "SJ", name: "Sarah Johnson", quote: "Great value for money. Clean heated rooms, friendly front desk, and very convenient location on the Auli road." },
  { initials: "MC", name: "Michael Chen", quote: "Wonderful stay! The rooms were spotless and the concierge was incredibly helpful with arranging our Auli ropeway transfer." }
];

const POLICIES = {
  privacy: { title: "Privacy Policy", body: "The Auli Heritage respects guest privacy. Personal details collected during reservations are used solely to confirm bookings, coordinate local travel assistance, and deliver personalized hospitality." },
  terms: { title: "Terms & Conditions", body: "Valid government-issued photo identification is required for all adult guests at check-in. Standard check-in begins at 2:00 PM and check-out is at 11:00 AM." },
  cancellation: { title: "Cancellation Policy", body: "Free cancellation up to 7 days prior to arrival. Cancellations made within 3–6 days incur a 50% retention charge; within 48 hours of check-in, full booking value applies." }
};

export default function App() {
  const today = new Date();
  const tomorrow = new Date(today); tomorrow.setDate(today.getDate() + 1);
  const dayAfter = new Date(today); dayAfter.setDate(today.getDate() + 2);
  const formatDate = (d) => d.toISOString().split("T")[0];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [roomsCount, setRoomsCount] = useState(1);
  const [travellersOpen, setTravellersOpen] = useState(false);

  const [checkin, setCheckin] = useState(formatDate(tomorrow));
  const [checkout, setCheckout] = useState(formatDate(dayAfter));
  const [searchFeedback, setSearchFeedback] = useState("");
  const [highlightedRooms, setHighlightedRooms] = useState(null);

  const [roomModalKey, setRoomModalKey] = useState(null);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedBookingRoom, setSelectedBookingRoom] = useState("Deluxe Room");
  const [bookingStatus, setBookingStatus] = useState("");
  const [guestName, setGuestName] = useState("");
  const [guestPhone, setGuestPhone] = useState("");

  const [policyModal, setPolicyModal] = useState(null);
  const [reviewPage, setReviewPage] = useState(0);

  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [contactStatus, setContactStatus] = useState("");

  const totalGuests = adults + children;
  const travellersText = `${totalGuests} ${totalGuests === 1 ? "traveller" : "travellers"}, ${roomsCount} ${roomsCount === 1 ? "room" : "rooms"}`;

  const handleSearch = (e) => {
    e.preventDefault();
    const guestsPerRoom = Math.ceil(totalGuests / roomsCount);
    setHighlightedRooms(guestsPerRoom);
    setSearchFeedback(`Showing available rooms for ${checkin} to ${checkout} (${travellersText}).`);
    document.getElementById("rooms")?.scrollIntoView({ behavior: "smooth" });
  };

  const openBooking = (roomName = "Deluxe Room") => {
    setSelectedBookingRoom(roomName);
    setBookingStatus("");
    setBookingModalOpen(true);
  };

  const getActiveNights = () => {
    const d1 = new Date(checkin);
    const d2 = new Date(checkout);
    return Math.max(1, Math.round((d2 - d1) / (1000 * 60 * 60 * 24)) || 1);
  };

  const currentRate = selectedBookingRoom === "Super Deluxe Room" ? 4899 : 3499;
  const estimatedTotal = currentRate * getActiveNights() * roomsCount;

  return (
    <div className="site-wrapper">
      {/* Top Header */}
      <header className="site-header">
        <div className="container header-inner">
          <a href="#" className="brand">
            <span className="brand-crest" id='logo'><img src="https://theauliheritage.com/uploads/tenants/00000000-0000-0000-0000-000000000001/logo/1788498398769-a584e302.webp" alt="Logo" /></span>
            <div className="brand-text">
              <span className="brand-name">The Auli Heritage</span>
              <span className="brand-sub">Sunil, Joshimath · Uttarakhand</span>
            </div>
          </a>

          <nav className="desktop-nav">
            <a href="#rooms">Rooms</a>
            <a href="#amenities">Amenities</a>
            <a href="#about">About</a>
            <a href="#nearby">Nearby</a>
            <a href="#reviews">Reviews</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="header-actions">
            <button type="button" className="btn btn-primary" onClick={() => openBooking()}>Book</button>
            <button
              type="button"
              className="menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
            >
              <span>Menu</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <line x1="3" y1="7" x2="21" y2="7"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="17" x2="21" y2="17"></line>
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-drawer">
            <div className="container mobile-drawer-inner">
              <a href="#rooms" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Rooms</a>
              <a href="#amenities" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Amenities</a>
              <a href="#about" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#nearby" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Nearby</a>
              <a href="#reviews" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Reviews</a>
              <a href="#faq" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
              <a href="#contact" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Contact</a>
              <button type="button" className="btn btn-primary full-width" onClick={() => { setMobileMenuOpen(false); openBooking(); }}>Book Now</button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-media">
          <img src="https://theauliheritage.com/uploads/tenants/00000000-0000-0000-0000-000000000001/about_hotel/1788498964401-31683c1f.webp" alt="Himalayas" />
          <div className="hero-overlay"></div>
        </div>

        <div className="container hero-content">
          <div className="hero-copy">
            <p className="eyebrow">Sunil, Joshimath–Auli Road · 2,000m Elevation</p>
            <h1>Welcome to The Auli Heritage</h1>
            <p className="hero-subtitle">Experience luxury and comfort. Find the perfect room for your stay amidst panoramic Garhwal Himalayan vistas.</p>
          </div>

          <form className="booking-bar" onSubmit={handleSearch}>
            <div className="booking-field">
              <label htmlFor="checkin">Check-in</label>
              <input type="date" id="checkin" value={checkin} min={formatDate(new Date())} onChange={(e) => setCheckin(e.target.value)} required />
            </div>

            <div className="booking-divider"></div>

            <div className="booking-field">
              <label htmlFor="checkout">Check-out</label>
              <input type="date" id="checkout" value={checkout} min={checkin} onChange={(e) => setCheckout(e.target.value)} required />
            </div>

            <div className="booking-divider"></div>

            <div className="booking-field">
              <label>Travellers</label>
              <button type="button" className="travellers-btn" onClick={() => setTravellersOpen(!travellersOpen)}>
                <span>{travellersText}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>

              {travellersOpen && (
                <div className="travellers-popover">
                  <div className="counter-row">
                    <div><strong>Adults</strong><span>Ages 13+</span></div>
                    <div className="counter-controls">
                      <button type="button" className="counter-btn" onClick={() => setAdults(Math.max(1, adults - 1))}>−</button>
                      <span>{adults}</span>
                      <button type="button" className="counter-btn" onClick={() => setAdults(adults + 1)}>+</button>
                    </div>
                  </div>
                  <div className="counter-row">
                    <div><strong>Children</strong><span>Ages 0–12</span></div>
                    <div className="counter-controls">
                      <button type="button" className="counter-btn" onClick={() => setChildren(Math.max(0, children - 1))}>−</button>
                      <span>{children}</span>
                      <button type="button" className="counter-btn" onClick={() => setChildren(children + 1)}>+</button>
                    </div>
                  </div>
                  <div className="counter-row">
                    <div><strong>Rooms</strong><span>Max 4 guests/room</span></div>
                    <div className="counter-controls">
                      <button type="button" className="counter-btn" onClick={() => setRoomsCount(Math.max(1, roomsCount - 1))}>−</button>
                      <span>{roomsCount}</span>
                      <button type="button" className="counter-btn" onClick={() => setRoomsCount(roomsCount + 1)}>+</button>
                    </div>
                  </div>
                  <button type="button" className="btn btn-primary btn-sm full-width" onClick={() => setTravellersOpen(false)}>Done</button>
                </div>
              )}
            </div>

            <button type="submit" className="btn btn-accent search-submit-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <span>Search</span>
            </button>
          </form>
          {searchFeedback && <p className="search-feedback">{searchFeedback}</p>}
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-kicker">Accommodation</span>
              <h2>Refined Mountain Sanctuaries</h2>
            </div>
            <p className="section-desc">Thoughtfully appointed rooms crafted with warm timber accents, heated comforts, and uninterrupted Himalayan views.</p>
          </div>

          <div className="rooms-grid">
            {/* Deluxe Room */}
            <article className={`room-card ${highlightedRooms && ROOM_DATA.deluxe.maxGuests >= highlightedRooms ? 'is-highlighted' : ''}`}>
              <div className="room-media">
                <img src={ROOM_DATA.deluxe.images[0]} alt="Deluxe Room" />
                <span className="room-badge">Mountain & Valley View</span>
                <button type="button" className="gallery-pill" onClick={() => { setRoomModalKey('deluxe'); setActiveImageIdx(0); }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                  Smart Gallery
                </button>
              </div>
              <div className="room-body">
                <div className="room-meta-top">
                  <span>Max Adults: 2–3</span>
                  <span>1 Room · up to 3 guests</span>
                </div>
                <div className="room-title-row">
                  <h3>Deluxe Room</h3>
                  <div className="room-price"><strong>₹3,499</strong><span>/ night</span></div>
                </div>
                <p className="room-desc">Spacious room with premium amenities and scenic views. Perfect for couples, trekkers, and leisure travelers.</p>
                <div className="room-highlights">
                  <span>WiFi</span><span>TV</span><span>Climate Control</span><span>Mini Bar</span><span>Room Service</span><span>Safe</span>
                </div>
                <div className="room-actions">
                  <button type="button" className="btn-link" onClick={() => { setRoomModalKey('deluxe'); setActiveImageIdx(0); }}>View Room Details ›</button>
                  <button type="button" className="btn btn-primary" onClick={() => openBooking("Deluxe Room")}>Book Room</button>
                </div>
              </div>
            </article>
            {/* Family Room */}
            <article className={`room-card ${highlightedRooms && ROOM_DATA['family-room'].maxGuests >= highlightedRooms ? 'is-highlighted' : ''}`}>
              <div className="room-media">
                <img src={ROOM_DATA['family-room'].images[0]} alt="Family room" />
                <span className="room-badge">Mountain & Valley View</span>
                <button type="button" className="gallery-pill" onClick={() => { setRoomModalKey('family-room'); setActiveImageIdx(0); }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                  Smart Gallery
                </button>
              </div>
              <div className="room-body">
                <div className="room-meta-top">
                  <span>Max Adults: 2–3</span>
                  <span>1 Room · up to 3 guests</span>
                </div>
                <div className="room-title-row">
                  <h3>Family Room</h3>
                  <div className="room-price"><strong>₹5,499</strong><span>/ night</span></div>
                </div>
                <p className="room-desc">Spacious room with premium amenities and scenic views. Perfect for couples, trekkers, and leisure travelers.</p>
                <div className="room-highlights">
                  <span>WiFi</span><span>TV</span><span>Climate Control</span><span>Mini Bar</span><span>Room Service</span><span>Safe</span>
                </div>
                <div className="room-actions">
                  <button type="button" className="btn-link" onClick={() => { setRoomModalKey('deluxe'); setActiveImageIdx(0); }}>View Room Details ›</button>
                  <button type="button" className="btn btn-primary" onClick={() => openBooking("Deluxe Room")}>Book Room</button>
                </div>
              </div>
            </article>

            {/* Super Deluxe Room */}
            <article className={`room-card ${highlightedRooms && ROOM_DATA['super-deluxe'].maxGuests >= highlightedRooms ? 'is-highlighted' : ''}`}>
              <div className="room-media">
                <img src={ROOM_DATA['super-deluxe'].images[0]} alt="Super Deluxe Room" />
                <span className="room-badge badge-gold">Signature Suite</span>
                <button type="button" className="gallery-pill" onClick={() => { setRoomModalKey('super-deluxe'); setActiveImageIdx(0); }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                  Smart Gallery
                </button>
              </div>
              <div className="room-body">
                <div className="room-meta-top">
                  <span>Max Adults: 2–4</span>
                  <span>1 Room · up to 4 guests</span>
                </div>
                <div className="room-title-row">
                  <h3>Super Deluxe Room</h3>
                  <div className="room-price"><strong>₹4,899</strong><span>/ night</span></div>
                </div>
                <p className="room-desc">Luxury suite with separate living area, private balcony, and panoramic Himalayan views. Ideal for families and special occasions.</p>
                <div className="room-highlights">
                  <span>WiFi</span><span>TV</span><span>Climate Control</span><span>Mini Bar</span><span>Jacuzzi</span><span>Lounge Access</span>
                </div>
                <div className="room-actions">
                  <button type="button" className="btn-link" onClick={() => { setRoomModalKey('super-deluxe'); setActiveImageIdx(0); }}>View Room Details ›</button>
                  <button type="button" className="btn btn-primary" onClick={() => openBooking("Super Deluxe Room")}>Book Room</button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-kicker">Our Services</span>
              <h2>Curated Himalayan Hospitality</h2>
            </div>
            <p className="section-desc">Every detail is designed for effortless mountain living—from hearty Pahadi dining to 24/7 travel assistance.</p>
          </div>

          <div className="amenities-grid">
            <div className="amenity-card"><div className="amenity-icon">01</div><h3>Panoramic Mountain Dining</h3><p>Freshly prepared Garhwali delicacies, North Indian classics, and artisanal coffee served with sweeping peak views.</p></div>
            <div className="amenity-card"><div className="amenity-icon">02</div><h3>High-Speed Fiber WiFi</h3><p>Reliable connectivity across all rooms and lounges, tailored for remote workcations in the Himalayas.</p></div>
            <div className="amenity-card"><div className="amenity-icon">03</div><h3>24/7 Room Service & Heating</h3><p>All-weather room heating, running hot water, and attentive in-room dining throughout your stay.</p></div>
            <div className="amenity-card"><div className="amenity-icon">04</div><h3>Free Private Parking</h3><p>Dedicated on-site parking with easy access to the Joshimath–Auli Road and Char Dham route.</p></div>
            <div className="amenity-card"><div className="amenity-icon">05</div><h3>Trek & Ropeway Concierge</h3><p>Guided assistance for Auli ski slopes, Kuari Pass treks, Valley of Flowers, and Badrinath temple visits.</p></div>
            <div className="amenity-card"><div className="amenity-icon">06</div><h3>Power Backup & Doctor on Call</h3><p>Uninterrupted power backup, CCTV security, and immediate medical support for complete peace of mind.</p></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container about-grid">
          <div className="about-visual">
            <img src="https://theauliheritage.com/uploads/tenants/00000000-0000-0000-0000-000000000001/about_hotel/1788498955156-f5596748.webp" alt="Interior" />
            <div className="about-stat-card">
              <strong>180°</strong>
              <span>Unobstructed Himalayan Peak Views from Every Balcony</span>
            </div>
          </div>
          <div className="about-content">
            <span className="section-kicker">About Our Hotel</span>
            <h2>Welcome to The Auli Heritage</h2>
            <p>Nestled in the tranquil heights of Sunil along the Joshimath–Auli Road, The Auli Heritage blends traditional Garhwali warmth with contemporary boutique comfort.</p>
            <p>Whether you are setting out for Auli’s alpine ski meadows, embarking on the sacred Badrinath pilgrimage, or unwinding on a quiet mountain retreat, our residence offers a serene sanctuary above the clouds.</p>
            <div className="about-metrics">
              <div><strong>7 km</strong><span>To Auli Ropeway</span></div>
              <div><strong>24/7</strong><span>Concierge Desk</span></div>
              <div><strong>4.8★</strong><span>Guest Satisfaction</span></div>
            </div>
            <a href="#rooms" className="btn btn-primary">Explore</a>
          </div>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section id="nearby" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-kicker">Destination Guide</span>
              <h2>Nearby Attractions</h2>
            </div>
            <p className="section-desc">Explore iconic Himalayan landmarks, sacred shrines, and alpine trails minutes from our doorstep.</p>
          </div>
          <div className="nearby-grid">
            <article className="nearby-card">
              <figure className="nearby-media">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Auli-slopes.jpg" alt="Snow-covered ski slopes in Auli" loading="lazy" />
              </figure>
              <div className="nearby-card-content">
                <span className="nearby-dist">7 km · 15 mins</span>
                <h3>Auli Ropeway & Ski Meadows</h3>
                <p>Ride Asia’s longest cable car to panoramic oak-fringed ski slopes overlooking Nanda Devi.</p>
              </div>
            </article>
            <article className="nearby-card">
              <figure className="nearby-media">
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/15/Narshing_Devta_Temple%2C_Joshimath.jpg" alt="Narsingh Devta Temple in Joshimath" loading="lazy" />
                <figcaption>
                  Photo: <a href="https://commons.wikimedia.org/wiki/File:Narshing_Devta_Temple,_Joshimath.jpg" target="_blank" rel="noopener noreferrer">Merrylynns</a> / <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>
                </figcaption>
              </figure>
              <div className="nearby-card-content">
                <span className="nearby-dist">3.5 km · 10 mins</span>
                <h3>Narsingh Temple & Kalpavriksha</h3>
                <p>Visit the ancient winter seat of Lord Badrinath and the 1,200-year-old sacred mulberry tree.</p>
              </div>
            </article>
            <article className="nearby-card">
              <figure className="nearby-media">
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Badrinath_Temple_Tapt_Kund_hot_springs.jpg" alt="Tapt Kund hot springs at Badrinath Temple" loading="lazy" />
              </figure>
              <div className="nearby-card-content">
                <span className="nearby-dist">48 km · Scenic Drive</span>
                <h3>Badrinath Temple & Mana Village</h3>
                <p>Journey along the Alaknanda river to the revered Char Dham shrine and India’s last border village.</p>
              </div>
            </article>
            <article className="nearby-card">
              <figure className="nearby-media">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/88/Nanda_Devi_Valley_of_Flowers_National_Park.jpg" alt="Scenic view of the Valley of Flowers in Nanda Devi National Park" loading="lazy" />
              </figure>
              <div className="nearby-card-content">
                <span className="nearby-dist">22 km · Trailhead</span>
                <h3>Valley of Flowers & Hemkund Sahib</h3>
                <p>Base yourself in comfort before trekking into UNESCO-listed alpine meadows and glacial lakes.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Guest Reviews */}
      <section id="reviews" className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-kicker">Guest Stories</span>
              <h2>Trusted by Mountain Travelers</h2>
            </div>
            <div className="review-controls">
              <button type="button" className="icon-circle-btn" onClick={() => setReviewPage((reviewPage - 1 + REVIEWS.length) % REVIEWS.length)}>←</button>
              <button type="button" className="icon-circle-btn" onClick={() => setReviewPage((reviewPage + 1) % REVIEWS.length)}>→</button>
            </div>
          </div>

          <div className="reviews-grid">
            {[0, 1, 2].map((offset) => {
              const r = REVIEWS[(reviewPage + offset) % REVIEWS.length];
              return (
                <article key={offset} className="review-card">
                  <div>
                    <div className="review-stars">★★★★★</div>
                    <p className="review-quote">“{r.quote}”</p>
                  </div>
                  <div className="reviewer">
                    <span className="reviewer-avatar">{r.initials}</span>
                    <strong>{r.name}</strong>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section section-alt">
        <div className="container faq-layout">
          <div className="faq-intro">
            <span className="section-kicker">FAQ</span>
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know about check-in policies, mountain transfers, and seasonal weather before your stay.</p>
          </div>
          <div className="faq-list">
            <details className="faq-item" open>
              <summary>What are the check-in and check-out times at The Auli Heritage?</summary>
              <p>Standard check-in is at 2:00 PM and check-out is at 11:00 AM. Early check-in and late check-out are accommodated whenever room availability permits.</p>
            </details>
            <details className="faq-item">
              <summary>Are room heaters and hot water available during winter?</summary>
              <p>Yes. All rooms are equipped with running hot water via dedicated geysers and modern heating options for crisp Himalayan evenings.</p>
            </details>
            <details className="faq-item">
              <summary>How far is the hotel from Auli Ropeway and Joshimath market?</summary>
              <p>We are located on Sunil, Joshimath–Auli Road—roughly 3.1 km from Joshimath town center and 7 km from the Auli Ropeway boarding point.</p>
            </details>
            <details className="faq-item">
              <summary>Do you offer parking and local sightseeing cab arrangements?</summary>
              <p>Complimentary private parking is available on site, and our concierge can arrange verified local cabs for Auli, Badrinath, Tapovan, and Govindghat.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container contact-grid">
          <div className="contact-info">
            <span className="section-kicker">Location & Inquiries</span>
            <h2>Plan Your Himalayan Escape</h2>
            <p>Have questions about group bookings, seasonal packages, or road conditions? Reach out directly to our front desk.</p>
            <div className="contact-details">
              <div><strong>Address</strong><span>Sunil, Joshimath–Auli Road, District Chamoli, Uttarakhand 246443</span></div>
              <div><strong>Reservations & Front Desk</strong><span>+91 97397 99944 · reservations@theauliheritage.com</span></div>
            </div>
            <a href="https://maps.google.com/?q=The+Auli+Heritage+Joshimath" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              Open in Google Maps →
            </a>
          </div>

          <form className="contact-form" onSubmit={(e) => { e.preventDefault(); setContactStatus(`Thank you, ${contactName}. Your message has been sent to The Auli Heritage concierge.`); setContactName(""); setContactEmail(""); setContactPhone(""); setContactMessage(""); }}>
            <h3>Send a Message</h3>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" value={contactName} onChange={(e) => setContactName(e.target.value)} required placeholder="e.g. Aarav Sharma" />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} required placeholder="you@example.com" />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" value={contactPhone} onChange={(e) => setContactPhone(e.target.value)} placeholder="+91 98XXX XXXXX" />
              </div>
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea rows="4" value={contactMessage} onChange={(e) => setContactMessage(e.target.value)} required placeholder="Tell us your preferred dates or special requests..."></textarea>
            </div>
            <button type="submit" className="btn btn-primary full-width">Send Inquiry</button>
            {contactStatus && <p className="form-status">{contactStatus}</p>}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="brand">
              <span className="brand-crest">AH</span>
              <div className="brand-text">
                <span className="brand-name">The Auli Heritage</span>
                <span className="brand-sub">Sunil, Joshimath · Uttarakhand</span>
              </div>
            </div>
            <p>A serene Himalayan heritage stay offering panoramic mountain views, warm hospitality, and effortless access to Auli & Badrinath.</p>
            <button type="button" className="btn btn-accent" onClick={() => openBooking()}>Book Now</button>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#rooms">Rooms & Suites</a></li>
              <li><a href="#amenities">Dining</a></li>
              <li><a href="#amenities">Spa & Wellness</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4>Policies</h4>
            <ul className="footer-links">
              <li><button type="button" className="footer-policy-btn" onClick={() => setPolicyModal(POLICIES.privacy)}>Privacy Policy</button></li>
              <li><button type="button" className="footer-policy-btn" onClick={() => setPolicyModal(POLICIES.terms)}>Terms & Conditions</button></li>
              <li><button type="button" className="footer-policy-btn" onClick={() => setPolicyModal(POLICIES.cancellation)}>Cancellation Policy</button></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4>Location</h4>
            <p className="footer-address">Sunil, Joshimath–Auli Road, Chamoli, Uttarakhand 246443</p>
            <a href="https://maps.google.com/?q=The+Auli+Heritage+Joshimath" target="_blank" rel="noopener noreferrer" className="footer-map-link">Open in Google Maps →</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>© 2026 The Auli Heritage. All rights reserved.</p>
        </div>
      </footer>

      <div className="floating-contact-actions" role="group" aria-label="Contact The Auli Heritage">
        <a
          className="floating-contact-btn floating-call-btn"
          href="tel:+919739799944"
          aria-label="Call The Auli Heritage"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path d="M6.6 3.5 9.2 3a1 1 0 0 1 1.1.6l1.2 2.8a1 1 0 0 1-.3 1.2L9.7 8.8a14 14 0 0 0 5.5 5.5l1.2-1.5a1 1 0 0 1 1.2-.3l2.8 1.2a1 1 0 0 1 .6 1.1l-.5 2.6a1 1 0 0 1-1 .8A17 17 0 0 1 3.5 4.5a1 1 0 0 1 .8-1Z" />
          </svg>
          <span>Call</span>
        </a>
        <a
          className="floating-contact-btn floating-whatsapp-btn"
          href="https://wa.me/919739799944"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Message The Auli Heritage on WhatsApp"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path d="M20 11.7a8 8 0 0 1-11.8 7L4 20l1.3-4A8 8 0 1 1 20 11.7Z" />
            <path d="M9 8.5c.3-.5.6-.5.9-.5l.6 1.4c.1.3 0 .4-.2.7l-.5.6a5.5 5.5 0 0 0 2.5 2.5l.6-.5c.2-.2.4-.3.7-.2l1.4.6c.3.1.3.6.1.9-.4.7-1 1-1.7 1-2.2 0-5.8-3.5-5.8-5.8 0-.7.4-1.3 1.4-1.7Z" />
          </svg>
          <span>WhatsApp</span>
        </a>
      </div>

      {/* Modal 1: Room Details & Smart Gallery */}
      {roomModalKey && (
        <div className="modal-backdrop" onClick={() => setRoomModalKey(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="modal-close" onClick={() => setRoomModalKey(null)}>✕</button>
            <div className="modal-gallery">
              <img src={ROOM_DATA[roomModalKey].images[activeImageIdx]} alt="Room view" />
              <div className="modal-thumbs">
                {ROOM_DATA[roomModalKey].images.map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt=""
                    className={idx === activeImageIdx ? "active" : ""}
                    onClick={() => setActiveImageIdx(idx)}
                  />
                ))}
              </div>
            </div>
            <div className="modal-details">
              <span className="section-kicker">{ROOM_DATA[roomModalKey].capacity}</span>
              <h3>{ROOM_DATA[roomModalKey].name}</h3>
              <p className="room-price"><strong>₹{ROOM_DATA[roomModalKey].price.toLocaleString("en-IN")}</strong> / night</p>
              <p>{ROOM_DATA[roomModalKey].description}</p>
              <h4>Room Highlights</h4>
              <ul className="modal-amenities">
                {ROOM_DATA[roomModalKey].amenities.map((item, i) => <li key={i}>✓ {item}</li>)}
              </ul>
              <button type="button" className="btn btn-primary full-width" onClick={() => { const name = ROOM_DATA[roomModalKey].name; setRoomModalKey(null); openBooking(name); }}>Proceed to Book</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal 2: Reservation / Booking Drawer */}
      {bookingModalOpen && (
        <div className="modal-backdrop" onClick={() => setBookingModalOpen(false)}>
          <div className="modal-card modal-card-narrow" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="modal-close" onClick={() => setBookingModalOpen(false)}>✕</button>
            <span className="section-kicker">Instant Reservation</span>
            <h3>Complete Your Booking</h3>

            <form onSubmit={(e) => { e.preventDefault(); setBookingStatus(`Reservation request received for ${guestName} (${selectedBookingRoom}). Our front desk will confirm shortly.`); }} className="booking-modal-form">
              <div className="form-group">
                <label>Select Room Category</label>
                <select value={selectedBookingRoom} onChange={(e) => setSelectedBookingRoom(e.target.value)}>
                  <option value="Deluxe Room">Deluxe Room — ₹3,499 / night</option>
                  <option value="Super Deluxe Room">Super Deluxe Room — ₹4,899 / night</option>
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Check-in</label>
                  <input type="date" value={checkin} onChange={(e) => setCheckin(e.target.value)} required />
                </div>
                <div className="form-group">
                  <label>Check-out</label>
                  <input type="date" value={checkout} onChange={(e) => setCheckout(e.target.value)} required />
                </div>
              </div>

              <div className="form-group">
                <label>Guests & Rooms</label>
                <input type="text" value={travellersText} readOnly />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Guest Name</label>
                  <input type="text" value={guestName} onChange={(e) => setGuestName(e.target.value)} required placeholder="Full Name" />
                </div>
                <div className="form-group">
                  <label>Mobile / WhatsApp</label>
                  <input type="tel" value={guestPhone} onChange={(e) => setGuestPhone(e.target.value)} required placeholder="+91 98XXX XXXXX" />
                </div>
              </div>

              <div className="booking-summary-box">
                <strong>Estimated Total: ₹{estimatedTotal.toLocaleString("en-IN")}</strong>
                <div>{getActiveNights()} {getActiveNights() === 1 ? "night" : "nights"} × {roomsCount} {roomsCount === 1 ? "room" : "rooms"} ({selectedBookingRoom})</div>
              </div>

              <button type="submit" className="btn btn-accent full-width">Confirm Reservation</button>
              {bookingStatus && <p className="form-status">{bookingStatus}</p>}
            </form>
          </div>
        </div>
      )}

      {/* Modal 3: Policy Reader */}
      {policyModal && (
        <div className="modal-backdrop" onClick={() => setPolicyModal(null)}>
          <div className="modal-card modal-card-narrow" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="modal-close" onClick={() => setPolicyModal(null)}>✕</button>
            <span className="section-kicker">Hotel Policy</span>
            <h3>{policyModal.title}</h3>
            <p className="policy-text">{policyModal.body}</p>
          </div>
        </div>
      )}
    </div>
  );
}