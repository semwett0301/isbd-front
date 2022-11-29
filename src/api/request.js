import {getWorldId} from "./modules/worldModule";
import {instance} from "./instance";

export const request = {
    getWorldId: getWorldId(instance)
}
