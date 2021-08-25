import { IAddressDetail } from "@/components/AddressDetail/types";

const addressData: IAddressDetail = {
  title: "Positon属性大PK",
  grade: 5,
  children: [
    {
      address: "https://www.yuque.com/lihaohao-f0jle/qpfi72/vi6vkz",
      notes: "个人文章",
      isImportant: true,
    },
  ],
};

const addressData1: IAddressDetail = {
  title: "一箩筐的层叠上下文",
  grade: 3,
  children: [
    {
      address: "https://www.yuque.com/lihaohao-f0jle/qpfi72/eucuof",
      notes: "个人文章",
      isImportant: true,
    },
  ],
};

export { addressData, addressData1 };
