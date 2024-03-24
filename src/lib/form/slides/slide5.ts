import { z } from "zod"

export const slide5Schema = z.object({
  experienceYears: z
    .number()
    .min(0, { message: "Опыт работы не может быть отрицательным" })
    .int("Опыт работы должен быть указан целым числом"),

  specialSkills: z.array(z.string()),
  additionalTasks: z.array(z.string()),

  isIndividual: z.boolean(),

  blacklistedCompanies: z.array(z.string()),

  recruiterCount: z.union([
    z.literal(1, {
      errorMap: () => ({ message: "Обязательное поле" }),
    }),
    z.literal(2),
    z.literal(3),
  ]),

  acceptOffer: z.literal(true, {
    errorMap: () => ({ message: "Обязательное поле" }),
  }),
})

export type ZSlide5 = z.infer<typeof slide5Schema>
