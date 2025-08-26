const createReviewSchema = {
  // Content Validation
  content: {
    notEmpty: {
      errorMessage: "Content Cannot be empty"
    },
    isLength: {
      options: {
        min: 10
      }
    },
    errorMessage: "Content must be at least more then 10 characters",
  },
  isString: {
    errorMessage: "Invalid Content",
  },
  trim: true,
}

module.exports = createReviewSchema;