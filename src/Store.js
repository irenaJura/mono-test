import { computed, observable, action } from "mobx";
import pagination from "./Pagination";

class Store {
  @observable vehicleMake = [
    {
      id: 1,
      name: "Bayerische Motoren Werke",
      abrv: "BMW",
      src: "images/bmw.jpg",
      vehicleModel: [
        {
          id: 1,
          makeId: 1,
          name: "128",
          abrv: "128",
          src: "images/128.jpg",
        },
        {
          id: 2,
          makeId: 1,
          name: "Sedan",
          abrv: "Sedan",
          src: "images/sedan.jpg",
        },
        {
          id: 3,
          makeId: 1,
          name: "X5",
          abrv: "X5",
          src: "images/x5.jpg",
        },
      ],
    },
    {
      id: 2,
      name: "Mercedes Benz",
      abrv: "MB",
      src: "images/mb.jpg",
      vehicleModel: [
        {
          id: 4,
          makeId: 2,
          name: "AMG",
          abrv: "AMG",
          src: "images/amg.jpg",
        },
        {
          id: 5,
          makeId: 2,
          name: "Convertible",
          abrv: "Convertible",
          src: "images/convertible.jpg",
        },
        {
          id: 6,
          makeId: 2,
          name: "E 400",
          abrv: "E 400",
          src: "images/e400.jpg",
        },
      ],
    },
    {
      id: 3,
      name: "Audi",
      abrv: "",
      src: "images/audi.jpg",
      vehicleModel: [
        {
          id: 7,
          makeId: 3,
          name: "Coupe",
          abrv: "Coupe",
          src: "images/audi-coupe.jpg",
        },
        {
          id: 8,
          makeId: 3,
          name: "Sedan",
          abrv: "Sedan",
          src: "images/audi-sedan.jpg",
        },
      ],
    },
    {
      id: 4,
      name: "Ferrari",
      abrv: "",
      src: "images/ferrari.jpg",
      vehicleModel: [
        {
          id: 9,
          makeId: 4,
          name: "Coupe",
          abrv: "Coupe",
          src: "images/ferrari-coupe.jpg",
        },
      ],
    },
    {
      id: 5,
      name: "VolksWagen",
      abrv: "VW",
      src: "images/vw.jpg",
      vehicleModel: [
        {
          id: 10,
          makeId: 5,
          name: "Beetle",
          abrv: "Beetle",
          src: "images/beetle.jpg",
        },
        {
          id: 11,
          makeId: 5,
          name: "Van",
          abrv: "Van",
          src: "images/van.jpg",
        },
      ],
    },
    {
      id: 6,
      name: "Peugeot",
      abrv: "",
      src: "images/peugeot.jpg",
      vehicleModel: [
        {
          id: 12,
          makeId: 6,
          name: "Coupe",
          abrv: "Coupe",
          src: "images/peugeot-coupe.jpg",
        },
      ],
    },
    {
      id: 7,
      name: "Renault",
      abrv: "",
      src: "images/renault.jpg",
      vehicleModel: [
        {
          id: 13,
          makeId: 7,
          name: "Megane",
          abrv: "Megane",
          src: "images/megane.jpg",
        },
        {
          id: 14,
          makeId: 7,
          name: "Convertible",
          abrv: "Convertible",
          src: "images/renault-convertible.jpg",
        },
      ],
    },
    {
      id: 8,
      name: "Alfa Romeo",
      abrv: "alfa",
      src: "images/alfa.jpg",
      vehicleModel: [
        {
          id: 15,
          makeId: 8,
          name: "4C",
          abrv: "4C",
          src: "images/4c-alfa.jpg",
        },
      ],
    },
    {
      id: 9,
      name: "Fiat",
      abrv: "",
      src: "images/fiat.jpg",
      vehicleModel: [
        {
          id: 16,
          makeId: 9,
          name: "Fiat 500",
          abrv: "500",
          src: "images/fiat.jpg",
        },
      ],
    },
    {
      id: 10,
      name: "Ford",
      abrv: "",
      src: "images/ford.jpg",
      vehicleModel: [
        {
          id: 17,
          makeId: 10,
          name: "Focus",
          abrv: "Focus",
          src: "images/ford-focus.jpg",
        },
        {
          id: 18,
          makeId: 10,
          name: "Shelby",
          abrv: "Shelby",
          src: "images/ford-shelby.jpg",
        },
      ],
    },
    {
      id: 11,
      name: "Hyundai",
      abrv: "",
      src: "images/hyundai.jpg",
      vehicleModel: [
        {
          id: 19,
          makeId: 11,
          name: "Palisade",
          abrv: "Palisade",
          src: "images/palisade.jpg",
        },
      ],
    },
    {
      id: 12,
      name: "Suzuki",
      abrv: "",
      src: "images/suzuki.jpg",
      vehicleModel: [
        {
          id: 20,
          makeId: 12,
          name: "Swift",
          abrv: "Swift",
          src: "images/swift.jpg",
        },
        {
          id: 21,
          makeId: 12,
          name: "Vitara",
          abrv: "Vitara",
          src: "images/vitara.jpg",
        },
      ],
    },
  ];

  @action
  deleteMake(id) {
    this.vehicleMake = this.vehicleMake.filter((make) => make.id !== id);
  }

  @observable filter = "";

  @action
  searchTerm(value) {
    this.filter = value;
  }

  @computed get filteredVehicle() {
    const matches = new RegExp(this.filter, "i");
    return this.isSorted
      ? this.sortedVehicle.filter(
          (vehicle) => matches.test(vehicle.name) || matches.test(vehicle.abrv)
        )
      : this.vehicleMake.filter(
          (vehicle) => matches.test(vehicle.name) || matches.test(vehicle.abrv)
        );
  }

  @observable isSorted = false;

  @action
  toggleSort = () => {
    this.isSorted = !this.isSorted;
    return (pagination.currentPage = 1);
  };

  @computed get sortedVehicle() {
    return this.vehicleMake.slice().sort((a, b) => {
      return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    });
  }
}

const store = new Store();

export default store;
