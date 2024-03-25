import avatar from "@/images/avatar/avatar.png"
import avatar2 from "@/images/avatar/avatar2.png"
import avatar3 from "@/images/avatar/avatar3.png"
import avatar4 from "@/images/avatar/avatar4.png"
import avatar5 from "@/images/avatar/avatar5.png"
import avatar6 from "@/images/avatar/avatar6.png"

import Image from "@/images/Image.png"
import Image2 from "@/images/Image 2.png"
import Image3 from "@/images/Image 3.png"

import type { LendingCardType } from "../types/typesLending"
export const heading = "Поиск рекрутеров по всей стране"

export const recruiter = [
  {
    name: "Eвгений Петров",
    job: "Менеджер консультант",
    city: "Москва",
    rating: 5,
    image: avatar,
  },
  {
    name: "Светлана Шабанова",
    job: "Кадровое агентство",
    city: "Уфа",
    rating: 5,
    image: avatar2,
  },
  {
    name: "Ольга Светикова",
    job: "Частный рекрутер",
    city: "Москва",
    rating: 5,
    image: avatar3,
  },
  {
    name: "Елена Володина",
    job: "Частный рекрутер",
    city: "Новосибирск",
    rating: 5,
    image: avatar4,
  },
  {
    name: "Артур Филатов",
    job: "Частный рекрутер",
    city: "Екатеринбург",
    rating: 5,
    image: avatar5,
  },
  {
    name: "Андрей Егоров",
    job: "Руководитель КА",
    city: "Санкт-Петербург",
    rating: 5,
    image: avatar6,
  },
]

export const lendingCards: LendingCardType[] = [
  {
    buttonType: "add",
    cardName: "Создать заявку",
    captions:
      "Оформи заявку и сотни рекрутеров смогут предложить лучших кандидатов",
    buttonText: "Разместить заявку",
    image: Image,
  },
  {
    buttonType: "search",
    cardName: "Найти рекрутера",
    captions: "Сотни рекрутеров в твоем городе. Выбери лучших и закрой заявку.",
    buttonText: "Начать поиск рекрутеров",
    image: Image2,
  },
  {
    buttonType: "callback",
    cardName: "Найти рекрутера",

    captions: (
      <>
        Нужна помощь в создании заявки?
        <span id="call">Позвоните нам</span> или закажите обратный звонок{" "}
      </>
    ),
    buttonText: "Заказать звонок",
    image: Image3,
  },
]

//export const setDataSearch: TData = {
//  dataSetInput: [
//    {
//      name: "city",
//      placeholder: "Город или регион",
//      type: "text",
//    },
//  ],
//  dataSetButton: [{ buttonType: "search", buttonText: "Показать" }],

//  heading: "Укажите город или регион",
//}
//export const setDataCallback: TData = {
//  dataSetInput: [
//    {
//      placeholder: "Ваше имя",
//      type: "text",
//      name: "name",
//      minLength: "2",
//      maxLength: "35",
//    },
//    { placeholder: "+7(___)___*__*__", type: "tel", name: "phone" },
//  ],
//  dataSetButton: [{ buttonType: "callback", buttonText: "Заказать звонок" }],

//  heading: "Обратный звонок",
//}
//export const setDataCall: TData = {
//  dataSetInput: [
//    {
//      label: "Для Москвы и области",
//      value: "8 495 974-64-27",
//      type: "text",
//      name: "phone",
//    },
//    {
//      label: "Для Санкт-Петербурга и области",
//      value: "8 812 458-45-45",
//      type: "text",
//      name: "phone",
//    },
//    {
//      label: "Для регионов",
//      value: "8 800 100-64-27",
//      type: "text",
//      name: "phone",
//    },
//  ],
//}

//export const callbackFieldSet = {
//  name: "name",
//  tel: "phone",
//}
//export const DataCallFieldSet = {
//  tel1: "phone",
//  tel2: "phone",
//  tel3: "phone",
//}
////const searchFieldSet = {

////}
