"use client"

import { Portal, Select, createListCollection } from "@chakra-ui/react"
import { useState } from "react"

interface selectProps{
 options:{name:string, label:string}[],
 placeholder:string, 
 name:string,

}
const CustomSelect = ({options, placeholder}:selectProps) => {
  const [selected, setSelected] = useState<string>()
  // console.log("selected", selected);
  const handleChange=(e: any)=>{
  // console.log(e)
    setSelected(e.value)
  }
  const collection = createListCollection({items: options.map(option => ({label: option.label, value: option.name}))})
  
  return (
    <Select.Root
      collection={collection}
      width="320px"
      value={selected}
      onValueChange={(e) => handleChange(e)}
    >
      <Select.HiddenSelect />
      <Select.Label>Select {placeholder}</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder={`Select ${placeholder}`} />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {collection.items.map((item) => (
              <Select.Item item={item} key={item.value}>
                {item.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  )
}

const frameworks = createListCollection({
  items: [
    { label: "React.js", value: "react" },
    { label: "Vue.js", value: "vue" },
    { label: "Angular", value: "angular" },
    { label: "Svelte", value: "svelte" },
  ],
})

export default CustomSelect;
