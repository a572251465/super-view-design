interface IDetail {
  address: string
  notes?: string
  desc?: string
  isImportant?: boolean
}

export interface IAddressDetail {
  title: string
  grade: number
  children: IDetail[]
}
