const jwt = require('jsonwebtoken');
const { attemptToRefreshToken } = require('../util/authUtil');

const authMiddleware = {
    protect: async (request, response, next) => {
        try {
            const token = request.cookies?.jwtToken;
            if (!token) {
                return response.status(401).json({
                    error: 'Unauthorized access'
                });
            }

            try {
                const user = jwt.verify(token, process.env.JWT_SECRET);
                request.user = user;
                next();
            } catch (error) {
                const refreshToken = request.cookies?.refreshToken;
                if( refreshToken) {
                    const { newAccessToken, user } = 
                        await attemptToRefreshToken(refreshToken);
                    response.cookie('jwtToken', newAccessToken, {
                        httpOnly: true,
                        secure: process.env.NODE_ENV === 'production',
                        path: '/',
                        sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax'
                    });
                    request.user = user;
                    next();
                }
                return response.status(401).json({
                    error: 'Unauthorized access'
                });
            }
        } catch (error) {
            console.log(error);
            response.status(500).json({
                error: 'Internal server error'
            });
        }
    },
};

module.exports = authMiddleware;