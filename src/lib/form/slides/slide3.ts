import {
  contractType,
  socialPackage,
  workFormat,
  workSchedule,
} from "@/mock/jsons"
import { z } from "zod"

export const slide3Schema = z.object({
  workSchedule: z.enum(workSchedule),
  workFormat: z.enum(workFormat),
  contractType: z.enum(contractType),
  socialPackage: z.enum(socialPackage),
})

export type ZSlide3 = z.infer<typeof slide3Schema>
