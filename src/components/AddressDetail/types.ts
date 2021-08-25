interface IDetail {
  address: string;
  notes?: string;
  isImportant?: boolean;
}

export interface IAddressDetail {
  title: string;
  grade: number;
  children: IDetail[];
}
