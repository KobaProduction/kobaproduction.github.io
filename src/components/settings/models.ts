export interface SettingItemData {
  title: string
  caption: string
  value: boolean
  icon: string
}

export interface SettingsProps {
  itemData: SettingItemData
  func: (value: boolean) => void
}
