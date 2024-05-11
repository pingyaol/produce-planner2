// A simple reusable custom navigation ba element with 3 slots
window.customElements.define(
  "custom-navbar",
  class extends HTMLElement {
    constructor() {
      super();
      const root = this.attachShadow({ mode: "open" });
      root.innerHTML = `
    <style>
      :host {
        position: relative;
        display: block;
        padding: 5px 5px 5px 5px;
        text-align: center;
        background-color: rgba(114,157,64,255);
        position: fixed;
        width: 100%;
        top: env(safe-area-inset-top);
      }

      .nav {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 10px;
      }

      // .end {
      //   display: fixed; 
      //   margin: 0;
      //   display: block; 
      //   float: right; 
      // }

      ::slotted(h1) {
        margin: 0;
        font-size: 1em;
        font-weight: 700;
        color: #fff;
      }
      ::slotted(div) {
        color: #fff;
        margin: 0;
      }
    </style>
    <div class="nav">
      <div><slot name="logo"></slot></div> 
      <div><slot name="home"></slot></div>
      <div><slot name="cart"></slot></div>
      <div><slot name="recipe"></slot></div>
      <div><slot name="menu"></slot></div>
      <div><slot name="user"></slot></div>
    </div>
    `;
    }
  }
);
