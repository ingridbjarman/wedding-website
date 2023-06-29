import React, {useState} from "react";
import { Combobox } from "@headlessui/react";

interface IGroup {
  name: string,
  displayNames: string,
  guests: number,
  timestamp: any,
  people?: any,
}

export function SelectGroup({groups, setGroup}: any) {
  const [selectedGroup, setSelectedGroup] = useState('');
  const [searchString, setSearchString] = useState('');
  const [groupList, setGroupList] = useState(groups);

  const handleSelectGroup = (group: any) => {
    setGroup(group);
    setSelectedGroup(group)
    setSearchString(`${group.name} - ${group.displayNames}`)
  }

  const handleSearch = (evt: any) => {
    const s = evt.target.value;
    setSearchString(s);

    const filteredData = groups.filter((group: any) => group.name.toLowerCase().includes(s.toLowerCase()));
    setGroupList(filteredData);
  }

  return (
    <Combobox value={selectedGroup} onChange={(group) => handleSelectGroup(group)} nullable={true}>
      <div className="inputText">
        <Combobox.Input autoComplete="off" onChange={handleSearch} className='input font-montserrat font-extralight size-lg text-xl text-slate-500' placeholder="Enter surname" value={searchString} />
      </div>
      <Combobox.Options className="flex flex-col">
        {groupList.length > 0 && groupList?.map((g: any) => {
          return (
            <Combobox.Option key={g.id} value={g} className="py-2 font-montserrat font-extralight text-lg text-slate-500 hover:underline hover:font-light">
              <div className="text-slate-600">{g.name}</div>
              <div className="text-slate-400">{g.displayNames}</div>
            </Combobox.Option>
          )
        })}
      </Combobox.Options>
    </Combobox>
  )
}
