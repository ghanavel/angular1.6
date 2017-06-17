'use strict';

angular.module('app').service('Envconfig', function () {

    var _environments = {
        local: {
            config: {
                /**
                 * Add any config properties you want in here for this
                 * environment
                 */
                host: 'http://192.168.1.3:8080/HelloWorld/',
                home: 'http://localhost/app',
                homeNonSsl: 'http://localhost/app',
               
                appId: '',
                payment: ''
            }
        },
        test: {
            config: {
                /**
                 * Add any config properties you want in here for this
                 * environment
                 */
                host: '',
                home: '',
                homeNonSsl: '',
                
                appId: '',
                payment: ''
            }
        },
        uat: {
            config: {
                /**
                 * Add any config properties you want in here for this
                 * environment
                 */
                host: '',
                home: '',
                homeNonSsl: '',
                appId: '',
                
            }
        },
        dev: {
            config: {
                /**
                 * Add any config properties you want in here for this
                 * environment
                 */
                host: '',
                home: '',
                
                
            }
        },
        prod: {
            config: {
                /**
                 * Add any config properties you want in here for this
                 * environment
                 */
                host: 'https://www.onthedot.com/MyDeliveryPortal',
                home: 'https://www.onthedot.com/app',
                homeNonSsl: 'http://www.onthedot.com/app',
                retailerHome: 'https://retailer.onthedot.com/retailer',
                consumerHome: 'https://www.onthedot.com/app',
                appId: '1575137759428947',
                payment: 'https://hpp.realexpayments.com/pay'
            }
        }
    }, _environment;

    return {
        get: function (property) {
            return _environments['local'].config[property];
        }
    }
});