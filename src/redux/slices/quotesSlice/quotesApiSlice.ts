// Нужно использовать точку входа, специфичную для React, чтобы импортировать `createApi`.
// Необходимо использовать точку входа, специфичную для React, чтобы импортировать `createApi`.
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

interface Quote {
  id: number
  quote: string
  author: string
}

interface QuotesApiResponse {
  quotes: Quote[]
  total: number
  skip: number
  limit: number
}

// Определите сервис, используя базовый URL и ожидаемые конечные точки.
export const quotesApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/quotes" }),
  reducerPath: "quotesApi",
  // Типы тегов используются для кэширования и инвалидации.
  tagTypes: ["Quotes"],
  endpoints: build => ({
    // Укажите обобщения для возвращаемого типа (в данном случае `QuotesApiResponse`)
    // и ожидаемого аргумента запроса. Если аргумента нет, используйте `void`
    // для типа аргумента.
    getQuotes: build.query<QuotesApiResponse, number>({
      query: (limit = 10) => `?limit=${limit}`,
      // `providesTags` определяет, какой 'тег' прикрепляется к кэшированным данным,
      // возвращаемым запросом.
      providesTags: (result, error, id) => [{ type: "Quotes", id }],
    }),
  }),
})

// Хуки автоматически генерируются RTK-Query
// То же, что и `quotesApiSlice.endpoints.getQuotes.useQuery`
export const { useGetQuotesQuery } = quotesApiSlice
