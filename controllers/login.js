exports.getHomepage=(req,res,next)=> {
    res.render('login/homepage');
}

exports.postRole=(req,res,next)=> {
    const role=req.body.role;
    console.log(role);
    if(role=="Admin Personnel") {
        res.redirect('/dashboard/admin');
    } else if(role=="Fabrication Personnel") {
        res.redirect('/dashboard/fabrication');
    } else if(role=="Assembly Personnel") {
        res.redirect('/dashboard/assembly');
    } else {
        res.redirect('/dashboard/sub-assembly');
    }
}