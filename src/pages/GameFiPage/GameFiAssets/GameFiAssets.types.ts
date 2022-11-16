export interface FilterStatus {
  category: string;
  keyword: string;
}

export interface AssetsPadProps {
  number: number;
  filter: Array<FilterStatus>;
  keyword: string | undefined;
}

export interface AssetsItem {
  thumb?: any;
  icon?: any;
  checkboxIcon?: string;
  evolutionRequired?: boolean;
  assetMinted?: boolean;
  wallet?: boolean;
  sufficientFunds?: boolean;

  rarity?: string;
  collection?: string;
  name?: string;
}
