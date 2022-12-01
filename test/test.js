/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var NINF = require( '@stdlib/constants-float64-ninf' );
var kurtosis = require( './../lib' );


// FIXTURES //

var data = require( './fixtures/julia/data.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof kurtosis, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for `sigma`, the function returns `NaN`', function test( t ) {
	var sigma = kurtosis( NaN );
	t.equal( isnan( sigma ), true, 'returns NaN' );
	t.end();
});

tape( 'if provided a scale `sigma` that is not a nonnegative number, the function returns `NaN`', function test( t ) {
	var sigma;

	sigma = kurtosis( -1.0 );
	t.equal( isnan( sigma ), true, 'returns NaN' );

	sigma = kurtosis( NINF );
	t.equal( isnan( sigma ), true, 'returns NaN' );

	t.end();
});

tape( 'the function returns the excess kurtosis of a Rayleigh distribution', function test( t ) {
	var expected;
	var sigma;
	var i;
	var y;

	expected = data.expected;
	sigma = data.sigma;
	for ( i = 0; i < expected.length; i++ ) {
		y = kurtosis( sigma[i] );
		t.equal( y, expected[i], 'sigma: '+sigma[i]+', y: '+y+', expected: '+expected[i] );
	}
	t.end();
});
