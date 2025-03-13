export type SubmenuItem = {
    label: string;
    href: string;
  };    
  
  // export type HeaderItem = {
  //   label: string;
  //   href: string;
  //   submenu?: SubmenuItem[];
  // };


  export type HeaderItem = {
    label: string;
    href: string;
    submenu?: HeaderItem[]; // Existing submenu property
    moresubmenu?: HeaderItem[]; // New nested submenu property
  };
  
  