import type { z } from "zod"
import { type ZSlide1, slide1Schema } from "./slides/slide1"
import { type ZSlide2, slide2Schema } from "./slides/slide2"
import { type ZSlide3, slide3Schema } from "./slides/slide3"
import { type ZSlide4, slide4Schema } from "./slides/slide4"
import { type ZSlide5, slide5Schema } from "./slides/slide5"

export const formSchema = slide1Schema
  .merge(slide2Schema)
  .merge(slide3Schema)
  .merge(slide4Schema)
  .merge(slide5Schema)

export type ZForm = z.infer<typeof formSchema>

export function isSlideKey(slide: string): slide is keyof typeof slideFields {
  return slide in slideFields
}

export const slideFields = {
  Slide1: Object.keys(slide1Schema.shape) as (keyof ZSlide1)[],
  Slide2: Object.keys(slide2Schema.shape) as (keyof ZSlide2)[],
  Slide3: Object.keys(slide3Schema.shape) as (keyof ZSlide3)[],
  Slide4: Object.keys(slide4Schema.shape) as (keyof ZSlide4)[],
  Slide5: Object.keys(slide5Schema.shape) as (keyof ZSlide5)[],
} as const
