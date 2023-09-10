export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      "Время-вес ": {
        Row: {
          ID: number
          Вес: string
          "Дата (утро)": string
        }
        Insert: {
          ID?: number
          Вес: string
          "Дата (утро)": string
        }
        Update: {
          ID?: number
          Вес?: string
          "Дата (утро)"?: string
        }
        Relationships: [
          {
            foreignKeyName: "Время-вес _ID_fkey"
            columns: ["ID"]
            referencedRelation: "Человек"
            referencedColumns: ["ID"]
          }
        ]
      }
      "Время-пульс": {
        Row: {
          ID: number
          Дата: string
          "Пульс в спокойном состоянии вечер": string
          "Пульс в спокойном состоянии днем": string
          "Пульс в спокойном состоянии утром": string
          "Пульс во время тренировки": string
          "Часть дня, когда тренировался (утр": string
        }
        Insert: {
          ID?: number
          Дата: string
          "Пульс в спокойном состоянии вечер": string
          "Пульс в спокойном состоянии днем": string
          "Пульс в спокойном состоянии утром": string
          "Пульс во время тренировки": string
          "Часть дня, когда тренировался (утр": string
        }
        Update: {
          ID?: number
          Дата?: string
          "Пульс в спокойном состоянии вечер"?: string
          "Пульс в спокойном состоянии днем"?: string
          "Пульс в спокойном состоянии утром"?: string
          "Пульс во время тренировки"?: string
          "Часть дня, когда тренировался (утр"?: string
        }
        Relationships: []
      }
      Диета: {
        Row: {
          "Длительность (дней)": string
          Наименование: string
          "Ограничение по съеденным белкам": string
          "Ограничение по съеденным жирам": string
          "Ограничение по съеденным калориям": string
          "Ограничение по съеденным углевода": string
        }
        Insert: {
          "Длительность (дней)": string
          Наименование: string
          "Ограничение по съеденным белкам": string
          "Ограничение по съеденным жирам": string
          "Ограничение по съеденным калориям": string
          "Ограничение по съеденным углевода": string
        }
        Update: {
          "Длительность (дней)"?: string
          Наименование?: string
          "Ограничение по съеденным белкам"?: string
          "Ограничение по съеденным жирам"?: string
          "Ограничение по съеденным калориям"?: string
          "Ограничение по съеденным углевода"?: string
        }
        Relationships: []
      }
      Продукты: {
        Row: {
          "Белки (грамм)": string
          Грамм: string
          "Жиры (грамм)": string
          ККалл: string
          "Наименование продукта": string
          "Тип приготовления": string
          "Тип продукта": string
          "Углеводы (грамм)": string
        }
        Insert: {
          "Белки (грамм)": string
          Грамм: string
          "Жиры (грамм)": string
          ККалл: string
          "Наименование продукта": string
          "Тип приготовления": string
          "Тип продукта": string
          "Углеводы (грамм)": string
        }
        Update: {
          "Белки (грамм)"?: string
          Грамм?: string
          "Жиры (грамм)"?: string
          ККалл?: string
          "Наименование продукта"?: string
          "Тип приготовления"?: string
          "Тип продукта"?: string
          "Углеводы (грамм)"?: string
        }
        Relationships: []
      }
      Человек: {
        Row: {
          ID: number
          Вес: string
          Возраст: string
          Диета: string
          Имя: string
          "Размер бедра (периметр)": string
          "Размер груди (периметр) ": string
          "Размер икры": string
          "Размер кисти": string
          "Размер плеча (одного)": string
          "Размер предплечья": string
          "Размер талии (периметр)": string
          Рост: string
          "Фамилия ": string
        }
        Insert: {
          ID?: number
          Вес: string
          Возраст: string
          Диета: string
          Имя: string
          "Размер бедра (периметр)": string
          "Размер груди (периметр) ": string
          "Размер икры": string
          "Размер кисти": string
          "Размер плеча (одного)": string
          "Размер предплечья": string
          "Размер талии (периметр)": string
          Рост: string
          "Фамилия ": string
        }
        Update: {
          ID?: number
          Вес?: string
          Возраст?: string
          Диета?: string
          Имя?: string
          "Размер бедра (периметр)"?: string
          "Размер груди (периметр) "?: string
          "Размер икры"?: string
          "Размер кисти"?: string
          "Размер плеча (одного)"?: string
          "Размер предплечья"?: string
          "Размер талии (периметр)"?: string
          Рост?: string
          "Фамилия "?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
