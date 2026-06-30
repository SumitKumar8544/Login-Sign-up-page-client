export const validateEmail = (email) => {
  const re = /^\S+@\S+\.\S+$/;
  return re.test(String(email).toLowerCase());
};

export const validatePassword = (password) => {
  return typeof password === 'string' && password.length >= 6;
};

export const validateName = (name) => {
  return typeof name === 'string' && name.trim().length >= 2;
};

export const validateSignupForm = ({ name, email, password, confirmPassword }) => {
  const errors = {};

  if (!validateName(name)) {
    errors.name = 'Name must be at least 2 characters';
  }

  if (!validateEmail(email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!validatePassword(password)) {
    errors.password = 'Password must be at least 6 characters';
  }

  if (password !== confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }

  return { isValid: Object.keys(errors).length === 0, errors };
};

export const validateLoginForm = ({ email, password }) => {
  const errors = {};

  if (!validateEmail(email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!password) {
    errors.password = 'Password is required';
  }

  return { isValid: Object.keys(errors).length === 0, errors };
};
