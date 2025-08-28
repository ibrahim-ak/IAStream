const createAuthSchema = {
  name: {
    notEmpty: {
      errorMessage: "Name cannot be empty",
    },
    isLength: {
      options: {
        min: 3,
        max: 256,
      },
      errorMessage: "Name must be at least 3 characters",
    },
    isString: {
      errorMessage: "Invalid Name",
    },
    trim: true,
  },
  email: {
    isEmail: {
      errorMessage: "Invalid Email",
    },
    notEmpty: {
      errorMessage: "Email cannot be empty",
    },
    trim: true,
  },
  phone: {
    isMobilePhone: {
      options: ["any"],
      errorMessage: "Please enter a valid phone number",
    },
    isLength: {
      options: {
        max: 10,
      },
      errorMessage: "Invalid Phone Number",
    },
    notEmpty: {
      errorMessage: "Phone number cannot be empty",
    },
  },
  password: {
    isLength: {
      options: { min: 8 },
      errorMessage: "Password must be at least 8 characters",
    },
    matches: {
      options: /^(?=.*[A-Z])/,
      errorMessage: "Password must contain at least one uppercase letter",
    },
    matches: {
      options: /^(?=.*[a-z])/,
      errorMessage: "Password must contain at least one lowercase letter",
    },
    matches: {
      options: /^(?=.*\d)/,
      errorMessage: "Password must contain at least one number",
    },
    matches: {
      options: /^(?=.*[\W_])/,
      errorMessage: "Password must contain at least one special character",
    },
  },
};

module.exports = createAuthSchema;
