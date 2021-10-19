import Hero from '../hero/component';
import './component.css';

function Notice(props) {
  return <div className="notice p-4 m-4 bg-white">
    <div className="notice-title">
      {props.title}
    </div>
    <div className="notice-body mt-1">
      {props.body}
    </div>
  </div>
}

function Notices() {
  return <div className="my-5 py-5 bg-light">
    <div>
      <h2 class="heading">Notices</h2>
    </div>
    <div class="container">
      <div className="notices text-left">
        <Notice title={"Notice 1"} body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada mi aliquet, suscipit libero et, varius leo. Mauris id nisl justo. Vestibulum varius, turpis vel convallis mollis, urna lectus vestibulum sem, luctus auctor purus felis et tellus. Duis ac mauris euismod, efficitur eros sit amet, facilisis est. Donec egestas vulputate rutrum." />
        <Notice title={"Notice 2"} body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada mi aliquet, suscipit libero et, varius leo. Mauris id nisl justo. Vestibulum varius, turpis vel convallis mollis, urna lectus vestibulum sem, luctus auctor purus felis et tellus. Duis ac mauris euismod, efficitur eros sit amet, facilisis est. Donec egestas vulputate rutrum." />
        <Notice title={"Notice 3"} body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada mi aliquet, suscipit libero et, varius leo. Mauris id nisl justo. Vestibulum varius, turpis vel convallis mollis, urna lectus vestibulum sem, luctus auctor purus felis et tellus. Duis ac mauris euismod, efficitur eros sit amet, facilisis est. Donec egestas vulputate rutrum." />
      </div>
    </div>
  </div>
}

export default Notices