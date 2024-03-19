import { ReactElement } from "react"

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
type LendingCardType = {
  buttonType: "add" | "search" | "callback"
  cardName: string
  captions: string | ReactElement
  buttonText: string
  image: string
}

export const lendingCard: LendingCardType[] = [
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
      <span>
        Нужна помощь в создании заявки?
        <a href="tel:+79150000000">Позвоните нам</a> или закажите обратный
        звонок{" "}
      </span>
    ),
    buttonText: "Заказать звонок",
    image: "https://s1.1zoom.ru/big3/111/348270-admin.jpg",
  },
]
