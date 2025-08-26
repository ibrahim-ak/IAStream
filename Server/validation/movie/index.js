const createMovieSchema = {
  // Title Validation
  title: {
    notEmpty: {
      errorMessage: "Title cannot be empty",
    },
    isLength: {
      options: {
        min: 3,
        max: 256,
      },
      errorMessage: "Title must be at least 3 characters",
    },
    isString: {
      errorMessage: "Invalid Title",
    },
    trim: true,
  },

  // Photo Validation
  photo: {
    notEmpty: {
      errorMessage: "Photo cannot be empty",
    },
    isString: {
      errorMessage: "Invalid Photo",
    },
  },

  // Description Validation
  description: {
    isString: {
      errorMessage: "Invalid Description",
    },
    notEmpty: {
      errorMessage: "Description cannot be empty",
    },
    isLenght: {
      options: {
        min: 10,
        max: 1000,
      },
      errorMessage: "Description is too short...",
    },
  },

  // Duration Validation
  duration: {
    isString: {
      errorMessage: "Invalid Duration",
    },
    notEmpty: {
      errorMessage: "Duration cannot be empty",
    },
  },

  // Actors Validation
  actors: {
    isArray: {
      options: {
        min: 1,
        max: 5,
      },
      errorMessage: "Please add at least one actor",
    },
    notEmpty: {
      errorMessage: "Actors cannot be empty",
    },
  },

  // Categories Validation
  categories: {
    isArray: {
      options: {
        min: 1,
        max: 5,
      },
      errorMessage: "Please add at least one categories",
    },
    notEmpty: {
      errorMessage: "Categories cannot be empty",
    },
  },
};

module.exports = createMovieSchema;
