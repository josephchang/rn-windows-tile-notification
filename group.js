import { addChild, addChildren } from './utils/addChild';
import getChildrenXml from './utils/getChildrenXml';
import SubGroup from './subgroup';

function Group() {
  let $subGroups = [];
  const $allowedChildren = [SubGroup];
  return {
    addSubGroup: (subGroup) => {
      addChild(subGroup, $subGroups, $allowedChildren);
    },
    addSubGroups: (subGroups) => {
      addChildren(subGroups, $subGroups, $allowedChildren);
    },
    clearSubGroups: () => {
      $subGroups = [];
    },
    getXml: () => (
      `<group>${getChildrenXml($subGroups)}</group>`
    ),
  };
}

export default Group;
