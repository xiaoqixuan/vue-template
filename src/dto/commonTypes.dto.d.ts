declare module 'CommonTypes' {
  export interface FilterItem {
    label: string;
    key: string;
    children: Array<SubItem>;
  }

  export interface SubItem {
    label: string;
    key: any;
  }

  export interface MetaKey {
    name: string;
    menu?: string[];
    url?: string[];
  }

  export interface PageInfo {
    size: number;
    page: number;
    totalPage?: number;
    totalNum?: number;
  }

  export interface Header {
    [key: string]: string;
  }
}
