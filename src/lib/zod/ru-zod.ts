import i18next from "i18next"
import { z, type ZodErrorMap } from "zod"
import { zodI18nMap } from "zod-i18n-map"
// Импорт файлов перевода
import translation from "zod-i18n-map/locales/ru/zod.json"

i18next.init({
  lng: "ru",
  resources: {
    ru: { zod: translation },
  },
})

const myErrorMap: ZodErrorMap = (issue, ctx) => {
  // Использование кастомных сообщений
  if (issue.code === "invalid_type") {
    return { message: "Обязательное поле" }
  }
  // Возвращение стандартной карты ошибок для всех остальных случаев
  return zodI18nMap(issue, ctx)
}

z.setErrorMap(myErrorMap)
