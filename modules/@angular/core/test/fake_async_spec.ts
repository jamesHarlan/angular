/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {BaseException} from '@angular/core';
import {discardPeriodicTasks, fakeAsync, flushMicrotasks, tick} from '@angular/core/testing';
import {Log, beforeEach, ddescribe, describe, iit, inject, it, xit} from '@angular/core/testing/testing_internal';
import {expect} from '@angular/platform-browser/testing/matchers';

import {Parser} from '../../compiler/src/expression_parser/parser';

const resolvedPromise = Promise.resolve(null);
const ProxyZoneSpec: {assertPresent: () => void} = (Zone as any)['ProxyZoneSpec'];

export function main() {
  describe('fake async', () => {
    it('should run synchronous code', () => {
      var ran = false;
      fakeAsync(() => { ran = true; })();

      expect(ran).toEqual(true);
    });

    it('should pass arguments to the wrapped function', () => {
      fakeAsync((foo: any /** TODO #9100 */, bar: any /** TODO #9100 */) => {
        expect(foo).toEqual('foo');
        expect(bar).toEqual('bar');
      })('foo', 'bar');
    });

    it('should work with inject()', fakeAsync(inject([Parser], (parser: any /** TODO #9100 */) => {
         expect(parser).toBeAnInstanceOf(Parser);
       })));

    it('should throw on nested calls', () => {
      expect(() => {
        fakeAsync(() => { fakeAsync((): any /** TODO #9100 */ => null)(); })();
      }).toThrowError('fakeAsync() calls can not be nested');
    });

    it('should flush microtasks before returning', () => {
      var thenRan = false;

      fakeAsync(() => { resolvedPromise.then(_ => { thenRan = true; }); })();

      expect(thenRan).toEqual(true);
    });


    it('should propagate the return value',
       () => { expect(fakeAsync(() => 'foo')()).toEqual('foo'); });

    describe('Promise', () => {
      it('should run asynchronous code', fakeAsync(() => {
           var thenRan = false;
           resolvedPromise.then((_) => { thenRan = true; });

           expect(thenRan).toEqual(false);

           flushMicrotasks();
           expect(thenRan).toEqual(true);
         }));

      it('should run chained thens', fakeAsync(() => {
           var log = new Log();

           resolvedPromise.then((_) => log.add(1)).then((_) => log.add(2));

           expect(log.result()).toEqual('');

           flushMicrotasks();
           expect(log.result()).toEqual('1; 2');
         }));

      it('should run Promise created in Promise', fakeAsync(() => {
           var log = new Log();

           resolvedPromise.then((_) => {
             log.add(1);
             resolvedPromise.then((_) => log.add(2));
           });

           expect(log.result()).toEqual('');

           flushMicrotasks();
           expect(log.result()).toEqual('1; 2');
         }));

      it('should complain if the test throws an exception during async calls', () => {
        expect(() => {
          fakeAsync(() => {
            resolvedPromise.then((_) => { throw new BaseException('async'); });
            flushMicrotasks();
          })();
        }).toThrowError('Uncaught (in promise): async');
      });

      it('should complain if a test throws an exception', () => {
        expect(() => {
          fakeAsync(() => { throw new BaseException('sync'); })();
        }).toThrowError('sync');
      });

    });

    describe('timers', () => {
      it('should run queued zero duration timer on zero tick', fakeAsync(() => {
           var ran = false;
           setTimeout(() => { ran = true; }, 0);

           expect(ran).toEqual(false);

           tick();
           expect(ran).toEqual(true);
         }));


      it('should run queued timer after sufficient clock ticks', fakeAsync(() => {
           var ran = false;
           setTimeout(() => { ran = true; }, 10);

           tick(6);
           expect(ran).toEqual(false);

           tick(6);
           expect(ran).toEqual(true);
         }));

      it('should run queued timer only once', fakeAsync(() => {
           var cycles = 0;
           setTimeout(() => { cycles++; }, 10);

           tick(10);
           expect(cycles).toEqual(1);

           tick(10);
           expect(cycles).toEqual(1);

           tick(10);
           expect(cycles).toEqual(1);
         }));

      it('should not run cancelled timer', fakeAsync(() => {
           var ran = false;
           var id = setTimeout(() => { ran = true; }, 10);
           clearTimeout(id);

           tick(10);
           expect(ran).toEqual(false);
         }));

      it('should throw an error on dangling timers', () => {
        expect(() => {
          fakeAsync(() => { setTimeout(() => {}, 10); })();
        }).toThrowError('1 timer(s) still in the queue.');
      });

      it('should throw an error on dangling periodic timers', () => {
        expect(() => {
          fakeAsync(() => { setInterval(() => {}, 10); })();
        }).toThrowError('1 periodic timer(s) still in the queue.');
      });

      it('should run periodic timers', fakeAsync(() => {
           var cycles = 0;
           var id = setInterval(() => { cycles++; }, 10);

           tick(10);
           expect(cycles).toEqual(1);

           tick(10);
           expect(cycles).toEqual(2);

           tick(10);
           expect(cycles).toEqual(3);
           clearInterval(id);
         }));

      it('should not run cancelled periodic timer', fakeAsync(() => {
           var ran = false;
           var id = setInterval(() => { ran = true; }, 10);
           clearInterval(id);

           tick(10);
           expect(ran).toEqual(false);
         }));

      it('should be able to cancel periodic timers from a callback', fakeAsync(() => {
           var cycles = 0;
           var id: any /** TODO #9100 */;

           id = setInterval(() => {
             cycles++;
             clearInterval(id);
           }, 10);

           tick(10);
           expect(cycles).toEqual(1);

           tick(10);
           expect(cycles).toEqual(1);
         }));

      it('should clear periodic timers', fakeAsync(() => {
           var cycles = 0;
           var id = setInterval(() => { cycles++; }, 10);

           tick(10);
           expect(cycles).toEqual(1);

           discardPeriodicTasks();

           // Tick once to clear out the timer which already started.
           tick(10);
           expect(cycles).toEqual(2);

           tick(10);
           // Nothing should change
           expect(cycles).toEqual(2);
         }));

      it('should process microtasks before timers', fakeAsync(() => {
           var log = new Log();

           resolvedPromise.then((_) => log.add('microtask'));

           setTimeout(() => log.add('timer'), 9);

           var id = setInterval(() => log.add('periodic timer'), 10);

           expect(log.result()).toEqual('');

           tick(10);
           expect(log.result()).toEqual('microtask; timer; periodic timer');
           clearInterval(id);
         }));

      it('should process micro-tasks created in timers before next timers', fakeAsync(() => {
           var log = new Log();

           resolvedPromise.then((_) => log.add('microtask'));

           setTimeout(() => {
             log.add('timer');
             resolvedPromise.then((_) => log.add('t microtask'));
           }, 9);

           var id = setInterval(() => {
             log.add('periodic timer');
             resolvedPromise.then((_) => log.add('pt microtask'));
           }, 10);

           tick(10);
           expect(log.result())
               .toEqual('microtask; timer; t microtask; periodic timer; pt microtask');

           tick(10);
           expect(log.result())
               .toEqual(
                   'microtask; timer; t microtask; periodic timer; pt microtask; periodic timer; pt microtask');
           clearInterval(id);
         }));
    });

    describe('outside of the fakeAsync zone', () => {
      it('calling flushMicrotasks should throw', () => {
        expect(() => {
          flushMicrotasks();
        }).toThrowError('The code should be running in the fakeAsync zone to call this function');
      });

      it('calling tick should throw', () => {
        expect(() => {
          tick();
        }).toThrowError('The code should be running in the fakeAsync zone to call this function');
      });

      it('calling discardPeriodicTasks should throw', () => {
        expect(() => {
          discardPeriodicTasks();
        }).toThrowError('The code should be running in the fakeAsync zone to call this function');
      });
    });

    describe('only one `fakeAsync` zone per test', () => {
      let zoneInBeforeEach: Zone;
      let zoneInTest1: Zone;
      beforeEach(fakeAsync(() => { zoneInBeforeEach = Zone.current; }));

      it('should use the same zone as in beforeEach', fakeAsync(() => {
           zoneInTest1 = Zone.current;
           expect(zoneInTest1).toBe(zoneInBeforeEach);
         }));
    });
  });

  describe('ProxyZone', () => {
    beforeEach(() => { ProxyZoneSpec.assertPresent(); });

    afterEach(() => { ProxyZoneSpec.assertPresent(); });

    it('should allow fakeAsync zone to retroactively set a zoneSpec outside of fakeAsync', () => {
      ProxyZoneSpec.assertPresent();
      var state: string = 'not run';
      const testZone = Zone.current.fork({name: 'test-zone'});
      (fakeAsync(() => {
        testZone.run(() => {
          Promise.resolve('works').then((v) => state = v);
          expect(state).toEqual('not run');
          flushMicrotasks();
          expect(state).toEqual('works');
        });
      }))();
      expect(state).toEqual('works');
    });
  });
}
