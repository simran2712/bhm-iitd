import time from './../../assets/time.png';
import './component.css';
function Calendar(){
    return <div class="event-container">
    <div className="heading">Upcoming Events</div>

    <div class="event">
      <div class="event-left">
        <div class="event-date">
          <div class="date">8</div>
          <div class="month">Nov 2021</div>
        </div>
      </div>

      <div class="event-right">
        <h3 class="event-title">Some Title Here</h3>

        <div class="event-description">
          This will contain all the necessary details of the upcoming event!
        </div>

        <div class="event-timing">
          <img src={time}/> 10:00 am
        </div>
      </div>
    </div>

    <div class="event">
      <div class="event-left">
        <div class="event-date">
          <div class="date">8</div>
          <div class="month">Nov 2021</div>
        </div>
      </div>

      <div class="event-right">
        <h3 class="event-title">Some Title Here</h3>

        <div class="event-description">
          This will contain all the necessary details of the upcoming event!
        </div>

        <div class="event-timing">
          <img src={time}/> 10:00 am
        </div>
      </div>
    </div>

    <div class="event">
      <div class="event-left">
        <div class="event-date">
          <div class="date">8</div>
          <div class="month">Nov 2021</div>
        </div>
      </div>

      <div class="event-right">
        <h3 class="event-title">Some Title Here</h3>

        <div class="event-description">
          This will contain all the necessary details of the upcoming event!
        </div>

        <div class="event-timing">
          <img src={time}/> 10:00 am
        </div>
      </div>
    </div>
    </div>
}

export default Calendar