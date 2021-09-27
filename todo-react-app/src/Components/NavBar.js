import './navBar.css'

export default function NavBar() {
  return (
    // <div></div>
    <nav class="bp3-navbar bp3-dark">
      <div class="margin: 0 auto; width: 480px;">
        <div class="bp3-navbar-group bp3-align-left">
          <div class="bp3-navbar-heading">ToDo-App</div>
        </div>
        <div class="bp3-navbar-group bp3-align-right">
          <button class="bp3-button bp3-minimal bp3-icon-home">Home</button>
          <button class="bp3-button bp3-minimal bp3-icon-document">
            Files
          </button>
          <span class="bp3-navbar-divider"></span>
          <button class="bp3-button bp3-minimal bp3-icon-user"></button>
          <button class="bp3-button bp3-minimal bp3-icon-notifications"></button>
          <button class="bp3-button bp3-minimal bp3-icon-cog"></button>
        </div>
      </div>
    </nav>
  );
}
