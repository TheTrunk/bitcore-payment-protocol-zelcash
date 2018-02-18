'use strict';

var spec = {
  name: 'PaymentProtocol',
  message: 'Internal Error on bitcore-payment-protocol-zelcash Module: {0}'
};

module.exports = require('bitcore-lib-zelcash').errors.extend(spec);
