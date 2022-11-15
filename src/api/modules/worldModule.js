export function getWorldId(instance) {
    return () => instance.get("/getWorldId")
}

export function newYear(instance) {
    return (id) => instance.get("/")
}
