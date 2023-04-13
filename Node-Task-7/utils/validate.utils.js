const yup = require("yup");

const Schema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  priority:yup.string().required(),
  dueDate: yup
    .string()
    .matches(
      /^[0-3]?[0-9].[0-3]?[0-9].(?:[0-9]{2})?[0-9]{2}$/gm,
      "Date is not in correct format"
    )
    .required(),
  taskComments: yup.array().required(),
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
