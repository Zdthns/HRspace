import type { LendingCardType, TData } from "../types/typesLending"
export const heading = "Поиск рекрутеров по всей стране"

export const recruiter = [
  {
    name: "Eвгений Петров",
    job: "Менеджер консультант",
    city: "Москва",
    rating: 0,
    image:
      "https://sun9-75.userapi.com/impf/c851020/v851020640/174ce6/sKzy16n70z4.jpg?size=1200x800&quality=96&sign=1031fad8d6eda55affd2ff11176114c2&c_uniq_tag=twCCZ4mcmF-pMV8lyx1hiQQ0kjAjIbwKDhOwBDKs6PU&type=album",
  },
  {
    name: "Eвгений Петров",
    job: "Менеджер консультант",
    city: "Москва",
    rating: 0,
    image:
      "https://sun9-75.userapi.com/impf/c851020/v851020640/174ce6/sKzy16n70z4.jpg?size=1200x800&quality=96&sign=1031fad8d6eda55affd2ff11176114c2&c_uniq_tag=twCCZ4mcmF-pMV8lyx1hiQQ0kjAjIbwKDhOwBDKs6PU&type=album",
  },
  {
    name: "Eвгений Петров",
    job: "Менеджер консультант",
    city: "Москва",
    rating: 0,
    image:
      "https://sun9-75.userapi.com/impf/c851020/v851020640/174ce6/sKzy16n70z4.jpg?size=1200x800&quality=96&sign=1031fad8d6eda55affd2ff11176114c2&c_uniq_tag=twCCZ4mcmF-pMV8lyx1hiQQ0kjAjIbwKDhOwBDKs6PU&type=album",
  },
  {
    name: "Eвгений Петров",
    job: "Менеджер консультант",
    city: "Москва",
    rating: 0,
    image:
      "https://sun9-75.userapi.com/impf/c851020/v851020640/174ce6/sKzy16n70z4.jpg?size=1200x800&quality=96&sign=1031fad8d6eda55affd2ff11176114c2&c_uniq_tag=twCCZ4mcmF-pMV8lyx1hiQQ0kjAjIbwKDhOwBDKs6PU&type=album",
  },
  {
    name: "Eвгений Петров",
    job: "Менеджер консультант",
    city: "Москва",
    rating: 0,
    image:
      "https://sun9-75.userapi.com/impf/c851020/v851020640/174ce6/sKzy16n70z4.jpg?size=1200x800&quality=96&sign=1031fad8d6eda55affd2ff11176114c2&c_uniq_tag=twCCZ4mcmF-pMV8lyx1hiQQ0kjAjIbwKDhOwBDKs6PU&type=album",
  },
  {
    name: "Eвгений Петров",
    job: "Менеджер консультант",
    city: "Москва",
    rating: 0,
    image:
      "https://sun9-75.userapi.com/impf/c851020/v851020640/174ce6/sKzy16n70z4.jpg?size=1200x800&quality=96&sign=1031fad8d6eda55affd2ff11176114c2&c_uniq_tag=twCCZ4mcmF-pMV8lyx1hiQQ0kjAjIbwKDhOwBDKs6PU&type=album",
  },
]

export const lendingCards: LendingCardType[] = [
  {
    buttonType: "add",
    cardName: "Создать заявку",
    captions:
      "Оформи заявку и сотни рекрутеров смогут предложить лучших кандидатов",
    buttonText: "Разместить заявку",
    image: "https://s1.1zoom.ru/big3/111/348270-admin.jpg",
  },
  {
    buttonType: "search",
    cardName: "Найти рекрутера",
    captions: "Сотни рекрутеров в твоем городе. Выбери лучших и закрой заявку.",
    buttonText: "Начать поиск рекрутеров",
    image: "https://s1.1zoom.ru/big3/111/348270-admin.jpg",
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
    image: "https://s1.1zoom.ru/big3/111/348270-admin.jpg",
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
