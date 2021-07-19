class CardPrivateArea extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const common = [
      {
        id: 1,
        detail: "ระบบน้ำ 18/10/2564",
        status: false,
      },
      {
        id: 2,
        detail: "ระบบไฟ 16/10/2564",
        status: true,
      },
    ];

    const data = common.map(
      (item) =>
        `<div class="card-blur" style="margin-bottom: 10px;">
              <div class="content">
                  <div class="ph-text">
                      <p>${item.detail}</p>
                  </div>
                  <span>
                  ${
                    item.status
                      ? '<button class="button-success"><p>ซ่อมสร็จแล้ว</p></button>'
                      : '<button class="button-bill"> <p>รอรับรอง</p></button>'
                  }
                  </span>
              </div>
        </div>`
    );
    this.innerHTML = String(data).replace(/,(?!["{}[\]])/g, "");
    console.log(data);
  }
}
customElements.define("private-area", CardPrivateArea);
