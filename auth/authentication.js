module.exports = (req, res, next) => {
    console.log(req.session)
    if(req.session && req.session.user) {
        next();
    } else {
        next({ code: 403, message: "You shall not pass!" });
    }
}