const {Router} = require('express');
const router = new Router();
const fs = require('fs');
const {readMyFileFunc} = require('../middleware/filesOperations')
const files_controller = require('../controllers/files_controller')
const path = require('path');
const multer = require('multer');


const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,"data");
    }
    ,
    filename: (req,file,cb)=>{
        cb(null, file.originalname);
    }

});

const upload = multer({storage:storage});



router.get('/',(req,res)=>{

    res.render('index',{ data : fs.readdirSync('./data')}) 
})

router.get('/files/:id',files_controller.readFiles)

router.get('/create',(req,res)=>{
    res.render('create')
})

router.get('/upload',(req,res)=>{
    res.render('upload')
})

router.post('/createNewFile',files_controller.createFile);

router.get('/delete/:id',files_controller.deleteFile);

router.get('/showUpdate/:id',files_controller.readFilesUpdate);
router.post('/update/:id',files_controller.updateFile);

router.get('/renamePage/:id',files_controller.showRenamePage)
router.post('/renameFile/:id',files_controller.renameFile);

router.get('/upload',(req,res)=> res.render('upload'))
router.post('/upload',upload.single("file"),(req,res)=>res.redirect('/'));


module.exports = router;