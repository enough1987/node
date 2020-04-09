
const uuidv1 = require('uuid/v1');

export const permition = {
  READ: 'READ',
  WRITE: 'WRITE',
  DELETE: 'DELETE',
  SHARE: 'SHARE',
  UPLOAD_FILES: 'UPLOAD_FILES'

};

class Group {
  constructor(name, _permition = permition.READ, groupId = uuidv1()) {
    this.name = name;
    this.permition = _permition;
    this.groupId = groupId;
  }
}

export default Group;
