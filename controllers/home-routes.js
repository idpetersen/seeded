const router = require('express').Router();


router.get('/', (req, res) =>{
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
}
    res.render('landing')
})

router.get('/about', (req, res)=>{
  if(req.session.loggedIn){
    res.render('about',{
      layout: 'loggedin'
    })
  } else {
    res.render('about')
  }
})

//Get route to sign up for an account

router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/dashboard');
        return;
    }

    res.render('signup');
});

//Route that renders a form to be able to login
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/dashboard');
      return;
    }
  
    res.render('login');
  });

router.get('/nouser', (req,res)=> {
    res.render('nouser'), {
        layout: 'loggedin'
    }
})

module.exports = router;