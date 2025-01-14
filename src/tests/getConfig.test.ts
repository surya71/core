import { describe, expect, it } from "vitest";
import { GenerateConfig } from "../types/interface.js";
import getConfig from "../generate/helpers/getConfig.js";

const defaultConfig: GenerateConfig = {
    flat: false,
    addIndex: false,
    skipTest: false,
    scopeStyle: false,
    defaultPath: "./src/",
} as const;

describe("Get Arclix Config", () => {
    it("should return config file contents", () => {
        const config = getConfig("./src/mocks/arclix.config.json");
        expect(config).toMatchObject(defaultConfig);
        expect(config).toBeTypeOf("object");
    });

    it("should return null if the config file doesn't exist", () => {
        const config = getConfig("./arclix.config.json");
        expect(config).toBeNull();
    });
});
