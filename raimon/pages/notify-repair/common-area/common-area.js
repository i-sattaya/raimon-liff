class CommonArea extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const commonArea = [
      {
        id: 1,
        name: "สระว่ายน้ำ",
        image: "../../../photo/common-area/swimming-pool.svg",
      },
      {
        id: 2,
        name: "ห้องคาราโอเกะ",
        image: "../../../photo/common-area/microphone.svg",
      },
      {
        id: 3,
        name: "ฟิตเนส",
        image: "../../../photo/common-area/dumbbell.svg",
      },
      {
        id: 4,
        name: "ห้องสมุด",
        image: "../../../photo/common-area/book-open-backwards.svg",
      },
      {
        id: 5,
        name: "ห้องประชุม",
        image: "../../../photo/common-area/interview.svg",
      },
      {
        id: 6,
        name: "ห้อง Co-working",
        image: "../../../photo/common-area/team.svg",
      },
      {
        id: 7,
        name: "สวน",
        image: "../../../photo/common-area/watering-can.svg",
      },
      {
        id: 8,
        name: "ลานจอดรถ",
        image: "../../../photo/common-area/dumbbell.svg",
      },
      {
        id: 9,
        name: "ลิฟท์",
        image:
          "../../../photo/common-area/../../../photo/common-area/dumbbell.svg",
      },
    ];

    const data = commonArea.map(
      (item) =>
        `<div class="grid-item">
            <div class="card-blur">
                <img src=${item.image} alt ="icon"/>
            </div>
            <p>${item.name}</p>
        </div>
        `
    );
    this.innerHTML = String(data).replace(/,(?!["{}[\]])/g, "");
    console.log(String(data).replace(/,(?!["{}[\]])/g, ""));
  }
}
customElements.define("common-area-item", CommonArea);
