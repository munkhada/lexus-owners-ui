import React from "react";
import "./promo.css";

const Benefits = () => {
  return (
    <div className="benefits-page">
      <div className="benefits-main">

        {/* TITLE */}
        <div className="benefits-header">
          <h1>ОНЦГОЙ ДАВУУ ЭРХ</h1>
          <p>
            Лексусын эзэмшигчдэд зориулсан тусгай хөнгөлөлт, урилга,
            хамтрагч байгууллагын давуу эрхүүд.
          </p>
        </div>

        {/* TOP 2 */}
        <div className="benefits-feature-row">
          <div className="benefits-large-feature">
            <img src="/mulounge.jpg" alt="" />
            <div className="overlay">TEST</div>
          </div>

          <div className="benefits-large-feature">
            <img src="/emerge.jpg" alt="" />
            <div className="overlay">TEST</div>
          </div>
        </div>

        {/* MAP */}
        <div className="benefits-map-card">
          <iframe
            src="https://maps.google.com/maps?q=47.918873,106.917701&z=14&output=embed"
            title="map"
          />
        </div>

        {/* 3 CARDS */}
        <div className="benefits-card-grid">
          <div className="benefits-mini-card">
            <div className="benefits-mini-media">
              <img src="/airport lounge.jpg" alt="" />
              <div className="overlay">TEST</div>
            </div>
          </div>

          <div className="benefits-mini-card">
            <div className="benefits-mini-media">
              <img src="/owner benefit.jpg" alt="" />
              <div className="overlay">TEST</div>
            </div>
          </div>

          <div className="benefits-mini-card">
            <div className="benefits-mini-media">
              <img src="/cryo.jpg" alt="" />
              <div className="overlay">TEST</div>
            </div>
          </div>
        </div>

        {/* UPCOMING */}
        <div className="benefits-upcoming">
          <h2>ТУН УДАХГҮЙ ХЭРЭГЖИХ УРАМШУУЛАЛ</h2>

          <div className="benefits-upcoming-list">
            <div className="benefits-upcoming-item">Lexus VIP Event</div>
            <div className="benefits-upcoming-item">Golf Tournament</div>
            <div className="benefits-upcoming-item">Winter Experience</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Benefits;
