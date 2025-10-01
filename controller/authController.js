export const register = async (req, res) => {
    try {
        res.status(201).json({
            meassage: "Berhasil register, silahkan Login",
            data: null
        })
    } catch(e) {
        res.status(500).json({
            meassage: e.message,
            data: null
        })
    }
}