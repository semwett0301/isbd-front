export function getWorldId(instance) {
    return () => instance.get("/semen")
}

export function getWorld(instance, id) {
    return () => instance.get(`/world/${id}`)
}


