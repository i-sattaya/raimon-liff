class CardPhone extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const phone = [
      {
        id: 1,
        name: "เหตุด่วนเหตุร้าย",
        phone: "191",
        image: "../../photo/logo-phone/policeman.svg",
      },
      {
        id: 2,
        name: "ดับเพลิง",
        phone: "199",
        image: "../../photo/logo-phone/hose.svg",
      },
      {
        id: 3,
        name: "รถพยาบาล",
        phone: "1669",
        image: "../../photo/logo-phone/ambulance-facing-right.svg",
      },
    ];

    const data = phone.map(
      (item) =>
        `<div class="card-blur" style="margin-bottom: 10px; cursor: pointer; background-color: #f8f8f8;"onclick="window.open('tel:${item.phone}');">
            <div class="content">
                <div class="ph-text">
                  <img src=${item.image} alt=${item.id} width="20" />
                  <p>${item.name}</p>
                </div>
                <span>
                  <p>${item.phone}</p>
                </span>
            </div>
        </div>`
    );
    this.innerHTML = String(data).replace(/,(?!["{}[\]])/g, "");
    console.log(data);
  }
}
customElements.define("card-phone", CardPhone);
