import getChildrenXml from './utils/getChildrenXml';

function Group() {
  this.subGroups = [];
  return {
    addSubGroup: (subGroup) => {
      this.subgroups.push(subGroup);
    },
    clearSubGroups: () => {
      this.subGroups = [];
    },
    getXml: () => (
      `<group>${getChildrenXml(this.subGroups)}</group>`
    ),
  };
}

export default Group;
