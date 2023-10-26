// src/types.ts

export interface Address {
  id: number;
  attributes: {
    name: string;
    address: string;
    landmark: string;
    mobile: string;
    pinCode: string;
    state: string;
    town: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    house: string;
    tags: string | null;
  };
}

export interface Product {
  price: string;
  color: any;
  name: string;
  category: any;
  images: any;
  id: string;
  attributes: {
    id: any;
    selectedFabric: string;
    selectedColor: string;
    images: any;
    name: string;
    slug: string;
    description: string;
    price: number;
    originalPrice: number;
    rating: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    isFeatured: boolean;
    tags: string;
    size: string;
  };
}

export interface Category {
  id: any;
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  products: any; // You can specify the type of the "products" field based on your actual data structure
}

export interface Order {
  id: number;
  attributes: {
    name: string;
    fabric: string;
    color: string;
    paid: boolean;
    payment: string;
    mobile: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    address: {
      data: Address;
    };
    products: {
      data: Product[];
    };
  };
}

export interface PlacedOrdersResponse {
  data: Order[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
