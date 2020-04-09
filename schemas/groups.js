import Joi from '@hapi/joi';
import { permition } from '../models/group';

const groupSchema = Joi.object({
  groupId: Joi.string()
    .length(36)
    .required(),

  name: Joi.string()
    .alphanum()
    .min(2)
    .max(20)
    .required(),

  permition: Joi.string()
    .valid(
      permition.WRITE,
      permition.READ,
      permition.DELETE,
      permition.SHARE,
      permition.UPLOAD_FILES
    )
    .required()
});

export default groupSchema;
