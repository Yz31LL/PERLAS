import { verifysignUp } from '../middleware/index.js';
import * as controller from '../controllers/auth.controller.js';

export default function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post(
        "/api/auth/singup",
        [
            verifysignUp.checkDuplicateUsernameOrEmail,
            verifysignUp.checkRolesExisted
        ],
        controller.signup
    );

    app.post("/api/auth/signin", controller.signin);
};