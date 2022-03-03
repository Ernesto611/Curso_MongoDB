import Curso from "../models/curso";

export const getCurso = async (req, res) => {
    const curso = await Curso.find();
    res.status(200).json(curso);
}

export const createCurso = async (req, res) => {
    const {
        materia,
        profesor,
        status,
        cantalu
    } = req.body;
    const newCurso = new Curso({
        materia,
        profesor,
        status,
        cantalu,
    })

    await newCurso.save();
    res.status(200).json({ messages: "Curso guardado xd" })
}

export const updateCursoById = async (req, res) => {
    const curso= await Curso.findById(req.params.CursoId, req.body, {new: true});
    console.log(Curso);
    res.status(200).json(curso);
}

export const deleteCursoById = async (req, res) => {
    await Curso.findByIdAndDelete(req.params.CursoId);
    res.status(204).json();
}
