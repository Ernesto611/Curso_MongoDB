import Tienda from "../models/tienda";

export const getTienda = async (req, res) => {
    const tienda = await Tienda.find();
    res.status(200).json(tienda);
}

export const createTienda = async (req, res) => {
    const {
        name,
        lastName1,
        lastName2,
        email,
        password,
        rol
    } = req.body;
    const newTienda = new Tienda({
        name,
        lastName1,
        lastName2,
        email,
        password: await Tienda.encryptPassword(password),
    })
    const emai = await Tienda.findOne({ email: req.body.email })

    if (emai != null) {
        res.status(401).json({ messages: "Correo ya registrado" })
    }

    if (rol) {
        const foundRol = await Rol.find({ name: { $in: rol } })
        newTienda.rol = foundRol.map(rol => rol._id)
    }

    await newTienda.save();
    let fullName = await helpers.tokenTienda(req.headers['x-access-token']);
    let toDay = momentTz().tz('America/Mexico_City');
    const history = new History({
        guest: fullName,
        did: "Agrego una nueva tienda",
        dateModifi: toDay
    })
    await history.save()

    res.status(200).json({ messages: "OK" })
}

export const updateTiendaById = async (req, res) => {
    const tienda= await Tienda.findById(req.params.TiendaId, req.body, {new: true});
    console.log(Tienda);
    res.status(200).json(tienda);
}