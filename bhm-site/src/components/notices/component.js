import Hero from '../hero/component';
import './component.css';

function Notices() {
    return < div>
      <div>
      <h2 class="Notices-Heading bg-dark text-light p-3 align-self-center">Notice Board</h2>
      </div>
      <div class="container">
      <ul class="Notices-List">
        <li><i class="fas fa-hotel fa-xs"></i>&nbsp;&nbsp;New Website of BHM is under progress.</li>
        <li><i class="fas fa-hotel fa-xs"></i>&nbsp;&nbsp;BHM-Board of Hostel Management</li>
        <li><i class="fas fa-hotel fa-xs"></i>&nbsp;&nbsp;Welcome all to the new phase of BHM.</li>
      </ul>
      </div>
      <hr class="hr-1"></hr>
    </div>
}

export default Notices