import Group from '../../models/group.js';
import groupSchema from '../../schemas/groups';

const validateGroup = (req, res, next) => {
  const group = new Group(
    req.body.name,
    req.body.parmition,
    req.body.groupId
  );
  const { error } = groupSchema.validate(group);

  if (error) {
    return res.status(400).json({
      error
    });
  }

  req.group = group;
  next();
};

export default {
  validateGroup
};
