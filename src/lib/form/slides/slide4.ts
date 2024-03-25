import { paymentType, resumeFormat } from "@/mock/jsons"
import { z } from "zod"

const today = new Date();
today.setDate(today.getDate() + 1); // Добавляем один день к текущей дате
const tomorrow = today.toISOString().substring(0, 10);

const slide4DateSchema = z
  .object({
    desiredFirstResumeDate: z
      .string()
      .refine(date => date > tomorrow, "Не раньше завтрашнего дня"),
    desiredEmployeeExitDate: z.string(),
  })
  .refine(data => data.desiredFirstResumeDate < data.desiredEmployeeExitDate, {
    message:
      "Дата выхода сотрудника на работу должна быть позже даты первого резюме",
    path: ["desiredEmployeeExitDate"],
  })

// Общая схема, включая схему дат
export const slide4Schema = z.object({
  employeeReward: z.number().min(10000),
  employeeCount: z.number().max(10).min(1),
  paymentType: z.enum(paymentType),
  resumeFormat: z.enum(resumeFormat),
  recruiterTasks: z.array(z.string()),
  dates: slide4DateSchema,
})

export type ZSlide4 = z.infer<typeof slide4Schema>
