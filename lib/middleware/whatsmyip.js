/*!
 * Clientinfa - whatsmyip
 * Copyright(c) 2012 Truepattern
 * MIT Licensed
 */

/**
 * Module dependencies.
 */


/**
 * whatsmyip:
 * 
 *  return the true ip of the client (check for proxy headers).
 *  the result is set in req.clientinfa structure.
 *
 * @return {Function}
 * @api public
 */

exports = module.exports = function whatsmyip() {
  return function whatsmyip(req, res, next) {
    req.clientinfa = {'ip':getClientIp(req)};
    next();
  };
};

// snippet taken from http://catapulty.tumblr.com/post/8303749793/heroku-and-node-js-how-to-get-the-client-ip-address
function getClientIp(req) {
  var ipAddress;
  // The request may be forwarded from local web server.
  var forwardedIpsStr = req.header?req.header('x-forwarded-for'):'';
  if (forwardedIpsStr) {
    // 'x-forwarded-for' header may return multiple IP addresses in
    // the format: "client IP, proxy 1 IP, proxy 2 IP" so take the
    // the first one
    var forwardedIps = forwardedIpsStr.split(',');
    ipAddress = forwardedIps[0];
  }
  if (!ipAddress) {
    // If request was not forwarded
    ipAddress = req.connection.remoteAddress;
  }
  return ipAddress;
};
