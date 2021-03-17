exports.studentUploadValidation = (req, res, next) => {
    req.check('name', 'Name is required').notEmpty();
    req.check('phone', 'Phone is required').notEmpty();
      req.check('email', 'Email must be between 3 to 32 characters')
          .matches(/.+\@.+\..+/)
          .withMessage('Email must contain @')
          .isLength({
              min: 4,
              max: 32
          }); 
      req.check('phone', 'phone is required').notEmpty();
      req.check('phone')
          .isLength({ min: 6 })
          .withMessage('phone must contain at least 6 characters')
          .matches(/\d/)
          .withMessage('phone must contain a number');
      const errors = req.validationErrors();
      if (errors) {
          const firstError = errors.map(error => error.msg)[0];
          return res.status(400).json({ error: firstError });
      }
      next();
  };

  exports.userSigninValidator = (req, res, next) => {
      req.check('email', 'Email must be between 3 to 32 characters')
          .matches(/.+\@.+\..+/)
          .withMessage('Email must contain @')
          .isLength({
              min: 4,
              max: 32
          }); 
      req.check('password', 'Password is required').notEmpty();
      req.check('password')
          .isLength({ min: 6 })
          .withMessage('Password must contain at least 6 characters')
          .matches(/\d/)
          .withMessage('Password must contain a number');
      const errors = req.validationErrors();
      if (errors) {
          const firstError = errors.map(error => error.msg)[0];
          return res.status(400).json({ error: firstError });
      }
      next();
  };