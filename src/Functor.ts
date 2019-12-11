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


/**
 * An fmap function accepts a single argument of type Vi, and
 * returns a value of type Vo.
 */
export interface FmapFunction<Vi, Vo> {
    (originalValue: Vi): Vo;
}


/**
 * A Functor is a type which can be mapped over.  More specifically, any
 * type which implements fmap.
 */
export interface Functor<V> {
    fmap<Vo>( fmapFunction: FmapFunction<V, Vo> ): Functor<Vo>;
}
