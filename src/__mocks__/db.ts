import { vi } from "vitest";
import { PrismaClient } from "@prisma/client";
export const primsaClient= {
    request:{
        create:vi.fn(),
        findMany:vi.fn(),
        findFirst:vi.fn(),
    }
}
