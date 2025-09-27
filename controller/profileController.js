export const publicProfile = (req, res) => {
    const username = req.params.username
    res.render('public-profiles', {
        title: username,
        username: username,
        bio: "Hallo nama saya Sigma"
    });
}