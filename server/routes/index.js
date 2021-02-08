const { Router } = require('express');
const router = Router();
const User = require('../models/user')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';

router.get('/', (req, res) => res.send('Holly Molly'))


router.post('/register', async (req, res) => {
    if (req.body.password) { }
    const { email, password, name, lastname, status } = req.body;
    const newUser = new User({ email, password, name, lastname, status });
    console.log(newUser);
    await newUser.save();
    /*const token = await jwt.sign({_id: newUser._id}, 'secretkey');
    res.status(200).json({token});  esto guarda el id de un nuevo usuario si fuera el caso de que
    el usuario haga su registro y quiere mantener la sesion iniciada*/
    res.send("Registrado");

});

router.get('/getUsers2', async (req, res) => {
    const usuarios = await User.find({ "rol": "Administrador" });
    res.send(usuarios)
})

router.get('/countAllUsers', async (req, res) => {
    const usuarios = await User.countDocuments({})
    res.json(usuarios)
})

router.get('/countAllUsersEmpresa/:id', async (req, res) => {
    const { id } = req.params;
    const usuarios = await User.countDocuments({ "empresa.nombre": id })

    res.json(usuarios)
})

router.post('/getUserRepeat', async (req, res) => {

    const usuarios = await User.find({ "empresa.nombre": req.body.empresa, "username": req.body.username })

    res.json(usuarios)
})


router.post('/signIn', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(401).send('La cuenta no existe');
    /* if (user.password !== password) return res.status(401).send('Contraseña Incorrecta');
     const token = jwt.sign({ _id: user._id }, 'secretkey');
     return res.status(200).json({ token });*/

    if (bcrypt.compareSync(req.body.password, user.password)) {
        const token = jwt.sign({ _id: user._id }, 'secretkey');
        return res.status(200).json({ token,user });
    } else {
        return res.status(401).send('Contraseña Incorrecta');

    }


});


router.get('/dashboard', verifyToken, (req, res) => {//para rutas privadas


});


router.post('/signInGoogle', async (req, res) => {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(401).send('Correo no existe');
    // if (user.password !== password) return res.status(401).send('Wrong Password');
    const token = jwt.sign({ _id: user.token }, 'secretkey');

    return res.status(200).json({ token });
});


async function verifyToken(req, res, next) {
    try {
        if (!req.headers.authorization) {//revisa si en cada petición existe una cabecera autorizacion
            return res.status(401).send('Unauhtorized Request');
        }
        let token = req.headers.authorization.split(' ')[1];
        if (token === 'null') {// si existe revisa que el token no este vacio
            return res.status(401).send('Unauhtorized Request');
        }

        const payload = await jwt.verify(token, 'secretkey');
        if (!payload) { //si no esta vacio extrae los datos del token
            return res.status(401).send('Unauhtorized Request');
        }
        req.userId = payload._id;
        next();
    } catch (e) {
        return res.status(401).send('Unauhtorized Request');
    }
}

router.post('/nameRepeatSuperAdmin/', async (req, res) => {

    const user = await User.find({ "username": req.body.username });

    res.json(user);
})

router.post('/mailRepeatSuperAdmin/', async (req, res) => {

    const user = await User.find({ "email": req.body.email });

    res.json(user);
})

router.post('/mailRepeatAdmin/', async (req, res) => {

    const user = await User.find({ "email": req.body.email, "empresa.nombre": req.body.empresa });

    res.json(user);
})

router.post('/mailRepeatAdminEdit/', async (req, res) => {

    const user = await User.find({ "email": req.body.email, "empresa.nombre": req.body.empresa, "_id": { $ne: req.body._id }  });

    res.json(user);
})

router.post('/mailRepeatSuperAdminEdit/', async (req, res) => {

    const user = await User.find({ "email": req.body.email, "_id": { $ne: req.body._id }  });

    res.json(user);
})


router.post('/nameRepeatAdmin/', async (req, res) => {

    const user = await User.find({ "username": req.body.username, "empresa.nombre": req.body.empresa });

    res.json(user);
})

router.get('/getUsers', async (req, res) => {
    const grupos = await User.find();
    res.send(grupos)
})

router.get('/getUsers2', async (req, res) => {
    const grupos = await User.find({ "empresa": "Webbi" });
    res.send(grupos)
})

router.get('/getUsers/:id', async (req, res) => {
    const { id } = req.params;
    const grupos = await User.findById(id);
    res.json(grupos);
})

router.get('/getUsers2/:empresa', async (req, res) => {
    const { empresa } = req.params;
    const grupos = await User.find({ "empresa.nombre": empresa });
    res.json(grupos);
})

router.get('/getUsers1/:correo', async (req, res) => {
    const { correo } = req.params;
    const grupos = await User.find({ "email": correo });
    // console.log("sss "+grupos)
    res.json(grupos);
})

router.get('/getUserAccess/:_id', async (req, res) => {
    const { _id } = req.params;
    const user = await User.find({ "_id": _id });
    // console.log("sss "+grupos)
    res.json(user);
})



router.post('/newUser', async (req, res) => {
    const { email, password, name, rol, grupo, empresa, numUsuarios, username, status } = req.body;

    const emailExiste = await User.findOne({ email });

    if (emailExiste) {
        return res.status(401).send('Correo ya está asociado a otra cuenta');
    }
    else {
        const { email, password, name, rol, grupo, empresa, numUsuarios, username, imageProfile, status } = req.body;
        const newUser = new User({ email, password, name, rol, grupo, empresa, numUsuarios, username, imageProfile, status });
        bcrypt.hash(req.body.password, 10, (err, hash) => {
            newUser.password = hash
            User.create(newUser)

            res.json({ status: 'user creado' });
        })

        /* await newUser.save();
         res.json({ status: 'user creado' });*/

    }

});

//actualizar un solo usuario

router.put('/updateUser/:id', async (req, res, next) => {

    const { id } = req.params;
    const user = {
        name: req.body.name,
        username: req.body.username,
        description: req.body.description,
        email: req.body.email,
        password: req.body.password,
        rol: req.body.rol,
        status: req.body.status,
        imageProfile: req.body.imageProfile,
    };
    await User.findByIdAndUpdate(id, { $set: user }, { new: true });
    res.json({ status: 'Perfil Actualizado' });
})


router.put('/update/:id', async (req, res, next) => {
    const { id } = req.params;
    /* const { email, password, name, rol,grupo,empresa,numUsuarios } = req.body;
    const newUser = new User({ email, password, name, rol ,grupo,empresa,numUsuarios}); */
    const usuario = {
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        username: req.body.username,
        grupo: req.body.grupo,
        rol: req.body.rol,
        empresa: req.body.empresa,
        status: req.body.status
        //numUsuarios: req.body.numUsuarios,
    };
    console.log(usuario)
    await User.findByIdAndUpdate(id, { $set: usuario }, { new: true });
    res.json({ status: 'User Updated' });
})


router.delete('/delete/:id', async (req, res, next) => {
    await User.findByIdAndRemove(req.params.id);
    res.json({ status: 'USER Deleted' });
})


router.put('/updatePassword/:id', async (req, res, next) => {
    const { id } = req.params;
    const user = {
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        username: req.body.username,
        rol: req.body.rol,
        grupo: req.body.grupo,
        empresa: req.body.empresa,
        status: req.body.status
        //numUsuarios: req.body.numUsuarios,
    };
    var passUp = req.body.password

    var hashear = new Promise((resolve, reject) => {
        bcrypt.hash(passUp, 10, (err, hash) => {
            user.password = hash
            resolve("Stuff worked!");

        })
    })


    hashear.then(actualizar => {
        User.findByIdAndUpdate(id, { $set: user }, function (err, result) {
            if (err) {
                console.log(err);
            }
            console.log("RESULT: " + result);
            res.json({ status: 'User Updated' });
        });
    })
});





router.post('/getPassword', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) res.json({ status: 'unauthorized' });


    if (bcrypt.compareSync(req.body.password, user.password)) {

        res.json({ status: 'correcta' });
    } else {
        res.json({ status: 'incorrecta' });

    }
});

module.exports = router;