Functor
===============================================================================
A functor is simply a type that can be "mapped" over.  The canonical example
is mapping over a list to convert strings to integers, as in
`["1", "2", "3"].map( x => Number.parseInt(x) )`.  Though it should be stated
that this package DOES NOT alter any built-in types.

Not every type can, or should, be mappable, but many unexpected types can be
mapped.  For instance, any Monad can be mapped over.  Consider that a Monad
is fundamentally a kind of container, and we can change whatever is inside
that monad with fmap.

All in all, it's not expected that the causual user will ever need to implement
a functor directly.  Rather, most users will almost always consume functors
without realizing it.  Authors of libraries that provide functional types
though, will likely find this library handy.



Quickstart
-------------------------------------------------------------------------------
Install with:
```
npm install --save fts-maybe
```


Import with:
```
import * as Functor from 'fts-functor';
```



Simple class implementing a functor:
```
import * as Functor from "../Functor";

class TestContainer<V> implements Functor.Functor<V> {
    constructor(readonly value: V){}

    fmap<Vo>(fmapFunction: Functor.FmapFunction<V, Vo>): TestContainer<Vo> {
        return new TestContainer<Vo>( fmapFunction(this.value) );
    }
}
```

Note, that fmap accepts a function.  The function it accepts returns a new
value, which will be placed in a new container class of potentially a new type.




And here is some code that uses fmap:
```
const stringTc = new TestContainer<string>("12")
const numberTc = stringTc.fmap( (value: string) => Number.parseInt(value) );
```
