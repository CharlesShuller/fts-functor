/*
 * Copyright 2019 Charles Shuller
 *
 * This file is part of fts-functor.
 *
 * fts-functor is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * fts-functor is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with fts-functor.  If not, see <https://www.gnu.org/licenses/>.
*/

import * as Functor from "../Functor";

class TestContainer<V> implements Functor.Functor<V> {
    constructor(readonly value: V){}

    fmap<Vo>(
        fmapFunction: Functor.FmapFunction<V, Vo>
    ): TestContainer<Vo> {
        return new TestContainer<Vo>( fmapFunction(this.value) );
    }
}





test("Can be implemented", () => {
    const tc = new TestContainer<string>("Hello");

    expect(tc.value).toBe("Hello");
});


test("Fmap can be called returning the same functor type", () => {
    const tc =
        new TestContainer<string>("Hello")
	.fmap( (value: string) => value + " World" );

    expect(tc.value).toBe("Hello World");
});


test("Fmap can be called returning a different functor type", () => {
    const tc =
        new TestContainer<string>("12")
	.fmap( (value: string) => Number.parseInt(value) );

    expect(tc.value).toBe(12);
});
