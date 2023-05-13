const db=require('../model');

exports.getAdmin=(req,res,next) => {
    res.render('dashboard/admin');
}

exports.getAssembly=(req,res,next) => {
    res.render('dashboard/Assembly');
}

exports.getFabrication=(req,res,next) => {
    const sql="select * from fabrication;"
    db.all(sql, [], (err, rows)=> {
        if(err)
        throw err;
        res.render('dashboard/fabrication', {
            rows: rows
        });        
    });
}

exports.postFabrication=(req,res,next)=> {
    const dataFromForm=req.body;
    const sql="insert into fabrication(item_id, item, raw_material, quantity, quantity_unit) values("+dataFromForm.item_id+",\""+dataFromForm.item+"\",\""+dataFromForm.raw_material+"\","+dataFromForm.quantity+",\""+dataFromForm.quantity_unit+"\");";
    db.run(sql, [],(err)=> {
        if(err)
        return console.log(err);
    });
    res.redirect('/dashboard/fabrication');
}

exports.getSubAssembly=(req,res,next) => {
    res.render('dashboard/Sub-assembly');
}