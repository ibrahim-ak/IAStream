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

  // Logo Validation
  logo: {
    notEmpty: {
      errorMessage: "Logo cannot be empty",
    },
    isString: {
      errorMessage: "Invalid Logo"
    }
  },

  // Big Image Validation
  big_image: {
    notEmpty: {
      errorMessage: "Big Image Cannot be empty"
    },
    isString: {
      errorMessage: "Invalid Big Image"
    }
  },

  // Small Image Validation
  small_image: {
    notEmpty: {
      errorMessage: "Small Image cannot be empty"
    },
    isString: {
      errorMessage: "Invalid Small Image"
    }
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

  // Language Validation
  language: {
    isString: {
      errorMessage: "Invalid Language",
    },
    notEmpty: {
      errorMessage: "Language cannot be empty"
    }
  },

  // Year Validation
  year: {
    isString: {
      errorMessage: "Invalid Year",
    },
    notEmpty: {
      errorMessage: "Year cannot be empty"
    },
  },

  // Audio Validation
  audio: {
    isArray: {
      options: {
        min: 1,
        max: 5,
      },
      errorMessage: "Please add at least one audio",
    },
    notEmpty: {
      errorMessage: "Audio cannot be empty"
    }
  },

  // Subtitle Validation
  subtitle: {
    isString: {
      errorMessage: "Invalid Subtitle"
    },
    notEmpty: {
      errorMessage: "Subtitle cannot be empty"
    }
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
