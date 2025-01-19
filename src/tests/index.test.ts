import {describe,it,expect,vi} from "vitest";

import request from "supertest";

import { app } from "..";
import { primsaClient } from "../__mocks__/db";

vi.mock("../db");

describe("POST /sum",()=>{
    it("should return the sum of two numbers",async ()=>{
        vi.spyOn(primsaClient.request,"create");
        
        const res=await request(app).post("/sum").send({a:1,b:2});
        expect(primsaClient.request.create).toBeCalledWith({
            data:{
                a:1,
                b:2,
                answer:3,
                type:"Sum"
            }
        })

        expect  (res.statusCode).toBe(200);
        expect(res.body.answer).toBe(3);
    })
})