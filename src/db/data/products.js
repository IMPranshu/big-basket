import tomato from "../../ASSETS/Products/tomato.webp";
import butter from "../../ASSETS/Products/butter.webp";
import carrots from "../../ASSETS/Products/carrots.webp";
import chicken from "../../ASSETS/Products/chicken-wings.webp";
import chocolate from "../../ASSETS/Products/chocolate.webp";
import coke from "../../ASSETS/Products/coke.webp";
import eggs from "../../ASSETS/Products/eggs.webp";
import meat from "../../ASSETS/Products/meat.webp";
import milk from "../../ASSETS/Products/milk.webp";
import pomegranate from "../../ASSETS/Products/pomegranate.webp";
import potatoes from "../../ASSETS/Products/potatoes.webp";
import roomFreshner from "../../ASSETS/Products/room Freshner.webp";

const products = [
  {
    ProductId: 1,
    ProductName: "Tomato",
    ProductDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    ProductImage: [
      {
        id: 1,
        image: tomato,
      },
    ],
    ProductCode: "P1",
    ProductCategory: "Vegetables & Fruits",
    ProductWeight: "1 kg",
    ProductQuantity: 10,
    ProductPrice: 100,
    ProductDiscount: 10,
    SalesPrice: 90,
  },
  {
    ProductId: 124,
    ProductName: "Pomegranate",
    ProductDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    ProductImage: [
      {
        id: 1,
        image: pomegranate,
      },
    ],
    ProductCode: "P124",
    ProductCategory: "Vegetables & Fruits",
    ProductWeight: "1 kg",
    ProductQuantity: 10,
    ProductPrice: 150,
    ProductDiscount: 10,
    SalesPrice: 140,
  },
  {
    ProductId: 124,
    ProductName: "Potato",
    ProductDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    ProductImage: [
      {
        id: 1,
        image: potatoes,
      },
    ],
    ProductCode: "P123",
    ProductCategory: "Vegetables & Fruits",
    ProductWeight: "1 kg",
    ProductQuantity: 10,
    ProductPrice: 15,
    ProductDiscount: 1,
    SalesPrice: 14,
  },

  {
    ProductId: 12,
    ProductName: "Carrot",
    ProductDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    ProductImage: [
      {
        id: 1,
        image: carrots,
      },
    ],
    ProductCode: "P12",
    ProductCategory: "Vegetables & Fruits",
    ProductWeight: "1 kg",
    ProductQuantity: 10,
    ProductPrice: 55,
    ProductDiscount: 5,
    SalesPrice: 50,
  },
  {
    ProductId: 2,
    ProductName: "Butter",
    ProductDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    ProductImage: [
      {
        id: 1,
        image: butter,
      },
    ],
    ProductCode: "P3",
    ProductCategory: "Daily Essentials",
    ProductWeight: "1 pkt",
    ProductQuantity: 10,
    ProductPrice: 50,
    ProductDiscount: 5,
    SalesPrice: 45,
  },
  {
    ProductId: 35,
    ProductName: "Milk",
    ProductDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    ProductImage: [
      {
        id: 1,
        image: milk,
      },
    ],
    ProductCode: "P35",
    ProductCategory: "Daily Essentials",
    ProductWeight: "1 ltr",
    ProductQuantity: 10,
    ProductPrice: 60,
    ProductDiscount: 5,
    SalesPrice: 55,
  },
  {
    ProductId: 4,
    ProductName: "Chicken",
    ProductDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    ProductImage: [
      {
        id: 1,
        image: chicken,
      },
    ],
    ProductCode: "P4",
    ProductCategory: "Meat, Chicken & Eggs",
    ProductWeight: "1 pc",
    ProductQuantity: 10,
    ProductPrice: 500,
    ProductDiscount: 50,
    SalesPrice: 450,
  },
  {
    ProductId: 41,
    ProductName: "Eggs",
    ProductDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    ProductImage: [
      {
        id: 1,
        image: eggs,
      },
    ],
    ProductCode: "P41",
    ProductCategory: "Meat, Chicken & Eggs",
    ProductWeight: "1 pkt",
    ProductQuantity: 10,
    ProductPrice: 70,
    ProductDiscount: 10,
    SalesPrice: 60,
  },
  {
    ProductId: 43,
    ProductName: "Meat",
    ProductDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    ProductImage: [
      {
        id: 1,
        image: meat,
      },
    ],
    ProductCode: "P43",
    ProductCategory: "Meat, Chicken & Eggs",
    ProductWeight: "1 pc",
    ProductQuantity: 10,
    ProductPrice: 300,
    ProductDiscount: 50,
    SalesPrice: 250,
  },
  {
    ProductId: 31,
    ProductName: "Chocolate",
    ProductDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    ProductImage: [
      {
        id: 1,
        image: chocolate,
      },
    ],
    ProductCode: "P31",
    ProductCategory: "Daily Essentials",
    ProductWeight: "1 pkt",
    ProductQuantity: 10,
    ProductPrice: 10,
    ProductDiscount: 1,
    SalesPrice: 9,
  },
  {
    ProductId: 32,
    ProductName: "Coke",
    ProductDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    ProductImage: [
      {
        id: 1,
        image: coke,
      },
    ],
    ProductCode: "P32",
    ProductCategory: "Daily Essentials",
    ProductWeight: "1 pkt",
    ProductQuantity: 10,
    ProductPrice: 50,
    ProductDiscount: 5,
    SalesPrice: 45,
  },
  {
    ProductId: 126,
    ProductName: "Room Spray",
    ProductDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    ProductImage: [
      {
        id: 1,
        image: roomFreshner,
      },
    ],
    ProductCode: "P126",
    ProductCategory: "Home Needs",
    ProductWeight: "1 bot",
    ProductQuantity: 10,
    ProductPrice: 150,
    ProductDiscount: 10,
    SalesPrice: 140,
  },
];

export default products;
