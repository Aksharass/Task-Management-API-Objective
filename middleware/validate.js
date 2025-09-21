// middlewares/validate.js
export const validateUser = (req, res, next) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: "Name and Email are required" });
  }
  next();
};

export const validateTask = (req, res, next) => {
  const { title, description, status, deadline, userId } = req.body;
  if (!title || !description || !status || !deadline || !userId) {
    return res.status(400).json({ error: "All fields are required" });
  }
  if (!["pending", "in-progress", "completed"].includes(status)) {
    return res.status(400).json({ error: "Invalid status value" });
  }
  next();
};
    