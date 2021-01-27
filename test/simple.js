var mlog = require('..');

mlog.log('This is .log()');
mlog.info('This is .info()');
mlog.pending('This is .pending()');
mlog.success('This is .success()');
mlog.warn('This is .warn()'); //.warning is also an alias
mlog.error('This is .error()');

mlog.level(3).log('This is a deep .log()')
