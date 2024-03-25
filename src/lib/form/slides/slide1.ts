import { z } from "zod"

// // https://hrspace.hh.ru/orders/specializations/
const profSchema = z.object({
  id: z.number(),
  prof_area: z.string(),
  prof_name: z.string(),
})

const salaryRangeSchema = z
  .object({
    salary_min: z
      .number()
      .min(19242, { message: "Не меньше чем МРОТ" })
      .max(2147483647),
    salary_max: z.number().positive().max(2147483647),
  })
  .refine(data => data.salary_min < data.salary_max, {
    message: "Минимальная зарплата должна быть меньше максимальной",
    path: ["salary_max"],
  })

const citySchema = z.object({
  id: z.string(),
  name: z.string(),
})

export const slide1Schema = z.object({
  name: z.string().min(1),
  prof: profSchema,
  city: citySchema,
  salaryRange: salaryRangeSchema,
})

export type ZCity = z.infer<typeof citySchema>
export type ZProf = z.infer<typeof profSchema>
export type ZSlide1 = z.infer<typeof slide1Schema>
