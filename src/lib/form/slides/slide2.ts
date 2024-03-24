import { citizenship, education } from "@/mock/jsons"
import { z } from "zod"

export const slide2Schema = z.object({
  // Обязанности сотрудника
  employeeResponsibilities: z
    .array(z.string())
    .min(3, "Необходимо выбрать минимум 3 навыка"),
  // Уровень образования
  education: z.enum(education),
  // Опыт работы
  experience: z.number().int().nonnegative(), // предполагая что опыт указывается целыми числами и не может быть отрицательным
  // Гражданство
  citizenship: z.enum(citizenship),
  // Владение программами
  softwareSkills: z.array(z.string()),
  // Водительские права
  drivingLicense: z.boolean(),
  // Наличие автомобиля
  carOwnership: z.boolean(),
})

export type ZSlide2 = z.infer<typeof slide2Schema>
