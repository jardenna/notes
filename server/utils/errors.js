const handleErrors = (err) => {

   let errors = { name: '', email: '', password: '', noUser: '' };
   //Check if email is unique
   if (err.code === 11000) {
      errors.email = 'User alredy exist';
      return errors;
   }

   //LOGIN Incorect email or password
   if (err.message === 'noUser') {
      errors.noUser = 'The user does not exist';
   }
   //LOGIN No auth
   if (err.message === 'noAuth') {
      errors.noUser = 'Access denied';
   }

   //LOGIN Not a valid email
   if (err.message === 'noValid') {
      errors.email = 'Please enter a valid email';
   }
   //LOGIN EmptyFields
   if (err.message === 'notFilledOut') {
      errors.email = 'Please fill out email';
      errors.password = 'Please fill out password';
   }


   if (err.message.includes('user validation failed')) {
      Object.values(err.errors).forEach(({ properties }) => {
         errors[properties.path] = properties.message;
      });
   }
   return errors;
};

module.exports = handleErrors;