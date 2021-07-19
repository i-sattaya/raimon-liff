class NavHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="nav">
        <div class="nav-header">
            <div class="nav-line">
            <hr />
        </div>
        <div class="nav-menu">
            <li><b>CN</b></li>
            <div class="vl"></div>
            <li><b>TH</b></li>
            <div class="vl"></div>
            <li><b>EN</b></li>
        </div>
    </div>`;
  }
}
customElements.define("nav-component", NavHeader);
