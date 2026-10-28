import test from "node:test";import assert from "node:assert/strict";import {score,eligible,classify,MAX_SCORE} from "../src/scoring.js";
test("maximum is 100",()=>assert.equal(MAX_SCORE,100));
test("all high options score 100",()=>assert.equal(score(Array(9).fill(0)),100));
test("zero options score zero",()=>assert.equal(score([1,3,1,2,3,1,1,1,3]),0));
test("threshold inclusive",()=>{const a=[0,3,0,0,3,1,1,1,3];assert.equal(score(a),41);assert.equal(classify(a).meets,false);});
test("missing answers cannot classify",()=>{assert.equal(score([]),null);assert.equal(score(Array(9).fill(-1)),null);});
test("eligibility requires all inclusions and no exclusions",()=>{assert.equal(eligible([true,true,true],[false,false,false,false]),true);assert.equal(eligible([true,false,true],[false,false,false,false]),false);assert.equal(eligible([true,true,true],[false,true,false,false]),false);});
