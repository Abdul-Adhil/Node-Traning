const yup = require("yup");

const Schema = yup.object().shape({
  employeeId: yup.number().required(),
  realName: yup.string().required(),
  dob: yup
    .string()
    .matches(
      /^[0-3]?[0-9].[0-3]?[0-9].(?:[0-9]{2})?[0-9]{2}$/gm,
      "Is not in correct format"
    )
    .required(),
  hobbies: yup.string().required(),
});

async function validate(req, res, next) {
  try {
    await Schema.validate(req.body);
    return next();
  } catch (err) {
    return res.status(500).json({ type: err.name, message: err.message });
  }
}

module.exports = { validate };
