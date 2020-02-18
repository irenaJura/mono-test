import { computed, observable } from "mobx";

class Store {
  @observable vehicleMake = [
    {
      id: 1,
      name: "Bayerische Motoren Werke",
      abrv: "BMW",
      src: "bmw.jpg"
    },
    {
      id: 2,
      name: "Mercedes Benz",
      abrv: "MB",
      src: "mb.jpg"
    },
    {
      id: 3,
      name: "Audi",
      abrv: "",
      src: "audi.jpg"
    },
    {
      id: 4,
      name: "Ferrari",
      abrv: "",
      src: "ferrari.jpg"
    },
    {
      id: 5,
      name: "VolksWagen",
      abrv: "VW",
      src: "vw.jpg"
    },
    {
      id: 6,
      name: "Peugeot",
      abrv: "",
      src: "peugeot.jpg"
    },
    {
      id: 7,
      name: "Renault",
      abrv: "",
      src: "renault.jpg"
    },
    {
      id: 8,
      name: "Alfa Romeo",
      abrv: "alfa",
      src: "alfa.jpg"
    },
    {
      id: 9,
      name: "Fiat",
      abrv: "",
      src: "fiat.jpg"
    },
    {
      id: 10,
      name: "Ford",
      abrv: "",
      src: "ford.jpg"
    },
    {
      id: 11,
      name: "Hyundai",
      abrv: "",
      src: "hyundai.jpg"
    },
    {
      id: 12,
      name: "Suzuki",
      abrv: "",
      src: "suzuki.jpg"
    }
  ];

  @observable filter = "";
  @computed get filteredVehicle() {
    const matches = new RegExp(this.filter, "i");
    return this.isClicked
      ? this.sortedVehicle.filter(
          vehicle => matches.test(vehicle.name) || matches.test(vehicle.abrv)
        )
      : this.vehicleMake.filter(
          vehicle => matches.test(vehicle.name) || matches.test(vehicle.abrv)
        );
  }

  @observable isClicked = false;
  @computed get sortedVehicle() {
    return this.vehicleMake.slice().sort((a, b) => {
      return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    });
  }
}

const store = new Store();

export default store;
